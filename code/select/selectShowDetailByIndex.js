var service = require('../lib/service');

module.exports.function = function selectShowDetailByIndex (indexNo, festivalList) {
  let index = Number(indexNo) - 1;
  return service.selectShowDetail(festivalList.festivals[index].contentId);
}
