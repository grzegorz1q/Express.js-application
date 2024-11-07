const mountains = require('../data/mountains');

exports.homePage = function(req, res){
  res.render('index', {title: 'Mountains', mountains});
}