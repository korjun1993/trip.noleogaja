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

module.exports.function = function selectShowDetail (festivals) {
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

  if(totalImageCount != 0) {
    let loopNum = imageResponse.items.item.length;
    let item = null;

    if(loopNum == undefined) {
      item = imageResponse.items.item;
      images.push(item.originimgurl);
    } else {
      for(let i = 0; i < loopNum; i++) {
        item = imageResponse.items.item[i];
        images.push(item.originimgurl);
      }
    }
  }

  detail['addr1'] = commonResponse.addr1 ? commonResponse.addr1 : " ";
  detail['contentId'] = commonResponse.addr1 ? commonResponse.contentid : " ";
  detail['contentTypeId'] = commonResponse.contenttypeid ? commonResponse.contenttypeid : " ";
  detail['homePage'] = commonResponse.homepage ? commonResponse.homepage : " ";
  detail['overView'] = commonResponse.overview ? commonResponse.overview : " ";
  detail['tel'] = commonResponse.tel ? commonResponse.tel : " ";
  detail['telName'] = commonResponse.telname ? commonResponse.telname : " ";
  detail['title'] = commonResponse.title ? commonResponse.title : " ";

  detail['imgUrl'] = images ? images : " ";

  detail['ageLimit'] = introResponse.agelimit ? introResponse.agelimit : " ";
  detail['discountInfoFestival'] = introResponse.discountinfofestival ? introResponse.discountinfofestival : " ";
  detail['eventStartDate'] = introResponse.eventstartdate ? introResponse.eventstartdate : " ";
  detail['eventEndDate'] = introResponse.eventenddate ? introResponse.eventenddate : " ";
  detail['eventPlace'] = introResponse.eventplace ? introResponse.eventplace : " ";
  detail['useTimeFestival'] = introResponse.usetimefestival ? introResponse.usetimefestival : " ";
  detail['placeInfo'] = introResponse.placeinfo ? introResponse.placeinfo : " ";
  detail['playTime'] = introResponse.playtime ? introResponse.playtime : " ";
  detail['subEvent'] = introResponse.subevent ? introResponse.subevent : " ";

  console.log(detail);

  return detail;
}
