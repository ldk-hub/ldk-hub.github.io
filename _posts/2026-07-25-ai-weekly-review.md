---
title: "정보 과잉 시대, 나는 AI로 AI 뉴스를 읽는다 (feat. AI위클리)"
excerpt: "매일 쏟아지는 AI 뉴스와 도구들을 피로도 없이 한 곳에서 볼 수 있는 100% 자동화 큐레이션 플랫폼 구축기"
categories:
  - Project
  - AI
tags:
  - AI
  - 사이드프로젝트
  - ClaudeCode
  - 트렌드
  - 자동화
  - 아키텍처
  - 데이터파이프라인
last_modified_at: 2026-08-18T10:45:00+09:00
sticky: true
---

## 🛑 프롤로그: "아, 또 새로운 모델이 나왔어?"

매일 아침 눈을 뜨면 새로운 AI 논문과 모델이 쏟아지고, 퇴근할 때쯤이면 어제 배운 프롬프트 기법이 구식이 되어버리는 시대입니다. 
Hacker News, GeekNews, Reddit, X(Twitter), Threads, GitHub... 정보의 출처는 넘쳐나는데, 정작 내 업무와 성장에 '진짜 필요한' 엑기스만 걸러내기란 쉽지 않죠. 결국 즐겨찾기만 잔뜩 쌓아두고 "나중에 읽어야지" 하며 스크롤만 넘기다 지쳐버린 경험, 다들 있으실 겁니다.

**"매일 쏟아지는 AI 뉴스와 도구들을 피로도 없이 한 곳에서 볼 수는 없을까?"**

이런 고민에서 출발하여, 저격형 기술 신호 큐레이션 플랫폼 **[AI위클리 (AI Weekly)](https://ldk-hub.github.io/ai-weekly/)**를 기획하고 개발하게 되었습니다.

---

## 🚀 AI위클리, 무엇이 특별한가요?

AI위클리는 사람의 개입 없이 **결정적 데이터 수집(Deterministic Collection)과 자율 AI 에이전트(Claude Code)**가 유기적으로 맞물려 돌아가는 '종합 AI 기술 동향 대시보드'입니다. 

사용자가 사이트에 접속했을 때 가장 핵심적인 정보만 직관적으로 얻어갈 수 있도록 크게 **3가지 핵심 섹션(3대장)**으로 구성했습니다.

### 1. 📰 데일리뉴스: "출근길 3분 컷! 매일 아침 AI 3줄 요약 & 심층 해설"

<div align="center">
  <img src="https://ldk-hub.github.io/assets/images/ai-weekly/news.png" alt="데일리뉴스 화면 캡처" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
</div>

여기저기 흩어진 매체들을 일일이 돌아다닐 필요가 없습니다. 
AI위클리는 GeekNews, Hacker News, AI타임스, Reddit, GitHub, X, Threads 등 **7개 고정 매체**에서 최근 24시간 동안 발생한 소식을 병렬 수집합니다.
- **기술 신호 6축 분류**: 단순 가십성 뉴스를 배제하고 `모델 출시`, `제품 신기능`, `개발자 도구`, `개인 오픈소스`, `연구/논문`, `실무 워크플로우` 6가지 축으로 정밀 분류합니다.
- **3줄 요약 + 5~10문장 심층 해설**: ①무엇이 일어났나 ②기술적으로 무엇이 새로운가 ③개발자에게 왜 중요한가를 한국어로 재작성하여 커피 한 잔 마시며 가볍게 트렌드를 캐치할 수 있습니다.

### 2. 🧩 인기 플러그인: "이번 주 뜨는 Claude Code 도구 & 에이전트 생태계"

<div align="center">
  <img src="https://ldk-hub.github.io/assets/images/ai-weekly/plugins.png" alt="인기 플러그인 화면 캡처" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
</div>

Claude Code 생태계에서 수많은 스킬과 MCP 도구들이 쏟아지지만, 정작 쓸만한 걸 찾기는 모래사장에서 바늘 찾기입니다.
AI위클리는 매주 월요일마다 GitHub 트렌딩과 커뮤니티 반응을 종합 분석합니다:
- **🔥 Rising (최신 화제)**: 생성 30일 이내이거나 주간 성장률이 급등한 라이징 도구 (적응형 정원제 20건 상한)
- **⭐ Classic (필수 레퍼런스)**: 누적 Stars 500+ 이상으로 검증된 표준 프로젝트 (16건 상한)
- **적응형 정원제(Adaptive Quota)**: 스킬, MCP, 에이전트, 하네스 등 카테고리별 공급량에 맞춰 엄격히 선별된 큐레이션을 제공합니다.

### 3. 📈 스타보드 (Starboard): "생태계 핵심 오픈소스 170+ 성장 궤적 추적"

단순히 새로 나온 도구를 소개하는 데 그치지 않고, 오픈소스 생태계에서 실질적으로 사용되고 검증되는 프로젝트들의 장기 성장세를 관찰합니다.
- **체급별 리그(League) 분류**: Legend, Premier, Major, Minor로 리그를 나누어 대형 리포와 신생 리포 모두 공정하게 성장을 비교합니다.
- **시계열 원장(Ledger) 기반 속도(Velocity) 측정**: 일자별 스타 표본을 원자적으로 누적하여 주간 순증감 데이터를 투명하게 시각화합니다.

---

## 🛠 엔지니어링 비하인드: "AI 자동화, 신뢰성은 어떻게 잡았을까?"

AI위클리의 가장 큰 매력은 겉으로 보이는 심플한 UI 뒤에 숨겨진 **무결성 지향 자동화 파이프라인**입니다.

이 사이트에는 별도의 무거운 백엔드 서버나 DB가 없습니다. 순수 HTML과 JS, 그리고 JSON 파일로만 굴러가는 가벼운 정적 사이트(SPA)입니다. 그렇다면 자동화의 신뢰성은 어떻게 확보했을까요?

```
[ 7개 매체 크롤링 / GitHub API ]
              │
              ▼ (결정적 팩트 확보 & Cheerio 본문 추출)
[ .tmp/candidates.json ] ─── (Stars, URL, 날짜 강제 고정)
              │
              ▼ (맥락 분석 & 한글 재작성 요약)
[ 에이전트 / Gemini 큐레이션 ]
              │
              ▼ (자동 품질 검증 게이트: 규격 위반 시 배포 차단)
[ node scripts/news/curate_news.js --validate ]
              │
              ▼ (0.2초 초고속 빌드 & 무중단 배포)
[ Vite 정적 번들링 ──→ GitHub Pages 배포 ]
```

### 1) LLM 환각(Hallucination) 0% 격리 아키텍처
AI에게 요약을 맡길 때 가장 큰 문제는 없는 URL이나 수치를 지어내는 '환각'입니다. AI위클리는 **사실 데이터(Stars, 날짜, URL, 작성자)는 원천 크롤러가 수집한 값으로 강제 덮어쓰기(Hard Override)**하고, LLM에는 오직 '분류 및 번역/해설' 문장 생성만 위임하여 사실 왜곡을 원천 차단했습니다.

### 2) CLI 기반 다단계 품질 게이트 (`--validate`)
배포 전 자동 검증기가 아래 규칙을 100% 검사하며, 단 1건이라도 위반 시 배포 파이프라인이 즉시 중단됩니다:
- `summary_ko` 3불릿 규격(각 15자 이상) 및 원문 복붙 탐지
- `body_ko` 5~10문장 완결성 검증 (마침표 개수 및 한글 비율 검사)
- 금융/주식/투자성 기사 자동 필터링 (`FINANCE_RE`)
- 단일 출처 항목 자동 강등 및 플랫폼별 균형(3~5건) 검증

### 3) 성장률 기반 코호트 정규화 (Growth-Rate Cohort Normalization)
스타 10만 개짜리 거대 리포가 주 500개 느는 것과, 스타 500개짜리 신생 리포가 주 300개 느는 것은 파급력이 다릅니다. AI위클리는 단순 증감치가 아닌 **주간 성장률($\Delta / \text{Total}$)을 코호트 정규화**하여, 신생 유망 프로젝트가 대형 리포에 가려지지 않고 공정하게 랭킹에 오를 수 있는 4축 스코어링 수식을 설계했습니다.

$$Score = 0.4 \times Velocity(성장률) + 0.3 \times Community Buzz + 0.2 \times Quality(README) + 0.1 \times Recency$$

### 4) Serverless & Vite 초경량 정적 인프라
무거운 백엔드 서버나 DB 없이, 모든 데이터는 구조화된 JSON 파일로 버전 관리됩니다. Vite를 도입해 **0.2초 미만의 초고속 정적 빌드**와 완전한 모바일 반응형 UX를 구현했으며, 과거 데이터는 `data/archive/`에 영구 스냅샷으로 백업됩니다.

---

## 🎯 에필로그: 정보의 홍수 속에서 살아남기

AI위클리는 거창한 포털 사이트를 지향하지 않습니다. 그저 "오늘 AI 업계에 무슨 일이 있었지?", "이번 주에 써볼 만한 Claude 도구는 뭐지?" 궁금할 때, 주소창에 치고 들어와 **1분 만에 쓱 훑어보고 나갈 수 있는 가볍고 쾌적한 아지트**가 되기를 바랍니다.

정보의 홍수 속에서 익사하지 않고, 나에게 필요한 인사이트라는 파도를 멋지게 서핑하고 싶으시다면? 
지금 바로 [AI위클리](https://ldk-hub.github.io/ai-weekly/)를 북마크해 보세요! 🌊

---
- **사이트 바로가기**: [https://ldk-hub.github.io/ai-weekly/](https://ldk-hub.github.io/ai-weekly/)
- **소스코드(GitHub)**: [https://github.com/ldk-hub/ai-weekly](https://github.com/ldk-hub/ai-weekly)
- **RSS 구독**: [feed.xml](https://ldk-hub.github.io/ai-weekly/feed.xml) · [news-feed.xml](https://ldk-hub.github.io/ai-weekly/news-feed.xml)
