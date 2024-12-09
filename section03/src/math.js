// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multify(a, b) {
  return a * b;
}

// Common JS(CJS) 방식
// module.exports = {
//   add,
//   sub,
// };

// ES Module(ESM) 방식
// export { add, sub };
