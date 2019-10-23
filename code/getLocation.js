// LocationExceptionHandler 액션에 의해 실행되는 자바스크립트 입니다.

module.exports.function = function locationErrorHandler (locationError) {
  // @param LocationException locationException
  // locationException 의 값은 다음 중 하나입니다.
  // 중구, 동구, 서구, 남구, 북구, 강서, 광주, 고성

  let map = new HashMap();
  return map.get(locationError);
  // return 중 사용자가 하나의 지역을 선택할 수 있도록 합니다.  
}

HashMap = function() {
    this.map = {
      "중구": ["서울특별시-중구", "인천광역시-중구", "대전광역시-중구", "대구광역시-중구", "부산광역시-중구", "울산광역시-중구"],
      "동구": ["인천광역시-동구", "대전광역시-동구", "대구광역시-동구", "광주광역시-동구", "부산광역시-동구", "울산광역시-동구"],
      "서구": ["인천광역시-서구", "대전광역시-서구", "대구광역시-서구", "광주광역시-서구", "부산광역시-서구"],
      "남구": ["대구광역시-남구", "광주광역시-남구", "부산광역시-남구", "울산광역시-남구"],
      "북구": ["대구광역시-북구", "광주광역시-북구", "부산광역시-북구", "울산광역시-북구"],
      "강서": ["서울특별시-강서구", "부산광역시-강서구"],
      "광주": ["광주광역시-전체", "경기도-광주시"],
      "고성": ["강원도-고성군", "경상남도-고성군"]
    };
  };

  HashMap.prototype = {
    get: function(key) {
      return this.map[key];
    }
  }