//请实现基于 Thunk 函数的 Generator 函数自动运行器 （此题请自学完成）
function *genFun(){
  let result = yield function(fun){
      setTimeout(fun({result:"data"}),1000);
  }
  console.log("异步操作的结果是:",result);
}
function run(genFun){
  this.next = function(data){
      let result = genFun.next(data);
      console.log("result value is ",result.value);//这里可以发现其实value是一个function,所以下面可以直接调用value();
      if(result.done) return;
      result.value(this.next);
  };
  next();
}
var gen = genFun();
run(gen);