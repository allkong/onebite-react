// 1.  콜백 함수
function main(value) {
  value();
}

// 함수 표현식
// function sub() {
//   console.log('I am sub');
// }

// main(sub);

// 화살표 함수
// main(() => {
//   console.log('I am sub');
// });

// 2. 콜백 함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// function repeatDouble(count, callback) {
//   for (let idx = 1; idx <= count; idx++) {
//     callback(idx * 2);
//   }
// }

repeat(5, function (idx) {
  console.log(idx);
});

// 중복 코드를 제거할 수 있음
// repeatDouble을 제거하고 repeat 함수를 활용
repeat(5, (idx) => {
  console.log(idx * 2);
});
