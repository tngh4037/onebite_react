// 스코프: 변수나 함수에 접근하거나 호출할 수 있는 범위를 말 함.
// ㄴ 전역스코프: 전체 영역에서 접근 가능
// ㄴ 지역소코프: 특정 영역에서만 접근 가능
// ====================================================================

// 완전히 바깥에 선언한 경우: 전역스코프를 가짐
let a = 1;

// b는 funcA 안에서만 접근 가능: 지역스코프를 가짐
function funcA() {
  let b = 3;
}
// console.log(b); // Uncaught ReferenceError: b is not defined

// c는 블록안에서만 유효함: 지역스코프를 가짐
if (true) {
  let c = 1;
}
// console.log(c); // Uncaught ReferenceError: c is not defined

// ====================================================================

// [ 함수선언식의 경우: 함수 블록 안에서만 지역스코프를 갖는다. ]
// 1) 함수 내부에 선언된 함수도 외부에서 호출할 수 없다. (지역스코프를 가짐)
function A() {
  function B() {}
}
// B(); // Uncaught ReferenceError: B is not defined

// 2) 조건문이나 반복문내에서는 지역스코프를 갖지 않는다. ( 일반적으로 이런 케이스는 잘 사용하진 않음. )
for (let i = 0; i < 3; i++) {
  function funcB() {}
}
funcB(); // 호출 가능
