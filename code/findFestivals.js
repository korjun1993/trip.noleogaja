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
  let festivalList = {};

  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20');
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
  queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
  queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest');
  queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P');
  
  if(location != undefined) {
    pos = location.indexOf('-');
    mainLocName = location.substring(0, pos);
    subLocName = location.substring(pos + 1);
    let returnName = location.substring(0, pos);
    
    if(subLocName != "전체") {
      returnName += subLocName;
    }

    festivalList['inputLocation'] = returnName;

    let code = getAreaCode.getAreaCode(location);
    queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent(code.mainLoc);
    if(code.subLoc != 0) {
      queryParams += '&' + encodeURIComponent('sigunguCode') + '=' + encodeURIComponent(code.subLoc);
    } else {
      subLocName = '';
    }
  } else {
    festivalList['inputLocation'] = null;
  }

  if(dateTimeExpression.length != 0) {
    let when = getDate.getDate(dateTimeExpression[0])
    
    festivalList['inputStartDate'] = when.startDate.substring(0, 4) + "년 " + when.startDate.substring(4, 6) + "월 " + when.startDate.substring(6, 8) + "일";
    festivalList['inputEndDate'] =  when.endDate.substring(0, 4) + "년 " + when.endDate.substring(4, 6) + "월 " + when.endDate.substring(6, 8) + "일";

    queryParams += '&' + encodeURIComponent('eventStartDate') + '=' + encodeURIComponent(when.startDate);
    if(when.endDate != null) {
      queryParams += '&' + encodeURIComponent('eventEndDate') + '=' + encodeURIComponent(when.endDate);
    }
  } else {
    let tday = new Date();
    let year = tday.getFullYear();
    let month = tday.getMonth() + 1
    let day = tday.getDate();
    if(month < 10){
        month = "0" + month;
    }
    if(day < 10){
        day = "0" + day;
    }
    let today = year + "" + month + "" + day;
    queryParams += '&' + encodeURIComponent('eventStartDate') + '=' + encodeURIComponent(today);

    festivalList['inputStartDate'] = year + "년 " + month + "월 " + day + "일";
    festivalList['inputEndDate'] = null;
  }

  //API 요청
  let response = http.getUrl(baseURL + queryParams, options);
  let totalCount = response.response.body.totalCount;
  let festivals = [];

  if(totalCount != 0) {
    let loopNum = response.response.body.items.item.length;
    let item = null;

    for(let i = 0; i < loopNum; i++) {
      item = response.response.body.items.item[i];
      festivals.push({
        "contentId": item.contentid,
        "title": item.title,
        "eventStartDate": item.eventstartdate,
        "eventEndDate": item.eventenddate,
        "firstImage": item.firstimage,
        "outputLocation": mainLocName + " " + subLocName
      });
    }
  }

  festivalList['pageNo'] = pageNo;
  festivalList['totalCount'] = totalCount;
  festivalList['festivals'] = festivals;
  
  console.log(festivalList)

  return festivalList;
}