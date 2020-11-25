---
# 포스트제목
title: "포트폴리오 - 모놀로틱에서 MSA로 전환 프로젝트"
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2020-08-19 08:26:28 -0400
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

# Micro Service Architecture (MSA)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fldk-hub%2FSpringCloudConfigTEST&count_bg=%235A8738&title_bg=%236D1313&icon=&icon_color=%23FF0000&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![HitCount](https://img.shields.io/badge/lisence-MIT-green.svg)](https://github.com/ldk-hub/MSA_project/blob/master/LICENSE)

프로젝트 개요 : MSA 프로젝트를 직접 구성해보고 앱에서 각종 제어를 실습해보는 목적으로 프로젝트를 진행 중. 

프로젝트 목적 MSA의 기능 구현 및 샘플케이스 구성  
![333](https://user-images.githubusercontent.com/12209348/90950280-02654600-e48b-11ea-8992-347d8e50611b.jpg)

MSA는 만능이 아님 서비스 환경적으로  서비스 사용자가 많았을 경우에 적합한 기술이다.  

1. 빌드 및 테스트 시간을 단축시킬 수 있다.  
30개의 서비스를 가진 Monolithic 의 빌드 시간이 30분이었다면, MSA는 각각의 서비스를 1분 만에 빌드 할 수 있습니다. 이는 CI / CD를 추구하는 기업에서는 좀 더 적합한 모델이 됩니다. 왜냐하면 하루에도 몇 번을 빌드 및 배포를 해야 하는데 그때마다 많은 시간을 소모하게 된다면 낭비이기 때문입니다.  

2. 상황에 맞게 기술을 유연하게 적용할 수 있습니다. 예를 들어 TPS(시간당 트랜잭션)가 높고, 읽기 작업이 많은 서비스에는 Node + Redis로 구현을 하고, 트랜잭션 및 안정성이 중요한 서비스에는 Spring + RDB를 적용할 수 있습니다.  



### 마이크로 서비스  
  - 유레카 관제 모니터링 페이지
![Inkedscreencapture-localhost-8761-2020-11-17-14_16_19_LI_Moment](https://user-images.githubusercontent.com/12209348/99351507-0ebf3a80-28e4-11eb-9392-56d7463a9290.jpg)

 - 유레카 서버에 클라이언트 연결 구성
![screencapture-localhost-8761-2019-09-20-09_44_19](https://user-images.githubusercontent.com/12209348/65290702-41a85a00-db8b-11e9-9288-96ff23bc9421.png)  

 - 유레카 클라이언트 구동 테스트완료
 ![screencapture-localhost-8080-2019-09-20-09_44_04](https://user-images.githubusercontent.com/12209348/65290701-41a85a00-db8b-11e9-8f08-87958cee740e.png)  

### 개발 진행  
 - 오라클  -> h2 로 데이터베이스 변경(경량화 목적)  
 - h2 DB 구성완료  
 - 프로젝트 DB 연동완료(postgresql, h2)  
 - 클라이언트(h2), 서버(postgresql)로 구성완료  
  
## 완료내역   
  1. 유레카관리서버1대 클라이언트2개 구성완료  
  2. 유레카 관리서버 페이지 각 클라이언트1,2 연동 확인완료  
  3. 클라이언트1번 서버는 postgresql, 2번서버는 h2연결완료  
  
