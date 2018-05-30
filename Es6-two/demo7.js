//请将 fs.readFile(path[, options], callback) 手动函数 Thunk 化，了解函数点击这里
const thunkify  = function (fn){
    return function(...args){
        return function(callback){
            return fn.call(this, ...args,callback);
        }
    }
}

var readFileThunk = thunkify(fs.readFile);
readFileThunk("filename")(callback);