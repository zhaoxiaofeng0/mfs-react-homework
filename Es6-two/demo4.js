//请自行封装 ajaxGet(url) 函数，其返回值为 Promise ，其中 data 为获取的数据（内部使用 XMLHttpRequest）

//请利用自己实现的 ajaxGet(url) 函数，实现串行（一个接一个的）发送10个请求，来获取下面 api 的前10页数据
//请利用自己实现的 ajaxGet(url) 函数，实现并行（同时）发送10个请求，来获取下面 api 的前10页数
// GET http://api.learning.mafengshe.com/news
// 参数：pageSize：默认值 30（最大200），每一页的新闻条目数。page：默认 1，当前页码
// 例如：pageSize=30&page=1 表示获取第一页数据，每页30条数据
let url = "http://api.learning.mafengshe.com/news?pageSize=30&page="
const ajaxGet = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();

    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
};

// 串行（一个接一个的）发送10个请求：
function catchPage(){
  let i=1;
  function callBack(data){
    console.log(data);
    if(i<10) {
      i++;
      url=url + i
    }
    ajaxGet(url).then(callBack,
      function(error){
      console.error('出错了', error);
    })
  }
  ajaxGet(url).then(callBack,
  function(error){
  console.error('出错了', error);
  })
}
catchPage();
//并行（同时）发送10个请求
let set = new Set();
for (let i = 1; i <= 10; i++) {
  set.add(i);
}
for (let x of set) {
  url=url + x;
  ajaxGet(url).then(function(data) {
    console.log(data);
  }, function(error) {
    console.error('出错了', error);
  });
}