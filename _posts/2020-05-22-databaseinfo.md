---
# 포스트제목
title: "데이터베이스 관련"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-05-22 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["데이터베이스"]
categories: DataBase
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
---

## DB 관련 리스트  
 - DB사용빈도 높은 실무용 함수  
 - 인덱스   
 - 유니온   
 - 외부조인, 내부조인  
 - pl/sql  
 - 옵티마이저  


## DB사용빈도 높은 실무용 함수  

```
< 집계 함수 >
 max(column) - 최대값을 구하는 함수 ex. select max(sal) from emp => 1600
 min(column) - 최소값을 구하는 함수 ex. select min(sal) from emp => 800
avg(column) - 평균값을 구하는 함수 ex. select avg(sal) frop emp => 1200
sum(column) - 합계를 구하는 함수 ex. select sum(sal) from emp => 3600
count(*) - 총 레코드 수를 세는 함수, null값도 포함 ex. select count(*) from emp => 3
count(컬럼명) - 컬럼명을 기준으로 총 레코드 수를 세는 함수, null값은 제외 ex. select count(comm) from emp =>2


< 문자열 함수 >
lower('Hello World') -  hello world, 해당 컬럼의 값을 소문자로 변환하는 함수
upper('Hello World') - HELLO WORLD, 해당 컬럼의 값을 대문자로 변환하는 함수
inicap('go go go!') - Go Go Go!, 첫글자와 공백이후 첫글자는 대문자로 변환하는 함수
concat('Helllo', 'World') - Hello World, 두 개의 문자열을 연결하는 함수
substr('HelloWorld', 6) - World, 문자열의 6번째자리부터 전체를 추출
substr('HelloWorld', 1, 5) - Hello, 문자열의 1번째자리부터 5자까지 추출하는 함수
length('oracle') - 6, 문자열으 총 길이를 세는 함수 
instr('HelloWorld', 'W') - 6, 문자열에서 특정문자의 위치를 세는 함수,만약 특정문자가 문자열에 없다면 0 반환
lpad('SQLPLUS', 10, '*') - ***SQLPLUS, 우측부터 해당길이에 부족한 부분은 특정문자로 채우는 함수
rpad('SQLPLUS', 10, '*') - SQLPLUS***, 좌측부터 해당길이에 부족한 부분은 특정문자로 채우는 함수 
trim(' SQLPLUS') - SQLPLUS, 공백을 제거하는 함수
ltrim('*SQLPLUS', '*') - SQLPLUS, 좌측부터 문자열에서 해당 문자를 제거하는 함수
rtrim('SQLPLUS*', '*') - SQLPLUS, 우측부터 문자열에서 해당 문자를 제거하는 함수
replace('SEVL TL', 'L', 'EN') - SEVEN TEN, 문자열에서 해당 문자를 다른 문자로 바꾸어주는 함수
nvl(expr1, expr2) - expr1이 null이면 expr2 값으로 반환하는 함수
nvl2(expr1, expr2, expr3) - expr1과 null1을 비교해 null이 아니면 expr2, null이면 expr3을 반환하는 함수
nullif(expr1, expr2) - expr1과 expr2를 비교하여 같으면 null, 다르면 expr1을 반환하는 함수
coalesce(expr1, expr2, ... exprn) - expr1~exprn 목록에서 첫번째로 null이 아닌 expr을 반환

< 숫자 함수 >
abs(-7) - 7, 절대값을 계산하는 함수
mod(1500, 200) - 100, 1500 / 200 의 나머지를 반환하는 함수
ceil(-1.623) - -1, 소수점 첫째자리에서 해당 값을 올림 처리한 정수를 반환하고 해당 값보다는 크지만 가장 근접하는 최소값을 구하는 함수 
floor(-1.123) - -2, 소수점 첫째자리에서 해당 값을 내림 처리한 정수를 반환하고 해당 값보다는 작지만 가장 근접하는 최대값을 구하는 함수
round(17.825, 2)- 17.86 해당 숫자n에m자리까지 반올림하는 함수
trunc(17.825, -2) - 0 해당 숫자 n에서 m자리까지 버림하는 함수 

< 날짜 함수 >
 sysdate - 현재 날짜, 시간 ex. select sysdate from dual; - 14/03/24
 months_between(sysdate, to_date('2014-12-11')) - -8.5659965,
 months_between(to_date('2014-12-11'), sysdate) - 8.56597409, 첫번째 날짜에서 두번째 날짜 사이   개월 수를 반환하는 함수 
  add_months(sysdate, 5) - 14/08/24
 add_months(sysdate, -5) - 13/10/24, 해당 날짜에서 개월 수를 더한 날짜를 반환하는 함수
 next_day(sysdate, '금요일') - 14/03/28, 해당 날짜에서 최초로 도래하는 해당 요일의 날짜를 반환하는 함수
 last_day(sysdate) - 14/03/31, 해당 날짜가 포함되어 있는 달의 마지막 날짜를 반환하는 함수

```

## 인덱스   

## 유니온   

## 외부조인, 내부조인  

## pl/sql  

## 옵티마이저  


