---
# 포스트제목
title: "자바 ORM 표준 JPA 프로그래밍 스터디"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2021-12-28 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["백엔드"]
categories: 열공해야한다.
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---

## 자바 ORM 표준 JPA 프로그래밍 스터디 리뷰시작

jpa예제코드 : https://github.com/holyeye/jpabook

 - 진정한의미의 계층 분할이 어려움.
 - 엔티티를 신뢰할 수 없다.
 - SQL에 의존적인 개발을 피하기 어렵다.

### JPA 기능

저장기능
jpa.persist(member); //저장
 - 객체를 데이터베이스에 저장한다.

조회기능
String memberId = "helloId";
Member member = jpa.find(Member.class, memberId); //조회
 - 객체하나를 조회한다. 

수정기능
Member member = jpa.fing(Member.class, memberId);
member.setName("이름변경"); //수정

연관된 객체 조회
Member member = jpa.fing(Member.class, memberId);
Team team = member.getTeam(); //연관된 객체 조회
