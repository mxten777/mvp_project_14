function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in container-query">
      {/* Header */}
      <div className="animate-slide-up">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl laptop:text-4xl font-display font-bold text-gradient animate-scale-in">
              대시보드
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 font-display">
              시군구 RPA 통합플랫폼 실시간 현황
            </p>
          </div>
          <div className="hidden tablet:flex items-center space-x-4">
            <div className="bg-gradient-to-r from-success-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-glow font-medium text-sm animate-pulse">
              🟢 실시간 동기화
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid - Premium Cards */}
      <section aria-labelledby="stats-heading" className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6">
        <h2 id="stats-heading" className="sr-only">RPA 작업 통계</h2>
        
        {/* 총 RPA 작업 */}
        <article className="card-premium p-6 hover:shadow-glow group transform hover:scale-105 transition-all duration-500 animate-slide-up bg-gradient-card">
          <div className="text-center">
            <div className="relative">
              <div className="size-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-hard group-hover:scale-110 transition-all duration-300">
                <div className="text-3xl animate-bounce-gentle">⚡</div>
              </div>
              <div className="absolute -top-2 -right-2 size-6 bg-success-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <h3 className="text-sm font-display font-semibold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wider">
              총 RPA 작업
            </h3>
            <p className="text-4xl font-display font-bold text-gradient mb-2 animate-scale-in">24</p>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-sm text-success-600 dark:text-success-400 font-semibold">↗ +12%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">이번 달</span>
            </div>
          </div>
        </article>

        {/* 성공 실행 */}
        <article className="card-premium p-6 hover:shadow-glow-success group transform hover:scale-105 transition-all duration-500 animate-slide-up bg-gradient-card" style={{ animationDelay: '0.1s' }}>
          <div className="text-center">
            <div className="relative">
              <div className="size-16 bg-gradient-to-br from-success-400 to-success-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-success group-hover:shadow-hard group-hover:scale-110 transition-all duration-300">
                <div className="text-3xl animate-bounce-gentle">✅</div>
              </div>
              <div className="absolute -top-2 -right-2 size-6 bg-success-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <h3 className="text-sm font-display font-semibold text-success-600 dark:text-success-400 mb-2 uppercase tracking-wider">
              성공 실행
            </h3>
            <p className="text-4xl font-display font-bold text-gradient mb-2">18</p>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-sm text-success-600 dark:text-success-400 font-semibold">↗ +8.2%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">이번 달</span>
            </div>
          </div>
        </article>

        {/* 실패 */}
        <article className="card-premium p-6 hover:shadow-glow-error group transform hover:scale-105 transition-all duration-500 animate-slide-up bg-gradient-card" style={{ animationDelay: '0.2s' }}>
          <div className="text-center">
            <div className="relative">
              <div className="size-16 bg-gradient-to-br from-error-400 to-error-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-error group-hover:shadow-hard group-hover:scale-110 transition-all duration-300">
                <div className="text-3xl animate-bounce-gentle">❌</div>
              </div>
            </div>
            <h3 className="text-sm font-display font-semibold text-error-600 dark:text-error-400 mb-2 uppercase tracking-wider">
              실패
            </h3>
            <p className="text-4xl font-display font-bold text-gradient mb-2">2</p>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-sm text-error-600 dark:text-error-400 font-semibold">↘ -4.1%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">이번 달</span>
            </div>
          </div>
        </article>

        {/* 대기중 */}
        <article className="card-premium p-6 hover:shadow-glow group transform hover:scale-105 transition-all duration-500 animate-slide-up bg-gradient-card" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="relative">
              <div className="size-16 bg-gradient-to-br from-warning-400 to-warning-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-hard group-hover:scale-110 transition-all duration-300">
                <div className="text-3xl animate-bounce-gentle">⏰</div>
              </div>
            </div>
            <h3 className="text-sm font-display font-semibold text-warning-600 dark:text-warning-400 mb-2 uppercase tracking-wider">
              대기중
            </h3>
            <p className="text-4xl font-display font-bold text-gradient mb-2">4</p>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">→ 0%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">변화없음</span>
            </div>
          </div>
        </article>
      </section>

      {/* Premium Charts & Activity Section */}
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
        {/* Recent Tasks */}
        <section className="card-premium overflow-hidden hover:shadow-glow transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <header className="bg-gradient-to-r from-primary-500 to-success-500 text-white px-6 py-4">
            <h2 className="text-xl font-display font-semibold">최근 실행된 작업</h2>
            <p className="text-primary-100 text-sm mt-1">실시간 업데이트</p>
          </header>
          <div className="p-6 space-y-4">
            {[
              { name: '민원접수 자동화', status: '성공', time: '2분 전', icon: '✅' },
              { name: '보고서 생성', status: '실행중', time: '5분 전', icon: '⏳' },
              { name: '데이터 동기화', status: '성공', time: '10분 전', icon: '✅' },
              { name: '시스템 모니터링', status: '성공', time: '15분 전', icon: '✅' },
            ].map((task, index) => (
              <div key={task.name} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-primary-50 dark:from-gray-800 dark:to-primary-950/20 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-medium transition-all duration-300 group" style={{ animationDelay: `${(5 + index) * 0.1}s` }}>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {task.icon}
                  </div>
                  <div>
                    <p className="font-display font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {task.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {task.time}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  task.status === '성공' 
                    ? 'bg-success-100 text-success-800 dark:bg-success-900/50 dark:text-success-300' 
                    : 'bg-warning-100 text-warning-800 dark:bg-warning-900/50 dark:text-warning-300'
                }`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* System Status */}
        <section className="card-premium overflow-hidden hover:shadow-glow-success transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <header className="bg-gradient-to-r from-success-500 to-emerald-500 text-white px-6 py-4">
            <h2 className="text-xl font-display font-semibold">시스템 상태</h2>
            <p className="text-success-100 text-sm mt-1">실시간 모니터링</p>
          </header>
          <div className="p-6 space-y-6">
            {[
              { name: 'CPU 사용률', value: 12, color: 'success', icon: '🔥' },
              { name: '메모리 사용률', value: 34, color: 'warning', icon: '💾' },
              { name: '디스크 사용률', value: 58, color: 'primary', icon: '💿' },
              { name: '네트워크 사용률', value: 8, color: 'success', icon: '🌐' },
            ].map((metric, index) => (
              <div key={metric.name} className="space-y-2 animate-slide-up" style={{ animationDelay: `${(7 + index) * 0.1}s` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{metric.icon}</span>
                    <span className="font-display font-medium text-gray-900 dark:text-white">
                      {metric.name}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-primary-600 dark:text-primary-400">
                    {metric.value}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r transition-all duration-1000 ease-out ${
                      metric.color === 'success' ? 'from-success-400 to-success-600' :
                      metric.color === 'warning' ? 'from-warning-400 to-warning-600' :
                      'from-primary-400 to-primary-600'
                    } animate-scale-in`}
                    style={{ 
                      width: `${metric.value}%`,
                      animationDelay: `${(7 + index) * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;