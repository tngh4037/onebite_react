// [ Date 객체와 날짜 ]
// 1) Date 객체 생성 방법
let date1 = new Date(); // 생성자에 인자를 전달하지 않으면 현 시간으로 세팅된다.
console.log(date1);

let date2 = new Date('2026-01-01'); // 2026/01/01 로 표현해도 됨.
console.log(date2);

let date3 = new Date('2026-01-01/10:10:10'); // 시간은 날짜뒤에 "/" 를 붙이고 작성해주면 된다.
console.log(date3);

let date4 = new Date(2026, 1, 1, 10, 10, 10); // 숫자로 개별로 작성해줘도 된다.
console.log(date4);

console.log('==============================================');

// 2) 타임스탬프 : 특정 시간이 "1970.01.01 00:00:00" 로 부터 몇 ms가 지났는지를 의미하는 숫자값
// ㄴ "1970.01.01 00:00:00" : 협정세계시(UTC) ( 세계 모든 나라가 표준으로 사용하는, 시간이 시작되는 지점  )
let ts1 = date1.getTime(); // date1 의 타임스탬프를 계산해서 반환
console.log(ts1);

let date5 = new Date(ts1); // ts1에 해당하는 시간으로 Date 객체 생성 (=date1과 같은 시각)
console.log(date5);

console.log('==============================================');

// 3) 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 주의) month 는 0부터 나옴
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
console.log(year, month, date, hour, minute, seconds);

console.log('==============================================');

// 4) 시간을 수정하는 방법
date1.setFullYear(2020);
date1.setMonth(2); // 월(month) 0부터 시작하니까 참고해서 넣기. ( 2 = 3월 )
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
console.log(date1);

console.log('==============================================');

// 5) 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // (시간 제외) 날짜만 출력
console.log(date1.toLocaleString()); // 한국어 기준으로 현지화된 형태로 출력
// 이 외의 yyyy-MM-dd hh:mm:ss 등의 포맷으로의 출력은, Date 객체 자체는 원하는 포맷으로 바로 출력해주지 않아서, 직접 년/월/일/시/분/초 를 조회해서 포맷팅하는 함수를 만들어서 사용하거나, 라이브러리(e.g. dayjs)를 사용해야 한다.
