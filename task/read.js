let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let debug = require('debug')('crawl:read');

module.exports = function (url,callback){
    request({url,encoding:null},function(err,response,body){
        if(!err && response.statusCode ==200){
            body = iconv.decode(body,'gbk');
            let $ = cheerio.load(body);
            let items = [];
            $('.keyword .list-title').each(function(){
                let $me = $(this);
                let item = {
                    name:$me.text(),
                    url:$me.attr('href')
                }
                debug('读到电影'+item.name);
                items.push(item)
            })
            callback(null,items);
        }else{
            callback('请求数据失败');
        }
    })
}
