// 참고) 커스텀 훅은 컴포넌트와 같은 파일에 두기보다는, src/hooks 라는 별도의 폴더를 만들어서 거기에 hook 의 이름으로 파일을 만들어서 보관하는게 일반적이다.

// 3. 나만의 Hook(커스텀 훅)을 직접 만들 수 있다.
import { useState } from 'react';

function useInput() {
  // getInput 과 같은 메서드명을 사용하면서 내부에서 Hook 을 사용하면 오류가 발생한다. 위 1. 에 어긋나기 때문이다. 따라서 커스텀 훅이라는 것을 React가 알게해줘야 하는데, 이 방법은 비교적 간단하다. 함수 이름 앞에 "use" 키워드를 작성하면, react 는 내부적으로 이걸 커스텀 훅으로 판단하고, 오류가 발생하지 않는다.
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
