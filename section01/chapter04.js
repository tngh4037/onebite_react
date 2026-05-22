console.log('chatper04');

// 1. 변수
let age = 10;
console.log(age);
age = 27;
console.log(age);
// let age = 30; // 같은 변수명으로 선언을 중복할 수 없음.

// 2. 상수
const birth = '1993.02.19';
console.log(birth);

// 3. 명명규칙 (네이밍 규칙)
// 3-1) $ 와 _ 를 제외한 기호는 사용할 수 없다.
// let #name = "kim";
// let n#ame = "kim2";
// let name# = "kim3";
let $_name;

// 3-2) 숫자로 시작할 수 없다.
// let 93age;
let age93;

// 3-3) 예약어를 사용할 수 없다.
// let let;
// let const;
// let if;

// 4. 변수 명명 가이드
// 도메인을 기반으로 한 의미있는 이름을 사용하자.
let salesCount = 1;
let refundCount = 2;
let totalSalesCount = salesCount - refundCount;
