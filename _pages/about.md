---
layout: single                 
title: "개발자 소개"
permalink: /about/
excerpt: "About Me - Backend Tech Lead & AX Practitioner (10 Years)"
toc: true                      
toc_sticky: true             
author_profile: true          
classes: wide                  
---

# 👨‍💻 개발자 소개

**Backend Tech Lead & AX Practitioner (10 Years)**  
일 50만 건 규모의 트래픽을 처리하는 글로벌 SaaS 플랫폼을 안정적으로 설계·운영해 온 10년 차 백엔드 엔지니어 이동옥입니다.  
서비스 성장 단계에 맞춘 도메인 분리(모놀리식 → MSA 전환)와 데이터 조회 병목 해결, 장애 복원력 확보에 집중해 왔습니다. 최근에는 실무 워크플로우에 AI를 깊이 통합하는 **AX(AI Transformation) 개발 방법론**과 **4단계 Quality Gate**를 주도하여 개발 생산성과 아키텍처 신뢰성을 혁신하고 있습니다.

---

## 💡 핵심 역량 & 기술 스택 (Core Competencies)

- **Backend & Architecture**: Java 17/21, Spring Boot 3.x, Spring Batch, JPA(QueryDSL), MSA, Kafka, Redis, RESTful API
- **AX & AI Engineering (SDLC 혁신)**: Spec-Driven AI Prompting, Context Engineering, 4단계 Quality Gate (Spec → TDD → AI Code Gen → Deep Review), Spring AI, PostgreSQL(`pgvector`), Claude Code, Cursor, Antigravity
- **Traffic & Performance Tuning**: 일 50만 건 피크 트래픽 대응, Redis 캐시 계층화 (RDB 부하 50% 분산), HikariCP 커넥션 풀 튜닝 & 슬로우 쿼리 커버링 인덱스 (처리 속도 60% 향상), DB 트랜잭션(@Transactional) 격리 최적화
- **Database & Storage**: PostgreSQL, MySQL, MariaDB, Oracle, Redis, AWS RDS
- **DevOps & Observability**: AWS (EC2, RDS, ElastiCache, S3), MS Azure, Docker, CI/CD (GitHub Actions, Jenkins), Prometheus, Grafana, Spring Actuator
- **Frontend & Modern Web**: TypeScript, React, Vue.js, Zustand
- **Engineering Culture & Leadership**: TDD (JUnit 5, Mockito), 정적 분석(SpotBugs), 엄격한 코드 리뷰, PR 규칙 수립, 기술 부채 관리 로드맵

---

## 🧑‍💼 주요 경력 (Experience)

### NHN DATA (2022.12 ~ 현재 재직 중)
**데이터솔루션개발팀 / 선임 · 백엔드 테크 리드 (PL)**  
*프로젝트: SocialBiz (인스타그램 마케팅 자동화 솔루션 플랫폼)*

- **아키텍처 설계 및 글로벌 서비스 운영**
  - 2024년 1월 국내 론칭 및 2026년 1월 일본 확장 서비스의 아키텍처 설계, 개발, 운영 주도
  - 기존 모놀리식 구조를 API / CORE / WEB / BATCH 도메인으로 분리하여 부하를 분산하는 MSA 전환 수행
  - 일 50만 건 규모의 트래픽(마케팅 이벤트 및 푸시 발송 시 피크 스파이크 트래픽 집중) 환경에서 무중단 대응 체계 구축 및 SLA 99.7% 유지

- **대규모 트래픽 성능 최적화 및 옵저빌리티**
  - Read-Heavy 데이터 조회 구간에 Redis 캐시 계층을 선제 도입하여 RDB 부하 50% 분산 및 응답 속도 개선
  - 서비스 론칭 직후 발생한 HikariCP 커넥션 타임아웃 장애 시, 외부 Meta API 호출과 DB 트랜잭션(@Transactional) 범위를 분리하고 슬로우 쿼리 실행 계획 분석·커버링 인덱스를 적용하여 처리 속도 60% 향상
  - Spring Actuator, Prometheus, Grafana를 통합하여 실시간 메트릭 추적 및 옵저빌리티 환경 구축
  - 기존 Cron 기반 스케줄러를 Spring Batch로 전환, 대용량 데이터의 안정적 로깅과 실패 재처리 Job 파이프라인 개편

- **AI 주도 개발(AX) 체계 구축 및 엔지니어링 리드**
  - 단순 도구 활용을 넘어 Spec 작성 → TDD → AI 코드 생성 → 정적 분석 및 심층 리뷰로 이어지는 4단계 Quality Gate 확립
  - 컨텍스트 엔지니어링 및 프롬프트 템플릿 표준화로 코드 일관성 확보 및 개발 생산성 40% 향상
  - AI가 생성한 코드의 동시성 이슈, 트랜잭션 전파 레벨, 보안 취약점을 직접 리뷰·검증하여 프로덕션 안정성 확보

- **비즈니스 로직 및 협업 문화 고도화**
  - Meta Graph API 연동 기반 Instagram DM/댓글 자동화 및 웹훅 통계 대시보드 API 개발
  - OAuth 인증(라인, 구글, 페이스북) 및 알림(이메일, SMS) 발송 파이프라인 구축
  - 백엔드 테크 리드로서 코드 리뷰 문화 정착, PR 룰 정의, 스프린트 회고 주도로 팀 코드 품질 상향 평준화

---

### (주)코스콤 (2020.12 ~ 2022.12)
**시장인프라부 기반기술팀 / 대리**

- **메시지 통신 모니터링 시스템 구축 프로젝트**
  - Tech: `C++`, `Java`, `Spring Boot`, `Kafka / MQ`, `PostgreSQL`
  - C 레거시 시스템과 Java 시스템 간 메시지 큐(Kafka/MQ) 트랜잭션 추적 시스템 개발
  - 미들웨어 구간별 프로세스 상태 가시성을 확보하여 장애 원인 분석 시간 단축 및 금융 데이터 정합성 보장

- **SaaS 플랫폼 엔진 검증 POC 프로젝트**
  - Tech: `Java`, `Spring Boot`, `JNI`, `C++ 매칭 엔진`, `Vue.js`
  - SaaS 플랫폼 전환을 위한 내부 체결/매칭 엔진의 Java 환경 퍼포먼스 검증 주도
  - 매칭 엔진과 미들웨어 간 JNI 연동 모듈 개발 및 통신 최적화 수행
  - FE/BE 풀스택 시뮬레이션 환경 구축을 통한 가상 매칭 체결 엔진 신뢰성 검증

- **금융 프레임워크(Proframe) 서버 운영 및 안정화**
  - 계정계 시스템 JEUS, WEBTOB 미들웨어 운영 및 유지보수
  - 리눅스 환경에서의 서버 리소스 모니터링 및 정기 점검을 통한 무중단 금융 서비스 지원

---

### LG D&O (구 서브원) (2018.08 ~ 2020.05)
**IOC 통합운영센터 / 주임 · 계장**

- **인프라 고도화 및 클라우드 마이그레이션**
  - Tech: `Java`, `Spring Boot`, `Oracle`, `PostgreSQL`, `MS Azure`
  - 온프레미스 노후화 및 트래픽 증가에 따른 병목 해결을 위해 MS Azure 클라우드로 시스템 전면 이관 및 아키텍처 재설계
  - 트래픽 분산을 위한 서버 이중화 및 NAS 스토리지 도입으로 시스템 가용성 확보
  - Oracle에서 PostgreSQL로 데이터베이스 이관 및 PL/SQL 로직의 쿼리 최적화 재구현

- **화재 수신반 및 스마트 오피스 관제 시스템**
  - Tech: `Java`, `Spring Boot`, `IoT Middleware`, `REST API`, `Responsive Web`
  - 화재 수신반 및 스마트 오피스 IoT 센서(광도/온습도) 데이터 수집용 미들웨어 연동
  - 긴급 상황 발생 시 조작 감시 및 SMS 상황 전파를 위한 자동화 API와 반응형 통합 관제 대시보드 개발

---

### 한국상조공제조합 (2016.01 ~ 2017.04)
**전산팀 / 사원**

- **통합정보시스템 구축 및 전산 운영**
  - Tech: `Java`, `Spring`, `Oracle`, `iBatis`, `OZ Report`, `IDC On-Premise`
  - 통합정보시스템 내 담보금 반환, 의결좌수 집계, 출장 및 재물대장 관리 시스템 개발 및 유지보수
  - 사이트 리뉴얼 프로젝트: 모바일 인증 API, 오즈리포트(OZ Report) API, SMS 발송 API 연동 개발
  - IDC 센터 물리 서버 정기 점검 및 온프레미스(On-premise) 인프라 무중단 운영 대응

---

## 📁 대표 프로젝트 쇼케이스

1. **[AI 위클리 2.0 (AI Weekly 2.0)](https://ldk-hub.github.io/ai-weekly/)**  
   7개 글로벌 매체 24시간 실시간 수집 및 Claude Code 멀티 에이전트 자율 큐레이션 파이프라인.  
   🔗 [상세 포트폴리오 보기](/portfolio/#-1-ai위클리-20-ai-weekly-20---자율-ai-에이전트--기술-신호-큐레이션-플랫폼)

2. **[bmad-2d-monitor](https://github.com/ldk-hub/bmad-2d-monitor)**  
   Canvas 2D 60FPS 최적화 & Spring AI + pgvector 기반 차세대 가상 오피스 모니터링 시스템.  
   🔗 [상세 포트폴리오 보기](/portfolio/#-2-차세대-ai-가상-오피스-모니터링-시스템-bmad-2d-monitor)

3. **[엔터프라이즈 통합 대시보드 (DashBoard)](https://github.com/ldk-hub/DashBoard)**  
   이기종 DB 무중단 마이그레이션 및 WebSocket 양방향 실시간 메트릭 관제 시스템.  
   🔗 [상세 포트폴리오 보기](/portfolio/#-3-엔터프라이즈-실시간-통합-대시보드-dashboard)

---

## 📜 자격 및 전문 교육 (Certifications & Education)

### 자격증 (Licenses)
- **정보처리기사** | 한국산업인력공단 (2015.05)
- **컴퓨터활용능력 1급** | 대한상공회의소 (2014.07)

### 전문 교육 & 세미나 (Professional Education)
- **패스트캠퍼스 The Red** : 코드리뷰, 리팩토링, TDD 교육 (2024.06)
- **NHN 인프런** : Spring Boot & Vue.js 풀스택 실무 과정 (2023.09 ~ 2023.11)
- **NHN 인프런** : 토비의 스프링부트 - 원리와 활용 (2023.03 ~ 2023.05)
- **코스콤 역량강화교육** : MSA 아키텍처 설계, DevOps 및 Apache Kafka 프로그래밍 (2020.12 ~ 2022.07)
- **MS Azure 클라우드 실무자 과정** : 엔터프라이즈 클라우드 아키텍처 (2019)
