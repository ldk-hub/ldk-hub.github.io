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
일종의 색인기술입니다. 테이블에 index를 생성하게 되면 index Table을 생성해 관리합니다.  
인덱스는 테이블에 있는 하나이상의 컬럼으로 만들 수 있습니다.   
가장 일반적인 B-tree 인덱스는 인덱스 키(인덱스로 만들 테이블의 컬럼 값)와 이 키에 해당하는 컬럼 값을 가진 테이블의 로우가 저장된 주소 값으로 구성됩니다.  

 - 인덱스 필요없을때
  1. 데이터가 적을때 설정하지 않기
  2. 삽입,수정,삭제 처리 많은 테이블
  3. 조회결과가 전체행의 15%이상 읽어들일 때
  
```
--문법
CREATE INDEX [인덱스명] ON [테이블명](컬럼1, 컬럼2, 컬럼3.......)

--예제
CREATE INDEX EX_INDEX ON CUSTOMERS(NAME,ADDRESS); 

--예제 컬럼 UNIQUE 키워드를 붙이면 컬럼값에 중복값을 허용하지 않는다는 뜻입니다.
CREATE[UNIQUE] INDEX EX_INDEX ON CUSTOMERS(NAME,ADDRESS); 

--인덱스 조회
SELECT * FROM USER_INDEXES WHERE TABLE_NAME = 'CUSTOMERS';

--인덱스 삭제
DROP INDEX [인덱스 명]
```

#### 인덱스를 리빌드하는 이유
인덱스 파일은 생성 후 insert, update, delete등을 반복하다보면 성능이 저하됩니다. 생성된 인덱스는 트리구조를 가집니다. 삽입,수정,삭제등이 오랫동안 일어나다보면 트리의 한쪽이 무거워져 전체적으로 트리의 깊이가 깊어집니다. 이러한 현상으로 인해 인덱스의 검색속도가 떨어지므로 주기적으로 리빌딩하는 작업을 거치는것이 좋습니다.

```
--인덱스 리빌드 할 대상 조회쿼리 (트리의 깊이가 4인 인덱스 검출) 해당쿼리에 검출되는 쿼리는 리빌드 권장
SELECT I.TABLESPACE_NAME,I.TABLE_NAME,I.INDEX_NAME, I.BLEVEL,
       DECODE(SIGN(NVL(I.BLEVEL,99)-3),1,DECODE(NVL(I.BLEVEL,99),99,'?','Rebuild'),'Check') CNF
FROM   USER_INDEXES I
WHERE   I.BLEVEL > 4
ORDER BY I.BLEVEL DESC

--인덱스 리빌드 문법
ALTER INDEX [인덱스명] REBUILD;
```

## 외부조인, 내부조인  





## pl/sql  



## 옵티마이저  
옵티마이저 정의 : SQL문장을 처리하기위한 최적화 도구
TMI : 오라클 튜닝에서 SQL 튜닝만있는것은 아니지만 평균적으로 70~80%는 SQL튜닝을 사용함. 




#### 옵티마이저 종류  
 - 비용기반 옵티마이저(CBO)  
  테이블과 인덱스에 대한 여러 통계정보를 기초로 각 오퍼레이션 단계별 예상 비용을 산정하고, 이를 합산한 총비용이가장 낮은 실행계획을 선택한다.
 
 - 규칙기반 옵티마이저(RBO) - 오라클 10g서부터 사용중지 간단하게만 파악
   미리 정해 놓은 규칙에 따라 액세스 경로를 평가하고 실행계획을 선택한다.
   
   
   ![옵티마이저](https://user-images.githubusercontent.com/12209348/85936425-b8059400-b935-11ea-9b3c-23c562b05148.jpg)
