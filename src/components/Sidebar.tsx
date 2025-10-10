import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  FileText, 
  Calendar, 
  Zap,
  Building2,
  Activity
} from 'lucide-react';

const navigation = [
  { name: '대시보드', href: '/', icon: LayoutDashboard },
  { name: 'RPA 작업', href: '/tasks', icon: Zap },
  { name: '스케줄', href: '/schedule', icon: Calendar },
  { name: '보고서', href: '/reports', icon: FileText },
  { name: '설정', href: '/settings', icon: Settings },
];

interface SidebarProps {
  onItemClick?: () => void;
}

function Sidebar({ onItemClick }: SidebarProps) {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 transition-colors duration-200 h-screen">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Vibe-RPA</span>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={onItemClick}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm animate-slide-up'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Footer Info */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Activity className="h-4 w-4 mr-2 text-green-500 dark:text-green-400 animate-pulse-slow" />
            시스템 정상 운영중
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
