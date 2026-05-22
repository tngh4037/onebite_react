// 1. null 병합 연산자
// -> 존재하지 않는 값을 추려내는 기능
// -> null, undefined 가 아닌 값을 찾아내는 연산자
let var0 = null;
let var1;
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2; // 둘 중에 null, undefined 가 아닌 값을 찾음. (참고. console.log(username || 'guest') => userName 이 falsy 값이면 'guest' 로 출력.  ( 만약 0, false, '' 와 같은 값도 유효한 값이라면 ?? 를 사용하고, 유효하지 않은 값이라면 || 사용 권장) )
let var5 = var1 ?? var3;
let var6 = var2 ?? var3; // 둘 다 null, undefined 가 아닌 경우, 처음에 나온것을 찾아 리턴.
console.log(var4); // 10
console.log(var5); // 20
console.log(var6); // 10
console.log(var0 ?? var1); // undefined ( ?? 는 왼쪽 값이 null 또는 undefined 이면 오른쪽 값을 반환한다. 즉, 둘 다 null/undefined 면 마지막 평가된 값이 그대로 나온다. )

// let userName = 'kim';
let userName;
let anonymousNmae = 'guest';
let displayName = userName ?? anonymousNmae; // 값이 할당되지 않았거나 null일때만 기본값 적용
console.log(displayName);

/*
참고)
null ?? undefined      // undefined
undefined ?? null      // null
null ?? null           // null
undefined ?? undefined // undefined

참고)
let name = null;
let nickname = undefined;
let fallback = 'guest';
console.log(name ?? nickname ?? fallback); // 'guest'
*/

// ====================================================

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환
let var7 = 1;
var7 = '2'; // 자바스크립트는 변수 타입이 고정되어 있지 않다. (동적으로 타입이 바뀔 수 있음)
// var7 = true;
// var7 = 2;
let type1 = typeof var7;
console.log(type1);

// ====================================================

// 3. 삼항연산자
// -> 항을 3개 사용하는 연산자
let var8 = 10;
let result = var8 % 2 == 0 ? '짝' : '홀';
console.log(result);
