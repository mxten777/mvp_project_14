import { Search, Bell, User, Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useRef } from 'react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const mobileSearchButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <header className="glass border-b border-white/20 dark:border-gray-700/30 backdrop-blur-xl shadow-soft sticky top-0 z-50 transition-all duration-300">
      <div className="px-4 tablet:px-6 laptop:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Search - Hide on mobile, show from tablet up */}
          <div className="hidden tablet:flex flex-1 max-w-2xl">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="size-5 text-gray-400 dark:text-gray-500 group-focus-within:text-primary-500 transition-colors duration-200" />
              </div>
              <input
                id="header-search-input"
                ref={searchInputRef}
                type="text"
                placeholder="RPA 작업, 보고서 검색..."
                className="w-full pl-12 pr-4 py-2 font-display text-sm rounded-btn border border-neutral-300 bg-white text-neutral-900 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50"
                aria-label="검색"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    // close semantics: blur input and return focus to mobile search button if present
                    (e.target as HTMLInputElement).blur();
                    mobileSearchButtonRef.current?.focus();
                  }
                }}
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <kbd className="hidden laptop:inline-flex items-center rounded border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-mono text-gray-500 dark:text-gray-400">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Mobile search button */}
          <div className="tablet:hidden">
            <button
              ref={mobileSearchButtonRef}
              type="button"
              className="p-3 rounded-xl text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all duration-200 transform hover:scale-105 active:scale-95"
              aria-label="검색"
              aria-controls="header-search-input"
              aria-expanded="false"
            >
              <Search className="size-5" />
            </button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 tablet:space-x-3">
            {/* AI Assistant Badge */}
            <div className="hidden laptop:flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-success-50 dark:from-primary-950/50 dark:to-success-950/50 px-3 py-1.5 rounded-full border border-primary-200 dark:border-primary-800">
              <Sparkles className="size-4 text-primary-600 dark:text-primary-400" />
              <span className="text-xs font-medium text-primary-700 dark:text-primary-300">AI 어시스턴트</span>
            </div>

            {/* Notifications */}
            <button
              type="button"
              className="relative p-3 rounded-xl text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all duration-200 transform hover:scale-105 active:scale-95 group"
              aria-label="알림"
            >
              <Bell className="size-5" />
              <span className="absolute -top-1 -right-1 size-5 bg-error-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl text-gray-400 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
              aria-label={`${theme === 'dark' ? '라이트' : '다크'} 모드로 전환`}
            >
              {theme === 'dark' ? (
                <Sun className="size-5 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="size-5 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* User menu */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-success-50 dark:hover:from-primary-950/50 dark:hover:to-success-950/50 transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-primary-200 dark:hover:border-primary-800 shadow-soft hover:shadow-glow"
                aria-label="사용자 메뉴"
              >
                <div className="relative">
                  <div className="size-10 bg-gradient-to-br from-primary-500 to-success-500 rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300">
                    <User className="size-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 size-4 bg-success-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
                <div className="hidden tablet:block text-left">
                  <p className="text-sm font-display font-semibold text-gray-900 dark:text-white">mxten777</p>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400">시스템 관리자</p>
                </div>
              </button>
              
              {/* Status indicator tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                온라인 상태
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

