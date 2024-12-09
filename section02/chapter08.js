// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // true
let isInclude2 = arr2.includes(10); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 1
let index2 = arr3.indexOf(4); // -1

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const finedIndex = arr4.findIndex((item) => item % 2 !== 0); // 0
const finedIndex2 = arr4.findIndex((item) => item === 999); // -1

// indexOf와 findIndex의 차이
let objectArr = [{ name: '김철수' }, { name: '한유리' }];
// indexOf는 얕은 비교이기 때문에 찾지 못함
objectArr.indexOf({ name: '김철수' }); // -1
// findIndex는 콜백함수를 이용해서 특정 프로퍼티의 값을 비교하기 때문에 복잡한 객체값도 찾을 수 있음
objectArr.findIndex((item) => item.name === '김철수'); // 0

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 그대로 반환
let arr5 = [{ name: '김철수' }, { name: '한유리' }];

const finded = arr5.find((item) => item.name === '김철수'); // { name: '김철수' }
