let async = require('async');
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let debug = require('debug')('crawl:main');
let read = require('./read');
let write = require('./write');
module.exports = function(){
    async.waterfall([
        function(cb){
            read(url,cb);
        },
        function(items,cb){
            write(items,cb);
        }
    ],function(err,result){
        debug('全部数据处理完毕');
        process.exit(0);//正常退出进程
    })
}
