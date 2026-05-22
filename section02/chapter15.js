// [ 비동기 작업 처리하기 - 3) async/await ]
// 1) async
// - 어떤 함수를 비동기 함수로 만들어주는 키워드
// - 함수가 Promise 를 반환하도록 변환해주는 키워드

/*
// 객체({name: 'kim',id: '010'})를 반환하는 동기 함수
function getData() {
  return {
    name: 'kim',
    id: '010',
  };
}
// 객체({name: 'kim',id: '010'})를 결과값(PromiseResult)으로 하는 promise 를 반환하는 비동기 함수
async function getData() {
  return {
    name: 'kim',
    id: '010',
  };
}
*/

async function getData() {
  // 직접 Promise 를 반환해도 됨.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'kim', id: '010' });
    }, 1500);
  });
}

const p = getData();

// =================================================================

// 2) await: async 함수 내부에서만 사용이 가능 한 키워드
// ㄴ 비동기 함수가 다 처리되기를 기다리는 역할 ( Promise 의 결과값을 뭔가 사용해야 해서 )
// ㄴ await 을 사용하면 기존 then() 메서드를 사용하지 않아도된다.
async function printData() {
  const data = await getData(); // getData() 가 반환하는 Promise 가 종료되길 여기서 기다린다.
  console.log(data); // 원래라면 then((result) => {console.log(result)}) 로 해야 결과를 얻을 수 있었을 것이다.
}

printData();
