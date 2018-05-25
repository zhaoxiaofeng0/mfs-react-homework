// 请将下面函数柯里化(currying)，需要写出箭头函数和非箭头函数两种答案
// function cala(add, mul, origin) {
//     return (origin + add) * mul
// }
//普通函数
let cala2 = function (add) {
    return function (mul) {
      return function (origin) {
        return (origin + add) * mul
      }
    }
  }
console.log(cala2(1)(2)(3))

//============箭头函数
let cala = (add) => (mul) => (origin) => (origin + add) * mul

console.log(cala(2)(3)(4));