// [ 배열의 변형 메서드 5가지 ]
// 1) filter: 기존 배열에서 조건을 만족하는 요소들만 필터링하여 "새로운 배열로" 반환
let arr1 = [
  { name: 'kim', hobby: 'volleyball' },
  { name: 'lee', hobby: 'tennis' },
  { name: 'park', hobby: 'tennis' },
];
let arr1Result = arr1.filter((item) => {
  return item.hobby === 'tennis';
});
console.log(arr1Result);

console.log('======================================');

// 2) map: 배열의 모든 요소를 순회하면서, 각 요소에 대해 콜백함수를 실행하고, 그 결과값들을 모아서 "새로운 배열로" 반환
let arr2 = [1, 2, 3];
let arr2Result = arr2.map((item, idx, arr) => {
  return (item *= 2);
});
console.log(arr2Result);
// 위 arr1에서 이름(name) 프로퍼티만 모아서 배열로 반환하도록 해보자.
let arr1Names = arr1.map((item) => {
  return item.name;
});
console.log(arr1Names);

console.log('======================================');

// 3) sort: 배열을 사전순으로 정렬하는 메서드 ( 원본이 변형된다. )
let arr3 = ['b', 'a', 'c'];
arr3.sort();
console.log(arr3);
// 주의) 숫자에서 주의하자.
// sort 메서드는 대소비교가 아니라, "사전순" 으로 정렬한다. 만약 대소관계로 정렬하고 싶다면, 비교 기준을 설정하는 callback 함수를 넘겨주어야 한다.
let arr3Numbers = [10, 3, 5];
// 사전순 (default)
arr3Numbers.sort();
console.log(arr3Numbers);
// 오름차순
arr3Numbers.sort((n1, n2) => {
  if (n1 > n2) {
    return 1; // 양수를 반환한다는 의미 => n2 -> n1 로 배치하겠다는 의미.
  } else if (n1 < n2) {
    return -1; // 음수를 반환한다는 의미 => n1 -> n2 로 배치하겠다는 의미.
  } else {
    return 0; // 같은 값이라면 두 값의 자리를 바꿀필요 없다.
  }
});
console.log(arr3Numbers);
// 내림차순
arr3Numbers.sort((n1, n2) => {
  if (n1 > n2) {
    return -1; // 음수를 반환한다는 의미 => n1 -> n2 로 배치하겠다는 의미.
  } else if (n1 < n2) {
    return 1; // 양수를 반환한다는 의미 => n2 -> n1 로 배치하겠다는 의미.
  } else {
    return 0; // 같은 값이라면 두 값의 자리를 바꿀필요 없다.
  }
});
console.log(arr3Numbers);

console.log('======================================');

// 4) toSorted: sort 와 같은 메서드지만, 원본을 정렬하는게 아니라 "새로운 배열"을 반환.
let arr5 = ['c', 'a', 'b'];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

console.log('======================================');

// 5) join: 배열의 모든 요소를 "하나의 문자열"로 합쳐서 반환하는 메서드
let arr6 = ['hi', 'im', 'js'];
let arr6Result = arr6.join(''); // join 메서드의 인자로는 각 요소를 구분하고 싶은 구분자를 넣어주면 된다.
console.log(arr6Result);
