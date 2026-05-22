// [ 비동기 작업 처리하기 - 2) Promise 객체 (심화 예제) ]
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다.');
      }
    }, 2000);
  });

  return promise; // ★ promise 를 반환 ★
}

// 사용 예시1)
/*
const p1 = add10(0);
p1.then((result) => {
  console.log(result);

  const p2 = add10(result); // 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달
  p2.then((value) => {
    console.log(value);
  }).catch(() => {
    console.log(value);
  });
}).catch((error) => {
  console.log(error);
});
*/
// => 근데 위 작업은 이전에 chapter12.js에서 했던거 처럼 콜백지옥과 다를바없다.
// => Promise 는 콜백지옥을 방지하기 위해, 아래와 같이 then() 에서 새로운 promise 를 반환할 수 있도록 한다.
// ==============================================================================

// 사용 예시2)
const p3 = add10(0);
p3.then((result) => {
  console.log(result);
  return add10(result);
})
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
