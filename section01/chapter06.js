// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환하는 것

let num = 10;
let str = '20';

const result = num + str; // 1020

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = '10';
let strToNum1 = Number(str1); // 20

let str2 = '10개';
let strToNum2 = Number(str2); // NaN
let strToNum3 = parseInt(str2); // 10
// parseInt를 쓸 때 숫자 앞에 문자열이 오면 불가, 숫자 뒤에 문자열이 오면 가능

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + '입니다');
