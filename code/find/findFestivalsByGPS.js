var console = require('console');
var service = require('../lib/service');

module.exports.function = function findFestivalsByGPS (point, pageNo) {
  return service.findFestivalsByGPS(point, pageNo);
}
