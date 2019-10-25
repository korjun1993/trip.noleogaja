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

module.exports.function = function findFestivalsByGPS (near, point, pageNo) {
  if(pageNo == undefined) pageNo = 1;
  let searchType = GPS;
  let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + key;
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20');
  queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
  queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('noleogaja');
  queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('E');
  queryParams += '&' + encodeURIComponent('contentTypeId') + '=' + encodeURIComponent('15');
  queryParams += '&' + encodeURIComponent('mapX') + '=' + encodeURIComponent(point.point.longitude);
  queryParams += '&' + encodeURIComponent('mapY') + '=' + encodeURIComponent(point.point.latitude);
  queryParams += '&' + encodeURIComponent('radius') + '=' + encodeURIComponent('20000');

  let response = http.getUrl(config.get('locationBasedList.url') + queryParams, options).response.body;
  let totalCount = response.totalCount;
  let festivalList = {};
  let festivals = [];

  festivalList['inputLocation'] = ' ';
  festivalList['inputStartDate'] = ' ';
  festivalList['inputEndDate'] = ' ';

  if (totalCount != 0) {
    let loopNum = response.items.item.length;
    let item = null;

    if (loopNum == undefined) {
      item = response.items.item;
      let pos = item.addr1.indexOf(' ');
      pos = item.addr1.indexOf(' ', pos + 1);

      festivals.push({
        "contentId": item.contentid,
        "title": item.title,
        "dist": (item.dist / 1000).toFixed(1) + "km",
        "firstImage": item.firstimage,
        "outputLocation": item.addr1.substring(0, pos)
      });
    } else {
      for (let i = 0; i < loopNum; i++) {
        item = response.items.item[i];
        let pos = item.addr1.indexOf(' ');
        pos = item.addr1.indexOf(' ', pos + 1);

        festivals.push({
          "contentId": item.contentid,
          "title": item.title,
          "dist": (item.dist / 1000).toFixed(1) + "km",
          "firstImage": item.firstimage,
          "outputLocation": item.addr1.substring(0, pos)
        });
      }
    }
  }
  festivalList['searchType'] = searchType;
  festivalList['pageNo'] = pageNo;
  festivalList['totalCount'] = totalCount;
  festivalList['festivals'] = festivals;

  console.log(festivalList);

  return festivalList;
}
