function Dashboard() {
  return (
    <div className="space-y-6 tablet:space-y-8 animate-fade-in">
      {/* Header */}
      <div className="animate-slide-up">
        <h1 className="text-2xl tablet:text-3xl font-bold text-gray-900 dark:text-white">대시보드</h1>
        <p className="mt-2 text-base tablet:text-lg text-gray-600 dark:text-gray-300">시군구 RPA 통합플랫폼 현황</p>
      </div>

      {/* Stats Grid - 4개 카드를 가로로 배치 */}
      <section aria-labelledby="stats-heading" className="grid grid-cols-2 laptop:grid-cols-4 gap-4 tablet:gap-6">
        <h2 id="stats-heading" className="sr-only">RPA 작업 통계</h2>
        
        {/* 총 RPA 작업 */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-blue-100 dark:border-blue-800 p-4 tablet:p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up group">
          <div className="text-center">
            <div className="w-10 h-10 tablet:w-12 tablet:h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 tablet:mb-4 group-hover:animate-bounce-gentle" aria-hidden="true">
              <div className="text-lg tablet:text-2xl">⚡</div>
            </div>
            <h3 className="text-xs tablet:text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">총 RPA 작업</h3>
            <p className="text-2xl tablet:text-3xl font-bold text-blue-900 dark:text-blue-100 mb-1">24</p>
            <p className="text-xs tablet:text-sm text-green-600 dark:text-green-400 font-medium">+12%</p>
          </div>
        </article>

        {/* 성공 실행 */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-green-100 dark:border-green-800 p-4 tablet:p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up group" style={{ animationDelay: '0.1s' }}>
          <div className="text-center">
            <div className="w-10 h-10 tablet:w-12 tablet:h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-3 tablet:mb-4 group-hover:animate-bounce-gentle" aria-hidden="true">
              <div className="text-lg tablet:text-2xl">✅</div>
            </div>
            <h3 className="text-xs tablet:text-sm text-green-600 dark:text-green-400 font-medium mb-2">성공 실행</h3>
            <p className="text-2xl tablet:text-3xl font-bold text-green-900 dark:text-green-100 mb-1">18</p>
            <p className="text-xs tablet:text-sm text-green-600 dark:text-green-400 font-medium">+8.2%</p>
          </div>
        </article>

        {/* 실패 */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-red-100 dark:border-red-800 p-4 tablet:p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up group" style={{ animationDelay: '0.2s' }}>
          <div className="text-center">
            <div className="w-10 h-10 tablet:w-12 tablet:h-12 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-3 tablet:mb-4 group-hover:animate-bounce-gentle" aria-hidden="true">
              <div className="text-lg tablet:text-2xl">❌</div>
            </div>
            <h3 className="text-xs tablet:text-sm text-red-600 dark:text-red-400 font-medium mb-2">실패</h3>
            <p className="text-2xl tablet:text-3xl font-bold text-red-900 dark:text-red-100 mb-1">2</p>
            <p className="text-xs tablet:text-sm text-red-600 dark:text-red-400 font-medium">-4.1%</p>
          </div>
        </article>

        {/* 대기중 */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-yellow-100 dark:border-yellow-800 p-4 tablet:p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up group" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="w-10 h-10 tablet:w-12 tablet:h-12 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center mx-auto mb-3 tablet:mb-4 group-hover:animate-bounce-gentle" aria-hidden="true">
              <div className="text-lg tablet:text-2xl">⏰</div>
            </div>
            <h3 className="text-xs tablet:text-sm text-yellow-600 dark:text-yellow-400 font-medium mb-2">대기중</h3>
            <p className="text-2xl tablet:text-3xl font-bold text-yellow-900 dark:text-yellow-100 mb-1">4</p>
            <p className="text-xs tablet:text-sm text-gray-600 dark:text-gray-400 font-medium">0%</p>
          </div>
        </article>
      </section>

      {/* 두 번째 행: 최근 작업과 시스템 상태 */}
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 tablet:gap-8">
        {/* Recent Tasks */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <header className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white px-4 tablet:px-6 py-4">
            <h2 className="text-lg tablet:text-xl font-semibold">최근 실행된 작업</h2>
          </header>
          <div className="p-4 tablet:p-6">
            <div className="space-y-3 tablet:space-y-4">
              <article className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between p-3 tablet:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-green-500 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-[1.02] group">
                <div className="mb-2 tablet:mb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors text-sm tablet:text-base">정부24 민원 자동 분류</h3>
                  <p className="text-xs tablet:text-sm text-gray-600 dark:text-gray-300">민원과</p>
                </div>
                <div className="text-left tablet:text-right">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">완료</span>
                  <p className="text-xs tablet:text-sm text-gray-500 dark:text-gray-400 mt-1">2분 전</p>
                </div>
              </article>

              <article className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between p-3 tablet:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-[1.02] group">
                <div className="mb-2 tablet:mb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm tablet:text-base">복지대상자 검증</h3>
                  <p className="text-xs tablet:text-sm text-gray-600 dark:text-gray-300">복지정책과</p>
                </div>
                <div className="text-left tablet:text-right">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 animate-pulse">실행중</span>
                  <p className="text-xs tablet:text-sm text-gray-500 dark:text-gray-400 mt-1">5분 전</p>
                </div>
              </article>

              <article className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between p-3 tablet:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-green-500 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-[1.02] group">
                <div className="mb-2 tablet:mb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors text-sm tablet:text-base">세외수입 체납자 알림</h3>
                  <p className="text-xs tablet:text-sm text-gray-600 dark:text-gray-300">세무과</p>
                </div>
                <div className="text-left tablet:text-right">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">완료</span>
                  <p className="text-xs tablet:text-sm text-gray-500 dark:text-gray-400 mt-1">15분 전</p>
                </div>
              </article>

              <article className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between p-3 tablet:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-[1.02] group">
                <div className="mb-2 tablet:mb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors text-sm tablet:text-base">도로굴착 허가 보조</h3>
                  <p className="text-xs tablet:text-sm text-gray-600 dark:text-gray-300">도시건설과</p>
                </div>
                <div className="text-left tablet:text-right">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200">대기</span>
                  <p className="text-xs tablet:text-sm text-gray-500 dark:text-gray-400 mt-1">30분 전</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* System Status */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <header className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 text-white px-4 tablet:px-6 py-4">
            <h2 className="text-lg tablet:text-xl font-semibold">시스템 상태</h2>
          </header>
          <div className="p-4 tablet:p-6">
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">CPU 사용률</span>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">23%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden" aria-label="CPU 사용률 23%">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out hover:scale-x-105 transform origin-left" style={{ width: '23%' }}></div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">메모리 사용률</span>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">67%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden" aria-label="메모리 사용률 67%">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 h-3 rounded-full transition-all duration-1000 ease-out hover:scale-x-105 transform origin-left" style={{ width: '67%' }}></div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">디스크 사용률</span>
                  <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">45%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden" aria-label="디스크 사용률 45%">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out hover:scale-x-105 transform origin-left" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
