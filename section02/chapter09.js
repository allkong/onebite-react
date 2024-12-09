// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: '신짱구', hobby: '독서' },
  { name: '김철수', hobby: '독서' },
  { name: '한유리', hobby: '요리' },
];

const bookworm = arr1.filter((item) => item.hobby === '독서');

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
}); // [2, 4, 6]

let names = arr1.map((item) => item.name); // ['신짱구', '김철수', '한유리]

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ['b', 'a', 'c'];
arr3.sort(); // ['a', 'b', 'c']

// 대소 비교가 아닌 사전순이기 때문에 숫자에는 제대로 동작하지 않음
// 숫자의 대소 비교를 원하면 비교 기준을 설정하는 콜백함수를 넘겨야 함
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return 1; // b, a
  } else if (a < b) {
    return -1; // a, b
  } else {
    return 0; // a, b 그대로 유지
  }
});

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
// 원본 배열은 바뀌지 않음
let arr5 = ['c', 'a', 'b'];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ['hi', 'im', 'allkong'];
const joined = arr6.join(' '); // hi im allkong
