import { useEffect, useState } from 'react';
import { CheckCircle, AlertTriangle, AlertCircle, X, Info } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ToastProps {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: ReactNode;
  onClose: (id: string) => void;
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const colors = {
  success: 'border-emerald-200 bg-emerald-50/90 text-emerald-900',
  error: 'border-red-200 bg-red-50/90 text-red-900',
  warning: 'border-amber-200 bg-amber-50/90 text-amber-900',
  info: 'border-blue-200 bg-blue-50/90 text-blue-900',
};

export function Toast({ 
  id, 
  message, 
  type = 'info', 
  duration = 5000, 
  action, 
  onClose 
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const Icon = icons[type];

  useEffect(() => {
    // 애니메이션 시작
    requestAnimationFrame(() => setIsVisible(true));

    // 자동 닫기
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsLeaving(true);
        setTimeout(() => {
          onClose(id);
        }, 300);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  return (
    <div
      className={`
        group relative flex w-full max-w-sm items-start gap-3 
        rounded-xl border backdrop-blur-md
        p-4 shadow-lg transition-all duration-300 ease-out
        ${colors[type]}
        ${isVisible && !isLeaving 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-full opacity-0'
        }
        hover:shadow-xl hover:scale-[1.02]
      `}
    >
      {/* 아이콘 */}
      <div className="flex-shrink-0">
        <Icon className="h-5 w-5" />
      </div>

      {/* 메시지 */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-5">
          {message}
        </p>
        {action && (
          <div className="mt-2">
            {action}
          </div>
        )}
      </div>

      {/* 닫기 버튼 */}
      <button
        onClick={handleClose}
        className="
          flex-shrink-0 rounded-full p-1.5 
          opacity-60 hover:opacity-100 
          transition-all duration-200
          hover:bg-black/5 active:bg-black/10
        "
      >
        <X className="h-4 w-4" />
      </button>

      {/* 프로그레스 바 (duration이 있을 때) */}
      {duration > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl overflow-hidden">
          <div 
            className="h-full bg-current opacity-30 origin-left animate-shrink"
            style={{
              animationDuration: `${duration}ms`,
              animationTimingFunction: 'linear'
            }}
          />
        </div>
      )}
    </div>
  );
}

// Toast 컨테이너 컴포넌트
export function ToastContainer({ 
  toasts, 
  onClose 
}: { 
  toasts: ToastProps[], 
  onClose: (id: string) => void 
}) {
  return (
    <div className="
      fixed top-4 right-4 z-50 
      flex flex-col gap-2 
      max-h-screen overflow-hidden
    ">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
}