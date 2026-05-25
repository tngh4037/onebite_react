// [props]
// 넘겨준 props 의 값은 객체 형태로 전달된다.
// props에서 전달되지 않은 프로퍼티 출력시 아무것도 출력되지 않는다. ( undefined 이라 생각하자. )
// ㄴ 주의) 그러면 특정 프로퍼티가 전달되지 않았는데, 마치 전달된 것 처럼 프로퍼티.toUpperCase() 와 같이 사용한다면 ,오류가 발생한다.
//    ㄴ 그래서 만약 넘겨준 props 의 특정 프로퍼티 값에 대한 기본값을 설정하려면 구조분해할당 문법으로 각각 받아주면서 기본값을 설정하면 된다.
const Button = ({ text, color = 'black', children }) => {
  // [eventHandling]
  // 이벤트 객체: React에서 발생하는 모든 이벤트들은 이벤트핸들러 함수를 호출할 때, 인자로 이벤트객체하는 것을 제공한다.
  // 이때 이벤트 객체로 전달되는 객체는 SyntheticBaseEvent 객체이다.
  // ㄴ 크로스브라우징을 해결하기 위해, 모든 브라우저에서의 이벤트 객체를 하나로 통일한 형태의 객체이다. ( 여기에는 발생한 이벤트와 관련한 모든 정보를 확인할 수 있다. )
  const onClickButton = (e) => {
    console.log(e);
  };

  return (
    <>
      <button style={{ color: color }} onClick={onClickButton}>
        {text} - {color.toUpperCase()}
        {children}
      </button>
    </>
  );
};

export default Button;
