import { Plus, Play, Pause, Edit, Trash2, Eye } from 'lucide-react';

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
  },
];

function TasksPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">RPA 작업 관리</h1>
          <p className="text-gray-600">자동화 작업을 생성, 관리 및 모니터링하세요</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          새 작업 생성
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex space-x-4">
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>모든 부서</option>
            <option>민원과</option>
            <option>복지정책과</option>
            <option>세무과</option>
            <option>도시건설과</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>모든 상태</option>
            <option>활성</option>
            <option>실행중</option>
            <option>비활성</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>모든 타입</option>
            <option>AI 분류</option>
            <option>데이터 검증</option>
            <option>알림 발송</option>
            <option>문서 처리</option>
          </select>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
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
                타입
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                성공률
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                다음 실행
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작업
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{task.name}</div>
                    <div className="text-sm text-gray-500">{task.description}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {task.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {task.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    task.status === 'active' ? 'bg-green-100 text-green-800' :
                    task.status === 'running' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {task.status === 'active' ? '활성' :
                     task.status === 'running' ? '실행중' : '비활성'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {task.successRate}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {task.nextRun}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      {task.status === 'running' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TasksPage;
