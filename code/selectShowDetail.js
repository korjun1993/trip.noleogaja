var datailCommonURL = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon';
var detailImageURL = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailImage';
var detailIntroURL = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro';
var key = 'durJHB4Hx8wuHRX6IU2cY1TW%2BbXLOTxyoLSYFV4FQmx4MzmDWvrKzFzwPtUqD3Bjte974mth8StXqjseFlCR7A%3D%3D';
var http = require('http');
var options = {
  format: 'json',
  headers: {
    'accept': 'application/json'
  },
};

var console = require('console')

module.exports.function = function selectShowDetail (contentId) {
  let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key;
  queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
  queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('noleogaja');
  queryParams += '&' + encodeURIComponent('contentId') + '=' + encodeURIComponent(contentId);
  queryParams += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('15');
  
  let commonResponse = http.getUrl(datailCommonURL + queryParams, options).response.body.items.item;
  let imageResponse = http.getUrl(detailImageURL + queryParams, options).response.body;
  let introResponse = http.getUrl(detailIntroURL + queryParams, options).response.body.items.item;
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

  detail['addr1'] = commonResponse.addr1;
  detail['contentId'] = commonResponse.contentid;
  detail['contentTypeId'] = commonResponse.contenttypeid;
  detail['homePage'] = commonResponse.homepage;
  detail['overView'] = commonResponse.overview;
  detail['tel'] = commonResponse.tel;
  detail['telName'] = commonResponse.telname;
  detail['title'] = commonResponse.title;

  detail['imgUrl'] = images;

  detail['ageLimit'] = introResponse.agelimit;
  detail['discountInfoFestival'] = introResponse.discountinfofestival;
  detail['eventStartDate'] = introResponse.eventstartdate;
  detail['eventEndDate'] = introResponse.eventenddate;
  detail['eventPlace'] = introResponse.eventplace;
  detail['useTimeFestival'] = introResponse.usetimefestival;
  detail['placeInfo'] = introResponse.placeinfo;
  detail['playTime'] = introResponse.playtime;
  detail['subEvent'] = introResponse.subevent;

  return detail;
}
