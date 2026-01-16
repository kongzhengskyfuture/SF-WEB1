'use client';

import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { pricingPackages, insights, coreServices, getPackageById, getInsightsByCategory, getServiceById } from '../data/siteContent';

/**
 * NavbarNew - 升级版导航栏组件
 * 功能：Mega Menu 悬停展开，显示服务类别和热门文章/套餐预览
 * 参考：AI综研的高信息密度 + 大成学院的清爽感
 */
export default function NavbarNew() {
  const navigate = useNavigate();
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [displayMode, setDisplayMode] = useState('package'); // 'package' | 'articles'

  // 处理导航跳转，确保滚动到顶部
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // 服务类别配置 - 使用 coreServices 数据，显示三个主营业务
  const serviceCategories = [
    {
      id: 'd365',
      name: 'Dynamics 365 導入・カスタマイズ',
      nameJa: 'Dynamics 365 導入・カスタマイズ',
      description: '100社以上の大企業にD365導入を支援。営業効率を35%向上させる実績。',
      relatedPackage: 'enterprise',
      relatedCategory: 'D365',
      icon: '📊',
      coreValue: '豊富な実績と専門性により、迅速で確実な導入を実現'
    },
    {
      id: 'utron',
      name: '自動化分析装置ソフトウェア開発 (uTRON)',
      nameJa: 'uTRON ソフトウェア開発',
      description: '高精度分析装置向けの統合プラットフォーム。リアルタイムデータ処理を実現。',
      relatedPackage: 'enterprise',
      relatedCategory: 'AI',
      icon: '🔬',
      coreValue: '高速データ処理エンジンによるリアルタイム分析結果の表示（<100ms）'
    },
    {
      id: 'consulting',
      name: 'ITコンサルティング・システムマイグレーション',
      nameJa: 'ITコンサルティング・システムマイグレーション',
      description: 'レガシーシステムからモダンなクラウドベースシステムへの移行をサポート。',
      relatedPackage: 'enterprise',
      relatedCategory: 'Company',
      icon: '💼',
      coreValue: 'ダウンタイムを最小限に抑えながら、データの完全性を保証した移行'
    }
  ];

  // 获取关联的套餐信息
  const getRelatedPackage = (packageId) => {
    return getPackageById(packageId) || pricingPackages[1];
  };

  // 获取热门文章
  const getHotArticles = (category) => {
    return getInsightsByCategory(category)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  };

  // 当前悬停服务的相关数据
  const currentServiceData = useMemo(() => {
    if (!hoveredService) return null;
    const category = serviceCategories.find(c => c.id === hoveredService);
    if (!category) return null;

    return {
      category,
      package: getRelatedPackage(category.relatedPackage),
      articles: getHotArticles(category.relatedCategory)
    };
  }, [hoveredService]);

  return (
    <nav className="relative z-[100] bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-2xl font-bold text-slate-900 hover:text-sky-600 transition-colors"
            >
              Sky Future
            </Link>
          </div>

          {/* 导航链接 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
            >
              ホーム
            </Link>
            
            {/* 服务菜单 - 触发 Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => {
                setIsServicesHovered(false);
                setHoveredService(null);
              }}
            >
              <button className="text-slate-700 hover:text-sky-600 transition-colors flex items-center font-medium">
                サービス
                <svg
                  className="ml-1 h-4 w-4 transition-transform"
                  style={{ transform: isServicesHovered ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mega Menu 浮层 - 全屏下拉（仅桌面端显示） */}
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="hidden md:block absolute top-full left-0 mt-2 z-[100]"
                    style={{ 
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      width: 'min(90vw, 1280px)'
                    }}
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => {
                      setIsServicesHovered(false);
                      setHoveredService(null);
                    }}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
                      <div className="grid grid-cols-5">
                        {/* 左侧：服务类别列表 (2/5) */}
                        <div className="col-span-2 p-6 bg-white border-r border-slate-200">
                          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                            サービスカテゴリー
                          </h3>
                          <ul className="space-y-0.5">
                            {serviceCategories.map((category) => {
                              const isHovered = hoveredService === category.id;
                              return (
                                <li key={category.id}>
                                  <Link
                                    to={`/services/${category.id}`}
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={`block p-4 rounded-lg transition-colors group ${
                                      isHovered 
                                        ? 'bg-sky-50 border-l-2 border-sky-600' 
                                        : 'hover:bg-slate-50 border-l-2 border-transparent'
                                    }`}
                                    onMouseEnter={() => {
                                      setHoveredService(category.id);
                                      setDisplayMode('package');
                                    }}
                                  >
                                    <div className="flex items-start space-x-3">
                                      <span className="text-2xl mt-0.5">{category.icon}</span>
                                      <div className="flex-1 min-w-0">
                                        <div className={`font-bold text-base mb-1 transition-colors ${
                                          isHovered ? 'text-sky-700' : 'text-slate-800 group-hover:text-sky-600'
                                        }`}>
                                          {category.nameJa}
                                        </div>
                                        <div className="text-xs text-slate-600 leading-relaxed">
                                          {category.description}
                                        </div>
                                      </div>
                                      {isHovered && (
                                        <motion.svg
                                          initial={{ opacity: 0, x: -5 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          className="w-4 h-4 text-sky-600 flex-shrink-0 mt-1"
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
                                        </motion.svg>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* 右侧展示区 (3/5) - 显示核心价值提炼 */}
                        <div className="col-span-3 p-6 bg-white">
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                              {displayMode === 'package' ? '推奨パッケージ' : '人気記事'}
                            </h3>
                            {/* 切换按钮 */}
                            {currentServiceData && (
                              <div className="flex items-center space-x-2 bg-slate-100 rounded-lg p-1">
                                <button
                                  onClick={() => setDisplayMode('package')}
                                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
                                    displayMode === 'package'
                                      ? 'bg-white text-sky-600 shadow-sm'
                                      : 'text-slate-600 hover:text-slate-900'
                                  }`}
                                >
                                  パッケージ
                                </button>
                                <button
                                  onClick={() => setDisplayMode('articles')}
                                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
                                    displayMode === 'articles'
                                      ? 'bg-white text-sky-600 shadow-sm'
                                      : 'text-slate-600 hover:text-slate-900'
                                  }`}
                                >
                                  記事
                                </button>
                              </div>
                            )}
                          </div>

                          <AnimatePresence mode="wait">
                            {hoveredService && currentServiceData ? (
                              <motion.div
                                key={`${hoveredService}-${displayMode}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                              >
                                {displayMode === 'package' ? (
                                  /* 核心价值提炼 */
                                  <div>
                                    <div className="mb-6">
                                      <h4 className="text-xl font-bold text-slate-800 mb-3">
                                        {currentServiceData.category.nameJa}
                                      </h4>
                                      <div className="mb-4 p-4 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-lg border border-sky-200">
                                        <p className="text-sm font-semibold text-slate-800 mb-2">
                                          コアバリュー
                                        </p>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                          {currentServiceData.category.coreValue || currentServiceData.category.description}
                                        </p>
                                      </div>
                                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                        {currentServiceData.category.description}
                                      </p>
                                    </div>
                                    
                                    {/* 套餐信息（简化） */}
                                    <div className="mb-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-sky-600">
                                          {currentServiceData.package.name}
                                        </span>
                                        <span className="text-xs text-slate-500">
                                          {currentServiceData.package.period}
                                        </span>
                                      </div>
                                      <div className="text-sm font-bold text-slate-800 mb-1">
                                        {currentServiceData.package.price}
                                      </div>
                                      <p className="text-xs text-slate-600 leading-relaxed mt-2">
                                        {currentServiceData.package.description}
                                      </p>
                                    </div>

                                    {/* CTA 按钮 */}
                                    <Link
                                      to={`/services/${hoveredService}`}
                                      onClick={() => window.scrollTo(0, 0)}
                                      className="block w-full text-center px-5 py-2.5 bg-gradient-to-r from-sky-600 to-emerald-600 text-white rounded-lg font-bold hover:from-sky-700 hover:to-emerald-700 transition-colors text-sm"
                                    >
                                      詳細を見る →
                                    </Link>
                                  </div>
                                ) : (
                                  /* 热门文章列表 */
                                  <div>
                                    <div className="space-y-4">
                                      {currentServiceData.articles.map((article, idx) => (
                                        <motion.div
                                          key={article.id}
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: idx * 0.1 }}
                                        >
                                          <Link
                                            to={`/insights/${article.id}`}
                                            onClick={() => window.scrollTo(0, 0)}
                                            className="block p-4 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 transition-all group"
                                          >
                                            <div className="flex items-start space-x-4">
                                              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                                                <div className="text-2xl">📰</div>
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2 mb-2">
                                                  <span className="text-xs font-semibold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">
                                                    {article.categoryJa}
                                                  </span>
                                                  <span className="text-xs text-slate-500">
                                                    {new Date(article.date).toLocaleDateString('ja-JP')}
                                                  </span>
                                                </div>
                                                <h4 className="text-base font-bold text-slate-900 line-clamp-2 group-hover:text-sky-600 transition-colors mb-1">
                                                  {article.title}
                                                </h4>
                                                <p className="text-xs text-slate-600 line-clamp-2">
                                                  {article.excerpt}
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
                                      className="block mt-6 text-center text-sm font-semibold text-sky-600 hover:text-sky-700"
                                    >
                                      すべての記事を見る →
                                    </Link>
                                  </div>
                                )}
                              </motion.div>
                            ) : (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center justify-center h-full min-h-[400px] text-slate-400"
                              >
                                <div className="text-center">
                                  <div className="text-5xl mb-3">👆</div>
                                  <p className="text-sm font-medium">サービスカテゴリーを選択</p>
                                  <p className="text-xs text-slate-400 mt-1">パッケージや記事を確認できます</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/team"
              onClick={() => window.scrollTo(0, 0)}
              className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
            >
              会社概要
            </Link>
            <Link
              to="/insights"
              onClick={() => window.scrollTo(0, 0)}
              className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
            >
              インサイト
            </Link>
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="px-5 py-2 bg-gradient-to-r from-sky-600 to-emerald-600 text-white rounded-lg hover:from-sky-700 hover:to-emerald-700 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              お問い合わせ
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button className="text-slate-700">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
