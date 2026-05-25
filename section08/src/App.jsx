import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos 중에 targetId 와 일치하는 id를 갖는 아이템의 isDone 을 변경해서 새로운 배열 적용
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  const onDelete = (targetId) => {
    // todos 중에 targetId 와 일치하는 id를 갖는 아이템을 제외한 새로운 배열 적용
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;

/*
- React에서 배열이나 객체 형태의 State를 업데이트할 때 기존 State를 직접 수정하지 않고 새로운 State를 만들어 사용하는 이유는 무엇인가요?
- React의 State 변경 감지 및 리렌더링 동작
- React는 State 객체/배열의 '참조'가 변경될 때 리렌더링을 결정합니다. 새 객체/배열을 만들면 참조가 달라져 React가 변경을 감지하고 UI를 업데이트합니다.
*/

/*
- App 컴포넌트에 있는 State 변경 함수(예: `setTodos`)를 자식 컴포넌트(예: Editor, TodoItem)에서 호출하려면 어떻게 해야 할까요?
  - Props를 통해 전달
  - React에서 부모 컴포넌트의 함수를 자식 컴포넌트가 실행하려면 Props를 통해 해당 함수 자체를 자식에게 전달해야 합니다. 자식은 전달받은 Props 함수를 호출합니다.
*/
