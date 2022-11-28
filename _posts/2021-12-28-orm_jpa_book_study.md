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

# 자바 ORM 표준 JPA 프로그래밍 스터디 리뷰시작

jpa예제코드 : https://github.com/holyeye/jpabook


## Chapter 1. JPA 
1. 객체모델과 관계형 데이터베이스 모델은 지향하는 패러다임이 서로 다르다. 문제는 이 패러다임의 차이를 극보복하려고 개발자가 너무 많은 시간과 코드를 소비한다는 점이다.
2. 더 어려운 문제는 객체지향 애플리케이션 답게 정교한 객체 모델링은 힘을 잃고 점점 

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


## Chapter 2. JPA 시작
### 지연로딩
데이터 베이스의 조회를 늦추는 기능
```
//처음 조회 시점에 SELECT MEMBER SQL 
Member member = jpa.find(Member.class, memberId);

Order order = member.getOrder();
order.getOrderDate();//Order사용하는 시점에 SELECT ORDER SQL 
```
Member 사용할 때마다 Order 함께 사용시 한 테이블 조회하는 것 보다 Member는 




### 비교 방법
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


## Chapter 3. 영속성 
### 엔티티 생명주기
 - 비영속(new/transient) : 영속성 컨텍스트와 전혀 관계가 없는 상태
 - 영속(managed) : 영속성 컨텍스트에 저장된 상태
 - 준영속(detached): 영속성 컨텍스트에 저장되었다가 분리된 상태
 - 삭제(removed):삭제된 상태

### 엔티티매니저 메서드 정리
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

### 중요한 정리내용
1. 엔티티 매니저는 엔티티 매니저 팩토리에서 생성한다. 자바를 직접 다루는 J2SE환경에서는 엔티티 매니저를 만들면 그 내부에 영속성 컨텍스트도 함께 만들어 진다. 이 영속성 컨텍스트는 엔티티 매니저를 통해서 접근할 수 있다.  
2. 영속성 컨텍스트는 애플리케이션과 DB사이에 객체를 보관하는 가상의 DB 같은 역할을 한다. 영속성 컨텍스트 덕분에 1차 캐시, 동일성 보장, 트랜잭션을 지원하는 쓰기 지연, 변경 감지, 지연 로딩 기능을 사용할 수 있다.  
3. 영속성 컨텍스트에 저장한 엔티티는 플러시 시점에 DB에 반영되는데 일반적으로 트랜잭션을 커밋할 때 영속성 컨텍스트가 플러시 된다.  
4. 영속성 컨텍스트가 관리하는 엔티티를 더 이상 관리하지 못하면 그 엔티티는 준영속 상태의 엔티티라 한다. 준영속 상태의 엔티티는 더는 영속성 컨텍스트가 제공하는 1차 캐시, 동일성 보장, 트랜잭션을 지원하는 쓰기 지연, 변경 감지, 지연 로딩 같은 기능을 사용할  수 없다.  




## Chapter 4. 영속성 관리
### jpa에서 제공하는 매핑어노테이션 
 - 객체와 테이블 매핑 : @Entity, @Table
 - 기본 키 매핑 : @Id
 - 필드와 컬럼매핑: @Column
 - 연관관계 매핑 @ManyToOne, @JoinColumn


### 필드와 컬럼 매핑 분류
 - @Column : 컬럼을 맵핑한다.
 - @Enumerated : 자바의 enum 타입을 맵핑한다.
 - @Temporal : 날짜 타입을 맵핑한다.
 - @Lob : BLOB, CLOB 타입을 맵핑한다.
 - @Transient : 특정 필드를 데이터베이스에 매핑하지 않는다.(저장도, 조회도 않는다. 주로 임시로 어떤값을 보관할때 사용)
 - @Access : JPA가 엔티티에 접근하는 방식을 지정한다.



1. @Column 속성 정리
    - name : 필드와 매핑할 테이블의 컬럼이름 객체의 필드 이름
    - nullable(DDL) : null값의 허용 여부를 설정한다. false로 설정하면 DDL 생성 시에 not null제약조건이 붙는다.
    - unique(DDL) : @Table의 uniqueConstraints와 같지만 한 컬럼에 간단히 유니크 제약조건을 걸 때 사용한다. 만약 두 컬럼 이상을 사용해서 유니크 제약조건을 사용하려면 클래스 레벨에서 @Table.uniqueConstraints를 사용해야한다.
    - columnDefinition(DDL) : 데이터베이스 컬럼 정보를 직접 줄 수 있다. 
    - length(DDL) : 문자 길이 제약조건, String타입에만 사용 디폴트값 255
    - precision, scale(DDL) : BigDecimal 타입에서 사용 

2. @Enumerated 속성 정리
 - EnumType.ORDINAL : enum 순서를 데이터베이스에 저장,(주의해서 사용해야하며 STRING사용을 권장한다.)
 - EnumType.STRING : enum 이름을 데이터베이스에 저장

3. @ 






```
    //roleType 자바의 enum을 사용해 회원의 타입을 구분했다. 일반 회원은 USER 관리자는 ADMIN이다. 이처럼 자바의 enum을 사용하려면 
    //@Enumerated 어노테이션으로 매핑해야한다. 
    @Enumerated(EnumType.STRING)
    private RoleType roleType;

    //자바의 날짜타입은 @Temporal을 사용해 매핑한다.
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastModifiedDate;
    
    //회원을 설명하는 필드는 길이 제한이 없다. 따라서 DB의 VARCHAR타입 대신 CLOB 타입으로 저장한다. @LOB을 사용하면 CLOB, BLOB타입을 매핑할 수 있다.
    @Lob
    private String description;
    
    @Transient
    private String temp;

```

### HBM2DDL 주의사항
 - 운영서버에서 create, create-drop, update처럼 DLL을 수정하는 옵션은 절대사용하면안됨.
 - 오직 개발단계에서만 사용  
개발환경에 따른 추천전략    
1. 개발초기단계에서는 create 또는 update
2. 초기화 상태로 자동화된 테스트를 진행하는 개발자 환경과 CI 서버는 create또는 create-drop
3. 테스트 서버는 update 또는 validate
4. 스테이징과 운영서버는 validate 또는 none



## Chapter 5. 연관관계 매핑 기초


## Chapter 6. 다양한 연관관계 매핑


## Chapter 7. 고급 매핑


## Chapter 8. 프록시와 연관관계 관리

## Chapter 9. 값 타입

## Chapter 10. 객체지향 쿼리 언어

## Chapter 11. 웹 애플리케이션 제작

## Chapter 12. 스프링 데이터 JPA

## Chapter 13. 웹 애플리케이션과 영속성 관리

## Chapter 14. 컬렉션과 부가기능

## Chapter 15. 고급 주제와 성능 최적화

## Chapter 16. 트랜잭션과 락, 2차 
