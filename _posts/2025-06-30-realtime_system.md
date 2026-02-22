---
layout: single
# 포스트제목
title: "포트폴리오 - 통합 대시보드 및 실시간 모니터링 시스템 구축 리뷰"
# 포스팅 작성자
author: ldk
# 포스팅 공개일 - 정렬기준 포스팅날짜순서에 따라 기재됨.(주의 미래날짜는 기입X)
date: 2025-06-29 02:00:00 +0900
categories:
  - 대시보드
tags:
  - API연동
  - 자바개발
  - SpringBoot
  - WebSocket
  - PostgreSQL
  - Troubleshooting
author_profile: true
toc: true
toc_sticky: true
toc_label: "On this page"
---

## 📌 프로젝트 개요

다양한 오픈 API와 시스템 메트릭을 한 화면에서 직관적으로 시각화하고, 실시간 통신 및 상태 모니터링 기능을 제공하는 **하이브리드 웹 기반의 통합 대시보드 시스템**입니다. 

단순한 기능 구현을 넘어, 모듈화와 확장성을 고려한 아키텍처 설계와 엔터프라이즈 환경에서의 데이터 마이그레이션(Oracle ➔ PostgreSQL) 경험을 담고 있습니다.

* **GitHub Repository:** [https://github.com/ldk-hub/DashBoard](https://github.com/ldk-hub/DashBoard)

---

## 🛠️ Tech Stack

분야별로 적용된 핵심 기술 스택은 다음과 같습니다.

| Category | Skills & Tools |
| :--- | :--- |
| **Backend** | `Java 8`, `Spring Boot`, `Spring Security`, `JPA (Hibernate)`, `MyBatis`, `WebSocket` |
| **Database** | `PostgreSQL` (기존 `Oracle`에서 이관 완료) |
| **Frontend** | `TUI-GRID`, `amCharts4`, `Bootstrap`, `Gentelella` |
| **Infra & API** | `Kakao OAuth2`, `Kakao Maps API`, `Sigar API`, `SpotBugs` |

---

## 💡 Key Engineering Highlights

단순한 화면 구성을 넘어, 백엔드 엔지니어로서 성능 최적화와 시스템 안정성을 높이기 위해 고민했던 핵심 성과입니다.

### 1. 이기종 DB 마이그레이션 및 ORM 패러다임 전환
* **DB 마이그레이션:** 라이선스 비용 절감 및 오픈소스 생태계 활용을 위해 기존 Oracle DB 환경을 PostgreSQL로 전면 이관했습니다. 이 과정에서 최신 JDBC 드라이버 적용 및 버전별 호환성 버그에 선제적으로 대응했습니다.
* **ORM 전환 (MyBatis ➔ JPA):** 레거시 쿼리 매핑 방식의 한계를 극복하고자 JPA로 전환 작업을 수행했습니다. 멀티차트 데이터 조회 및 로그인 도메인부터 단계적으로 전환하며, 연관 관계 맵핑 시 N+1 문제를 방지하기 위해 `Fetch Join` 및 `Lazy` 로딩 옵션을 적용했습니다.

### 2. 실시간 데이터 파이프라인 및 모니터링 구축
* **서버 자원 실시간 계측:** `Sigar API`를 연동하여 Host PC 및 서버의 리소스(CPU, Memory 등) 사용률을 실시간으로 수집합니다.
* **데이터 시각화:** 수집된 메트릭을 `amCharts4`를 활용해 누적형 멀티라인 차트 및 게이지 차트로 도식화하여 직관적인 모니터링 환경을 구축했습니다.
* **웹소켓 실시간 통신:** Spring Boot `WebSocket`을 도입하여 양방향 실시간 룸(Room) 기반 채팅 기능을 구현 중입니다. (현재 70% 완료)

### 3. 보안(Security) 체계 고도화 및 소셜 인증 연동
* **인증 아키텍처:** Spring Security의 Principal 객체를 활용한 회원가입, 세션 처리, 권한 관리 로직을 구현했으며, SMTP 기반 비밀번호 찾기 기능을 연동했습니다.
* **OAuth2 통합:** Kakao OAuth2 REST API를 연동하여 인증 코드 및 Access Token 발급, 카카오 유저 정보 내부 매핑을 통한 자동 로그인 처리를 구현했습니다.
* **취약점 개선:** `SpotBugs`를 활용한 정적 코드 분석으로 6건의 자바 소스 취약점을 발굴해 조치했으며, 해외 IP 차단용 Interceptor를 추가하여 보안성을 강화했습니다.

---

## 🚧 Troubleshooting (문제 해결 과정)

기획 및 개발 과정에서 직면했던 기술적 난제들과 이를 해결해 나간 과정입니다.

### ❓ Issue 1: 서드파티 API 의존성 및 CORS 충돌 해결
* **상황:** 기존 사용 중이던 외부 날씨 API 서비스가 예고 없이 종료되었고, Kakao API 업데이트로 인해 브라우저 단에서 CORS 에러가 발생하여 렌더링이 중단되었습니다.
* **해결:** 외부 API 호출부를 별도의 서비스 레이어로 캡슐화(모듈화)하여 API 제공자가 변경되더라도 비즈니스 로직 수정이 최소화되도록 아키텍처를 개선했습니다. CORS 이슈는 Spring Boot 서버를 Proxy로 활용하여 우회 호출하는 방식으로 선제적 대응을 완료했습니다.

### ❓ Issue 2: 대규모 DOM 조작에 따른 프론트엔드 성능 저하 
* **상황:** 한 화면에 다수의 실시간 차트, TUI-GRID, 지도(교통/자전거도로) 데이터가 렌더링되면서 성능 저하가 발생했습니다. 또한, 다크 테마 적용 시 일부 레이아웃이 깨지는 현상이 있었습니다.
* **해결:** UI 컴포넌트의 불필요한 재렌더링을 방지하기 위해 데이터 캐싱 등 라이브러리 최적화 옵션을 적용했습니다. 테마 버그의 경우 CSS Variables를 활용한 렌더링 트리 리팩토링으로 안정적인 다크/라이트 모드 전환을 구현했습니다.

### ❓ Issue 3: OS별 파일 처리 경로 상이 문제
* **상황:** 이미지 업로드 및 팝업 호출 로직 구현 중, 로컬(Windows)과 운영 서버(Linux)의 파일 시스템 경로 차이로 인해 이미지가 정상 로드되지 않았습니다.
* **해결:** 하드코딩된 절대 경로를 제거하고, `System.getProperty("os.name")`과 Spring `ResourceLoader`를 활용해 실행 환경의 OS를 동적으로 판별하여 경로를 분기 처리하도록 로직을 개선했습니다.

---

## 🖼️ UI Gallery & Key Features

> 💡 시스템의 전반적인 동작과 핵심 기능들을 한눈에 확인할 수 있는 스크린샷 갤러리입니다.

### 대시보드 메인 & 실시간 모니터링
실시간 시스템 자원 사용률 및 교통 현황을 대시보드 형태로 직관적으로 제공합니다.
*(다크 테마가 적용된 안정적인 반응형 UI)*
![Main Dashboard](https://user-images.githubusercontent.com/12209348/71539042-5dd14980-2979-11ea-973a-dc58d91aa385.gif)

### Kakao OAuth 소셜 로그인 연동
Spring Security 기반의 안전한 세션 관리와 카카오 소셜 로그인을 통합하여 사용자 편의성을 높였습니다.
![Social Login](https://user-images.githubusercontent.com/12209348/93009605-071aa700-f5be-11ea-919d-d857eb2b3f91.gif)

### 동적 데이터 제어 (TUI-GRID)
TUI-GRID API 및 Datatables를 활용하여 복잡한 데이터를 쉽게 제어하고 수정할 수 있는 어드민 기능을 제공합니다.
![Data Edit](https://user-images.githubusercontent.com/12209348/62841157-bca26900-bcdf-11e9-894a-2d77cfc81e2f.png)

### 웹소켓 실시간 채팅 기능 (진행 중)
룸(Room) 기반의 실시간 양방향 통신 채팅 인터페이스입니다.
![Chatting](https://user-images.githubusercontent.com/12209348/170851816-fd207a88-1003-4120-bb40-73d88d1864f4.gif)
