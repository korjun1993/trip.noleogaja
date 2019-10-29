var service = require('../lib/service');

module.exports.function = function findFestivals (location, date, dateInterval, pageNo) {

  return service.findFestivals(location, date, dateInterval, pageNo);
}