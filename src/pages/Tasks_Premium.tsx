import { Plus, Play, Pause, Edit, Trash2, Eye, BarChart3, Clock, Zap } from 'lucide-react';

const tasks = [
  {
    id: '1',
    name: '정부24 민원 자동 분류',
    description: 'AI 기반으로 정부24 민원을 자동 분류하고 담당 부서에 배정',
    department: '민원과',
    type: 'AI 분류',
    status: 'active',
    lastRun: '2025-08-03 09:15',
    nextRun: '2025-08-03 10:00',
    successRate: 95,
    icon: '🤖',
    color: 'primary',
  },
  {
    id: '2',
    name: '복지대상자 검증 및 업데이트',
    description: '복지대상자 자격 요건을 자동으로 검증하고 DB를 업데이트',
    department: '복지정책과',
    type: '데이터 검증',
    status: 'running',
    lastRun: '2025-08-03 09:30',
    nextRun: '매일 09:00',
    successRate: 88,
    icon: '🔍',
    color: 'success',
  },
  {
    id: '3',
    name: '세외수입 체납자 알림 발송',
    description: '체납자에게 SMS 및 이메일로 납부 안내 자동 발송',
    department: '세무과',
    type: '알림 발송',
    status: 'active',
    lastRun: '2025-08-02 16:00',
    nextRun: '2025-08-03 16:00',
    successRate: 92,
    icon: '📧',
    color: 'warning',
  },
  {
    id: '4',
    name: '도로굴착 허가 승인 보조',
    description: '도로굴착 허가 신청서를 자동 검토하고 승인 보조',
    department: '도시건설과',
    type: '문서 처리',
    status: 'inactive',
    lastRun: '2025-08-01 14:30',
    nextRun: '-',
    successRate: 85,
    icon: '📋',
    color: 'error',
  },
];

const stats = [
  { label: '총 작업', value: '24', icon: Zap, color: 'primary', change: '+3' },
  { label: '실행 중', value: '8', icon: Play, color: 'success', change: '+2' },
  { label: '대기 중', value: '12', icon: Clock, color: 'warning', change: '0' },
  { label: '비활성', value: '4', icon: Pause, color: 'error', change: '-1' },
];

function TasksPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'from-success-400 to-success-600';
      case 'running':
        return 'from-primary-400 to-primary-600';
      case 'inactive':
        return 'from-gray-400 to-gray-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return '활성';
      case 'running':
        return '실행중';
      case 'inactive':
        return '비활성';
      default:
        return '알수없음';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col laptop:flex-row laptop:items-center laptop:justify-between gap-6">
        <div className="animate-slide-up">
          <h1 className="text-3xl laptop:text-4xl font-display font-bold text-gradient">
            RPA 작업 관리
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 font-display">
            자동화 작업 생성, 관리, 모니터링
          </p>
        </div>
        <div className="flex items-center space-x-4 animate-scale-in">
          <button className="btn-secondary flex items-center space-x-2">
            <BarChart3 className="size-5" />
            <span>통계 보기</span>
          </button>
          <button className="btn-primary flex items-center space-x-2 shadow-glow hover:shadow-glow-success">
            <Plus className="size-5" />
            <span>새 작업</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <section className="grid grid-cols-2 laptop:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <article 
            key={stat.label}
            className="card-premium p-6 text-center hover:shadow-glow group transform hover:scale-105 transition-all duration-500 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`size-12 bg-gradient-to-br ${
              stat.color === 'primary' ? 'from-primary-400 to-primary-600' :
              stat.color === 'success' ? 'from-success-400 to-success-600' :
              stat.color === 'warning' ? 'from-warning-400 to-warning-600' :
              'from-error-400 to-error-600'
            } rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-hard group-hover:scale-110 transition-all duration-300`}>
              <stat.icon className="size-6 text-white" />
            </div>
            <p className="text-2xl font-display font-bold text-gradient mb-1">{stat.value}</p>
            <p className="text-sm font-display font-medium text-gray-600 dark:text-gray-400 mb-2">{stat.label}</p>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              stat.change.startsWith('+') 
                ? 'bg-success-100 text-success-800 dark:bg-success-900/50 dark:text-success-300'
                : stat.change.startsWith('-')
                ? 'bg-error-100 text-error-800 dark:bg-error-900/50 dark:text-error-300'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
            }`}>
              {stat.change}
            </span>
          </article>
        ))}
      </section>

      {/* Tasks Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-white">
            활성 작업 목록
          </h2>
          <div className="flex items-center space-x-3">
            <select className="input-premium text-sm py-2">
              <option>모든 부서</option>
              <option>민원과</option>
              <option>복지정책과</option>
              <option>세무과</option>
              <option>도시건설과</option>
            </select>
            <select className="input-premium text-sm py-2">
              <option>모든 상태</option>
              <option>활성</option>
              <option>실행중</option>
              <option>비활성</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6">
          {tasks.map((task, index) => (
            <article 
              key={task.id}
              className="card-premium p-6 hover:shadow-glow group transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Task Icon */}
                  <div className={`size-14 bg-gradient-to-br ${getStatusColor(task.status)} rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-hard group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-2xl">{task.icon}</span>
                  </div>

                  {/* Task Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {task.name}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        task.status === 'active' 
                          ? 'bg-success-100 text-success-800 dark:bg-success-900/50 dark:text-success-300'
                          : task.status === 'running'
                          ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                      }`}>
                        {getStatusText(task.status)}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {task.description}
                    </p>
                    
                    <div className="grid grid-cols-2 laptop:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">부서</p>
                        <p className="font-display font-semibold text-gray-900 dark:text-white">{task.department}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">유형</p>
                        <p className="font-display font-semibold text-gray-900 dark:text-white">{task.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">마지막 실행</p>
                        <p className="font-mono text-xs text-gray-900 dark:text-white">{task.lastRun}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">성공률</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-success-400 to-success-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${task.successRate}%` }}
                            ></div>
                          </div>
                          <span className="font-mono text-xs font-semibold text-success-600 dark:text-success-400">
                            {task.successRate}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 rounded-xl text-gray-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all duration-200 transform hover:scale-110">
                    <Eye className="size-5" />
                  </button>
                  <button className="p-2 rounded-xl text-gray-500 hover:text-success-600 hover:bg-success-50 dark:hover:bg-success-950/50 transition-all duration-200 transform hover:scale-110">
                    <Play className="size-5" />
                  </button>
                  <button className="p-2 rounded-xl text-gray-500 hover:text-warning-600 hover:bg-warning-50 dark:hover:bg-warning-950/50 transition-all duration-200 transform hover:scale-110">
                    <Edit className="size-5" />
                  </button>
                  <button className="p-2 rounded-xl text-gray-500 hover:text-error-600 hover:bg-error-50 dark:hover:bg-error-950/50 transition-all duration-200 transform hover:scale-110">
                    <Trash2 className="size-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TasksPage;