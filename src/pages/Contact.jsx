'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SmartContactForm from '../components/SmartContactForm';

/**
 * Contact - 联系页面
 * 集成 SmartContactForm 多步表单
 * 注意：直接访问 /contact 页面时，表单必须从 Step 1 开始
 */
export default function Contact() {
  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // 这里可以添加实际的提交逻辑，比如发送到API
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            デジタル変革に関するご相談やご質問がございましたら、お気軽にお問い合わせください。
            専門家が丁寧にご対応いたします。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* 直接访问 /contact 页面时，isModal=false，presetService=null，确保从 Step 1 开始 */}
          <SmartContactForm 
            onSubmit={handleSubmit}
            isModal={false}
            presetService={null}
            autoRequestDiagnosis={false}
          />
        </motion.div>
      </main>
    </div>
  );
}
