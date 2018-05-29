//请实现与下面 Generator 函数 等价的迭代器
// function* gen(){
//      yield 1
//      yield 2
//      return 3;
//  }
//  let fn = gen()
//  fn.next(); //// { value: 1, done: false }
//  fn.next(); //// { value: 2, done: false }
//  fn.next(); //// { value: 3, done: true }
//  fn.next(); //// { value: undefined, done: true }

 //等价迭代器

 function gen(){
     let i = 1;
     return{
         next:function(){
             if(i<3){
                return{value:i++ , done:false}
             }else if(i===3){
                 i++;
                 return {value:3, done:true}
             }else{
                 return{value:undefined , done:true}
             }
         }
     }
 }
let fn = gen();
console.log(fn.next());
console.log(fn.next());
console.log(fn.next());
console.log(fn.next());

