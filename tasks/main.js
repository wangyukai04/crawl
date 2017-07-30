let read = require("./read");
let write = require("./write");
let async = require("async");
let Movie = require("../model");
let url = "http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1&qq-pf-to=pcqq.group";
async.waterfall([
    function (cb) {
        Movie.remove({},cb);
    },
    function (data,cb) {
        read(url,cb)
    },
    function (data, cb) {
        write(data,cb);
    }
],function (err,result) {
    console.log("all done");
});