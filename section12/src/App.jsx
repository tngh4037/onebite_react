import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

import { useReducer, useRef, useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// 상태변화코드 외부 분리
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE': {
      nextState = [action.data, ...state];
      break;
    }
    case 'UPDATE': {
      nextState = state.map((item) => {
        return String(item.id) === String(action.data.id) ? action.data : item;
      });
      break;
    }
    case 'DELETE': {
      nextState = state.filter((item) => {
        return String(item.id) !== String(action.id);
      });
      break;
    }
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(nextState));

  return nextState;
}

// 상태와 상태변화함수를 자식컴포넌트들이 공유할 수 있도록 Context 설정
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedData,
    });

    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate, // createdDate: createdDate 와 동일 ( 변수 이름과 key 이름 같을 때 생략가능 )
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  // data 를 먼저 다 채운 다음에 랜더링되도록 하기 위해서 isLoading 적용.
  // data 를 아직 채 다 채우기 전인, 초기값인 빈 배열 상태가 됨.
  // 이 상태에서 Edit 이나 Diary 컴포넌트 페이지에서 해당 컴포넌트가 먼저 랜더링되는 경우, "존재하지 않는 일기입니다." alert 이 나옴.
  // ㄴ e.g. 상세 / 수정페이지에서 새로고침시
  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
