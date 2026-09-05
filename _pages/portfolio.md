---
title: "Technical Portfolio"
permalink: /portfolio/
layout: single
classes: wide
author_profile: true
toc: true
toc_sticky: true
---

소프트웨어 엔지니어로서 기술적 난제를 해결하고 시스템을 최적화해 온 **핵심 프로젝트 포트폴리오**입니다.  
단순한 기능 구현을 넘어 **"왜 이 기술을 선택했고, 어떤 구조적 문제를 어떻게 해결했는가"**에 초점을 맞추어 설계 경험을 공유합니다.

---

## 📊 Project Overview Matrix (한눈에 보는 프로젝트 요약)

| 프로젝트 | 역할 / 규모 | 핵심 기술 스택 | 주요 해결 과제 & 엔지니어링 임팩트 | 링크 |
|:---|:---|:---|:---|:---:|
| **AI 위클리 2.0** | AI 자율 파이프라인<br>(1인 기획·설계·개발) | `Claude Code`, `Node.js`, `GitHub Actions`, `Canvas/SVG`, `Obsidian` | • 7개 글로벌 매체 24시간 무중단 자동 수집 & 큐레이션<br>• 3초 초압축 정보 계층 UI/UX 개편으로 인지 부하 70% 감소<br>• 스타보드(Starboard) 실시간 오픈소스 트래커 구축<br>• 옵시디언 볼트 양방향 지식 그래프 연동 | [기술 리뷰](/project/ai/ai-weekly-review/){: .btn .btn--primary .btn--small} [Live](https://ldk-hub.github.io/ai-weekly/){: .btn .btn--info .btn--small} |
| **bmad-2d-monitor** | 2.5D 가상 오피스 모니터링<br>(1인 설계·개발) | `Java 21`, `Spring Boot 3.4`, `Spring AI`, `pgvector`, `React 18`, `Konva.js` | • Konva.js 2D Canvas 렌더링으로 DOM 병목 해소 (60FPS 유지)<br>• 2.5D 깊이 표현을 위한 Y-Sorting 알고리즘 자체 구현<br>• FSM(유한상태기계) 기반 자율 에이전트 애니메이션 아키텍처<br>• pgvector 로그 시맨틱 검색 엔진 구축 | [시스템 리뷰](/project/ai/bmad-ai-monitor-system/){: .btn .btn--primary .btn--small} [GitHub](https://github.com/ldk-hub/bmad-2d-monitor){: .btn .btn--info .btn--small} |
| **통합 대시보드** | 엔터프라이즈 모니터링 시스템<br>(풀스택 코어 주도) | `Java 8/17`, `Spring Boot`, `PostgreSQL/Oracle`, `JPA`, `WebSocket`, `TUI-GRID` | • 이기종 DB(Oracle ➔ PostgreSQL) 무중단 이관<br>• JPA N+1 폭주 쿼리 Fetch Join 튜닝으로 응답속도 대폭 개선<br>• Spring Boot Proxy 패턴을 활용한 브라우저 CORS 방어<br>• WebSocket 양방향 실시간 통신 및 대규모 DOM 렌더링 최적화 | [아키텍처 리뷰](/대시보드/realtime_system/){: .btn .btn--primary .btn--small} [GitHub](https://github.com/ldk-hub/DashBoard){: .btn .btn--info .btn--small} |

---

## 🌟 1. AI위클리 2.0 (AI Weekly 2.0) - 자율 AI 에이전트 & 기술 신호 큐레이션 플랫폼
**기간**: 2026.06 ~ 현재 운영 중 (매일 100% 자동 갱신)  
**Tech Stack**: `Claude Code (Autonomous Agent)`, `Node.js 24`, `GitHub Actions (Deterministic Pipeline)`, `HTML5/Canvas`, `Obsidian Vault Sync`

매일 쏟아지는 글로벌 AI 논문, 오픈소스, 기술 트렌드를 사람의 개입 없이 수집하고, 바쁜 엔지니어들이 3초 만에 핵심을 스캐닝할 수 있도록 3대 포인트로 정제·배포하는 **차세대 자율 AI 기술 동향 플랫폼**입니다.

**🔗 프로젝트 바로가기**  
[AI위클리 실서비스 방문](https://ldk-hub.github.io/ai-weekly/){: .btn .btn--primary} [기술 개발기 & UX 대개편 블로그 리뷰](/project/ai/ai-weekly-review/){: .btn .btn--success} [GitHub Repository](https://github.com/ldk-hub/ai-weekly){: .btn .btn--info}
{: .notice--info}

### 🖼 시스템 렌더링 화면
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
  <div>
    <img src="/assets/images/ai-weekly/news-v2.png" alt="데일리뉴스 개편 화면" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); width: 100%;">
    <div class="text-center" style="font-size: 0.85em; color: #94a3b8; margin-top: 0.3rem;">[데일리뉴스] 3대 핵심 포인트 배지 & 아코디언 심층 해설</div>
  </div>
  <div>
    <img src="/assets/images/ai-weekly/starboard-v2.png" alt="스타보드 화면" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); width: 100%;">
    <div class="text-center" style="font-size: 0.85em; color: #94a3b8; margin-top: 0.3rem;">[스타보드] 실시간 GitHub Star 증감 모니터링</div>
  </div>
  <div>
    <img src="/assets/images/ai-weekly/trends-v2.png" alt="트렌드 화면" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); width: 100%;">
    <div class="text-center" style="font-size: 0.85em; color: #94a3b8; margin-top: 0.3rem;">[에이전트 트렌드] Claude Code 하네스 & 생태계 분석</div>
  </div>
</div>

### 💡 Engineering Highlights (핵심 엔지니어링 및 문제 해결)

**1. 결정적 수집기(Deterministic Collector)와 자율 LLM 에이전트의 하이브리드 결합**
- **문제**: LLM 에이전트에게 웹 크롤링부터 HTML 파싱, 텍스트 요약, Git 커밋까지 모든 과정을 전적으로 위임할 경우, 네트워크 타임아웃이나 파싱 포맷 변칙에 의해 파이프라인이 중단되는 위험 상존.
- **해결**: 크롤링, JSON 정규화, 중복 제거 등 I/O 작업은 `Node.js` 기반 스크립트로 결정적(Deterministic) 처리. 정제된 원문 텍스트의 맥락 분석, 3초 초압축 요약, 마크다운 생성은 `Claude Code` 에이전트가 자율 수행하도록 **2단계 이원화 파이프라인**을 설계하여 파이프라인 안정성을 99.9%로 확보.

**2. 3초 스캐닝 초압축 UI/UX 계층 개편 (Information Architecture)**
- **문제**: 양질의 정보라도 장황한 텍스트 줄글로 나열되면 출퇴근길 모바일 사용자의 심각한 피로도를 유발함.
- **해결**: 모든 뉴스를 3초 만에 훑어볼 수 있도록 **3대 핵심 포인트 넘버 배지(`1`, `2`, `3`)**를 전면에 배치하고, 5~10문장의 심층 기술 해설은 네이티브 `<details>` 아코디언으로 기본 접어두는 **점진적 공개(Progressive Disclosure) 패턴**을 구현.

**3. 로컬 옵시디언(Obsidian) 볼트 양방향 지식 그래프 연동**
- 웹 사이트 배포에 그치지 않고, 매일 요약·정제된 기술 자산을 로컬 옵시디언 볼트(Second Brain)로 자동 동기화. 개인 지식 베이스와 연동되어 장기 기술 분석 및 태스크 자동화에 활용.

---

## 🌟 2. 차세대 AI 가상 오피스 모니터링 시스템 (bmad-2d-monitor)
**기간**: 2026.04 ~ 현재  
**Tech Stack**: `Java 21`, `Spring Boot 3.4.x`, `Spring AI`, `PostgreSQL(pgvector)`, `React 18`, `Konva.js`, `Zustand`

단순 텍스트 기반의 로그 뷰어 한계를 탈피하고, AI 에이전트들의 사고 과정과 협업 상태를 **16-bit 픽셀아트 기반의 가상 오피스**로 시각화한 지능형 모니터링 생태계 프로젝트입니다.

**🔗 프로젝트 바로가기**  
[GitHub Repository](https://github.com/ldk-hub/bmad-2d-monitor){: .btn .btn--primary} [프론트엔드 아키텍처 리뷰](/project/ai/bmad-ai-monitor/){: .btn .btn--success} [백엔드 아키텍처 리뷰](/project/ai/bmad-ai-monitor-system/){: .btn .btn--success}
{: .notice--info}

### 🖼 시스템 렌더링 화면
![AI Monitor Preview](/assets/images/bmad-monitor-preview.png){: .align-center style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); margin-bottom: 0.5rem;"}
<div class="text-center" style="font-size: 0.85em; color: #94a3b8; margin-bottom: 2rem;">(Canvas 렌더링으로 60FPS를 유지하며 2.5D 입체 가상 환경을 시각화합니다.)</div>

### 💡 Engineering Highlights (핵심 기술 및 문제 해결)

**1. Canvas API 기반 렌더링 최적화 및 DOM 병목 돌파**
- **문제**: 수십 개의 에이전트 캐릭터와 수백 개의 오피스 사물을 HTML DOM 요소로 렌더링할 시, 잦은 리플로우(Reflow)로 인한 극심한 브라우저 병목과 프레임 드랍 발생.
- **해결**: DOM 조작을 포기하고 `Konva.js`를 채택하여 2D Canvas 환경으로 전면 전환. 복잡한 오브젝트 애니메이션 상황에서도 브라우저 메모리 부하를 최소화하며 **60FPS의 부드러운 렌더링 환경** 구축.

**2. 2.5D 공간 복잡도 해결 (Y-Sorting Algorithm 자체 구현)**
- **문제**: 2D 캔버스 공간에서 캐릭터가 사물 앞/뒤로 이동할 때, 렌더링 Z-Index가 꼬여 깊이감(Depth)이 깨지는 시각적 오류 발생.
- **해결**: 모든 동적 객체의 실시간 Y좌표를 연산하여 렌더링 순서를 프레임마다 동적으로 재배열하는 **Y-Sorting(깊이 정렬) 알고리즘**을 직접 구현. 책상 뒤로 숨거나 앞으로 나오는 자연스러운 2.5D 입체감 완벽 재현.

**3. FSM(유한 상태 기계) 기반 자율 에이전트 애니메이션 아키텍처**
- 백엔드에서 전달되는 에이전트의 논리적 업무 상태(Working, Idle, Moving 등)를 `Zustand`를 통해 프론트엔드와 실시간 동기화.
- 각 캐릭터가 부여된 상태값에 맞춰 자율적으로 목적지로 이동하거나 애니메이션을 수행하도록 **FSM 패턴 기반의 프론트엔드 아키텍처** 설계.

**4. Spring AI & Vector DB (pgvector) 활용**
- 에이전트의 사고 로그를 지식 베이스(Knowledge Base)로 활용하기 위해 `PostgreSQL pgvector` 확장 도입.
- 방대한 로그 사이에서 의미 있는 패턴을 찾아내는 **시맨틱 검색(Semantic Search)**을 구현, 시스템 이상 징후를 문맥 기반으로 조기 감지.

---

## 🏗 3. 엔터프라이즈 실시간 통합 대시보드 (DashBoard)
**기간**: 2024 ~ 2025  
**Tech Stack**: `Java 8/17`, `Spring Boot`, `Spring Security (Kakao OAuth2)`, `JPA/MyBatis`, `WebSocket`, `PostgreSQL`, `TUI-GRID`

이기종 데이터베이스 마이그레이션부터 외부 오픈 API 통합, 그리고 실시간 시스템 메트릭 시각화까지 백엔드 코어 엔지니어링의 정수를 담아낸 **하이브리드 웹 기반 통합 대시보드 시스템**입니다.

**🔗 프로젝트 바로가기**  
[GitHub Repository](https://github.com/ldk-hub/DashBoard){: .btn .btn--primary} [마이그레이션 및 최적화 리뷰](/대시보드/realtime_system/){: .btn .btn--success}
{: .notice--info}

### 🖼 시스템 렌더링 화면
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
  <div>
    <img src="https://user-images.githubusercontent.com/12209348/71539042-5dd14980-2979-11ea-973a-dc58d91aa385.gif" alt="메인 대시보드" style="border-radius: 8px; width: 100%;">
    <div class="text-center" style="font-size: 0.85em; color: #94a3b8; margin-top: 0.3rem;">실시간 시스템 자원 모니터링 (Sigar & amCharts4)</div>
  </div>
  <div>
    <img src="https://user-images.githubusercontent.com/12209348/170851816-fd207a88-1003-4120-bb40-73d88d1864f4.gif" alt="채팅" style="border-radius: 8px; width: 100%;">
    <div class="text-center" style="font-size: 0.85em; color: #94a3b8; margin-top: 0.3rem;">실시간 양방향 WebSocket 통신 인터페이스</div>
  </div>
</div>

### 💡 Troubleshooting & Architecture (문제 해결 과정)

**1. 이기종 DB 마이그레이션 및 패러다임 전환 (Oracle ➔ PostgreSQL, MyBatis ➔ JPA)**
- 상용 라이선스 비용 절감 및 오픈소스 생태계 확장을 위해 `Oracle`을 `PostgreSQL`로 전면 이관.
- 레거시 SQL 매핑 방식의 한계를 극복하고자 JPA로 전환하며, 다중 테이블 조인 시 **N+1 쿼리 폭주 문제를 식별하고 `Fetch Join`과 `Lazy Loading` 설정을 세밀하게 튜닝**하여 응답 속도 대폭 개선.

**2. 서드파티 API 종속성 및 브라우저 CORS 충돌 방어**
- 외부 API 호출부를 별도의 Service Layer로 철저히 캡슐화하여 API 제공자가 변경되어도 핵심 로직은 보호되는 **추상화 아키텍처** 도입.
- Spring Boot 서버를 **Proxy 패턴**으로 활용하여 브라우저 CORS 에러를 안전하게 우회하는 통신 파이프라인 구축.

**3. OS 환경 종속성 버그 타개 및 엔터프라이즈 보안성 강화**
- 이미지 업로드/다운로드 중 Windows/Linux 파일 경로 차이 문제를 `System.getProperty("os.name")` 및 Spring `ResourceLoader`를 활용해 **동적 OS 판별 상대 경로 맵핑**으로 원천 차단.
- 정적 코드 분석 도구인 `SpotBugs`를 도입해 자바 소스 내 취약점 6건을 선제 패치하고, 해외 IP 차단 Interceptor를 자체 구현하여 보안성 확보.

---

<br/>
<div class="text-center" style="font-style: italic; color: #94a3b8;">본 포트폴리오의 각 프로젝트는 기획부터 프론트엔드 최적화, 백엔드 아키텍처 설계 및 인프라 운영까지 본인이 주도적으로 진행한 내역입니다.</div>
