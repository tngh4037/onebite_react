// [ math 모듈 ]
// 모듈 시스템을 이용해서 math 모듈의 함수를 내보내고, 다른 모듈에서 읽어오기
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// 1) CJS 모듈 시스템 이용해서 객체형태로 함수 내보내기
/*
module.exports = {
  add: add,
  sub: sub,
};
*/

// 2) ES 모듈 시스템을 사용해서 함수 내보내기
// export { add, sub };
