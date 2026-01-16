'use client';

import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Trophy, 
  Zap, 
  Wrench, 
  Link2, 
  Shield, 
  DollarSign, 
  Lock,
  CheckCircle2,
  Download,
  FileText,
  Code,
  Database
} from 'lucide-react';
import { 
  teamMembers, 
  insights, 
  pricingPackages, 
  coreServices,
  getTeamMemberById, 
  getInsightsByCategory,
  getServiceById
} from '../data/siteContent';
import ContactModal from './ContactModal';

/**
 * ServiceDetail - 高信息密度详情页模版组件
 * 功能：7:3 布局，左侧内容区（含阅读进度条），右侧专家挂件和相关动态
 * 参考：AI综研的信息密度 + 大成学院的清爽感
 */
export default function ServiceDetail({
  serviceId = 'dev',
  title = '数字化门户建设',
  subtitle = 'モダンなウェブサイト・CMS・統合開発',
  description = '企業のデジタル変革を支援する、最新技術を活用したウェブサイト構築サービスです。',
  breadcrumbs = [
    { label: '首页', href: '/' },
    { label: '服务', href: '/services' },
    { label: title, href: '#' }
  ],
  relatedCases = []
}) {
  // 阅读进度条
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Modal 状态
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // 获取核心服务数据
  const serviceData = useMemo(() => {
    const serviceMap = {
      'd365': 'd365',
      'ai': 'ai',
      'dev': 'dev',
      'utron': 'utron',
      'migration': 'migration'
    };
    const mappedId = serviceMap[serviceId] || 'd365';
    return getServiceById(mappedId);
  }, [serviceId]);

  // 强项图标映射
  const strengthIcons = {
    'strength-1': Trophy,
    'strength-2': Zap,
    'strength-3': Wrench,
    'strength-4': Link2,
    'strength-5': Shield,
    'strength-6': DollarSign,
    'strength-7': Lock
  };

  // 根据服务ID查找相关专家
  const relatedExpert = useMemo(() => {
    const serviceToExpertMap = {
      'd365': 'tm-003',
      'ai': 'tm-002',
      'dev': 'tm-004',
      'utron': 'tm-001',
      'migration': 'tm-001'
    };
    const expertId = serviceToExpertMap[serviceId] || 'tm-001';
    return getTeamMemberById(expertId) || teamMembers[0];
  }, [serviceId]);

  // 根据服务ID和类别筛选相关动态
  const relatedInsights = useMemo(() => {
    const serviceToCategoryMap = {
      'd365': 'D365',
      'ai': 'AI',
      'dev': 'AI',
      'utron': 'AI',
      'migration': 'Company'
    };
    const category = serviceToCategoryMap[serviceId] || 'AI';
    return getInsightsByCategory(category)
      .slice(0, 3)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [serviceId]);

  // 获取相关套餐（用于相关案例）
  const relatedPackages = useMemo(() => {
    if (serviceId === 'dev') {
      return pricingPackages.filter((pkg) => pkg.id !== 'standard');
    }
    return pricingPackages.filter((pkg) => pkg.id === 'enterprise');
  }, [serviceId]);

  // 如果没有提供相关案例，使用套餐作为案例
  const displayCases = relatedCases.length > 0 
    ? relatedCases 
    : relatedPackages.map((pkg) => ({
        id: pkg.id,
        title: pkg.nameJa,
        description: pkg.description,
        category: pkg.name,
        imageUrl: `/cases/${pkg.id}.jpg`
      }));

  return (
    <div className="min-h-screen bg-slate-50 bg-grid-pattern">
      {/* 阅读进度条 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* 左侧内容区 (70%) */}
          <div className="lg:col-span-7">
            {/* 面包屑导航 */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-2 text-sm text-slate-600">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <svg
                        className="w-4 h-4 mx-2 text-slate-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-slate-900 font-semibold">{crumb.label}</span>
                    ) : (
                      <Link
                        to={crumb.href}
                        onClick={() => window.scrollTo(0, 0)}
                        className="hover:text-sky-600 transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>

            {/* 标题区域 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight">
                {title}
              </h1>
              <p className="text-base text-slate-600 mb-3 leading-relaxed">{subtitle}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full"></div>
            </motion.div>

            {/* 详细描述 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-8"
            >
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                  {serviceData?.fullDescription || description}
                </div>
              </div>
            </motion.div>

            {/* D365 7大强项（紧凑展示） */}
            {serviceData?.strengths && serviceData.strengths.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  弊社の強み
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {serviceData.strengths.map((strength) => {
                    const IconComponent = strengthIcons[strength.id] || CheckCircle2;
                    return (
                      <motion.div
                        key={strength.id}
                        whileHover={{ y: -2 }}
                        className="bg-white rounded-lg p-4 border border-slate-200 hover:border-sky-300 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <IconComponent className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                              {strength.title}
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed mb-2">
                              {strength.description}
                            </p>
                            {strength.metrics && (
                              <div className="flex flex-wrap gap-1.5">
                                {Object.entries(strength.metrics).slice(0, 2).map(([key, value]) => (
                                  <span
                                    key={key}
                                    className="text-xs px-2 py-0.5 bg-sky-50 text-sky-700 rounded font-medium"
                                  >
                                    {key}: {value}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            )}

            {/* uTRON 开发流程可视化 */}
            {serviceData?.developmentProcess && serviceData.developmentProcess.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mb-8"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  開発プロセス
                </h2>
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <div className="relative">
                    {/* 垂直进度线 */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200">
                      <motion.div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-sky-500 to-emerald-500"
                        initial={{ height: '0%' }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>

                    {/* 流程节点 */}
                    <div className="space-y-6">
                      {serviceData.developmentProcess.map((phase, index) => (
                        <div key={phase.phase} className="relative pl-14">
                          {/* 节点圆点 */}
                          <div className="absolute left-4 top-1 w-4 h-4 bg-white border-2 border-sky-500 rounded-full flex items-center justify-center z-10">
                            <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                          </div>

                          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-sm font-bold text-slate-900 mb-1">
                                  Phase {phase.phase}: {phase.name}
                                </h3>
                                <p className="text-xs text-slate-500 mb-2">{phase.nameEn}</p>
                              </div>
                              <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded font-medium whitespace-nowrap">
                                {phase.duration}
                              </span>
                            </div>

                            {/* 交付物 */}
                            {phase.deliverables && phase.deliverables.length > 0 && (
                              <div className="mb-2">
                                <p className="text-xs font-semibold text-slate-700 mb-1.5">交付物：</p>
                                <ul className="space-y-1">
                                  {phase.deliverables.slice(0, 2).map((deliverable, idx) => (
                                    <li key={idx} className="text-xs text-slate-600 flex items-start">
                                      <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1.5 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                      <span>{deliverable}</span>
                                    </li>
                                  ))}
                                  {phase.deliverables.length > 2 && (
                                    <li className="text-xs text-slate-500 italic">
                                      +{phase.deliverables.length - 2} その他
                                    </li>
                                  )}
                                </ul>
                              </div>
                            )}

                            {/* 技术栈标签 */}
                            {phase.technologies && (
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {phase.technologies.slice(0, 3).map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* 相关案例推荐卡片 */}
            {displayCases.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  関連事例
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayCases.map((caseItem, index) => (
                    <motion.div
                      key={caseItem.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.35 + index * 0.1 }}
                      className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-sky-300 transition-colors group"
                    >
                      <div className="h-32 bg-gradient-to-br from-sky-100 to-emerald-100 flex items-center justify-center overflow-hidden">
                        {caseItem.imageUrl ? (
                          <img
                            src={caseItem.imageUrl}
                            alt={caseItem.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="text-4xl">📊</div>
                        )}
                      </div>
                      <div className="p-4">
                        {caseItem.category && (
                          <span className="inline-block px-2 py-0.5 text-xs font-bold text-sky-600 bg-sky-100 rounded mb-2">
                            {caseItem.category}
                          </span>
                        )}
                        <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-sky-600 transition-colors line-clamp-2">
                          {caseItem.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                          {caseItem.description}
                        </p>
                        <Link
                          to={`/cases/${caseItem.id}`}
                          onClick={() => window.scrollTo(0, 0)}
                          className="inline-flex items-center text-xs font-semibold text-sky-600 hover:text-sky-700 group/link"
                        >
                          詳細を見る
                          <svg
                            className="ml-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform"
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
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* 右侧侧边栏 (30%) - Sticky */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-8 space-y-4">
              {/* 模块1：专业背书 - 专家 Mini Profile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-lg p-5 border border-slate-200"
              >
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  担当エキスパート
                </h3>
                <div className="flex items-start space-x-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 overflow-hidden">
                    {relatedExpert.image ? (
                      <img
                        src={relatedExpert.image}
                        alt={relatedExpert.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      relatedExpert.name.charAt(0)
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-base">
                      {relatedExpert.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {relatedExpert.roleJa || relatedExpert.role}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 italic leading-relaxed">
                      "{relatedExpert.motto}"
                    </p>
                    <Link
                      to="/team"
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-flex items-center mt-3 text-xs font-semibold text-sky-600 hover:text-sky-700 group"
                    >
                      プロフィールを見る
                      <svg
                        className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform"
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

              {/* 技术栈悬浮块 */}
              {serviceData?.technologies && serviceData.technologies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="bg-white rounded-lg p-5 border border-slate-200"
                >
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-1.5" strokeWidth={1.5} />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceData.technologies.slice(0, 6).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 关联下载/文档入口 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white rounded-lg p-5 border border-slate-200"
              >
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                  <Download className="w-4 h-4 mr-1.5" strokeWidth={1.5} />
                  関連資料
                </h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center text-xs text-slate-700 hover:text-sky-600 transition-colors group"
                  >
                    <FileText className="w-4 h-4 mr-2 text-slate-400 group-hover:text-sky-600" strokeWidth={1.5} />
                    <span>導入ガイド（PDF）</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-xs text-slate-700 hover:text-sky-600 transition-colors group"
                  >
                    <FileText className="w-4 h-4 mr-2 text-slate-400 group-hover:text-sky-600" strokeWidth={1.5} />
                    <span>技術仕様書（PDF）</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-xs text-slate-700 hover:text-sky-600 transition-colors group"
                  >
                    <FileText className="w-4 h-4 mr-2 text-slate-400 group-hover:text-sky-600" strokeWidth={1.5} />
                    <span>事例集（PDF）</span>
                  </a>
                </div>
              </motion.div>

              {/* 模块2：动态推荐 - 相关 Insights */}
              {relatedInsights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="bg-white rounded-lg p-5 border border-slate-200"
                >
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                    関連ニュース
                  </h3>
                  <div className="space-y-3">
                    {relatedInsights.map((insight, index) => (
                      <motion.div
                        key={insight.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      >
                        <Link
                          to={`/insights/${insight.id}`}
                          onClick={() => window.scrollTo(0, 0)}
                          className="block group"
                        >
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0 w-12 h-12 rounded bg-slate-100 flex items-center justify-center">
                              <div className="text-lg">📰</div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-xs font-semibold text-sky-600">
                                  {insight.categoryJa}
                                </span>
                              </div>
                              <h4 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-sky-600 transition-colors mb-1">
                                {insight.title}
                              </h4>
                              <p className="text-xs text-slate-500">
                                {new Date(insight.date).toLocaleDateString('ja-JP')}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <Link
                    to="/insights"
                    onClick={() => window.scrollTo(0, 0)}
                    className="block mt-3 text-center text-xs font-semibold text-sky-600 hover:text-sky-700"
                  >
                    すべてのニュースを見る →
                  </Link>
                </motion.div>
              )}

              {/* 模块3：快速通道 - 免费诊断预约 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-sky-500 via-sky-600 to-emerald-600 rounded-lg p-5 text-white"
              >
                <div className="text-center mb-3">
                  <div className="text-2xl mb-1.5">💬</div>
                  <h3 className="font-bold text-base mb-1.5">無料診断</h3>
                  <p className="text-xs text-sky-50 leading-relaxed">
                    30分間の無料オンライン診断<br />
                    専門家がご対応いたします。
                  </p>
                </div>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="block w-full text-center px-4 py-2.5 bg-white text-sky-600 rounded-lg font-bold hover:bg-slate-50 transition-colors text-sm"
                >
                  無料診断を予約する
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        presetService={serviceId}
      />
    </div>
  );
}
