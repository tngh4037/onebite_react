// [ 배열의 순회와 탐색 ]
// 1) 순회
//  ㄴ forEach : 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
//  ㄴ forEach 메서드에는 인수로 callback 함수를 넣어주면 된다. 그러면 forEach 는 배열의 요소를 하나씩 반복문처럼 순회하면서 매 반복마다 callback 함수를 호출하고, 그때, 매개변수로 (현재요소, 현재반복카운트, 배열전체) 정보를 callback 에 넘겨준다. )
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  console.log(item, idx, arr);
});

console.log('============================================');

let doubledArr = [];
arr1.forEach((item, idx, arr) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr);

console.log('============================================');

// 2) 탐색
// 2-1) includes: 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // 3이라는 값이 있는지 찾아서 참/거짓으로 반환
console.log(isInclude);

console.log('============================================');

// 2-2) indexOf: 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드 ( 없으면 -1 반환 )
let arr3 = [1, 2, 3, 3];
let index = arr3.indexOf(3); // 같은 요소가 여러개 있으면, 가장 먼저 나온 요소의 인덱스 반환
console.log(index);

console.log('============================================');

// 2-3) findIndex: 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드 ( 요소를 순회하면서 callback 함수를 만족하는 요소의 첫 인덱스를 반환 ( 참고로, 따라서 callback 함수는 참/거짓을 반환하도록 로직을 짜주면 된다. ) ) ( 조건에 만족하는 요소가 없으면 -1 반환 )
let arr4 = [1, 2, 3];
let findedIndex1 = arr4.findIndex(function (item) {
  return item % 2 === 0;
});
let findedIndex2 = arr4.findIndex((item) => {
  return item % 2 === 0;
});
let findedIndex3 = arr4.findIndex((item) => item % 2 === 0);
console.log(findedIndex1);
console.log(findedIndex2);
console.log(findedIndex3);

console.log('============================================');

// 2-4) find: 요소를 순회하면서 callback 함수를 만족하는 첫 요소를 그대로 반환 ( 인덱스를 반환하는게 아님 ) ( 없으면 undefined )
let arr5 = [{ name: 'kim' }, { name: 'lee' }];
let arr5Result = arr5.find((item) => {
  return item.name === 'lee';
});
console.log(arr5Result);

console.log('================================================');

// Q) [ 배열에서 객체값이 존재하는지 확인하려면 indexOf 와 findIndex 둘 중 뭘써야할까? ]
// 문제) 이름이 kim 인 인덱스는?
let userArr = [{ name: 'kim' }, { name: 'lee' }];

// indexOf 로는 못찾는다. 참조 비교를 하기 때문이다. indexOf 는 얕은 비교로 동작한다.
let indexOfResult = userArr.indexOf({ name: 'kim' });
console.log(indexOfResult); // -1

// findIndex 로 찾아야 한다. callback 함수를 이용해서 객체(item)의 프로퍼티(name) 값을 기준으로 비교할 수 있기 때문이다.
let findIndexResult = userArr.findIndex((item) => {
  return item.name === 'kim';
});
console.log(findIndexResult); // 0
