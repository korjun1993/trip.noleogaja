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
  
  let pageNo = 1;
  let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key;
  let pos = location.indexOf('-');
  let mainLocName = location.substring(0, pos);
  let subLocName = location.substring(pos + 1);

  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20');
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
  queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
  queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest');
  queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P');
  
  if(location != undefined) {
    let code = getAreaCode.getAreaCode(location);
    queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent(code.mainLoc);
    if(code.subLoc != 0) {
      queryParams += '&' + encodeURIComponent('sigunguCode') + '=' + encodeURIComponent(code.subLoc);
    } else {
      subLocName = '';
    }
  }

  queryParams += '&' + encodeURIComponent('eventStartDate') + '=' + encodeURIComponent('20191016');

  let response = http.getUrl(baseURL + queryParams, options);

  console.log(response);

  let festivalList = {};
  let festivals = [];
  let loopNum = response.response.body.items.item.length;
  let totalCount = response.response.body.totalCount;
  let item = null;

  console.log(loopNum);

  for(let i = 0; i < loopNum; i++) {
    item = response.response.body.items.item[i];
    festivals.push({
      "contentId": item.contentid,
      "title": item.title,
      "eventStartDate": item.eventstartdate,
      "eventEndDate": item.eventenddate,
      "firstImage": item.firstimage,
      "location": mainLocName + " " + subLocName
     });
  }

  festivalList['pageNo'] = pageNo;
  festivalList['totalCount'] = totalCount;
  festivalList['Festivals'] = festivals;
  
  console.log(festivalList);

  console.log(main.findFestivals(location, dateTimeExpression[0]));
  
  return [];
}
