---
title: "Portfolio"
permalink: /portfolio/
layout: single
author_profile: true
classes: wide
---

## 👋 소개 (About Me)
안녕하세요. **소프트웨어의 아키텍처와 사용자 경험(UX)을 깊이 고민하는 Full-stack 엔지니어 이동옥(Dongok Lee)**입니다.

클라우드 기반의 대규모 분산 시스템(MSA)부터 프론트엔드의 화려한 인터랙션까지, 데이터가 흐르는 전체 라이프사이클을 설계하고 구현하는 것을 즐깁니다. 단순한 기능 구현을 넘어, 안정성과 효율성 그리고 개발 생산성을 극대화하기 위한 방법론 연구에 관심이 많습니다.

---

## 🛠️ 기술 스택 (Tech Stack)

### Backend & Architecture
- **Language**: Java 17+, Python, TypeScript
- **Frameworks**: Spring Boot 3.x, JPA/Hibernate, FastAPI, Node.js
- **Architecture**: MSA (Microservices Architecture), Domain-Driven Design (DDD), Event-Driven Architecture (Kafka)
- **Database**: PostgreSQL (pgvector), MySQL, Redis

### Frontend
- **Frameworks**: React 18, Vue 3, Nuxt, Flutter
- **State Management**: Zustand, Pinia, React Query
- **Styling / UI**: Tailwind CSS, Konva.js (Canvas API)

### DevOps & Infrastructure
- **Cloud & Container**: Docker, Kubernetes, AWS, Google Cloud Run
- **CI/CD**: Jenkins, GitHub Actions

---

## 🚀 주요 프로젝트 (Projects)

### 1. AI 기반 가상 오피스 모니터링 시스템 (2D Pixel RPG Style)
> 정적인 로그 대시보드를 탈피하여, AI 에이전트의 상태를 실시간 16-bit 픽셀 가상 오피스로 시각화한 모니터링 시스템

- **사용 기술**: React, Zustand, Konva.js, Tailwind CSS, TypeScript
- **핵심 역할 및 성과**:
  - `Konva.js` 기반의 60FPS 2.5D Y-Sorting 알고리즘 구현으로 자연스러운 입체 오피스 공간 렌더링.
  - FSM(Finite State Machine) 설계 기반의 자율 에이전트 애니메이션(Idle, Walking, Working) 및 서버 상태 실시간 동기화.
  - 개발 생산성을 극대화하는 자체 방법론을 활용하여 신속한 프로토타이핑 및 아키텍처 안정화.

### 2. MSA (Microservices Architecture) 전환 및 최적화
> 모놀리식 시스템의 한계를 극복하기 위한 대용량 트래픽 대응 마이크로서비스 전환 프로젝트

- **사용 기술**: Spring Boot, Spring Cloud Config, Apache Kafka, Kubernetes
- **핵심 역할 및 성과**:
  - `Spring Cloud Config`를 활용한 중앙 집중형 환경 설정 서버 구축.
  - `Kafka` 기반의 이벤트 스트리밍으로 서비스 간 결합도(Coupling)를 낮추고 데이터 최종 일관성(Eventual Consistency) 확보.
  - 대용량 트래픽 상황에서의 병목 현상 제거 및 컨테이너 오케스트레이션(K8s) 적용.

### 3. 고성능 API 서버 및 OAuth 2.0 보안 인증 시스템
> 엔터프라이즈급 보안이 적용된 확장 가능한 RESTful API 서버 설계

- **사용 기술**: Spring Boot, OAuth2, JPA/Hibernate, Redis
- **핵심 역할 및 성과**:
  - `OAuth 2.0` 및 JWT 토큰 기반의 무상태(Stateless) 글로벌 인증 아키텍처 구현.
  - `JPA N+1` 문제 해결 및 Fetch Join, Batch Size 조정으로 조회 쿼리 성능 대폭 향상.
  - Redis를 활용한 글로벌 세션 캐싱 및 실시간 동시성 제어 적용.

---

## 📚 철학과 방법론 (Philosophy)

1. **테스트 주도 개발 (TDD)**: 코드가 기대한 대로 동작함을 검증하는 것을 넘어, 아키텍처 설계의 나침반으로 TDD를 적극 활용합니다.
2. **지속 가능한 아키텍처**: 언제든지 비즈니스 요구사항 변화에 대응할 수 있는 결합도 낮고 응집도 높은 설계를 지향합니다.
3. **사용자 중심주의 (User-Centric)**: 백엔드 API 설계부터 프론트엔드의 마이크로 인터랙션까지, 결국 모든 기술은 사용자 경험을 극대화하기 위해 존재한다고 믿습니다.

---

## 📎 첨부 자료 (Attachments)
더 자세한 이력과 프로젝트 스토리는 아래 로컬 문서를 참조해 주시기 바랍니다.

- [📄 다운로드: 이력서_이동옥.pdf](/assets/docs/resume.pdf) *(업데이트 예정)*
- [📄 다운로드: 포트폴리오-개인프로젝트.pdf](/assets/docs/portfolio.pdf) *(업데이트 예정)*

---
*If you have any questions, feel free to reach out via GitHub or Email.*
