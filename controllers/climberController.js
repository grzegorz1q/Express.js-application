const climbers = require('../data/climbers');

exports.climbersList = function(req,res){
    res.render('climbers', {climbers: climbers});
};