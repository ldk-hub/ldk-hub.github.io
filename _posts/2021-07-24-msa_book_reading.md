---
# 포스트제목
title: "엔터프라이즈 자바 마이크로서비스 내용정리 "
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2021-07-24 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["MSA","마이크로서비스아키텍처","스프링클라우드"]
categories: JAVA
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---
![gg](https://user-images.githubusercontent.com/12209348/100605351-26b6a580-334b-11eb-9785-7e1e5d79dbd0.PNG)

## msa를 공부하게 된 계기
요즘 다양한 플랫폼에서 클라우드 기반전략으로 시스템을 전향하고 있는추세였다. 내가근무했던 회사역시 클라우드화로 전향하기 시작했었고 클라우드 운영을 진행하는 과정에서 msa에 대한 관심이 생겼다.  
무턱대고 구글링을하면서 프로젝트를 진행하려했으나 기본이 탄탄하지 못하다는 생각이 들게 되면서 입문서를 통해 기초를 탄탄하게 쌓기위해 후기가 가장좋았던 입문서를 찾아 구매하게 되었다.   

## 책을 읽기전 중요단락  
책에서 주요내용으로 꼽는 4가지 큰 단락은 이와같다.  
 - 마이크로서비스 모델  
 - 클라우드 네이티브 개발  
 - 내고장성 전략과 모니터링 전략  
 - 개발을 마친 애플리케이션 보안 추가  
 
 - 엔터프라이즈 자바  
  API의 모음과 그 구현을 뜻함. -> UI부터 아랫단의 데이터베이스에이르기까지의 범위를 뜻함.  

## 모노리스 문제점  
 - 각컴포넌트의 규모 변경 불가  
 - 개별 컴포넌트의 성능 저하  
 - 개별 컴포넌트를 따로 전개 불가  
 - 코드 복잡도 증가  
 - 테스트 부정확도 증가  


## 정석 마이크로 서비스 아키텍처 구조
![11](https://user-images.githubusercontent.com/12209348/100836552-d78b8480-34b2-11eb-86f6-db4c323c51a4.PNG)

## 분산에 신경써야하는이유
 - 서비스 위치가 무관해짐  
 - 서비스가언어와 무관해짐  
 - 서비스전개규모가 작고 한가지 목적을 위해 전개됨.  
 - 새로운 서비스는 기존 서비스 기능을 재조합하는 방식  


## 마이크로서비스 문제점
- 서비스 독립성은 우수하지만 서비스간 서로연결하기는 어렵다.
  IP가아닌 논리적 네이밍을 가지고 서비스를 찾는다. 이를 서비스발견(서비스디스커버리라고함)
- 서비스 실패시 전체를 중단하지 않고 서비스 기능을 줄이면서 애플리케이션을 지속할 수단이필요하다.
  실패시 대안을제공하기위해 내고장성(폴트톨레런스)과 서비스탄력성(서비스 리슬라이스)이필요하다.
- 모노리스 운영 대비 < 마이크로서비스 운영의 부하가 더큼 
  그래서 이를 개선하기 위한 모니터링 자동화가 필요하다. 

마이크로서비스 개발은 개발난이도가 높음.

## 지속적인 통합, 지속적인 전달 (CI/CD)
 - 지속적인 통합(CI)
   소스 변경,커밋시 항상 새로 빌드되면서 관련된 테스트가 모두 수행된다는의미
   테스트가 충분하면 CI사용시 어떤 변경이 문제점인지 빠르게 인지할수 있음.
 - 지속적인 전달(CD)
   애플리케이션에 대한 변경이 지속적으로 프로덕션을 포함하는 여러 환경 사이에 전달되면서 
   변경한내용이 신속하게 고객에게 전달되도록 보장해주는것을 의미
   
## 모노리스에서 MSA전환시 사용되는 패턴
 - 도메인 주소 설계(DDD)
   기존의 프로세스에서 도메인모델 분리를 깔끔하게 해야하는데 이는 한계와 많은 어려움이 있다.
   그래서 소유자중심으로 구분하는데 이벤트소싱의 패턴을 사용하여 문제를해결해야한다.
  - 이벤트소싱 
   애플리케이션의 모든 상태 변경을을 이벤트로 발사하는기법 보통 이벤트들은 미리정해진 형태의 로그에 기록한다.
   이벤트를 저장한 로그를 사용해서 전체 데이터베이스를 재구축하거나 외부 도메인 모델 중 일부분을 전달할때 사용한다.
   
1. 빅뱅패턴
 - 가장난이도높은 패턴으로 기존 모노리스의 모든 부분을 하나하나 분리해서 마이크로 서비스로 변환하는 과정을 거친다.  
   마지막에 모노리스에서 마이크로 서비스로 모든 시스템이 전체적으로 이동한다.  
 - 전체적으로 모든 시스템을 전개해야하기 때문에 빅뱅이라는 이름과 함께 시간적 소요가 많이든다. 모노리스 구성만큼 소요됨.  
 - 대부분에서 빅뱅패턴은 권장하지 않음, 특히 MSA경험이없는 기업에서는 리스크가 너무 크기때문에 비추한다.  
 
2. 스트랭글러 패턴
 - 기존 서비스에서 하나씩 점진적으로 시스템을 구성하는 방식이다.
 - 기존 모노리스 환경을 유지하면서 MSA를 조금씩 늘려간다.
 - 장기적인 작업으로 빅뱅패턴보다 시간이 소요된다. 하지만 기존의 서비스에 대한 리스크는 훨씬 줄어든다.
 - 조금씩 구성하면서 상황을 모니터링하면서 문제는 조정하면서 안정화를 거듭해나갈수 있다.
 
3. 하이브리드 패턴
 - 저자의 의견은 가장 많이사용되는 패턴으로 꼽힌다고 한다.
 - 스트랭글러패턴과 비슷한 형태로 시작한다. 차이점은 모노리스를 없애지않는다는점이다.
 - 모노리스 안에 몇가지 기능을 유지하고 그 기능을 MSA에 통합하는방법이다. 
 
 * 사용자는 브라우저에서 자신이 보고 싶은 애플리케이션의 뷰를 요청한다.
 * 뷰는 자신을 만들어내기 위한 필요정보를 얻기 위해 컨트롤러를 호출한다.
 * 컨트롤러는 비즈니스 서비스를 호출한다. 컨트롤러는 여러 소스에서 얻은 데이터를 통합할수있다.
 * 게이트웨이는 미리 정의된 라우팅 규칙에 따라 요청을 적절한 MS에 전달한다.(MS 는 마이크로서비스라함.)
 * MS는 요청을 받고 자체처리를 진행한 후 다른 MS를 호출한다.
 * MS 사슬의 맨 마지막에 있는  MS는 데이터 저장소 계층과 상호작용해 레코드를 읽거나 쓸수있다.
 
### 하이브리드 아키텍처(이해를 위한 구성도)
![1](https://user-images.githubusercontent.com/12209348/101274031-0d47aa80-37de-11eb-8177-ca587b04f6a4.PNG)


### JeAS(just Enough Application Service) 꼭필요한 만큼의 애플리케이션 서버
 - MSA에서 사용할 수 있는 런타임 종류가 있음.
 
 - MSA에서는 다양한 환경이존재해 필요하지 않은 구성요소가 많아져 무거워질 수있어 JeAS를 사용한다.
 - 애플리케이션 서버의 구성 요소 중 애플리케이션 실행을 위해 필요한 부분만을 패키징한 것을 의미한다.


### 마이크로서비스 아키텍처의 런타임으로 JeAS사용하기
![44](https://user-images.githubusercontent.com/12209348/101485766-fdc38f80-399e-11eb-9dcb-1bdadec31da6.PNG)

### JeAS 장점  
 - 패키지 크기 감소  
 - 할당된 메모리 감소  
 - 보안 풋프린트 감소  
 - 애플리케이션 분리증대  
 - 업그레이드 단순화  
 
### 이클립스 마이크로프로파일  
 - 정의   
   마이크로서비스를 위해 엔터프라이즈 자바를 최적화 하기위해 (레드헷,IBM, 등 자바 커뮤니티진들이협력하여만든 것)  
   
 -  마이크로프로파일은 엔터프라이즈 자바 마이크로서비스를 ㅁ위한 명세를 만들고 JeAS런타임은 프로파일과 서로 호환되는 장점이있음.  
 
 
### 드롭위자드
정의 : MSA위해 개발자에게 필요한 내용을 선택가능하게 함으로 JeAS 런타임을 제공
이클립스제티, Jersey, Jackson, 하이버네이트 벨리데이터, 모니터링용 드룹위자드 지표


### 스프링부트-> 옵션화한 스프링 마이크로서비스
다양한 스타터를 제공하여 빠르게 시스템을 구성할 수있도록 구성되어있음.




기존 유형과 다른 컨트롤러 구조

```
@RestController
public class CartController
  @RequestMapping(
    method= RequestMethod.GET, // Http GET 요청의 `/`URL 경로를 통해 이메서드를 사용한다.
    path="/",
    produces = "application/json")
  public List<CartItem> all() throws Exception {} 
  
   @RequestMapping(
    method= RequestMethod.GET, 
    path="/add",
    produces = "application/json")
  public String addOrUpdateItem(
    @RequestParam("Item") String itemName, // item이라는 이름의 URL 질의 파라미터가 이 메서드 파라미터에 매핑된다.
    @RequestParam("qty") Integer qty) throws Exception{
    }
  
  @RequestMapping(
    method= RequestMethod.GET, 
    path="/get/{itemName}",   // 이 종단점에 대한 URL 결로 변수가 /get/ 뒤에온다.
    produces = "application/json")
  public CartItem getItem(
     @PathVariavle("itemName") String itemName) throws Exception{ // URL 경로 변수가 메서드 파라미터에 맵핑된다.
     }
```

위와 같이 @GET, @Produces, @Path 등의 정보를 한꺼번에 지정한다.  다른차이점은 @QueryParam, @PathParam 대신 
@RequestParam, @PathVariable을 사용한다는 것이다.

### 손테일
JAX-RS, JMS, CDI 마이크로서비스에서 꼭 필요한 항목을 집중시킨 기능이며  
https://thorntail.io/generator/   
에서 기능을 제공한다.  

#### 손테일 플러그인 설정
```
   <plugin>
     <groupId>io.thorntail</groupId>
     <artifactId>thorntail-maven-plugin</artifactId>
     <version2.2.0</version>
     <executions>
      <execution>
       <goals>
         <goal>package</goal>
       </goals>
      </execution>
      </executions>
   </plugin>
```

```
// 스코프 안에 Java EE 웹 API를 추가한다.
<dependency>
   <groupId>javax</groupId>
   <artifactId> javaee-web-api</artifactId>
   <version>7.0</version>
   <scope>provided</scope>
</dependency>

```

```
//손테일을 사용하는 JaxrsApplication
@ApplicationPath("/")
public class JaxrsApplication extends Application{

}
```


### JeAS를 채택하기 위한 고려사항
 1. 기업이나 개발자가 JavaEE나 스프링에 대한 경험, 지식이있는가
 2. 프로덕션에서 가장 선호하는 패키징 방식이 무엇인가
 3. 해당 프레임워크의 JeAS가 아닌 런타임을 사용해본 경험이 있는가?
 
### JeAS 관련 
- JeAS를 사용하면 마이크로서비스와 함께 사용하기에 꼭 필요한 런타임만을 패키징할수있다.
이는 손테일이 ㄷ가장 커스텀화를 잘할수 있는 JeAS 런타임이다.
- JeAS 런타임을 사용하면서 필요한 부분만선택하면 엔터프라이즈 자바 애플리케이션 서버에서 필요한 부분만 골라 사용할 수 있다.
- JeAS 런타임은 RESTful 마이크로서비스를 전개할 때 최고의 전개 방법이다.
- 마이크로프로파일은 클라우드 네이티브 마이크로서비스 개발에 필요한 특징을 제공한다.


## MSA TEST
적합한 유형의 Unit TEST
1. 단위테스트
2. 통합 테스트
3. 소비자 중심 계약 테스트
  
단위테스트와 통합테스트는 기존의 테스트 개념과 다르지 않다.   
MSA를 튼튼하게 구성하기 위해서는 위의 3가지 테스트방법이 필수적이다.  
단위 테스트와 통합 테스트는 MSA를 개발하면서 작성한 코드가 MSA를 기술하는 명세에 들어맞는지 확인하는 데 초점을 둔 것이다.   
소비자 중심 계약 테스트는 MSA 외부에서 살펴보는 관점으로 클라이언트가 MSA에 넘기는 요청을 제대로 처리하는지 확인하는목적으로 사용된다.  

테스트 목적  
테스트의목적은 단발성이 아닌 계속적으로 변경되는 코드에 테스트하기 위한 것이며, 코드를 정기적으로 빌드하는 지속적인 통합 과정의 일환으로 테스트가 진행되야한다. 
테스트가 프로덕션까지 도달할 수 있는 오류나 버그의 수를 줄여주는 이점이 있다.

MSA 3가지 테스트 목적 구성
![44](https://user-images.githubusercontent.com/12209348/103437499-bbbefe00-4c6b-11eb-9150-63b320418a5f.PNG)

### 단위테스트
 - 클래스와 클래스에 있는 메서드의 내부 동작을 테스트한다.
 - 개발시 단위 테스트를 위해 목 또는 스텁이 필요한 경우도 있다. 목이나 스텁은 클래스나 메서드를 테스트하기 위해 필요한 외부 시스템의 동작을 흉내낸다.

단위테스트 필요이유  
 1. 클래스 내부 메서드가 의도대로 작동하는지 확인해야한다. 
 2. 검증은 null 체크부터 전자우편 주소가 올바른지 체크하는 복잡한 경우까지 다양하다.
  사용되는 프레임워크는 JUNIT, TestNG다. 
  
  이중 나는 JUNIT을 사용할것이며
  책에서 제공하는 데모 chapter4/admin 소스를 실습할 것이다.
  
불변성
객체지향에서 불변성이란 객체 상태를 변경할 수 있는지를 알려주는 개념이다. 객체 생성 뒤 그 상태를 바꿀 수 없는 경우 그 객체는 변경 불가능하다.

////////소스코드 넣어서 정리해야됨


### 통합테스트
통합테스트는 외부 시스템과 마이크로서비스의 상호작용을 테스트한다.  
이런 외부 시스템에는 데이터베이스, 메시징 시스템, 다른 마이크로서비스, 우리 마이크로서비스 내부 코드는 아니지만 통신할 필요가 있는 다른 대부분의 시스템을 포함한다.  
단위테스트에서 이런 외부시스템에대한 mock이나 stub을 사용하는 경우 통합 테스트에서는 mock과 stub을 실제 외부 테스트에 대한호출로 바꾼다. 
mock과 stub을 제거하면 코드가 이전에 테스트하지 못했던 실행경로를 따라 실행 될 수도있고 외부 시스템의 오류를 처리하는 부분에 대한 테스트 시나리오를 추가해야할 수도 있다.

마이크로서비스와 통합시킬 시스템의 유형에 따라서는 로컬 개발자 컴퓨터만으로 테스트하지 못할수 있다. 통합테스트 경우 자원이 풍부하고 필요한 시스템을 원하는 대로 설치할수있는 지속적인 개선이 이뤄지는 환경에 적합하다.


통합테스트에 개발을 돕기 위해 아퀼리안을 사용할것이다.  

아퀼리안이란?  
JVM에서 실행 가능한 확장성 좋은 테스트 플랫폼이며, 통합, 기능, 인수 테스트를 쉽게 구성할수있음.


통합 테스트 도구로 아퀼리안은 프로덕션 환경을 구축하지 않고도 프로덕션 환경에 가까운 복제품을 제공할 수있기때문이다.(아퀼리안 알아볼것)

 - 메이븐 디펜던시 추가할것 (아퀼리안)

첫째. 의존관계는 아퀼리안 테스트에서 손테일이 사용할 런타임 컨테이너를 추가한다.
두째. 의존관계는 아퀼리안과 JUnit을 통합시켜준다. 런타임 컨테이너에 접근해야한다.
셋째. 손테일의 아퀼리안 의존관계는 손테일 자신을 아퀼리안과 함께 런타임 컨테이너로 등록해서 아퀼리안이 자신을 손테일에게 전개할 수 있게 한다.







### 소비자 중심 계약테스트




#### 테스트 장 요약  
 - 단위 테스트는 중요하지만 단위 테스트 말고도 필요한 테스트가 많다. 서비스의 모든 측면을 가능한 실제와 비슷한 환경에서 테스트해야한다.  
 - 아퀼리안은 프로덕션 환경에 가까운 환경을 제공하고 그런 환경과 상호작용해야하는 런타임 컨테이너가 필요한 테스트를 단순화할 수 있는 훌륭한 테스트 프레임워크이다.(꼭 조사할것)  
 - MSA TEST의 핵심은 MSA가 정의하는 계약, MSA가 노출하는 API를 검증하되 MSA가 API를 노출하는 의도에 대해서가 아닌 클라이언트가 어떤 요청을 보내고 어떤 응답을 받을 것으로 예상하는지 검증하는 것이다.
 
 테스트장 코딩해볼것 
 
 
## 클라우드 네이티브 개발
### 클라우드 장점
 - 비용효율성
 대부분 클라우드는 기업이 사용한 CPU시간만큼 비용을 부과한다. 이로인해 물리적으로 서버를 사용하는 경우에비해서 컴퓨팅 환경을 운영하는비용이줄어든다.
 - 규모변경성
 필요에 따라 스케일업, 스케일다운을 할 수 있도록 기능을 제공한다. 트래픽의 따라 유동적으로 대처할 수 있다. 기존 인스턴스를 복제해서 메모리, CPU 등 동일설정의 새인스턴스를 제공함으로 빠르게 확장할 수있는 점이 있다.
 - 선택의자유
운영팀이 아는 관리환경이라고는 자바뿐인 기업에서 오직 자바 개발만 한 개발자라면 어떻게 노드 JS나 고와 같은 새로운 프로그래밍 언어로 개발해볼수 있겠는가? 클라우드는 이전과 달리 마우스 클릭 몇번만에 새로운 런타임 환경을 제공한다. 그런 새언어 환경을 유지보수하기 위한 내부경험도 필요없다. 클라우드 제공업체가 신경써야하는 부분이다.


### 서비스 모델
클라우드에서 사용할 수 있는 다양한 서비스 모델을 보여주고 애플리케이션이 어떤 위치에 들어가는지 보여준다. 애플리케이션은 서버상에 있는 코드다. 애플리케이션이 온전한 모바일 기기나 브라우저에서 실행되면서 SaaS로 있는 여러 서비스와 상호작용한다면, 그 또한 애플리케이션이 맞지만 이 그림에 표현한 애플리케이션과는 다른종류의 애플리케이션이다. (JAR,WAR,EAR을 뜻함)


![22](https://user-images.githubusercontent.com/12209348/104115874-5a77e880-5357-11eb-899f-508aa58dd3d0.PNG)
### 클라우드 서비스 각 계층  
 - Infra as a Service(Iaas, 인프라 제공 서비스)  
 컴퓨팅 자원, 데이터 파티셔닝, 규모확장, 보안, 백업 등 포함하는 네트워크 인프라에 대한 추상화된 서비스  
 보통 가상 머신을 게스트로 실행할 수 있는 하이퍼바이저를 포함한다.IaaS를 사용하기 위해서그 환경에 맞는 가상머신을 개발자가 직접 구성해야한다.
 - Platform as a Service(Paas, 플랫폼 제공 서비스)  
 Iaas위에서 운영체제, 다양한 프로그래밍 언어에 대한 실행환경, 데이터베이스, 웹 서버를 제공하는 계층이다.  
 개발자가 애플리케이션 개발을 위한 하드웨어와 스프트웨어를 구매하고 설치하지 않았도 된다.  
 - Software as a Service(Saas, 소프트웨어 제공 서비스)  
 애플리케이션의 일부분이나 전체 애플리케이션을 사용자의 필요나 요청에 따라 제공한다. 보통 종량제로 과금된다.  
 마케팅 같은 틈새 시장에 해당하는 서비스 부터 비즈니스를 처음부터 끝까지 관리할 수 있는 서비스까지 다양하다.  
 - Container as a Service(CaaS, 컨테이너 제공 서비스) -> 관련키워드 도커  
 Paas의 하부구조, 도커와 같은 컨테이너 기술을 활용해서 전개, 규모확장이나 축소, 다양한 ㅇ애플리케이션이나 서비스에 대한관리를 단순화시켜줌.
 가장대중화 된건 쿠버네티스
 컨테이너가 변경 불가능하다. 컨테이너 내부를 변경하면 새로운 버전의 컨테이너 이미지가 만들어져야한다. 프로덕션에 릴리스 하기 전에 원하는대로 컨테이너가 동작하는지 검증할 수 있는장점이있다.
 쿠버네티스는 컨테이너에 넣은 애플리케이션을 관리하는 방법에서 많은영향을 받음.


#### 클라우드 네이티브 개발
클라우드 환경에서 전개할 것을 전재로 서비스나 애플리케이션을 개발하는 것을 뜻함. 서비스나 애플리케이션은 서로 느슨하게 연결되어있는 클라우드 서비스의 이점을 


애플리케이션이나 서비스가 제대로 작동하기 위해 필요한 것 중 상당 부분을

쿠버네티스는 서비스카탈로그 개념을 가졌음. 대부분 


#### 클라우드전개
private 사설 클라우드
특정기업만 사용가능한 클라우드로 보통 기업내부용 으로활용

public 공용 클라우드
클라우드 안에 있는 서비스를 대중이사용할수 있는 네트워크를 통해 구성 MSA나 데이터베이스 모두 퍼블릭에있을경우 강력한 보안이 뒷받침되야한다.

hybrid 하이브리드 클라우드
사설 클라우드와 공용 클라우드를 조합한 클라우드로 서로 다른 업체가 제공하는 사성과 공용클라우드를 사용할 수 있다. 하이브리드 클라우드는 빠른 속도로 가장 일반적인 전개모델이 되고 있다.
사성과 공용 양 전개 모델의 장점만 제공되기 때문이다. 빠르게 용량과 규모 보안까지 챙기고 싶다면 이를 선택하면 된다.

### 미니시프트
로컬컴퓨터에서 실행되는 사설 클라우드 인스턴스를 제공한다. 하지만 미니시프트에 있는 PaaS인 오픈시프트는 하이브리드 클라우드나 공용클라우드에서 사용하는 오픈시프트와 동일한 PaaS다. 다른점은 미니시프트 쪽의 PaaS가 로컬 컴퓨터에서 실행된다는 점이다.

```
//터미널에서 설치 스펙할당은 2개의 가상머신, CPU, 2GB RAM, 20GB Hdd 할당해준다.
minishift start
// 설치완료, 로그인 후 
minishift console
//명령으로 콘솔화면을 웹으로 띄운다.
```
미니시프트는 시작하면서 어떤일을 진행하고 있는지 터미널에 자세히 표시한다.


요약
 - Caas를 내부에서 사용하는  Paas를 선택하면 변경 불가능한 컨테이너 이미지의 장점을 누릴 수 있다.
 - 미니시프트는 로컬 컴퓨터에서 오픈시프트를 사용하는 클라우드 환경을 제공한다. 따라서 여러 기계를 관리할 필요 없이 마이크로서비스를 실행하고 테스트하는과정을 단순화 할 수 있다.
 - fabric8메이븐 플러그인은 오픈시프트나 쿠버네티스에서 자원과 서비스를 정의할 때 필요한 성가신 준비 과정을 모두 없애준다. 그래서 fabrics8은 클라우드에서 마이크로서비스가 실행되는 모습을 보기 위해 필요한 설정의 어려움을 잘 넘길 수 있게 해준다.
 
 
 
## 엔터프라이즈 자바  마이크로서비스 구현(심화)
 - EJB를 사용하는 @EJB 주입
 - CDI를 사용한 @Inject
 - static 메서드나 변수를 통해서비스 인스턴스 가져오기
 - XML이나 애노테이션을 기반으로 하는 스프링 의존관계 주입(DI)



다른 서비스와 포트 번호가 겹치는 일이 없도록 CategoryResource의 포트를 지정할 수 있다. 메이븐에서 swarm.port.offset 프로퍼티를  | 로 설정하라.
```
//Category 모델 클래스
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id") //카테고리 ID를 키로 정의, JSON으로 받은 자식 컬렉션을 역직렬화할 때 사용함
public class Category{
 protected Integer id;
 protected String name;
 protected String header;
 protected LocalDateTime created = LocalDateTime.new(); //자식 컬렉션을 빈 객체로 초기화해서 자식이 없는 경우에도 올바른 컬렉션을 반환하도록 함
 protected LocalDateTime updated;
 protected Integer version;
 ...
}
```

추가로 각 서비스에게는 새로운 스레드에서 수행할 작업을 제출하기 위한 Executor Service가 필요하다. 모든 서비스들이 같은 방식으로 작업을 수행하도록 Java EE가 제공하는 ExecutorService를 사용한다.

```
private ManagedExecutorService executorService() throws Exception{
  InitalContext ctx = new InitialContext();
  return(ManagedExecutorService)
      ctx.lookup("java:jboss/ee/concurrency/executor/default");
}

```
이 코드는 서비스이름을 가지고 간단한 JNDI 검색을 수행해서 여러분이 작업을 제출할 수 없는 실행기 서비스의 인스턴스를 찾아 반환한다.
Tip. 여기서 사용하는 ExecutorService는 와일드 플라이에 정의된 것이다. 따라서 이를 JNDI에서 가져오기 위해 무언가를 별도로 설정할 필요가 없다.
여러분의 서비스가 필요한 작업을 수행하기 위해 새 Thread를 직접 만들 수도 있지만, 그렇게 만든 스레드는 JAVA EE가 관리하는 스레드풀 밖에 있게된다. 그게 문제가 될 수 있을까? 항상 그렇지는 않다. 
결과를 동기식, 비동기식으로 처리하느냐에 따라 마이크로 서비스를 소비하는 클라이언트 두가지 종단점을 제공한다.



 
 자바 클라이언트 라이브리를 통해 마이크로서비스 소비하기
  ```
//java.net을 활용한 DisplayResource

@GET
@Path("/sync")
@Produces(MediaType.APPLICATION_JSON)
public Category getCategoryTreeSync() throws Exception{
 HttpURLConnection connection = null;
 
 try{
   URL url = new URL(this.categoryUrl); //categoryResource를 가리키는 URL 생성
   connectrion = (HttpURLConnection) url.openConnection();
   
   connection.setRequestMethod("GET"); //연결에 사용할 요청 방식으로 HTTP GET설정
   connection.setRequestProperty("Accept", MediaType.APPLICATION_JSON);
   
   
   if(connection.getResponseCode() != HttpURLConnection.HTTP_OK){   //OK가 아닌 응답 코드 검사
         throw new RuntimeException("Request Failed: HTTP Error code: " + connection.getResponseCode());
   }
   
   return new ObjectMapper()   //JSON역직렬화를 수행하기 위한 ObjectMapper 생성
        .registerModule(new JavaTimeModule())   //JSON에서 LocalDateTime 인스턴스로 변환을 처리하기 위해 JAvaTimeModule을 등록
        .readValue(connection.getgetInputStream(), Category.class);  //응답으로 받은 InputStream을 ObjectMapper에 넘겨 역직렬화해서 Category 인스턴스를 얻음
        
   } finally {
      assert connection != null;
      connection.disconnect();//CategoryResource 서비스에 대한 연결을 닫음
      
}

 ```
 


## 소비할 마이크로서비스 발견하기

주요내용
- 서비스 발견이 중요한 이유
- 클라이언트가 찾을 수 있게 마이크로서비스를 등록하는 방법
- 손테일이 지원하는 서비스 레지스트리 종류
- 클라이언트가 마이크로서비스를 찾아내는 방법


왜 마이크로서비스를 발견할 수 있어야 하는가?

직접 마이크로 서비스 찾기  
![1](https://user-images.githubusercontent.com/12209348/107191362-64146f00-6a2f-11eb-8be7-a160a8af5146.PNG)



여러 인스턴스가 있는 마이크로서비스 직접 검색  
![2](https://user-images.githubusercontent.com/12209348/107191365-65459c00-6a2f-11eb-9598-262db8c643aa.PNG)



서비스 발견은 무엇인가?
 - 서비스 발견  
 실행 시점에 한 마이크로서비스가 소비할 것을 목적으로 다른 마이크로서비스의 물리적 위치를 얻을 수 있는 수단을 뜻함.  
 서비스 발견을 제공하려면 서비스 레지스트리를 사용해야한다. 레지스트리가 없으면 서비스 발견 과정에서 URL을 가져올 장소가 없을 것이다.
 
 1. 지불 마이크로서비스는 알려진 서비스 레지스트리에게 스트라이프 마이크로서비스의 위치를 요청한다.
 2. 서비스 레지스트리는 현재 사용 가능한 모든 스트라이프 인스턴스를 반환한다.
 3. 지불 MSA는 서비스 레지스트리에서 얻은 스트라이프 MSA인스턴스에게 요청한다.
 4. 지불 MSA는 스트라이프MSA가 돌려주는 응답을 받는다.
 
 
 서비스발견과 레지스트리의 이점은?
 MSA환경에서 서비스 레지스트리라는 추가 인프라를 구축하고 관리해야하는 이유는 무엇일까?
 프로퍼티 파일등을 사용해 MSA가 소비할 URL을 외부화 
 
 
 
 상태가 있는 MSA와 상태가없는 MSA
 MSA의 규모를 원하는 대로 변경할 수 있다는 것은 분명환상적인 일이다. 하지만 문제가있다. 지금까지 우리가 사용한 것은 상태가 없는 MSA이다.
 상태가 없는 MSA는 요청과 요청사이에 자기 내부의 아무런 데이터가 유지되지 않는다.
 
 MSA개발은 상태가 없는 경우에 아주 많이 초점이 맞추어져 있다. 사용자의 상태에 신경쓰지 않고 MSA규모의 늘리거나 줄이려면 상태가 없는 것이 핵심이다.
 
 규모 확장을 지원하려면 상태가 있는 MSA는 안된다. 적어도 JAVA EE의 상태가 있는 세션 빈과 같은 방식으로 상태를 관리해서는 안된다. 흔히 말하는 것처럼 MSA는 반려동물이 아닌 가축과 같기를 바해야한다.
 즉 반려동물처럼MSA가 소수 존재하고 그중 하나라도 사라지면 큰 문제인 것 보다. 가축처럼 얼마나 많이 생기고 사라지든 크게 영향이 없는 것을 비유한것이다ㅓ. 
 
 지난 5년간 엔터프라이즈 자바에서는 더욱 상태가 없는 서비스로 바귀는 움직임이 있었다. 하지만 MSA로 옮겨감에 따라 그런 경향은 이전보다 더 흔한 일이 됐다. 개발자와 아ㅓ키텍트가 상태가 있는 서비스에서 상태가 없는 서비스로 사고방식을 바꾸는 것은 쉬운일이 아니다. 
 
 
 
 #### 넷플릭스 리본
손테일은 전적으로 이런 목적으로 넷플릭스 리본을 통합할 수 있다. 넷플릭스에서 자체 서비스용도로 개발한 클라이언트 측 부하 균일화 프레임워크다.

 - 라운드로빈
서비스를 제공하는 모든 가용서버들로부터 순차적으로 서버를 선택한다. 이때 각 서버에 실제로 얼마나 많은 부하가 걸려 있는지는 고려하지 않는다.

 - 가용성 필터링
회로차단 상태인 서버를 건너뛴다. 3회이상 연결에 실해했거나 동시연결이 많은 서버들로 회로차단 상태로 간주한다.

 - 응답시간 가중치
각 서버에 평균 응답 가중치를 부여하고 그 가중치를 사용해 각 서버를 표현하는 난수 범위를 지정한다. 가중치가 더 높은 서버나 응답시간이 더 짧은 서버가 선택 될 가능성이 높다.

 - 구역을 감안한 라운드 로빈
특히 아마존 웹 서비스에 전개한 경우 유용하다. AWS에서는 서버가 가용성 구역에 따라 분산되어 있다. 이균일화 규칙은 서버가 클라이언트와 같은 구역에 있는지와 사용 가능한지에 따라 요청을 처리할 서버를 선택한다.

 - 랜덤
사용가능한 서버 중에서 완전히 임의로 서버를 선택한다.

기본선택은 RR이다. 성능을 우선한다면 응답시간 가중치를 선택하라. 응답시간가중치 방식은 서버 인스턴스 중 하나의 성능이 그 인스턴스의 MSA환경을 재시작해야할정도로 나쁜 경우 유용하다. 재시작이 언제 일어날지 모르는 인스턴스에게 트래픽을 계속 보내고 싶은 사람은 없을 것이다.

리본은 서비스 레지스트리의 위치를 알아야한다. 서비스를 제공하는 사용 가능한 인스턴스 목록을 가져오는 작업을 담당하는 클래스를 지정할 필요가 있다.

```
2017년 넷플릭스는 리본을 더 이상 유지보수하지 않는다고 공지했다. 리본의 깃허브를 보면 어떤 부분을 넷플릭스에서 여전히 사용중이고 어떤 부분을 사용하지않는지 알 수 있다.
유지보수가 활발하지 않지만 리본은 안정적이며 대부분의 프로덕션 용례에 사용할 수 있는 준비가 되어있다. 손테일에서 MSA를 소비할때 리본을 사용하기 때문에 손테일 개발팀은 장기적으로 리본을 대체할 만한 다른대인이 있는지 찾는중이다.
```

![11](https://user-images.githubusercontent.com/12209348/112838844-78442680-90d8-11eb-9260-37615a1d1d2e.PNG)


손테일로 마이크로서비스 등록하기
손테일은 서비스 레지스트리에 대한 추상화를 제공하며 그 추상화는 토폴로지라고 알려져있다.
 - 단어뜻 :  토폴로지(영어: topology, 문화어: 망구성방식)는 컴퓨터 네트워크의 요소들(링크, 노드 등)을 물리적으로 연결해 놓은 것, 또는 그 연결 방식을 말한다. 로컬 영역 네트워크(LAN)은 물리적 토폴로지와 논리적 토폴로지 둘 다 보여 줄 수 있는 네트워크의 한 예이다.

이런 추상화에는 어떤

 
 
 * 손테일이 제공하는 레지스트리 구현이나 토폴로지 타입 종류
 
 제이그룹스
  - 서로 메세지를 주고받으려는 목적으로 만들어진 노드들로 이뤄진 클러스터상에서 신뢰성 있는 메시징을 제공하기위한 툴킷이다. 손테일은 모든 MSA에 대해 클러스터를 생성함으로 의사서비스레지스트리를 만들 수 있고 새로운 서비스를 사용할 수 있을때마다 그 사실을 통지할 수 있다.
 
 오픈시프트
  - 레드햇 오픈시프트는 컨테이너 관리에 쿠버네티스를 사용하는 컨테이너 플랫폼이다. 온리안 버전 오픈시프트를 사용하거나 로컬 환경에 직접 오픈시프트를 설치하거나 미니 시프트 내에서 오픈시프트를 사용할 수 있다.
  
 콘술
  - 콘솔아님 콘술이다. 해시코프가 개발한 서비스발견 프레임워크다.
 
 
   
 
 
 
 
 
 
    
  
    
 
          
 
   
 
 
 
   
 
 
 
 
## CHAPTER 6 6. 마이크로서비스 소비하기  
주요 내용   
• 마이크로서비스를 소비하는 방법    
• 여러분이 선택해야 하는 마이크로서비스 소비 방법    
사람에 따라 마이크로서비스를 소비한다는 말을 다르게 생각한다. 스크립트, 웹 페이지, 다른 마이크로서비스, 또는 HTTP 요청을 보낼 수 있는 어떤 것이든 마이크로서비스의 클라이언트가 될 수 있다. 이런 모든 유형의 클라이언트를 다루면 클라이언트 하나하나가 책 한 권이 될 것이다. 마이크로서비스 개발은 재미있는 일이다. 하지만 서로 상호작용하는 많은 마이크로서비스들이 있어야 비로소 마이크로서비스가 더 재미있어진다. 두 서비스가 서로 상호작용하기 위해서는 한 서비스가 다른 서비스를 호출할 수 있는 수단이 있어야 한다. 이번 장은 한 마이크로서비스가 자바 기반 라이브러리를 사용해 다른 마이크로서비스를 소비하는 방법을 설명한다. 하지만 마이크로서비스를 소비하는 다른 일반적인 자바 클라이언트들도 여기서 보여준 방법을 사용할 수 있다.

[그림 6-1]처럼 엔터프라이즈 자바에서는 두 서비스가 직접 서비스 호출을 통해 상호작용할 수 있다.  



서비스 호출 방법은 다음과 같다.  
• EJB를 사용하는 QEJB 주입  
• CDI를 사용한 Inject  
• Static 메서드나 변수를 통해 서비스 인스턴스 가져오기  
• XML이나 애노테이션을 기반으로 하는 스프링 의존관계 주입(DI, dependency injection)   
런타임에 있을 때만 적용할 수 있다.





추상화된 계층을 제공하기 때문에 클라이언트 코드가 엄청나게 단순해진다. 예제를 통해 각각의 경우 코드가 얼마나 달라지는지 살펴볼 것이다. 이번 장에서 다룬 예제는 이 책 예제 코드 /chapter6 디렉터리에서 볼 수 있다. 각 클라이언트 라이브러리를 사용해서 2장에서 만든 CategoryResource라는 RESTful 종단점을 호출하는 서비스를 구현할 것이다. 각 서비스는 CategoryResource에게 받은 데이터를 호출한 쪽에 응답한다.
TIP 다른 서비스와 포트 번호가 겹치는 일이 없도록 CategoryResource의 포트를 지정할 수 있다. 메이븐에서 swarm. port.offset 프로퍼티를 로 설정하라. 이번 장에서 우리가 구현할 모든 서비스에게는 관리자 서비스에서 전달받을 카테고리를 JSON으로 표현할 객체가 필요하다. 이를 편리하게 하기 위해 각 클라이언트 라이브러리 메이븐 모듈은 자신만의 Category 객체를 포함할 것이다. 관리자 서비스로부터 응답을 받으면 이 객체로 역직렬화한다.

그림 - 카얌베 관리자 마이크로서비스 클라이언트  
![KakaoTalk_20210418_151755921](https://user-images.githubusercontent.com/12209348/115136302-ea65b680-a059-11eb-80b8-e44b3a1e34f8.jpg)


예제 6-1 Category 모델 클래스
```
//카테고리 ID를 키로 정의, JSON으로 받은 자식 컬렉션을 역직렬화할 때 사용함
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
//자식 컬렉션을 빈 객체로 초기화해서 자식이 없는 경우에도 올바른 컬렉션을 반환하도록 함
public class Category {
protected Integer id;
protected String name;
protected String header;
protected Boolean visible;
protected String imagePath;
protected Category parent;
private Collection<Category) children = new HashSet<>();
protected LocalDateTime created = LocalDateTime.now();
protected LocalDateTime updated;
protected Integer version;
}
```

단순화를 위해 게터와 세터는 생략했지만 예제 코드 안에서 Category의 전체 소스 코드를 볼
수 있다. 추가로 각 서비스에게는 새로운 스레드 hread 에서 수행할 작업을 제출하기 위한 Executor Service가 필요하다. 모든 서비스들이 같은 방식으로 작업을 수행하도록 Java EE가 제공하는 ExecutorService를 사용한다.

```
private ManagedExecutor Service executorService() throws Exception {
InitialContext ctx = new InitialContext();
return (ManagedExecutor Service)
ctx.lookup("java:jboss/ee/concurrency/executor/default");
}
```

이 코드는 서비스 이름을 가지고 간단한 JNDI 검색을 수행해서 여러분이 작업을 제출할 수 있는 실행기 서비스의 인스턴스를 찾아 반환한다. 
  --	NOTE 여기서 사용하는 ExecutorService는 와일드플라이에 정의된 것이다. 따라서 이를 JNDI에서 가져오기 위해 무언가를 별도로 설정할 필요가 없다.
여러분의 서비스가 필요한 작업을 수행하기 위해 새 Thread를 직접 만들 수도 있지만, 그렇게 만든 스레드는 Java EE가 관리하는 스레드 풀 밖에 있게 된다. 그게 문제가 될 수 있을까? 항상 그렇지는 않다. 하지만 실행 시점의 스레드 풀 크기가 JVM에서 사용 가능한 스레드 개수와 비슷한 경우에는 문제가 될 수 있다. 스레드를 직접 생성하는 것은 바람직하지 않으며ExecutorService를 사용하는 편이 낫다는 것이 일반적인 규칙이다. 결과를 동기적으로 처리하느냐 비동기적으로 처리하느냐에 따라 마이크로서비스를 소비하는 클라이언트 코드가 어떻게 달라지는지 보고 싶기 때문에, 클라이언트 라이브러리를 사용하는 자원은 두 가지 종단점을 제공한다.  

  • /sync - 요청을 받아서 동기적으로 처리한다.
  • /async - 요청을 받아서 비동기적으로 처리한다.  
  
전통적으로 서비스는 다른 자원이 응답을 마칠 때까지 동기적으로 통신하도록 개발되어 왔다. 더 나은 성능과 규모 확장성으로 서비스를 제공하기 원하는 기업이 늘어남에 따라 점차 서비스가 비동기적으로 동작하는 쪽으로 바뀌었다. 이번 장과 이 책의 나머지 부분에서는 동기적 사용 패턴과 비동기적 사용 패턴을 함께 배울 것이다. 마이크로서비스가 주는 이점을 더 늘리려면 일정 수준 이상 비동기적인 동작이 필요하다. 비동기를 사용하지 않으면 분산이 주는 이점을 적게 누리게 된다. 비동기를 거의 사용하지 않는 경로를 택한다면 그냥 모노리식한 구조에 계속 머무르는 편이 나을지도 모른다.  

 -- 	NOTE 여러분의 마이크로서비스에는 categoryUrl이라는 필드 정의가 들어 있다. 이 필드는 http://localhost:8081/admin/categorytree로 하드 코딩되어 있다. 물론 이런 식으로 URL을 프로덕션에서 처리하는 경우는 없겠지만 예제를 단순화하기 위해서 경로를 하드 코딩했다. 나중에는 서비스 발견을 사용해 다른 서비스에 접속하는 방법을 살펴볼 것이다.
 
## 6.1 자바 클라이언트 라이브러리를 통해 마이크로서비스 소비하기  
이번 절에서는 HTTP 요청을 직접 처리하는 저수준 라이브러리를 사용해 마이크로서비스를 소비하는 예제를 살펴본다. 저수준 라이브러리를 사용하면 코드가 좀 더 길어지고 데이터를 추가로 처리해야 하지만 서비스를 호출하는 방법을 원하는 대로 더 유연하게 바꿀 수 있다. 예를 들어 RESTful 종단점이 아닌 다른 방식의 HTTP 자원과 통신하려 하는 경우, RESTful 기능만을 제공하는 라이브러리가 아니라 이런 라이브러리를 사용하는 것이 더 낫다.

## 6.1.1 java.net  
java.net 패키지에 있는 클래스는 처음부터 JDK의 일부분이었다. 여러 해에 걸쳐 java.net은 개선됐지만 그 패키지는 주로 저수준 HTTP 상호작용에 초점을 맞추고 있다. 전혀 RESTful종단점을 소비하는 것에 대한 고려가 이루어져 있지 않기 때문에 java.net을 사용하면 약간은 당황스러울 정도로 복잡한 코드를 작성해야 한다.
우선 DisplayResource의 첫 번째 메서드를 살펴보자.


예제 6-2 java.net을 활용한 DisplayResource
```
@GET
@Path("/sync")
@Produces (MediaType. APPLICATION_JSON)
public Category getCategoryTreeSync() throws Exception {
HttpURLConnection connection = null;
try {
//CategoryResource 가리키는 URL 생성 
URL url = new URL(this.categoryUrl);
connection = (HttpURLConnection) url.openConnection();
//연결에 사용할 요청 방식으로 HTTP GET 설정
connection.setRequestMethod("GET");
//응답으로 받을 수 있는 미디어 타입으로 application/json 설정
connection.setRequestProperty("Accept", MediaType, APPLICATION_JSON);
// OK가 아닌 응답 코드 검사
if (connection.getResponseCode() != HttpURLConnection. HTTP_OK) {
throw new RuntimeException("Request Failed: HTTP Error code: " + 
connection.getResponseCode());
}
//JSON 역직렬화를 수행하기 ObjectMapper 생성 return new ObjectMapper()
Return new ObjectMapper()
//JSON에서 LocalDateTime위한 인스턴스로 변환을 처리하기 위해 JavaTimeModule을 등록
registerModule(new JavaTimeModule())
//응답으로 받은 InputStream을 ObjectMapper에 넘겨 역직렬화해서 Category 인스턴스를 얻음
.readValue(connection.getInputStream(), Category.class);
} finally {
assert connection != null;
// Category Resource 서비스에 대한 연결을 닫음
connection.disconnect()
}
}
```

간단한 RESTful 종단점을 처리하지만 이 코드는 분명 간단하지 않다. 게다가 오직 동기적인 처리만 가능하다. 다음 예제는 앞의 코드를 어떻게 바꿔야 비동기적으로 마이크로서비스를 처리할 수 있는지 보
여준다.  

```
예제 6-3 java.net 비동기 기능을 활용한 DisplayResource
@GET
@Path("/async")
@Produces (MediaType . APPLICATION_JSON)
public void getCategoryTreeAsync( 
@Suspended final AsyncResponse asyncResponse)throws Exception {
  executorService().execute(() -> {
  HttpURLConnection connection = null;
try {
 // 연결을 열고, 상태 코드를 검사하고, 응답을 처리하는 코드는 동기적인 예제 코드와 같기 때문에 여기서는 생략했다.
   asyncResponse. resume(category);
//Category 인스턴스로 AsyncResponse를 재개
} catch (IOException e) {
  //예외를 가지고 AsyncResponse 재개
  asyncResponse. resume(e);
} finally {
   assert connection != null;
   connectiondisconnect();
  }
 });
}
```

이 목록에는 처음 보는 개념이 들어 있다. 바로 Suspended와 AsyncResponse가 그것이다. 이 두 조각은 JAX-RS가 클라이언트 요청을 비동기적으로 처리하는 방식의 핵심이다. @Suspended는 클라이언트로부터 들어오는 HTTP 요청을 응답이 준비될 때까지 JAX-RS 런타임이 일시 중단시켜야 한다는 뜻이다. 개발자는 AsyncResponse를 통해 런타임에게 응답이 준비되었거나 응답을 준비하는 데 실패했음을 알릴 수 있다.

JAX-RS AsyncResponse 처리
![KakaoTalk_20210418_151755658](https://user-images.githubusercontent.com/12209348/115136300-e89bf300-a059-11eb-9062-ad6319ca7bd5.jpg)

[그림 6-4]의 각 단계에서 벌어지는 일은 다음과 같다.
1 브라우저나 다른 클리이언트로부터 HTTP 요청이 도착한다.
2 getCategoryTreeAsync()는 별도의 스레드에서 코드가 실행되도록 만든다. getCategoryTreeAsync()가 완료될 때까지 클라이언트 요청이 일시 중단되며, 요청을 처리하던 HTTP 요청 스레드는 다른
요청을 처리한다.
3 외부 마이크로서비스에게 HTTP 요청을 보낸다.
4. 외부 마이크로서비스로부터 HTTP 요청을 받는다.
5 응답 데이터를 asyncResponse.resume()에 전달한다.
6 HTTP 요청 스레드에서 클라이언트 요청을 다시 활성화하고 응답을 구성한다.
7 응답을 요청을 보낸 브라우저나 클라이언트에게 보낸다.

 -- WARNING_ @Suspended를 RESTful 종단점에서 사용해도 그 종단점을 호출하는 클라이언트가 블록되는 것을 막지는 못한다. Suspended는 요청을 처리하는 서버 쪽의 스루풋(throughput)만을 높일 수 있다. @Suspended가 없으면 요청이 들어오면서 그 요정을 처리하는 메서드가 완료될 때까지 처리 스레드를 블록시키기 때문에 JAX-RS 자원이 단지 사용 가능한 스레드 개수만큼만 요청을 처리할 수 있다.  
 
이제 서비스를 만들었으므로 시작해보자. 이 책 예제 코드의 /chapter6/admin 디렉터리로 가서 다음을 실행하라.
```
mvn thorntail:run
```
CategoryResource가 시작되면 브라우저 http://localhost:8081/admin/categorytree를 통해 사용 가능해진다. 이제 DisplayResource를 시작하자. /chapter6/java-net 디렉터리로 들어가서 다음을 실행하라.  
```
mvn thorntail:run
```
이제 브라우저에서 http://localhost:8080/sync와 http://localhost:8080/async를 통해 방금 시작한 마이크로서비스에 접속할 수 있다. 이 두 URL 모두 현재 관리 마이크로서비스에 들어 있는 카테고리로 이뤄진 트리를 브라우저에서 보여준다.  

## 6.1.2 아파치 HttpClient
아파치의 HttpClient를 사용하면 java.net에서 사용했던 클래스 위에 추상 계층을 얻을 수 있어서 아랫단의 HTTP 연결과 상호작용할 때 필요한 코드를 최소화할 수 있다. DisplayResource에 있는 코드는 6.1.1절에서 본 코드와 그리 다르지 않지만 코드의 가독성이 높아졌다. 예를 들어DisplayResource에 있는 첫 번째 메서드를 살펴보자.

```
예제 6-4 HttpClient를 사용해 만든 DisplayResource
try-with-resource 문장 안에서
HTTP 클라이언트 생성
Category Resource
@GET
URL 종단점을 가지고
@Path("/sync")
HttpGet 인스턴스 생성
)
@Produces (MediaType.APPLICATION_JSON)
public Category getCategoryTreeSync() throws Exception {
try (CloseableHttpClient httpclient = HttpClients.createDefault()) {
HttpGet get = new HttpGet(this.categoryUrl);
응답을 처리할
get addHeader("Accept", MediaType. APPLICATION_JSON);
핸들러를
JSON 응답을
전달하면서
받는다고 지정
HttpGet을
return httpclient.execute(get, response -> {
실행
int status = response.getStatusLine().getStatusCode();
응답 코드가
if (status >= 200 && status <300) {
OK 인지 확인
return new ObjectMapper()
.registerModule(new JavaTimeModule())
.readValue(response.getEntity().getContent(),
Category.class);
} else {
throw new ClientProtocolException("Unexpected response
status: " + status);
}
응답에서 HttpEntity를
});
가져와서 ObjectMapper로
Category 인스턴스로 변환
}
```

이렇게 짧은 예제에서도 HTTP 요청을 보내는 클라이언트 코드가 얼마다 간단해졌는지 볼 수 있다. 이제 Suspended를 사용하는 코드가 얼마나 간단해지는지 살펴보자.

```

예제 6-5 HttpClient와 OSuspended를 사용해 만든 DisplayResource |
@GET
@Path("/async")
외부 서비스를 호출하는 코드를
@Produces (MediaType. APPLICATION_JSON)
별도의 스레드에서 실행
public void getCategory TreeAsync(@Suspended final AsyncResponse
asyncResponse) throws Exception {
executor Service().execute() -> {
try (CloseableHttpClient httpclient = HttpClients.createDefault()) {
HttpGet get = new HttpGet(this.categoryUrl); ;
1 | 연결을 열고, 살태 코드를 검사하고, 응답을 처리하는 코드는 ALS
|| 동기적인 예제 코드와 같기 때문에 여기서는 생략했다.
CasyncResponse. resume(category);
응답받은 카테고리로
} catch (IOException e) {
AsyncResponse를 재개
asyncResponse. resume(e);
}
});
}
```


여기서도 비동기적 접근 예제는 동기적인 예제와 비슷하다. 다만 JAX-RS에게 외부 마이크로서비스를 호출하는 동안 HTTP 요청 처리를 일시 중단 시키라고 지시하는 @Suspended와 AsyncResponse를 볼 수 있다.  
http://localhost:8081/에 이미 CategoryResource 마이크로서비스가 실행 중이라면 아파치 HttpClient를 사용하는 새로운 마이크로서비스를 시작할 수 있다.  
 -- WARNING_ 6.12절의 마이크로서비스를 실행하기 전에 이전에 실행 중이던 마이크로서비스를 종료해야한다. 그렇지 않으면 포트 번호가 중복되어 실행이 되지 않을 수 있다.
 /chapter6/apache-httpclient 디렉터리로 가서 다음을 실행하자.
```
mvn thorntail:run
```
이제 브라우저에서 http://localhost:8080/sync와 http://localhost:8080/async를 통해 방금 시작한 마이크로서비스에 접속할 수 있다. 6. 1.1절에서 jave.net으로 구현했던 경우와 마찬가지로 이 두 URL은 모두 현재 관리 마이크로서비스에 있는 카테고리로 이뤄진 트리를 브라우저에서 보여준다.

이번 절에서는 URL과 HTTP 요청에 초점을 맞춘 클라이언트 라이브러리를 살펴봤다. 이들은 HTTP 자원과 상호작용할 때 사용하기 좋지만 RESTful 종단점을 처리하고 싶을 때는 코드가 너무 장황해진다. 이런 경우 클라이언트 코드를 간단하게 해줄 수 있는 라이브러리를 찾을 수 있을까?


## 6.2 JAX-RS 클라이언트 라이브러리로 마이크로서비스 소비하기
이번 절에서는 HTTP보다 더 높은 수준의 추상화를 제공하는 클라이언트 라이브러리를 소개한다. 두 라이브러리 모두 JAX-RS 종단점과 통신할 때 사용할 수 있는 특별한 API를 제공한다.

### 6.2.1 JAX-RS 클라이언트
JAX-RS는 Java EE의 JSR 311과 JSR 339 명세로 정의되어 있었다. 이런 명세의 일부분으로 JAX-RS에는 JAX-RS 자원이 제공하는 RESTful 종단점을 호출하는 더 깔끔한 수단을 개발자들에게 제공하기 위한 클라이언트 API가 포함되어 있다.  
그렇다면 JAX-RS 클라이언트 라이브러리를 쓰는 이점은 무엇일까? JAX-RS 클라이언트 라이브러리를 사용하면 RESTful 마이크로서비스에 연결할 때 필요한 저수준 HTTP 연결에 대해 신경 쓰지 않고 다음과 같은 꼭 필요한 메타 데이터 inceta data에 집중할 수 있다.  
 • HTTP 메서드  
 • 전달할 파라미터  
 • 파라미터의 MediaType과 반환 타입  
 • 필요한 쿠키(cookie)  
 • RESTful 마이크로서비스를 소비하기 위해 필요한 다른 메타 데이터  
 
JAX-RS 클라이언트 라이브러리를 사용할 때는 응답을 처리할 때 JSON을 LocalDateTime 인스턴스로 역직렬화하기 위해 적절한 프로바이더를 등록해야 한다. 이를 위해 다음과 같은 코드가 필요하다. 앞으로 다루는 예제에서는 이 프로바이더를 계속 사용할 것이다.


```
6-6 ClientJackson Provider
ObjectMapper 인스턴스를 사용하는
ContextResolver를 제공
public class clientJacksonProvider implements ContextResolver<objectMapper) {
private final ObjectMapper mapper = new ObjectMapper()
register Module(new JavaTimeModule();
- - 새 ObjectMapper를 생성
LocalDateTime 변환을 위해
JavaTimeModule을 등록
public ObjectMapper getContext(Class<?> type) {
return mapper;
요청을 받으면 ObjectMapper
}
인스턴스를 생성해 반환
}
@Override
```
여기서도 동기적 종단점 예제부터 살펴본다.

```
예제 6-7 JAX-RS 클라이언트를 사용하는 DisplayResource
@GET
@Path("/sync")
@Produces (MediaType. APPLICATION_JSON)
public Category getCategory TreeSync() {
Client client = ClientBuilder.newClient();
JAX-RS 클라이언트 생성
[예제 6-6)에 정의한 프로바이더 등록
응답이 JSON을
반환한다고 지정
return client
.register (ClientJacksonProvider.class)
.target(this.categoryUrl)
request(MediaType . APPLICATION_JSON)
.get(Category.class);
클라이언트의 target을
Category/Resource URIL로 설정
HTTP GET 요청을 보내고
응답 본문을 Category로 변환

```

앞에서 본 두 가지 순수 자바 클라이언트 라이브러리를 사용한 경우와 비교하면 외부 마이크로서비스를 호출하는 부분의 코드가 훨씬 간결하고 응집도가 높아졌음을 알 수 있다. 더 간결하고 응집도가 높아졌다는 것이 중요할까? 요청을 보내고 응답을 추리하는 것이 동작한다는 측면에서만 본다면 전혀 그렇지 않다. 하지만 잘 동작한다는 것은 개발자가 기존 코드를 이해하거나 새로운 코드를 쉽게 작성할 수 있다는 부분에 비해 덜 중요하다. 이에 대한 판단은 여러분의 몫이지만 나라면 지금까지 살펴본 어떤 것보다 방금 본 예제를 더 선호할 것이다. JAX-RS 클라이언트 라이브러리가 비동기를 활용하는 경우에도 가독성이 더 좋아질까? 다음 코드를 살펴보자.

```
예제 6-8 JAX-RS 클라이언트와 Suspended를 사용하는 DisplayResource
@GET
@Path("/async")
@Produces (MediaType. APPLICATION_JSON) )
public void getCategory TreeAsync(@Suspended final AsyncResponse
- asyncResponse) throws Exception {
executorservice().execute(() -> {
Client client = ClientBuilder.newClient();
try {
Category category = client, target(this.categoryUrl)
.register(ClientJacksonProvider.class)
.request(MediaType.APPLICATION_JSON)
.get(Category.class);
예외만 돌려보내는 대신 오류 메시지를
포함하는 응답을 만들어서 반환
asyncResponse resume (category);
} catch (Exception e) {
asyncResponse resume (Response
.serverError()
.entity(e.getMessage())
.build());
}
});
}
```


다른 비동기 예제와 마찬가지로 @Suspended와 AsyncResponse를 지정한다. 또 ManagedExecutorService를 사용해 호출을 처리할 스레드를 새로 만들고 결과를 asyncResponse.resume()를 통해 설정한다. 다른 구현으로는 JAX-RS 클라이언트 라이브러리가 제공하는 비동기 기능을 활용하는 방법이 있다.


```


예제 6-9 JAX-RS 클라이언트와 InvocationCallback를 활용하는 DisplayResource
@GET
@Path("/asyncAlt")
@Produces (MediaType.APPLICATION_JSON)
▶ asyncResponse) {
비동기적 호출을
사용한다는 표시
public void getCategoryTreeAsyncalt(@Suspended final AsyncResponse
Client client = ClientBuilder.newClient();
WebTarget target = client. target(this.categoryUrl) )
register(ClientJacksonProvider.class);
target.request(MediaType . APPLICATION_JSON)
.async()
.get(new InvocationCallback<Category>() {
@Override
public void completed(Category result) {
asyncResponse.resume(result);
}
@Override
public void failed (Throwable throwable) {
throwable.printStackTrace();
asyncResponse. resume(Response
..serverError()
.entity(throwable.getMessage())
.build());
완료외 오류를 처리하는
메서드 구현을 포함하는
Invocation Callback
인스턴스를 넘김
});
}
```
이 두 번째 비동기 버전은 첫 번째 버전과 새로운 스레드에서 실행되는 코드는 다르지만 결과는 같다. getCategoryTreeAsync()에서 RESTful 종단점 코드를 새로운 스레드에 전달해서, HTTP 요청 스레드가 블록되지 않고 마치 요청이 즉시 처리될 때처럼 빠르게 실행되도록 만든다. getCategoryTreeAsyncAlt()는 외부 마이크로서비스에 대한 HTTP 요청을 새로운 스레드에서 실행한다는 점만 다르다. HTTP 요청을 설정하기 위해 사용한 모든 코드는 클라이언트 요청과 같은 스레드에서 처리된다. getCategoryTreeAsyncAlt()는 클라이언트가 만든 HTTP 요청 스레드를 최대한 오래 사용한다. 따라서 각 클라이언트가 필요보다 더 길게 스레드상에서 블록되기 때문에 RESTful 종단점의 스루풋이 감소한다. 스루풋에 미치는 이런 영향이 아주 적기는 하지만 요청 수가 많아지면 그 영향이 눈에 띄게 된다.  
  
그렇다면 스루풋에 악영향을 끼치는 열등한 방식을 여기서 설명하는 이유는 무엇일까? 첫째,같은 목표를 달성하는 방법이 다양하다는 사실을 보여주기 위한 것이다. 둘째, 대부분의 마이크로서비스는 동시에 들어오는 요청이 많지 않기 때문에 이런 성능상 영향이 눈에 띄는 경우가 흔치 않다. 그런 경우라면 개발자가 콜백을 더 선호할 수도 있다. 선택이 성능에 큰 영향을 끼치지 못한다면 콜백을 선택하는 것도 충분히 타당한 선택이라 할 수 있다.
JAX-RS 클라이언트 라이브러리를 사용하기로 하면 외부 마이크로서비스 호출 코드가 단순해지고 이해하기 쉬워진다. 이로 인해 저수준 라이브러리에 비해 JAX-RS 클라이언트 라이브러리가 더 개발에 사용하기 쾌적하다. 하지만 라이브러리를 사용하는 방법에 있어 유연성이 줄어든다는 대가를 치뤄야 한다.  
어떤 부분에서 유연성이 줄어들까? 대부분의 경우 JAX-RS 클라이언트 라이브러리가 유연성에 끼치는 영향이 없겠지만, 바이너리를 프로토콜을 사용하는 마이크로서비스를 호출하기가더 어려워진다. 프로토콜에 따라서는 적절한 바이너리 변환을 원하기 위한 커스텀 핸들러와 프로바이더를 정의해야 하며, 그런 기능을 제공하는 서드파티'hird pulity 라이브러리를 추가로 사용해야 한다. /chapter6/jaxrs-client 디렉터리로 가서 다음을 실행하라.  

```
mvn thorntail:run
```
이제 브라우저에서 http://localhost:8080/sync와 http://localhost:8080/async 로 이 마이크로서비스를 사용할 수 있다. 앞에서 본 예제와 마찬가지로, 관리 마이크로서비스에 들어있는 현재 카테고리 목록을 트리로 불 수 있다.


6.2.2 레스트이지 클라이언트
레스트이지 RESTEasy'는 와일드플라이 내부나 외부에서 사용할 수 있는 JAX-RS 명세 구현이다. 레스트이지의 클라이언트 라이브러리는 JAX-RS 클라이언트 API가 제공하는 기능과 거의 비슷하지만 일부 언급할 만한 가치가 있는 특징이 있다. 이 JAX-RS 클라이언트 라이브러리를 사용하면 URL 경로, 파라미터, 반환 타입, 미디어 타입 등 종단점에 대한 그림을 그려가는 메서드들을 연쇄 호출(haining해서 호출할 RESTful 종단점을 지정할 수 있다. 이런 방식이 잘못된 것은 아니지만, 기존의 JAX-RS를 사용하는 RESTful 종단점 생성 방식에 익숙한 개발자들에게는 자연스러워 보이지 않는다. 레스트이지를 사용하면 여러분이 통신하고 싶은 RESTful 종단점을 인터페이스로 재생성하고, 그 인터페이스에 대한 프락시Pros를 자동으로 생성할 수 있다. 이 과정을 통해 외부 마이크로서비스의 인터페이스가 마치 여러분 자신의 코드베이스 내부에 있는 것처럼 사용할 수 있다. 외부 CategoryResource 마이크로서비스에 대해 다음과 같은 인터페이스를 만들 수 있다.

```
예제 6-10 CategoryService
@Path("/admin/categorytree")
public interface CategoryService {
@GET
@Produces (MediaType . APPLICATION_JSON)
Category getCategoryTree();

```

이 코드는 전혀 특별하지 않고 일반적인 다른 JAX-RS 종단점 클래스와 같아 보인다. 다만 클래스가 아니라 인터페이스이며 메서드 구현이 없다는 점이 다르다. 이 방식의 다른 장점으로는 인터페이스 안에 마이크로서비스에 필요한 메서드의 시그니처만을 정의하면 된다는 점을 들 수 있다. 예를 들어 외부 마이크로서비스에 다섯 가지 종단점이 있고 여러분은 그중 하나만 사용하고 싶다면, 여러분이 정의할 인터페이스에는 메서드가 하나만 있으면 된다. 외부 마이크로서비스를 모두 다 정의할 필요가 없다. 이런 방식이 더 나은 것은 당연하다. 이렇게 하면 여러분이 소비하고 싶은 외부 마이크로서비
스의 정의에만 초점을 맞출 수 있다. 외부 마이크로서비스에서 사용하지 않는 부분이 변경된다고 해도 그 종단점을 사용하지 않는 여러분의 코드는 변경할 필요가 없다.

-- NOTE 이런 접근 방법을 택하면 같은 인터페이스를 서비스와 클라이언트가 공유할 수 있다. 그런 경우 서비스가 인터페이스에 대한 구현을 실제 종단점 코드에 제공할 것이다.  

-- WARNING. 이런 접근 방법은 정상적으로 작동하기는 하지만 마이크로서비스 실무에서 권장하지는 않는다. 왜냐하면 이렇게 분리한 인터페이스가 생산자와 소비자 양쪽의 마이크로서비스가 의존하는 별도의 라이브러리여야 하는데, 그런 경우 릴리스 타이밍이나 순서가 문제될 수 있기 때문이다. 이런 경로를 택하면 위험하며 엔터프라이즈 마이크로서비스 시스템에서 지속적으로 고통을 유발하게 될 것이다. 따라서 호출해야 하는 메서드를 중복해 정의하는 편이 더 낫다.  

외부 마이크로서비스로 매핑하는 인터페이스를 정의했다. 이제 그 인터페이스를 어떻게 사용할 수 있을까?


```
예제 6-11 레스트이지를 사용하는 DisplayResource
요청에 대한
대상 URL
기반 경로 설정
@GET
@Path("/sync")
@Produces (MediaType. APPLICATION_JSON)
레스트이지로 클라이언트를 생성
public Category getCategory TreeSync() {
ResteasyClient client = new ResteasyClientBuilder().build();
ResteasyWebTarget target = client.target(this.categoryUrl)
..register(ClientJacksonProvider.class);
CategoryService categoryService = target.proxy(CategoryService.class);
return categoryService.getCategory Tree();
}
Category Service
프락시를 통해 CategoryService 호출
프락시 구현 생성
```

이 방식을 사용하면 URL 경로, 미디어 타입, 반환 타입을 설정하는 부분이 모두 CategoryService 인터페이스로 넘어간다. 이제 여러분의 클라이언트 코드는 마치 로컬 메서드 호출체럼 프락시와 상호작용한다. 공통 요청 파라미터 값을 한곳에 모아둠으로써 코드를 더 단순화할 수 있었다. 하나의 마이크로서비스 안에 있는 여러 다른 RESTful 종단점들이 동일한 외부 마이크로서비스를 호출해야 하는 경우 이런 방식이 특히 중요하다. 그런 경우, 똑같은 외부 마이크로서비스 호출 정보를 여러 번 반복하고 싶지는 않을 것이다. 이제 이 프락시 인터페이스를 사용하는 비동기 예제를 살펴보자.

```

예제 6-12 @Suspended와 레스트이지를 사용하는 DisplayResource
@GET
@Path("/async")
@Produces (MediaType.APPLICATION_JSON)
162 2부 엔터프라이즈 자바 마이크로서비스 구현



public void getCategory TreeAsync(@Suspended final AsyncResponse
asyncResponse) throws Exception {
executor Service().execute(() -> {
ResteasyClient client = new ResteasyClientBuilder().build();;
try { 

ResteasyWebTarget target = client, target(this.categoryUrl)
.register(ClientJacksonProvider.class);
);
Category Service categoryService =
target.proxy (CategoryService.class);
Category category = categoryService.getCategoryTree();
asyncResponse.resume(category);
} catch (Exception e) {
asyncResponse resume (Response
.serverError()
.entity(e.getMessage())
.build());
}
});
}
```

동기적인 RESTful 호출 코드를 비동기 코드로 바꾸기 위해서는 단지 JAX-RS Suspended와AsyncResponse의 요구 사항에 맞춰서 별도 스레드에서 실행할 클라이언트 코드를 실행기 서비스에 제출하고 성공이나 실패를 asyncResponse.resume()에 설정하면 된다. 레스트이지 클라이언트 라이브러리를 통해 프락시를 사용하는 방식의 한 가지 단점은 외부 마이크로서비스 호출이 끝났을 때 레스트이지가 콜백을 호출하지 않는다는 점이다. 따라서 레스
트이지를 사용해 getCategoryTreeAsyncAlt()를 작성한다고 해도 JAX-RS 클라이언트 라이브러리를 사용했을 때와 같은 코드를 쓸 수밖에 없다.
/chapter6/resteasy-client 디렉터리로 들어가 다음을 실행하자.  

```
mvn thorntail:run
```
이제 브라우저에서 http://localhost:8080/sync와 http://localhost:8080/async로 이 마이크로서비스를 사용할 수 있다. 각 URL은 관리 마이크로서비스에 들어있는 현재 카테고리 목록을 트리로 보여줄 것이다.  

지금까지 RESTful 종단점과 상호작용할 때 더 높은 수준의 추상화를 제공하는 클라이언트 라이브러리를 몇 가지 살펴봤다. 각 예제들은 그런 라이브러리를 활용하면 클라이언트 코드의 복잡도가 줄어들고 더 읽기 쉬워진다는 사실을 보여준다.

## 6.3 요약
 - java.net이나 아파치 HttpClient와 같은 자바 기반 클라이언트 라이브러리들은 자바에서 저수준의 네트워킹 기능을 제공하지만, 코드가 불필요하게 번잡스러워진다.
 -  JAX-RS 기반 클라이언트 라이브러리를 사용하면 라이브러리들이 제공하는 추상화를 통해 마이크로서비스를 더 쉽게 사용할 수 있다.



## 챕터7 - 소비할 마이크로서비스 발견하기
이 장의 주요 내용  
• 서비스 발견이 중요한 이유  
• 클라이언트가 찾을 수 있게 마이크로서비스를 등록하는 방법  
· 손테일이 지원하는 서비스 레지스트리 종류  
• 클라이언트가 마이크로서비스를 찾아내는 방법  

카얌베 모노리스를 여러 마이크로서비스로 분해하는 과정에서 주문 지불을 처리하기 위한 서비스가 필요하다는 결정을 내렸다. 10장에 있는 카얌베 모노리스에는 이 새로운 마이크로서비스를 사용하게 될 것이다. 수십 가지 지불 서비스 업체가 지불 처리 서비스를 제공한다. 처음에는 스트라이프Strip (https://stripe.com/docs/quickstart)와 기본적인 통합을 개발할 것이다. 향후 지불 공급자를 확장하기 쉽게 만들기 위해 별도의 마이크로서비스로 스트라이프와 통합한다. 새로운 지불 마이크로서비스는 스트라이프 마이크로서비스를 사용해 스트라이프 온라인 서비스와 지불을 처리하고 지불 기록을 남길 것이다. 지금까지는 마이크로서비스가 실행중인 URL을 통해 직접 다른 마이크로서비스에 연결해왔다.  

이번 장에서는 클라이언트와 그 클라이언트가 소비하는 마이크로서비스 사이의 연결을 끊음으로써 마이크로서비스 호출을 한 단계 더 확장하기 쉽게 만들 것이다. 자신만 사용할 마이크로서비스를 만드는 것이 아니라면 프로덕션 환경에서 마이크로서비스 인스턴스의 개수를 늘리거나 줄여야 하는 경우가 생긴다는 점을 확실히 말할 수 있다. 규모 변화에 대응할 수 있는 능력이 없으면 애플리케이션이 사용자에 의해 늘어나는 부하를 다룰 때 항상 문제가 생기기 마련이다.

## 7.1 왜 마이크로서비스를 발견할 수 있어야 하는가?
6장에서 사용한 마이크로서비스 연결 방식을 택하면 새로운 지불 마이크로서비스는 [그림7-1]처럼 하드 코딩된 URL을 통해 스트라이프에 접속해야 한다.  

그림 7-1 직접 마이크로서비스 찾기
![112](https://user-images.githubusercontent.com/12209348/115136179-02890600-a059-11eb-9965-b0994dffcb35.png)  



이런 접근 방식은 마이크로서비스가 제대로 작동하는지 로컬에서 테스트할 때는 전혀 문제없다. 하지만 여러분은 프로덕션 환경에서 마이크로서비스를 하드 코딩한 문자열을 통해 접근하기를 바라지 않을 것이다. 운용 중에 어떤 마이크로서비스 인스턴스 환경에서 다른 환경으로 이전해야 하는 악몽 같은 경우가 생길 때, 그 마이크로서비스를 사용하는 클라이언트들을 새로운 마이크로서비스 URL로 모두 다시 빌드해야 한다. 이는 제시간에 서비스를 제공할 수 없게만든다. 게다가 이런 식으로 처리하는 것은 애플리케이션 규모 확장을 수월하게 하기 위해 요청을 처리할 수 있는 마이크로서비스 인스턴스가 둘 이상 있을 경우를 잘 다루지 못한다. 하드 코딩한 URL에 의존한다면 지불 마이크로서비스가 요청을 보낼 수 있는 스트라이프 인스턴스의 목록을 유지하고, 그 목록이 계속 늘어나야 하는 경우 [그림 7-2]와 같이 처리할 것이다.

그림 7-2 여러 인스턴스가 있는 마이크로서비스 직접 검색
![113](https://user-images.githubusercontent.com/12209348/115136176-0157d900-a059-11eb-8328-b21e069f3d20.png)  



이 아키텍처는 클라이언트인 지불 서비스가 자체적으로 스트라이프 인스턴스에 대해 부하를 시키는 코드를 갖고 있도록 요구한다. 클라이언트가 어떤 마이크로서비스를 소비할지 결정하는 책임을 지는 경우 이를 클라이언트측 부하 균일화ritent-side load balanting라고 한다. 클라이언트 측 부하 균일화를 사용할 때는 클라이언트가 어떤 인스턴스를 소비할지 결정한다. 여러분이 소비해야 하는 마이크로서비스에 대한 부화 균일화 기법을 개발하려면 귀중한 개발 시간을 사용해야 한다. 이상적으로는 부하 균일화라는 복잡한 작업을 여러분 대신 직접 처리해줄 수 있는 프레임워크나 라이브러리를 사용하고, 여러분의 마이크로서비스 코드는 한 인스턴스에만 요청을 보내길 원할 것이다. 이 상황에서 여러분의 고통을 덜 수 있는 방법은 무엇일까? 서비스 발견을 살펴보자.

## 7.1.1 서비스 발견은 무엇인가?
서비스 발견ervice discovery'은 실행 시점에 한 마이크로서비스가 소비할 것을 목적으로 다른 마이크로서비스의 물리적 위치를 얻을 수 있는 수단을 뜻한다. 서비스 발견을 제공하려면 서비스 레지스트리 Service registry를 사용해야 한다. 레지스트리가 없으면 서비스 발견 과정에서 URL을
가져올 장소가 없을 것이다. 서비스 발견을 추가하면 다른 서비스를 소비하는 마이크로서비스의 동작 방식이 어떻게 바뀔까? [그림 7-3]을 보면 지불 마이크로서비스가 서비스 레지스트리를 통해 스트라이프 마이크로서비스를 발견하고 그 서비스를 호출한다.

1 지불 마이크로서비스는 알려진 서비스 레지스트리에게 스트라이프 마이크로서비스의 위치를 요청한다.  
2 서비스 레지스트리는 현재 사용 가능한 모든 스트라이프 인스턴스를 반환한다.  
3 지불 마이크로서비스는 서비스 레지스트리에서 얻은 스트라이프 마이크로서비스 인스턴스에게 요청한다.  
4 지불 마이크로서비스는 스트라이프 마이크로서비스가 돌려주는 응답을 받는다.  
 
이 과정은 아주 단순해 보인다. 하지만 서비스 발견이 어떻게 작동할까? 먼저, 여러분에게 필요한 마이크로서비스를 찾기 위해 살펴야 하는 정해진 장소가 있어야 한다. 서비스 레지스트리가 그런 장소 역할을 한다.  
필요한 마이크로서비스를 찾아볼 수 있는 장소가 생겼더라도 그 장소에 아무 내용이 없다면 의미가 없다. 마이크로서비스 인스턴스들은 시작할 때마다 그 서비스 레지스트리에 연결해 자신의 이름과 자신에게 접근할 수 있는 URL을 제공해야 한다. 이름은 유일하지 않아도 되지만 같은 이름으로 레지스트리에 등록한 모든 마이크로서비스 인스턴스들은 동일한 API를 노출시켜야 한다. 그렇지 않으면 이런 마이크로서비스를 사용하는 클라이언트가 그때그때 다른 예상하지 못한 결과를 보게 될 것이다.  
서비스 레지스트리에 필요한 데이터가 모이면 클라이언트 마이크로서비스는 서비스 레지스트리에 연결해 자신이 원하는 서비스 이름에 대한 모든 인스턴스 위치를 요청할 수 있다. 이 시점에서 응답으로 돌려받은 마이크로서비스 인스턴스 중 어떤 것을 사용할지 결정하는 방법은 전적으로 클라이언트에 달렸다.  
여러분이 프레임워크를 사용하거나 인스턴스가 하나밖에 없는 마이크로서비스를 소비하는 경우가 아니라면 몇 가지 알고리즘 중 하나를 선택해 구체적인 위치를 결정할 수 있다. 알고리즘으로는 순서대로 각 위치를 한 번씩 사용하는 라운드 로빈round robin 방식처럼 단순한 것도 있고, 현재의 부하나 응답 시간을 감안하는 복잡한 알고리즘을 사용할 수도 있다.  

앞에서 설명했던 것처럼 마이크로서비스가 직접 커스텀 부하 균일화 알고리즘을 만들지 않아야 한다. 마이크로서비스가 기본적인 라운드 로빈 방식보다 더 복잡한 어떤 알고리즘을 사용하거나 몇 가지 알고리즘 중에서 하나를 임의로 고르고 싶다면, 그런 알고리즘을 제공하는 라이브러리를 마이크로서비스에 포함시킬 것을 고려해야 한다. 마이크로서비스가 내부적으로 간단한 부하 균일화 알고리즘을 사용할 때나 부하 균일화 알고리즘을 제공하는 라이브러리를 사용할 때 서비스 발견을 통해 얻은 인스턴스 URL을 얼마나 오랫동안 유지해야 할지 결정해야 한다. 이상적인 경우라면 인스턴스 URL을 굳이 보관하지 않고 마이크로서비스 인스턴스들이 자유롭게 자신을 레지스트리에 등록하고 해제하도록 허용하더라도 클라이언트 성능에 영향이 없을 것이다. 이런 방식으로 서비스를 시작할 수 있다면 여러분은 더 좋은 환경을 누리고 있는 중이라 할 수 있다.
하지만 실시간으로 매번 서비스 발견을 사용하기에 적합하지 않은 환경이더라도 마이크로서비스가 물리적 URL을 10~15초 이상 다루지 않는 게 좋다. 10여 초라는 시간이 길게 느껴지지 않겠지만 잘 작동하던 마이크로서비스 인스턴스들도 쉽게 오류를 내곤 한다. URL을 캐시에 저장하는 경우 지불해야 하는 대가로 코드는 재시도하거나 서비스 발견을 통해 새로운 인스턴스를 찾는 방식으로 네트워크 오류나 마이크로서비스의 오류를 제대로 처리하기 위해 더 신경 써야 한다.


## 7.1.2 서비스 발견과 레지스트리의 이점은?
마이크로서비스 환경에서 서비스 레지스트리라는 추가 인프라를 구축하고 관리해야 하는 이유는 무엇일까? 프로퍼티 파일 등을 사용해 마이크로서비스가 소비할 URL을 외부화시킬 수는 없을까? 물론 과거에는 대부분 그런 방식을 통해 외부 서비스와 애플리케이션을 통합했다. 이런 기법은테스트 환경에서 프로덕션 환경으로 이전할 때 외부 서비스 URL을 쉽게 바꿀 수 있는 수단을 제공한다. 하지만 이런 접근 방법은 애플리케이션이나 마이크로서비스의 규모 확장이나 축소를 모두 어렵게 한다. 클라우드 전개로 중심이 이동하면서 가장 큰 변화 중 하나는 각 환경을 사용하는 비용이 기업에 부과되는 방식에 있다.

과거에 기업은 내부 인프라를 사용해 모든 공개 애플리케이션과 비공개 애플리케이션을 호스팅했다. 내부 인프라를 사용할 때 주요 비용은 초기 설정 비용이다. 초기 설정이 끝나면 투입해야 하는 하드웨어 비용은 최소화된다. 다만, 내부 인프라를 관리하는 데 드는 운영 비용은 커진다. 대부분의 기업이 클라우드로 마이그레이션한다는 것은 애플리케이션을 자체 인프라에서 호스팅하지 않고 외부의 호스팅 업체를 통해 전개한다는 뜻이다(이런 업체로는 레드햇 오픈시프트, 구글 클라우드, 아마존 웹 서비스 등이 있다). 이 업체들은 대규모로 하드웨어 설치에 투자하는 비용을 정기적인 인프라 사용료로 바꿔준다. 보통은 매월 사용료를 정산한다. 이런 비용 메커니즘 변화는 애플리케이션 사용이 적을 때 규모를 줄임으로써 비용을 절감할 수 있는 가능성을 열었다.  
규모 변경이 가능한 환경의 또 다른 장점으로는 부하가 늘어나는 경우에도 오랜 시간이 걸리는 하드웨어 공급 과정을 거치지 않고 바로 규모 확장이 가능하다는 점이다. 이는 특히 연말에 부하가 아주 커지는 기업에게 득이 된다. 11월이나 12월은 대부분의 소매상에게 대목인데, 기업들이 그런 대목 기간의 최대 부하에 맞춰 서버를 구비하면 나머지 10개월 동안은 비싼 하드웨어를 그냥 놀려야 한다.  

클라우드 환경에서 서비스를 운영할 때 특정 마이크로서비스나 여러 마이크로서비스로 이루어진 그룹의 규모를 빠르고 쉽게 줄이거나 늘릴 수 있는 능력은 기업 개발자들에게 큰 장점이다. 과거에는 하드웨어 공급에 필요한 시간(몇 개월이 걸리는 경우도 많다)을 확보하기 위해 개발자들이 미래에 늘어날 수요를 미리 예측해야 했지만 이제는 더 이상 그럴 필요가 없다. 클라우드에 전개하는 기업 개발자들은 새로운 인스턴스를 하나 이상 원하는 대로 몇 분 안에 실행해서 사용자 부하를 처리할 수 있다.  
애플리케이션의 규모 확장 가능성은 그 애플리케이션의 각 컴포넌트들이 얼마나 느슨하게 서로 결합되어 있는가와 밀접한 관련이 있다. 앞에서 설명했던 것처럼 애플리케이션이 사용해야하는 URL을 외부 레지스트리에 저장하면 URL을 프로퍼티 파일에 저장할 때와 비교할 때, 컴포넌트 사이의 결합이 현저히 줄어든다. 외부 서비스에서 오류가 발생했을 때 이를 어떻게 빨리 대체하느냐(페일오버itlover)도 모든 분산 아키텍처의 주 관심사 중 하나다. 서비스 레지스트리를 통해 느슨한 결합을 유지하면서 마이크로서비스를 하나 이상의 인스턴스로 확장해 사용한다면, 전체 애플리케이션을 멈추지 않고도 문제가 생긴 마이크로서비스를 빠르게 페일오버할 수 있다. 서비스 레지스트리와 서비스 발견을 함께 사용하면 페일오버를 부드럽게 처리할 수 있는 길이 열린다. 하지만 페일오버만 있다면 완벽한 해법이라 할 수 없다. 여러분에게는 내고장성 tolerance을 제공할 때 도움이 되는 프레임워크나 라이브러리도 필요하다. 직접 내고장성 관련 코드를 작성하고 싶지는 않을 테니 말이다 (8장에서는 마이크로서비스에 내고장성을 포함시키는 방법을 살펴본다).  

다음은 [그림 7-3]과 같이 지불 마이크로서비스가 서비스 레지스트리에서 스트라이프 마이크로서비스를 찾아서 호출하는 경우 어떤 단계를 거치는지 보여준다. 추가로 [그림 7-4]도 함께보자.  

1 지불 마이크로서비스는 알려진 서비스 레지스트리에게 스트라이프 마이크로서비스의 위치를 요청한다.  
2 서비스 레지스트리는 현재 사용 가능한 모든 스트라이프 인스턴스를 반환한다.  
3 지불 마이크로서비스는 서비스 레지스트리에서 얻은 스트라이프 마이크로서비스 인스턴스에게 요청을 보낸다.  
4 지불 마이크로서비스는 스트라이프 마이크로서비스가 돌려주는 응답을 받는다.  

[그림 7-3]에서 지불 마이크로서비스는 8082 포트에서 실행되는 스트라이프 인스턴스를 소비했다. 하지만 [그림 7-4]에서는 새 요청을 하는 시점에 8082 포트에 있던 스트라이프 인스턴스가 더 이상 정상적으로 작동하지 않음을 알 수 있다. 왜 그 인스턴스가 실패했는지 알 수 없지만 서비스 레지스트리에는 8082 포트에서 실행 중인 인스턴스가 더 이상 존재하지 않는다. 그래도 문제는 없다. 지불 마이크로서비스는 서비스 레지스트리에 접속해서 스트라이프의 인스턴스를 찾고, 현재 제대로 작동하는 두 가지 스트라이프 마이크로서비스 인스턴스 중에서 8083번 포트에서 실행 중인 인스턴스를 선택할 것이다. 이 과정은 멋있어 보인다. 여러분은 마이크로서비스 환경이 제공하는 규모 변경의 한계 내에서 원하는 대로 마이크로서비스의 규모를 확장하거나 축소할 수 있으며, 클라이언트가 인스턴스를 어떻게 찾을 수 있는지에 대해서는 고민하지 않아도 된다.  
스트라이프에 대한 메타 데이터를 지불 마이크로서비스에 제공하는 서비스 레지스트리가 없다면 지불 마이크로서비스는 페일오버나 마이그레이션이 발생할 때 문제가 생기지 않게 자신을 보호하거나 문제가 생긴 후 자신을 복구할 방법이 없을 것이다. 서비스 레지스트리는 단지 방금 문제가 생긴 인스턴스를 대체하는 새로운 정상 인스턴스를 돌려주는 것 이상으로 좋은 일을 한다. 서비스 레지스트리는 스트라이프 마이크로서비스가 실제 어디서 실행하고 있는지에 대한 정보를 필요한 시점까지 지불 마이크로서비스에게 숨김으로써 한 환경에서 다른 환경으로 마이크로서비스를 마이그레이션하는 것을 처리할 수 있다.  
여러분은 기존의 스트라이프 마이크로서비스와 완전히 다른 환경에서 쉽게 스트라이프 인스턴스를 새로 만들 수 있고, 여전히 그 새로운 인스턴스를 같은 레지스트리에서 제공할 수 있다.

그림 - 서비스 발견에서 문제가 생긴 마이크로서비스가 있는 경우
![캡처](https://user-images.githubusercontent.com/12209348/115136901-c73d0600-a05d-11eb-913f-ce7906458a7d.PNG)

마이그레이션 중이라면 새로운 인스턴스가 활성화된 후 이전 인스턴스를 종료하는 형태로 규모를 줄일 수 있다. 그렇게 해도 스트라이프를 소비해야 하는 지불 서비스에는 아무 영향이 없다.

## 7.1.3 상태가 있는 마이크로서비스와 상태가 없는 마이크로서비스
마이크로서비스의 규모를 원하는 대로 변경할 수 있다는 것은 분명 환상적인 일이다. 하지만 거기에도 문제가 있다. 지금까지 여러분은 별도 언급이 없이 상태가 없는 Stateless' 마이크로서비스를 다뤄왔다. 상태가 없는 마이크로서비스는 요청과 요청 사이에 자기 내부의 아무런 데이터도 유지하지 않는다.

여러분의 상태는 어떻게 되는 것일까? 마이크로서비스 개발은 상태가 없는 경우에 아주 많이 초점이 맞추어져 있다. 사용자의 상태에 신경을 쓰지 않고 마이크로서비스의 규모를 늘리거나 줄이려면 상태가 없는 것이 핵심이다.  
규모 확장을 지원하려면 상태가 있는 act) 마이크로서비스는 안 된다. 적어도 Java EE의 상태가 있는 세션 빈과 같은 방식으로 상태를 관리해서는 안 된다. 흔히 말하는 것처럼 마이크로 서비스가 반려동물이 아니라 가축과 같기를 바란다. 즉, 반려동물처럼 마이크로서비스가 소수 존재하고 그중 하나라도 사라지면 큰 문제인 것보다, 가축치럼 얼마나 많이 생기고 사라지든 크게 영향이 없는 게 좋다. 여러분은 이전 요청을 통해 마이크로서비스에서 받은 데이터를 계속 사용할 수도 있지만, 그 데이터를 계속 사용하기 위해서는 어딘가에 데이터를 저장해야만한다.  
지난 5년간 엔터프라이즈 자바에서는 더욱 상태가 없는 서비스로 바뀌는 움직임이 있었다. 하지만 마이크로서비스로 옮겨감에 따라 그런 경향은 이전보다 더 흔한 일이 됐다. 개발자와 아키텍트가 상태가 있는 서비스에서 상태가 없는 서비스로 사고방식을 바꾸는 것은 전혀 쉬운 일이 아니다. 그런 식으로 변경하려면 마이크로서비스에 상태가 숨지 못하도록 더 많이 생각하고, 개발을 진행하는 동안에도 계속해서 고민해야 한다.  
여러분의 서비스 중에 상태가 있는 서비스를 상태가 없는 여러 마이크로서비스로 나눌 만한 방법이 없거나, 상태가 없는 서비스로 바꾸기가 너무 위험하다면 마이크로서비스가 최선의 접근 방법이 아닐 수 있다. 그런 경우에는 전통적인 Java EE 애플리케이션 서버를 유지하면서 상태가 있는 서비스를 처리하고, 그 서비스를 작은 클러스터들을 사용해 규모를 확장하는 게 낫다.  

##7.1.4 넷플릭스 리본이란 무엇인가?  
앞에서 한 서비스의 여러 인스턴스에 대한 부하 균일화에 대해 이야기할 때 여러분 코드에 복잡한 부하 균일화 코드를 작성해 넣는 것이 왜 좋은 생각이 아닌지 설명했다. 그렇다면 랜덤이나 라운드 로빈이 아닌 부하 균일화를 클라이언트에 적용하고 싶으면 어떻게 해야 할까? 손테일은 전적으로 이런 목적으로 넷플릭스 리본Neulix kilbon을 통합할 수 있다. 넷플릭스 리본을 사용하면 여러분 자신이 균일화 알고리즘을 직접 구현하는 수고를 덜 수 있다. 리본은 넷플릭스에서 자체 서비스에 사용하기 위해 개발한 클라이언트 측 부하 균일화 프레임워크다.  

2013년 1월 넷플릭스가 내부 서비스 통신에 사용하고 있는 일련의 프로젝트를 오픈소스화할때 리본도 함께 오픈소스화했다. 리본의 주 용도는 RESTful 종단점을 호출하는 것이며, 그렇기 때문에 여러분이 엔터프라이즈 자바 마이크로서비스를 소비할 때 리본이 잘 들어맞는다. 이번 장의 뒷부분에서는 리본이 어떻게 서비스 레지스트리를 사용해 인스턴스를 불러올 수 있는지 살펴볼 것이다. 지금은 리본에 제공하는 부하 균일화 방식에 초점을 맞춰보자. 리본은 다음과 같은 방식들을 제공한다.  

 - 라운드 로빈 Round Robin  
서비스를 제공하는 모든 가용 서버들로부터 순차적으로 서버를 선택한다. 이때 각 서버에 실제로 얼마나 많은 부하가 걸려 있는지는 고려하지 않는다.
 - 가용성 필터링 Availability Filtening  
회로 차단ircut tripped상태인 서버를 건너뛴다. 3회 이상 연결에 실패했거나 동시 연결이 많은 서버들을 회로차단 상태로 간주한다.
 - 응답 시간 가중치Weighted Response Time  
각 서버에 평균 응답 시간에 따른 가중치를 부여하고, 그 가중치를 사용해 각 서버를 표현하는 난수 범위를 지정한다. 예를 들어 서버 A와 B의 가중치가 각각 5와 25라면, A에게 1-5, B에게 6~30의 범위를 부여할 수 있다. 1부터 모든 가중치의 합 사이의 난수를 만들고, 그 난수가 어떤 범위에 속하는가에 따라 어떤 서버에 접속할지 결정한다. 가중치가 더 높은 서버나 응답 시간이 더 짧은 서버가 선택될 가능성이 더 높다.
 - 구역을 감안한 라운드 로빈Zone Aware Round Robin  
특히 아마존 웹 서비스에 전개한 경우 유용하다. 아마존 웹 서비스에서는 서버가 가용성 구역에 따라 분산되어 있다. 이 균일화 규칙은 서버가 클라이언트와 같은 구역에 있는지와 사용 가능한지에 따라 요청을 처리할 서버를 선택한다.
 - 랜덤Random  
사용 가능한 서버 중에서 완전히 임의로 서버를 선택한다.  

기본 선택은 라운드 로빈이다. 마이크로서비스에서 성능이 아주 중요하다면, 응답 시간 가중치를 사용하는 것이 가장 좋은 부하 균일화 방식일 것이다. 부하 균일화 방식은 동작이 라운드 로빈과 비슷하지만 성능이 더 좋은 서버를 우선한다. 응답 시간 가중치 방식은 특히 서버 인스턴스 중 하나의 성능이 그 인스턴스의 마이크로서비스 환경을 재시작해야 할 정도로 나쁜 경우 유용하다. 재시작이 언제 일어날지 모르는 인스턴스에게 트래픽을 계속 보내고 싶은 사람은 없을 것이다.  

지금까지 우리가 리본에 대해 논의한 내용이 [그림 7-3]에서 어떤 부분에 들어가야 할지 분명하지 않을 수 있다. [그림 7-5)에서 리본이 다른 마이크로서비스인 스트라이프를 소비하는 마이크로서비스인 지불 서비스의 일부분임을 볼 수 있다. 그 후 리본은 서비스 레지스트리와의 상호작용을 담당해서 사용 가능한 서버 인스턴스 중 한 인스턴스를 선택하고, 마지막으로 그 인스턴스에게 요청을 전달한다. 리본은 서비스 레지스트리의 위치를 알아야 한다. 따라서 여러분은 서비스를 제공하는 사용 가능한 인스턴스 목록을 가져오는 작업을 담당하는 클래스를 지정할 필요가 있다. 어떤 클래스가 필요한지는 사용하려는 레지스트리에 따라 다르다. 예를 들어 com.netflix.niws.loadbalancer.DiscoveryEnabledNIWSServerList는 유레카Fureka가 자체 클라이언트 코드를 통해 제공하는 서비스 레지스트리에 접근할 때 사용해야 하는 클래스다. 유레카는 넷플릭스에서 개발한 서비스 레지스트리이지만 손테일은 유레카와의 통합을 제공하지 않는다.

 - WARNING_ 2017년 넷플릭스는 리본을 더 이상 유지보수하지 않는다고 공지했다. 리본의 깃허브(https://github.com/Netflix/ribbon)를 보면 어떤 부분을 넷플릭스에서 여전히 사용 중이고 어떤 부분을 사용하지 않는지 알 수 있다. 유지보수가 활발하지는 않지만 리본은 안정적이며 대부분의 프로덕션 용례에 사용할 수 있는 준비가 되어 있다. 손테일에서 마이크로서비스를 소비할 때 리본을 사용하기 때문에 손테일 개발팀은 장기적으로 리본을 대체할 만한 다른 대안이 있는지 열심히 찾아보는 중이다.  

넷플릭스 리본을 활용한 서비스 발견  
![2](https://user-images.githubusercontent.com/12209348/115137064-b9d44b80-a05e-11eb-8339-fb93b91cccb7.PNG)


## 7.2 손테일로 마이크로서비스 등록하기  
서비스 레지스트리를 사용하면 마이크로서비스가 소비해야 하는 대상의 URL과 마이크로서비스를 서로 분리함으로써 이득을 볼 수 있다는 사실을 살펴봤다. 지금까지는 이론이었다면 이제는 실제 서비스 등록과 발견이 동작하는 모습을 볼 때다. 여러분은 토폴로지'opolos 라고 알려져있는 손테일에서 사용할 수 있는 서비스 레지스트리 옵션을 살펴보고, 다른 서비스들이 발견할 수 있도록 마이크로서비스가 자신을 등록하는 방법을 살펴볼 것이다.  

### 7.2.1 손테일의 토폴로지  
손테일은 서비스 레지스트리에 대한 추상화를 제공하며 그 추상화는 토폴로지라고 알려져 있다. 이런 추상화에는 어떤 좋은 점이 있을까? 추상화를 통하면 다른 서비스 레지스트리 구현을 사용하는 환경으로 마이크로서비스를 이전해도 클라이언트 코드를 바꿀 필요가 없다. 쉽게 볼 수 있을 만한 예를 들면, 개발할 때는 로컬 환경에서 레지스트리를 사용하고, 테스트와 프로덕션 환경에서는 또 다른 레지스트리를 사용하는 경우를 들 수 있다. 이상적인 경우는 프로덕션 환경과 개발 환경에서 테스트에 사용하는 환경을 똑같이 만들고 실행할 수 있을 것이다. 하지만 오늘날 엔터프라이즈 환경에서 항상 그럴 수는 없다. 쿠버네티스나 오픈시프트와 같이 리눅스 컨테이너와 연동한 클라우드에 기반하는 인프라로 더 많이 이동하면서, 더 적은 자원을 사용해 환경을 복제하기가 쉬워졌지만 아직 모든 기업이 그런 수준에 도달하지는 못했다. 손테일이 제공하는 레지스트리 구현이나 토폴로지 타입에는 어떤 것이 있을까? 손테일은 다음과 같은 토폴로지를 제공한다.  

 - 제이그룹스 Groups  
제이그룹스는 서로 메시지를 주고받으려는 목적으로 만들어진 노드들로 이뤄진 클러스터상에서 신뢰성 있는 메시징을 제공하기 위한 툴킷이다. 손테일은 모든 마이크로서비스에 대해 클러스터를 생성함으로써 의사beauto 서비스 레지스트리를 만들 수 있고, 새로운 서비스를 사용할 수 있을 때마다 그 사실을 통지할 수 있다.  
 - 오픈시프트 OpenShift  
레드햇 오픈시프트는 컨테이너 관리에 쿠버네티스를 사용하는 컨테이너 플랫폼이다. 온라인 버전 오픈시프트를 사용하거나 로컬 환경에 직접 오픈시프트를 설치하거나, 미니시프트 내에서 오픈시프트를 사용할 수 있다.  
 - 콘술Consul  
콘술은 해시코프 andP가 개발한 유명한 서비스 발견 프레임워크다.  

어떻게 사용할 토폴로지를 결정할 수 있을까? 어떤 경우에는 마이크로서비스를 전개할 환경에 의해 토폴로지가 결정될 수도 있다. 예를 들어 레드햇 오픈시프트에 전개되는 서비스라면 오픈시프트 토폴로지를 사용하는 것이 논리적일 것이다. 제이그룹스 토폴로지는 랩톱에서 실행되는 로컬 환경이나 완전한 수준의 서비스 발견 구현이 설치되지 않은 CI 환경에 가장 잘 들어맞는다. 5장에서 본 것처럼 레드햇 오픈시프트에 전개하는 경우라면 미니시프트를 사용해 로컬 개발 환경을 프로덕션에 아주 가깝게 가져갈 수 있다. 이런 자연스러운 정합성을 넘어서는 경우 여러분의 선택은 서비스 발견에 대한 요구 사항이나 환경상 필요에 어떤 구현이 가장 잘 들어맞는지에 따라 달라진다. 각 개발팀이 원하는 대로 개발 스택을 선택할 수 있는 데브옵스'DevOps 문화가 존재하는 기업의 일원이 아니라면 이런 결정을 개발자가 할 수 있는 경우는 드물다.  

[그림 7-6]은 토폴로지가 [그림 7-3]에서 어떤 위치에 들어가는지를 콘술을 예로 보여준다.  



































1.마이크로 프로파일
2.컨테이너
3.@EJB
4.@Inject
5.서비스 레지스트리
6.@Produce
7.역직렬화
8.@Suspended
9.AsyncResponse
10.InvocationCallback
11.레스트이지, 와일드플라이,콜백
