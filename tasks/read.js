let request = require("request");
let iconv = require("iconv-lite");
let cheerio = require("cheerio");
module.exports = function (url, cb) {
   request({url,encoding:null},function (err, res, body) {
       if(!err && res.statusCode ===200){
           body = iconv.decode(body,"gbk");
           let $ = cheerio.load(body);
           let movies = [];
           $(".keyword a.list-title").each(function () {
               let $this = $(this);
               let movie = {
                   name:$this.text(),
                   url:$this.attr("href")
               };
               console.log("read movie:" + movie.name);
               movies.push(movie)
           });
           cb(null,movies);
       }
   })
};

/*
module.exports("http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1&qq-pf-to=pcqq.group",function (err, movies) {
    console.log(movies);
});*/
