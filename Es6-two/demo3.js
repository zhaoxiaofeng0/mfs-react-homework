//请给对象 obj 加上迭代器，使其可以像数组一样使用 for of 循环
// let obj = {
//     [0] : "a",
//     [1] : "b",
//     [2] : "c",
//     length : 3
// }

let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
  };
  for (let item of iterable) {
    console.log(item); // 'a', 'b', 'c'
  }