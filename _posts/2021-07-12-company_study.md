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

## 스프링부트 백엔드 개발 

 - 강사명 : 이동욱(조졸두)  
 - 교육기간 : 2021.09.07 ~ 2021.09.09
 - 유투브개발바닥- (심심할때 보면 좋음)   
 - 요즘 백엔드개발자 프론트트랜드 - 프론트는 타임리프, 머스테치, 뷰 로개발할것  

### 커리어 러닝 중요!  
 - 주니어 1~5년이상  
 - 자바8 & 클린코드 & 테스트코드  

 - 미드레벨 5~8년이상  
 - JPA & DB & springBoot(테스트코드 최우선)  

 - 시니어 8~ 10년이상  
 - 미드레벨 + MSA &DDD  

### 강사님 개발관련 추천    
  - 도서  
 1. 모던 자바 인액션 이책 강력히 추천  
http://book.interpark.com/product/BookDisplay.do?_method=detail&sc.prdNo=312915546&gclid=Cj0KCQjwm9yJBhDTARIsABKIcGYmvVACX30dn-qUTi8dZjhq5vIvEVhYKHz5hDiQrC3EdhKOFQo9fYIaAnmmEALw_wcB  

 - 동영상 추천  
1. 우아콘2020 -> 김영한 영상볼것-> https://www.youtube.com/watch?v=BnS6343GTkY  
2. 참조영상 ->  https://www.youtube.com/watch?v=zMAX7g6rO_Y  

 - 블로그
1. [Java] 객체지향 생활 체조 원칙 9가지 (from 소트웍스 앤솔러지)  
우아한 테크코스/테크코스 2020. 3. 5. 18:10  
2. 인증쪽할때 enum 활용기 참조할것  
https://techblog.woowahan.com/2527/  

3. 핀포인트 모니터링 예시 
http://125.209.240.10:10123/main/ApiGateway@SPRING_BOOT/5m/2021-09-09-15-50-13?inbound=1&outbound=4&wasOnly=false&bidirectional=false  

4. jpa <- 하이버네이트 <- Spring data JPA(추천)  
중요!!!!! 이유: 중요 @Setter는 oop에서는 사용X  
공부할것 - tell don`t ask (TDA) 기법  

5. 모니터링 오픈소스 추천 
 - 네이버 핀포인트  - 전체적인 형태모니터링  
 - 그라파나  - 상세 모니터링  


6. MSA 공부 좋은팁 
개인과제로 api 간의 롤백처리 각 영역별로 나눈 MSA를 각각의 과정중 앞단 처리롤백 
예를들면 -> 주문의 연계처리 주문 -> 결제 -> 쿠폰 -> X 취소처리 시 롤백처리


     

1. 인텔리제이 사용계기
msa, 멀티모듈 레포, 독립된 nosql, 넷플릭스 api 들은 별개문제

 - 스프링부트 팁
그레이들 추천 공부, 코틀린추천  
jar로 배포추천 -> java -jar jar명 내장톰캣사용  추천 war보다 좋음  
클라우드 네이티브 -> 도커때문에 이와같이쓴다함.  
마리아db 드라이버 -> 기능상같음  

aws에서는  mysql -> azure는 postgresql  
aws 오로라 -> 위DB만 지원  

@Transctional(readOnly = )


세션 : 서버영역에서 저장
쿠키 : 클라이언트 영역에서 저장

쿠키가 저장되지 않는 특별한 브라우저에서 접속하면 세션은 사용할 수 있을까요?
- > NO (JWT는 다른얘기)
쿠키 & 세션 로그인 방식에서는 특별한 브라우저에서는 로그인 X

사용자가 HTTP Request => Body & Param & Header
Request Header (쿠키: (세션Key))

쿠키로 넘어온 세션 Key(key: JESSIONID / value : 78123kadzxca)
HttpSession에서는 ("user", "JESSIONID") / (78123kadzxcz, 세션정보)

쿠키에 있는 세션 Key가 무엇인지 세션에서는 "user"에 매칭되는 세션키 이름이 무엇인지 




## 교육시작 파트


### 실습 개발 환경(윈도우 10 환경 기반)   
👉 Java 8: https://url.kr/cwye6a  
👉 Git: https://url.kr/mcid4e  
👉 SourceTree: https://url.kr/x86k4e  
👉 IntelliJ Ultimate: https://url.kr/kboymj  
     Ultimate 은 유료버전이지만, 처음 사용할 경우 한달간 무료가 지원되니 유료 버전을 설치하면 됩니다.  
     만약 유료 버전 설치가 잘 안된다면 무료 버전인 Community를 설치하면 됩니다.  
👉 putty: https://url.kr/azowp7  
     원격 리눅스 서버로 SSH 접근이 가능한 방법은 아무것이나 가능합니다.  

네이버 로그인 기능이 추가되면
네이버에서는 로긍니 요청이 온 서비스가 미리 쓰겠다고 등록한 사이트인지검증


** 그레이들
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


### tdd먼저 작성
내사이트
=>(내사이트가 리다이렉트) 네이버사이트로 이동
=>네이버 로그인이 성공하면
=>(네이버가 리다이렉트시켜줌) 내사이트의 어느 주소???

OAuth Token / 



1. 한서비스 죽으면 처리 -> 비즈니스 오류발생 -> 특정모듈만에러발생
2. 오류 처리발생-> 서비스오류 우회로직 서비스 ->

책 추천
마이크로서비스 도입 이렇게 한다.


2. 프론트서버의 사실과 오해
tps - 15000 -> 웹플럭스 구조 

2챕터 - TDD 

3챕터 - jpa

1. 한 메서드에 오직 한 단계의 들여쓰기만 한다.
 한 메서드에 들여쓰기가 여러 개 존재한다면, 해당 메서드는 여러가지 일을 하고 있다고 봐도 무관하다.
 메서드는 맡은 일이 적을수록(잘게 쪼갤수록), 재사용성이 높고 디버깅도 용이하다.
 대충 아래와 같이 나눈다면, 메서드명을 통해 조금 더 직관적이면서도 나뉜 메서드를 다른데서도 재사용 가능한 코드가 된다.

```
public class JamieObject {

    String JamieAndNewLine() {
        StringBuilder stringBuilder = new StringBuilder();
        int raw = 10;
        int repeat = 5;
        for (int i = 0; i < raw; i++) {
            for (int j = 0; j < repeat; j++) {
                stringBuilder.append("Jamie");
                stringBuilder.append(" ");
            }
            stringBuilder.append("\n");
        }
        return stringBuilder.toString();
    }
}
public class JamieObject {

    String JamieAndNewLine() {
        StringBuilder stringBuilder = new StringBuilder();
        int raw = 10;
        int repeat = 5;
        RefeatJamieNewLine(stringBuilder, raw, repeat);
        return stringBuilder.toString();
    }

    private void RefeatJamieNewLine(StringBuilder stringBuilder, int raw, int repeat) {
        for (int i = 0; i < raw; i++) {
            RepeatJamie(stringBuilder, repeat);
            stringBuilder.append("\n");
        }
    }

    private void RepeatJamie(StringBuilder stringBuilder, int repeat) {
        for (int j = 0; j < repeat; j++) {
            stringBuilder.append("Jamie");
            stringBuilder.append(" ");
        }
    }
}
```


2. else 키워드를 쓰지 않는다.
 조건문은 복제의 원인이 되기도 함 / 가독성도 좋지 않음

 디자인 패턴의 Strategy 패턴 - 상태 인라인(status inline)의 분기를 막기 위한 다형성(polymorphism) 예제가 있음

- 상태에 대한 분기가 몇 군데 걸쳐 중복돼 있을 때 Strategy 패턴은 특히 유용

 간단한 경우엔 guard clause(보호 구문) 사용 : if에 return을 쓸 것(early return) - 단, 많이 쓰면 간결함을 해칠 수 있음

```
public class JamieObject {

    String JamieStatus(int hour, boolean isStudy) {
        String status = "";
        if (hour > 4 && hour <= 12) {
            status = "취침";
        } else {
            if (isStudy) {
                status = "공부";
            } else {
                status = "여가";
            }
        }
        return status;
    }
}
public class JamieObject {

    String JamieStatus(int hour, boolean isStudy) {
        if (hour > 4 && hour <= 12) {
            return "취침";
        }
        return isStudy ? "공부" : "여가";
    }
}

```


3. 모든 원시값과 문자열을 포장(wrap)한다.
 원시형 변수로는 컴파일러가 의미적으로 맞는 프ㅇ로그램 작성을 안내할 수 없다(예 - 년도에 대한 유효성 검사). 포장한 객체로라면 아주 사소하더라도 컴파일러와 개발자에게 해당 값이 어떤 값이며 왜 쓰는지에 대해 정보를 전달할 수 있다.

 또한 시간이나 돈처럼 작은 단위를 포장한 객체의 경우엔, 행위(메서드)를 놓을 곳을 마련해준다.

```
public class JamieMoney {

    private final int money;

    public JamieMoney(int money) {
        validMoney(money <= 0, "현금은 0원 이상이여야 합니다.");
        validMoney(money % 10 != 0, "현금은 10원 단위 이상만 허용 합니다.");
        this.money = money;
    }

    /* 유효성 검사 */
    private void validMoney(boolean expression, String exceptionMessage) {
        if (expression) {
            throw new IllegalArgumentException(exceptionMessage);
        }
    }

    /* 행위 */
    public int getMoney() {
        return money;
    }
}
```

4. 한 줄에 점을 하나만 찍는다.
 (스트림 등 체이닝하는 일부를 제외)
 어느 코드 한 곳에서 점이 둘 이상 있다면, 해당 부분을 다시 리팩토링 해야 함
- 어쩌면 다른 두 개의 객체를 동시 조작하고 있는 것일 수도 있음
 디미터(Demeter)의 법칙 : "친구하고만 대화하라"
 자신 소유의 객체, 자신이 생성한 객체, 그리고 누군가 준(파라미터로) 객체에만 메시지를 보낼 것
- 그렇지 않을 경우, 다른 객체에 너무 깊숙이 관여하게 됨 : 캡슐화를 어기는 것
 메시지를 받는 객체는 자신의 속을 오픈하기보다는, 작업을 해주도록 해야 함


```
public class JamieObject {

    void getMoney() {
        jamieWallet.getTotalMoney().getMoney();
    }
}

class JamieWallet {
    private final JamieMoney totalMoney;
    
    JamieMoney getTotalMoney() {
        return totalMoney;
    }
}

class JamieMoney {
    
    private final int money;

    int getMoney() {
        return getMoney();
    }
}
public class JamieObject {

    void getMoney() {
        jamieWallet.getTotalMoney();
    }
}

class JamieWallet {

    private final JamieMoney totalMoney;

    int getTotalMoney() {
        return totalMoney.getMoney();
    }
}

class JamieMoney {

    private final int money;

    int getMoney() {
        return getMoney();
    }
}

```

5. 줄여쓰지 않는다.
 과도한 축약은 코드 가독성을 저해한다. 무조건 짧다고 좋은 것은 아니다.

 메서드의 이름이 긴 이유 중 하나는, 책임을 너무 많이 갖고 있거나, 적절한 클래스의 아래에 위치하지 않아서 일 수 있음

 한 두 단어정도로 되어있는 경우엔, 축약을 하지 말 것

- englishName이 길다고 굳이 EName으로 변경하지 말 것

 또한 문맥상 중복되는 단어는 자제할 것

- Jamie의 printJamieName의 경우 문맥상 중복이므로 printName으로!

```
public class Jamie {

    void printJamieName() {
        String EName = "Jamie";
        String KName = "제이미";
    }
}
public class Jamie {

    void printName() {
        String englishName = "Jamie";
        String koreanName = "제이미";
    }
}
```
6. 모든 entity를 작게 유지한다.
 50줄 이상 되는 클래스 또는 10개 파일 이상의 패키지는 없어야 한다.

클래스
 - 50줄 이상인 경우 보통 클래스가 한 가지 일만 하지 않는다. (한 가지 일만 한다면 놔둬도 되는 듯...?)

 - 50줄 정도면 스크롤을 내리지 않아도 된다. - 한 눈에 들어오는 효과!

패키지
 - 하나의 목적을 달생하기 위한 연관된 클래스들의 모임

 - 작게 유지하면 패키지가 진정한 정체성을 가지게 된다.

7. 2개 이상의 인스턴스 변수를 가진 클래스를 쓰지 않는다.
 새로운 인스턴스 변수를 가진 클래스는 응집도가 떨어진다. 많은 인스턴스 변수를 가진 클래스로 응집력있는 단일 작업을 설명할 수 있는 경우는 거의 없다. (추측) 여기서 말하는 인스턴스 변수는 기본형 또는 자료구조형 객체들인 것으로, 일급 컬렉션이나 wrapper객체는 해당되지 않는 것 같다.

 인스턴스 변수의 분해는 여러 개의 관련 인스턴스 변수의 공통성을 이해하게 하여 자료구조형으로 묶어 일급 컬렉션으로 생성할 수 있게 해준다.

 인스턴스 변수들의 집합을 갖고 있는 것에서, 협력 객체(일급 컬렉션/Wrapper 객체)의 계층 구조로 분해하면 더 효율적인 객체 모델이 될 수 있다. 복잡하고 덩치 큰 객체를 이해하는 것은 어렵지만, 분해하면 간단해진다.

 분해하는 것이 어렵거나 막막하다면, 객체를 상관 관계가 있는 반(half)씩 나누거나, 인스턴스 변수를 둘 골라서 그로부터 하나의 객체를 만드는 등을 하는 것을 추천한다.
```
public class Jamie {
    
    private final String name;
    private final String job;
    private final int age;

    public Jamie(String name, String job, int age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
}
public class Jamie {

    private final Name name;
    private final Job job;
    private final Age age;

    public Jamie(Name name, Job job, Age age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
}

```
8. 일급 컬렉션을 쓴다.
 컬렉션을 포함한 클래스는 반드시 다른 멤버변수가 없어야 한다.

 참고 : 일급 컬렉션을 알아보자!

9. getter/setter/property를 쓰지 않는다.
 (추측) 해당 내역은 도메인 객체에만 해당되므로, DTO / Controller 등엔 해당되지 않는다. 또한 DTO 등에서 사용하기 위해 도메인 객체에 getter를 놓는 것은 상관이 없는 것 같다. 무조건 사용을 하지 않는 것이 아닌, 도메인 객체끼리의 사용을 하지 않는 것이 중요하다!

 만약 객체가 지금 인스턴스 변수의 적당한 집합을 캡슐화하고 있지만 그 설계가 여전히 어색하다면, 좀 더 직접적인 캡슐화 위반을 조사해봐야 한다. 그냥 단순히 현재 위치에서의 값을 물을 수 있는 동작이라면 해당 인스턴스 변수를 제대로 따라가지 못할 것이다.(= 값을 물어와서 인스턴스 변수에 담아두고 그 변수를 컨트롤한다면, 그 변수를 잘못 컨트롤 할 수도 있음)

 강한 캡슐화 경계의 바탕에 깔린 사상은 동작의 검색과 배치를 위해 남겨둔 코드를 만질 다른 프로그래머를 위해 객체 모델의 단일한 지점으로 유도하려는 것이다.(= 객체에 메시지를 던져서 작업을 해야지, 값을 가져와서 다른 곳에서 작업을 하지 말자) 이는 많은 긍정적인 하부효과를 가져다 주는데, 중복 오류의 극적 축소(=메서드(기능들)가 객체 내부 한 곳에서 관리되므로)와 새 기능의 구현을 위한 변경의 지역화 개선(= 메서드가 한 곳에서 관리되므로, 변경을 한 곳에서 하면 됨) 등이 있다.
```
public class Jamie {

    private final Name name;
    private final Money money;

    public Jamie(Name name, Money money) {
        this.name = name;
        this.money = money;
    }

    boolean canBuySomething(int somthing) {
        return somthing <= money.getMoney();
    }
}
public class Jamie {

    private final Name name;
    private final Money money;

    public Jamie(Name name, Money money) {
        this.name = name;
        this.money = money;
    }

    boolean canBuySomething(int somthing) {
        return money.moreThanOrEqualsPrice(somthing);
    }
}
```
결론
 9가지 규칙 중 축약 관련을 제외한 규칙은 데이터의 캡슐화를 가시화하고 실현하기 위한 방안이다. 또한 else를 쓰지 않는 규칙은 다형성의 적절한 사용을 유도한다. 축약 관련은 간결하고 직관적인 명명 전략이다. 즉, 코드나 아이디어의 중복이 없도록 코드를 만들기 위한 것이다.
