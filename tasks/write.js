let Movie = require("../model");
module.exports = function (movies,cb) {
    Movie.create(movies,cb);
};
/*
let s = {name:"123",url:"222"}
module.exports(s,function (err, result) {
    console.log(result);
})*/
