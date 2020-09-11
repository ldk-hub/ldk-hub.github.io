---
# 포스트제목
title: "포트폴리오 - 시스템 구축 리뷰"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-08-20 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["API연동","자바개발"]
categories: 대시보드
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
---

##  개발 컨셉 [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fldk-hub%2Fldk-hub.github.io&count_bg=%2368AF32&title_bg=%233A2F2F&icon=&icon_color=%23343030&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
 종합 관리 프로그램으로 실시간 모니터링, 지도 및 교통현황, 데이터 차트, 통계 및 집계정보, 스케줄관리 등 다양한 정보를 관리 및 응용할 수 있는 시스템 으로 초기 기반만 구성하여 여러 다양한 비즈니스 모델을 응용하여 가변적으로 사용할 수 있도록 모델링을 구축함.

## 소스 관련 리뷰
자세한 개발 프로젝트 내역은 
https://github.com/ldk-hub/DashBoard
에서 확인하실 수 있습니다.  

## Main Page
![녹화_2019_12_28_13_50_01_980](https://user-images.githubusercontent.com/12209348/71539042-5dd14980-2979-11ea-973a-dc58d91aa385.gif)
설명 : 통합 정보 시스템의 메인 대시보드 화면(집계, 통계, 지도, 차트 등 다양한정보를 한눈에 쉽게 파악이 가능함)

### -- login, security, SMTP E-mail Find Password, Membership page (Add regular expression) --
![녹화_2019_12_27_16_59_23_687](https://user-images.githubusercontent.com/12209348/71508393-f957b100-28ca-11ea-96b7-cc9c693cf0a9.gif)
설명 : 로그인, 시큐리티, 비밀번호 찾기, 회원가입 페이지 소개


## Encrypt the member account information password
![1](https://user-images.githubusercontent.com/12209348/41805983-90200564-76ee-11e8-8c9d-ae10c214f873.PNG)
설명 : 계정정보 패스워드 암복호화 기능구현 완료

## Hybrid Web 반응형웹 
![녹화_2020_07_06_20_37_57_94](https://user-images.githubusercontent.com/12209348/86919343-0bac8480-c163-11ea-964d-27a09acf5618.gif)

## local PC(server) infomation(CPU, Memory etc.)
![CPU측정](https://user-images.githubusercontent.com/12209348/71538778-79862100-2974-11ea-891f-e0706ec22af9.gif)
설명 : 실시간으로 로컬 하드웨어 정보 캐치업 해오는 기능 (응용 >>서버의 정보를 실시간으로 관리할 수 있음)
![default](https://user-images.githubusercontent.com/12209348/43362948-91c6f26e-9332-11e8-9ef2-5738fb58c32e.PNG)


![screencapture-localhost-9110-dashboard-2019-12-28-13_21_32](https://user-images.githubusercontent.com/12209348/71538837-455f3000-2975-11ea-9f2c-240ce6180186.png)

## Data Edit Page
![screencapture-localhost-9090-hyopage-2019-08-10-11_53_15](https://user-images.githubusercontent.com/12209348/62841157-bca26900-bcdf-11e9-894a-2d77cfc81e2f.png)
설명 : 다양한 정보 데이터를 관리 할 수 있는 샘플링을 구성(차트, 그리드, 파일업로드 등)

## Schedule Page
![screencapture-localhost-9110-calendar-2019-08-13-11_04_55](https://user-images.githubusercontent.com/12209348/62910147-6524fb80-bdba-11e9-96c3-aeff500369ea.png)
설명 : 스케줄 관리 시스템 구성 완료(공휴일 정보 구글 캘린더 API 연동완료) 

## user custom page
![screencapture-localhost-9110-mypage-2019-08-14-13_08_24](https://user-images.githubusercontent.com/12209348/62994061-f668a080-be94-11e9-9d0d-b53208b15b30.png)
설명 : 사용자의 개별 정보를 기록 또는 관리 페이지 구현 완료

### RealTime Monitoring Page
![screencapture-localhost-9110-secondery-2019-08-14-13_06_51](https://user-images.githubusercontent.com/12209348/62994062-f7013700-be94-11e9-9c0b-ac9eab6c3510.png)
설명 : 실시간 모니터링 정보 집계 및 관리 목적 페이지 구성 완료(그리드형)

### 개발예정
1. Mybatis 사용 로직 -> JPA전환 작업
  실적용 영역
   - 멀티차트 데이터 Mybatis -> jpa전환 완료
  
  스터디영역
  - 양방향조회이용해서 역방향 조회해보기
  - jpql 구현해보기 fetch로 조인해서 한방에가져오기 lazy옵션준상태에서<<페치조인
         단순쿼리, 조인, 페치조인,페이징 api
  - spring jpa, querydsl 공부해야됨.
  
2. 각 로직 또는 데이터 관련 TDD 구성

3. oAuth 연계(네이버,카카오,깃허브,구글) 회원가입, 로그인  
   - 깃허브 Oauth2 인증코드 발급완료
   - 카카오톡 로그인 인증코드 및 로그인 샘플 발급완료
   - 엑세스 토큰 값으로 인증 후 로그인한 유저정보 가져오기 완료
   - 카카오 유저정보 시스템 내 저장 및 중복처리 로직 구현 

### 완료내역
1. 시큐리티 로그인, 로그아웃 세션처리 완료(jpa사용)
2. 샘플데이터 게시판목록 호출 완료(mybatis사용)
3. 일정계획표 페이지 - 풀캘린더, 구글 공휴일 정보 api 연동 완료
4. 일정관리테이블, 회원정보 상세 테이블, 회원 권한 조인용 테이블 생성 완료
5. 테이블명 수정 기존 테이블, 관리자페이지 테이블 명 구분 완료
6. 스프링 시큐리티 회원가입 로직 구현완료(principal 사용)
7. 패스워드 분실 SMTP 메일발송 비밀번호 찾기 로직 구현완료
8. 대시보드페이지 서비스 종료 다음지도api -> 카카오맵 API로 변경 완료
9. 대시보드페이지 지도API 실시간도로교통정보, 자전거 도로 정보 기능 추가 완료
10. TUI GRID, datatables API 연동 완료 
11. 대시보드페이지 회원 사용자 통계수치 로직 구현완료
12. 사이드바 시계 기능 추가 완료
13. 시스템 테이블 및 데이터 로그 설정 사용(log4jdbc)
14. 실시간 모니터링용 페이지 개발완료
15. 시스템 UI 다크테마 변경완료
16. 실시간모니터링 페이지 이미지 업로드 호출로직 구현완료 
17. TUI-GRID API 내 저장된 이미지 호출로직 구현완료
18. sigar API(로컬 시스템 정보 수집 API) 연동작업 완료
19. amcharts4 API -> Sigar API의 수집정보 연동 로직 구현완료(실시간 PC정보 모니터링 기능)
20. echart -> amchart4 반영완료
21. 기존 Orcle DB -> Postgresql DB로 변경작업 완료
22. Mybatis 사용 로직 -> JPA전환 작업
   - 멀티차트 데이터 Mybatis -> JPA전환완료
   - 데이터 리스트 호출로직 JPA 전환완료

### 개발이슈
1. SMTP 비밀번호 찾기 properties 정보 계정 정보 삭제
2. 날씨 API darksky(유료), 구글 웨더(서비스 종료), skplant 웨더 API(서비스종료)로 인한 날씨정보 API 부재로 하드코딩 
3. 풀캘린더 일정 등록 및 삭제 로직 개발 중
4. local 장비 서버 및 pc 정보 차트연동
5. 세계 인구수 정보 보다 다음(카카오) 지도 api를 통한 지역정보를 가져오는게 효율적일것으로 판단하여 변경 
6. 시각적효과를 위한 백그라운드 컬러 검정(Dark)계열로 변경
7. 사이드바 시계 30초 단위 컬러변경 기능 추가
9. tui-grid 업데이트 bootstrap-timepicker 업데이트 완료
10. 이미지 처리시 서버의 OS에 따라 path 설정 및 처리방식이 다름.
11. 기존 oracle -> postgresql DB변환 하였음.
12. echart경우 중국어라서 한계점이 많았음. ->amchart4같은 경우 최근 이슈되기도하고 반응형에서도 대응이 확실하여 전환결정.
13. 멀티라인차트 DB 연동 중 누적방식을 채택(DB데이터정보 바로 찍는방식,누적방식 등 커스터마이징 가능) 차트내 표출갯수 15개 한계(인터벌로 호출주기로 갱신가능)
14. 멀티라인차트,게이지차트 두가지를 한화면 내에서 동시 처리하는 과정에서 속도이슈 발생 최적화 방안 검토예정
15. 쓰지 않는 라이브러리들 전부 제거 작업 ->로딩 및 속도저하 이슈 발생
16. 다크테마 전환 과정 중 발생한 UI크래시  부분 개선
17. 오라클 -> postgresql 전환중 마이바티스 전면 수정으로인한 이슈로 Mybatis -> JPA 전환 검토
18. daum 지도에서 카카오 지도 API 제공 기한 지나서 크로스 오리진 이슈 발생 -> kakao로 소스 변경완료
