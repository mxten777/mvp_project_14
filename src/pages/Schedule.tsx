import { Calendar, Clock, Play, Pause } from 'lucide-react';

const scheduledTasks = [
  {
    id: '1',
    name: '정부24 민원 자동 분류',
    department: '민원과',
    frequency: '매 시간',
    nextRun: '2025-08-03 10:00',
    status: 'scheduled',
  },
  {
    id: '2',
    name: '복지대상자 검증',
    department: '복지정책과',
    frequency: '매일 09:00',
    nextRun: '2025-08-04 09:00',
    status: 'scheduled',
  },
  {
    id: '3',
    name: '세외수입 체납자 알림',
    department: '세무과',
    frequency: '매일 16:00',
    nextRun: '2025-08-03 16:00',
    status: 'running',
  },
  {
    id: '4',
    name: '월간 보고서 생성',
    department: '기획정책과',
    frequency: '매월 1일',
    nextRun: '2025-09-01 09:00',
    status: 'scheduled',
  },
];

function SchedulePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">스케줄 관리</h1>
        <p className="text-gray-600">RPA 작업의 실행 일정을 관리하고 모니터링하세요</p>
      </div>

      {/* Calendar View Toggle */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Calendar className="h-4 w-4 mr-2" />
            캘린더 뷰
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Clock className="h-4 w-4 mr-2" />
            목록 뷰
          </button>
        </div>
      </div>

      {/* Scheduled Tasks */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">예약된 작업</h3>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작업명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                부서
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                실행 주기
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                다음 실행
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작업
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {scheduledTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{task.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {task.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {task.frequency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {task.nextRun}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    task.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                    task.status === 'running' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {task.status === 'scheduled' ? '예약됨' :
                     task.status === 'running' ? '실행중' : '대기'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-900">
                      {task.status === 'running' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Schedule */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">빠른 스케줄 설정</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                작업 선택
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>작업을 선택하세요</option>
                <option>정부24 민원 자동 분류</option>
                <option>복지대상자 검증</option>
                <option>세외수입 체납자 알림</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                실행 시간
              </label>
              <input
                type="datetime-local"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                스케줄 추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
