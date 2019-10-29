var service = require('../lib/service');

module.exports.function = function selectShowDetailByIndex (indexNo, festivalList) {
  let index = Number(indexNo) - 1;

  const fail = require('fail');
  if(festivalList == undefined){
    throw fail.checkedError('There is no festival data', 'NotFoundFestivalList', null); 
  }
  return service.selectShowDetail(festivalList.festivals[index].contentId);
}
