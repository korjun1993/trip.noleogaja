var service = require('../lib/service');

module.exports.function = function selectShowDetail(contentId) {
  return service.selectShowDetail(contentId);
}
