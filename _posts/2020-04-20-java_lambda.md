---
# 포스트제목
title: "자바 심화과정 - 람다, 스트림 "
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-04-14 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["백엔드","자바","람다식","스트림"]
categories: 열공해야한다.
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---
## 람다 표현식

함수형 프로그래밍 문법적 표현방식 기법 JDK 1.8 Ver 이상부터 사용할 수 있움 

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


자주 쓰이는 인터페이스 종류
 - function<T>
 - Consumer<T>  어떤 타입의 파라미터로 받는다. 리턴은 없음.
 - Predicate<T>  어떤 타입의 파라미터로 받는 다. 리턴은 Boolean타입.
 - Supplier<T>    어떤 타입으로 리턴함. 파라미터는 없음.



람다식은 Object 타입으로 형변환 불가함. 굳이 하려면 먼저 함수형 인터페이스로 변환해야함.
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


연속된 요소
filter, sorted, map 표현 계산식이 주를 이룸. 컬렉션의 주제는 데이터이며, 스트림의 주제는 계산이다.

소스
컬렉션, 배열, I/O자원 등의 데이터 제공 소스로부터 데이터를 소비한다. 정렬된 컬렉션으로 스트림을 생성하면 정렬이 그대로 유지됨.

데이터 처리 연산


파이프라이닝


내부반복
