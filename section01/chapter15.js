// 객체(Object) 란?
// ㄴ 원시 타입이 아닌 객체 타입의 자료형
// ㄴ 여러가지 값을 동시에 저장할 수 있는 자료형을 의미
// ===========================================================
// 1) 객체를 생성하는 두가지 방법
// 1-1) 객체 생성자 (내장함수 이용)
let obj1 = new Object();

// 1-2) 객체리터럴 (중괄호 사용) (권장)
let obj2 = {};
let person = {
  name: 'kim',
  age: 34,
  hobby: 'volleyball',
};

// ===========================================================
// 2) 객체 프로퍼티를 다루는 방법
// 2-1) 프로퍼티 접근법 (점 표기법, 괄호 표기법)
let name1 = person.name; // 점 표기법
let name2 = person['name']; // 괄호 표기법
console.log(name1);
console.log(name2);
console.log(person.anonymous); // 존재하지 않는 프로퍼티 조회 시,오류가 발생하진 않고 undefined 가 반환된다.
console.log(person['anonymous']);

let propertyName = 'hobby';
let hobby = person[propertyName];
console.log(hobby);

// 3) 새로운 프로퍼티를 추가하는 방법 ( 점 표기법, 괄호 표기법 )
person.job = 'developer';
person['favoriteFood'] = 'pizza';
console.log(person);

// 4) 프로퍼티를 수정하는 방법 ( 점 표기법, 괄호 표기법 )
person.job = 'student';
person['favoriteFood'] = 'sandwich';
console.log(person);

// 5) 프로퍼티를 삭제하는 방법 ( delete 연산자 )
delete person.job;
delete person['favoriteFood'];
console.log(person);

// 6) 프로퍼티의 존재유무를 확인하는 방법 ( in 연산자 )
let result1 = 'name' in person; // "name" 이라는 프로퍼티가 person에 있는지
let result2 = 'anonymous' in person;
console.log(result1);
console.log(result2);
