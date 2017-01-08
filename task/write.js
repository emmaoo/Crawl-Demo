let Movie = require('../model').Movie;

module.exports = function(items,callback){
    Movie.create(items,callback)
}
