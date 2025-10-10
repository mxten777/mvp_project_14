function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
        <p className="mt-2 text-lg text-gray-600">시군구 RPA 통합플랫폼 현황</p>
      </div>

      {/* Stats Grid - 4개 카드를 가로로 배치 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 총 RPA 작업 */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">⚡</div>
            </div>
            <p className="text-sm text-blue-600 font-medium mb-2">총 RPA 작업</p>
            <p className="text-3xl font-bold text-blue-900 mb-1">24</p>
            <p className="text-sm text-green-600 font-medium">+12%</p>
          </div>
        </div>

        {/* 성공 실행 */}
        <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6 hover:shadow-xl transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">✅</div>
            </div>
            <p className="text-sm text-green-600 font-medium mb-2">성공 실행</p>
            <p className="text-3xl font-bold text-green-900 mb-1">18</p>
            <p className="text-sm text-green-600 font-medium">+8.2%</p>
          </div>
        </div>

        {/* 실패 */}
        <div className="bg-white rounded-xl shadow-lg border border-red-100 p-6 hover:shadow-xl transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">❌</div>
            </div>
            <p className="text-sm text-red-600 font-medium mb-2">실패</p>
            <p className="text-3xl font-bold text-red-900 mb-1">2</p>
            <p className="text-sm text-red-600 font-medium">-4.1%</p>
          </div>
        </div>

        {/* 대기중 */}
        <div className="bg-white rounded-xl shadow-lg border border-yellow-100 p-6 hover:shadow-xl transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">⏰</div>
            </div>
            <p className="text-sm text-yellow-600 font-medium mb-2">대기중</p>
            <p className="text-3xl font-bold text-yellow-900 mb-1">4</p>
            <p className="text-sm text-gray-600 font-medium">0%</p>
          </div>
        </div>
      </div>

      {/* 두 번째 행: 최근 작업과 시스템 상태 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Recent Tasks */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4">
            <h3 className="text-xl font-semibold">최근 실행된 작업</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-green-500 hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-gray-900">정부24 민원 자동 분류</p>
                  <p className="text-sm text-gray-600">민원과</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">완료</span>
                  <p className="text-sm text-gray-500 mt-1">2분 전</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-gray-900">복지대상자 검증</p>
                  <p className="text-sm text-gray-600">복지정책과</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">실행중</span>
                  <p className="text-sm text-gray-500 mt-1">5분 전</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-green-500 hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-gray-900">세외수입 체납자 알림</p>
                  <p className="text-sm text-gray-600">세무과</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">완료</span>
                  <p className="text-sm text-gray-500 mt-1">15분 전</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-500 hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-semibold text-gray-900">도로굴착 허가 보조</p>
                  <p className="text-sm text-gray-600">도시건설과</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">대기</span>
                  <p className="text-sm text-gray-500 mt-1">30분 전</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4">
            <h3 className="text-xl font-semibold">시스템 상태</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">CPU 사용률</span>
                  <span className="text-lg font-bold text-blue-600">23%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300" style={{ width: '23%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">메모리 사용률</span>
                  <span className="text-lg font-bold text-green-600">67%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300" style={{ width: '67%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">디스크 사용률</span>
                  <span className="text-lg font-bold text-yellow-600">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full transition-all duration-300" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
