// 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미. (= 다른 함수의 인자로 전달되는 함수)
// ㄴ 자바스크립트는 함수를 값으로 취급할 수 있기때문에, 함수의 인자로 넘길 수 있다.
function main(value) {
  value();
}

function sub() {
  console.log('sub');
}

main(sub); // main 이라는 다른 함수에, 인수로써 전달되어 나중에 수행될 함수인 sub => "콜백함수"

console.log('==================================');

// ===========================================================
// ===========================================================
// ===========================================================
// 기본 예시)
function funcA(value) {
  if (typeof value === 'function') {
    value();
  } else {
    console.log(value);
  }
}

function funcB() {
  console.log('i am funcB');
}

funcA(1);
funcA(funcB);
funcA(function () {
  console.log('i am anonymous');
});
funcA(() => {
  console.log('i am arrow');
});

console.log('==================================');

// 활용 예시)
/*
// 이렇게 거의 비슷한 구조인데, 약간만 달라진다고 해서 함수를 계속만드는 것은 유지보수성이 떨어지고 복잡해짐.
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}
  function repeatTiple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3);
  }
}
*/
// 콜백을 활용하면 중복코드를 제거하고 보다 효율적으로 바꿀 수 있음.
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});
repeat(5, (idx) => console.log(idx));
repeat(5, (idx) => console.log(idx * 2));
repeat(5, (idx) => console.log(idx * 3));
