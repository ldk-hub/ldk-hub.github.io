---
title: "[Project] BMAD AI Monitoring System: Pixel Art로 진화하는 에이전트 생태계"
excerpt: "Spring AI와 BMAD 방법론을 결합하여 구축한 차세대 AI 에이전트 모니터링 시스템 구축기"
categories:
  - Project
  - AI
tags:
  - Spring AI
  - BMAD
  - React
  - Pixel Art
  - Monitoring
last_modified_at: 2026-04-12T15:20:00+09:00
header:
  teaser: /assets/images/bmad-monitor-hero.png
---

![BMAD Monitor Hero](/assets/images/bmad-monitor-hero.png)

## 🚀 프로젝트 개요: 왜 BMAD인가?

최근 AI 에이전트의 자율성이 높아짐에 따라, 이들의 내부 상태와 행동을 '어떻게 관찰할 것인가'는 엔지니어링의 핵심 과제가 되었습니다. 단순한 로그 출력을 넘어, 에이전트의 사고 과정과 상호작용을 직관적으로 파악하기 위해 **BMAD (Breakthrough Method for Agile AI-Driven Development)** 방법론을 적용한 모니터링 시스템을 구축했습니다.

### 핵심 목표
1. **가시성 확보**: 텍스트 위주의 로그에서 벗어나 Pixel Art RPG 컨셉의 시각적 인터페이스 제공.
2. **지능형 분석**: Spring AI와 벡터 DB를 활용하여 에이전트 활동의 의미론적 분석 수행.
3. **BMAD 기반 설계**: AI-Native 개발 사이클을 통한 빠른 프로토타이핑 및 고품질 아키텍처 수립.

---

## 🛠 Tech Stack

프로젝트의 안정성과 성능을 위해 현대적인 기술 스택을 엄격하게 선별했습니다.

- **Backend**: Java 21, Spring Boot 3.4.x, Spring AI
- **Database**: PostgreSQL (pgvector extension)
- **Frontend**: React 18, Vite, TailwindCSS, TanStack Query
- **Architecture**: BMAD-Native Hybrid Architecture

---

## 🎨 Pixel Art RPG: 모니터링을 넘어선 관찰의 즐거움

기존 대시보드의 딱딱한 차트 대신, 가상 오피스 환경에서 에이전트들이 돌아다니며 작업을 수행하는 모습을 시나리오로 구성했습니다.

- **Y-Sorting 렌더링**: 2D 공간 내에서 캐릭터와 사물 간의 깊이감을 제공하여 몰입도 향상.
- **실시간 상태 시각화**: 에이전트가 생각 중인지, 작업을 수행 중인지, 혹은 휴식 중인지를 캐릭터 애니메이션과 말풍선으로 즉각 확인.
- **Dynamic Sidebar**: 실시간 로그와 벡터 검색 결과를 동시에 제공하여 디버깅 편의성 극대화.

---

## 🧠 Spring AI & 벡터 데이터베이스의 활용

단순한 데이터 저장소가 아닌, 에이전트의 지식 베이스(KB)로서의 역할을 위해 PostgreSQL의 **pgvector**를 적극 활용했습니다.

```java
// 예시: 시맨틱 검색을 통한 에이전트 맥락 파악
public List<Document> searchContext(String query) {
    return vectorStore.similaritySearch(
        SearchRequest.query(query).withTopK(5)
    );
}
```

에이전트가 생성한 수많은 로그 중 의미 있는 패턴을 찾아내고, 이를 바탕으로 시스템의 이상 징후를 조기에 감지할 수 있는 지능형 알람 체계를 구축했습니다.

---

## 🏁 마치며

BMAD 방법론을 통해 AI 중심의 개발 프로세스를 경험하며, 모니터링 시스템 역시 단순한 '도구'가 아닌 하나의 '생태계'로 진화할 수 있음을 확인했습니다. 앞으로 이 시스템은 자율 주행 에이전트들의 멀티 에이전트 오케스트레이션(MAO) 플랫폼으로 확장될 예정입니다.

**Beyond Monitoring, Evolution by BMAD.**
더 나은 혁신을 향한 여정은 계속됩니다.

---
*관련 코드와 상세 스펙은 [ldk-hub GitHub](https://github.com/ldk-hub)에서 확인하실 수 있습니다.*
