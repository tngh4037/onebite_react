import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    createdDate: new Date('2026-05-27').getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date('2026-05-26').getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createdDate: new Date('2026-04-30').getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
];

// 상태변화코드 외부 분리
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => {
        return String(item.id) === String(action.data.id) ? action.data : item;
      });
    case 'DELETE':
      return state.filter((item) => {
        return String(item.id) !== String(action.id);
      });
    default:
      return state;
  }
}

// 상태와 상태변화함수를 자식컴포넌트들이 공유할 수 있도록 Context 설정
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

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
