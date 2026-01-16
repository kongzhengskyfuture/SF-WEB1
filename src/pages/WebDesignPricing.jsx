'use client';

import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { pricingPackages } from '../data/siteContent';
import PackageDetailModal from '../components/PackageDetailModal';

/**
 * WebDesignPricing - Web制作/DX门户定价页面
 * 包含对比表格和套餐详情
 */
export default function WebDesignPricing() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (packageId) => {
    setSelectedPackage(packageId);
    setIsModalOpen(true);
  };

  // 定义对比表格的功能项
  const comparisonFeatures = [
    {
      category: 'デザイン・UI',
      features: [
        { name: 'レスポンシブデザイン', standard: true, business: true, enterprise: true },
        { name: 'カスタムUIデザイン', standard: true, business: true, enterprise: true },
        { name: 'アニメーション効果', standard: false, business: true, enterprise: true },
        { name: 'ブランドガイドライン準拠', standard: true, business: true, enterprise: true }
      ]
    },
    {
      category: 'SEO・マーケティング',
      features: [
        { name: 'SEO基礎設定', standard: true, business: true, enterprise: true },
        { name: '高度なSEO対策', standard: false, business: true, enterprise: true },
        { name: 'Google Analytics連携', standard: true, business: true, enterprise: true },
        { name: 'コンバージョン最適化', standard: false, business: true, enterprise: true },
        { name: 'A/Bテスト機能', standard: false, business: false, enterprise: true }
      ]
    },
    {
      category: '機能・統合',
      features: [
        { name: 'お問い合わせフォーム', standard: true, business: true, enterprise: true },
        { name: 'CMS統合', standard: false, business: true, enterprise: true },
        { name: '会員管理システム', standard: false, business: false, enterprise: true },
        { name: '予約・予約システム', standard: false, business: true, enterprise: true },
        { name: 'API統合', standard: false, business: false, enterprise: true },
        { name: 'ERP/CRM統合', standard: false, business: false, enterprise: true }
      ]
    },
    {
      category: 'セキュリティ・パフォーマンス',
      features: [
        { name: 'SSL証明書', standard: true, business: true, enterprise: true },
        { name: '基本的なセキュリティ対策', standard: true, business: true, enterprise: true },
        { name: '高度なセキュリティ対策', standard: false, business: false, enterprise: true },
        { name: 'WAF（Web Application Firewall）', standard: false, business: false, enterprise: true },
        { name: 'CDN配信', standard: false, business: true, enterprise: true },
        { name: 'パフォーマンス最適化', standard: false, business: true, enterprise: true }
      ]
    },
    {
      category: 'サポート・保守',
      features: [
        { name: '1年間の技術サポート', standard: true, business: false, enterprise: false },
        { name: '2年間の技術サポート', standard: false, business: true, enterprise: false },
        { name: '24/7監視・サポート', standard: false, business: false, enterprise: true },
        { name: '月次メンテナンスプラン', standard: false, business: true, enterprise: true },
        { name: '専任プロジェクトマネージャー', standard: false, business: false, enterprise: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Web制作/DXポータル
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              モダンなWebサイト制作とデジタルトランスフォーメーションポータル構築サービス
            </p>
          </motion.div>
        </div>
      </div>

      {/* 套餐卡片 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 hover:border-sky-300 transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.nameJa}</h3>
                  <div className="text-4xl font-bold text-sky-600 mb-2">{pkg.price}</div>
                  <p className="text-sm text-slate-600 mb-4">{pkg.focus || pkg.coreValue}</p>
                  <p className="text-sm text-slate-500">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.slice(0, 5).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-slate-600 flex-shrink-0" strokeWidth={1.25} />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                  {pkg.features.length > 5 && (
                    <p className="text-xs text-slate-500 pl-7">
                      +{pkg.features.length - 5} その他の機能
                    </p>
                  )}
                </div>

                <button
                  onClick={() => handleViewDetails(pkg.id)}
                  className="w-full h-10 bg-gradient-to-r from-sky-600 to-emerald-600 text-white rounded-lg font-bold hover:from-sky-700 hover:to-emerald-700 transition-colors flex items-center justify-center space-x-2 antialiased"
                  style={{ lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <span>詳細を見る</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.25} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 对比表格 */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">機能比較表</h2>
            <p className="text-slate-600 mt-2">各プランの機能を比較して、最適なプランをお選びください</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-800 border-b border-slate-200">
                    機能
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-800 border-b border-slate-200">
                    {pricingPackages[0].nameJa}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-800 border-b border-slate-200">
                    {pricingPackages[1].nameJa}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-800 border-b border-slate-200">
                    {pricingPackages[2].nameJa}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-sky-50">
                      <td colSpan="4" className="px-6 py-3 text-sm font-bold text-sky-800">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featIdx) => (
                      <tr
                        key={featIdx}
                        className="hover:bg-slate-50 transition-colors border-b border-slate-100"
                      >
                        <td className="px-6 py-4 text-sm text-slate-700">{feature.name}</td>
                        <td className="px-6 py-4 text-center">
                          {feature.standard ? (
                            <Check className="w-4 h-4 text-slate-600 mx-auto" strokeWidth={1.25} />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 mx-auto" strokeWidth={1.25} />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {feature.business ? (
                            <Check className="w-4 h-4 text-slate-600 mx-auto" strokeWidth={1.25} />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 mx-auto" strokeWidth={1.25} />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {feature.enterprise ? (
                            <Check className="w-4 h-4 text-slate-600 mx-auto" strokeWidth={1.25} />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 mx-auto" strokeWidth={1.25} />
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <PackageDetailModal
        packageId={selectedPackage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
