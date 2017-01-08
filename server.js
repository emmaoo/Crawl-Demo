let express = require('express');
let path = require('path');
let Movie = require('./model').Movie;
let app = express();
app.set('views engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
    Movie.find({}).then(function(movies){
        res.render('movie.html',{movies});
    });

});
app.listen(9090);

//每隔一个小时刷新一次
let CronJob  = require('cron').CronJob;
let main = require('./tasks/main');
let job = new CronJob('0 0 * * * *',function(){
    main();
});
job.start();
