---
title: "Technical Portfolio"
permalink: /portfolio/
layout: single
classes: wide
author_profile: true
---

소프트웨어 엔지니어로서 제가 직접 설계하고 개발한 핵심 기술 이력과 아키텍처 포트폴리오입니다. 레거시 아키텍처의 한계를 극복하는 경험부터, 최신 프론트엔드 기술을 활용한 렌더링 최적화까지 다양한 스펙트럼의 프로젝트를 담고 있습니다.

---

## 🌟 [Latest] AI 에이전트 가상 오피스 모니터링 시스템
> **기간:** 2026.04 ~ 현재  
> **기술 스택:** React 18, Zustand, Konva.js, Tailwind CSS, TypeScript  
> **관련 포스트:** [AI 모니터링의 진화: 2D 픽셀 RPG 스타일 가상 오피스 구현기](/project/2026/04/11/bmad-ai-monitor/)

기존의 정적이고 딱딱한 텍스트 로그 기반 모니터링을 탈피하여, AI 에이전트들의 활동 내역을 **16-bit 픽셀 아트 스타일의 가상 사무실**에서 실시간으로 관찰할 수 있도록 구현한 차세대 대시보드입니다.

**핵심 기술 및 성과:**
- **Canvas 기반 고성능 렌더링**: 수많은 DOM 요소가 화면을 덮을 때 발생하는 브라우저 성능 저하를 방지하기 위해 `Konva.js` (Canvas API)를 채택, 60FPS의 매끄러운 렌더링 달성.
- **2.5D 입체감 (Y-Sorting Algorithm)**: 캐릭터와 가구 오브젝트의 Y좌표를 실시간으로 연산하여 정렬하는 로직을 직접 구현하여, 사물 뒤로 숨거나 앞으로 나오는 자연스러운 공간감을 제공.
- **AI 상태 동기화 및 자율 FSM**: 백엔드에서 전달되는 에이전트의 Task 상태(Working, Idle)를 `Zustand`로 실시간 동기화하고, 각 캐릭터가 상태에 맞춰 자율적으로 애니메이션을 수행하도록 FSM(Finite State Machine) 설계.

![AI Dashboard Preview](/assets/images/bmad-monitor-preview.png)

---

## 🏗 [Architecture] 대규모 트래픽 대응을 위한 MSA 마이그레이션
> **기간:** 2021 ~ 2022  
> **기술 스택:** Spring Boot, Spring Cloud Config, Apache Kafka, Kubernetes  
> **관련 포스트:** [MSA 전환 및 스터디 결산](/study/2021/07/24/msa_book_reading/)

성장하는 비즈니스와 급증하는 트래픽에 대응하기 위해, 단일 장애점(SPOF)의 위험이 높았던 기존 모놀리식(Monolithic) 백엔드 시스템을 마이크로서비스 아키텍처(MSA)로 성공적으로 분리한 프로젝트입니다.

**핵심 기술 및 성과:**
- **이벤트 기반 통신 (Kafka)**: 동기적 HTTP REST 호출로 인한 병목과 타임아웃 문제를 해결하기 위해, `Apache Kafka`를 도입하여 마이크로서비스 간 **비동기 이벤트 스트리밍** 아키텍처 구축.
- **데이터 최종 일관성 (Eventual Consistency)**: 분산 환경에서 발생하는 트랜잭션 불일치 문제를 Saga 패턴 및 이벤트 발행 보장을 통해 해결.
- **중앙화된 환경 통제**: `Spring Cloud Config`를 구축하여 수십 개의 컨테이너 환경 변수와 설정 파일들을 무중단으로 동적 업데이트 가능하도록 구성.

---

## 🔒 [Legacy Core] 고성능 보안 API 서버 및 데이터베이스 최적화
> **기간:** 2020 ~ 2021  
> **기술 스택:** Java, Spring Boot, Spring Security (OAuth2), JPA/Hibernate, Redis  
> **관련 포스트:** [Spring Boot 기반 OAuth2 API 구축기](/study/2020/08/15/Oauth2_api/)

데이터의 무결성과 글로벌 보안 표준을 준수하기 위해 밑바닥부터 견고하게 설계한 코어 백엔드 API 시스템입니다.

**핵심 기술 및 성과:**
- **Stateless 인증 아키텍처**: 세션 클러스터링의 한계를 벗어나고자 `OAuth 2.0` 인가 코드 메커니즘과 `JWT`를 결합하여 완벽한 무상태(Stateless) 기반의 글로벌 보안 아키텍처 구현.
- **ORM (JPA) 쿼리 튜닝**: 관계형 데이터베이스 모델링 및 JPA 지연 로딩(Lazy Loading) 환경에서 발생하는 `N+1` 쿼리 폭주 문제를 사전에 감지. `Fetch Join`과 `@BatchSize` 전략을 도입하여 대규모 데이터 조인 시의 레이턴시(Latency)를 80% 이상 단축.
- **Redis 글로벌 캐싱**: 반복적인 읽기 요청이 발생하는 메타데이터와 권한 정보를 `Redis`로 인메모리 캐싱 처리하여 RDBMS 부하 분산.

---

## 💡 [DevOps] CI/CD 파이프라인 및 컨테이너 오케스트레이션
> **기간:** 2021 ~ 현재  
> **기술 스택:** Docker, Kubernetes (K8s), Jenkins, GitHub Actions  

개발자가 오직 '코드 품질'에만 집중할 수 있도록 지속적 통합과 배포 프로세스를 자동화한 파이프라인 구축 사례입니다.

**핵심 기술 및 성과:**
- 소스 코드 Push 시 단위 테스트(TDD) -> 빌드 -> Docker 이미지 생성 -> 저장소 푸시까지의 전 과정을 자동화하여 일일 배포 사이클(Daily Release Cycle) 확립.
- `Kubernetes`를 활용한 컨테이너 오케스트레이션을 통해 트래픽 스파이크 시 파드(Pod) 자동 스케일아웃(HPA) 적용 및 무중단 롤링 배포(Rolling Update) 환경 구축.
