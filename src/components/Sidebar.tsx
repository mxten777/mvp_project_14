import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  FileText, 
  Calendar, 
  Zap,
  Building2,
  Activity,
  Sparkles,
  TrendingUp,
  Shield
} from 'lucide-react';

const navigation = [
  { name: '대시보드', href: '/', icon: LayoutDashboard, badge: null },
  { name: 'RPA 작업', href: '/tasks', icon: Zap, badge: '24' },
  { name: '스케줄', href: '/schedule', icon: Calendar, badge: null },
  { name: '보고서', href: '/reports', icon: FileText, badge: 'NEW' },
  { name: '설정', href: '/settings', icon: Settings, badge: null },
];

const quickActions = [
  { name: 'AI 어시스턴트', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
  { name: '성능 모니터', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
  { name: '보안 상태', icon: Shield, color: 'from-green-500 to-emerald-500' },
];

interface SidebarProps {
  onItemClick?: () => void;
}

function Sidebar({ onItemClick }: SidebarProps) {
  return (
    <div className="w-64 glass border-r border-white/20 dark:border-gray-700/30 backdrop-blur-xl shadow-hard transition-all duration-300 dvh-screen">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center px-6 py-5 border-b border-white/20 dark:border-gray-700/30">
          <div className="relative">
            <div className="size-10 bg-gradient-to-br from-primary-500 via-primary-600 to-success-500 rounded-2xl flex items-center justify-center shadow-glow animate-pulse-slow">
              <Building2 className="size-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 size-4 bg-success-400 rounded-full animate-ping"></div>
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-display font-bold bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
              Vibe-RPA
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">v2.0 Premium</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={onItemClick}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 group transform hover:scale-105 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-500 to-success-500 text-white shadow-glow animate-scale-in'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-success-50 dark:hover:from-primary-950/50 dark:hover:to-success-950/50 hover:text-primary-700 dark:hover:text-primary-300 hover:shadow-medium'
                }`
              }
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center">
                <item.icon className="mr-3 size-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="font-display">{item.name}</span>
              </div>
              {item.badge && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-error-500 text-white animate-bounce-gentle">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
          
          {/* Divider */}
          <div className="my-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-2">
            <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              빠른 실행
            </h3>
            {quickActions.map((action, index) => (
              <button
                key={action.name}
                className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 group transform hover:scale-105 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:shadow-medium"
                style={{ animationDelay: `${(navigation.length + index) * 0.1}s` }}
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${action.color} mr-3 shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                  <action.icon className="size-4 text-white" />
                </div>
                <span className="font-display text-xs">{action.name}</span>
              </button>
            ))}
          </div>
        </nav>
        
        {/* Footer Info */}
        <div className="p-4 border-t border-white/20 dark:border-gray-700/30">
          <div className="bg-gradient-to-r from-success-50 to-primary-50 dark:from-success-950/50 dark:to-primary-950/50 rounded-xl p-3 border border-success-200 dark:border-success-800">
            <div className="flex items-center text-sm">
              <div className="flex items-center">
                <Activity className="size-4 mr-2 text-success-500 animate-pulse" />
                <span className="font-medium text-success-700 dark:text-success-300">시스템 정상</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-success-600 dark:text-success-400 font-mono">
              가동 시간: 99.9% | CPU: 12%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
