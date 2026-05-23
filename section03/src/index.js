/*
// CJS 모듈 시스템 
const moduleData = require('./math'); // 내장 함수인 require 를 통해 다른 모듈에서 함수 불러오기

console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }
console.log(moduleData.add(1, 2)); // 3
console.log(moduleData.sub(1, 2)); // -1
*/

// ES 모듈 시스템
/*
import multiply from './math.js';
import { add, sub } from './math.js';
console.log(add(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(multiply(2, 2)); // 4
*/

import randomColor from 'randomcolor'; // randomcolor 라는 라이브러리가 내보내는 기본값을 불러옴 ( 참고로 라이브러리에서 가져올 때는 경로를 명시하지 않아도 된다. 그냥 from 뒤에 라이브러리의 이름만 명시하면 된다. )

const color = randomColor();
console.log(color);
