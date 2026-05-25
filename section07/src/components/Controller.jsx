const Controller = ({ onClickButton }) => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            onClickButton(-1); // 인수(-1)를 전달해줘야 하기에 화실표함수에서 호출하는 식으로 구현했다.
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            onClickButton(-10);
          }}
        >
          -10
        </button>
        <button
          onClick={() => {
            onClickButton(-100);
          }}
        >
          -100
        </button>
        <button
          onClick={() => {
            onClickButton(100);
          }}
        >
          +100
        </button>
        <button
          onClick={() => {
            onClickButton(10);
          }}
        >
          +10
        </button>
        <button
          onClick={() => {
            onClickButton(1);
          }}
        >
          +1
        </button>
      </div>
    </>
  );
};

export default Controller;
