import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface FDInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  success?: string;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  required?: boolean;
}

const FDInput: React.FC<FDInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  success,
  disabled,
  multiline,
  rows,
  icon,
  fullWidth,
  className,
  required,
}) => {
  const containerClass = fullWidth ? 'w-full' : '';
  const inputClass = `
    w-full px-4 py-3 
    border-2 rounded-lg
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-500
    transition-all duration-200
    focus:outline-none
    ${icon ? 'pl-12' : ''}
    ${error ? 'border-red-500 focus:border-red-600' : 'border-gray-300 dark:border-gray-600 focus:border-orange-500'}
    ${success ? 'border-green-500 focus:border-green-600' : ''}
    ${disabled ? 'bg-gray-100 dark:bg-gray-900 cursor-not-allowed opacity-60' : ''}
    ${className}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={containerClass}
    >
      {label && (
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
            {icon}
          </div>
        )}

        {multiline ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            rows={rows}
            className={inputClass}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={inputClass}
          />
        )}

        {/* Status Icons */}
        {error && (
          <AlertCircle
            size={20}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500"
          />
        )}
        {success && !error && (
          <CheckCircle
            size={20}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500"
          />
        )}
      </div>

      {/* Error/Success Messages */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-600 dark:text-red-400 text-sm mt-2 flex items-center gap-1"
        >
          <AlertCircle size={16} />
          {error}
        </motion.p>
      )}

      {success && !error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-600 dark:text-green-400 text-sm mt-2 flex items-center gap-1"
        >
          <CheckCircle size={16} />
          {success}
        </motion.p>
      )}
    </motion.div>
  );
};

export default FDInput;
