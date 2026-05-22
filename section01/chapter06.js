// 형 변환(Type Casting) : 어떤 값의 타입을 다른 타입으로 변경하는 것을 말함.
// - 묵시적 형변환(암묵적 형변환): 자바스크립트 엔진이 자동으로 형 변환하는 것을 말함.
// - 명시적 형변환: 개발자가 내장함수등을 사용해서 직접 명시적으로 형 변환하는 것을 말함.
//  ㄴ 내장함수 : 자바스크립트가 기본적으로 제공하는 함수
// ===============================================================

// [ 묵시적 형변환 ]
let num = 10;
let str = '20';
const result = num + str; // 숫자+문자: 숫자 -> 문자열로 묵시적 형변환
console.log(result);

// [ 명시적 형변환 ]
// 1) 문자열 -> 숫자
let str1 = '10';
let str2 = Number(str1);
console.log(10 + str2);

let str3 = '10개';
let str4 = Number(str3);
console.log(str4); // 숫자로 나타낼 수 없으므로 NaN(Not a Number)

let str5 = '10개20개';
let str6 = parseInt(str5);
console.log(str6); // parseInt라는 내장함수를 사용하면, 앞쪽부터 숫자값만 추출할 수 있을때까지 변환한다.
let str7 = 'ㅇ10개20개';
let str8 = parseInt(str7); // 제일 앞쪽부터 문자이므로 숫자로 나타낼 수 있는게 없으므로 NaN
console.log(str8);

// 2) 숫자 -> 문자
let num1 = 20;
let numToStr = String(num1);
console.log(numToStr + ' 입니다.');
