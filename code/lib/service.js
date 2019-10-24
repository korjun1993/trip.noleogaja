var http = require('http');
var options = {
  format: 'json',
  headers: {
    'accept': 'application/json'
  },
};

var console = require('console');
var config = require('config');
var secret = require('secret');
var dates = require("dates");

const getAreaCode = require('lib/getAreaCode.js');
const getDate = require('lib/getDate.js');

var key = secret.get('key');

module.exports = {
  "findFestivals": findFestivals,
  "filterString" : filterString
}

function findFestivals (location, date, dateInterval, pageNo) {
  if(pageNo == undefined) pageNo = 1;
  let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key;
  let festivalList = {};

  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20');
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
  queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
  queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest');
  queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('P');
  
  if(location != undefined) {
    let pos = location.indexOf('-');
    let mainLocName = location.substring(0, pos);
    let subLocName = location.substring(pos + 1);
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
    festivalList['inputLocation'] = ' ';
  }

  if(date.length != 0 || dateInterval.length != 0) {
   
    if(date.length != 0){
      let when = getDate.getDate(date[0])
    }else if(dateInterval.length != 0){
      let when = getDate.getDate(dateInterval[0])
    }
    console.log("@@@@@@@@")
    console.log(when)
    festivalList['inputStartDate'] = when.startDate.substring(0, 4) + "년 " + when.startDate.substring(4, 6) + "월 " + when.startDate.substring(6, 8) + "일";
    
    if(when.endDate == null) {
      festivalList['inputEndDate'] = ' ';
    } else {
      festivalList['inputEndDate'] =  when.endDate.substring(0, 4) + "년 " + when.endDate.substring(4, 6) + "월 " + when.endDate.substring(6, 8) + "일";
    }

    queryParams += '&' + encodeURIComponent('eventStartDate') + '=' + encodeURIComponent(when.startDate);
    if(when.endDate != null) {
      queryParams += '&' + encodeURIComponent('eventEndDate') + '=' + encodeURIComponent(when.endDate);
    } else {
      queryParams += '&' + encodeURIComponent('eventEndDate') + '=' + encodeURIComponent(when.startDate);
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
    festivalList['inputEndDate'] = ' ';
  }

  //API 요청
  let response = http.getUrl(config.get('searchFestival.url') + queryParams, options).response.body;
  let totalCount = response.totalCount;
  
  let festivals = [];

  if(totalCount != 0) {
    let loopNum = response.items.item.length;
    let item = null;
    
    if(loopNum == undefined) {
      item = response.items.item;
      let pos = item.addr1.indexOf(' ');
      pos = item.addr1.indexOf(' ', pos + 1);

      festivals.push({
        "contentId": item.contentid,
        "title": item.title,
        "eventStartDate": parseInt(item.eventstartdate % 1000000 / 10000) + "년 " + parseInt(item.eventstartdate % 10000 / 100) + "월 " + parseInt(item.eventstartdate % 100) + "일",
        "eventEndDate": parseInt(item.eventenddate % 1000000 / 10000) + "년 " + parseInt(item.eventenddate % 10000 / 100) + "월 " + parseInt(item.eventenddate % 100) + "일",
        "firstImage": item.firstimage,
        "outputLocation": item.addr1.substring(0, pos)
      });
    } else {
      for(let i = 0; i < loopNum; i++) {
        item = response.items.item[i];
        let pos = item.addr1.indexOf(' ');
        pos = item.addr1.indexOf(' ', pos + 1);

        festivals.push({
          "contentId": item.contentid,
          "title": item.title,
          "eventStartDate": parseInt(item.eventstartdate % 1000000 / 10000) + "년 " + parseInt(item.eventstartdate % 10000 / 100) + "월 " + parseInt(item.eventstartdate % 100) + "일",
          "eventEndDate": parseInt(item.eventenddate % 1000000 / 10000) + "년 " + parseInt(item.eventenddate % 10000 / 100) + "월 " + parseInt(item.eventenddate % 100) + "일",
          "firstImage": item.firstimage,
          "outputLocation": item.addr1.substring(0, pos)
        });
      }
    }
  }

  festivalList['pageNo'] = pageNo;
  festivalList['totalCount'] = totalCount;
  festivalList['festivals'] = festivals;
  
  console.log(festivalList)

  return festivalList;
}

function filterString(str) {
  return str.replace(/(<([^>]+)>)/ig,"").replace(/&nbsp;/gi," ").replace(/&gt;/gi, ">");
}
