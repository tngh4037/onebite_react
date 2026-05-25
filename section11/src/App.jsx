import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/Exam';
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from 'react';

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

// Context 는 일반적으로 컴포넌트 외부에 선언한다.
// Context 객체를 console 로 보면, 여러 속성이 있는데, 우리가 알아야 할 것은 Provider(공급자) 이다.
// - Provider: 해당 Context 가 공급할 데이터를 설정하거나, Context 에 데이터를 공급받을 컴포넌트를 설정하기 위한 프로퍼티이다.
// - Provider 는 사실 컴포넌트이다.
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

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

  // TodoDispatchContext 가 제공하는 값을 최초 랜더링한 이후, 리랜더링시에는 변경되지 않도록
  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, []);

  return (
    <div className="App">
      {/* <Exam />*/}
      <Header />

      {/* Provider 가 리랜더링되면 value 로 전달한 props 는 다시 생성된다. 따라서 onCreate, onUpdate, onDelete 함수는 다시 생성되는 대상이 아니므로, memo를 사용해서 최초 마운트시점 이후에는 변경되지 않도록 했다.  */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
