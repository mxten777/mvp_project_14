# 🛠 기술 문서 (Technical Documentation)

## 📋 목차
- [아키텍처 개요](#아키텍처-개요)
- [컴포넌트 가이드](#컴포넌트-가이드)
- [커스텀 훅 가이드](#커스텀-훅-가이드)
- [스타일 가이드](#스타일-가이드)
- [성능 최적화](#성능-최적화)
- [배포 가이드](#배포-가이드)

## 🏛 아키텍처 개요

### Frontend Architecture
```
┌─────────────────────────────────────────────────┐
│                  Presentation Layer             │
├─────────────────────────────────────────────────┤
│  React Components (TSX)                         │
│  ├── Pages (Dashboard, Tasks, Schedule...)      │
│  ├── Components (Modal, Toast, Dropdown...)     │
│  └── Layout (Header, Sidebar, Layout)           │
├─────────────────────────────────────────────────┤
│                  Business Logic Layer          │
├─────────────────────────────────────────────────┤
│  Custom Hooks                                   │
│  ├── useAsync - 비동기 상태 관리                 │
│  ├── useToast - 알림 관리                       │
│  ├── useLocalStorage - 로컬 저장소              │
│  └── useRPATasks - RPA API 관리                 │
├─────────────────────────────────────────────────┤
│                  Data Layer                     │
├─────────────────────────────────────────────────┤
│  API Services                                   │
│  ├── Firebase Auth                              │
│  ├── Firestore Database                         │
│  └── Cloud Functions                            │
└─────────────────────────────────────────────────┘
```

### Data Flow
```
User Input → Component → Custom Hook → API Service → Firebase
                ↓                            ↓
           State Update ← Hook State ← Response Data
```

## 🧩 컴포넌트 가이드

### Modal 컴포넌트

#### 사용법
```tsx
import { Modal } from '../components/Modal';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="작업 생성"
      size="lg"
    >
      <form>
        {/* 모달 내용 */}
      </form>
    </Modal>
  );
}
```

#### Props 인터페이스
```typescript
interface ModalProps {
  isOpen: boolean;           // 모달 표시 여부
  onClose: () => void;       // 닫기 콜백
  title?: string;            // 모달 제목
  children: ReactNode;       // 모달 내용
  size?: 'sm' | 'md' | 'lg' | 'xl'; // 크기
  showCloseButton?: boolean; // 닫기 버튼 표시 여부
}
```

#### 특징
- **Glass Morphism** 배경 효과
- **키보드 네비게이션** (ESC로 닫기)
- **외부 클릭으로 닫기**
- **Focus Trap** (접근성)
- **애니메이션** 진입/종료

### Toast 컴포넌트

#### 사용법
```tsx
import { useToast } from '../hooks/useToast';

function MyComponent() {
  const { success, error, warning, info } = useToast();

  const handleSave = () => {
    try {
      // 저장 로직
      success('성공적으로 저장되었습니다!');
    } catch (err) {
      error('저장에 실패했습니다.');
    }
  };

  return <button onClick={handleSave}>저장</button>;
}
```

#### 토스트 타입
- **success** - 성공 메시지 (녹색)
- **error** - 오류 메시지 (빨간색)
- **warning** - 경고 메시지 (노란색)
- **info** - 정보 메시지 (파란색)

#### 특징
- **자동 닫기** (기본 5초)
- **프로그레스 바** 표시
- **액션 버튼** 지원
- **스택 관리** (최대 5개)
- **애니메이션** 슬라이드 효과

### Dropdown 컴포넌트

#### 사용법
```tsx
import { Dropdown } from '../components/Dropdown';

const options = [
  { value: 'pending', label: '대기중', icon: <Clock /> },
  { value: 'running', label: '실행중', icon: <Play /> },
  { value: 'completed', label: '완료', icon: <Check /> }
];

function StatusSelector() {
  const [status, setStatus] = useState('pending');

  return (
    <Dropdown
      options={options}
      value={status}
      onChange={setStatus}
      placeholder="상태를 선택하세요"
      variant="outline"
      size="md"
    />
  );
}
```

#### 변형
- **default** - 기본 스타일
- **ghost** - 투명 배경
- **outline** - 테두리만

## 🎯 커스텀 훅 가이드

### useAsync

비동기 작업의 상태(로딩, 성공, 에러)를 관리합니다.

```tsx
import { useAsync } from '../hooks/useAsync';

function TaskManager() {
  const { data, loading, error, execute } = useAsync();

  const handleCreateTask = async () => {
    const taskData = { name: '새 작업', type: 'automation' };
    
    try {
      const result = await execute(() => 
        fetch('/api/tasks', {
          method: 'POST',
          body: JSON.stringify(taskData)
        }).then(res => res.json())
      );
      console.log('생성된 작업:', result);
    } catch (err) {
      console.error('작업 생성 실패:', err);
    }
  };

  return (
    <div>
      <button onClick={handleCreateTask} disabled={loading}>
        {loading ? '생성 중...' : '작업 생성'}
      </button>
      
      {error && <p className="text-red-600">{error}</p>}
      {data && <p className="text-green-600">작업이 생성되었습니다!</p>}
    </div>
  );
}
```

### useRPATasks

RPA 작업 관련 모든 API 호출을 관리합니다.

```tsx
import { useRPATasks } from '../hooks/useRPATasks';

function TaskList() {
  const {
    tasks,           // 작업 목록
    tasksLoading,    // 로딩 상태
    createTask,      // 작업 생성
    updateTask,      // 작업 수정
    deleteTask,      // 작업 삭제
    executeTask,     // 작업 실행
    fetchTasks       // 목록 새로고침
  } = useRPATasks();

  useEffect(() => {
    fetchTasks(); // 컴포넌트 마운트 시 작업 목록 로드
  }, []);

  const handleCreate = async () => {
    await createTask({
      name: '민원 데이터 처리',
      description: '주민등록 민원 자동 처리',
      status: 'pending',
      progress: 0,
      category: 'data-processing',
      priority: 'high',
      tags: ['민원', '자동화']
    });
  };

  return (
    <div>
      <button onClick={handleCreate}>새 작업 생성</button>
      
      {tasksLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {tasks?.map(task => (
            <li key={task.id}>
              {task.name} - {task.status}
              <button onClick={() => executeTask(task.id)}>
                실행
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### useLocalStorage

타입 안전한 로컬 스토리지 관리를 제공합니다.

```tsx
import { useLocalStorage } from '../hooks/useLocalStorage';

interface UserPreferences {
  theme: 'light' | 'dark';
  sidebarCollapsed: boolean;
  language: 'ko' | 'en';
}

function Settings() {
  const [preferences, setPreferences] = useLocalStorage<UserPreferences>(
    'user-preferences',
    {
      theme: 'light',
      sidebarCollapsed: false,
      language: 'ko'
    }
  );

  const updateTheme = (theme: 'light' | 'dark') => {
    setPreferences(prev => ({ ...prev, theme }));
  };

  return (
    <div>
      <h3>테마 설정</h3>
      <select 
        value={preferences.theme} 
        onChange={(e) => updateTheme(e.target.value as 'light' | 'dark')}
      >
        <option value="light">라이트</option>
        <option value="dark">다크</option>
      </select>
    </div>
  );
}
```

## 🎨 스타일 가이드

### TailwindCSS 3.4.4 활용

#### Container Queries
```tsx
// 컨테이너 크기에 따른 반응형 디자인
<div className="@container">
  <div className="@sm:grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4">
    {/* 컨테이너 크기에 따라 그리드 조정 */}
  </div>
</div>
```

#### Dynamic Viewport Units
```tsx
// 동적 뷰포트 단위 사용
<div className="dvh-screen dvw-full">
  {/* 실제 가시 영역 높이/너비 사용 */}
</div>
```

#### Glass Morphism 효과
```css
/* 커스텀 CSS 클래스 */
.glass {
  @apply bg-white/80 backdrop-blur-md border border-white/20;
}

.glass-card {
  @apply glass rounded-xl shadow-lg hover:shadow-xl transition-all duration-300;
}
```

#### 프리미엄 애니메이션
```tsx
// 호버 효과
<div className="hover-lift premium-shadow transition-all duration-300">
  {/* 마우스 오버 시 부드러운 리프트 효과 */}
</div>

// 페이드인 애니메이션
<div className="animate-fade-in">
  {/* 부드러운 페이드인 */}
</div>

// 슬라이드 업 애니메이션
<div className="animate-slide-up">
  {/* 아래에서 위로 슬라이드 */}
</div>
```

### 색상 시스템

#### Primary Colors
```css
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-700: #1d4ed8;
```

#### Status Colors
```css
--success: #059669;
--warning: #d97706;
--error: #dc2626;
--info: #0284c7;
```

#### 사용 예시
```tsx
<div className="bg-primary-50 text-primary-700 border border-primary-200">
  Primary 컬러 조합
</div>

<div className="bg-success-50 text-success-700">
  성공 상태 표시
</div>
```

### 타이포그래피

#### 폰트 패밀리
- **Pretendard Variable**: 한글 본문 (`font-sans`)
- **Inter Variable**: 영문 UI (`font-display`) 
- **JetBrains Mono**: 코드/데이터 (`font-mono`)

#### 사용 예시
```tsx
<h1 className="font-display font-bold text-2xl">
  제목 텍스트 (Inter Variable)
</h1>

<p className="font-sans text-base leading-relaxed">
  본문 텍스트 (Pretendard Variable)
</p>

<code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
  코드 텍스트 (JetBrains Mono)
</code>
```

## ⚡ 성능 최적화

### 번들 분석

현재 빌드 결과:
```
dist/index.html                   0.64 kB │ gzip:  0.39 kB
dist/assets/index-BiWOb5lH.css   60.20 kB │ gzip:  8.66 kB
dist/assets/index-C04xMu5L.js   313.92 kB │ gzip: 90.93 kB
```

### Code Splitting

페이지별 lazy loading 구현:
```tsx
import { lazy, Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

// 페이지 컴포넌트를 lazy load
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Tasks = lazy(() => import('./pages/Tasks'));
const Schedule = lazy(() => import('./pages/Schedule'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Suspense>
  );
}
```

### 이미지 최적화

```tsx
// WebP 형식 우선 사용
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="설명" loading="lazy" />
</picture>

// Next.js Image 컴포넌트 스타일 최적화
<img 
  src="/images/logo.svg"
  alt="Vibe-RPA Logo"
  width={150}
  height={50}
  loading="lazy"
  className="w-auto h-auto"
/>
```

### CSS 최적화

```css
/* Critical CSS를 인라인으로 */
<style>
  /* 필수 스타일만 여기에 */
  .critical { display: flex; }
</style>

/* 나머지 CSS는 비동기 로딩 */
<link rel="preload" href="/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

## 🚀 배포 가이드

### Vercel 배포

#### 1. 자동 배포 설정
```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 연결
vercel

# 프로덕션 배포
vercel --prod
```

#### 2. 환경 변수 설정
```bash
# Vercel 대시보드에서 설정
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

#### 3. 빌드 최적화 설정

`vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm ci",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### GitHub Actions CI/CD

`.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to Vercel
        uses: vercel/action@v28
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### 모니터링 설정

#### 1. Web Vitals 측정
```tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Google Analytics나 다른 분석 도구로 전송
  gtag('event', metric.name, {
    value: Math.round(metric.value),
    event_label: metric.id,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

#### 2. 에러 트래킹
```tsx
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  environment: process.env.NODE_ENV,
});

// 에러 바운더리
<Sentry.ErrorBoundary fallback={ErrorFallback}>
  <App />
</Sentry.ErrorBoundary>
```

## 🔧 디버깅 가이드

### React Developer Tools

1. **Components 탭**: 컴포넌트 계층 구조 확인
2. **Profiler 탭**: 렌더링 성능 분석
3. **Props 검사**: 실시간 props 값 확인

### Network 최적화

```typescript
// API 호출 디버깅
const debugAPI = (url: string, options?: RequestInit) => {
  console.group(`🌐 API Call: ${url}`);
  console.log('Options:', options);
  
  return fetch(url, options)
    .then(response => {
      console.log('Response:', response.status, response.statusText);
      return response;
    })
    .finally(() => {
      console.groupEnd();
    });
};
```

### 성능 프로파일링

```typescript
// 컴포넌트 렌더링 시간 측정
const ProfiledComponent = ({ children }) => {
  useEffect(() => {
    const start = performance.now();
    
    return () => {
      const end = performance.now();
      console.log(`렌더링 시간: ${end - start}ms`);
    };
  });
  
  return children;
};
```