module.exports = {
  "getDate": getDate,
}


function getDate(dateTimeExpression) {
  let startDate = null;
  let endDate = null;

  if (dateTimeExpression.date) { //날짜로 들어온 경우 -> 시작날짜 : 넘어온 데이터, 종료날짜 : null
    
    let year = dateTimeExpression.date.year.toString();
    let month = dateTimeExpression.date.month.toString();
    let day = dateTimeExpression.date.day.toString();

    startDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]); //시작날짜
  }
  else if (dateTimeExpression.dateInterval) { //기간으로 들어온 경우

    var year = dateTimeExpression.dateInterval.start.year.toString();
    var month = dateTimeExpression.dateInterval.start.month.toString();
    var day = dateTimeExpression.dateInterval.start.day.toString();

    startDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]); //시작날짜
    
    year = dateTimeExpression.dateInterval.end.year.toString();
    month = dateTimeExpression.dateInterval.end.month.toString();
    day = dateTimeExpression.dateInterval.end.day.toString();

    endDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]); //시작날짜
  }

  return {
    "startDate": startDate,
    "endDate": endDate
  }
}