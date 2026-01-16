'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Globe, ArrowRight, FileText } from 'lucide-react';
import { getServiceById, pricingPackages } from '../data/siteContent';
import PackageDetailModal from '../components/PackageDetailModal';
import { useState } from 'react';

/**
 * WebDesignServiceDetail - DX サイト・ポータル構築详情页
 * 页面顺序：业务优势 -> 样板案例展示 -> 流程说明 -> 三档报价
 */
export default function WebDesignServiceDetail() {
  const serviceData = getServiceById('web-design');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (packageId) => {
    setSelectedPackage(packageId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 text-sm text-slate-500 mb-4">
              <Link to="/" className="hover:text-slate-700">ホーム</Link>
              <span>/</span>
              <Link to="/" className="hover:text-slate-700">サービス</Link>
              <span>/</span>
              <span className="text-slate-900">DX サイト・ポータル構築</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              {serviceData?.name || 'DX サイト・ポータル構築'}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              {serviceData?.fullDescription || '企業の顔となるウェブサイトを、ITコンサルタントの視点で構築'}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-10 gap-8">
          {/* 左侧主内容区 */}
          <div className="lg:col-span-7 space-y-12">
            {/* 1. 业务优势 */}
            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">業務優勢</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {serviceData?.keyFeatures?.map((feature, idx) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" strokeWidth={1.25} />
                        <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      {feature.technicalSpecs && (
                        <div className="flex flex-wrap gap-2">
                          {feature.technicalSpecs.map((spec, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-slate-100 border border-slate-200 rounded text-slate-700"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* 2. 样板案例展示 (Portfolio Section) */}
            {serviceData?.portfolio && serviceData.portfolio.length > 0 && (
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">実績・ポートフォリオ</h2>
                  <div className="space-y-6">
                    {serviceData.portfolio.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors"
                      >
                        <div className="grid md:grid-cols-3 gap-0">
                          <div className="md:col-span-1">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                          <div className="md:col-span-2 p-6">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">
                                {item.industry}
                              </span>
                              {item.technologies?.slice(0, 2).map((tech, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                              {item.description}
                            </p>
                            {item.results && (
                              <div className="grid grid-cols-3 gap-3 mb-4">
                                {item.results.map((result, i) => (
                                  <div key={i} className="text-center">
                                    <div className="text-lg font-bold text-slate-900">{result.value}</div>
                                    <div className="text-xs text-slate-500">{result.metric}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}

            {/* 3. 流程说明 */}
            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">開発プロセス</h2>
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <div className="space-y-6">
                    {[
                      {
                        phase: 1,
                        name: '要件定義・ヒアリング',
                        description: 'お客様のビジネス目標と要件を詳細にヒアリングし、最適なソリューションを提案します。',
                        duration: '1-2週間'
                      },
                      {
                        phase: 2,
                        name: 'デザイン・設計',
                        description: 'ITコンサルタントの視点から、ビジネス価値を最大化するデザインとシステム設計を行います。',
                        duration: '2-3週間'
                      },
                      {
                        phase: 3,
                        name: '開発・実装',
                        description: 'モダンな技術スタックを使用し、高品質なコードで実装します。',
                        duration: '4-8週間'
                      },
                      {
                        phase: 4,
                        name: 'テスト・品質保証',
                        description: '包括的なテストにより、品質を保証します。',
                        duration: '1-2週間'
                      },
                      {
                        phase: 5,
                        name: 'デプロイ・運用開始',
                        description: '本番環境へのデプロイと、運用開始後のサポートを提供します。',
                        duration: '1週間'
                      }
                    ].map((step, idx) => (
                      <div key={step.phase} className="flex items-start space-x-4 pb-6 border-b border-slate-200 last:border-0">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                          {step.phase}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-slate-900">{step.name}</h3>
                            <span className="text-xs text-slate-500">{step.duration}</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            {/* 4. 三档报价 */}
            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">料金プラン</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {pricingPackages.map((pkg, idx) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white rounded-lg border border-slate-200 p-6 hover:border-slate-300 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.nameJa}</h3>
                      <div className="text-2xl font-bold text-sky-600 mb-4">{pkg.price}</div>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">{pkg.description}</p>
                      <ul className="space-y-2 mb-6">
                        {pkg.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-center text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 mr-2 flex-shrink-0" strokeWidth={1.25} />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handleViewDetails(pkg.id)}
                        className="w-full px-4 py-2.5 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm"
                      >
                        詳細を見る
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          </div>

          {/* 右侧边栏 */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-4">お問い合わせ</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  ご質問やご相談がございましたら、お気軽にお問い合わせください。
                </p>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="block w-full px-4 py-2.5 bg-sky-900 text-white rounded-lg font-semibold hover:bg-sky-800 transition-colors text-sm text-center"
                >
                  お問い合わせフォームへ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Package Detail Modal */}
      {isModalOpen && selectedPackage && (
        <PackageDetailModal
          packageId={selectedPackage}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPackage(null);
          }}
        />
      )}
    </div>
  );
}
