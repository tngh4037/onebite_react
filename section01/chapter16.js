// 객체(Object) 심화
// ==========================================================
// 1. 상수 객체
const animal = {
  type: '고양이',
  name: '나비',
  color: 'black',
};

// 다른 객체를 생성해서 할당하는 것은 불가.
// animal = { a: 1 }; // Uncaught TypeError: Assignment to constant variable.

// 프로퍼티 조작은 가능.
// ㄴ 객체에 새로운 프로퍼티를 추가하거나, 프로퍼티의 값을 수정하거나, 프로퍼티를 삭제하는건 가능.
animal.age = 2; // 추가
animal.color = 'white'; // 수정
delete animal.type; // 삭제
console.log(animal);
// ==========================================================
// 2. 메서드: 값이 함수인 프로퍼티 ( 객체의 동작을 정의 )
const person = {
  sayHi: function () {
    console.log('hi');
  },
  sayHello: () => {
    console.log('hello');
  },
  sayBye() {
    console.log('bye');
  },
};
person.sayHi();
person['sayHello']();
person.sayBye();
