import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);

  // [ 1. 마운트: 탄생 ]
  // - 마운트를 useEffect를 통해 제어하는 방법
  useEffect(() => {
    console.log('mount');
  }, []); // useEffect 는 deps에 있는 배열값이 변경되어야 이후에 계속 콜백함수가 수행되는데, 배열에 아무것도 넣지않으면, 결국 App 컴포넌트가 최초 실행될 때(마운트 될 때) 이후에는 다시는 실행되지 않음.

  // [ 2. 업데이트: 변화, 리랜더링 ]
  // - 두번째 인자인 deps 를 생략하면, 마운트 시점에 한 번 실행된 다음에, 컴포넌트가 리랜더링 될 때 마다 계속 실행된다.
  // 참고) 만약 마운트 시점은 제외하고 싶다면?
  //  ㄴ 현재 컴포넌트가 마운트 되었는지 안되었는지 체크하는 변수를 useRef 를 통해 하나 만들어주면 된다.
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    console.log('update');
  });

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </section>
        <section>
          <Viewer count={count} />
          {count % 2 === 0 ? <Even /> : null}
        </section>
        <section>
          <Controller onClickButton={onClickButton} />
        </section>
      </div>
    </>
  );
}

export default App;
