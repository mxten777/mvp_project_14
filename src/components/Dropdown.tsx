import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
}

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

const variantClasses = {
  default: `
    bg-white border-gray-200 text-gray-900
    hover:bg-gray-50 hover:border-gray-300
    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
  `,
  ghost: `
    bg-transparent border-transparent text-gray-700
    hover:bg-gray-100
    focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-blue-500/20
  `,
  outline: `
    bg-transparent border-gray-300 text-gray-700
    hover:bg-gray-50 hover:border-gray-400
    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
  `,
};

export function Dropdown({
  options,
  value,
  placeholder = '옵션을 선택하세요',
  onChange,
  disabled = false,
  className = '',
  size = 'md',
  variant = 'default',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find(option => option.value === value);

  // 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // 키보드 네비게이션
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else if (focusedIndex >= 0) {
          const option = options[focusedIndex];
          if (!option.disabled) {
            onChange?.(option.value);
            setIsOpen(false);
            setFocusedIndex(-1);
          }
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex(prev => 
            prev < options.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => prev > 0 ? prev - 1 : 0);
        }
        break;
    }
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;
    onChange?.(option.value);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* 트리거 버튼 */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`
          relative w-full flex items-center justify-between
          border rounded-lg backdrop-blur-sm
          transition-all duration-200 ease-out
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${disabled 
            ? 'opacity-50 cursor-not-allowed' 
            : 'cursor-pointer'
          }
          ${isOpen ? 'ring-2 ring-blue-500/20 border-blue-500' : ''}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 min-w-0">
          {selectedOption?.icon && (
            <div className="flex-shrink-0">
              {selectedOption.icon}
            </div>
          )}
          <span className={`truncate ${selectedOption ? '' : 'text-gray-500'}`}>
            {selectedOption?.label || placeholder}
          </span>
        </div>
        
        <ChevronDown 
          className={`
            h-4 w-4 flex-shrink-0 text-gray-400 
            transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}
          `} 
        />
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="
          absolute z-50 w-full mt-1
          bg-white/95 backdrop-blur-md
          border border-gray-200 rounded-lg shadow-lg
          py-1 max-h-60 overflow-auto
          animate-in fade-in-0 zoom-in-95 
          duration-200 origin-top
        ">
          {options.map((option, index) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleOptionClick(option)}
              className={`
                w-full flex items-center gap-3 px-4 py-2.5 text-left
                transition-colors duration-150
                ${option.disabled 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-900 hover:bg-blue-50 cursor-pointer'
                }
                ${focusedIndex === index 
                  ? 'bg-blue-50 text-blue-900' 
                  : ''
                }
                ${value === option.value 
                  ? 'bg-blue-100 text-blue-900 font-medium' 
                  : ''
                }
              `}
              disabled={option.disabled}
            >
              {option.icon && (
                <div className="flex-shrink-0">
                  {option.icon}
                </div>
              )}
              <span className="truncate">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}