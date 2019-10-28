var service = require('../lib/service');
var console = require('console');

module.exports.function = function selectShowDetail(contentId) {
  return service.selectShowDetail(contentId);
}
