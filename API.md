# 📡 API 문서 (API Documentation)

## 📋 목차
- [RPA Tasks API](#rpa-tasks-api)
- [Authentication API](#authentication-api)
- [File Management API](#file-management-api)
- [Notification API](#notification-api)
- [Error Handling](#error-handling)

## 🎯 RPA Tasks API

### 작업 목록 조회

**GET** `/api/tasks`

```typescript
// Request
interface GetTasksRequest {
  page?: number;
  limit?: number;
  status?: TaskStatus;
  category?: TaskCategory;
  search?: string;
}

// Response
interface GetTasksResponse {
  tasks: RPATask[];
  total: number;
  page: number;
  limit: number;
}

// Example
const response = await fetch('/api/tasks?status=running&page=1&limit=10');
const data: GetTasksResponse = await response.json();
```

### 작업 생성

**POST** `/api/tasks`

```typescript
// Request Body
interface CreateTaskRequest {
  name: string;
  description: string;
  category: TaskCategory;
  priority: TaskPriority;
  tags: string[];
  scheduledAt?: string; // ISO 8601 format
  config?: TaskConfig;
}

// Response
interface CreateTaskResponse {
  task: RPATask;
  message: string;
}

// Example
const taskData: CreateTaskRequest = {
  name: '민원 데이터 처리',
  description: '주민등록 관련 민원 데이터를 자동으로 처리합니다.',
  category: 'data-processing',
  priority: 'high',
  tags: ['민원', '주민등록', '자동화']
};

const response = await fetch('/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(taskData)
});
```

### 작업 상세 조회

**GET** `/api/tasks/{taskId}`

```typescript
// Response
interface GetTaskResponse {
  task: RPATask;
  executionHistory: TaskExecution[];
  logs: TaskLog[];
}

// Example
const response = await fetch('/api/tasks/task_123');
const data: GetTaskResponse = await response.json();
```

### 작업 수정

**PUT** `/api/tasks/{taskId}`

```typescript
// Request Body
interface UpdateTaskRequest {
  name?: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  tags?: string[];
  config?: Partial<TaskConfig>;
}

// Response
interface UpdateTaskResponse {
  task: RPATask;
  message: string;
}
```

### 작업 삭제

**DELETE** `/api/tasks/{taskId}`

```typescript
// Response
interface DeleteTaskResponse {
  success: boolean;
  message: string;
}

// Example
const response = await fetch('/api/tasks/task_123', {
  method: 'DELETE'
});
```

### 작업 실행

**POST** `/api/tasks/{taskId}/execute`

```typescript
// Request Body
interface ExecuteTaskRequest {
  immediate?: boolean;
  scheduledAt?: string;
  config?: Partial<TaskConfig>;
}

// Response
interface ExecuteTaskResponse {
  executionId: string;
  status: 'queued' | 'running';
  message: string;
}

// Example
const response = await fetch('/api/tasks/task_123/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ immediate: true })
});
```

### 작업 중지

**POST** `/api/tasks/{taskId}/stop`

```typescript
// Response
interface StopTaskResponse {
  success: boolean;
  message: string;
  stoppedAt: string;
}
```

## 🔐 Authentication API

### 로그인

**POST** `/api/auth/login`

```typescript
// Request Body
interface LoginRequest {
  email: string;
  password: string;
  remember?: boolean;
}

// Response
interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresAt: string;
}

// Example
const loginData: LoginRequest = {
  email: 'admin@vibe-rpa.com',
  password: 'securePassword123',
  remember: true
};

const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(loginData)
});
```

### 토큰 갱신

**POST** `/api/auth/refresh`

```typescript
// Request Body
interface RefreshTokenRequest {
  refreshToken: string;
}

// Response
interface RefreshTokenResponse {
  token: string;
  expiresAt: string;
}
```

### 로그아웃

**POST** `/api/auth/logout`

```typescript
// Headers
Authorization: Bearer {token}

// Response
interface LogoutResponse {
  success: boolean;
  message: string;
}
```

### 사용자 정보 조회

**GET** `/api/auth/me`

```typescript
// Headers
Authorization: Bearer {token}

// Response
interface GetUserResponse {
  user: User;
  permissions: Permission[];
  department: Department;
}
```

## 📁 File Management API

### 파일 업로드

**POST** `/api/files/upload`

```typescript
// Request (multipart/form-data)
interface UploadFileRequest {
  file: File;
  category?: 'document' | 'image' | 'data';
  taskId?: string;
}

// Response
interface UploadFileResponse {
  fileId: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  downloadUrl: string;
}

// Example
const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('category', 'document');

const response = await fetch('/api/files/upload', {
  method: 'POST',
  body: formData
});
```

### 파일 다운로드

**GET** `/api/files/{fileId}/download`

```typescript
// Response: File blob
// Example
const response = await fetch('/api/files/file_123/download');
const blob = await response.blob();
const url = URL.createObjectURL(blob);

// 다운로드 트리거
const a = document.createElement('a');
a.href = url;
a.download = 'filename.pdf';
a.click();
```

### 파일 목록 조회

**GET** `/api/files`

```typescript
// Query Parameters
interface GetFilesRequest {
  page?: number;
  limit?: number;
  category?: string;
  taskId?: string;
  search?: string;
}

// Response
interface GetFilesResponse {
  files: FileInfo[];
  total: number;
  page: number;
  limit: number;
}
```

## 🔔 Notification API

### 알림 목록 조회

**GET** `/api/notifications`

```typescript
// Query Parameters
interface GetNotificationsRequest {
  page?: number;
  limit?: number;
  unreadOnly?: boolean;
  type?: NotificationType;
}

// Response
interface GetNotificationsResponse {
  notifications: Notification[];
  unreadCount: number;
  total: number;
}
```

### 알림 읽음 처리

**PUT** `/api/notifications/{notificationId}/read`

```typescript
// Response
interface MarkAsReadResponse {
  success: boolean;
  message: string;
}
```

### 알림 설정 조회

**GET** `/api/notifications/settings`

```typescript
// Response
interface NotificationSettingsResponse {
  email: boolean;
  sms: boolean;
  push: boolean;
  types: {
    taskCompleted: boolean;
    taskFailed: boolean;
    systemMaintenance: boolean;
    securityAlert: boolean;
  };
}
```

### 알림 설정 수정

**PUT** `/api/notifications/settings`

```typescript
// Request Body
interface UpdateNotificationSettingsRequest {
  email?: boolean;
  sms?: boolean;
  push?: boolean;
  types?: Partial<NotificationTypes>;
}
```

## 📊 Statistics API

### 대시보드 통계

**GET** `/api/stats/dashboard`

```typescript
// Response
interface DashboardStatsResponse {
  summary: {
    totalTasks: number;
    runningTasks: number;
    completedToday: number;
    failedToday: number;
  };
  recentActivity: Activity[];
  performanceMetrics: {
    averageExecutionTime: number;
    successRate: number;
    resourceUsage: number;
  };
  tasksByCategory: CategoryStat[];
  executionTrend: TrendData[];
}
```

### 부서별 통계

**GET** `/api/stats/departments`

```typescript
// Response
interface DepartmentStatsResponse {
  departments: DepartmentStat[];
  comparison: {
    thisMonth: number;
    lastMonth: number;
    growth: number;
  };
}
```

## 🛠 System API

### 시스템 상태 조회

**GET** `/api/system/health`

```typescript
// Response
interface SystemHealthResponse {
  status: 'healthy' | 'degraded' | 'down';
  components: {
    database: ComponentStatus;
    queue: ComponentStatus;
    storage: ComponentStatus;
    auth: ComponentStatus;
  };
  uptime: number;
  version: string;
}
```

### 시스템 설정 조회

**GET** `/api/system/config`

```typescript
// Headers
Authorization: Bearer {admin_token}

// Response
interface SystemConfigResponse {
  maxConcurrentTasks: number;
  defaultTimeout: number;
  retryAttempts: number;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  features: {
    aiAssistant: boolean;
    realTimeMonitoring: boolean;
    advancedReports: boolean;
  };
}
```

## 🚨 Error Handling

### 표준 에러 응답

```typescript
interface ApiError {
  error: {
    code: string;
    message: string;
    details?: any;
    timestamp: string;
    requestId: string;
  };
}

// HTTP 상태 코드별 의미
// 400: Bad Request - 잘못된 요청
// 401: Unauthorized - 인증 필요
// 403: Forbidden - 권한 없음
// 404: Not Found - 리소스 없음
// 409: Conflict - 리소스 충돌
// 422: Unprocessable Entity - 유효성 검사 실패
// 429: Too Many Requests - 요청 제한 초과
// 500: Internal Server Error - 서버 오류
```

### 일반적인 에러 코드

```typescript
enum ErrorCodes {
  // 인증 관련
  INVALID_CREDENTIALS = 'AUTH001',
  TOKEN_EXPIRED = 'AUTH002',
  INSUFFICIENT_PERMISSIONS = 'AUTH003',
  
  // 작업 관련
  TASK_NOT_FOUND = 'TASK001',
  TASK_ALREADY_RUNNING = 'TASK002',
  INVALID_TASK_CONFIG = 'TASK003',
  TASK_EXECUTION_FAILED = 'TASK004',
  
  // 파일 관련
  FILE_TOO_LARGE = 'FILE001',
  UNSUPPORTED_FILE_TYPE = 'FILE002',
  FILE_UPLOAD_FAILED = 'FILE003',
  
  // 시스템 관련
  SYSTEM_MAINTENANCE = 'SYS001',
  RATE_LIMIT_EXCEEDED = 'SYS002',
  DATABASE_ERROR = 'SYS003'
}
```

### 에러 처리 예시

```typescript
// API 호출 wrapper 함수
async function apiCall<T>(
  url: string, 
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`,
        ...options?.headers
      }
    });

    if (!response.ok) {
      const errorData: ApiError = await response.json();
      throw new ApiException(
        errorData.error.code,
        errorData.error.message,
        response.status
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiException) {
      throw error;
    }
    
    // 네트워크 오류 등
    throw new ApiException(
      'NETWORK_ERROR',
      '네트워크 연결을 확인해주세요.',
      0
    );
  }
}

// 커스텀 에러 클래스
class ApiException extends Error {
  constructor(
    public code: string,
    public message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = 'ApiException';
  }
}

// 사용 예시
try {
  const tasks = await apiCall<GetTasksResponse>('/api/tasks');
  console.log(tasks);
} catch (error) {
  if (error instanceof ApiException) {
    switch (error.code) {
      case 'AUTH002':
        // 토큰 만료 - 재로그인 유도
        redirectToLogin();
        break;
      case 'SYS002':
        // 요청 제한 - 사용자에게 알림
        showToast('요청이 너무 많습니다. 잠시 후 시도해주세요.', 'warning');
        break;
      default:
        showToast(error.message, 'error');
    }
  }
}
```

## 🔧 개발자 도구

### API 테스트

```bash
# curl을 이용한 API 테스트
curl -X POST "https://api.vibe-rpa.com/api/tasks" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "테스트 작업",
    "description": "API 테스트용 작업",
    "category": "data-processing",
    "priority": "medium",
    "tags": ["test"]
  }'
```

### Postman Collection

```json
{
  "info": {
    "name": "Vibe-RPA API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "auth": {
    "type": "bearer",
    "bearer": [
      {
        "key": "token",
        "value": "{{authToken}}",
        "type": "string"
      }
    ]
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "https://api.vibe-rpa.com"
    },
    {
      "key": "authToken",
      "value": ""
    }
  ]
}
```

### SDK 사용법

```typescript
// Vibe-RPA JavaScript SDK
import { VibeRPAClient } from '@vibe-rpa/sdk';

const client = new VibeRPAClient({
  baseURL: 'https://api.vibe-rpa.com',
  apiKey: 'your_api_key'
});

// 작업 생성
const task = await client.tasks.create({
  name: '민원 처리 작업',
  category: 'data-processing'
});

// 작업 실행
await client.tasks.execute(task.id);

// 실시간 상태 구독
client.tasks.subscribe(task.id, (status) => {
  console.log('작업 상태 변경:', status);
});
```

## 📈 Rate Limiting

### 요청 제한

```typescript
// 기본 제한: 사용자당 분당 100회
// Premium: 사용자당 분당 1000회

// 응답 헤더
{
  'X-RateLimit-Limit': '100',
  'X-RateLimit-Remaining': '95',
  'X-RateLimit-Reset': '1640995200'
}

// 제한 초과 시 응답
{
  "error": {
    "code": "SYS002",
    "message": "API 요청 제한을 초과했습니다. 1분 후에 다시 시도해주세요.",
    "retryAfter": 60
  }
}
```

### 배치 요청

```typescript
// 여러 작업을 한 번에 처리
POST /api/tasks/batch

// Request Body
interface BatchTaskRequest {
  operations: Array<{
    method: 'CREATE' | 'UPDATE' | 'DELETE';
    data: any;
    id?: string;
  }>;
}

// Response
interface BatchTaskResponse {
  results: Array<{
    success: boolean;
    data?: any;
    error?: ApiError;
  }>;
}
```