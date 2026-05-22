// [ Spread 연산자 & Rest 매개변수 ]
// : 둘다 연산자 모양은 ... 로 같지만 엄연히 다름.
//  ㄴ 메서드의 매개변수에 정의된 ... 은 Rest 매개변수이고,
//  ㄴ 그 외에는 Spread 연산자임.
//
// 1) Spread 연산자 (...)
// ㄴ 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

// 1-1) 배열에 적용
let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr3 = [4, ...arr1, 5, 6];
console.log(arr3);

/*
주의사항) 값을 꺼내서 넣기 때문에, 이값을 추후에 수정하더라도 원본에 영향을 주지 않음. (주소가 들어가는게 아니라, 값이 들어감)

// 얕은 복사 : 객체의 참조값이 복사됨. 
// o2에서 값 변경시, 원본도 변경
let o1 = { name: 'kim' };
let o2 = o1;

// 깊은 복사 : 프로퍼티 값만 복사됨.
// o4에서 값 변경시, 원본에는 영향 X
let o3 = { name: 'kim' };
let o4 = { ...o3 };
*/

// 1-2) 객체에 적용
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  a: obj1.a,
  b: obj1.b,
  c: 3,
  d: 4,
};
let obj3 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj3);

// 1-3) 함수 호출시 적용
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

console.log('================================================');
// ========================================================
// 2) Rest 매개변수  (...)
//  ㄴ 여러개의 매개변수를 받을 때, 한 방에 배열로 받을 수 있도록 하는 역할

// rest 라는 매개변수에 인수로 넘어온 값들이 "배열 형태"로 저장됨
function funcB(...args) {
  console.log(args); // [1, 2, 3]
}
// 첫 번째 매개변수는 이름을 가진 변수로 받고싶은 경우
function funcC(one, ...rest) {
  console.log(one); // 1
  console.log(rest); // [2, 3]
}

funcB(...arr1);
funcC(...arr1);

// 주의) Rest 매개변수 뒤에는 추가적으로 매개변수를 선언할 수 없다. ( 오류 발생 )
// function funcD(one, two, ...rest, four) { }
