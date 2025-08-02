---
# 포스트제목
title: "포트폴리오 - 시스템 구축 리뷰"
# 포스팅 작성자
author: ldk
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2025-06-29 02:00:00 +0900
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["API연동","자바개발"]
categories: 대시보드
toc: true
---

## 프로젝트 개요
- 다양한 데이터를 한 화면에서 직관적으로 시각화하는 통합 대시보드 시스템 구축
- 모듈화와 확장성을 고려한 반응형 Hybrid Web UI 개발
- 카카오맵, 카카오 OAuth 등 외부 오픈 API 적극 활용

[GitHub 프로젝트 코드](https://github.com/ldk-hub/DashBoard)

---

## 개발자 기술 스택
![기술 스택 이미지](https://github.com/user-attachments/assets/25e51d9b-f190-4e40-88a6-298fb694277a)

---
## 개발 컨셉
- 데이터 도식화 기반의 직관적 정보 제공
- 다양한 데이터 표현을 위한 오픈소스 및 API 활용
- 실험적 샘플 기능 접목을 통한 확장성 확보
- 한 화면 내 다양한 데이터 통합 조회 가능

---

## 주요 기능 및 완료 내역
- ✅ Spring Security 기반 로그인/로그아웃 및 세션 처리 (JPA 사용)
- ✅ 카카오 OAuth2 소셜 로그인 연동 및 자동 로그인 처리
- ✅ 실시간 웹소켓 채팅 기능 (룸 형식, 70% 개발 완료)
- ✅ 대시보드 실시간 교통·자전거 도로 정보 API 연동
- ✅ PC/서버 실시간 상태 모니터링 (Sigar API + amCharts4)
- ✅ Oracle → PostgreSQL DB 마이그레이션 완료
- ✅ UI 다크테마 적용 및 사이드바 시계 컬러 변경 기능
- ✅ 이미지 업로드 및 팝업 호출 기능 구현
- ✅ SpotBugs 정적 분석으로 취약점 개선 완료

---

## 개발 예정 사항
- JPA 양방향/역방향 조회, fetch join, Lazy 옵션 활용 및 최적화
- 람다, 스트림, Optional, LocalDateTime 활용 리팩토링
- 주요 기능 테스트 코드 작성 및 보완

---

💻 개발 환경
 - 언어: Java 8
 - 프레임워크: Spring Boot, Spring Security
 - 데이터베이스: 기존 OracleDB 사용, 현재는 PostgreSQL로 이관 완료
 - UI 라이브러리: Gentelella, Tiles3, Bootstrap, TUI-GRID, amCharts4
 - 외부 API 연동: Kakao Maps, Kakao OAuth2, FullCalendar, Skycons
 - 기타 기술: MyBatis, JPA, Lombok

---

🛠️ 개발 이슈 및 개선 과제  
 - 날씨 API 서비스 종료  
   기존에 사용하던 날씨 API가 종료됨에 따라, 공공데이터 기반의 대체 API로 전환할 예정

 - 대시보드 성능 저하  
   렌더링 속도와 반응성이 저하되는 문제가 있어, 라이브러리 최적화 및 불필요 코드 제거 작업을 진행 중

 - 이미지 처리 시 OS별 경로 차이  
   서버 운영체제에 따라 이미지 경로 처리 방식이 달라 서버별 분기 처리 로직을 개선할 계획

 - 다크테마 적용 중 UI 크래시  
   테마 적용 시 레이아웃이 깨지는 버그가 있었고, UI 리팩토링과 버그 수정으로 해결 완료

 - MyBatis에서 JPA로의 전환 중 호환성 이슈  
   일부 쿼리와 객체 매핑에서 문제가 발생하여, 단계적으로 JPA로 전환하며 테스트 보완을 병행 중

 - 카카오맵 API 변경에 따른 CORS 이슈  
   최근 Kakao API 업데이트로 인해 발생한 CORS 문제를 해결하기 위해, API 호출 방식 변경 및 서버 측 CORS 정책 재설정 작업을 진행 예정

---

## 이미지 갤러리
##  Main Page
![녹화_2019_12_28_13_50_01_980](https://user-images.githubusercontent.com/12209348/71539042-5dd14980-2979-11ea-973a-dc58d91aa385.gif)

##  Hybrid Web 반응형웹  
![녹화_2020_07_06_20_37_57_94](https://user-images.githubusercontent.com/12209348/86919343-0bac8480-c163-11ea-964d-27a09acf5618.gif)  

###  Social Login REST API (kakao)  
![kakaologin1](https://user-images.githubusercontent.com/12209348/93009605-071aa700-f5be-11ea-919d-d857eb2b3f91.gif)  

## kakao access infomation
![kakao login](https://user-images.githubusercontent.com/12209348/93009603-05e97a00-f5be-11ea-80b7-857aaf9ce214.PNG)  

### -- login, security, SMTP E-mail Find Password, Membership page (Add regular expression) --
![녹화_2020_09_17_19_58_26_640](https://user-images.githubusercontent.com/12209348/93462004-93133280-f920-11ea-9e8b-f371971def37.gif)  

## Chatting 
![녹화_2022_05_29_13_07_39_191](https://user-images.githubusercontent.com/12209348/170851816-fd207a88-1003-4120-bb40-73d88d1864f4.gif)

## Trade Page
![녹화_2022_05_29_13_18_18_950](https://user-images.githubusercontent.com/12209348/170852063-99c0104d-7fdc-4853-bc5f-96c162f6ca4b.gif)

## local PC(server) infomation(CPU, Memory etc.)

![CPU측정](https://user-images.githubusercontent.com/12209348/71538778-79862100-2974-11ea-891f-e0706ec22af9.gif)

![default](https://user-images.githubusercontent.com/12209348/43362948-91c6f26e-9332-11e8-9ef2-5738fb58c32e.PNG)

![screencapture-localhost-9110-dashboard-2019-12-28-13_21_32](https://user-images.githubusercontent.com/12209348/71538837-455f3000-2975-11ea-9f2c-240ce6180186.png)

## Data Edit Page
![screencapture-localhost-9090-hyopage-2019-08-10-11_53_15](https://user-images.githubusercontent.com/12209348/62841157-bca26900-bcdf-11e9-894a-2d77cfc81e2f.png)

##  Schedule Page
![screencapture-localhost-9110-calendar-2019-08-13-11_04_55](https://user-images.githubusercontent.com/12209348/62910147-6524fb80-bdba-11e9-96c3-aeff500369ea.png)

##  user custom page
![screencapture-localhost-9110-mypage-2019-08-14-13_08_24](https://user-images.githubusercontent.com/12209348/62994061-f668a080-be94-11e9-9d0d-b53208b15b30.png)


###  RealTime Monitoring Page
![screencapture-localhost-9110-secondery-2019-08-14-13_06_51](https://user-images.githubusercontent.com/12209348/62994062-f7013700-be94-11e9-9c0b-ac9eab6c3510.png)

### Trade Page
![5page](https://user-images.githubusercontent.com/12209348/162602694-10ef290d-82fa-4b89-8cea-536b934f73ac.png)


### 완료내역
1. 시큐리티 로그인, 로그아웃 세션처리 완료(jpa사용)
2. 샘플데이터 게시판목록 호출 완료(mybatis사용)
3. 일정계획표 페이지 - 풀캘린더, 구글 공휴일 정보 api 연동 완료
4. 일정관리테이블, 회원정보 상세 테이블, 회원 권한 조인용 테이블 생성 완료
5. 테이블명 수정 기존 테이블, 관리자페이지 테이블 명 구분 완료
6. 스프링 시큐리티 회원가입 로직 구현완료(스프링 시큐리티 - principal)
7. 패스워드 분실 SMTP 메일발송 비밀번호 찾기 로직 구현완료
8. 대시보드페이지 서비스 종료 다음지도 API -> 카카오맵 API로 변경 완료
9. 대시보드페이지 지도API 실시간도로교통정보, 자전거 도로 정보 기능 추가 완료
10. TUI GRID, datatables API 구현 및 연동 완료 
11. 대시보드페이지 회원 사용자 통계수치 로직 구현완료
12. 사이드바 시계 기능 추가 완료
13. 시스템 테이블 및 데이터 로그 설정 구현 완료(log4jdbc)
14. 모니터링용 대시보드 페이지 개발완료
15. 프로젝트 UI 다크테마  개발완료
16. 모니터링 페이지 이미지 업로드 로직(로컬/서버) 구현완료 
17. TUI-GRID API 내 저장된 이미지 팝업 호출 로직 구현완료
18. sigar API(컴퓨터 장비 실시간 정보 수집 오픈소스) 연동작업 완료
19. amcharts4 API -> Sigar API의 수집정보 차트 실시간 계측 구현완료(PC 및 서버 사용율 모니터링 기능)
20. echart API -> amchart4 API  변경 작업완료(변경이유 : 웹, 모바일에 최적화된 차트 API, 그리고 echart는 중국어 한계발생)
21. amchart 게이지 차트 ->시스템 정보 표출 , 멀티라인차트 데이터 연계 개발 완료(데이터 누적방식 차트)
22. oAuth2 소셜 로그인 연계 구현(카카오)  
   - Oauth2 인증코드 발급완료  
   - 카카오톡 로그인 인증코드, 엑세스 토큰, 유저 로그인 응답정보 처리 완료  
   - 카카오정보 내부시스템 정보 저장, 중복정보확인, 자동로그인처리 구현완료  
23. Mybatis 사용 로직 -> JPA전환 작업  
  적용 영역
   - 멀티차트 데이터 Mybatis -> jpa전환 완료  
   - 로그인 Mybatis -> jpa전환 완료  
24. spring getter setter -> @lombok 적용완료  
25. springboot websocket 사용 실시간 채팅 기능 개발완료(진행단계 70% - 룸 형식 채팅방 구현)
26. spotbugs 자바 소스 취약점 정적 분석 검증 취약점 6개 발생 개선 완료
26. 해외 IP 차단용 인터셉터, 필터 처리 구현 완료
27. 스프링시큐리티 로그인 유저정보 호출로직 변경(ver. up)
28. postgresql jdbc 최신버전 변경 완료(버전별 호환성버그발생)
29. tui-grid4 ver 소스 맵핑 최신화 완료
30. 깃허브 커밋 컨벤션 적용
```
   적용샘플예시
   Feat: "회원 가입 기능 구현"

   SMS, 이메일 중복확인 API 개발

   Resolves: #123
   Ref: #456
   Related to: #48, #45
```

###  적용 API리스트  
 - System table : Datatables, tui-grid4.0  
 - 날씨, 지도 : kakao maps, Skycons  
 - 차트 : amcharts4  
 - 캘린더 : fullcalendar, bootstrap-daterangepicker, DateJS  
 - 기타 : Dropzone, NProgress, iCheck, Flot  
