module.exports.function = function openBrowser (homePage, tel, point, showDetail) {
  const console = require('console');
  const config = require('config');
  let result = '';

  if(tel != undefined) {
    result = "tel:" + tel;
  } else if(point != undefined){
    result = 'https://m.map.naver.com/map.nhn?lat=' + point.latitude + '&lng=' + point.longitude + '&dlevel=11&mapMode=&pinTitle=&boundary=&traffic='
  } else if(showDetail != undefined) {
    result = config.get('youtube.url') + showDetail.title;
  } else {
    result = homePage;
  } 

  return result;
}
