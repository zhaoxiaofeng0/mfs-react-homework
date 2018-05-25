//请自学 Set 相关内容，并使用 Set 一行代码实现数组去重
var arr = [1,2,2,3,4] // 需要去重的数组

var set = new Set(arr) // {1,2,3,4}
var newArr = Array.from(set) // 再把set转变成array

console.log(newArr) // [1,2,3,4]