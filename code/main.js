const data = require("StoreData.js")
var textLib = require('textLib')
var console = require('console')
var dates = require("dates")

module.exports = {
  "findFestivals": findFestivals,
}

function findFestivals(location, dateTimeExpression) {
  console.log(data())
  return filterFestivals(data(),location, dateTimeExpression)
  
}

function filterFestivals(candidates, location, dateTimeExpression) {
  if (location) {
    candidates = candidates.filter(function(candidate){
      return candidate.location.toLowerCase() == location.toLowerCase()
    })
  }

  if (dateTimeExpression) { //string -> date
    if (dateTimeExpression.date) { //날짜로 들어온 경우 -> 시작날짜 : 넘어온 데이터, 종료날짜 : null
      
      console.log(dateTimeExpression.date)
      var year = dateTimeExpression.date.year.toString();
      var month = dateTimeExpression.date.month.toString();
      var day = dateTimeExpression.date.day.toString();

      var startDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]); //시작날짜
      console.log(startDate);
      var endDate = null; //종료날짜
      console.log(endDate);
      
    }
    else if (dateTimeExpression.dateInterval) { //기간으로 들어온 경우
      console.log(dateTimeExpression.dateInterval);

      var year = dateTimeExpression.dateInterval.start.year.toString();
      var month = dateTimeExpression.dateInterval.start.month.toString();
      var day = dateTimeExpression.dateInterval.start.day.toString();

      var startDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]); //시작날짜
      console.log(startDate);
      
      year = dateTimeExpression.dateInterval.end.year.toString();
      month = dateTimeExpression.dateInterval.end.month.toString();
      day = dateTimeExpression.dateInterval.end.day.toString();

      var endDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]); //시작날짜
      console.log(endDate);

    }
    
  }
 
  return [];

}

