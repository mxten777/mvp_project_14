import { Calendar, Clock, Play, Pause, Plus, Filter, RefreshCw, Timer } from 'lucide-react';

const scheduledTasks = [
  {
    id: '1',
    name: '정부24 민원 자동 분류',
    department: '민원과',
    frequency: '매 시간',
    nextRun: '2025-08-03 10:00',
    status: 'scheduled',
    icon: '🤖',
    color: 'primary',
    duration: '5분',
  },
  {
    id: '2',
    name: '복지대상자 검증',
    department: '복지정책과',
    frequency: '매일 09:00',
    nextRun: '2025-08-04 09:00',
    status: 'scheduled',
    icon: '🔍',
    color: 'success',
    duration: '15분',
  },
  {
    id: '3',
    name: '세외수입 체납자 알림',
    department: '세무과',
    frequency: '매일 16:00',
    nextRun: '2025-08-03 16:00',
    status: 'running',
    icon: '📧',
    color: 'warning',
    duration: '3분',
  },
  {
    id: '4',
    name: '월간 보고서 생성',
    department: '기획정책과',
    frequency: '매월 1일 09:00',
    nextRun: '2025-09-01 09:00',
    status: 'scheduled',
    icon: '📊',
    color: 'primary',
    duration: '30분',
  },
];

const upcomingTasks = [
  { time: '10:00', task: '정부24 민원 자동 분류', status: 'scheduled' },
  { time: '11:00', task: '정부24 민원 자동 분류', status: 'scheduled' },
  { time: '12:00', task: '정부24 민원 자동 분류', status: 'scheduled' },
  { time: '16:00', task: '세외수입 체납자 알림', status: 'scheduled' },
  { time: '18:00', task: '일일 백업 작업', status: 'scheduled' },
];

function SchedulePage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'from-primary-400 to-primary-600';
      case 'running':
        return 'from-success-400 to-success-600';
      case 'paused':
        return 'from-warning-400 to-warning-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'scheduled':
        return '예약됨';
      case 'running':
        return '실행중';
      case 'paused':
        return '일시정지';
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
            스케줄 관리
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 font-display">
            자동화 작업 예약 및 실행 일정 관리
          </p>
        </div>
        <div className="flex items-center space-x-4 animate-scale-in">
          <button className="btn-secondary flex items-center space-x-2">
            <Filter className="size-5" />
            <span>필터</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <RefreshCw className="size-5" />
            <span>새로고침</span>
          </button>
          <button className="btn-primary flex items-center space-x-2 shadow-glow hover:shadow-glow-success">
            <Plus className="size-5" />
            <span>일정 추가</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 laptop:grid-cols-4 gap-6">
        <article className="card-premium p-6 text-center hover:shadow-glow group transform hover:scale-105 transition-all duration-500 animate-slide-up">
          <div className="size-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-hard group-hover:scale-110 transition-all duration-300">
            <Calendar className="size-6 text-white" />
          </div>
          <p className="text-2xl font-display font-bold text-gradient mb-1">12</p>
          <p className="text-sm font-display font-medium text-gray-600 dark:text-gray-400">총 일정</p>
        </article>
        
        <article className="card-premium p-6 text-center hover:shadow-glow group transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="size-12 bg-gradient-to-br from-success-400 to-success-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-hard group-hover:scale-110 transition-all duration-300">
            <Play className="size-6 text-white" />
          </div>
          <p className="text-2xl font-display font-bold text-gradient mb-1">3</p>
          <p className="text-sm font-display font-medium text-gray-600 dark:text-gray-400">실행중</p>
        </article>
        
        <article className="card-premium p-6 text-center hover:shadow-glow group transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="size-12 bg-gradient-to-br from-warning-400 to-warning-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-hard group-hover:scale-110 transition-all duration-300">
            <Clock className="size-6 text-white" />
          </div>
          <p className="text-2xl font-display font-bold text-gradient mb-1">8</p>
          <p className="text-sm font-display font-medium text-gray-600 dark:text-gray-400">예정</p>
        </article>
        
        <article className="card-premium p-6 text-center hover:shadow-glow group transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="size-12 bg-gradient-to-br from-error-400 to-error-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-hard group-hover:scale-110 transition-all duration-300">
            <Pause className="size-6 text-white" />
          </div>
          <p className="text-2xl font-display font-bold text-gradient mb-1">1</p>
          <p className="text-sm font-display font-medium text-gray-600 dark:text-gray-400">일시정지</p>
        </article>
      </section>

      <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <section className="laptop:col-span-1 space-y-6">
          <div className="card-premium p-6 hover:shadow-glow transition-all duration-500 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display font-semibold text-gray-900 dark:text-white">
                오늘의 일정
              </h2>
              <span className="bg-gradient-to-r from-primary-500 to-success-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                8월 3일
              </span>
            </div>
            
            <div className="space-y-4">
              {upcomingTasks.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gradient-to-r from-gray-50 to-primary-50 dark:from-gray-800 dark:to-primary-950/20 rounded-xl border border-gray-100 dark:border-gray-700 group hover:shadow-medium transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="size-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white font-mono text-sm font-semibold shadow-soft">
                      {item.time}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 truncate">
                      {item.task}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {getStatusText(item.status)}
                    </p>
                  </div>
                  <div className={`size-3 rounded-full ${
                    item.status === 'scheduled' ? 'bg-primary-400 animate-pulse' :
                    item.status === 'running' ? 'bg-success-400 animate-ping' :
                    'bg-gray-400'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scheduled Tasks List */}
        <section className="laptop:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-white">
              예약된 작업
            </h2>
            <div className="flex items-center space-x-3">
              <select className="input-premium text-sm py-2">
                <option>모든 부서</option>
                <option>민원과</option>
                <option>복지정책과</option>
                <option>세무과</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {scheduledTasks.map((task, index) => (
              <article 
                key={task.id}
                className="card-premium p-6 hover:shadow-glow group transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Task Icon */}
                    <div className={`size-12 bg-gradient-to-br ${getStatusColor(task.status)} rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-hard group-hover:scale-110 transition-all duration-300`}>
                      <span className="text-xl">{task.icon}</span>
                    </div>

                    {/* Task Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {task.name}
                        </h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                          task.status === 'scheduled' 
                            ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300'
                            : task.status === 'running'
                            ? 'bg-success-100 text-success-800 dark:bg-success-900/50 dark:text-success-300'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                        }`}>
                          {getStatusText(task.status)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 laptop:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 dark:text-gray-400 font-medium">부서</p>
                          <p className="font-display font-semibold text-gray-900 dark:text-white">{task.department}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400 font-medium">주기</p>
                          <p className="font-display font-semibold text-gray-900 dark:text-white">{task.frequency}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400 font-medium">다음 실행</p>
                          <p className="font-mono text-xs text-gray-900 dark:text-white">{task.nextRun}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400 font-medium">예상 소요시간</p>
                          <div className="flex items-center space-x-1">
                            <Timer className="size-3 text-gray-500" />
                            <span className="font-mono text-xs text-gray-900 dark:text-white">{task.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="p-2 rounded-xl text-gray-500 hover:text-success-600 hover:bg-success-50 dark:hover:bg-success-950/50 transition-all duration-200 transform hover:scale-110">
                      <Play className="size-5" />
                    </button>
                    <button className="p-2 rounded-xl text-gray-500 hover:text-warning-600 hover:bg-warning-50 dark:hover:bg-warning-950/50 transition-all duration-200 transform hover:scale-110">
                      <Pause className="size-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SchedulePage;