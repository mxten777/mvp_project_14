# 🎉 Vibe-RPA 2.0 Premium

> **시군구 RPA 통합플랫폼** - 2025년 최신 웹 표준 적용  
> TailwindCSS 3.4.4 | Glass Morphism | Premium Fonts | React 19

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://mvp-project-14-9bmios8kd-dongyeol-jungs-projects.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mxten777/mvp_project_14)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## � 프로젝트 개요

**Vibe-RPA**는 시군구 공공기관을 위한 **차세대 RPA(Robotic Process Automation) 통합 관리 플랫폼**입니다. 2025년 최신 웹 기술을 적용하여 **직관적이고 현대적인 사용자 경험**을 제공합니다.

### ✨ 주요 특징

- 🎨 **Premium Design System**: Glass Morphism과 TailwindCSS 3.4.4 기반
- 🔤 **최적화된 타이포그래피**: Pretendard Variable + Inter Variable 폰트
- 📱 **완전 반응형**: 모바일부터 데스크톱까지 완벽 지원
- ⚡ **최적화된 성능**: 313KB 번들 (gzip: 90KB)
- 🧩 **모듈형 컴포넌트**: 재사용 가능한 UI 시스템
- 🎯 **TypeScript**: 100% 타입 안전성

## 🚀 라이브 데모

**🌍 [Vibe-RPA Premium 체험하기](https://mvp-project-14-9bmios8kd-dongyeol-jungs-projects.vercel.app)**

### 🏢 대상 부서
- 민원과
- 복지정책과  
- 세무과
- 회계과
- 환경과
- 도시건설과

## 🛠 기술 스택

### Frontend Core
- **React 19** - 최신 리액트 프레임워크
- **TypeScript 5.7** - 타입 안전성 보장
- **Vite 7.0** - 초고속 개발 서버

### Styling & Design
- **TailwindCSS 3.4.4** - 최신 CSS 프레임워크
  - Container Queries
  - Dynamic Viewport Units
  - Advanced Color System
- **Glass Morphism** - 현대적 UI 효과
- **Pretendard Variable** - 한국어 최적화 폰트
- **Inter Variable** - 영문 가독성 폰트
- **JetBrains Mono** - 코드/데이터 전용 폰트

### State Management
- **React Query** - 서버 상태 관리
- **Custom Hooks** - 비즈니스 로직 분리

### Backend & Deployment
- **Firebase** - 인증, 데이터베이스, 함수
- **Vercel** - 전역 CDN 배포
- **GitHub Actions** - CI/CD 자동화

### Icons & Assets
- **Lucide React** - 최신 아이콘 라이브러리
- **Heroicons** - 보조 아이콘

## ✨ 주요 기능

### 1. 자동화 작업
- **자동 수집**: 외부 민원 데이터 자동 수집
- **자동 분류**: AI 기반 민원/문서 자동 분류
- **자동 입력**: 행정시스템 DB 자동 업데이트
- **자동 보고**: 정기 보고서 자동 생성 (PDF/Excel)
- **자동 통보**: SMS, 이메일 자동 발송

### 2. 관리 기능
- **스케줄링**: 예약 실행 및 크론 관리
- **로그 추적**: 모든 작업 기록 및 검색
- **권한 관리**: 부서별 접근 권한 관리
- **실시간 모니터링**: 작업 상태 실시간 추적

## 🏗 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Header.tsx       # 네비게이션 헤더
│   ├── Sidebar.tsx      # 사이드바 메뉴
│   ├── Layout.tsx       # 메인 레이아웃
│   ├── Modal.tsx        # 모달 다이얼로그
│   ├── Toast.tsx        # 알림 토스트
│   ├── Dropdown.tsx     # 드롭다운 메뉴
│   └── LoadingSpinner.tsx # 로딩 스피너
├── pages/               # 페이지 컴포넌트
│   ├── Dashboard.tsx    # 대시보드
│   ├── Tasks.tsx        # 작업 관리
│   ├── Schedule.tsx     # 스케줄 관리
│   ├── Reports.tsx      # 보고서
│   └── Settings.tsx     # 설정
├── hooks/               # 커스텀 훅
│   ├── useAsync.ts      # 비동기 작업 관리
│   ├── useToast.ts      # 토스트 알림 관리
│   ├── useLocalStorage.ts # 로컬 스토리지 관리
│   └── useRPATasks.ts   # RPA 작업 API 관리
├── lib/                 # 라이브러리 설정
│   └── firebase.ts      # Firebase 설정
├── types/               # TypeScript 타입 정의
│   └── index.ts         # 글로벌 타입
└── contexts/            # React 컨텍스트
    └── ThemeContext.tsx # 테마 관리
```

## 🚀 시작하기

### 필수 조건
- Node.js 18.0.0 이상
- npm 또는 yarn
- Git

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/mxten777/mvp_project_14.git
cd mvp_project_14
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 시작**
```bash
npm run dev
```

4. **브라우저에서 확인**
```
http://localhost:5173
```

### 빌드 및 배포

1. **프로덕션 빌드**
```bash
npm run build
```

2. **Vercel 배포**
```bash
vercel --prod
```

3. **미리보기**
```bash
npm run preview
```

### 빌드
```bash
npm run build
```

### 미리보기
```bash
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/         # 재사용 가능한 컴포넌트
│   ├── Layout.tsx     # 레이아웃 컴포넌트
│   ├── Sidebar.tsx    # 사이드바
│   └── Header.tsx     # 헤더
├── pages/             # 페이지 컴포넌트
│   ├── Dashboard.tsx  # 대시보드
│   ├── Tasks.tsx      # RPA 작업 관리
│   ├── Schedule.tsx   # 스케줄 관리
│   ├── Reports.tsx    # 보고서
│   └── Settings.tsx   # 설정
├── lib/               # 라이브러리 설정
│   └── firebase.ts    # Firebase 설정
├── types/             # TypeScript 타입 정의
│   └── index.ts       # 공통 타입
└── hooks/             # 커스텀 훅 (예정)
```

## 📊 기대효과

| 구분 | 도입 전 (수동) | 도입 후 (자동화) | 절감 효과 |
|------|----------------|------------------|-----------|
| 민원 처리 | 수작업 분류/응대 | AI 분류/자동 회신 | 40% 업무 절감 |
| 복지업무 | 자격 검토 수작업 | 자동 조회 및 문서화 | 실수 방지 |
| 보고서 | 수기 Excel 작성 | 자동 추출/생성 | 보고시간 1/3 감소 |
| 데이터 | 수기 취합/검증 | 실시간 DB 동기화 | 정확도 +30% |

## 🔧 환경 설정

### Firebase 설정
1. Firebase 프로젝트 생성
2. `src/lib/firebase.ts`에서 설정 정보 업데이트
3. Firestore, Authentication, Functions 활성화

### 환경 변수
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## 📈 개발 일정 (MVP - 4주)

- **1주차**: 요구사항 분석 및 UI/UX 와이어프레임 ✅
- **2주차**: 핵심 RPA 기능 개발 (수집, 분류, 통보)
- **3주차**: 통계/보고서 및 관리자 페이지 개발  
- **4주차**: 통합 테스트, 배포(Vercel), 시연

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

프로젝트 관련 문의: [프로젝트 관리자]

## 📄 라이선스

This project is licensed under the MIT License.

---

⭐ **Vibe-RPA**로 스마트한 행정 서비스를 만들어보세요!
  # 🏛️ Vibe-RPA - 시군구 RPA 통합플랫폼

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan.svg)](https://tailwindcss.com/)

## 📋 프로젝트 개요

시군구(시·군·구) 지방자치단체를 위한 RPA(Robotic Process Automation) 통합 플랫폼입니다. 
업무 자동화와 효율성 향상을 위한 종합적인 대시보드와 관리 시스템을 제공합니다.

## ✨ 주요 기능

### 🌓 다크 모드 지원
- 시스템 테마 감지 및 자동 적용
- 수동 다크/라이트 모드 전환
- LocalStorage를 통한 설정 저장

### 📱 모바일 최적화
- 완전 반응형 디자인
- 터치 친화적 UI/UX
- 모바일 전용 네비게이션 메뉴
- 다양한 화면 크기 지원 (모바일 → 태블릿 → 데스크톱)

### ✨ 마이크로 인터랙션 & 애니메이션
- 페이지 전환 애니메이션
- 호버 효과 및 스케일 애니메이션
- 부드러운 상태 전환
- 커스텀 키프레임 애니메이션

### 📊 실시간 대시보드
- RPA 작업 현황 모니터링
- 시스템 리소스 사용률 표시
- 최근 실행 작업 현황
- 실시간 성과 지표

## 🛠️ 기술 스택

### Frontend
- **React 19** - 최신 리액트 프레임워크
- **TypeScript** - 정적 타입 검사
- **Vite 7.0** - 초고속 빌드 도구
- **React Router DOM 7.7** - 클라이언트 사이드 라우팅

### Styling
- **TailwindCSS 3.4** - 유틸리티 우선 CSS 프레임워크
- **Lucide React** - 아이콘 라이브러리
- **커스텀 애니메이션** - 브랜드 맞춤 UI/UX

### 배포
- **Vercel** - 서버리스 배포 플랫폼
- **자동 CI/CD** - Git 기반 자동 배포

## 🚀 시작하기

### 사전 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 프리뷰 (http://localhost:4173)
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Header.tsx      # 상단 네비게이션 & 테마 토글
│   ├── Sidebar.tsx     # 사이드바 메뉴
│   └── Layout.tsx      # 전체 레이아웃 래퍼
├── contexts/           # React Context
│   └── ThemeContext.tsx # 다크/라이트 모드 관리
├── pages/              # 페이지 컴포넌트
│   ├── Dashboard.tsx   # 메인 대시보드
│   ├── Tasks.tsx       # RPA 작업 관리
│   ├── Schedule.tsx    # 스케줄링
│   ├── Reports.tsx     # 보고서
│   └── Settings.tsx    # 설정
└── main.tsx           # 애플리케이션 진입점
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: Blue (#3B82F6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Dark Theme**: Gray-900 계열
- **Light Theme**: White/Gray-50 계열

### 반응형 브레이크포인트
- **모바일**: < 640px
- **태블릿**: 640px - 1024px  
- **노트북**: 1024px - 1280px
- **데스크톱**: > 1280px

### 애니메이션
- **fade-in**: 페이지 로드 애니메이션
- **slide-up**: 카드 등장 애니메이션
- **bounce-gentle**: 부드러운 바운스 효과
- **pulse-slow**: 상태 표시 펄스 효과

## 📱 모바일 UX 특징

### 터치 최적화
- 최소 44px 터치 타겟 크기
- 스와이프 친화적 네비게이션
- 모바일 전용 사이드바 오버레이

### 성능 최적화
- 번들 크기 최소화
- 모바일 우선 CSS
- 효율적인 리렌더링

## 🌙 다크 모드 구현

### 테마 감지
```typescript
// 시스템 테마 자동 감지
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
  ? 'dark' : 'light';

// LocalStorage에서 사용자 설정 복원
const savedTheme = localStorage.getItem('theme') as Theme;
```

### CSS 클래스 전략
```css
/* TailwindCSS 다크 모드 */
.dark .bg-white { @apply bg-gray-800; }
.dark .text-gray-900 { @apply text-white; }
```

## 🚢 배포

### Vercel 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포 실행
vercel --prod
```

### 환경 설정
- `vercel.json` - SPA 라우팅 설정
- 자동 빌드 및 배포
- 커스텀 도메인 연결 가능

## 📈 성능 지표

### 번들 크기
- **CSS**: ~30KB (gzipped: ~5KB)
- **JavaScript**: ~296KB (gzipped: ~87KB)
- **Total**: 빠른 로딩 속도 보장

## 🔧 개발 도구

### 코드 품질
- **TypeScript** - 타입 안전성
- **ESLint** - 코드 스타일 검사

### 개발 경험
- **HMR** - 핫 모듈 교체
- **Fast Refresh** - 빠른 개발 피드백
- **TypeScript Intellisense** - 자동완성

---

⚡ **Vibe-RPA로 지방자치단체의 디지털 혁신을 시작하세요!**
])
```
