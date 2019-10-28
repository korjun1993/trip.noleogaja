module.exports.function = function openBrowser (showDetail, showDetailType) {
  const console = require('console');
  const config = require('config');
  const fail = require('fail');
  let result = '';
  if(showDetail == undefined){
    throw fail.checkedError('There is no festival data', 'NotFoundFestival', null); 
  }
  if(showDetailType == 1) {
    result = "tel:" + showDetail.tel;
  } else if(showDetailType == 2){
    result = 'https://m.map.naver.com/map.nhn?lat=' + showDetail.point.latitude + '&lng=' + showDetail.point.longitude + '&dlevel=11&mapMode=&pinTitle=&boundary=&traffic='
  } else if(showDetailType == 3) {
    result = showDetail.homePage;
  } else {
    result = config.get('youtube.url') + showDetail.title;
  } 

  return result;
}
