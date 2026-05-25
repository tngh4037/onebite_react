import './List.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List ✔️</h4>

      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />

      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
// jsx 에서 배열에 담긴 값을 반복적으로 리스트형태로 랜더링하려면 배열의 map() 메서드를 이용하면 된다.

// 리액트에서는 내부적으로 리스트 형태를 요소로 풀 때, 그 요소가 '컴포넌트'인 경우, 각 요소를 key 라는 prop 으로 구분한다.

/*
- React에서 배열 데이터를 기반으로 여러 컴포넌트나 엘리먼트 목록을 화면에 렌더링할 때 사용되는 배열 메소드와 각 항목에 반드시 설정해야 하는 속성은 무엇일까요?
  - map, key 속성
  - 배열 데이터를 UI 목록으로 변환할 때는 `map` 메소드가 일반적입니다. React가 목록 변화를 추적하고 효율적으로 업데이트하도록 각 항목에 고유한 `key` prop을 설정해야 합니다.
*/
