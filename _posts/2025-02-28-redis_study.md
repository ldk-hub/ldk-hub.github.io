---
# 포스트제목
title: "레디스 도입 위한 스터디"
# 포스팅 작성자
author: "이동옥 Lee Dong-ok"
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2025-02-28 22:00:00 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["redis","cache","nosql"]
categories: 열공모드
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---


## 레디스 실무 도입 스터디

### 레디스 용어기초
 - 캐시, 캐싱
   - 캐시는 저장하는 개념
   - 캐싱은 캐시를 가져오는 것을뜻함

### 대표 명령어
 - keys * 키 값 전체 목록 조회
 - set 키- 밸류 캐시 저장
 - get 키 저장된 캐시 데이터 가져오기
 - del 키 키 삭제
 - ttl (time to live) ttl test:ttl "test data" ex 30   <<해당 데이터는 30초간만 캐시 저장

### 네이밍 컨벤션
:콜론기준으로 네이밍 컨벤션 예시 :  material:100(소재아이디):comment  

### 레디스 구성 대표적 전략 두가지 유념하기
 - cache a-side(look a-side, lazy-loading) 캐시에 값이있을경우 cache hit, 캐시에 값이없을 경우 cache-miss 로 디비에서조회해서 캐시저장하기
 - write around(등록, 삭제, 수정) 일때는 DB에만 저장 캐시처리 X

