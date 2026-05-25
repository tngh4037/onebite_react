import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

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

  // 최적화 - useMemo
  // - 두 번째 인수로 전달하는 의존성 배열(deps)에 값이 변경될 경우에만, 첫 번째 인수로 전달한 콜백함수를 실행한다.
  // - 참고) 콜백함수에서 return 되는값을 받아서 사용할 수도 있다.
  // - 참고) deps 를 [] 빈 배열로 하면, 최초 랜더링될때만 수행 후 이후에는 수행되지 않는다.
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
