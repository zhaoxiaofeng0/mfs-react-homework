//请实现基于 Promise 的 Generator 函数自动运行器
var fs = require('fs');

  var readFile = function ( fileName ) {
    return new Promise(function ( resolve, reject ) {
      fs.readFile(fileName, function ( err, data ) {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    });
  };

  var gen = function* () {
    var f1 = yield readFile('./text.txt');
    var f2 = yield readFile('./text1.txt');
    console.log(f1.toString());
    console.log(f2.toString());
  };

  var run = function () {
    let g = gen();

    let next = function ( data ) {
      let result = g.next(data);
      if (result.done) {
        return  result.value;
      }

      result.value.then(function (data) {
        next(data);
      });
    };

    next();
  };

  run(gen);