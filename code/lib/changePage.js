var console = require('console');
var service = require('../lib/service')

module.exports.function = function changePage (festivalList, location, date, dateInterval, point, pageChange) {
  var numOfRows = 20;
  var totalCount = festivalList.totalCount;
  var pageNo = festivalList.pageNo;
  var remain = totalCount % numOfRows;
  var devide = Math.floor(totalCount / numOfRows);
  var pageLength = remain > 0 ? devide + 1 : devide;

  if(pageChange == '다음' && pageNo < pageLength){
    pageNo++;
  }
  
  else if(pageChange == '이전' && pageNo > 1){
    pageNo--;
  }

  if(festivalList.searchType == 'NORMAL'){
    return service.findFestivals(location, date, dateInterval, pageNo);
  }
  else if(festivalList.searchType == 'GPS'){
    return service.findFestivalsByGPS (point, pageNo);
  }
}