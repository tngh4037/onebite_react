// 조건문: 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// ㄴ 대표적으로 if, switch 조건문이 존재함.
// ===================================================================

// 1. if 조건문
let num = 10;
if (num % 2 === 0) {
  console.log(`${num}은 짝수입니다.`);
} else {
  console.log(`${num}은 홀수입니다.`);
}

// 2. switch 조건문
let animal = 'cat';
switch (animal) {
  case 'dog':
    console.log('animal is dog');
    break;
  case 'cat': {
    console.log('animal is cat');
    break;
  }
  case 'tiger':
  case 'bear':
    console.log('animal is tiger or bear');
    break;
  default:
    console.log(`[${animal}] not animal`);
}
