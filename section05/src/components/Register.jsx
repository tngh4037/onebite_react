// [ 회원가입 폼 ]
// 이름, 생년월일, 국적, 자기소개
import { useState, useRef } from 'react';

let count = 0; // 컴포넌트 외부에 변수를 선언하는 것은 지양하는 것이 좋다.

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const inputRef = useRef();

  const onChange = (e) => {
    count++;
    console.log(count); // 계속 1이 나온다. ( onChange() 가 호출되면서 State 값이 변경되고 컴포넌트가 리랜더링 되면서, 지역변수 count도 초기화되기 때문이다. )

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if (input.name === '') {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          onChange={onChange}
          name="name"
          value={input.name}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          type="date"
          name="birth"
          onChange={onChange}
          value={input.birth}
        />
      </div>
      <div>
        <select onChange={onChange} name="country" value={input.country}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea value={input.bio} name="bio" onChange={onChange}></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
