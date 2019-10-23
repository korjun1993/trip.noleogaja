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

var key = secret.get('key');

module.exports.function = function selectShowDetail(festivals) {
  let contentId = festivals.contentId;
  let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key;
  queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
  queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('noleogaja');
  queryParams += '&' + encodeURIComponent('contentId') + '=' + encodeURIComponent(contentId);
  queryParams += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('15');

  let commonResponse = http.getUrl(config.get('detailCommon.url') + queryParams + config.get('commonEndQuery'), options).response.body.items.item;
  let imageResponse = http.getUrl(config.get('detailImage.url') + queryParams, options).response.body;
  let introResponse = http.getUrl(config.get('detailIntro.url') + queryParams, options).response.body.items.item;
  let detail = {};
  let images = [];

  let totalImageCount = imageResponse.totalCount;

  if (totalImageCount != 0) {
    let loopNum = imageResponse.items.item.length;
    let item = null;

    if (loopNum == undefined) {
      item = imageResponse.items.item;
      images.push({
        url : item.originimgurl
      });
    } else {
      for (let i = 0; i < loopNum; i++) {
        item = imageResponse.items.item[i];
        images.push({
          url : item.originimgurl
        });
      }
    }
  }

  detail['addr1'] = commonResponse.addr1 ? commonResponse.addr1 : " ";
  detail['contentId'] = commonResponse.addr1 ? commonResponse.contentid : " ";
  detail['contentTypeId'] = commonResponse.contenttypeid ? commonResponse.contenttypeid : " ";
  detail['tel'] = commonResponse.tel ? commonResponse.tel : " ";
  detail['telName'] = commonResponse.telname ? commonResponse.telname : " ";
  detail['title'] = commonResponse.title ? commonResponse.title : " ";

  detail['images'] = images ? images : " ";

  detail['ageLimit'] = introResponse.agelimit ? introResponse.agelimit.replace(/(<([^>]+)>)/ig,"") : " ";
  detail['eventPlace'] = introResponse.eventplace ? introResponse.eventplace.replace(/(<([^>]+)>)/ig,"") : " ";
  detail['useTimeFestival'] = introResponse.usetimefestival ? introResponse.usetimefestival.replace(/(<([^>]+)>)/ig,"") : " ";
  detail['playTime'] = introResponse.playtime ? introResponse.playtime.replace(/(<([^>]+)>)/ig,"") : " ";
  detail['subEvent'] = introResponse.subevent ? introResponse.subevent.replace(/(<([^>]+)>)/ig,"") : " ";
  detail['placeInfo'] = introResponse.placeinfo ? introResponse.placeinfo.replace(/(<([^>]+)>)/ig,"") : " ";
  detail['discountInfoFestival'] = introResponse.discountinfofestival ? introResponse.discountinfofestival.replace(/(<([^>]+)>)/ig,"") : " ";
  
  if(commonResponse.homepage) {
    let startPos = commonResponse.homepage.indexOf('"');
    let endPos = commonResponse.homepage.indexOf('"', startPos + 1);
    detail['homePage'] = commonResponse.homepage.substring(startPos + 1, endPos);
  } else {
    detail['homePage'] = " ";
  }

  if(introResponse.eventstartdate) {
    detail['eventStartDate'] = parseInt(introResponse.eventstartdate % 1000000 / 10000) + "년 " + parseInt(introResponse.eventstartdate % 10000 / 100) + "월 " + parseInt(introResponse.eventstartdate % 100) + "일";
  } else {
    detail['eventStartDate'] = " ";
  }

  if(introResponse.eventenddate) {
    detail['eventEndDate'] = parseInt(introResponse.eventenddate % 1000000 / 10000) + "년 " + parseInt(introResponse.eventenddate % 10000 / 100) + "월 " + parseInt(introResponse.eventenddate % 100) + "일";
  } else {
    detail['eventEndDate'] = " ";
  }

  console.log(detail)

  console.log(detail);

  return detail;
}
