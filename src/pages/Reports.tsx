import { Download, FileText, BarChart3, TrendingUp } from 'lucide-react';

const reports = [
  {
    id: '1',
    name: 'RPA 실행 요약 보고서',
    description: '일별/주별/월별 RPA 작업 실행 현황 및 성공률 통계',
    type: 'summary',
    lastGenerated: '2025-08-03 09:00',
    format: 'PDF',
  },
  {
    id: '2',
    name: '부서별 업무 효율성 보고서',
    description: '각 부서별 RPA 도입 전후 업무 처리 시간 비교 분석',
    type: 'efficiency',
    lastGenerated: '2025-08-02 17:30',
    format: 'Excel',
  },
  {
    id: '3',
    name: '오류 분석 보고서',
    description: 'RPA 작업 실행 중 발생한 오류들의 원인 분석 및 해결 방안',
    type: 'error',
    lastGenerated: '2025-08-01 16:00',
    format: 'PDF',
  },
  {
    id: '4',
    name: '민원 처리 현황 보고서',
    description: '정부24 민원 자동 분류 및 처리 현황 상세 분석',
    type: 'complaint',
    lastGenerated: '2025-08-03 08:00',
    format: 'Excel',
  },
];

const stats = [
  { name: '총 생성된 보고서', value: '127', icon: FileText },
  { name: '이번 주 다운로드', value: '45', icon: Download },
  { name: '자동 생성 보고서', value: '89', icon: BarChart3 },
  { name: '수동 생성 보고서', value: '38', icon: TrendingUp },
];

function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">보고서</h1>
        <p className="text-gray-600">RPA 성과 및 통계 보고서를 생성하고 관리하세요</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">빠른 보고서 생성</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <BarChart3 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">주간 실행 보고서</p>
            <p className="text-xs text-gray-500">최근 7일간 RPA 실행 현황</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <TrendingUp className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">효율성 분석</p>
            <p className="text-xs text-gray-500">부서별 업무 효율성 분석</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">커스텀 보고서</p>
            <p className="text-xs text-gray-500">사용자 정의 조건으로 생성</p>
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">생성된 보고서</h3>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                보고서명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                유형
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                포맷
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                생성일시
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작업
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{report.name}</div>
                    <div className="text-sm text-gray-500">{report.description}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    report.type === 'summary' ? 'bg-blue-100 text-blue-800' :
                    report.type === 'efficiency' ? 'bg-green-100 text-green-800' :
                    report.type === 'error' ? 'bg-red-100 text-red-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {report.type === 'summary' ? '요약' :
                     report.type === 'efficiency' ? '효율성' :
                     report.type === 'error' ? '오류분석' : '민원'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {report.format}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {report.lastGenerated}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-900">
                    <Download className="h-4 w-4 mr-1" />
                    다운로드
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsPage;
