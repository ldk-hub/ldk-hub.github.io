---
# 포스트제목
title: "메이븐 -> 그레이들 프로젝트 컨버젼하기 "
# 포스팅 작성자
author: ["이동옥"] 
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2021-04-20 08:26:28 -0400
# 블로그 메인페이지에 썸네일과 함께 노출될 텍스트 설정 일정 길이를 초과하면 잘려서 표시됨.
# abstract:
# 태그를 입력
tags: ["gradle","maven","mvn","메이븐","그레이들"]
categories: TDD
# 대표 이미지를 입력합니다. 이미지 업로드 위치는 아래에 기술합니다.
# image: /assets/images/posts/nerdfactory-documentation-history/main.jpg
# 포스트의 초안 여부를 입력합니다. "no" 로 입력할 경우 공개됩니다.
draft: "no"
toc: true
---


기존 사용중이던 메이븐 프로젝트를 그레이들로 전환하는 작업을 진행해 보았다.
방법은 그리어렵지 않다.


1. 내가 사용중인 PC에 gradle을 다운받는다.  
 - 주의점 : 기존 프로젝트가 old 프로젝트 일경우 그레이들 지원이 안될 수도 있으니 그레이들 버전을 잘 검토하여 다운받는다.  
 - 나같은 경우엔 버전 신경안쓰고 막무가내식으로 gradle 전환을 진행하여 결국 이클립스가 깨져(?)서 다날려먹고 
 - 백업본으로 원복해서 다시 재구성하여 2배이상의 시간을 허비하였다.

2. 다운받은 gradle을 PC의 환경변수에서 path를 잡아준다.

3. cmd에서 기존 메이븐 프로젝트의 pom.xml 경로로 진입하여 gradle init 명령어를 친다.

최종 success 가 확인되면

4. sts에서 해당 프로젝트 우클릭 -> configure -> convert to gradle(STS) 를 선택한다.

5. 다시 우클릭 gradle(STS)에서 Task quick launcher 후 프로젝트를 실행하면된다.




