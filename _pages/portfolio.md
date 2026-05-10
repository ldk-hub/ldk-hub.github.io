---
title: "Technical Portfolio"
permalink: /portfolio/
layout: single
classes: wide
author_profile: true
---

소프트웨어 엔지니어로서 기술적 난제를 해결하고 시스템을 최적화해 온 **핵심 프로젝트 포트폴리오**입니다.  
단순한 기능 구현을 넘어 **"왜 이 기술을 선택했고, 어떤 구조적 문제를 어떻게 해결했는가"**에 초점을 맞추어 설계 경험을 공유합니다.

---

## 🌟 1. 차세대 AI 가상 오피스 모니터링 시스템 (bmad-2d-monitor)
**기간**: 2026.04 ~ 현재  
**Tech Stack**: `Java 21`, `Spring Boot 3.4.x`, `Spring AI`, `PostgreSQL(pgvector)`, `React 18`, `Konva.js`, `Zustand`

단순 텍스트 기반의 로그 뷰어 한계를 탈피하고, AI 에이전트들의 사고 과정과 협업 상태를 **16-bit 픽셀아트 기반의 가상 오피스**로 시각화한 지능형 모니터링 생태계 프로젝트입니다.

**🔗 프로젝트 바로가기**  
[GitHub Repository](https://github.com/ldk-hub/bmad-2d-monitor){: .btn .btn--primary} [프론트엔드 아키텍처 리뷰](/project/ai/bmad-ai-monitor/){: .btn .btn--success} [백엔드 아키텍처 리뷰](/project/ai/bmad-ai-monitor-system/){: .btn .btn--success}
{: .notice--info}

### 🖼 시스템 렌더링 화면
![AI Monitor Preview](/assets/images/bmad-monitor-preview.png){: .align-center style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 0.5rem;"}
<div class="text-center" style="font-size: 0.9em; color: gray; margin-bottom: 2rem;">(위 뷰어는 DOM이 아닌 Canvas 렌더링으로 60FPS를 유지하며 2.5D 입체 환경을 시각화합니다.)</div>

### 💡 Engineering Highlights (핵심 기술 및 문제 해결)

**1. Canvas API 기반 렌더링 최적화 및 DOM 병목 돌파**
- **문제**: 수십 개의 에이전트 캐릭터와 수백 개의 오피스 사물(책상, 화분 등)을 HTML DOM 요소로 렌더링할 시, 잦은 리플로우(Reflow)로 인한 극심한 브라우저 병목과 프레임 드랍 발생.
- **해결**: DOM 조작을 포기하고 `Konva.js`를 채택하여 2D Canvas 환경으로 전면 전환. 복잡한 오브젝트 애니메이션 상황에서도 브라우저 메모리 부하를 최소화하며 **60FPS의 부드러운 렌더링 환경**을 성공적으로 구축.

**2. 2.5D 공간 복잡도 해결 (Y-Sorting Algorithm 자체 구현)**
- **문제**: 2D 캔버스 공간에서 캐릭터가 사물 앞/뒤로 이동할 때, 렌더링 Z-Index가 꼬여 입체감(Depth)이 완전히 깨지는 시각적 오류 발생.
- **해결**: 모든 동적 객체의 실시간 Y좌표를 연산하여 렌더링 순서를 프레임마다 동적으로 재배열하는 **Y-Sorting(깊이 정렬) 알고리즘**을 직접 구현. 이를 통해 캐릭터가 책상 뒤로 숨거나 앞으로 나오는 자연스러운 2.5D 입체감을 완벽히 재현.

**3. FSM(유한 상태 기계) 기반 자율 에이전트 애니메이션 아키텍처**
- 백엔드에서 전달되는 에이전트의 논리적 업무 상태(Working, Idle, Moving 등)를 상태 관리 라이브러리인 `Zustand`를 통해 프론트엔드와 실시간 동기화.
- 단순한 상태 표시를 넘어, 각 캐릭터가 현재 부여된 상태값에 맞춰 자율적으로 목적지로 이동하거나 관련 애니메이션을 수행하도록 **FSM 패턴 기반의 프론트엔드 아키텍처** 설계.

**4. Spring AI & Vector DB (pgvector) 활용**
- 단순 관계형 데이터 저장을 넘어, 에이전트의 사고 로그를 지식 베이스(Knowledge Base)로 활용하기 위해 `PostgreSQL pgvector` 확장 도입.
- 방대한 로그 사이에서 의미 있는 패턴을 찾아내는 **시맨틱 검색(Semantic Search)**을 구현, 시스템 이상 징후를 문맥 기반으로 조기 감지하는 아키텍처 수립.

---

## 🏗 2. 엔터프라이즈 실시간 통합 대시보드 (DashBoard)
**기간**: 2024 ~ 2025  
**Tech Stack**: `Java 8`, `Spring Boot`, `Spring Security (Kakao OAuth2)`, `JPA/MyBatis`, `WebSocket`, `PostgreSQL`, `TUI-GRID`

이기종 데이터베이스 마이그레이션부터 외부 오픈 API 통합, 그리고 실시간 시스템 메트릭 시각화까지 백엔드 코어 엔지니어링의 정수를 담아낸 **하이브리드 웹 기반 통합 대시보드 시스템**입니다.

**🔗 프로젝트 바로가기**  
[GitHub Repository](https://github.com/ldk-hub/DashBoard){: .btn .btn--primary} [마이그레이션 및 최적화 리뷰](/대시보드/realtime_system/){: .btn .btn--success}
{: .notice--info}

### 🖼 시스템 렌더링 및 인터랙션 화면

**1. 대시보드 메인 & 실시간 시스템 자원 모니터링**  
*(Sigar API 및 amCharts4를 활용한 실시간 메트릭 모니터링 렌더링)*
![Main Dashboard](https://user-images.githubusercontent.com/12209348/71539042-5dd14980-2979-11ea-973a-dc58d91aa385.gif){: .align-center style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 2rem;"}

**2. 실시간 양방향 WebSocket 채팅 인터페이스**
![Chatting](https://user-images.githubusercontent.com/12209348/170851816-fd207a88-1003-4120-bb40-73d88d1864f4.gif){: .align-center style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 2rem;"}

**3. Kakao OAuth2 소셜 로그인 통합 연동**
![Social Login](https://user-images.githubusercontent.com/12209348/93009605-071aa700-f5be-11ea-919d-d857eb2b3f91.gif){: .align-center style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 2rem;"}


### 💡 Troubleshooting & Architecture (문제 해결 과정)

**1. 이기종 DB 마이그레이션 및 패러다임 전환 (Oracle ➔ PostgreSQL, MyBatis ➔ JPA)**
- **마이그레이션**: 상용 라이선스 비용 절감 및 오픈소스 생태계 확장을 위해 기존 `Oracle` 환경을 `PostgreSQL`로 전면 이관. 이 과정에서 JDBC 버전별 호환성 버그에 선제적으로 대응.
- **ORM 최적화 (N+1 문제 해결)**: 레거시 SQL 매핑 방식의 한계를 극복하고자 JPA로 전환. 다중 테이블 조인이 필요한 복잡한 데이터 조회 시 **JPA 특유의 N+1 쿼리 폭주 문제를 식별하고, `Fetch Join`과 `Lazy Loading` 설정을 세밀하게 튜닝**하여 응답 속도를 대폭 개선.

**2. 서드파티 API 종속성 및 브라우저 CORS 충돌 완벽 방어**
- **문제**: 기존 날씨 API 서비스의 돌발적인 종료 및 Kakao API 연동 중 브라우저 단에서 심각한 CORS 에러가 발생하여 렌더링 셧다운.
- **해결**: 외부 API 호출부를 별도의 Service Layer로 철저히 캡슐화하여, API 제공자가 변경되어도 핵심 로직은 수정되지 않도록 **추상화 아키텍처** 도입. 또한 Spring Boot 서버를 **Proxy 패턴**으로 활용해 브라우저 CORS를 안전하게 우회하는 통신 파이프라인 구축.

**3. 대규모 DOM 조작에 따른 렌더링 성능 최적화**
- **문제**: 한 화면에 TUI-GRID, 수많은 다중 amCharts, 지도 API가 동시에 마운트되며 심각한 프레임 드랍(렉) 현상 발생.
- **해결**: 차트 및 그리드 UI 컴포넌트의 데이터 캐싱 및 렌더링 지연(Lazy 렌더링) 기법을 튜닝하여 불필요한 재렌더링 차단. 

**4. OS 환경 종속성 버그 타개 및 보안성 강화 (Robustness)**
- **문제**: 이미지 업로드/다운로드 로직 구현 중 로컬(Windows)과 운영 서버(Linux)의 파일 시스템 절대 경로 차이로 인해 서비스 장애 발생.
- **해결**: `System.getProperty("os.name")`과 Spring `ResourceLoader`를 활용해 **동적으로 실행 환경 OS를 판별**하고 상대 경로를 맵핑하도록 로직을 재설계하여 경로 장애 원천 차단.
- 정적 코드 분석 도구인 `SpotBugs`를 도입해 자바 소스 내 취약점 6건을 선제적 패치하고, 해외 IP 차단 Interceptor를 자체 구현하여 엔터프라이즈급 보안 수준 확보.

---

<br/>
<div class="text-center" style="font-style: italic; color: gray;">본 포트폴리오의 각 프로젝트는 기획부터 프론트엔드 최적화, 백엔드 아키텍처 설계 및 인프라 운영까지 본인이 주도적으로 진행한 내역입니다.</div>
