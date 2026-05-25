import './App.css';

// [ App 컴포넌트 ]
// 참고) <>..</> : 리턴하는 html의 상위 노트가 하나라면 안써도 되지만, 여러개라면 써야함.
// 참고) 특정 컴포넌트의 리턴문에 포함되는 컴포넌트(여기서는 Header, Main, Footer): 자식 컴포넌트라고 부른다.
//  ㄴ 그걸 부르고 있는 컴포넌트(App) : 부모컴포넌트
// 정리) 리액트의 모든 컴포넌트들은 화면에 랜더링되기 위해선, App 컴포넌트(계층구조상이지 이름이 반드시 App이어야 하는건아님)의 자식 컴포넌트로 존재해야한다. ( 모든 리액트 컴포넌트들은 App 컴포넌트를 최상위 조상으로 갖는 계층구조를 가진다. 그리고 그 계층구조의 최상위인 App 컴포넌트를 Root 컴포넌트라고도 부른다. )
//  ㄴ Root 컴포넌트는 Main.jsx 의 render 메서드에 인수로써 전달되는 컴포넌트이다.
//  ㄴ 관례상 Root 컴포넌트의 이름을 App 으로 한다.
/*
import Header from './components/Header'; // 확장자(jsx) 생략 가능
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  const bottonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...bottonProps} />
      <Button text={'카페'} />
      <Button text={'블로그'}>
        <div>자식 요소</div>
      </Button>
    </>
  );
}
*/

// ===========================================================================================

// 컴포넌트에서 State 를 생성하려면, React 가 제공하는 내장 함수인 useState 를 사용해야 한다.
/*
useState 에는 2가지 요소를 가지는 배열이 들어있다.
- 1) State 값 (useState 를 호출할때 인자로 초기값을 지정할수있고, 지정안하면 undefined)
- 2) State 값을 변경시키는 함수 (상태를 변화시키는 함수) (-> 상태변화함수라고 부른다.)
  ㄴ 상태변화함수를 호출하면서 인자로 값을 넣어주면, State 값이 변경된다.
  ㄴ 그러면 React는 해당 컴포넌트의 State의 변경을 감지해서 해당 컴포넌트를 다시 랜더링(리랜더링)한다. 즉, 해당 함수를 다시 호출하여 화면을 다시 그린다.
    ㄴ 다시 호출하면, const [state, setState] = useState(0); 에서 0을 1로 자동으로 반영한다.
*/
/*
import { useState } from 'react';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
*/

// ===========================================================================================

/*
import { useState } from 'react';
import Register from './components/Register';

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;
*/

// ===========================================================================================

import { useState } from 'react';
import HookExam from './components/HookExam';

function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

export default App;
