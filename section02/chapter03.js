// [ 구조 분해 할당 ]
// ㄴ 배열이나 객체에 저장된 여러 값들을 분해해서, 각각 다른 변수에 할당하는 문법

// 1) 배열의 구조 분해 할당
// 도입 전
let arr = [1, 2, 3];
let n1 = arr[0];
let n2 = arr[1];
let n3 = arr[2];

// 도입 후
let [n4, n5, n6, n7, n8 = 4] = arr; // arr 원소가 순서대로 각 변수에 할당됨 ( 넘치면 undefined, 기본값 할당 가능 )
console.log(n4, n5, n6, n7, n8);

// ================================================
// 2) 객체의 구조 분해 할당
let person = {
  name: 'kim',
  age: 34,
  hobby: 'volleyball',
};
// 도입 전
let p_name = person.name;
let p_age = person.age;
let p_hobby = person.hobby;

// 도입 후
let { name: pName, age, hobby, extra, extra2 = 'oh' } = person;
console.log(pName, age, hobby, extra, extra2);

// ================================================
// 3) 객체의 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ sname, sage, shobby }) => {
  console.log(sname, sage, shobby);
};

let student = {
  sname: 'lee',
  sage: 35,
  shobby: 'soccer',
};

func(student);
