# Vibe-RPA 프로젝트 가이드

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

이 프로젝트는 **Vibe-RPA (시군구 RPA 통합플랫폼)**입니다.

## 기술 스택
- **프론트엔드**: Vite + React + TypeScript + TailwindCSS
- **백엔드**: Firebase (Auth, Firestore, Functions)
- **배포**: Vercel
- **아이콘**: Lucide React
- **상태관리**: React Query

## 프로젝트 구조
```
src/
├── components/     # 재사용 가능한 컴포넌트
├── pages/         # 페이지 컴포넌트
├── lib/           # 라이브러리 설정 (Firebase 등)
├── types/         # TypeScript 타입 정의
└── hooks/         # 커스텀 훅
```

## 주요 기능
1. **대시보드**: RPA 작업 현황 모니터링
2. **작업 관리**: RPA 작업 생성, 수정, 삭제
3. **스케줄링**: 작업 예약 및 실행 관리
4. **보고서**: 성과 분석 및 통계
5. **설정**: 시스템 및 사용자 설정

## 코딩 가이드라인
- TypeScript 엄격 모드 사용
- TailwindCSS 클래스를 사용한 스타일링
- 컴포넌트는 함수형으로 작성
- Firebase와의 데이터 통신은 React Query 사용
- 에러 처리 및 로딩 상태 관리
- 접근성(a11y) 고려한 UI 작성

## 컴포넌트 네이밍
- 페이지 컴포넌트: `PageName` (예: `Dashboard`, `TasksPage`)
- UI 컴포넌트: `ComponentName` (예: `Button`, `Modal`)
- 타입: PascalCase (예: `User`, `RPATask`)

## 색상 테마
- Primary: Blue (blue-600, blue-700)
- Success: Green (green-600, green-700)
- Warning: Yellow (yellow-600, yellow-700)
- Error: Red (red-600, red-700)
- Gray: Gray scale (gray-50 ~ gray-900)
