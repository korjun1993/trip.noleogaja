module.exports = {
  "getDate": getDate,
}


function getDate(dateTimeExpression) { //'Date' or 'DateInterval'
  let startDate = null;
  let endDate = null;

  if (dateTimeExpression.end == undefined) { //날짜로 들어온 경우
    
    let year = dateTimeExpression.year.toString();
    let month = dateTimeExpression.month.toString();
    let day = dateTimeExpression.day.toString();

    startDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]);
    endDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]);
  }
  else if (dateTimeExpression.end != undefined) { //기간으로 들어온 경우

    var year = dateTimeExpression.start.year.toString();
    var month = dateTimeExpression.start.month.toString();
    var day = dateTimeExpression.start.day.toString();

    startDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]);
    
    year = dateTimeExpression.end.year.toString();
    month = dateTimeExpression.end.month.toString();
    day = dateTimeExpression.end.day.toString();

    endDate = year + (month[1] ? month : '0' + month[0]) + (day[1] ? day : '0' + day[0]);
  }

  return {
    "startDate": startDate,
    "endDate": endDate
  }
}