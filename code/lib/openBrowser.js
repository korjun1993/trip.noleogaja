module.exports.function = function openBrowser (homePage, tel, point) {
  const console = require('console');
  let result = '';

  if(tel != undefined) {
    result = "tel:" + tel;
  } else if(point != undefined){
    result = 'https://m.map.naver.com/map.nhn?lat=' + point.latitude + '&lng=' + point.longitude + '&dlevel=11&mapMode=&pinTitle=&boundary=&traffic='
  } else {
    result = homePage;
  } 

  return result;
}
