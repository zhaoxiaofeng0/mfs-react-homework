//请实现 Generator 函数 fib()，实现计算无限序列：斐波那契数列。并使用解构语法获得 fib() 函数计算斐波那契数列前 3 项
function* fib() {
    let [prev, curr] = [0, 1];
    for (;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }
  let[a,b,c]=fib();
  console.log(a);
  console.log(b);
  console.log(c);