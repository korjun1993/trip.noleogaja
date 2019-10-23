module.exports.function = function openBrowser (homePage, tel) {
  let result = '';

  if(tel != undefined) {
    result = tel;
  } else {
    result = homePage;
  }

  return result;
}
