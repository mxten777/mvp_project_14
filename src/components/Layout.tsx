import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar.tsx';
import Header from './Header.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 lg:hidden bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
        aria-label="메뉴 열기"
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-20 h-full w-64
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar onItemClick={closeSidebar} />
      </div>

      {/* Main content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Header with mobile padding */}
        <div className="pt-16 lg:pt-0">
          <Header />
        </div>
        
        <main className="p-4 tablet:p-6 laptop:p-8">
          <div className="animate-fade-in max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 tablet:px-6 py-4 transition-colors duration-200">
          <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="mb-2 tablet:mb-0">
              © 2025 Vibe-RPA. 시군구 RPA 통합플랫폼
            </div>
            <div className="flex items-center space-x-4 text-xs tablet:text-sm">
              <span>버전 1.0.0</span>
              <span>•</span>
              <span>마지막 업데이트: 2025.08.03</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
