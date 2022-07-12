---
# 포스트제목
title: "알고리즘 필수개념 정리"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-04-29 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["알고리즘", "개념정리"]
categories: 자바개발
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---

## 스터디 목록
[자바 필수개념](#백준 난이도별 풀기 step by step)

# 알고리즘 필수 개념 

## 모듈러 산술
 나머지 연산을 하는 것
 
 - 모듈러 산술 예시
 r = a % m (r:나머지, a:피제수, m:제수)
 r = a mod m
 
 
## 팩토리얼(계승)>>> n!
1부터 n 까지의 자연수를 모두 곱하는것을 의미함.

서로다른 n개를 나열하는 경우의 수

1. 하강계승 
2. 상승계승

두가지형태로 구현할 수 있음
반복문(iteration, loop) 형태의 알고리즘
```
unsigned int fact_iter (unsigned int n) { // 계승은 음이 아닌 정수에 대해서만 정의된다.

	if (n <= 1) return 1; // 1! = 0! = 1이므로 1을 반환한다.

	int result = n;
	for (int i = n - 1; i > 1; i--) result *= i; // n부터 하나씩 값을 줄여가며 그 값을 결과값에 곱한다.

	return result;
	
}
```

재귀(recursion) 형태의 알고리즘
```
unsigned int fact_rcsv (unsigned int n) {

	if (n <= 1) return 1; // 1! = 0! = 1이므로 1을 반환한다.

	return n * fact_rcsv(n - 1); // n! = n * (n - 1)!이므로, n - 1에 대한 함수를 한 번 더 호출한다.
	
}

```

## 순열
서로 다른 n개 중 r개를 선택하는 경우의 수 (순서상관있음)


## 재귀함수 개념
  - 정의 : 자신을 정의할 때 자기 자신을 재참조하는 방법을 의미함.
  - 쉽게 : 자기자신을 다시 호출해 작업을 수행하는 방식
  - 특정 분기까지 자기자신을 계속해서 호출하여 반복문을 구현해야할때
  - for, while 외 재귀함수로도 구현가능
  ```
  //재귀함수 예시
  int factorial(int n){
  	if(n ===1){
	   return 1;
	}
	return n * factorial(n-1);
	
  }
  ```
 ### 점화식 개념
 


## 피보나치수
### 피보나치 수를 풀수있는 방법은 대표적으로 두가지 방안이있음.
  - 반복식과 재귀함수를 통해 풀수있지만
    재귀함수경우 int정수의 사용제한으로 런타임 오류가 유발될 수 있기때문에
    두가지방안모두 알면좋다.
 
```
public class Fibonacci {
    // 계산된 결과 값을 담을 배열
    private static int[] memo = new int[100];

    public static void main(String[] args) {
        fibo(99);

        for (int n : memo) {
            System.out.print(n + " ");
        }
    }

    private static int fibo(int k) {
        if (memo[k] != 0) {
            // 이미 계산한 값
        } else {
            // 처음 계산되는 값
            if (k <= 2) {
                // 1번 항과 2번 항은 1로 초기화
                memo[k] = 1;
            } else {
                // 3번째 항 부터는 계산
                memo[k] = fibo(k - 1) + fibo(k - 2);
            }
        }
        return memo[k];
    }

}
```
 


## DP 알고리즘 (다이나믹 프로그래밍) -> 점화식




## bfs

## dfs

## 백트래킹



### JAVA Tip
입출력관련 속도이슈  Scanner VS BufferedReader  
- Scanner 속도가 느림 하지만 코드상 표현이 간결함 (스캐너경우 import java.util.Scanner 또는 java.util.*)를사용
- BufferedReader 통째로 입력받아야함. 하지만 선언문이많아 코드 가독성이 떨어짐  

사용방안  
단순로직일경우 BufferedReader를 사용하여 퍼포먼스측면으로 사용  
다소 복합적인(파싱) 로직일 경우 Scanner를 사용하는것이 코드 더 효율적일 수 있음.   

정수, 나머지값 등 판별
a % b == 0 

// BufferedReader 정보 출력	
// *TMI - 중간자역할 굳이 중계기를 끼우는 이유는 한번에 문자열을 받아 한번만빠르게 쏘기때문
//Scanner 방식은 입력할 때마다 이벤트가 발생하기 때문에 효율성으로는 버퍼드리더가 더좋다.

//입력받은 값을 한번에 던져서 훨씬빠른 대신 리턴값이 스트링고정임
BufferedReader br =  new BufferedReader(new InputStreamReader(System.in));

//입력받은 값 가져오기
br.readLine();

//int 형변환해줘야됨.
Integer.parseInt(br.readLine());
	br.close();// 입출력 끝난시점에서 종료해줘야함.

//코드의 가독성측면에서는 Scanner가 좋지만 속도측면에서는 StringBuffered가 더좋음.	
//다중값을 받아 처리할땐 StringTokenizer를 사용해야한다.
//지정한 구분자로 문자열을 나누어주는 클래스임.
StringTokenizer token = new StringTokenizer(str);	

// 예시
String s = "2020-02-15";
StringTokenizer tokenizer = new StringTokenizer(s, "-");
특정 문자열을 기준으로 나누고 싶다면 문자열과 구분자를 생성자의 인자로 넣어주면 된다.
```
//
import java.io.*;
import java.util.*;
class Main {
	public static void main(String[] args) throws Exception {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); //입력  빠른버전 Scanner 보다 빠름
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); //출력 빠른버전 Scanner 보다 빠름
		StringTokenizer st; //순차적으로 쌓아서 토큰으로 관리해줌
		
		int a = Integer.parseInt(br.readLine()); //버퍼드리더로 받은 데이터 Int 파싱
		 
		for(int i=0; i<a;i++){
			st = new StringTokenizer(br.readLine());
			
			bw.write((Integer.parseInt(st.nextToken())+Integer.parseInt(st.nextToken()) )+"\n");
		}
		bw.close();
	}
}
```
