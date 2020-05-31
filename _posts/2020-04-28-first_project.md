---
# 포스트제목
title: "스프링 기반 반응형 웹 (개발자 입문 실습)"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-04-28 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["반응협웹 구축","입문실습"]
categories: 자바개발
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
---
# Spring 기반 반응형 웹 시스템 (처음 웹개발 입문 당시 라이트한버전으로 만든 반응형 웹)

### 개발환경
 - 언어: JAVA
 - 프레임워크 :  Spring,
 - DB : mybatis, oracle
 - front-end : bootstrap, jsp, jquery, ajax, javascript 등


### PC버전

![pc](https://user-images.githubusercontent.com/12209348/40291632-053439c2-5d01-11e8-8506-63d44101d658.png)
![pc](https://user-images.githubusercontent.com/12209348/40291634-05a1f0fc-5d01-11e8-9553-066ffe2d7264.png)
![pc](https://user-images.githubusercontent.com/12209348/40291635-05d90cd6-5d01-11e8-9a04-2ea856e4542b.png)
![pc](https://user-images.githubusercontent.com/12209348/40291640-06f16348-5d01-11e8-9867-f76fe91f86a8.png)
![pc](https://user-images.githubusercontent.com/12209348/40291643-0781111e-5d01-11e8-9118-5fd34bec53ac.png)
![pc](https://user-images.githubusercontent.com/12209348/40291647-084d7286-5d01-11e8-91cd-6c89cc0968dc.png)
![pc](https://user-images.githubusercontent.com/12209348/40291645-07f04318-5d01-11e8-89de-ca0b4c1cc943.png)
![pc](https://user-images.githubusercontent.com/12209348/40291625-0441f31a-5d01-11e8-8fb3-92b4fe60af7d.png)
![pc](https://user-images.githubusercontent.com/12209348/40291628-049fabb8-5d01-11e8-8a33-e49f307f65aa.PNG)
![pc](https://user-images.githubusercontent.com/12209348/40291629-04d5ed4a-5d01-11e8-9550-f31a3311c4ba.png)

### 모바일 버전
<img src="https://user-images.githubusercontent.com/12209348/40291624-040ea1c2-5d01-11e8-9bf7-06da4e53b160.png" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291626-046ed3ee-5d01-11e8-992c-b38c13852027.PNG" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291637-063fa946-5d01-11e8-9048-57d5c183dc8e.PNG" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291638-06724d74-5d01-11e8-953b-a49961c47060.png" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291636-0609a4f4-5d01-11e8-891a-61e6db79cd59.png" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291633-0571d6c4-5d01-11e8-8436-13b1b1adc125.png" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291639-06ba8d28-5d01-11e8-9904-70a016f3e708.png" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291644-07b10db0-5d01-11e8-8625-ccca423ef176.png" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291641-0721751a-5d01-11e8-9db1-161a2d21314f.png" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291631-0507b820-5d01-11e8-8a49-66ed38d90804.png" height="50%" width="50%">
<img src="https://user-images.githubusercontent.com/12209348/40291646-081d55f6-5d01-11e8-9405-06130866afc0.png" height="50%" width="50%">

## 개발 완료 내역
 - 풀캘린더 수정, 게시글 UTF-8바이트 수 체크 수정<br>
 - 풀캘린더 API 적용, 게시글 쓰기 바이트 수 체크 추가 <br>
 - 풀캘린더 적용 및 엑셀 다운로드 수정<br>
 - 엑셀 다운로드 로직 영역이동 및 소스 수정<br>
 - 비밀번호 찾기 SMTP 전송용 bean 계정정보 수정 ,비밀번호 분실시 이메일 찾기 완료<br>
 - SMTP 비밀번호 분실(프론트로직 수정), 엑셀 다운로드(로우설정,쿼리문 등)<br>
 - 엑셀 다운로드 스크립트 추가, 회원정보리스트 소스 수정, 엑셀 다운로드 로직<br>
 - 회원정보 게시판 생성, 회원정보 페이지 페이징처리, poi 라이브러리 적용,<br>
 - 아이디 중복체크 ,정규표현식,관리자 기능 강화 (회원리스트 조회, 엑셀파일 다운로드)<br>
 - 게시판 리스트 재갱신(수정),카테고리별 조회,로그인 계정 게시글만 삭제처리(수정),조회수(수정)<br>
 - 게시판수정(쿼리,프론트),모달창 닫고 리스트 갱신,게시글 삽입 textarea, 태그 제거<br>
 - 톰캣 컨텍스트 변경,시큐리티 로그아웃 세션처리,시큐리티 로그인 에러리턴 수정,게시글 삽입, 게시글삭제<br>
 - 비밀번호 정규식,아이디 중복체크,게시글 삽입<br>
 - 프로젝트명 수정,회원가입(중복체크,정규식)완료<br>
 - 전자정부 프레임워크 페이징 처리,코드정리 ,주석정리<br>
 - DB 게시판 테이블 변경,게시글 상세 페이지,회원가입,롤링 이벤트<br>
