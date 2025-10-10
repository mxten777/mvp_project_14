# 🚀 설치 가이드 (Installation Guide)

## 📋 목차
- [시스템 요구사항](#시스템-요구사항)
- [개발 환경 설정](#개발-환경-설정)
- [프로덕션 배포](#프로덕션-배포)
- [Firebase 설정](#firebase-설정)
- [Vercel 배포](#vercel-배포)
- [환경 변수 설정](#환경-변수-설정)
- [문제해결](#문제해결)

## 💻 시스템 요구사항

### 개발 환경
- **Node.js**: 18.0.0 이상 (LTS 권장)
- **npm**: 8.0.0 이상 또는 **yarn**: 1.22.0 이상
- **Git**: 2.30.0 이상
- **운영체제**: Windows 10/11, macOS 10.15+, Ubuntu 18.04+

### 권장 개발 도구
- **VS Code**: 최신 버전
- **Chrome DevTools**: 최신 버전
- **Firebase CLI**: 11.0.0 이상
- **Vercel CLI**: 28.0.0 이상

### 브라우저 지원
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🛠 개발 환경 설정

### 1. 저장소 클론

```bash
# HTTPS로 클론
git clone https://github.com/mxten777/mvp_project_14.git

# 또는 SSH로 클론
git clone git@github.com:mxten777/mvp_project_14.git

# 프로젝트 디렉토리로 이동
cd mvp_project_14
```

### 2. Node.js 버전 확인

```bash
# Node.js 버전 확인 (18.0.0 이상 필요)
node --version

# npm 버전 확인
npm --version
```

Node.js가 설치되지 않았다면:
- [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 다운로드
- 또는 [nvm](https://github.com/nvm-sh/nvm)을 사용하여 버전 관리

```bash
# nvm 사용 예시
nvm install 18
nvm use 18
```

### 3. 의존성 설치

```bash
# npm 사용
npm install

# 또는 yarn 사용
yarn install

# 또는 pnpm 사용 (더 빠른 설치)
pnpm install
```

### 4. 환경 변수 설정

```bash
# .env 파일 생성
cp .env.example .env

# 환경 변수 편집
nano .env  # 또는 VS Code에서 편집
```

`.env` 파일 내용:
```env
# Firebase 설정
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef

# 개발 환경 설정
VITE_APP_ENV=development
VITE_API_BASE_URL=http://localhost:3001
VITE_ENABLE_DEVTOOLS=true
```

### 5. 개발 서버 실행

```bash
# 개발 서버 시작
npm run dev

# 또는
yarn dev

# 브라우저에서 자동으로 열리지 않으면:
# http://localhost:5173 접속
```

### 6. 빌드 테스트

```bash
# 프로덕션 빌드 생성
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🔥 Firebase 설정

### 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. **"프로젝트 추가"** 클릭
3. 프로젝트 이름: `vibe-rpa-{환경}` (예: vibe-rpa-dev)
4. Google Analytics 설정 (선택사항)

### 2. 웹앱 등록

1. Firebase 프로젝트 설정으로 이동
2. **"앱 추가"** → **"웹"** 선택
3. 앱 닉네임: `Vibe-RPA Frontend`
4. 호스팅 설정 체크 (선택사항)
5. **앱 등록** 후 구성 정보 복사

### 3. Authentication 설정

```bash
# Firebase CLI 설치
npm install -g firebase-tools

# Firebase 로그인
firebase login

# 프로젝트 초기화
firebase init
```

Firebase Console에서:
1. **Authentication** → **시작하기**
2. **Sign-in method** 탭에서 이메일/비밀번호 활성화
3. **Users** 탭에서 테스트 사용자 추가

### 4. Firestore Database 설정

1. **Firestore Database** → **데이터베이스 만들기**
2. **테스트 모드로 시작** (개발용)
3. 서버 위치 선택: `asia-northeast1` (서울)

기본 보안 규칙:
```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 인증된 사용자만 접근 가능
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
    
    // 사용자별 데이터 접근 제어
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // RPA 작업 데이터
    match /tasks/{taskId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 5. Storage 설정

1. **Storage** → **시작하기**
2. **보안 규칙** 설정:

```javascript
// Storage Security Rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 6. Cloud Functions 설정 (선택사항)

```bash
# Functions 초기화
firebase init functions

# TypeScript 선택
# ESLint 사용 여부: Yes
# 종속성 설치: Yes

# Functions 배포
firebase deploy --only functions
```

## 🌐 Vercel 배포

### 1. Vercel 계정 연결

```bash
# Vercel CLI 설치
npm i -g vercel

# Vercel 로그인
vercel login

# GitHub 연동 시 웹에서 로그인
```

### 2. 프로젝트 배포

```bash
# 첫 배포 (설정)
vercel

# 질문 응답:
# Set up and deploy? Y
# Which scope? (개인/팀 선택)
# Link to existing project? N
# Project name: vibe-rpa-premium
# Directory: ./
# Override settings? N
```

### 3. 환경 변수 설정

Vercel Dashboard에서 또는 CLI로:

```bash
# 환경 변수 추가
vercel env add VITE_FIREBASE_API_KEY
vercel env add VITE_FIREBASE_AUTH_DOMAIN
vercel env add VITE_FIREBASE_PROJECT_ID
# ... 기타 환경 변수들
```

### 4. 프로덕션 배포

```bash
# 프로덕션 배포
vercel --prod

# 또는 Git push로 자동 배포 (GitHub 연동 시)
git push origin main
```

### 5. 커스텀 도메인 설정 (선택사항)

1. Vercel Dashboard → 프로젝트 → Settings → Domains
2. 도메인 추가: `vibe-rpa.yourdomain.com`
3. DNS 설정에 CNAME 레코드 추가

## ⚙️ 환경 변수 설정

### 개발 환경 (.env.development)

```env
# 기본 설정
VITE_APP_ENV=development
VITE_APP_NAME=Vibe-RPA Development
VITE_APP_VERSION=2.0.0

# API 설정
VITE_API_BASE_URL=http://localhost:3001
VITE_API_TIMEOUT=10000

# Firebase 설정 (개발용)
VITE_FIREBASE_API_KEY=dev_api_key
VITE_FIREBASE_AUTH_DOMAIN=vibe-rpa-dev.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=vibe-rpa-dev
VITE_FIREBASE_STORAGE_BUCKET=vibe-rpa-dev.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:dev

# 개발 도구
VITE_ENABLE_DEVTOOLS=true
VITE_ENABLE_MOCK_API=true
VITE_LOG_LEVEL=debug

# 외부 서비스
VITE_SENTRY_DSN=
VITE_ANALYTICS_ID=
```

### 프로덕션 환경 (.env.production)

```env
# 기본 설정
VITE_APP_ENV=production
VITE_APP_NAME=Vibe-RPA
VITE_APP_VERSION=2.0.0

# API 설정
VITE_API_BASE_URL=https://api.vibe-rpa.com
VITE_API_TIMEOUT=15000

# Firebase 설정 (프로덕션)
VITE_FIREBASE_API_KEY=prod_api_key
VITE_FIREBASE_AUTH_DOMAIN=vibe-rpa-prod.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=vibe-rpa-prod
VITE_FIREBASE_STORAGE_BUCKET=vibe-rpa-prod.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=987654321
VITE_FIREBASE_APP_ID=1:987654321:web:prod

# 개발 도구 (프로덕션에서는 비활성화)
VITE_ENABLE_DEVTOOLS=false
VITE_ENABLE_MOCK_API=false
VITE_LOG_LEVEL=error

# 외부 서비스
VITE_SENTRY_DSN=https://your-sentry-dsn
VITE_ANALYTICS_ID=G-XXXXXXXXXX
```

### 테스트 환경 (.env.test)

```env
# 기본 설정
VITE_APP_ENV=test
VITE_APP_NAME=Vibe-RPA Test
VITE_APP_VERSION=2.0.0

# API 설정 (Mock)
VITE_API_BASE_URL=http://localhost:3001
VITE_ENABLE_MOCK_API=true

# Firebase 설정 (테스트용)
VITE_FIREBASE_API_KEY=test_api_key
VITE_FIREBASE_AUTH_DOMAIN=vibe-rpa-test.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=vibe-rpa-test

# 테스트 설정
VITE_TEST_MODE=true
VITE_LOG_LEVEL=debug
```

## 🔧 추가 설정

### VSCode 확장 프로그램

권장 확장 프로그램 (`.vscode/extensions.json`):

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "firebase.vscode-firebase-explorer",
    "ms-vscode-remote.remote-containers"
  ]
}
```

### VSCode 설정 (`.vscode/settings.json`)

```json
{
  "typescript.preferences.preferTypeOnlyAutoImports": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

### Prettier 설정 (`.prettierrc`)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "jsxSingleQuote": false,
  "arrowParens": "avoid"
}
```

### ESLint 설정 확인

```bash
# ESLint 실행
npm run lint

# 자동 수정
npm run lint:fix
```

## 📦 Docker 설정 (선택사항)

### Dockerfile

```dockerfile
# Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production image
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  vibe-rpa:
    build: .
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    restart: unless-stopped

  # 개발용 서비스
  vibe-rpa-dev:
    image: node:18-alpine
    working_dir: /app
    command: npm run dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

### nginx.conf

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # SPA routing
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Gzip compression
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_types
            text/plain
            text/css
            text/xml
            text/javascript
            application/javascript
            application/xml+rss
            application/json;

        # Security headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;

        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

## 🚨 문제해결

### 일반적인 문제

#### 1. 포트 충돌 오류

```bash
Error: listen EADDRINUSE: address already in use :::5173
```

**해결방법:**
```bash
# 포트 사용 중인 프로세스 확인
lsof -ti:5173  # macOS/Linux
netstat -ano | findstr :5173  # Windows

# 프로세스 종료 후 다시 실행
npm run dev
```

#### 2. 모듈 설치 오류

```bash
npm ERR! peer dep missing
```

**해결방법:**
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install

# 또는 npm cache 정리
npm cache clean --force
npm install
```

#### 3. TypeScript 오류

```bash
TS2307: Cannot find module or its corresponding type declarations
```

**해결방법:**
```bash
# 타입 정의 설치
npm install --save-dev @types/react @types/react-dom

# TypeScript 설정 재생성
npx tsc --init
```

#### 4. Firebase 연결 오류

```bash
Firebase: Error (auth/configuration-not-found)
```

**해결방법:**
1. `.env` 파일의 Firebase 설정 확인
2. Firebase Console에서 앱 등록 상태 확인
3. API 키 권한 설정 확인

#### 5. Vercel 배포 실패

```bash
Error: Command "npm run build" exited with 1
```

**해결방법:**
1. 로컬에서 `npm run build` 테스트
2. 환경 변수 설정 확인
3. Node.js 버전 확인 (`package.json`의 engines 설정)

### 성능 최적화 문제

#### 1. 빌드 시간 단축

```bash
# Vite 캐시 정리
rm -rf node_modules/.vite
npm run dev

# 의존성 최적화
npm run build -- --force
```

#### 2. 번들 크기 최적화

```bash
# Bundle analyzer 사용
npm install --save-dev rollup-plugin-visualizer
npm run build
```

### 개발 환경 문제

#### 1. Hot Reload 작동 안함

**해결방법:**
```javascript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: {
      overlay: false
    }
  }
})
```

#### 2. 자동 완성 작동 안함

**해결방법:**
```bash
# TypeScript 서버 재시작
Ctrl+Shift+P → "TypeScript: Restart TS Server"

# VSCode 설정 확인
"typescript.suggest.autoImports": true
```

## 📞 지원

### 문제 보고

문제가 발생하면 다음 정보와 함께 이슈를 생성해주세요:

1. **운영체제**: Windows 10/11, macOS, Ubuntu 등
2. **Node.js 버전**: `node --version`
3. **npm 버전**: `npm --version`
4. **브라우저**: Chrome, Firefox, Safari 등
5. **에러 메시지**: 전체 스택 트레이스
6. **재현 단계**: 문제를 재현할 수 있는 단계

### 커뮤니티

- **GitHub Issues**: https://github.com/mxten777/mvp_project_14/issues
- **Discussions**: https://github.com/mxten777/mvp_project_14/discussions
- **Email**: support@vibe-rpa.com

### 유용한 링크

- **React 문서**: https://react.dev/
- **Vite 문서**: https://vitejs.dev/
- **TailwindCSS 문서**: https://tailwindcss.com/
- **Firebase 문서**: https://firebase.google.com/docs
- **Vercel 문서**: https://vercel.com/docs

---

📝 **이 가이드가 도움이 되었나요?** 

문제가 있거나 개선 제안이 있으시면 [이슈를 생성](https://github.com/mxten777/mvp_project_14/issues/new)해주세요!