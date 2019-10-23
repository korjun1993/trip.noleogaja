var console = require('console');
var service = require('./service');

module.exports.function = function findFestivals (location, date, dateInterval, pageNo) {
  return service.findFestivals(location, date, dateInterval, pageNo);
}