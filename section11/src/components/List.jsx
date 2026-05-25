import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => {
  // List 컴포넌트에서는 todos만 사용
  const todos = useContext(TodoStateContext);

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

  const { totalCount, doneCount, notDoneDount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneDount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneDount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List ✔️</h4>
      <div>total: {totalCount}</div>
      <div>doneCount: {doneCount}</div>
      <div>notDoneDount: {notDoneDount}</div>

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
              /*onUpdate={onUpdate}*/
              /*onDelete={onDelete}*/
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
