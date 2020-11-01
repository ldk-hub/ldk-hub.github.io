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
toc: true
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

## pl/sql  

프로그램 내부에서 처리하기 힘든 부분을 DB 프로시저로 대신 처리하는 방안
예시 - 지속적인 데이터를 수집하여 insert 시킬때 해당 테이블에 트리거를 설정하여 다음 동작을 취할 수 있도록 프로세스화 시키는 방법

```

-- pl/pgsql으로 테스트하였음.
-- 트리거 및 펑션 샘플 예시
--1. 테이블 생성
create table t1(c1 integer, c2 date);
create table t2 (like t1); -- t1과 같은 구조를 t2테이블을 생성
create table t3 (like t2); -- t2와 같은 구조를 t3테이블을 생성

--2. 트리거 생성 (t1테이블의 insert되는 데이터를 t2테이블에 insert하는 트리거)
CREATE TRIGGER t1_trg
after insert on t1
--referencing new table as new_table
FOR EACH ROW
EXECUTE PROCEDURE insert_t1_tr(); -- t1에 insert되는 데이터가 있으면 Row마다 insert_t1_tr이라고 하는 트리거 프로시저를 실행한다.

3. 함수 생성 (t2테이블에 insert된 데이터 중 키 값에 부합하는 t2테이블의 데이터를 t3에 insert하는 함수 생성)
CREATE OR REPLACE FUNCTION insert_t1_tr() RETURNS TRIGGER 
AS $$
DECLARE
 v_c1 int4 DEFAULT 0;
 v_c2 date;

BEGIN
IF (TG_OP = 'INSERT') THEN
INSERT INTO t2 VALUES(NEW.*); -- T1테이블에 Insert된 변경 데이터를 T2테이블로 Insert

SELECT c1, c2 INTO v_c1, v_c2
FROM t2
WHERE c1 = NEW.c1; -- T2테이블에 Insert된 데이터를 NEW라고 하는 객체에 저장하고 있으며, 그 값 중 C1컬럼에 해당하는 값을 조건으로 T2테이블을 조회하여 v_c1, v_c2변수에 저장

INSERT INTO t3 (c1, c2)
VALUES (v_c1, v_c2);

END IF; -- 위에서 저장된 v_c1, v_c2변수값을 t3테이블에 저장
RETURN NULL;

END

$$ LANGUAGE plpgsql;
-- DB안 테이블에 대해 select할 수 있는 계정 생성
--user생성
create user iot_select password 'test_user';

--search_path 변경
alter user test_user search_path to '퍼블릭명',"$user",public;

--스키마에 대한 권한 부여
grant usage on schema iot_dev to test_user;

--해당 유저(test_public2)로 접속 한 후에 test_user user에게 권한 부여
grant select on all tables in schema "test_public2" to "test_user";

--해당 권한 부여시점 이후에 테이블에 적용될 수 있도록 권한 부여
ALTER DEFAULT PRIVILEGES IN SCHEMA "test_public2" GRANT select on tables TO "test_user"
```

위의 예시는 Table 및 View에 대한 권한이며, 
Function 및 Sequence, Tablespace에 대한 권한은 따로 부여해야됨.


## 옵티마이저  
옵티마이저 정의 : SQL문장을 처리하기위한 최적화 도구
TMI : 오라클 튜닝에서 SQL 튜닝만있는것은 아니지만 평균적으로 70~80%는 SQL튜닝을 사용함. 




#### 옵티마이저 종류  
 - 비용기반 옵티마이저(CBO)  
  테이블과 인덱스에 대한 여러 통계정보를 기초로 각 오퍼레이션 단계별 예상 비용을 산정하고, 이를 합산한 총비용이가장 낮은 실행계획을 선택한다.
 
 - 규칙기반 옵티마이저(RBO) - 오라클 10g서부터 사용중지 간단하게만 파악
   미리 정해 놓은 규칙에 따라 액세스 경로를 평가하고 실행계획을 선택한다.
   
   
   ![옵티마이저](https://user-images.githubusercontent.com/12209348/85936425-b8059400-b935-11ea-9b3c-23c562b05148.jpg)



## 기타 
### SQL Injection
해커에 의해 조작된 SQL 쿼리문이 데이터베이스에 그대로 전달되어 비정상적 명령을 실행시키는 공격 기법  

공격 방법  
1) 인증 우회  
보통 로그인을 할 때, 아이디와 비밀번호를 input 창에 입력하게 된다. 쉽게 이해하기 위해 가벼운 예를 들어보자.   
아이디가 abc, 비밀번호가 만약 1234일 때 쿼리는 아래와 같은 방식으로 전송될 것이다.  
```
SELECT * FROM USER WHERE ID = "abc" AND PASSWORD = "1234";
```
#### SQL Injection으로 공격할 때, input 창에 비밀번호를 입력함과 동시에 다른 쿼리문을 함께 입력하는 것이다.  
```
1234; DELETE * USER FROM ID = "1";
```
보안이 완벽하지 않은 경우, 이처럼 비밀번호가 아이디와 일치해서 True가 되고 뒤에 작성한 DELETE 문도 데이터베이스에 영향을 줄 수도 있게 되는 치명적인 상황이다.  
이 밖에도 기본 쿼리문의 WHERE 절에 OR문을 추가하여 '1' = '1'과 같은 true문을 작성하여 무조건 적용되도록 수정한 뒤 DB를 마음대로 조작할 수도 있다.  


2) 데이터 노출  
시스템에서 발생하는 에러 메시지를 이용해 공격하는 방법이다. 보통 에러는 개발자가 버그를 수정하는 면에서 도움을 받을 수 있는 존재다. 해커들은 이를 역이용해 악의적인 구문을 삽입하여 에러를 유발시킨다.  
즉 예를 들면, 해커는 GET 방식으로 동작하는 URL 쿼리 스트링을 추가하여 에러를 발생시킨다. 이에 해당하는 오류가 발생하면, 이를 통해 해당 웹앱의 데이터베이스 구조를 유추할 수 있고 해킹에 활용한다.


### 방어 방법  
1) input 값을 받을 때, 특수문자 여부 검사하기    
로그인 전, 검증 로직을 추가하여 미리 설정한 특수문자들이 들어왔을 때 요청을 막아낸다.  

2) SQL 서버 오류 발생 시, 해당하는 에러 메시지 감추기  
view를 활용하여 원본 데이터베이스 테이블에는 접근 권한을 높인다. 일반 사용자는 view로만 접근하여 에러를 볼 수 없도록 만든다.  

3) preparestatement 사용하기  
preparestatement를 사용하면, 특수문자를 자동으로 escaping 해준다.  
(statement와는 다르게 쿼리문에서 전달인자 값을 ?로 받는 것) 이를 활용해 서버 측에서 필터링 과정을 통해서 공격을 방어한다.  
