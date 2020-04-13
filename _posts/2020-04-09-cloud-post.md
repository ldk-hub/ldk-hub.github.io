---
title: "클라우드 운영관련 이슈 정리"
date: 2020-04-09 08:26:28 -0400
categories: jekyll update
---
### MS-Azure Cloud Platform as a Service 교육 
### 서버 엔지니어 파트(2019.01.30)
 - 클라우드 네트워크 구성 
 - 로드밸런싱 구성
 - 앱 웹 시스템 구성
 - 서버 스펙별 사용금액 설정

![1](https://user-images.githubusercontent.com/12209348/46652690-ca2e2480-cbde-11e8-9e50-1dd2fc9882ac.PNG)
![2](https://user-images.githubusercontent.com/12209348/46653309-a835a180-cbe0-11e8-9d6f-0e102abe8e7f.PNG)

### Azure를 왜 사용하는 이유
 - 편의성
 - 확장성
 - 사용한만큼 비용 지불
 - 개발에 필요한 기능 제공

![3](https://user-images.githubusercontent.com/12209348/46905552-8ade3b80-cf30-11e8-823b-07d6375e8b96.PNG)
![1](https://user-images.githubusercontent.com/12209348/46905553-8ade3b80-cf30-11e8-9dcc-516cdcddcfa6.PNG)
![2](https://user-images.githubusercontent.com/12209348/46905554-8b76d200-cf30-11e8-97e7-df63eee8ae71.PNG)
![4444](https://user-images.githubusercontent.com/12209348/51954438-88720400-2483-11e9-8c7f-2b220d731fae.JPG)

### 개발자 파트(2019.01.31) 
### Azure 웹 앱
수업 커리큘럼
 - Azure Web App 생성
 - Azure Web App 게시
 - SQL Azure Database 사용
 - 사용자 도메인 적용
 - Manual Scaling
 - Auto Scaling
 - 모니터링
 -  Azure Blob 저장소
 - Azure SQL 데이터베이스
 - SendGrid 메일 전송 서비스
![1](https://user-images.githubusercontent.com/12209348/52025388-6e99f500-2547-11e9-98c1-c3b5df4718e2.JPG)
![2](https://user-images.githubusercontent.com/12209348/52025392-722d7c00-2547-11e9-9ba1-d76e34fad62a.JPG)
![3](https://user-images.githubusercontent.com/12209348/52025379-6b066e00-2547-11e9-936b-bb4f03a6d278.JPG)
![5](https://user-images.githubusercontent.com/12209348/52025382-6cd03180-2547-11e9-9d8b-fb0bec79fe30.JPG)
![6](https://user-images.githubusercontent.com/12209348/52025383-6d68c800-2547-11e9-9b88-51adcfe79fec.JPG)
![8](https://user-images.githubusercontent.com/12209348/52025384-6e015e80-2547-11e9-9081-9503ba3aa2de.JPG)

이미지 출처 : MS -Azure Cloud 서비스 운영자 입문 교육





### Azure 클라우드 정리
1. 클라우드 보안 TIP
 클라우드 초기 구성 시 공용IP의 노출될 위험성을 위해 프라이빗 IP주소를 구성해서 별도로 관리해야함.
 DB같은경우 Paas로 구성하게 될 경우 별도의 HA cluster 구성을 하지 않아도 됨.

2. DB에 장애발생시 복제한 대체서버로 서비스 중단 될 리스크 감소 (대신 월 Paas비용이 비교적 비쌈) 이중구성할것이냐 vs Paas로 마소에서 관리해주길바라느냐 중 택1 Paas구조 1년동안사용해본 경험으로는 딱 1번의 정기점검 외에는 끊긴경험이 없음.
 
추가 WAF - 웹방화벽 및 L7 통합 기능 에저지원
2차인증 멀티팩터 (전화또는 OTP인증방식)
클라우드 상태정보 모니터링 대시보드 커스터마이징 기능

 - 윈도우 윈도우 디펜더 및 매달 정기 업데이트 작업
 - 리눅스 경우 시큐리티 업데이트 관련 작업(앱들의 업데이트를 주기적으로 실행 할 경우 호환성이슈발생할 수있어서 시큐리티만)






 
## 클라우드 서버 운영 이슈 사례 및 조치방안 히스토리
1. 문제발생 :  해외IP에서 국내서비스한정인 서비스에 접근하여 정보탈취 시도 및 접근기록이 남아있어 
 스프링시큐리티로 로그가 남아있어 해당 조치를 취함.
 - 해결방안 : 국내 IP 대역을 제외한 전세계 IP 대역을 모두 블랙리스트로 지정하여 국내서만 접근 할 수 있도록 제어함.
 - 주의사항 : 해당 조치의 경우 글로벌 서비스일 경우 어플리케이션 내부 및 별도의 다른 방안을 사용해야함.
 
 
 
 2. 문제발생 : 리눅스 서버에서 VM의 호스트된 실제 노드의 하드웨어가 고장나 이를 감지해 트리거가 발동되면서 시스템을 강제 리붓시킴
  - 조치사항 : 리붓 후 서버는 정상 재기동 되었지만 애플리케이션 경우 별도로 서비스를 올려줘야하는 구조였기 때문에 서버 재기동시 자동으로 서비스를 올릴 수 있도록 후속조치 취함.
  - 주의사항 :  이러한 가상머신의 VM의 서비스 제공사의 이슈로 대응방안을 모색해야함. 무중단 서비스 경우 로스타임으로인한 손실이 발생 이중화된 서비스가 아닌 단일 구조의 모놀리틱 서비스로 제공된 케이스여서 실제 로스타임이 발생됨.
 
 
 3. 클라우드 운영 고충사항
 - 문제발생 :  IT 개발자가 여럿 VM에 접근하고 난 뒤 시스템을 종료하지 않거나 다수가 집중적으로 접근하여 작업 중 OOM이 발생하여 시스템 다운되는 현상이 발생됨.
 - 해결방안 : VM에 접근하여 작업할 수 있는 인원을 2명으로 제한함. 그리고 개발자를 소집하여 작업 완료 후 사용한 시스템을 필수적으로 종료시키고 해당 작업이력에대해 공유(폐쇄망이여서 슬랙이나 별도의 공유방법이없어 메일로 대체)
