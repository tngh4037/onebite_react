// 연산자: 프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함. (+, -, *, /, %)

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자 (+,- 보다 *,/,% 의 우선순위가 더 높다. 따라서 함께 사용시 우선순위가 높은것이 먼저 수행된다.)
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = (3 + 2) * 1; // 우선순위가 낮은것을 먼저 계산하려면 괄호를 붙이자.

// 3. 복합 대입 연산자 (복합 = 산술 과 대입 의 혼용)
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 /= 20;
num7 %= 20;
console.log(num7);

// 4. 증감연산자 (값을 하나씩 늘리거나 줄이고 싶을 때)
let num8 = 10;
num8++;
++num8;

// 5. 논리연산자
let logic1 = true || false;
let logic2 = true && false;
let logic3 = !true;
console.log(logic1, logic2, logic3);

// 6. 비교연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
let comp3 = 1 == '1';
let comp4 = 1 === '1'; // === : 자료형까지 비교 (권장)
let comp5 = 2 > 1;
let comp6 = 2 <= 1;
console.log(comp1, comp2, comp3, comp4, comp5, comp6);
