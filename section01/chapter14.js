// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프: 전체 영역에서 접근 가능
// -> 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 지역 스코프
}

funcA();
// Uncaught ReferenceError: b is not defined
// console.log(b);

if (true) {
  let c = 1; // 지역 스코프
  function funcC() {} // 전역 스코프
}

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역 스코프
  function funcD() {} // 전역 스코프
}

// Uncaught ReferenceError: funcB is not defined
// funcB();

// 함수 선언식은 함수 선언 안에서만 지역 스코프를 갖고, 예외적으로 조건문이나 반복문에서는 지역 스코프를 갖지 않음
funcC();
funcD();
