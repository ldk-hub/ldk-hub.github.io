---
# 포스트제목
title: "이펙티브 자바 -  "
# 포스팅 작성자
author: ldk 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2021-05-14 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["백엔드","자바","람다식","스트림"]
categories: 포기하지마.
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---

JAVA 1.8이상부터 추가된 새로운기능에 대한 내용 및  JVM -  메모리최적화 관련 개발 시 발생하는 취약점 등 정리 예정 



1. lambda
2. stream
3. LocalDateTime
4. Optional (orElse, orElseGet)


tip.  list 기능 내 .sort 기능 jdk8부터 지원함.

람다식 경우 3줄이상 넘어가면 쓰는걸 지양, 직렬화 금지

```
map.merge(key,1, Integer::sum); <<--이러한 표현방식을 메서드 참조방식이라함.

map.merge(() -> action()); <<-- 이러한 표현방식을 람다식임.

//메서드 참조유형 이상적인 케이스
//정적표현 
Integer::ParseInt     <-> str -> Integer.ParseInt(int);
//한정적
Instant.now()::isAfter <-> Instant then =  Instant.now(); t-> then.isAfter(t)

```
메서드 참조는 간단명료하여 대안이된다.
메서드참조가 짧고 명확시 메서드 참조만쓰고 아닐시 람다식 쓰면된다.

람다는 메서드 참조유형과 표준함수형인터페이스가 핵심임.


스트림이란?
- 데이터원소의 유한 혹은 무한 시퀀스라보면된다.
- 스트림 파이프라인은 원소들로 수행하는 연산단계를 표한한 것이다.
- 기본타입으로는 int,double, long이 있음.



## 람다 표현식
함수형 프로그래밍 문법적 표현방식 기법 JDK 1.8 Ver 이상부터 사용할 수 있움 

### 기존 자바 문법 vs 람다식 문법 비교
```
//기존 자바문법
Runnable runable = new Runnable(){
	@Override
	public void run(){
		System.out.println("run 호출");
		
	}

}
runable.run();
```

```
//람다식 자바 문법
Runnalble runnable =() -> System.out.println("run 호출");
runnable.run();
```
6줄의 기존 자바 코드에서 람다식으로는 1줄로 바뀌게 되면서 동일한 기능을 구현할 수 있는 것이다.


```
//함수형 인터페이스라하며,1개의 추상 메소드를 갖고 있는 인터페이스를 뜻함. 1개이상 선언하면 안됨 오류남.
//이걸쓰는 이유는 자바에서의 람다식은 함수형 인터페이스로만 접근이가능하기 때문임.
@FunctionalInterface
```

### 람다식 기본구조 다양한 생략기법
1. 람다식 매개인자의 자료형은 생략가능
2. 람다식 매개인자가 한개인 경우 매개인자를 감싸는 소괄호 생략가능.
3. 람다식의 함수몸체에 실행문이 한개일 경우 함수 몸체를 감싸는 중괄호 생략가능
4. 람다식의 함수몸체에 실행문이 한개고, 그 실행문이 return문일 경우 함수몸체를 감싸는 중괄호와 return을 생략할수 있음.

```
(타입 매개변수) -> {실행문;};
//소괄호에는 구현한 함수의 인자, 중괄호는 구현할 함수 몸체

InterfaceA1 a1 = (int a) -> {System.out.println("a:"+a);};
//매개 인자 자료형 생략
InterfaceA1 a2 = (a) -> {System.out.println("a:"+a);};

InterfaceB1 b1 = (int a, int b) -> {System.out.println("a+b:"+(a+b));};
//매개인자 자료형 생략
InterfaceB1 b2 = (a, b) -> {System.out.println("a+b:"+(a+b));};

//매개인자가 하나뿐이라 소괄호 생략
InterfaceA1 a3 = a -> {System.out.println("a:"+a);};
//함수의 실행문이 한개라 중괄호를 생략
InterfaceA1 a4 = a -> System.out.println("a:"+a);

InterfaceA1 t3 = a -> {return "a:"+ String.valueOf(a);};
//함수의 실행문이 한개이며, 리턴문만 있을 경우 중괄호와 더불어 return문도 생략이 가능하다.
InterfaceA1 t4 = a -> "a:"+ String.valueOf(a);

//매개인자 없는 경우에는 빈 소괄호를 사용해야 한다.
InterfaceA1 a2 = () -> {System.out.println("인자가 없는 함수 구현");};

```

자주 쓰이는 인터페이스 종류
 - function<T>
 - Consumer<T>  어떤 타입의 파라미터로 받는다. 리턴은 없음.
 - Predicate<T>  어떤 타입의 파라미터로 받는 다. 리턴은 Boolean타입.
 - Supplier<T>    어떤 타입으로 리턴함. 파라미터는 없음.



```
//람다식은 Object 타입으로 형변환 불가함. 굳이 하려면 먼저 함수형 인터페이스로 변환해야함.
Object obj = (Object) (() -> {});//에러발생
Object obj = (Object) (MyFunction) (() -> {}) //사용가능;
Object obj = ( (Object)  (MyFunction) (() -> {}).toString(); //사용가능



//2개의 값을 비교해서  어떤 값이 더큰 값인지 구하는 compareTo라는 메소드를 가지고 
public interface Compare{
	public int compareTo(int value1, int value2);
}


public class CompareExam{
	//클래스 내부 선언 값
	public static void exec(Compara compara){
		int k=10; 
		int m=20;
		int value = compara.compareTo(k,m); //두 값을 비교하기위해  compareTo 함수에 돌려
		System.out.println(value);
		
	}
		
	public static void main(String[] args){
		exec ((i,j) -> { return i - j;});
	}
	
}
```
	
	
	
	

```
//람다의 장단점

/* 장점
 * 1. 코드를 간결하게 만들 수 있음.
 * 2. 코드가 간결하고 식에 개발자의 의도가 명확히 들어나게됨 가독성 향상
 * 3. 함수를 별도로 만들지 않고 한번에 처리
 * 4. 병렬프로그래밍 용이
 * 
 * 
 * 단점
 * 1. 람다를 사용하면서 만드는 무명함수 재사용 불가
 * 2. 디버깅이 어려움
 * 3. 남발시 코드가 지저분
 * 4. 재귀로 만들경우 부적합
 * */


//람다는 메소드를 하나의 식으로 표현한 것 
//익명메소드(함수) 생성 문법이라 보면된다. 메소드 자체로 혼자선언해서 쓸수 없으며, 무조건 Class 구성멤버로 선언해야됨.
```

### 예제 케이스

```
//인터페이스 내 1개의 메서드 정의했다는 어노테이션 선언 람다식 쓸수있는시작
@FunctionalInterface
public interface MyFunction2 {

	void myMethod();
}


public class FunctionLambda2 {

	public static void main(String[] args) {
		
		//기존 자바문법 -> 람다식문법 비교
		//MyFunction f = (MyFunction2) (() -> {});와 동일. 
		MyFunction2 f = ()->{};
		
		//Object obj = (Object) (MyFunction2) (() ->{});와 동일 (Object) 생략
		Object obj = (MyFunction2) (() -> {});
		
		//String str = ((Object) (MyFunction2) (() -> {})).toString();
		String str = ((MyFunction2) (()->{})).toString();
		
		System.out.println(f);
		System.out.println(obj);
		System.out.println(str);
		
		//에러케이스. 람다식은 Object 타입으로 형변환 안됨
		//System.out.println(() -> {});
		
		//OK케이스
		System.out.println((MyFunction2) (()->{}));
		
		//에러케이스
		//System.out.println((MyFunction2) (()->{}).toString());
		
		//OK케이스
		System.out.println(((MyFunction2) (()->{})).toString());
	}
}
```

## 스트림 api
스트림이란? - 데이터 처리 연산을 지원하도록 소스에서 추출된 연속된 요소
데이터 컬렉션 반복을 멋지게 처리하는 기능, 스트림 사용 시 멀티스레드 코드를 구현하지 않아도 데이터를 투명하게 병렬처리할 수 있음.


tip : Collection(컬렉션) 자바에서 '목록성 데이터를 처리하는 자료구조'를 통칭한다
Collection 객체는 여러 원소들을 담을 수 있는 자료구조를 뜻한다
배열이 가장 기본적인 자료구조이며, DTO 또한 자료를 담는 하나의 방식이라고 볼 수 있다.
자바에서의 자료구조 유형은 다음과 같다.
- 순서가 있는 목록인 List형
- 순서가 중요하지 않은 목록인 Set형
- 먼저 들어온 것이 먼저 나가는 Queue형
- KEY-VALUE의 형태로 저장되는 Map형

스트림 api 요약
1. 선언형:간결하고 가독성이 좋아짐.
2. 조립할수있음: 유연성이 좋아짐.
3. 병렬화: 성능이 좋아짐.

	
스트림 API 특징
스트림은 외부 반복을 통해 작업하는 컬렉션과는 다르게 내부 반복을 통해 작업을 수행합니다.
스트림은 단 한번만 사용할 수 있습니다. (= 재사용이 불가능합니다.)
스트림은 원본 데이터를 변경하지 않습니다.
스트림의 연산은 필터-맵(filter-map) 기반의 API를 사용하여 lazy 연산을 통해 성능을 최적화합니다.
스트림은 parallelStream() 메소드를 통해 간단한 병렬처리를 지원합니다.

연속된 요소
filter, sorted, map 표현 계산식이 주를 이룸. 컬렉션의 주제는 데이터이며, 스트림의 주제는 계산이다.

소스
컬렉션, 배열, I/O자원 등의 데이터 제공 소스로부터 데이터를 소비한다. 정렬된 컬렉션으로 스트림을 생성하면 정렬이 그대로 유지됨.

	
```
// 정수형 배열에서 스트림 생성
Integer[] arr1 = new Integer[] {1, 5, 11, 13, 20, 52};
Stream stream1 = Arrays.stream(arr1);
stream1.map(i -> i * 2);
stream1.filter(i -> i % 2 == 0);			// 재사용이 불가능하기 때문에 에러 발생!
 
 
// 정수형 배열에서 스트림 생성
Integer[] arr2 = new Integer[] {1, 5, 11, 13, 20, 52};
Stream stream2;
stream2 = Arrays.stream(arr2)
                .filter(i -> i % 2 != 0)	// {1, 5, 11, 13}
                .map(i -> i * 2);			// {2, 10, 22, 26}
```
	

	
	
	
	
## java.time 패키지
	
	
```
LocalDate today = LocalDate.now();
System.out.println("올해는" + today.getYear() + "년입니다.");
 
LocalDate otherDay = today.withYear(1982);
System.out.println("올해는" + otherDay.getYear() + "년입니다.");
	
```
	
## 자바 8버전 날짜 및 시간 정보  
```
@RestController
public class TestController {
	
	private static final String TIME_SERVER = "pool.ntp.org";
	
	
	@GetMapping("/t") //자바 8버전 날짜 데이터 가공처리 테스트 코드 
	public String testTime() {
		
		NTPUDPClient timeClient = new NTPUDPClient();
		timeClient.setDefaultTimeout(1000);
		
		try {
			timeClient.open();
			InetAddress address = InetAddress.getByName(TIME_SERVER);
			TimeInfo timeInfo = timeClient.getTime(address);
			long returnTime = timeInfo.getMessage().getTransmitTimeStamp().getTime(); //서버의 시간을 가져옴
			Date date = new Date(returnTime);
			LocalDateTime localDateTime = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
			System.out.println("TimeServer:"+localDateTime); //Naver 시계와 동일
			System.out.println("Local PC : "+ LocalDateTime.now());
			
			LocalTime startTime = LocalTime.now();
			LocalTime entTime = LocalTime.of(20, 16, 59);
			Duration duration = Duration.between(startTime, entTime);
			System.out.println(duration.getSeconds());
			System.out.println(duration.getNano());
			LocalDateTime now = LocalDateTime.now();//로컬데이트타임의 양식 정보
			System.out.println(now);
			
			DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy년 M월 d일 a h시 m분");
			System.out.println(dateTimeFormatter);
			
			
		} catch(SocketException e) {
			e.printStackTrace();
		}catch(UnknownHostException e) {
			e.printStackTrace();
		}catch(IOException e) {
			e.printStackTrace();
		}
		return "test end";
		
	}
	
	
람다
- 익명클래스는(함수형인터페이스가 아닌) 타입의 인스턴스 만들때만 사용하라.


메서드 참조
-메서드 참조는 람다의 간단명료한 대안이 될수 있다.
-메서드 참조쪽이 짧고 명확한 경우 메서드 참조쓰고 아닐땐 람다를써라


스트림
-과용은금물이다.적재적소에 써야함.
- 기존코드는 스트림 사용하도록 리팩터링 하되 새코드가 나아보일때만 반영

스트림의 사용조건
1. 원소들의 시퀀스를 일관되게 변환할때
2. 원소들의 시퀀스를 필터링할때
3. 원소들의 시퀀스를 하나의 연산을 사용해 결합(더하기, 연결하기, 최소값 등)
4. 원소들의 시퀀스를 컬렉션에 모은다.(공통된 속성을 기준으로 묶어가며)
5. 원소들의 시퀀스에서 특정조건 만족하는 원소를 찾는다.

### stream 사용 팁
 - 스트림 작성시 명확한 기준은 없음
 - 일반코드, 스트림 비교해 더나은 코드를 선택하라
 - 개발단계에서 충분한 속도와 성능이 검증되었을때만 운영에 반영하라
 - forech는 스트림 수행결과를 볼때만 사용하는것을 권장한다.(계산로직에 사용X)


### collect 팩터리 필수파악항목
1. .toMap
2. .toList
3. .toSet
4. groupingBy
5. joining


### 스트림 병렬화
스트림 병렬화는 주의해야한다. 계산과 성능향상에 확신없이 무턱된 병렬화는 문제요소가 많을 수 있다.
오히려 성능저하와 오동작을 유발할 수 있으므로 성능지표를 개발단계에서 충분히 검증 후 사용해야한다.














