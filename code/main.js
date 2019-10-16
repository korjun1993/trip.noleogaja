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
    if (dateTimeExpression.date) { //날짜로 들어온 경우
      console.log(dateTimeExpression.date)
      var when = new Date(dates.ZonedDateTime.fromDate(dateTimeExpression.date).toIsoString());
       candidates = candidates.filter(function(candidate){

        var y = candidate.beginDate.substr(0,4);
        var m = candidate.beginDate.substr(4,2);
        var d = candidate.beginDate.substr(6,2); 
        var startDate = new Date(y, m - 1, d); //해당 행사의 시작날짜

        y = candidate.endDate.substr(0,4);
        m = candidate.endDate.substr(4,2);
        d = candidate.endDate.substr(6,2);
        var endDate = new Date(y, m - 1, d); //해당 행사의 종료날짜
        
        if((startDate <= when) && (endDate >= when)){
          console.log(startDate);
          console.log(when);
          console.log(endDate);
          console.log("@@@@@@@@@@@@@@@@@")
        }
        return (startDate <= when) && (endDate >= when)
      })
    }
    else if (dateTimeExpression.dateInterval) { //기간으로 들어온 경우
      console.log(dateTimeExpression.dateInterval);
      whenStart = new Date(dates.ZonedDateTime.of(
        dateTimeExpression.dateInterval.start.year,
        dateTimeExpression.dateInterval.start.month,
        dateTimeExpression.dateInterval.start.day).toIsoString());
        
      whenEnd = new Date(dates.ZonedDateTime.of(
        dateTimeExpression.dateInterval.end.year,
        dateTimeExpression.dateInterval.end.month,
        dateTimeExpression.dateInterval.end.day).toIsoString());

        candidates = candidates.filter(function(candidate){
          var y = candidate.beginDate.substr(0,4);
          var m = candidate.beginDate.substr(4,2);
          var d = candidate.beginDate.substr(6,2); 
          var startDate = new Date(y, m - 1, d); //해당 행사의 시작날짜

          y = candidate.endDate.substr(0,4);
          m = candidate.endDate.substr(4,2);
          d = candidate.endDate.substr(6,2);
          var endDate = new Date(y, m - 1, d); //해당 행사의 종료날짜

          if(((startDate >= whenStart) && (startDate <= whenEnd)) || ((endDate >= whenStart) && (endDate <= whenEnd))){
            console.log(startDate);
            console.log(whenStart);
            console.log(whenEnd);
            console.log(endDate);
            console.log("@@@@@@@@@@@@@@@@@")
          }
          return ((startDate >= whenStart) && (startDate <= whenEnd)) || ((endDate >= whenStart) && (endDate <= whenEnd))
        })
    }
    
  }
  
  return candidates;

}

