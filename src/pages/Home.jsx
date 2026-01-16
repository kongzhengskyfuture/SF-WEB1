'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LayoutGrid, Cpu, ArrowRightLeft, Monitor, Globe } from 'lucide-react';
import { teamMembers, insights } from '../data/siteContent';
import ContactModal from '../components/ContactModal';
import { useState } from 'react';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // 获取最新的3条动态
  const latestInsights = insights
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 bg-grid-pattern">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-600 via-sky-700 to-emerald-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              デジタル変革を加速する
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Microsoft Dynamics 365、AI ソリューション、モダンなウェブサイト構築で、ビジネスの可能性を最大化します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="px-6 py-3 bg-white text-sky-600 rounded-lg font-bold hover:bg-slate-100 transition-colors text-sm flex items-center justify-center leading-none"
              >
                無料相談を予約
              </Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-3 bg-sky-500/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-sky-500/30 transition-all flex items-center justify-center leading-none"
              >
                30分無料診断
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates - 极简跑马灯 */}
      <section className="py-4 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap flex-shrink-0">
              最新情報
            </span>
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              {insights
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 5)
                .map((insight) => (
                  <Link
                    key={insight.id}
                    to={`/insights/${insight.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex items-center space-x-2 text-xs text-slate-300 hover:text-white transition-colors whitespace-nowrap group"
                  >
                    <span className="text-slate-500">
                      {new Date(insight.date).toLocaleDateString('ja-JP', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="text-slate-600">|</span>
                    <span className="text-slate-400">{insight.categoryJa}</span>
                    <span className="text-slate-600">|</span>
                    <span className="group-hover:underline">{insight.title}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Dashboard Section */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: '業界経験', value: '10+', unit: '年' },
              { label: 'プロジェクト実績', value: '50+', unit: '件' },
              { label: '導入企業数', value: '100+', unit: '社' },
              { label: '満足度', value: '98%', unit: '' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {item.value}
                  {item.unit && <span className="text-xl text-slate-600 ml-1">{item.unit}</span>}
                </div>
                <div className="text-sm text-slate-600 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section - 主推业务 + 侧边次要业务列表 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              サービス
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              お客様のデジタル変革を支援する包括的なソリューション
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-10 gap-6">
            {/* 主推业务（大卡片）- 三大业务视觉对等 */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  id: 'd365',
                  title: 'Dynamics 365 導入・カスタマイズ',
                  description: '100社以上の大企業にD365導入を支援。営業効率を35%向上させる実績。',
                  icon: LayoutGrid,
                  metrics: '100+ 導入実績'
                },
                {
                  id: 'utron',
                  title: 'uTRON ソフトウェア開発',
                  description: '高精度分析装置向けの統合プラットフォーム。リアルタイムデータ処理を実現。',
                  icon: Cpu,
                  metrics: '<100ms 処理速度'
                },
                {
                  id: 'consulting',
                  title: 'ITコンサルティング / マイグレーション',
                  description: 'レガシーシステムからモダンなクラウドベースシステムへの移行をサポート。ダウンタイムを最小限に抑えながら、データの完全性を保証した移行を実現します。',
                  icon: ArrowRightLeft,
                  metrics: '25+ 移行実績'
                }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:border-sky-300 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <IconComponent className="w-4 h-4 text-slate-600 flex-shrink-0 mt-1" strokeWidth={1.25} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                        <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded font-medium ml-3 whitespace-nowrap">
                          {service.metrics}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <Link
                        to={`/services/${service.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 group"
                      >
                        詳細を見る
                        <svg
                          className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
                  )})}
            </div>

            {/* 侧边次要业务列表 */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-5 border border-slate-200 sticky top-8">
                <h3 className="text-sm font-bold text-slate-900 mb-4">
                  その他のサービス
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'web-design', title: 'DX サイト・ポータル構築', icon: Globe, description: '企業の顔となるウェブサイトを、ITコンサルタントの視点で構築' },
                    { id: 'ai', title: 'AI 活用コンサルティング', icon: Cpu },
                    { id: 'migration', title: 'システムマイグレーション', icon: ArrowRightLeft }
                  ].map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="flex items-start space-x-3 p-3 rounded-lg border border-slate-200 hover:border-sky-300 transition-colors group"
                      >
                        <IconComponent className="w-4 h-4 text-slate-600 group-hover:text-slate-700 flex-shrink-0 mt-0.5" strokeWidth={1.25} />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium text-slate-700 group-hover:text-sky-600 transition-colors block">
                            {service.title}
                          </span>
                          {service.description && (
                            <span className="text-xs text-slate-500 mt-1 block leading-relaxed">
                              {service.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Latest Insights
              </h2>
              <p className="text-xl text-slate-600">
                最新のニュースとインサイト
              </p>
            </div>
            <Link
              to="/insights"
              onClick={() => window.scrollTo(0, 0)}
              className="hidden md:block px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors shadow-md hover:shadow-lg"
            >
              すべて見る →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestInsights.map((insight, idx) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link
                  to={`/insights/${insight.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="block bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-sky-300 transition-colors group"
                >
                  {/* 缩略图 */}
                  <div className="h-48 bg-gradient-to-br from-sky-100 via-emerald-100 to-sky-200 flex items-center justify-center overflow-hidden">
                    <div className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">
                      📰
                    </div>
                  </div>

                  {/* 卡片内容 */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                        {insight.categoryJa}
                      </span>
                      <span className="text-xs text-slate-500">
                        {new Date(insight.date).toLocaleDateString('ja-JP', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-3">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                      続きを読む
                      <svg
                        className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* 移动端"查看更多"按钮 */}
          <div className="mt-6 text-center md:hidden">
            <Link
              to="/insights"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-5 py-2.5 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors text-sm"
            >
              すべて見る →
            </Link>
          </div>
        </div>
      </section>


      {/* Team Members Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              専門家チーム
            </h2>
            <p className="text-xl text-slate-600">
              経験豊富なエキスパートがお客様をサポートします
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-lg p-5 border border-slate-200 hover:border-sky-300 transition-colors"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
                />
                <h3 className="text-xl font-bold text-slate-900 text-center mb-1">{member.name}</h3>
                <p className="text-sm text-slate-600 text-center mb-4">{member.roleJa}</p>
                <p className="text-sm text-slate-700 text-center">{member.motto}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/team"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-5 py-2.5 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors text-sm flex items-center justify-center leading-none"
            >
              チーム詳細を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-br from-sky-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              お気軽にお問い合わせください
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              デジタル変革に関するご相談やご質問がございましたら、専門家が丁寧にご対応いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="px-6 py-3 bg-white text-sky-600 rounded-lg font-bold hover:bg-slate-100 transition-colors text-sm flex items-center justify-center leading-none"
              >
                お問い合わせフォームへ
              </Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-3 bg-sky-500/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold hover:bg-sky-500/30 transition-all flex items-center justify-center leading-none"
              >
                30分無料診断を予約
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
