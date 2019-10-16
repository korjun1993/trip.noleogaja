//   module.exports.function = function findFestivals (location) {
//   const fakeData = require("StoreData.js");
//   const console = require("console");
  
//   var fesinfo = [];
//   for(let i  =0; i<fakeData.length;i++)
//   {
//     if(fakeData[i].location == String(location))
//     {
//       fesinfo.push(fakeData[i]);
//     }
//   }
  
//   return fesinfo;
// }
var console = require('console')
var dates = require("dates")
const main = require("main.js")

module.exports.function = function findFestivals (location, dateTimeExpression) {

  //이미 지난 날짜는 제외
  var when;
  var today = new Date();
  for(var i = 0; i < dateTimeExpression.length; i++){
     when = new Date(dates.ZonedDateTime.fromDate(dateTimeExpression[i].date).toIsoString());
     if( today > when) {
       dateTimeExpression.splice(i, 1);
     }
  }

  return main.findFestivals(location, dateTimeExpression);
}
