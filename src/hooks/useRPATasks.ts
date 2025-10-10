import { useAsync } from './useAsync';
import { useToast } from './useToast';

// RPA 작업 타입 정의
export interface RPATask {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'paused';
  progress: number;
  createdAt: Date;
  updatedAt: Date;
  scheduledAt?: Date;
  lastExecutedAt?: Date;
  executionTime?: number;
  errorMessage?: string;
  category: 'data-processing' | 'document-management' | 'web-scraping' | 'system-integration' | 'reporting';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  tags: string[];
}

// 시뮬레이션 API 함수들
const simulateDelay = (ms: number = 1000) => 
  new Promise(resolve => setTimeout(resolve, ms));

const mockTasks: RPATask[] = [
  {
    id: '1',
    name: '민원 데이터 처리',
    description: '주민등록 관련 민원 데이터를 자동으로 처리합니다.',
    status: 'running',
    progress: 65,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date(),
    lastExecutedAt: new Date(),
    executionTime: 1200,
    category: 'data-processing',
    priority: 'high',
    tags: ['민원', '주민등록', '자동화'],
  },
  {
    id: '2',
    name: '문서 자동 분류',
    description: '접수된 공문을 카테고리별로 자동 분류합니다.',
    status: 'completed',
    progress: 100,
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-14'),
    lastExecutedAt: new Date('2024-01-14'),
    executionTime: 300,
    category: 'document-management',
    priority: 'medium',
    tags: ['공문', '분류', '문서관리'],
  },
  {
    id: '3',
    name: '세금 고지서 발송',
    description: '지방세 고지서를 자동으로 생성하고 발송합니다.',
    status: 'pending',
    progress: 0,
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16'),
    scheduledAt: new Date('2024-01-20'),
    category: 'reporting',
    priority: 'urgent',
    tags: ['세금', '고지서', '발송'],
  },
];

// API 시뮬레이션 함수들
export const taskAPI = {
  // 모든 작업 조회
  async fetchTasks(): Promise<RPATask[]> {
    await simulateDelay(800);
    return mockTasks;
  },

  // 특정 작업 조회
  async fetchTask(id: string): Promise<RPATask> {
    await simulateDelay(500);
    const task = mockTasks.find(t => t.id === id);
    if (!task) throw new Error('작업을 찾을 수 없습니다.');
    return task;
  },

  // 작업 생성
  async createTask(taskData: Omit<RPATask, 'id' | 'createdAt' | 'updatedAt'>): Promise<RPATask> {
    await simulateDelay(1000);
    const newTask: RPATask = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockTasks.push(newTask);
    return newTask;
  },

  // 작업 수정
  async updateTask(id: string, updates: Partial<RPATask>): Promise<RPATask> {
    await simulateDelay(800);
    const taskIndex = mockTasks.findIndex(t => t.id === id);
    if (taskIndex === -1) throw new Error('작업을 찾을 수 없습니다.');
    
    mockTasks[taskIndex] = {
      ...mockTasks[taskIndex],
      ...updates,
      updatedAt: new Date(),
    };
    return mockTasks[taskIndex];
  },

  // 작업 삭제
  async deleteTask(id: string): Promise<void> {
    await simulateDelay(600);
    const taskIndex = mockTasks.findIndex(t => t.id === id);
    if (taskIndex === -1) throw new Error('작업을 찾을 수 없습니다.');
    mockTasks.splice(taskIndex, 1);
  },

  // 작업 실행
  async executeTask(id: string): Promise<void> {
    await simulateDelay(1500);
    const task = mockTasks.find(t => t.id === id);
    if (!task) throw new Error('작업을 찾을 수 없습니다.');
    
    task.status = 'running';
    task.progress = 0;
    task.lastExecutedAt = new Date();
    task.updatedAt = new Date();
  },

  // 작업 중지
  async stopTask(id: string): Promise<void> {
    await simulateDelay(500);
    const task = mockTasks.find(t => t.id === id);
    if (!task) throw new Error('작업을 찾을 수 없습니다.');
    
    task.status = 'paused';
    task.updatedAt = new Date();
  },
};

// RPA 작업 관리 훅
export function useRPATasks() {
  const toast = useToast();

  // 모든 작업 조회
  const {
    data: tasks,
    loading: tasksLoading,
    error: tasksError,
    execute: fetchTasks,
  } = useAsync<RPATask[]>();

  // 작업 생성
  const {
    loading: createLoading,
    execute: createTask,
  } = useAsync<RPATask>();

  // 작업 수정
  const {
    loading: updateLoading,
    execute: updateTask,
  } = useAsync<RPATask>();

  // 작업 삭제
  const {
    loading: deleteLoading,
    execute: deleteTask,
  } = useAsync<void>();

  // 작업 실행
  const {
    loading: executeLoading,
    execute: executeTask,
  } = useAsync<void>();

  // 작업 중지
  const {
    loading: stopLoading,
    execute: stopTask,
  } = useAsync<void>();

  // 래퍼 함수들
  const handleFetchTasks = async () => {
    try {
      const result = await fetchTasks(taskAPI.fetchTasks);
      return result;
    } catch (error) {
      toast.error('작업 목록을 불러오는데 실패했습니다.');
      throw error;
    }
  };

  const handleCreateTask = async (taskData: Omit<RPATask, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const result = await createTask(() => taskAPI.createTask(taskData));
      toast.success('새 작업이 생성되었습니다.');
      // 목록 새로고침
      await handleFetchTasks();
      return result;
    } catch (error) {
      toast.error('작업 생성에 실패했습니다.');
      throw error;
    }
  };

  const handleUpdateTask = async (id: string, updates: Partial<RPATask>) => {
    try {
      const result = await updateTask(() => taskAPI.updateTask(id, updates));
      toast.success('작업이 수정되었습니다.');
      // 목록 새로고침
      await handleFetchTasks();
      return result;
    } catch (error) {
      toast.error('작업 수정에 실패했습니다.');
      throw error;
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTask(() => taskAPI.deleteTask(id));
      toast.success('작업이 삭제되었습니다.');
      // 목록 새로고침
      await handleFetchTasks();
    } catch (error) {
      toast.error('작업 삭제에 실패했습니다.');
      throw error;
    }
  };

  const handleExecuteTask = async (id: string) => {
    try {
      await executeTask(() => taskAPI.executeTask(id));
      toast.success('작업이 실행되었습니다.');
      // 목록 새로고침
      await handleFetchTasks();
    } catch (error) {
      toast.error('작업 실행에 실패했습니다.');
      throw error;
    }
  };

  const handleStopTask = async (id: string) => {
    try {
      await stopTask(() => taskAPI.stopTask(id));
      toast.success('작업이 중지되었습니다.');
      // 목록 새로고침
      await handleFetchTasks();
    } catch (error) {
      toast.error('작업 중지에 실패했습니다.');
      throw error;
    }
  };

  return {
    // 데이터
    tasks,
    
    // 로딩 상태
    tasksLoading,
    createLoading,
    updateLoading,
    deleteLoading,
    executeLoading,
    stopLoading,
    
    // 에러
    tasksError,
    
    // 액션
    fetchTasks: handleFetchTasks,
    createTask: handleCreateTask,
    updateTask: handleUpdateTask,
    deleteTask: handleDeleteTask,
    executeTask: handleExecuteTask,
    stopTask: handleStopTask,
  };
}