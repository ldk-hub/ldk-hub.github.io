---
title: "[BMAD] AI 모니터링의 진화: 2D 픽셀 RPG 스타일 가상 오피스 구현기"
excerpt: "단순한 대시보드를 넘어, BMAD 방법론과 픽셀 아트를 결합한 생동감 넘치는 AI 에이전트 모니터링 시스템 구축기입니다."
categories:
  - Project
  - AI
tags:
  - BMAD
  - React
  - Konva.js
  - Pixel Art
  - Harness Engineering
header:
  teaser: /assets/images/bmad-monitor-preview.png
  overlay_image: /assets/images/bmad-monitor-preview.png
  overlay_filter: 0.5
---

어제 개발을 마친 **BMAD 2D Pixel RPG Monitor** 프로젝트의 핵심 내용과 구현 과정을 공유합니다.

![Preview](/assets/images/bmad-monitor-preview.png)

## 🚀 프로젝트 개요
단순한 텍스트 기반 로그나 정적인 그래프 대시보드에서 벗어나, AI 에이전트들의 활동을 **16-bit 픽셀 아트 스타일의 가상 사무실**에서 실시간으로 관찰할 수 있는 모니터링 툴을 개발했습니다. 

단순히 비주얼만 챙긴 것이 아니라, **BMAD(Breakthrough Method for Agile AI-Driven Development)** 방법론과 **하네스 엔지니어링(Harness Engineering)**을 적용하여 개발 생산성을 극대화한 것이 특징입니다.

## ✨ 핵심 기능 (Key Features)

### 1. High-Fidelity Office & Y-Sorting
정적인 2D 평면이 아닌, 실제 가구 오브젝트(책상, 모니터, 화분 등)를 배치하고 **Y-Sorting(깊이 정렬) 알고리즘**을 적용했습니다. 이를 통해 캐릭터가 가구 뒤로 가거나 앞으로 나올 때 자연스러운 2.5D 입체감을 구현했습니다.

### 2. Sprite-Centric Engine (Konva.js)
`Konva.js`의 강력한 Canvas 렌더링을 활용하여 60FPS의 부드러운 애니메이션을 구현했습니다. 에이전트들은 상태에 따라 `Idle`, `Walking`, `Working` 등 유기적인 스프라이트 애니메이션을 보여줍니다.

### 3. Autonomous FSM AI
에이전트들은 각자의 역할을 수행하기 위해 목적 지향적으로 행동합니다.
- **Task 수행:** 자신의 자리에 가서 업무를 수행합니다.
- **휴식:** 정수기로 이동하여 물을 마시거나 가상 오피스를 배회합니다.
- **실시간 상태 동기화:** `Zustand`를 이용해 실제 서버의 AI 에이전트 상태와 오피스 캐릭터가 실시간으로 동기화됩니다.

### 4. Always-On Dashboard (Sidebar)
기공 모니터링 툴의 불편함(클릭해야 상세 정보 노출)을 개선하여, 우측 사이드바에 모든 에이전트의 **CPU/MEM 사용량, 현재 Task, 최근 로그**를 한눈에 볼 수 있는 'Always-On' 패널을 장착했습니다.

## 🛠 Tech Stack
- **Frontend:** React 18, TypeScript, Vite
- **2D Engine:** Konva.js (Canvas API wrapper)
- **State Management:** Zustand
- **Styling:** Tailwind CSS (Modern & Sleek UI)

## 💡 BMAD & Harness Engineering의 힘
이번 개발에서 가장 놀라웠던 점은 문서(PRD, Architecture)와 코드의 정합성을 유지하며 개발하는 **BMAD Lifecycle**의 안정감이었습니다. 또한 **Harness Engineering** 루프를 통해 발생할 수 있는 렌더링 이슈(예: 크로마키 배경 제거 로직 오류)를 자가 치유(Self-Correction) 방식으로 신속하게 해결할 수 있었습니다.

---

앞으로 이 픽셀 오피스는 단순히 모니터링을 넘어, AI 에이전트들이 서로 소통하고 의사결정을 내리는 'AI 사회 시뮬레이션' 공간으로 확장될 예정입니다.

많은 기대 부탁드립니다! 🚀
