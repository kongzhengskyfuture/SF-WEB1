'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Code, Image as ImageIcon } from 'lucide-react';
import { pricingPackages } from '../data/siteContent';

/**
 * PackageDetailModal - 套餐详情模态框
 * 展示技术栈、交付周期、功能清单和案例图
 */
export default function PackageDetailModal({ packageId, isOpen, onClose }) {
  const pkg = pricingPackages.find(p => p.id === packageId);

  if (!pkg) return null;

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
          />

          {/* 模态框内容 */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 头部 */}
              <div className="sticky top-0 bg-gradient-to-r from-sky-600 to-emerald-600 text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{pkg.nameJa}</h2>
                    <p className="text-sky-100 text-sm">{pkg.name}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="mt-4 text-3xl font-bold">{pkg.price}</div>
              </div>

              {/* 内容区域 */}
              <div className="p-6 space-y-6">
                {/* 核心定位 */}
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-2">核心定位</h3>
                  <p className="text-slate-700">{pkg.coreValue}</p>
                </div>

                {/* 技术栈 */}
                {pkg.techStack && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Code className="w-5 h-5 text-sky-600" />
                      <h3 className="text-lg font-bold text-slate-800">技术栈</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pkg.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 交付周期 */}
                {pkg.deliveryPeriod && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-5 h-5 text-slate-600" strokeWidth={1.25} />
                      <h3 className="text-lg font-bold text-slate-800">交付周期</h3>
                    </div>
                    <p className="text-slate-700">{pkg.deliveryPeriod}</p>
                  </div>
                )}

                {/* 功能清单 */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                      <Check className="w-5 h-5 text-slate-600" strokeWidth={1.25} />
                    <h3 className="text-lg font-bold text-slate-800">包含功能</h3>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-slate-600 flex-shrink-0" strokeWidth={1.25} />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 案例展示 */}
                {pkg.caseStudies && pkg.caseStudies.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <ImageIcon className="w-5 h-5 text-slate-600" strokeWidth={1.25} />
                      <h3 className="text-lg font-bold text-slate-800">案例展示</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pkg.caseStudies.map((caseItem, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
                        >
                          <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex items-center justify-center">
                            {caseItem.image ? (
                              <img
                                src={caseItem.image}
                                alt={caseItem.title}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                              />
                            ) : (
                              <ImageIcon className="w-8 h-8 text-slate-400" strokeWidth={1.25} />
                            )}
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-slate-800 mb-1">{caseItem.title}</h4>
                            <p className="text-sm text-slate-600">{caseItem.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA 按钮 */}
                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={onClose}
                    className="w-full h-10 bg-gradient-to-r from-sky-600 to-emerald-600 text-white rounded-lg font-bold hover:from-sky-700 hover:to-emerald-700 transition-colors flex items-center justify-center antialiased"
                    style={{ lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    お問い合わせ
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
