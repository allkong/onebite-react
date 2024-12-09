// 1. Spread 연산자
// Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr3 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

// Rest 매개변수가 마지막에 와야 함
// Rest 매개변수의 이름은 상관 없음 (현재 코드에서는 rest지만 바꿔도 됨)
function funcB(one, ...rest) {
  console.log(one, rest);
}

funcB(...arr1);
