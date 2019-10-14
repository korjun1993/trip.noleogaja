const data = require("StoreData.js")
var textLib = require('textLib')
var console = require('console')

module.exports = {
  "findFestivals": findFestivals,
}

function findFestivals(location, date) {
  console.log(data())
  return filterFestivals(data(),location, date)
  
}

function filterFestivals(candidates, location, date) {
  if (location) {
    candidates = candidates.filter(function(candidate){
      return candidate.location.toLowerCase() == location.toLowerCase()
    })
  }

  if (date) {
    candidates = candidates.filter(function(candidate){
      console.log(date.substring(0,1))
      if(Number(candidate.beginDate.substring(0,1)) > Number(candidate.endDate.substring(0,1)))
      {
        return (Number(candidate.beginDate.substring(0,1))) <= Number(date.substring(0,1)) && Number(date.substring(0,1))<= (Number(candidate.endDate.substring(0,1))+12)
      }
      else
      {
        return (Number(candidate.beginDate.substring(0,1))) <= Number(date.substring(0,1)) && Number(date.substring(0,1))<= (Number(candidate.endDate.substring(0,1)))
      }
      
    })
  }


  return candidates;
}

