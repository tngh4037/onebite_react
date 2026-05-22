// [ 비동기 작업 처리하기 - 1) 콜백함수 ]

// ########## 아주 많이 사용되는 패턴 ##########
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

// 비동기 작업(setTimeout)을 하는 함수의 결과값을 기반으로, 함수 외부에서 이용하고 싶다면, 콜백함수(callback)를 사용해서, 비동기함수 안에서 콜백함수를 호출하도록 설정해주면 된다.
add(1, 2, (value) => {
  console.log(value);
});

// ============================================================

// 예제) 음식 주문에 3초 걸리고, 음식이 와서 2초동안 식힌 뒤, 1.5초 동안 얼린다.
function orderFood(callback) {
  // 배달 시간 3초 걸린다고 가정
  setTimeout(() => {
    const arrivedFood = 'pizza';
    callback(arrivedFood);
  }, 3000);
}

function cooldownFood(food, callback) {
  // 음식을 식히는데 걸리는 시간
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  // 냉동하는데 걸리는 시간
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(`arrived ${food}`);

  // 비동기 작업의 결과(food)를, 또 다른 비동기 작업의 인수로 전달하는것도 물론 가능하다.
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(food, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

// 참고) 점점 비동기 코드가 많아질수록 콜백 지옥이 된다.
// 이를 피하기 위해서는 Promise 객체를 사용하면 효율적으로 해결할 수 있다. (다음 내용 확인하자.)
