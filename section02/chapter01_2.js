// 1) Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = '';
let f7 = 0n; // 참고) 0n은 JavaScript의 BigInt 타입. (아주 큰 값까지 표현 가능)

if (!f1 && !f2 && !f3 && !f4 && !f5 && !f6 && !f7) {
  console.log('falsy');
}

// 2) Truty한 값 (7가지의 Falsy한 값을 제외한 모든 값)
let t1 = 'hello';
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1 && t2 && t3 && t4 && t5) {
  console.log('truty');
}

console.log('=============================================');

// 3) 활용 예시
// ㄴ 객체 프로퍼티에 접근하기 위해서, undefined 와 null 체크를 먼저해주어야 값이 없거나 정의되지 않았을때 오류가 나지 않음.
function printName(person) {
  if (person === undefined) {
    return;
  }

  if (person === null) {
    return;
  }

  // console.log(person.name); // error
}

let person1;
printName(person1); // undefined 에 .(점)을 찍어서 프로퍼티 읽으려고 하면 오류가 발생한다.

let person2 = null;
printName(person2); // null 에 .(점)을 찍어서 프로퍼티 읽으려고 하면 오류가 발생한다.

console.log('=============================================');

// 4) 활용 예시
function printName2(person) {
  if (!person) {
    console.log('person 의 값이 없음');
    return;
  }

  console.log(person.name);
}

let person_ = { name: 'kim' };
printName2(person_);

let person1_;
printName2(person1_);

let person2_ = null;
printName2(person2_);
