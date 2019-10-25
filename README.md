# 놀러가자

<p align="center">
  <img src="http://img.shields.io/:license-mit-green.svg"/>
  <img src="https://img.shields.io/badge/platform-bixby-blue.svg"/>
  <img src="https://img.shields.io/badge/language-javascript-brightgreen.svg"/>
</p>

안녕하세요. 놀러가세~ 놀러가세~ 놀러가자의 Letsby팀입니다.

## 목차

1. [캡슐구조](#캡슐구조)
2. [캡슐설정](#캡슐설정)
3. [사전(Dictionary)](#사전)
4. [발화(Training)](#발화)
5. [트랜잭션](#트랜잭션)
6. [레이아웃](#레이아웃)
7. [에러처리](#에러처리)
8. [HTTP 요청](#HTTP-요청)
9. [외부 어플리케이션 실행](#외부-어플리케이션-실행)
10. [부록](#부록)  

## 캡슐구조

```bash
├── README.md                                 - 리드미 파일
│
├── code/                                     - 비지니스 로직 폴더
│   │ 
│   ├── find/                                 - 축제 찾는 기능
│   │   ├── findFestivals.js
│   │   └── findFestivalsByGPS.js
│   │ 
│   ├── lib/                                  - 자주 사용하는 기능
│   │   ├── changePage.js
│   │   ├── getAreaCode.js
│   │   ├── getDate.js
│   │   ├── getLocation.js
│   │   ├── openBrowser.js
│   │   └── service.js
│   │ 
│   └── select/                               - 상세 페이지 기능
│       └── selectShowDetail.js
│ 
├── img/                                      - 이미지 폴더
│   ├── merge_message.PNG
│   └── merge_message2.PNG
│ 
├── models/                                   - 모델 폴더
│   │ 
│   ├── actions/                              - 액션 폴더
│   │   │ 
│   │   ├── base/                             - 기본 액션
│   │   │   ├── ChnagePage.model.bxb
│   │   │   ├── GetLocation.model.bxb
│   │   │   └── OpenBrowser.model.bxb
│   │   │ 
│   │   ├── find/                             - 축제 찾는 액션
│   │   │   ├── FindFestivals.model.bxb
│   │   │   └── FindFestivalsByGPS.model.bxb
│   │   │ 
│   │   └── select/                           - 상세 페이지 액션
│   │       └── SelectShowDetail.model.bxb
│   │ 
│   └── concepts/                             - 컨셉 폴더
│       │ 
│       ├── primitives/                       - 기본 타입
│       │   │
│       │   ├── base/                         - 기본 컨셉
│       │   │   ├── LocationError.model.bxb
│       │   │   ├── PageChnage.model.bxb
│       │   │   └── URL.model.bxb
│       │   │
│       │   ├── find/                         - 축제 검색 관련 컨셉
│       │   │   ├── ContentId.model.bxb
│       │   │   ├── Dist.model.bxb
│       │   │   ├── EventEndDate.model.bxb
│       │   │   ├── EventStartDate.model.bxb
│       │   │   ├── FirstImage.model.bxb
│       │   │   ├── InputEndDate.model.bxb
│       │   │   ├── InputLocation.model.bxb
│       │   │   ├── InputStartDate.model.bxb
│       │   │   ├── Location.model.bxb
│       │   │   ├── Near.model.bxb
│       │   │   ├── OutputLocation.model.bxb
│       │   │   ├── PageNo.model.bxb
│       │   │   ├── Title.model.bxb
│       │   │   └── TotalCount.model.bxb
│       │   │
│       │   └── select/                       - 상세 페이지 관련 컨셉
│       │       ├── Addr1.model.bxb
│       │       ├── AgeLimit.model.bxb
│       │       ├── ContentTypeId.model.bxb
│       │       ├── DiscountInfoFestival.model.bxb
│       │       ├── EventPlace.model.bxb
│       │       ├── HomePage.model.bxb
│       │       ├── PlaceInfo.model.bxb
│       │       ├── PlayTime.model.bxb
│       │       ├── SubEvent.model.bxb
│       │       ├── Tel.model.bxb
│       │       ├── TelName.model.bxb
│       │       └── UseTimeFestival.model.bxb
│       │ 
│       └── structures/                       - 구조체 타입
│           │
│           ├── find/                         - 검색 관련 구조체
│           │   ├── Date.model.bxb
│           │   ├── DateInterval.model.bxb
│           │   ├── FestivalList.model.bxb
│           │   ├── Festivals.model.bxb
│           │   └── Point.model.bxb
│           │
│           └── select/                       - 상세 페이지 관련 컨셉
│               ├── Image.model.bxb
│               └── ShowDetail.model.bxb
│ 
├── resources/                                - 리소스 폴더
│   │ 
│   ├── base/                                 - 기본 리소스 폴더
│   │   │ 
│   │   ├── layouts/                          - 레이아웃 폴더
│   │   │   └── FestivalList.layout.bxb
│   │   │ 
│   │   ├── views/                            - 뷰 폴더
│   │   │   ├── FestivalDetail.view.bxb
│   │   │   ├── FestivalList.view.bxb
│   │   │   └── OpenBrowser_Result.view.bxb
│   │   │ 
│   │   ├── capsule.properties
│   │   └── endpoints.bxb
│   │ 
│   └── ko-KR/                                - 트레이닝, vocab 폴더
│       └── vocab/                            - vocab 폴더
│           ├── Location.vocab.bxb
│           ├── LocationError.vocab.bxb
│           ├── Near.vocab.bxb
│           └── PageChange.vocab.bxb
│
├── CONTRIBUTE.md                            - commit message 작성법
├── LICENSE                                  - LICENSE 파일
└── capsule.bxb                              - 캡슐 정보
```

## 캡슐설정

## 사전

## 발화

## 트랜잭션

## 레이아웃

## 에러처리

## HTTP 요청

## 외부 어플리케이션 실행

## 부록