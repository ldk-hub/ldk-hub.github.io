
---
# 포스트제목
title: "대시보드 시스템 구축 리뷰"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-05-30 08:26:28 -0400
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

## 개발 컨셉 
 종합 관리 프로그램으로 실시간 모니터링, 지도 및 교통현황, 데이터 차트, 통계 및 집계정보, 스케줄관리 등 다양한 정보를 관리 및 응용할 수 있는 시스템 으로 초기 기반만 구성하여 여러 다양한 비즈니스 모델을 응용하여 가변적으로 사용할 수 있도록 모델링을 구축함.



### -- login, security, SMTP E-mail Find Password, Membership page (Add regular expression) --
![녹화_2019_12_27_16_59_23_687](https://user-images.githubusercontent.com/12209348/71508393-f957b100-28ca-11ea-96b7-cc9c693cf0a9.gif)
설명 : 로그인, 시큐리티, 비밀번호 찾기, 회원가입 페이지


## Encrypt the member account information password
![1](https://user-images.githubusercontent.com/12209348/41805983-90200564-76ee-11e8-8c9d-ae10c214f873.PNG)
설명 : 계정정보 패스워드 암복호화 관리

## local PC(server) infomation(CPU, Memory etc.)
![CPU측정](https://user-images.githubusercontent.com/12209348/71538778-79862100-2974-11ea-891f-e0706ec22af9.gif)
설명 : 실시간으로 로컬 하드웨어 정보 캐치업 해오는 기능 (응용 >>서버의 정보를 실시간으로 관리할 수 있음)
![default](https://user-images.githubusercontent.com/12209348/43362948-91c6f26e-9332-11e8-9ef2-5738fb58c32e.PNG)

## Main Page
![녹화_2019_12_28_13_50_01_980](https://user-images.githubusercontent.com/12209348/71539042-5dd14980-2979-11ea-973a-dc58d91aa385.gif)
설명 : 통합 정보 시스템의 메인 대시보드 화면(집계, 통계, 지도, 차트 등 다양한정보를 한눈에 쉽게 파악이 가능함)
![screencapture-localhost-9110-dashboard-2019-12-28-13_21_32](https://user-images.githubusercontent.com/12209348/71538837-455f3000-2975-11ea-9f2c-240ce6180186.png)

## Data Edit Page
![screencapture-localhost-9090-hyopage-2019-08-10-11_53_15](https://user-images.githubusercontent.com/12209348/62841157-bca26900-bcdf-11e9-894a-2d77cfc81e2f.png)
설명 : 다양한 정보 데이터를 관리 할 수 있는 샘플링을 구성(차트, 그리드, 파일관리 등)

## Schedule Page
![screencapture-localhost-9110-calendar-2019-08-13-11_04_55](https://user-images.githubusercontent.com/12209348/62910147-6524fb80-bdba-11e9-96c3-aeff500369ea.png)
설명 : 스케줄 관리 및 일정 파악용도(공휴일 정보 구글 캘린더 API 연동) 

## user custom page
![screencapture-localhost-9110-mypage-2019-08-14-13_08_24](https://user-images.githubusercontent.com/12209348/62994061-f668a080-be94-11e9-9d0d-b53208b15b30.png)
설명 : 로그인한 사용자의 개인정보를 기록또는 관리할 수 있는 목적 구현

### RealTime Monitoring Page
![screencapture-localhost-9110-secondery-2019-08-14-13_06_51](https://user-images.githubusercontent.com/12209348/62994062-f7013700-be94-11e9-9c0b-ac9eab6c3510.png)
설명 : 실시간으로 정보를 가져와 집계하고 그리드에 해당정보를 띄워 실시간으로 파악할 수 있는 UI

### 완료내역
1. 시큐리티 로그인, 로그아웃 세션처리 완료(jpa)
2. 샘플데이터 게시판목록 호출 완료(mybatis)
3. 일정계획표 페이지 - 풀캘린더 구글 공휴일 정보 api 연동 완료
4. 일정관리테이블, 회원정보 상세 테이블, 회원 권한 조인용 테이블 생성 완료
5. 테이블명 수정 기존 테이블, 관리자페이지 테이블 명 구분 완료
6. 시큐리티 회원가입 개발 완료
7. 대시보드 내 시큐리티 principal 정보 호출
8. 패스워드 분실 SMTP 비밀번호 찾기 로직 완료
9. 메인페이지  지도 api 다음서비스 종료로 인한 카카오로 변경 완료
10. 메인페이지 실시간도로교통정보, 자전거 도로 정보 기능 추가 완료
11. TUI GRID 데이터 제어 완료 
12. 메인페이지 회원정보 통계 수치 호출 완료
13. 사이드바 시계 기능 추가 완료
14. 시스템 테이블 및 데이터 로그 설정(log4jdbc)완료
15. 커스터마이징 용 대시보드 페이지 추가 완료
16. 대시보드 관리페이지 개발완료
17. 실시간 모니터링용 페이지개발완료
18. 시스템 다크테마 변경완료
19. read.me 뱃지 추가 및 링크 적용 및 시스템 이미지 최신화 작업 완료
20. 이미지 업로드 처리 로직 추가 
21. tui-grid에서 저장된 이미지 호출 완료
22. sigar 라이브러리 연동작업 완료
23. 차트게이지 정보데이터 실시간 모니터링 완료
24. echart -> amchart4 반영완료

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


자세한 개발 프로젝트 내역은 
https://ldk-hub.github.io/jekyll/update/realtime_system/
에서 확인하실 수 있습니다.
