---
# 포스트제목
title: "스프링부트 백엔드 개발 - 사내교육 "
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-05-06 10:03:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["비전","테크트리"]
categories: 사내스터디
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---

강사명 : 조졸두

1.개발 환경
(윈도우 10 환경 기반)
👉 Java 8: https://url.kr/cwye6a
👉 Git: https://url.kr/mcid4e
👉 SourceTree: https://url.kr/x86k4e
👉 IntelliJ Ultimate: https://url.kr/kboymj
     Ultimate 은 유료버전이지만, 처음 사용할 경우 한달간 무료가 지원되니 유료 버전을 설치하면 됩니다.
     만약 유료 버전 설치가 잘 안된다면 무료 버전인 Community를 설치하면 됩니다.
👉 putty: https://url.kr/azowp7
     원격 리눅스 서버로 SSH 접근이 가능한 방법은 아무것이나 가능합니다.
     






1. 인텔리제이 사용계기

msa
멀티모듈 레포
독립된 nosql 
넷플릭스 api 들은 별개문제

 - 스프링부트 팁
그레이들 추천 공부
코틀린추천
jar로 배포추천 -> java -jar jar명 내장톰캣사용  추천 war보다 좋음
클라우드 네이티브 -> 도커때문에 이와같이쓴다함.


마리아db 드라이버 -> 기능상같음


aws에서는  mysql -> azure는 postgresql

aws 오로라 -> 위DB만 지원
@Transctional(readOnly = )







도커, 젠킨스, 

 - 스냅샷붙은 M2는 정식버전아님


모니터링 
* 네이버 핀포인트
- 전체적인 형태모니터링

*그라파나 
상세 모니터링



```
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	compileOnly 'org.projectlombok:lombok'
	developmentOnly 'org.springframework.boot:spring-boot-devtools'
	runtimeOnly 'com.h2database:h2'
	runtimeOnly 'org.mariadb.jdbc:mariadb-java-client'
	annotationProcessor 'org.projectlombok:lombok'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
```


tdd먼저 작성

좋은팁 
개인과제로 api 간의 롤백처리 
각각의 과정중 앞단 처리롤백 
주문의 연계처리 주문 -> 결제 -> 쿠폰 ->


1. 한서비스 죽으면 처리 -> 비즈니스 오류발생 -> 특정모듈만에러발생
2. 오류 처리발생-> 서비스오류 우회로직 서비스 ->

책 추천
마이크로서비스 도입 이렇게 한다.

동영상 추천
1. 우아콘2020 -> 김영한 영상볼것-> https://www.youtube.com/watch?v=BnS6343GTkY

2. 프론트서버의 사실과 오해
tps - 15000 -> 웹플럭스 구조 



2챕터는 TDD 


3챕터는 jpa

jpa <- 하이버네이트 <- Spring data JPA(추천)


중요!!!!! 이유: 중요 @Setter는 oop에서는 사용X
공부할것 - tell don`t ask (TDA) 기법



jpa 공부할때-> 양방향,역방향, fetch조인, lazy옵션 querydsl 도 많이 사용함
참조영상 
https://www.youtube.com/watch?v=zMAX7g6rO_Y

