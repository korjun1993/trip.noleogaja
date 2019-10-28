var console = require('console');
var service = require('../lib/service')

module.exports.function = function changePage(festivalList, location, date, dateInterval, point, pageChange, layout) {
  var numOfRows = 5;
  var totalCount = festivalList.totalCount;
  var pageNo = festivalList.pageNo;
  var remain = totalCount % numOfRows;
  var devide = Math.floor(totalCount / numOfRows);
  var pageLength = remain > 0 ? devide + 1 : devide;


  // 목록 페이지에서 '다음' 또는 '이전' 처리
  if (layout['layoutType'] == 'LIST') {

    // '다음' 발화에 따른 페이지 계산
    if (pageChange == '다음' && pageNo < pageLength) {
      pageNo++;
    }

    // '이전' 발화에 따른 페이지 계산
    else if (pageChange == '이전' && pageNo > 1) {
      pageNo--;
    }

    // '검색 타입'에 따른 API 호출
    if (festivalList.searchType == 'NORMAL') {
      return service.findFestivals(location, date, dateInterval, pageNo);
    } else if (festivalList.searchType == 'GPS') {
      return service.findFestivalsByGPS(point, pageNo);
    }
  }

  // 상세 페이지 '이전' 처리
  else if(layout['layoutType'] == 'DETAIL'){
    // '검색 타입'에 따른 API 호출
    if (festivalList.searchType == 'NORMAL') {
      return service.findFestivals(location, date, dateInterval, pageNo);
    } else if (festivalList.searchType == 'GPS') {
      return service.findFestivalsByGPS(point, pageNo);
    }
  }
}