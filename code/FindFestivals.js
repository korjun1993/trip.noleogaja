var baseURL = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival';
var key = 'durJHB4Hx8wuHRX6IU2cY1TW%2BbXLOTxyoLSYFV4FQmx4MzmDWvrKzFzwPtUqD3Bjte974mth8StXqjseFlCR7A%3D%3D';
var http = require('http');
var console = require('console')
var dates = require("dates")

const main = require("main.js")
const getAreaCode = require('GetAreaCode.js')
var options = {
  format: 'json',
  headers: {
    'accept': 'application/json'
  },
};

module.exports.function = function findFestivals (location, dateTimeExpression) {

  //이미 지난 날짜는 제외
  let when = null;
  let today = new Date();
  for(var i = 0; i < dateTimeExpression.length; i++){
     when = new Date(dates.ZonedDateTime.fromDate(dateTimeExpression[i].date).toIsoString());
     if( today > when) {
       dateTimeExpression.splice(i, 1);
     }
  }

  let pageNo = 1;
  let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key;
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20');
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
  queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
  queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest');
  queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P');
  
  if(location != null) {
    let code = getAreaCode.getAreaCode('전라남도-나주시');
    queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent(code.mainLoc);
    if(code.subLoc != 0) {
      queryParams += '&' + encodeURIComponent('sigunguCode') + '=' + encodeURIComponent(code.subLoc);
    }
  }

  queryParams += '&' + encodeURIComponent('eventStartDate') + '=' + encodeURIComponent('20191016');

  let response = http.getUrl(baseURL + queryParams, options);

  console.log(response)
  
  return main.findFestivals(location, dateTimeExpression);
}
