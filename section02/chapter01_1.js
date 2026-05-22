// Truthy 와 Falsy
// ㄴ 자바스크립트에서는 어떠한 값이 boolean 타입이 아니더라도, 상황에 따라서 참으로 판단하거나 거짓으로 판단하는 경우가 있다. 이런 특징을 Truthy 또는 Falsy 라 부른다.
// ㄴ Truthy : 참(true)은 아니지만, 조건문의 조건에서 (참 같은 값 / 참 처럼 취급되는 값)
// ㄴ Falsy : 거짓(false)은 아니지만, 조건문의 조건에서 (거짓 같은 값 / 거짓 처럼 취급되는 값)

// 자바스크립트의 모든 값은, Truthy 하거나 Falsy 하다. 따라서 이를 활용해서 다양한 로직을 작성할 수 있다.
if (123) {
  console.log(true);
} else {
  console.log(false);
}

if ([]) {
  console.log(true);
} else {
  console.log(false);
}

if ({}) {
  console.log(true);
} else {
  console.log(false);
}

if ('') {
  console.log(true);
} else {
  console.log(false);
}

if (undefined) {
  console.log(true);
} else {
  console.log(false);
}

if (null) {
  console.log(true);
} else {
  console.log(false);
}
