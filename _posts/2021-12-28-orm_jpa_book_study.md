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



### 지연로딩
데이터 베이스의 조회를 늦추는 기능
```
//처음 조회 시점에 SELECT MEMBER SQL 
Member member = jpa.find(Member.class, memberId);

Order order = member.getOrder();
order.getOrderDate();//Order사용하는 시점에 SELECT ORDER SQL 
```
Member 사용할 때마다 Order 함께 사용시 한 테이블 조회하는 것 보다 Member는 




비교 방법
비교와 동등성비교 두가지 비교방법이 있음.
1. 동일성 비교 == 비교이다.객체의 인스턴스 주소값을 비교한다.
2. 동등성 비교는 equals() 메소드 사용한 객체 내부의 값을 비교한다.

```
//동일성 테스트 코드
String  memberId = "100";
Member member1 = memberDAO.getMember(memberId);
Member member2 = memberDAO.getMember(memberId);

member1 == member2;// 결과는 false임. 왜냐면 
//둘은 같은 DB로우에서 조회했지만 객체 측면에서 둘은 다른 인스턴스이기 때문에 비교시 서로다른값으로 취급된다.

```

## 엔티티 생명주기
 - 비영속(new/transient) : 영속성 컨텍스트와 전혀 관계가 없는 상태
 - 영속(managed) : 영속성 컨텍스트에 저장된 상태
 - 준영속(detached): 영속성 컨텍스트에 저장되었다가 분리된 상태
 - 삭제(removed):삭제된 상태

## 엔티티매니저 메서드 정리
EntityManagerFactory 
 - 엔티티매니저 팩토리는 비용이크다.
 - 비용이 크기 때문에 DB당 1개 씩 팩토리 선언하여 사용하는것이 좋다.
 - 여러 스레드가 동시에 접근해도 문제되지 않는다. 스레드간 공유해도 된다.
EntityManager 
 - 엔티티 매니저 생성시 영속성 컨텍스트가 하나 만들어진다.
 - 엔티티매니저 통해 영속성 컨텍스트에 접근하고 관리할 수 있다.
 - 동시성 문제 발생하기 때문에 문제된다. 동시접근 금물 스레드간 공유금지
EntityTransaction 
 - 엔티티매니저
 - begin, commit, rollback
 ```
 EntityTransaction tx = em.getTransaction(); // 트랜잭션API
  
  try{
      tx.begin(); //트랜잭션 시작
      
      test.get(); //비지니스로직~
      
      tx.commit(); // 최종 커밋
  }catch(Exception e){
      tx.rollback(); //예외 발생시 롤백 
  }
 ```


영속성 컨텍스트 개념 및 구조 

1차캐시


tip.
jpa는 트랜잭션 안에서 데이터 변경을 해야한다. 없이 변경하게 될 경우 예외가 발생한다.
