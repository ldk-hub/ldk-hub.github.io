---
# 포스트제목
title: "MS 클라우드 서버 실제 운영 사례"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-05-13 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
# tags: ["클라우드","교육"]
categories: 클라우드 서버
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
---
### Azure 클라우드 운영
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
 1. 문제발생 :  해외IP에서 국내서비스한정인 서비스에 접근하여 정보탈취 시도 및 접근 기록발생(스프링시큐리티 로그 분석 중 발견)
  - 해결방안 : 국내 IP 대역을 제외한 전세계 IP 대역을 모두 블랙리스트로 지정하여 국내서만 접근 할 수 있도록 제어함.
  - 주의사항 : 해당 조치의 경우 글로벌 서비스일 경우 어플리케이션 내부 및 별도의 다른 방안을 사용해야함.
  
 2. 문제발생 : 클라우드 서비스에서 리눅스 서버 VM의 호스트된 실제 노드의 하드웨어가 망가져 이를 감지해 트리거가 발동되면서 시스템을 강제 리붓시킴
  - 조치사항 : 리붓 후 VM(서버)는 정상 재기동 되었지만 애플리케이션 경우 별도로 서비스를 실행해줘야하는 구조였기 때문에 서버 재기동시 자동으로 서비스를 올릴 수 있도록 후속조치 취함.
  - 주의사항 : 이러한 가상머신의 VM의 서비스 제공사의 이슈로 대응방안을 모색해야함. 무중단 서비스 경우 로스타임으로인한 금전적 손실이 발생되기 때문에 이중화된 서비스가 아닌 단일 구조의 모놀리틱 서비스로 제공된 케이스였음.
 
 
 3. 클라우드 운영 고충사항
  - 문제발생 : 동료 개발자들이 서버에 접근하고 난 뒤 시스템을 종료하지 않거나 다수가 동시에 접근하여 작업 중 OOM이 발생하여 시스템 다운되는 현상이 발생됨.(메모리 및 CPU 분할 누적되어 아웃오브메모리 발생)
  - 해결방안 : VM에 동시 접근하여 작업할 수 있는 인원을 2명으로 제한함. 그리고 개발자를 소집하여 작업 완료 후 사용한 시스템을 필수적으로 종료시키고 해당 작업이력에대해 공유(폐쇄망이여서 슬랙이나 별도의 공유방법이없어 메일로 대체)