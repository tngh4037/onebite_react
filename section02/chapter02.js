// [ 단락 평가 ]
// ㄴ 논리연산에서 첫 번째 피연산자의 결과만으로도 결과를 확정지을 수 있는 특징

// 예시1)
function returnFalse() {
  console.log('returnFalse() called');
  // return false;
  return undefined; // Falsy한 값으로 반환해도 무관
}
function returnTrue() {
  console.log('returnTrue() called');
  // return true;
  return 1; // Truty한 값으로 반환해도 무관
}
console.log(returnFalse() && returnTrue()); // 단락평가 작동 ( returnTrue() 실행되지 않음. )
console.log('=====');
console.log(returnTrue() && returnFalse()); // 단락평가 작동 X ( 첫번째 피연산자의 결과만으로는 아직 전체결과를 확정할 수 없음. )
console.log('=====');
console.log(returnTrue() || returnFalse()); // 단락평가 작동
console.log('=====');
console.log(returnFalse() || returnTrue()); // 단락평가 작동 X ( 첫번째 피연산자의 결과만으로는 아직 전체결과를 확정할 수 없음. )

// 참고) JavaScript의 ||(OR) 연산자,  &&(AND) 연산자의 출력은, 마지막으로 평가된 값 반환.
console.log('=======================================');

// ============================================
// 예시2)
function printName(person) {
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
}
printName(); // 이 경우 person 에는 undefined 이 할당되고, 단락평가에 의해 name 도 undefined 이 된다.
printName({ name: 'kim' });
