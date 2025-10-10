import { Search, Bell, User, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext.tsx';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="px-4 tablet:px-6 laptop:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Search - Hide on mobile, show from tablet up */}
          <div className="hidden tablet:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="RPA 작업, 보고서 검색..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                aria-label="검색"
              />
            </div>
          </div>

          {/* Mobile search button */}
          <div className="tablet:hidden">
            <button
              type="button"
              className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="검색"
            >
              <Search className="h-6 w-6" />
            </button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 tablet:space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label={`${theme === 'dark' ? '라이트' : '다크'} 모드로 전환`}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Notifications */}
            <button
              type="button"
              className="relative p-2 rounded-lg text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="알림"
            >
              <Bell className="h-5 w-6" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400 dark:bg-red-500"></span>
            </button>

            {/* User menu */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center space-x-2 tablet:space-x-3 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="사용자 메뉴"
              >
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="hidden tablet:block text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">관리자</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">admin@vibe-rpa.co.kr</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
