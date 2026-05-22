// 자료형(Type)은 (동일한 성격의 데이터) 집합이다.
// 1) 기본형타입 또는 원시타입(Number, String, Boolean, Null, Undefined)
// 1-1) Number Type
let num1 = 27;
let num2 = 1.5; // 실수도 Number Type 에 포함됨
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(typeof num1);

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN; // 숫자 연산이 실패한 경우 반환되는 값
console.log(1 * 'hello');

// 1-2) String Type
let myName = 'KIM';
// 문자열에 대해 덧셈 연산 제공
let myLocation = 'SEOUL';
let intro = myName + myLocation;
console.log(intro);

// 백틱을 이용해서 문자열을 만들 수 있음.
let intro2 = `SUHO`;
let intro3 = `${myName}은 ${myLocation}에 거주합니다.`; // 백틱을 사용하면 변수 값을 넣어줄 수 있음 => "템플릿 리터럴 문법" 이라고 한다.
console.log(intro3);

// 1-3) Boolean Type
let isEmpty = false;
let isOn = true;

// 1-4) Null Type
// Null => 아무것도 없다. (프로그래머가 의도적으로 "값이 없음"을 나타내기(표현하기) 위해 명시적으로 할당한 값)
let addr = null;

// 1-5) Undefined Type
// Undefined => 아직 정의하지 않았다. (아직 아무런 값이 할당되지 않았을때 자동으로 들어가는 값.)
let birth = undefined;
let none;
console.log(birth);
console.log(none);

// ===================================================
// 2) 객체타입(Object -> Array, Function, RegexExp)
// 이후에 학습
