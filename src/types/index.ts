export interface User {
  id: string;
  email: string;
  name: string;
  department: Department;
  role: UserRole;
  permissions: Permission[];
  createdAt: Date;
  lastLogin?: Date;
}

export interface Department {
  id: string;
  name: string;
  code: string;
  description?: string;
}

export type UserRole = 'admin' | 'manager' | 'operator' | 'viewer';

export type Permission = 
  | 'rpa.create'
  | 'rpa.execute'
  | 'rpa.schedule'
  | 'rpa.monitor'
  | 'reports.view'
  | 'reports.generate'
  | 'users.manage'
  | 'settings.configure';

export interface RPATask {
  id: string;
  name: string;
  description: string;
  type: TaskType;
  category: TaskCategory;
  department: Department;
  status: TaskStatus;
  schedule?: TaskSchedule;
  configuration: TaskConfiguration;
  createdBy: string;
  createdAt: Date;
  lastRun?: Date;
  nextRun?: Date;
  totalRuns: number;
  successfulRuns: number;
  failedRuns: number;
}

export type TaskType = 
  | 'data_collection'
  | 'data_classification'
  | 'data_entry'
  | 'report_generation'
  | 'notification'
  | 'monitoring';

export type TaskCategory =
  | 'civil_affairs'     // 민원
  | 'welfare'          // 복지
  | 'taxation'         // 세무
  | 'accounting'       // 회계
  | 'environment'      // 환경
  | 'construction'     // 도시건설
  | 'general';         // 일반

export type TaskStatus = 
  | 'active'
  | 'inactive' 
  | 'running'
  | 'completed'
  | 'failed'
  | 'scheduled';

export interface TaskSchedule {
  type: 'once' | 'recurring';
  startDate: Date;
  endDate?: Date;
  frequency?: 'daily' | 'weekly' | 'monthly';
  interval?: number;
  daysOfWeek?: number[];
  timeOfDay: string; // HH:mm format
}

export interface TaskConfiguration {
  sourceUrl?: string;
  targetSystem?: string;
  dataMapping?: Record<string, string>;
  filters?: Record<string, any>;
  outputFormat?: 'excel' | 'pdf' | 'csv' | 'json';
  notificationSettings?: NotificationSettings;
}

export interface NotificationSettings {
  email?: string[];
  sms?: string[];
  webhook?: string;
  onSuccess?: boolean;
  onFailure?: boolean;
}

export interface TaskExecution {
  id: string;
  taskId: string;
  status: 'running' | 'completed' | 'failed';
  startTime: Date;
  endTime?: Date;
  duration?: number;
  recordsProcessed: number;
  errorMessage?: string;
  logs: TaskLog[];
  output?: TaskOutput;
}

export interface TaskLog {
  timestamp: Date;
  level: 'info' | 'warning' | 'error';
  message: string;
  details?: any;
}

export interface TaskOutput {
  type: 'file' | 'data' | 'notification';
  path?: string;
  data?: any;
  metadata?: Record<string, any>;
}

export interface SystemStats {
  totalTasks: number;
  activeTasks: number;
  runningTasks: number;
  completedToday: number;
  failedToday: number;
  avgExecutionTime: number;
  systemLoad: number;
  uptime: number;
}
