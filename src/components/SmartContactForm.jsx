'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pricingPackages } from '../data/siteContent';

/**
 * SmartContactForm - 多步引导式表单组件
 * 功能：3步引导式表单，根据用户选择动态调整内容
 * 
 * @param {Object} props
 * @param {string} props.presetService - 预设服务类型 (d365, ai, dev)
 * @param {string} props.presetPackage - 预设套餐ID (standard, professional, enterprise)
 * @param {Function} props.onSubmit - 提交回调函数
 * @param {Function} props.onClose - 关闭回调（Modal模式）
 * @param {boolean} props.isModal - 是否为Modal模式
 * @param {boolean} props.autoRequestDiagnosis - 是否自动勾选"免费诊断"复选框
 */
export default function SmartContactForm({
  presetService = null,
  presetPackage = null,
  onSubmit = null,
  onClose = null,
  isModal = false,
  autoRequestDiagnosis = false
}) {
  // 修正逻辑：始终从第一步开始，presetService 仅作为默认选中项，不跳过步骤
  // 无论何时打开表单，都应该从 Step 1 开始，让用户看到并确认选择
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: presetService || null, // 如果提供了 presetService，作为默认选中项
    // Step 2 数据
    d365Data: {
      currentSystem: '',
      userCount: ''
    },
    aiData: {
      mainChallenge: ''
    },
    devData: {
      budgetRange: ''
    },
    // Step 3 数据
    companyName: '',
    name: '',
    email: '',
    phone: '',
    requestDiagnosis: autoRequestDiagnosis // 根据入口自动设置
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 当 presetService 变化时更新表单数据（仅更新选中项，不跳转步骤）
  useEffect(() => {
    if (presetService) {
      setFormData(prev => ({ ...prev, serviceType: presetService }));
    }
  }, [presetService]);

  // 当 autoRequestDiagnosis 变化时更新复选框状态
  useEffect(() => {
    if (autoRequestDiagnosis) {
      setFormData(prev => ({ ...prev, requestDiagnosis: true }));
    }
  }, [autoRequestDiagnosis]);

  // 服务类型选项
  const serviceOptions = [
    {
      id: 'd365',
      nameJa: 'Dynamics 365 導入・カスタマイズ',
      icon: '📊',
      description: 'CRM・営業・マーケティングの統合ソリューション'
    },
    {
      id: 'ai',
      nameJa: 'AI 活用コンサルティング',
      icon: '🤖',
      description: '生成AI・チャットボット・知識ベース統合'
    },
    {
      id: 'dev',
      nameJa: 'DXポータル/サイト構築',
      icon: '🌐',
      description: 'モダンなウェブサイト・CMS・統合開発'
    }
  ];

  // 处理Step 1选择
  const handleServiceSelect = (serviceId) => {
    setFormData(prev => ({ ...prev, serviceType: serviceId }));
    setCurrentStep(2);
  };

  // 处理Step 2数据更新
  const handleStep2Update = (field, value) => {
    if (formData.serviceType === 'd365') {
      setFormData(prev => ({
        ...prev,
        d365Data: { ...prev.d365Data, [field]: value }
      }));
    } else if (formData.serviceType === 'ai') {
      setFormData(prev => ({
        ...prev,
        aiData: { ...prev.aiData, [field]: value }
      }));
    } else if (formData.serviceType === 'dev') {
      setFormData(prev => ({
        ...prev,
        devData: { ...prev.devData, [field]: value }
      }));
    }
  };

  // 处理Step 3数据更新
  const handleStep3Update = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // 验证当前步骤
  const validateStep = () => {
    if (currentStep === 1) {
      return formData.serviceType !== null;
    } else if (currentStep === 2) {
      if (formData.serviceType === 'd365') {
        return formData.d365Data.currentSystem && formData.d365Data.userCount;
      } else if (formData.serviceType === 'ai') {
        return formData.aiData.mainChallenge;
      } else if (formData.serviceType === 'dev') {
        return formData.devData.budgetRange;
      }
    } else if (currentStep === 3) {
      return formData.companyName && formData.name && formData.email && formData.phone;
    }
    return false;
  };

  // 提交表单
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitted(true);
      if (onSubmit) {
        onSubmit(formData);
      }
      // 3秒后自动关闭（如果是Modal模式）
      if (isModal && onClose) {
        setTimeout(() => {
          onClose();
        }, 5000);
      }
    }
  };

  // 获取感谢信息
  const getThankYouMessage = () => {
    const service = serviceOptions.find(s => s.id === formData.serviceType);
    const serviceName = service ? service.nameJa : 'お問い合わせ';
    
    let downloadLink = '';
    if (formData.serviceType === 'd365') {
      downloadLink = '《D365導入避坑ガイド.pdf》';
    } else if (formData.serviceType === 'ai') {
      downloadLink = '《AI導入成功事例集.pdf》';
    } else if (formData.serviceType === 'dev') {
      downloadLink = '《ウェブサイト構築ガイド.pdf》';
    }

    return {
      title: `ありがとうございます！`,
      message: `私たちは${serviceName}に関するご要望を受領いたしました。`,
      downloadText: downloadLink ? `先に${downloadLink}をダウンロードできます。` : ''
    };
  };

  return (
    <div className={`${isModal ? 'max-w-4xl mx-auto' : 'max-w-3xl mx-auto'} bg-white rounded-2xl shadow-xl overflow-hidden`}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="p-8 md:p-10">
          {/* 进度指示器 */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className={`font-semibold ${currentStep >= 1 ? 'text-sky-600' : 'text-slate-400'}`}>
                  1. サービス選択
                </span>
                <span className="text-slate-300">></span>
                <span className={`font-semibold ${currentStep >= 2 ? 'text-sky-600' : 'text-slate-400'}`}>
                  2. 詳細ヒアリング
                </span>
                <span className="text-slate-300">></span>
                <span className={`font-semibold ${currentStep >= 3 ? 'text-sky-600' : 'text-slate-400'}`}>
                  3. 基本情報
                </span>
              </div>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-sky-500 to-emerald-500 h-2 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStep / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Step 1: 意向分类 */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  ご希望のサービスを選択してください
                </h2>
                <p className="text-slate-600 mb-6">
                  お客様のニーズに最適なソリューションをご提案いたします
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {serviceOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      type="button"
                      onClick={() => handleServiceSelect(option.id)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        formData.serviceType === option.id
                          ? 'border-sky-500 bg-sky-50 ring-4 ring-sky-200 ring-offset-2 shadow-lg'
                          : 'border-slate-200 hover:border-sky-300 hover:shadow-md'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-4xl mb-3">{option.icon}</div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg">
                        {option.nameJa}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {option.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: 需求深度画像 */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      詳細情報をお聞かせください
                    </h2>
                    <p className="text-slate-600">
                      {formData.serviceType === 'd365' && 'D365導入に関する詳細'}
                      {formData.serviceType === 'ai' && 'AI導入に関する詳細'}
                      {formData.serviceType === 'dev' && 'ウェブサイト構築に関する詳細'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-sm text-slate-500 hover:text-slate-700"
                  >
                    戻る
                  </button>
                </div>

                {/* D365 需求画像 */}
                {formData.serviceType === 'd365' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        現在のシステム状況
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {['なし', 'オンプレミス', '他社CRM'].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleStep2Update('currentSystem', option)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              formData.d365Data.currentSystem === option
                                ? 'border-sky-500 bg-sky-50 ring-4 ring-sky-200 ring-offset-2 shadow-lg'
                                : 'border-slate-200 hover:border-sky-300'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        利用予定人数
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['10人以下', '10-50人', '50-200人', '200人以上'].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleStep2Update('userCount', option)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              formData.d365Data.userCount === option
                                ? 'border-sky-500 bg-sky-50 ring-4 ring-sky-200 ring-offset-2 shadow-lg'
                                : 'border-slate-200 hover:border-sky-300'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* AI 需求画像 */}
                {formData.serviceType === 'ai' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      主な課題
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['データ分析', '業務自動化', 'Copilot導入', 'その他'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleStep2Update('mainChallenge', option)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            formData.aiData.mainChallenge === option
                              ? 'border-sky-500 bg-sky-50 ring-4 ring-sky-200 ring-offset-2 shadow-lg'
                              : 'border-slate-200 hover:border-sky-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 网站建设 需求画像 */}
                {formData.serviceType === 'dev' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      ご予算の目安
                    </label>
                    <div className="space-y-3">
                      {pricingPackages.map((pkg) => (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => handleStep2Update('budgetRange', pkg.id)}
                          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                            formData.devData.budgetRange === pkg.id
                              ? 'border-sky-500 bg-sky-50 ring-4 ring-sky-200 ring-offset-2 shadow-lg'
                              : 'border-slate-200 hover:border-sky-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-bold text-slate-900">{pkg.nameJa}</div>
                              <div className="text-sm text-slate-600 mt-1">{pkg.price}</div>
                            </div>
                            <div className="text-sky-600 font-semibold">
                              {formData.devData.budgetRange === pkg.id && '✓'}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    disabled={!validateStep()}
                    className="px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    次へ →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: 基本信息与预约 */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      基本情報をご入力ください
                    </h2>
                    <p className="text-slate-600">
                      専門家がご連絡いたします
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-sm text-slate-500 hover:text-slate-700"
                  >
                    戻る
                  </button>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleStep3Update('companyName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleStep3Update('name', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleStep3Update('email', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleStep3Update('phone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
                    <input
                      type="checkbox"
                      id="requestDiagnosis"
                      checked={formData.requestDiagnosis}
                      onChange={(e) => handleStep3Update('requestDiagnosis', e.target.checked)}
                      className="mt-1 w-5 h-5 text-sky-600 border-slate-300 rounded focus:ring-sky-500"
                    />
                    <label htmlFor="requestDiagnosis" className="flex-1 text-sm text-slate-700 cursor-pointer">
                      <span className="font-semibold">30分間の無料オンライン診断</span>（Zoom/Teams）を希望する
                    </label>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={!validateStep()}
                    className="px-8 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    送信する
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      ) : (
        /* 提交成功页面 */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 md:p-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {getThankYouMessage().title}
          </h2>
          <p className="text-lg text-slate-600 mb-2">
            {getThankYouMessage().message}
          </p>
          {getThankYouMessage().downloadText && (
            <p className="text-slate-500 mb-6">
              {getThankYouMessage().downloadText}
            </p>
          )}
          
          {getThankYouMessage().downloadText && (
            <a
              href="#"
              className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
            >
              資料をダウンロード
            </a>
          )}
          
          {isModal && (
            <p className="text-sm text-slate-400 mt-6">
              このウィンドウは5秒後に自動的に閉じます
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}
