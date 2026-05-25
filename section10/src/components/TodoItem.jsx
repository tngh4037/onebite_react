import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={isDone}
        onChange={onChangeCheckbox}
        readOnly
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// [ memo 의 콜백함수를 이용한 최적화 ]
/*
// export default TodoItem;

export default memo(TodoItem, (prevProps, nextProps) => {
  // true 반환: props 가 바뀌지 않았으니 리랜더링 하지마라.
  // false 반환: props 가 바뀐거같으니 리랜더링 해라.
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});

// 이제 TodoItem 가 받고있는 Props가 변경되지 않았다면 리랜더링되지 않는다.
// 객체타입의 값을 props 로 받고있는 컴포넌트는? memo 메서드만 적용한다고 해서, 최적화가 제대로 이루어지기 어렵다. ( 부모에서 랜더링 될 때 함수도 새로 생기기 때문이다. 따라서 위 예시에서는 부모가 리랜더링 될 때 마다 onUpdate 와 onDelete 는 새로생성되므로 당연히 주솟값이 달라졌기에 Props 가 변경되었다고 판단한다. )
// ㄴ 이럴때는 2가지 방법을 이용할 수 있다.
//      ㄴ 1) useCallback 을 이용해서, 함수 자체도 메모리제이션해서 리랜더링이 되더라도 다시 생성되지 않도록 방지하는 방법
//      ㄴ 2) memo 함수의 두번째 인자에 콜백함수를 전달해서, 최적화 기능을 커스터마이징 해주는 것이다.
//            ㄴ 콜백함수를 생략하면, 부모컴포넌트가 리랜더링 될 때 마다, 컴포넌트의 props 가 달라졌는지에 대한 비교를 memo 함수에 맡기지만,
//            ㄴ 콜백함수를 작성하면, 부모컴포넌트가 리랜더링 될 때 마다, 컴포넌트의 props 가 달라졌는지에 대한 비교를 콜백함수에 맡긴다.
*/

export default memo(TodoItem);
