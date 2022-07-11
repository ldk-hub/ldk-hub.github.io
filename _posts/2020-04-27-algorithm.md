---
# 포스트제목
title: "알고리즘 문제풀이"
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

### 알고리즘 문제풀이
 [백준 문제리스트](#백준 난이도별 풀기 step by step)
 [프로그래머스 문제풀이](#백준 난이도별 풀기 step by step)
 [백준 문제리스트](#백준 난이도별 풀기 step by step)






## 정렬 알고리즘
### 선택정렬

### 버블정렬
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
```
		for(int i=0; i<a; i++){
			for(int j=i+1;j<a; j++){
				if(arr[i]> arr[j]){
					int temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;
				}
			}
		}
```
### 삽입정렬

### 병합정렬

### 퀵정렬

## 검색 트리
## 순열(팩토리얼)
## 해시테이블

## 집합의 처리

## 그래프

## 동적 프로그래밍

## 그리디 알고리즘

### LEVEL2  
 숫자의표현
Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

제한사항
n은 10,000 이하의 자연수 입니다.

```
class Solution {
    public int solution(int n) {
        
        int sum=0;
        int left= 1; 
        int right =1;
        int cnt=0;
        
        while(left <= n){
           sum += right;
            if(sum == n){
                left++;
                sum =0;
                 cnt++;
                right =left;
                
            }else if(sum > n){
                left++;
                sum=0;
                right = left;
            }else{
                right++;
            }
              //
        }
        return cnt;
        
    }
}
```

최댓값과 최솟값

문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

제한 조건
s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.


입출력 예
s	return
"1 2 3 4"	"1 4"
"-1 -2 -3 -4"	"-4 -1"
"-1 -1"	"-1 -1"

```
import java.util.*;
class Solution {
    public String solution(String s) {
        String answer = "";
        String[] arr = s.split(" ");
        int[] intArr = new int[arr.length];
	
        for(int i=0; i<arr.length; i++){
            intArr[i] = Integer.parseInt(arr[i]); 
        }
         
	 Arrays.sort(intArr);
        answer = intArr[0] + " " + intArr[arr.length-1];
        return answer;
    }
}
```



최솟값 만들기

문제 설명
길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면

A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값 : 0 + 5(1x5) = 5)
A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 5 + 16(4x4) = 21)
A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + 8(2x4) = 29)
즉, 이 경우가 최소가 되므로 29를 return 합니다.

배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.

제한사항
배열 A, B의 크기 : 1,000 이하의 자연수
배열 A, B의 원소의 크기 : 1,000 이하의 자연수
입출력 예
A	B	answer
[1, 4, 2]	[5, 4, 4]	29
[1,2]	[3,4]	10
입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
A에서 첫번째 숫자인 1, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 4) 다음, A에서 두번째 숫자인 2, B에서 첫번째 숫자인 3을 뽑아 곱하여 더합니다. (누적된 값 : 4 + 6 = 10)
이 경우가 최소이므로 10을 return 합니다.

```
import java.util.*;

class Solution{
    public int solution(int[] A, int[] B){
        int answer = 0;
       Integer[] b =new Integer[B.length];
        
        for(int k=0; k<B.length; k++){
            b[k]=  B[k];
        }
        
        
      Arrays.sort(A);
       Arrays.sort(b,Collections.reverseOrder());
      for(int i=0; i<A.length; i++){
          answer +=A[i] * b[i];
        }
        
        return answer;
    }
}
```

피보나치 수
문제 설명
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

제한 사항
n은 2 이상 100,000 이하인 자연수입니다.
입출력 예
n	return
3	2
5	5
입출력 예 설명
피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.



```


class Solution {
    public int solution(int n) {
        int answer = 0;
        int a =1; 
        int b =1; 
            //1234567 을 나누는건 실질적인 결과값에 차이가나지 않지만
            // 컴퓨터 자료구조 상의 문제로 int 정수에서 표현할 수 있는 수치가 한계가 금방드러나기때문에
            //1234567이란숫자는 int 표현에서의 결과값도출에 있어 제약을 개선해주는 요건임(모듈러의연산 참조)
            for(int i=0; i<n; i++){
                a= b;
                b= answer %1234567;
                answer = a+b ;
            }
        return answer %1234567;
    }
     //재귀함수로 돌리면 특정 반복 횟수이상부터 
        //런타임에러 유발하기 때문에 장기적관점에서는 테스트탈락 
  /*  public int TestCase(int n){
            return TestCase(n-1)+TestCase(n-1);
    } */
    
}
```



JadenCase 문자열 만들기


문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.
입출력 예
s	return
"3people unFollowed me"	"3people Unfollowed Me"
"for the last week"	"For The Last Week"



```

class Solution {
    public String solution(String s) {
        
         StringBuffer sb = new StringBuffer();
        String  firstkey = s.charAt(0)+"";
        sb.append(firstkey.toUpperCase());
       
        for(int i=1; i<s.length(); i++){
            String nextKey = s.charAt(i)+"";
            if(nextKey.equals(' ')){
                sb.append(" ");
            }else if(s.charAt(i-1)==(' ')){
                sb.append(nextKey.toUpperCase());
            }else{
                sb.append(nextKey.toLowerCase());
            }   
        }
        
        
        System.out.println(sb.toString());
        
        return sb.toString();
    }
}

```




행렬의 곱셈  
문제 설명  
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.  

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.  
행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다 .  
곱할 수 있는 배열만 주어집니다.  


입출력 예  
arr1	arr2	return  
[[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]  
[[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]  


```
class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {
    int[][] answer = new int[arr1.length][arr2[0].length];          
        
        
        //A행렬의 뒷배열과 B행렬의 앞배열이 같은 숫자여야 곱셈을 할 수 있다.
        for(int i=0; i<arr1.length;i++){ //A행렬에 대한 값정의
            for(int j=0; j<arr2[0].length; j++){ //B행렬 
                for(int k=0; k<arr1[i].length; k++){//A와 B의 행렬
                 answer[i][j] += arr1[i][k] * arr2[k][j];  
                }    
            }
        }
        return answer;
    }
}

```






멀리 뛰기  
문제 설명  
효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는  
(1칸, 1칸, 1칸, 1칸)  
(1칸, 2칸, 1칸)  
(1칸, 1칸, 2칸)  
(2칸, 1칸, 1칸)  
(2칸, 2칸)  
의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내, 여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. 예를 들어 4가 입력된다면, 5를 return하면 됩니다.  

제한 사항  
n은 1 이상, 2000 이하인 정수입니다.  
입출력 예  
n	result  
4	5  
3	3  
입출력 예   
입출력 예 #1  
위에서 설명한 내용과 같습니다.  

입출력 예 #2  
(2칸, 1칸)  
(1칸, 2칸)  
(1칸, 1칸, 1칸)  
총 3가지 방법으로 멀리 뛸 수 있습니다.  



```
class Solution {
    public long solution(int n) {
        long answer = 0;
        long[] dp = new long[2000]; // 2000개의 배열공간 생성
        
        dp[1]= 1; //둘째숫자셋째숫자의 공간에 값을 넣어준다.
        dp[2]= 2;
        
        //피보나치의수열과 같이 3부터시작
        for(int i=3; i<dp.length; i++){ //dp[i-1]+dp[i-2]는 점화식
           dp[i] =( dp[i-1]+dp[i-2]) % 1234567; //1234567이라는 수로인해 int 또는 long의 한계 수치를 극복~
        }
           answer =  dp[n];
        
        return answer;
    }
}
```


올바른 괄호  

올바른 괄호  
문제 설명  
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어  

"()()" 또는 "(())()" 는 올바른 괄호입니다.  
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.  
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.  

제한사항  
문자열 s의 길이 : 100,000 이하의 자연수  
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.  



입출력 예  
s	answer  
"()()"	true  
"(())()"	true  
")()("	false  
"(()("	false  

입출력 예 설명
입출력 예 #1,2,3,4
문제의 예시와 같습니다.



스택에 관한 알고리즘

```
class Solution {
    boolean solution(String s) {
        boolean answer = true;
     
        int cnt = 0;
        //열린 갯수에 대해서 닫은 갯수가 같거나 같은방향이여야함.
        
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i) == '('){
                cnt++;
            } else{
                cnt--;
            }      
           // System.out.println(cnt);
            
            if(cnt<0){ //첫시작이 반대로시작할경우 -1이 찍혀서 0밑의 수가찍히면 그것은 실패로간주해야함.
                answer = false;
            }
            
            
        }
        
        if(cnt != 0){
            answer = false;
        }
        
        
        return answer;
    }
}

```

N개의 최소공배수  
문제 설명  
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.  

제한 사항  
arr은 길이 1이상, 15이하인 배열입니다.  
arr의 원소는 100 이하인 자연수입니다.  
입출력 예  
arr	result  
[2,6,8,14]	168  
[1,2,3]	6  



```
class Solution {
    public int solution(int[] arr) {
        int answer = arr[0];
        //4개~ 3개의 값이지만 2개씩 값을 처리하면됨.
            for(int j=0; j< arr.length; j++){
                answer = lcm(answer, arr[j]);    재귀함수 쓰는방법 잘파악해야됨
            }
        
        return answer;
    }
        //유클리드 호제법
    public int gcm(int a, int b){
       if(a%b ==0){
        return b;
       }
        return  gcm(b, a%b);   
    }
    
    //최소공배수 구하는법
     public int lcm(int c, int d){
         return c * d / gcm(c,d); 
     }
}
```



## 백준 난이도별 풀기 step by step
```
 - 알고리즘 문제 기업요구사항 - 그리디,기본 동적, 완전탐색, bfs, dfs 까지

1. 정렬 - 2751, 11650, 11651, 10814, 10825, 10989, 11652, 11004
2. 스택 - 10828, 9012, 10799  큐 - 10845  덱 - 10866
3. 문자열 처리 - 10808, 10809, 10820, 2743, 11655, 10824, 11656
4. 기타 자료 구조 - 1406, 1158, 1168
5. 기초 수학 - 10430, 2609, 1934, 1850, 9613, 11005, 2745, 1373, 1212, 2089, 11576, 1978, 1929, 11653, 10872, 1676, 2004, 6588  
6. 그래프 - 1260, 11724, 1707, 10451, 2331, 9466, 2667, 4963, 7576, 2178, 2146, 1991, 11725, 1167, 1967
7. 이분탐색/삼분탐색 - 1654, 2805, 2110, 10815, 10816, 11662
8. 분할정복 - 11728, 1780, 11729, 1992, 2447, 2448, 1517, 2261
9. 그리디 - 11047, 2875, 10610, 1783, 1931, 11399, 2873, 1744 
10. 완전탐색 - 1476, 1107, 1451, 9095, 10819, 10971, 1697, 1963, 9019, 1525, 2251, 2186, 3108, 5014, 1759, 2580, 1987, 6603, 1182, 2003, 1806, 1644, 1261, 1208, 7453, 2632, 2143

2랩  -DP
1463, 11726, 11727, 9095, 10844, 11057, 2193, 9465, 2156, 11053, 11055, 11722, 11054, 1912, 2579, 1699, 2133, 9461, 2225, 2011, 11052

3랩
2751, 11650, 11651, 10814, 10825, 10989, 11652, 11004, 10828, 9012, 10799, 10845, 10866, 10808, 10809, 10820, 2743, 11655, 10824, 11656, 1406, 1158, 1168, 10430, 2609, 1934, 1850, 9613, 11005, 2745, 1373, 1212, 2089, 11576, 1978, 1929, 6588, 11653, 10872, 1676, 2004

 8393, 10818, 2438, 2439, 2440, 2441, 2442, 2445, 2522, 2446, 10991, 10992
boj.kr/8393

```
