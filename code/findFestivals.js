var baseURL = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival';
var key = 'durJHB4Hx8wuHRX6IU2cY1TW%2BbXLOTxyoLSYFV4FQmx4MzmDWvrKzFzwPtUqD3Bjte974mth8StXqjseFlCR7A%3D%3D';
var http = require('http');
var options = {
  format: 'json',
  headers: {
    'accept': 'application/json'
  },
};

var console = require('console')
var dates = require("dates")

const getAreaCode = require('lib/getAreaCode.js')
const getDate = require('lib/getDate.js')

module.exports.function = function findFestivals (location, dateTimeExpression) {
  let pageNo = 1;
  let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key;
  let pos = null;
  let mainLocName = null;
  let subLocName = null;

  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20');
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
  queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
  queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest');
  queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P');
  
  if(location != undefined) {
    pos = location.indexOf('-');
    mainLocName = location.substring(0, pos);
    subLocName = location.substring(pos + 1);

    let code = getAreaCode.getAreaCode(location);
    queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent(code.mainLoc);
    if(code.subLoc != 0) {
      queryParams += '&' + encodeURIComponent('sigunguCode') + '=' + encodeURIComponent(code.subLoc);
    } else {
      subLocName = '';
    }
  }

  if(dateTimeExpression) {
    let dates = getDate.getDate(dateTimeExpression[0])
    queryParams += '&' + encodeURIComponent('eventStartDate') + '=' + encodeURIComponent(dates.startDate);
    if(dates.endDate != null) {
      queryParams += '&' + encodeURIComponent('eventEndDate') + '=' + encodeURIComponent(dates.endDate);
    }
  }

  //API 요청
  let response = http.getUrl(baseURL + queryParams, options);

  let festivalList = {};
  let festivals = [];
  let loopNum = response.response.body.items.item.length;
  let totalCount = response.response.body.totalCount;
  let item = null;

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
  festivalList['festivals'] = festivals;
  
  console.log(festivalList);

  return festivalList;
}