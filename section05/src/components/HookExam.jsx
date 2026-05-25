// Hook 관련 3가지 팁
// 1. Hook 은 반드시 함수 컴포넌트 혹은 커스텀 훅 내부에서만 호출이 가능하다.
// 2. 조건문이나 반복문 내부에서 호출될 수는 없다.
// 3. 나만의 Hook(커스텀 훅)을 직접 만들 수 있다.

import { useState } from 'react';
import useInput from './../hooks/useInput';

// const state = useState(); // 1. 컴포넌트 바깥에서 Hook 사용시 오류

const HookExam = () => {
  /* 
  // 2. 조건문이나 반복문 내부에서 호출될 수는 없다.
  if (true) {
    const state = useState();
  }

  for (;;) {
    const state = useState();
  }
  */

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <>
      <div>hookexam</div>
      <div>
        <input value={input} onChange={onChange} />
        <input value={input2} onChange={onChange2} />
      </div>
    </>
  );
};

export default HookExam;
