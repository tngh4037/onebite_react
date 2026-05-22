// ===================== [ 함수선언문 ] ====================
function funcA() {
  console.log('funcA');
}

// funcA 를 호출해서 그 결과값을 변수에 담은게 아니라, funcA 라는 함수 자체를 담았다.
// 자바스크립트에서는 함수도, 문자나 숫자처럼 '값'으로 취급한다. 따라서 함수 자체도 변수에 담아놓을 수 있다.
let varA = funcA;
console.log(varA);
varA(); // 변수에 담은 함수를, 해당 "변수명()" 을 통해 호출할 수 있다.

// ================ [ 함수표현식: 함수를 변수에 저장 ] =========
// 1) 함수를 만들면서 변수에 담아버리는 것 또한 가능하다. (= 값으로써 함수를 생성/정의하는 방식)
// 규칙: 다만, 이렇게 함수를 만들면 funcB는 값으로써만 쓰인다는 의미이므로 funcB() 로 호출할 수는 없다.
var varB = function funcB() {
  console.log('funcB');
};
// funcB(); // funcB is not defined

// 2) 따라서, 함수 이름으로 호출하지 못하기 때문에, 이런 경우는 이름을 생략(익명함수)하는 경우가 많다. (문제되지 않음)
var varC = function () {
  console.log('funcC');
};

// 3) 함수표현식으로 만든 함수들은 호이스팅의 대상이 되지 않는다. 따라서 선언보다 먼저 호출될 수 없다.
// varD(); // Uncaught ReferenceError: Cannot access 'varD' before initialization
let varD = function () {
  console.log('funcD');
};

// ==========================================================
// ===== [ 화살표함수: 함수를 간결하게 정의하기 ] =====
// 함수를 더욱 간결하게 생성할 수 있도록 돕는 자바스크립트 문법
let simpleFunc1 = () => {
  return 1;
};
console.log(simpleFunc1());

let simpleFunc2 = () => 1; // 본문이 한줄이라면 중괄호({})와 return 생략가능
console.log(simpleFunc2());

let simpleFunc3 = (value) => value + 1;
console.log(simpleFunc3(1));

// 참고) '함수 선언식'과 '함수 표현식'의 주요 차이점 중 '호이스팅'과 관련된 것은 무엇일까요?
// : 함수 선언식은 호이스팅되어 코드 위치와 상관없이 미리 호출 가능해요. 함수 표현식은 변수 할당처럼 해당 코드 줄에 도달해야 호출 가능하답니다.
