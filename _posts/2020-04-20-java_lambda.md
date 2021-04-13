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
