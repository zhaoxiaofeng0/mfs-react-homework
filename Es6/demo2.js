
function fn(n){
    var result = [0,1];
    if(n < 2){
        return result[n];
    }
    var a1=1;
    var a2=1;
    var a3=0;
    for(var i=2;i<=n;i++){//因为前两个数都是1，所以要从i=2开始，就是前两个数的1+1=2，i的初始值其实是第三个数
    a3=a1+a2;//第三个数等于第一个数加上第二个数
    a1=a2;//第一个数就变成了之前的第二个数
    a2=a3;//第二个数就变成了刚刚的第三个数
    }
    return a3;
  //  console.log(a3);
}
let [a, b, c, d, e, f, g, h, j, k] = [fn(0),fn(1),fn(2),fn(3),fn(4),fn(5),fn(6),fn(7),fn(8),fn(9)]
console.log(a, b, c, d, e, f, g, h, j, k)