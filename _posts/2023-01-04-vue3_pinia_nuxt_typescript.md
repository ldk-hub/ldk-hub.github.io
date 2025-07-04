---
# 포스트제목
title: "vue3 기반(피니아, 넉스트3, 퀘이사2, 타입스크립트)"
# 포스팅 작성자
author: ldk
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2021-12-28 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["백엔드"]
categories: 열공해야한다.
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---

## 프론트엔드 개발 
 - vue3
 - pinia
 - nuxt3
 - quasar2
 - typescript

## vue3
크게 3가지 영역으로 분리된다.
1. 템플릿 영역
2. 스크립트 영역
3. 스타일 영역

node_modules : 프로젝트에 쓰는 라이브러리
src : 소스코드 담는영역
public : html파일, 기타파일 보관
packge.json : 라이브러리 버전,프로젝트 설정기


Vue 3 스터디 내역
인스턴스 
새 인스턴스를 만드는 것부터 시작합니다.

 - 예시코드
```
Var vm = new Vue({
	el : ‘#app’,
});
```

Package.json
디펜던시는 운영에 사용할 라이브러리선언

dev디펜던시는 모듈이 별로 없음. 실제사용
 - 상세내역은 package-lock.json에 정보가 있음.

Vue  서버 기동시 제일먼저 구동되는 것이 main.js이다.
 - main.js 소스 코드
import { createApp } from 'vue' //뷰 사용
import App from './App.vue' //경로지정

createApp(App).mount('#app') //.mount(‘#app’) id값이 app인 곳에 마운트를 시키겠다.

Babel - > 최신문법이 움직이지 않는 구 브라우저에서도 동작되게끔 컴파일역할
Router -> 화면이동을 할 수있게 해주는 역할
Router의 역할은 페이지 이동을 자바스크립트 형태로 이동시켜주기때문에 페이지의 변화는 없음

개발 경로 맵핑 방법
라우터에서 각 경로를 지정해주는 코드를 입력해야함 ->  index.js -> App.vue의 <router-link>의 URL 링크의  싱크가 맞아야함.

팁
 - vue에서 @의 의미는 src폴더를 찾아가라는 뜻임.
 - Tag 기능은 {{ }} 괄호 표시

라우트 설계에 따라 전체 페이지의 대한 성능이 좌우되므로 중요하다.
SPA 실제로는 하나의페이지로만구성되어있고 필요한부분만 동적으로 변화를 주기때문에 속도기 매우빠름
운영에올리게되면 index.html과 css 파일 과 자바스크립트 파일로 올라가게됨.

"rules": {"space-before-function-paren":"off”} 기능은 펑션에서 한칸안띄면오류나는데 
그부분을  off 한거임

1번째 라우터 방법
메인페이지 import 하는 방법

2번째 라우터 방법
레이지로딩하는 방법 

3번째 라우터 방법
WebpackPrefetch: true >> 브라우저 캐시에 저장하여 빠르게 처리하는 기능을 라우터에서 구현할 수 있음.
 - 단점은 :만약 사용자가 프리패치영역지정한 곳에 안들어가면 미리 메모리를 확보한 캐시 영역에 리소스를 사용하게 되는 것이니 설정에 신중해야함.

{{ }} <<<< 이중괄호는 머스태쉬라 말하며 데이터 바인딩 할때 사용되는 것

 이벤트 인수. : $emit -

V-on ->>>>>@click   온클릭이벤트처럼, @submit, @keyup, $emit
V-for >> 반복문
V-modal
V-html
V- if, v-if-else-if
V-else

아래의 두영역이 vue.js의 본격 화면 개발 영역임.
views는 화면 전체에 대한 구성개발을 이영역에 하고 
 - 네이밍규칙이 존재함 전체화면구성 뷰 경우 마지막에 View키워드를 붙여야함.

Components 영역이  단위별로 개발하는 구현 영역이라보면됨.

V-model 은 양방향으로 데이터바인딩 값을 주고받을 수 있다. 사용자입력값을 별도로 작성않고 키값만 알면됨.

타입스크립트를 사용할 경우
1. <script setup >
2. <scirpt lang = “ts”>
3. <script setup lang =“ts”>


### 컴포지션API 



## 피니아  pinia

스크립트와 상태를 체크해주는 기능
js로 분리된 로직으로 각 페이지별로 기능을 전달 공유할 수 있다.

스토어 개념 

import { defineStore } from 'pinia'
//디파인 스토어의 반환 값을 할당할 변수의 이름은 원하는 대로 지정할 수 있지만, 스토어 이름을 사용하고 'use'와 'Store'로 묶는 것이 가장 좋습니다.
// 예시 : 'useUserStore', 'useCartStore','useProductStore'
//첫 번째 인자는 앱 전체에서 스토어의 고유 ID입니다.

export const useAlertStore = defineStore('alerts',{
  
})



npm install @pinia/nuxt 
//nuxt.config.js 파일의 모듈만 추가해주면된다!

//nuxt.config.js
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt'
  ],
})

이게 피니아와 넉스트 사용끝

setup() 외부에서 스토어 사용


## nuxt3




## typescript  

타입스크립트 기초편  
타입스크립트는 자바스크립트 문법을 사용해도 인식이됨. 타입스크립트문법을 다시 자바스크립트로 해석해서 웹상에서 인식하기때문에  

1.syntax - student: string = 'Jhon'; <<여기서 :를 syntax라 한다.  타입명시할때 사용된다.  

2.타입추론  


3. 인터페이스   

```
/타입스크립트에서 인터페이스를 선언한 예시
interface Student{
	readonly studentId: number; //타입중 리드온리 속성을제공하여 수정하지못하게 설정할수있다.
	studentName: string;
	age: number;
	gender: string;
	subject: string;
	courseCompleted: boolean;
}


//위의 인터페이스에 정의된 타입에 맞춰 아래와 같은 함수의 리텅으로 정의하여 사용할 수 있다.
function getStudentDetails(studentId: number): Student{ //  바로옆 : Student는 재사용을 염두한 리턴 값을 정의한것 
	
	return {
		studentId: 123455,
		studnetName: 'TestMan',
		gender: 'male',
		subject: 'Node Js',
		coursCompleted: true
	};
}




```


4.열거형(Enum) 

```
//Enum 타입정의
enum GenderType{
	Male,
	Female,
	genderNeutral
}


//enum 호출시
function test{
   gender : GenderType.Male; //이렇게 정의해야됨.
}



//리터럴 타입
gender: 'male' | 'femal' | 'genderNeutral'

```


5. any, union type, type aliases, type gaurds

```
//any타입
let someValue: any; //any라고 명시할 경우 어떠한 타입이든 모두 ok 한다는 뜻임.

//유니언 타입
let someValue: number | string = 5;

//타입 별칭
type StrOnNum = number | string; // 타입별칭을 쓰게되면 유니언타입처럼쓸필요없음

let someValue: StrOnNum =5; //이와같이 명시하면 가독성좋아짐 


//타입가드
type StrOnNum = number | string;t
let itemPrice: number;

const setItemPrice =(prices: StringOrNum): void =>{
	if(typeof price === 'string'){
		itemPrice = 0;
	}else{
		itemPrice = price;
	}
};

//위와같이 정의해줘야 setItemPrice(50);을 선언했을때 에러가발생하지 않는다.
setItemPrice(50);

```


6.함수의 반환타입, 선택적 매개변수, 디폴트 정의  

```
			      //: string 타입을 리턴한다는 의미
function send(message, userName): string {
 return 'Hello';
}


				//: void 아무것도 리턴하지않음
function send(message, userName): void {
 console.log('test');
}

			      //: 문자형의 배열을 리턴한다는 의
function send(message, userName): string[] {
	return['test1','test2'];
}



//Arrow function 화살함수

//기존함수비교
function add(num1, num2){
	return num1 + num2;
}
//기존함수 심화(아래 화살표전환 참조용)
function send(message = 'Hello', userName = 'there'):void{
	console.log('${message}, ${userName}');
}


//화살표 함수
const add = (num1, num2) => num1 + num2;
//화살표 함수 심화
const send = (message = 'Hello', userName = 'there'): void => console.log('${message}, ${userName}');

```


7. 객체지향 프로그래밍 클래스와 오브젝트 관계  
1. 클라스 내 정의된 변수 -> 프로퍼티  
2. 클라스 내 정의된 함수 -> 메소드
3. 클라스의 인스턴스 -> 클래스를 통해 새로운객체를 생성했을떄를 인스턴스라함.
```
class Employee {  //클래스 내부에서는 let 선언안해도됨.
	fullName: string;
	age: number;
	jobTitle: string;
	hourlyRate: number;
	workingHoursPerWeek: number;
	
	 //콘솔로그 내 fullName 호출은 this.를붙여 호출이가능하다. 
	printEmployeeDetails = ():void =>{
		console.log('${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourRate*this.workingHoursPerWeek}달리어다.')
	}
}



//클라스의 인스턴스 여러개 할당이가능하다~
let emplotyee1 = new Employee();
emplotyee1.printEmployeeDetails();

let emplotyee2 = new Employee();
emplotyee2.printEmployeeDetails();

```



8. 타입스크립트 클래스 - 생성자, 접근제한  
```

class Employee {  //클래스 내부에서는 let 선언안해도됨.
	fullName: string;
	age: number;
	jobTitle: string;
	hourlyRate: number;
	workingHoursPerWeek: number;
}

//constuctor - 생성자 클래스로부터 객체생성시 호출 객체의 초기화 담당
constructor(fullName:string, age:number, jobTitle?: string, //선택적 매개변수는 정의된 매개변수 뒤에물음표를명시해주면된다.
	    hourlyRate: number, workingHoursPerWeek: number){
	this.fullName = fullName;
	this.age = age;
	this.jobTitle = jobTitle;
	this.hourlyRate = hourlyRate;
	this.workingHoursPerWeek = workingHoursPerWeek;
}


//위와같이 생성자를 정의하게되면 이렇게 정의하면된다. 코드가간결해진다.
let employee1: Employee = new Employee('민수', 28,'주니어개발', 40, 35);

employee1.printEmployeeDetails();




```
constructor의 매개변수에 accessModifiers 직접적용한 예  
![화면 캡처 2023-01-26 191816](https://user-images.githubusercontent.com/12209348/214811867-48839eac-b8b8-43b6-ba69-e102d81f2c6f.png)

![2](https://user-images.githubusercontent.com/12209348/214811874-3de1e232-20cb-4ba2-a328-5ab21519244c.png)








## quasar2 

한글번역
https://quasar.serasome.com/intro/start#quasar
