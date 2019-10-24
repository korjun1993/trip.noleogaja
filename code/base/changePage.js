var console = require('console');
var service = require('../lib/service')

module.exports.function = function changePage (festivalList, location, date, dateInterval, pageChange) {
  
  var numOfRows = 20;
  var totalCount = festivalList.totalCount;
  var pageNo = festivalList.pageNo;
  var remain = totalCount % numOfRows;
  var devide = totalCount / numOfRows;
  var pageLength = remain > 0 ? devide + 1 : devide;

  if(pageChange == '다음' && pageNo < pageLength){
    pageNo++;
  }
  
  else if(pageChange == '이전' && pageNo > 1){
    pageNo--;
  }
  
  console.log(service);

  return service.findFestivals(location, date, dateInterval, pageNo);
}