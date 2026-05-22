// 함수: 중복으로 작성된 유사한 기능을 하는 코드들을 하나로 묶을 수 있는 수단.
// ㄴ 함수는 선언했다고 바로 실행되지 않는다. 호출해야 실행된다.

function getArea(w, h) {
  let area = w * h;

  // 함수 내부에 또다른 함수를 선언할 수 있다.
  function another() {
    console.log('another');
  }
  another();

  return area;
}

let result = getArea(10, 20);
console.log(result);

// ================================================
// 참고) 다른 언어와 다르게, 자바스크립트에서는 함수의 호출을 선언부보다 먼저할 수 있다.
//  ㄴ 어떻게? 자바스크립트의 호이스팅(=끌어올리다) 덕분.

let value = getResult(10, 20);

function getResult(w, h) {
  let area = w * h;
  return area;
}
