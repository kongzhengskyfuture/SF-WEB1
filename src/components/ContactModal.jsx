'use client';

import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartContactForm from './SmartContactForm';

/**
 * ContactModal - 联系表单弹窗组件
 * 用于"無料診断を予約する"按钮
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - 是否打开
 * @param {Function} props.onClose - 关闭回调
 * @param {string} props.presetService - 预设服务类型（也支持 initialService）
 * @param {string} props.initialService - 预设服务类型（别名）
 * @param {string} props.presetPackage - 预设套餐ID
 */
export default function ContactModal({
  isOpen = false,
  onClose = null,
  presetService = null,
  initialService = null,
  presetPackage = null
}) {
  const handleSubmit = (formData) => {
    console.log('Form submitted from modal:', formData);
    // 这里可以添加实际的提交逻辑
  };

  // 支持 initialService 和 presetService
  const service = initialService || presetService;
  
  // Modal 模式且传入了 serviceId 时，自动勾选"免费诊断"复选框
  const autoRequestDiagnosis = service !== null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal 内容 */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              {/* 关闭按钮 */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <SmartContactForm
                presetService={service}
                presetPackage={presetPackage}
                onSubmit={handleSubmit}
                onClose={onClose}
                isModal={true}
                autoRequestDiagnosis={autoRequestDiagnosis}
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
