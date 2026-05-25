import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/Exam';
import { useState, useRef, useReducer, useCallback } from 'react';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'Java 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'Spring 공부하기',
    date: new Date().getTime(),
  },
];

function reducer(todos, action) {
  if (action.type === 'CREATE') {
    return [action.data, ...todos];
  } else if (action.type === 'UPDATE') {
    return todos.map((todo) => {
      if (todo.id === action.targetId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });
  } else if (action.type === 'DELETE') {
    return todos.filter((todo) => todo.id !== action.targetId);
  } else {
    return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  /*
  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };
  */

  // useCallback(최적화하고싶은/불필요하게 재생성하고싶지않은 함수, deps)
  // ㄴ 첫번째 인자로 전달한 콜백함수를 그대로 생성해서 반환해준다.
  // const func = useCallback(() => {}, []); // deps 가 변경되었을때만 콜백함수실행 ( deps 를 빈배열로 설정하면, 컴포넌트가 최초에 랜더링될때만(마운트 시점에만) 수행 )
  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  // 이제 onCreate, onUpdate, onDelete 는 컴포넌트가 마운트된 이후에는 재생성되지 않는다.

  return (
    <div className="App">
      {/* <Exam />*/}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
