// [ 비동기 작업 처리하기 - 2) Promise 객체 ]
// ㄴ Promise: 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// ㄴ Promise 효능
//   - 1) 비동기 작업 실행
//   - 2) 비동기 작업 상태 관리
//   - 3) 비동기 작업 결과 저장
//   - 4) 비동기 작업 병렬 실행
//   - 5) 비동기 작업 다시 실행
//   - 6) 기타 등등 ...
//   - 강의에서는 1) ~ 3) 까지 다룬다.
// =================================================================================
// Promise 는 비동기 작업을 진행 단계에 따라서 3가지의 상태로 나누어서 관리한다.
//  - 대기(Pending) : 아직 비동기 작업이 진행중인, 그래서 완료되지 않은 상태를 의미
//  - 성공(Fullfilled) : 비동기 작업이 별다른 오류없이 성공적으로 마무리된 상태를 의미
//  - 실패(Rejected) : 비동기 작업이 모종의 이유로 실패된 상태를 의미
//
// 비동기 작업이 대기(Pending) -> 성공(Fullfilled) 상태로 바뀌는 것을, resolve(해결) 되었다라고 말한다.
// 비동기 작업이 대기(Pending) -> 실패(Rejected) 상태로 바뀌는 것을, reject(거부) 되었다고 말한다.
// =================================================================================

// 1) Promise 객체 생성
// 생성자의 인수에 비동기 작업을 진행할 콜백함수를 넣어주면 된다. 이때, Promise 객체에 전달하는 콜백함수를 executor 라고도 한다. ( Promise 객체는 내부에서 콜백함수를 실행한다. 실행시 resolve, reject 를 전달한다. )
// ( executor 함수에서 reject 를 호출하게 되면 Promise 의 비동기 작업이 실패하게 되고, resolve 를 호출하게 되면 Promise 의 비동기 작업이 성공하게 된다. )
const promise = new Promise((resolve, reject) => {
  // 비동기 작업
  setTimeout(() => {
    const num = null;
    if (typeof num === 'number') {
      resolve(num + 10); // Promise 가 관리하는 비동기 작업을 성공(Fullfilled) 상태로 바꾸는 함수. ( resolve 함수를 호출하면서 결과값(PromiseResult)을 인수로 전달할 수 있다. )
    } else {
      reject('num이 숫자가 아닙니다.'); // reject('왜 실패했는지 이유'); // Promise 가 관리하는 비동기 작업을 실패(rejected) 상태로 바꾸는 함수.
    }
  }, 2000);
});

//console.log(promise); // pending

setTimeout(() => {
  //  console.log(promise); // fulfilled
}, 3000);

// =========================================================================
// 2) Promise.then() / Promise.catch()
// 2-1) then(..) : Promise 의 성공한 비동기 작업의 결과값(PromiseResult) 을 이용하기
// 2-2) catch(..) : Promise 의 실패한 비동기 작업의 결과값(PromiseResult) 을 이용하기
promise.then((value) => {
  console.log(value); // 20 promise 가 성공하게되면(=executor 함수에서 resolve가 호출되면), then 메서드에 전달한 콜백함수를 실행한다. 그러면서 인자로 resolve(결과값) 시 넘겨줬던 결과값을 넘겨준다.
});
promise.catch((value) => {
  console.log(value); // promise 가 실패하게되면(=executor 함수에서 reject가 호출되면), catch 메서드에 전달한 콜백함수를 실행한다. 그러면서 인자로 reject(결과값) 시 넘겨줬던 결과값을 넘겨준다.
});

// 2-3) then() 과 catch() 는 promise 객체를 그대로 반환한다. (체이닝 가능)
/*
promise
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value); 
  });
*/
