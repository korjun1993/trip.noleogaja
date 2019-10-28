module.exports = {
  "getAreaCode": getAreaCode,
}


function getAreaCode(location) {
  let map = new HashMap();
  return map.get(location);
}

HashMap = function() {
    this.map = {
      "서울특별시-전체" : {mainLoc: 1, subLoc: 0},
      "서울특별시-강남구" : {mainLoc: 1, subLoc: 1},
      "서울특별시-강동구" : {mainLoc: 1, subLoc: 2},
      "서울특별시-강북구" : {mainLoc: 1, subLoc: 3},
      "서울특별시-강서구" : {mainLoc: 1, subLoc: 4},
      "서울특별시-관악구" : {mainLoc: 1, subLoc: 5},
      "서울특별시-도봉구" : {mainLoc: 1, subLoc: 6},
      "서울특별시-구로구" : {mainLoc: 1, subLoc: 7},
      "서울특별시-금천구" : {mainLoc: 1, subLoc: 8},
      "서울특별시-노원구" : {mainLoc: 1, subLoc: 9},
      "서울특별시-도봉구" : {mainLoc: 1, subLoc: 10},
      "서울특별시-동대문구" : {mainLoc: 1, subLoc: 11},
      "서울특별시-동작구" : {mainLoc: 1, subLoc: 12},
      "서울특별시-마포구" : {mainLoc: 1, subLoc: 13},
      "서울특별시-서대문구" : {mainLoc: 1, subLoc: 14},
      "서울특별시-서초구" : {mainLoc: 1, subLoc: 15},
      "서울특별시-성동구" : {mainLoc: 1, subLoc: 16},
      "서울특별시-성북구" : {mainLoc: 1, subLoc: 17},
      "서울특별시-송파구" : {mainLoc: 1, subLoc: 18},
      "서울특별시-양천구" : {mainLoc: 1, subLoc: 19},
      "서울특별시-영등포구" : {mainLoc: 1, subLoc: 20},
      "서울특별시-용산구" : {mainLoc: 1, subLoc: 21},
      "서울특별시-은평구" : {mainLoc: 1, subLoc: 22},
      "서울특별시-종로구" : {mainLoc: 1, subLoc: 23},
      "서울특별시-중구" : {mainLoc: 1, subLoc: 24},
      "서울특별시-중랑구" : {mainLoc: 1, subLoc: 25},
      "인천광역시-전체" : {mainLoc: 2, subLoc: 0},
      "인천광역시-강화군" : {mainLoc: 2, subLoc: 1},
      "인천광역시-계양구" : {mainLoc: 2, subLoc: 2},
      "인천광역시-미추홀구" : {mainLoc: 2, subLoc: 3},
      "인천광역시-남동구" : {mainLoc: 2, subLoc: 4},
      "인천광역시-동구" : {mainLoc: 2, subLoc: 5},
      "인천광역시-부평구" : {mainLoc: 2, subLoc: 6},
      "인천광역시-서구" : {mainLoc: 2, subLoc: 7},
      "인천광역시-연수구" : {mainLoc: 2, subLoc: 8},
      "인천광역시-옹진군" : {mainLoc: 2, subLoc: 9},
      "인천광역시-중구" : {mainLoc: 2, subLoc: 10},
      "대전광역시-전체" : {mainLoc: 3, subLoc: 0},
      "대전광역시-대덕구" : {mainLoc: 3, subLoc: 1},
      "대전광역시-동구" : {mainLoc: 3, subLoc: 2},
      "대전광역시-서구" : {mainLoc: 3, subLoc: 3},
      "대전광역시-유성구" : {mainLoc: 3, subLoc: 4},
      "대전광역시-중구" : {mainLoc: 3, subLoc: 5},
      "대구광역시-전체" : {mainLoc: 4, subLoc: 0},
      "대구광역시-남구" : {mainLoc: 4, subLoc: 1},
      "대구광역시-달서구" : {mainLoc: 4, subLoc: 2},
      "대구광역시-달성군" : {mainLoc: 4, subLoc: 3},
      "대구광역시-동구" : {mainLoc: 4, subLoc: 4},
      "대구광역시-북구" : {mainLoc: 4, subLoc: 5},
      "대구광역시-서구" : {mainLoc: 4, subLoc: 6},
      "대구광역시-수성구" : {mainLoc: 4, subLoc: 7},
      "대구광역시-중구" : {mainLoc: 4, subLoc: 8},
      "광주광역시-전체" : {mainLoc: 5, subLoc: 0},
      "광주광역시-광산구" : {mainLoc: 5, subLoc: 1},
      "광주광역시-남구" : {mainLoc: 5, subLoc: 2},
      "광주광역시-동구" : {mainLoc: 5, subLoc: 3},
      "광주광역시-북구" : {mainLoc: 5, subLoc: 4},
      "광주광역시-서구" : {mainLoc: 5, subLoc: 5},
      "부산광역시-전체" : {mainLoc: 6, subLoc: 0},
      "부산광역시-강서구" : {mainLoc: 6, subLoc: 1},
      "부산광역시-금정구" : {mainLoc: 6, subLoc: 2},
      "부산광역시-기장군" : {mainLoc: 6, subLoc: 3},
      "부산광역시-남구" : {mainLoc: 6, subLoc: 4},
      "부산광역시-동구" : {mainLoc: 6, subLoc: 5},
      "부산광역시-동래구" : {mainLoc: 6, subLoc: 6},
      "부산광역시-부산진구" : {mainLoc: 6, subLoc: 7},
      "부산광역시-북구" : {mainLoc: 6, subLoc: 8},
      "부산광역시-사상구" : {mainLoc: 6, subLoc: 9},
      "부산광역시-사하구" : {mainLoc: 6, subLoc: 10},
      "부산광역시-서구" : {mainLoc: 6, subLoc: 11},
      "부산광역시-수영구" : {mainLoc: 6, subLoc: 12},
      "부산광역시-연제구" : {mainLoc: 6, subLoc: 13},
      "부산광역시-영도구" : {mainLoc: 6, subLoc: 14},
      "부산광역시-중구" : {mainLoc: 6, subLoc: 15},
      "부산광역시-해운대구" : {mainLoc: 6, subLoc: 16},
      "울산광역시-전체" : {mainLoc: 7, subLoc: 0},
      "울산광역시-중구" : {mainLoc: 7, subLoc: 1},
      "울산광역시-남구" : {mainLoc: 7, subLoc: 2},
      "울산광역시-동구" : {mainLoc: 7, subLoc: 3},
      "울산광역시-북구" : {mainLoc: 7, subLoc: 4},
      "울산광역시-울주군" : {mainLoc: 7, subLoc: 5},
      "세종특별자치시-전체" : {mainLoc: 8, subLoc: 1},
      "경기도-전체" : {mainLoc: 31, subLoc: 0},
      "경기도-가평군" : {mainLoc: 31, subLoc: 1},
      "경기도-고양시" : {mainLoc: 31, subLoc: 2},
      "경기도-과천시" : {mainLoc: 31, subLoc: 3},
      "경기도-광명시" : {mainLoc: 31, subLoc: 4},
      "경기도-광주시" : {mainLoc: 31, subLoc: 5},
      "경기도-구리시" : {mainLoc: 31, subLoc: 6},
      "경기도-군포시" : {mainLoc: 31, subLoc: 7},
      "경기도-김포시" : {mainLoc: 31, subLoc: 8},
      "경기도-남양주시" : {mainLoc: 31, subLoc: 9},
      "경기도-동두천시" : {mainLoc: 31, subLoc: 10},
      "경기도-부천시" : {mainLoc: 31, subLoc: 11},
      "경기도-성남시" : {mainLoc: 31, subLoc: 12},
      "경기도-수원시" : {mainLoc: 31, subLoc: 13},
      "경기도-시흥시" : {mainLoc: 31, subLoc: 14},
      "경기도-안산시" : {mainLoc: 31, subLoc: 15},
      "경기도-안성시" : {mainLoc: 31, subLoc: 16},
      "경기도-안양시" : {mainLoc: 31, subLoc: 17},
      "경기도-양주시" : {mainLoc: 31, subLoc: 18},
      "경기도-양평군" : {mainLoc: 31, subLoc: 19},
      "경기도-여주시" : {mainLoc: 31, subLoc: 20},
      "경기도-연천군" : {mainLoc: 31, subLoc: 21},
      "경기도-오산시" : {mainLoc: 31, subLoc: 22},
      "경기도-용인시" : {mainLoc: 31, subLoc: 23},
      "경기도-의왕시" : {mainLoc: 31, subLoc: 24},
      "경기도-의정부시" : {mainLoc: 31, subLoc: 25},
      "경기도-이천시" : {mainLoc: 31, subLoc: 26},
      "경기도-파주시" : {mainLoc: 31, subLoc: 27},
      "경기도-평택시" : {mainLoc: 31, subLoc: 28},
      "경기도-포천시" : {mainLoc: 31, subLoc: 29},
      "경기도-하남시" : {mainLoc: 31, subLoc: 30},
      "경기도-화성시" : {mainLoc: 31, subLoc: 31},
      "강원도-전체" : {mainLoc: 32, subLoc: 0},
      "강원도-강릉시" : {mainLoc: 32, subLoc: 1},
      "강원도-고성군" : {mainLoc: 32, subLoc: 2},
      "강원도-동해시" : {mainLoc: 32, subLoc: 3},
      "강원도-삼척시" : {mainLoc: 32, subLoc: 4},
      "강원도-속초시" : {mainLoc: 32, subLoc: 5},
      "강원도-양구군" : {mainLoc: 32, subLoc: 6},
      "강원도-양양군" : {mainLoc: 32, subLoc: 7},
      "강원도-영월군" : {mainLoc: 32, subLoc: 8},
      "강원도-원주시" : {mainLoc: 32, subLoc: 9},
      "강원도-인제군" : {mainLoc: 32, subLoc: 10},
      "강원도-정선군" : {mainLoc: 32, subLoc: 11},
      "강원도-철원군" : {mainLoc: 32, subLoc: 12},
      "강원도-춘천시" : {mainLoc: 32, subLoc: 13},
      "강원도-태백시" : {mainLoc: 32, subLoc: 14},
      "강원도-평창군" : {mainLoc: 32, subLoc: 15},
      "강원도-홍천군" : {mainLoc: 32, subLoc: 16},
      "강원도-화천군" : {mainLoc: 32, subLoc: 17},
      "강원도-횡성군" : {mainLoc: 32, subLoc: 18},
      "충청북도-전체" : {mainLoc: 33, subLoc: 0},
      "충청북도-괴산군" : {mainLoc: 33, subLoc: 1},
      "충청북도-단양군" : {mainLoc: 33, subLoc: 2},
      "충청북도-보은군" : {mainLoc: 33, subLoc: 3},
      "충청북도-영동군" : {mainLoc: 33, subLoc: 4},
      "충청북도-옥천군" : {mainLoc: 33, subLoc: 5},
      "충청북도-음성군" : {mainLoc: 33, subLoc: 6},
      "충청북도-제천시" : {mainLoc: 33, subLoc: 7},
      "충청북도-진천군" : {mainLoc: 33, subLoc: 8},
      "충청북도-청원군" : {mainLoc: 33, subLoc: 9},
      "충청북도-청주시" : {mainLoc: 33, subLoc: 10},
      "충청북도-충주시" : {mainLoc: 33, subLoc: 11},
      "충청북도-증평군" : {mainLoc: 33, subLoc: 12},
      "충청남도-전체" : {mainLoc: 34, subLoc: 0},
      "충청남도-공주시" : {mainLoc: 34, subLoc: 1},
      "충청남도-금산군" : {mainLoc: 34, subLoc: 2},
      "충청남도-논산시" : {mainLoc: 34, subLoc: 3},
      "충청남도-당진시" : {mainLoc: 34, subLoc: 4},
      "충청남도-보령시" : {mainLoc: 34, subLoc: 5},
      "충청남도-부여군" : {mainLoc: 34, subLoc: 6},
      "충청남도-서산시" : {mainLoc: 34, subLoc: 7},
      "충청남도-서천군" : {mainLoc: 34, subLoc: 8},
      "충청남도-아산시" : {mainLoc: 34, subLoc: 9},
      "충청남도-예산군" : {mainLoc: 34, subLoc: 11},
      "충청남도-천안시" : {mainLoc: 34, subLoc: 12},
      "충청남도-청양군" : {mainLoc: 34, subLoc: 13},
      "충청남도-태안군" : {mainLoc: 34, subLoc: 14},
      "충청남도-홍성군" : {mainLoc: 34, subLoc: 15},
      "충청남도-계룡시" : {mainLoc: 34, subLoc: 16},
      "경상북도-전체" : {mainLoc: 35, subLoc: 0},
      "경상북도-경산시" : {mainLoc: 35, subLoc: 1},
      "경상북도-경주시" : {mainLoc: 35, subLoc: 2},
      "경상북도-고령군" : {mainLoc: 35, subLoc: 3},
      "경상북도-구미시" : {mainLoc: 35, subLoc: 4},
      "경상북도-군위군" : {mainLoc: 35, subLoc: 5},
      "경상북도-김천시" : {mainLoc: 35, subLoc: 6},
      "경상북도-문경시" : {mainLoc: 35, subLoc: 7},
      "경상북도-봉화군" : {mainLoc: 35, subLoc: 8},
      "경상북도-상주시" : {mainLoc: 35, subLoc: 9},
      "경상북도-성주군" : {mainLoc: 35, subLoc: 10},
      "경상북도-안동시" : {mainLoc: 35, subLoc: 11},
      "경상북도-영덕군" : {mainLoc: 35, subLoc: 12},
      "경상북도-영양군" : {mainLoc: 35, subLoc: 13},
      "경상북도-영주시" : {mainLoc: 35, subLoc: 14},
      "경상북도-영천시" : {mainLoc: 35, subLoc: 15},
      "경상북도-예천군" : {mainLoc: 35, subLoc: 16},
      "경상북도-울릉군" : {mainLoc: 35, subLoc: 17},
      "경상북도-울진군" : {mainLoc: 35, subLoc: 18},
      "경상북도-의성군" : {mainLoc: 35, subLoc: 19},
      "경상북도-청도군" : {mainLoc: 35, subLoc: 20},
      "경상북도-청송군" : {mainLoc: 35, subLoc: 21},
      "경상북도-칠곡군" : {mainLoc: 35, subLoc: 22},
      "경상북도-포항시" : {mainLoc: 35, subLoc: 23},
      "경상남도-전체" : {mainLoc: 36, subLoc: 0},
      "경상남도-거제시" : {mainLoc: 36, subLoc: 1},
      "경상남도-거창군" : {mainLoc: 36, subLoc: 2},
      "경상남도-고성군" : {mainLoc: 36, subLoc: 3},
      "경상남도-김해시" : {mainLoc: 36, subLoc: 4},
      "경상남도-남해군" : {mainLoc: 36, subLoc: 5},
      "경상남도-마산시" : {mainLoc: 36, subLoc: 6},
      "경상남도-밀양시" : {mainLoc: 36, subLoc: 7},
      "경상남도-사천시" : {mainLoc: 36, subLoc: 8},
      "경상남도-산청군" : {mainLoc: 36, subLoc: 9},
      "경상남도-양산시" : {mainLoc: 36, subLoc: 10},
      "경상남도-의령군" : {mainLoc: 36, subLoc: 12},
      "경상남도-진주시" : {mainLoc: 36, subLoc: 13},
      "경상남도-진해시" : {mainLoc: 36, subLoc: 14},
      "경상남도-창녕군" : {mainLoc: 36, subLoc: 15},
      "경상남도-창원시" : {mainLoc: 36, subLoc: 16},
      "경상남도-통영시" : {mainLoc: 36, subLoc: 17},
      "경상남도-하동군" : {mainLoc: 36, subLoc: 18},
      "경상남도-함안군" : {mainLoc: 36, subLoc: 19},
      "경상남도-함양군" : {mainLoc: 36, subLoc: 20},
      "경상남도-합천군" : {mainLoc: 36, subLoc: 21},
      "전라북도-전체" : {mainLoc: 37, subLoc: 0},
      "전라북도-고창군" : {mainLoc: 37, subLoc: 1},
      "전라북도-군산시" : {mainLoc: 37, subLoc: 2},
      "전라북도-김제시" : {mainLoc: 37, subLoc: 3},
      "전라북도-남원시" : {mainLoc: 37, subLoc: 4},
      "전라북도-무주군" : {mainLoc: 37, subLoc: 5},
      "전라북도-부안군" : {mainLoc: 37, subLoc: 6},
      "전라북도-순창군" : {mainLoc: 37, subLoc: 7},
      "전라북도-완주군" : {mainLoc: 37, subLoc: 8},
      "전라북도-익산시" : {mainLoc: 37, subLoc: 9},
      "전라북도-임실군" : {mainLoc: 37, subLoc: 10},
      "전라북도-장수군" : {mainLoc: 37, subLoc: 11},
      "전라북도-전주시" : {mainLoc: 37, subLoc: 12},
      "전라북도-정읍시" : {mainLoc: 37, subLoc: 13},
      "전라북도-진안군" : {mainLoc: 37, subLoc: 14},
      "전라남도-전체" : {mainLoc: 38, subLoc: 0},
      "전라남도-강진군" : {mainLoc: 38, subLoc: 1},
      "전라남도-고흥군" : {mainLoc: 38, subLoc: 2},
      "전라남도-곡성군" : {mainLoc: 38, subLoc: 3},
      "전라남도-광양시" : {mainLoc: 38, subLoc: 4},
      "전라남도-구례군" : {mainLoc: 38, subLoc: 5},
      "전라남도-나주시" : {mainLoc: 38, subLoc: 6},
      "전라남도-담양군" : {mainLoc: 38, subLoc: 7},
      "전라남도-목포시" : {mainLoc: 38, subLoc: 8},
      "전라남도-무안군" : {mainLoc: 38, subLoc: 9},
      "전라남도-보성군" : {mainLoc: 38, subLoc: 10},
      "전라남도-순천시" : {mainLoc: 38, subLoc: 11},
      "전라남도-신안군" : {mainLoc: 38, subLoc: 12},
      "전라남도-여수시" : {mainLoc: 38, subLoc: 13},
      "전라남도-영광군" : {mainLoc: 38, subLoc: 16},
      "전라남도-영암군" : {mainLoc: 38, subLoc: 17},
      "전라남도-완도군" : {mainLoc: 38, subLoc: 18},
      "전라남도-장성군" : {mainLoc: 38, subLoc: 19},
      "전라남도-장흥군" : {mainLoc: 38, subLoc: 20},
      "전라남도-진도군" : {mainLoc: 38, subLoc: 21},
      "전라남도-함평군" : {mainLoc: 38, subLoc: 22},
      "전라남도-해남군" : {mainLoc: 38, subLoc: 23},
      "전라남도-화순군" : {mainLoc: 38, subLoc: 24},
      "제주도-전체" : {mainLoc: 39, subLoc: 0},
      "제주도-남제주군" : {mainLoc: 39, subLoc: 1},
      "제주도-북제주군" : {mainLoc: 39, subLoc: 2},
      "제주도-서귀포시" : {mainLoc: 39, subLoc: 3},
      "제주도-제주시" : {mainLoc: 39, subLoc: 4}
    };
  };

  HashMap.prototype = {
    get: function(key) {
      return this.map[key];
    }
  }