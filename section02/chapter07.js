// [ 배열 요소 조작(추가/수정/삭제) ]

// 1) push : 배열의 맨 뒤에 새로운 요소 추가 ( 반환값: 요소 추가 후 배열의 길이 )
let arr1 = [1, 2, 3];
arr1.push(4);
const newLength = arr1.push(5, 6, 7);
console.log(arr1);
console.log(newLength);

// 2) pop : 배열의 맨 뒤에 요소를 제거 ( 반환값: 제거한 값 )
let arr2 = [1, 2, 3];
let popedValue = arr2.pop();
console.log(arr2);
console.log(popedValue);

// 3) shift : 배열의 맨 앞에 요소를 제거 ( 반환값: 제거한 값 )
let arr3 = [1, 2, 3];
let shiftedValue = arr3.shift();
console.log(arr3);
console.log(shiftedValue);

// 4) unshift : 배열의 맨 앞에 새로운 요소 추가 (반환값 : 요소 추가 후 배열의 길이)
let arr4 = [1, 2, 3];
let unshiftedValue = arr4.unshift(0);
console.log(arr4);
console.log(unshiftedValue);

// 5) slice : 마치 가위처럼, 배열의 특정 범위를 잘라내서, 새로운 배열로 반환 (원본 배열에는 영향X)
let arr5 = [1, 2, 3, 4, 5];
let slicedArr = arr5.slice(2, 5); // 참고) 두번째 인자를 생략하면, 첫번째 인자 인덱스 ~ 배열의 끝까지 잘라냄
console.log(slicedArr);

// 배열의 뒤에서부터 잘라내고 싶으면, 음수로 적용하면 된다
console.log(arr5.slice(-1)); // 뒤에서 부터 하나만
console.log(arr5.slice(-3)); // 뒤에서부터 3개

// 6) concat : 두개의 서로 다른 배열을 이어붙여서 새로운 배열 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7); // arr6 뒤에 arr7 이 붙어서 새로운 배열로 반환
console.log(concatedArr);
