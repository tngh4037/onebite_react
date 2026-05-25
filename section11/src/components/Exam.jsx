import { useReducer } from 'react';

// reducer: 변환기
// ㄴ 상태를 실제로 변화시키는 변환기 역할을 하는 함수
// reducer(state, action): state: state 값이 전달되고, dispatch 함수 호출시 전달했던 인수(액션객체)가 두 번째 인자로 전달된다.
function reducer(state, action) {
  console.log(state);
  console.log(action);

  // return 으로 변경시킬 state 값을 반환해주면 된다.
  if (action.type === 'INCREASE') {
    return state + action.data;
  } else if (action.type === 'DECREASE') {
    return state - action.data;
  }

  return state;
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0); // dispatch : 상태변화를 요청하기만 하는 함수 (= 상태 변화가 있어야 한다는 사실을 알리는/발송하는 함수) ( dispatch 함수를 호출하게 되면 상태 변화가 요청이 되고, useReducer 는 상태 변화를 실제 처리하게될 함수를 호출한다. 그 함수를 직접 만들어서 useReducer 에 넣어주면 된다. )

  const onClickPlus = () => {
    // dispatch(액션객체)
    // ㄴ 액션객체: 상태가 어떻게/얼마나 변화되길 원하는지 기록된 객체를 의미.
    dispatch({
      type: 'INCREASE', // 상태를 어떻게 변화시키길 원하는지
      data: 1, // 얼마나 변화시키길 원하는지
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: 'DECREASE',
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button> {/*버튼 클릭시 상태변화요청*/}
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
