---
# 포스트제목
title: "알고리즘 스터디"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-04-26 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["알고리즘"]
categories: 자바개발
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---

### 알고리즘 스터디

## 현재 스터디 중인 사이트
 - 프로그래머스 자바 알고리즘 1레벨 진행 중 (오라클 sql문제 4레벨까지 완료)
 
 - 백준  기초 40문제(입출력과사칙연산, if문, for문, while문, 1차원 배열, 문자열 완료)
 - 구름   2레벨 시작
 
목표 알고리즘 문제
bfs, 그리디



## remind   
알고리즘 구현 과정 퍼포먼스 관련  

### 입출력관련 속도이슈  Scanner VS BufferedReader  
- Scanner 속도가 느림 하지만 코드상 표현이 간결함 (스캐너경우 import java.util.Scanner 또는 java.util.*)를사용
- BufferedReader 통째로 입력받아야함. 하지만 선언문이많아 코드 가독성이 떨어짐  

### 사용방안  
단순로직일경우 BufferedReader를 사용하여 퍼포먼스측면으로 사용  
다소 복합적인(파싱) 로직일 경우 Scanner를 사용하는것이 코드 더 효율적일 수 있음.   

## 팁
정수, 나머지값 등 판별
a % b == 0 



## 버블정렬
```
public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int[] b = new int[a];
				
		for(int i=0; i<a; i++){
			b[i] = sc.nextInt();
		}
		//여까지 입력받은 값 담아두기
		
		//법을정렬 시좍
		for(int j=0; j<a; j++){
			for(int k=0; k<a-j-1;k++){
			 if(b[k]>b[k+1]){
				int temp =b[k+1];
				 b[k+1]=b[k];
				 b[k]=temp;
			 }
			}
		}
		
		for(int q=0; q<b.length;q++){
			System.out.print(b[q]+" ");
		}
		
	}
}
```







# 알고리즘 스터디
 
## 용어정리  
 - 귀납적  
 - 재귀적  
 - 점화식  



## 정렬 알고리즘

### 선택정렬

### 버블정렬

### 삽입정렬

### 병합정렬

### 퀵정렬


## 선택 알고리즘

## 검색 트리

## 해시테이블

## 집합의 처리

## 그래프

## 동적 프로그래밍

## 그리디 알고리즘
