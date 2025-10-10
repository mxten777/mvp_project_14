import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar.tsx';
import Header from './Header.tsx';
import { ToastContainer } from './Toast';
import { useToast } from '../hooks/useToast';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toasts, removeToast } = useToast();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="dvh-screen bg-gradient-premium overflow-hidden flex transition-all duration-500">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 lg:hidden animate-fade-in"
          onClick={closeSidebar}
        />
      )}

      {/* Premium Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 lg:hidden glass p-3 rounded-2xl shadow-glow hover:shadow-glow-success transition-all duration-300 transform hover:scale-110 active:scale-95 animate-slide-down group"
        aria-label="메뉴 열기"
      >
        {isSidebarOpen ? (
          <X className="size-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:rotate-90 transition-all duration-300" />
        ) : (
          <Menu className="size-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-300" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-20 w-64 dvh-screen
        transform transition-all duration-500 ease-out
        lg:translate-x-0 lg:relative lg:flex-shrink-0
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <Sidebar onItemClick={closeSidebar} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col dvh-screen overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Main content with scroll */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 tablet:p-8 laptop:p-10">
            <div className="max-w-7xl mx-auto animate-fade-in">
              {children}
            </div>
          </div>
          
          {/* Premium Footer */}
          <footer className="glass border-t border-white/20 dark:border-gray-700/30 px-6 tablet:px-8 py-6 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between">
                <div className="flex items-center space-x-3 mb-4 tablet:mb-0">
                  <div className="size-8 bg-gradient-to-br from-primary-500 to-success-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">V</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-gray-900 dark:text-white">
                      Vibe-RPA v2.0 Premium
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      시군구 RPA 통합플랫폼
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-xs font-mono text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="size-2 bg-success-400 rounded-full animate-pulse"></div>
                    <span>온라인</span>
                  </div>
                  <span>빌드: 2025.10.10</span>
                  <span>© 2025 mxten777</span>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
      
      {/* Toast Container */}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}

export default Layout;
