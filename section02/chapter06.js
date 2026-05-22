// [ 배열과 객체 순회하기 ]
// 1) [ 배열 순회 ]
let arr = [1, 2, 3];

// 1-1) 기본
for (let idx = 0; idx < arr.length; idx++) {
  console.log(arr[idx]);
}

// 1-2) for of 반복문 ( 배열 전용 )
for (let item of arr) {
  console.log(item);
}

console.log('===============================================');
// ===============================================
// 2) [ 객체 순회 ]
let person = {
  name: 'kim',
  age: 34,
  hobby: 'volleyball',
};

// 2-1) Object.keys 내장함수 사용
// ㄴ 객체에서 "key 값들만 뽑아서, 새로운 배열로 반환"한다.
let keys = Object.keys(person);
console.log(keys);

for (let idx = 0; idx < keys.length; idx++) {
  const key = keys[idx];
  console.log(person[key]);
}
for (let key of keys) {
  console.log(person[key]);
}

// 2-2) Object.values 내장함수 사용
// ㄴ 객체에서 "value 값들만 뽑아서 새로운 배열로 반환"한다.
let values = Object.values(person);
console.log(values);

for (let value of values) {
  console.log(value);
}

// 2-3) for in 순회 ( 객체 전용 )
for (let key in person) {
  console.log(person[key]);
}

// ===========================================================
// 한줄 정리: 배열 순회는 for of, 객체 순회는 for in
