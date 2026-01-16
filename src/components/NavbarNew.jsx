'use client';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Cpu, ArrowRightLeft, Globe } from 'lucide-react';

/**
 * NavbarNew - 升级版导航栏组件
 * 功能：Mega Menu 悬停展开，显示三个核心服务类别的平铺布局
 * 参考：AI综研的高信息密度 + 大成学院的清爽感
 */
export default function NavbarNew() {
  const navigate = useNavigate();
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileService, setExpandedMobileService] = useState(null);

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
      nameJa: 'D365',
      description: '100社以上の大企業にD365導入を支援。営業効率を35%向上させる実績。',
      relatedPackage: 'enterprise',
      relatedCategory: 'D365',
      icon: LayoutGrid,
      coreValue: '豊富な実績と専門性により、迅速で確実な導入を実現'
    },
    {
      id: 'utron',
      name: '自動化分析装置ソフトウェア開発 (uTRON)',
      nameJa: 'uTRON',
      description: '高精度分析装置向けの統合プラットフォーム。リアルタイムデータ処理を実現。',
      relatedPackage: 'enterprise',
      relatedCategory: 'AI',
      icon: Cpu,
      coreValue: '高速データ処理エンジンによるリアルタイム分析結果の表示（<100ms）'
    },
    {
      id: 'consulting',
      name: 'ITコンサルティング・システムマイグレーション',
      nameJa: 'ITコンサルティング',
      description: 'レガシーシステムからモダンなクラウドベースシステムへの移行をサポート。',
      relatedPackage: 'enterprise',
      relatedCategory: 'Company',
      icon: ArrowRightLeft,
      coreValue: 'ダウンタイムを最小限に抑えながら、データの完全性を保証した移行'
    },
    {
      id: 'web-design',
      name: 'DX サイト・ポータル構築',
      nameJa: 'Web建設',
      description: '企業の顔となるウェブサイトを、ITコンサルタントの視点で構築',
      relatedPackage: 'business',
      relatedCategory: 'Web',
      icon: Globe,
      coreValue: 'ITコンサルタントの視点で構築する、ビジネス価値を最大化するウェブサイト'
    }
  ];


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
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => {
                setIsServicesHovered(false);
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

              {/* Mega Menu 浮层 - 固定定位居中（仅桌面端显示） */}
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="hidden md:block fixed left-1/2 -translate-x-1/2 top-16 z-[100] w-full max-w-5xl px-4"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => {
                      setIsServicesHovered(false);
                    }}
                  >
                    <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-200 overflow-hidden mt-2">
                      <div className="p-8">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                          サービスカテゴリー
                        </h3>
                        <div className="grid grid-cols-4 gap-4">
                          {serviceCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                              <Link
                                key={category.id}
                                to={`/services/${category.id}`}
                                onClick={() => window.scrollTo(0, 0)}
                                className="block p-6 rounded-lg border-2 border-transparent hover:border-slate-200 hover:bg-slate-50/50 transition-all group"
                              >
                                <div className="flex flex-col items-start space-y-3">
                                  <IconComponent className="w-4 h-4 text-slate-600 group-hover:text-slate-700 flex-shrink-0" strokeWidth={1.25} />
                                  <div className="flex-1 min-w-0 w-full">
                                    <div className="font-bold text-base mb-2 text-slate-800 group-hover:text-sky-600 transition-colors">
                                      {category.nameJa}
                                    </div>
                                    <div className="text-xs text-slate-600 leading-relaxed mb-3">
                                      {category.description}
                                    </div>
                                    <div className="text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                                      詳細を見る →
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
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
              to="/recruit"
              onClick={() => window.scrollTo(0, 0)}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              採用情報
            </Link>
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="px-5 h-10 bg-gradient-to-r from-sky-600 to-emerald-600 text-white rounded-lg hover:from-sky-700 hover:to-emerald-700 transition-all font-semibold shadow-md hover:shadow-lg flex items-center justify-center antialiased"
              style={{ lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              お問い合わせ
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700"
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* 移动端折叠菜单 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-slate-200 bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block py-2 text-slate-700 hover:text-sky-600 transition-colors font-medium"
                >
                  ホーム
                </Link>
                
                {/* 移动端服务菜单 - 折叠面板 */}
                <div className="border-t border-slate-200 pt-2">
                  <button
                    onClick={() => setExpandedMobileService(expandedMobileService === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between py-2 text-slate-700 hover:text-sky-600 transition-colors font-medium"
                  >
                    <span>サービス</span>
                    <svg
                      className={`h-5 w-5 transition-transform ${expandedMobileService === 'services' ? 'rotate-180' : ''}`}
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
                  
                  <AnimatePresence>
                    {expandedMobileService === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-2 mt-2"
                      >
                        {serviceCategories.map((category) => {
                          const IconComponent = category.icon;
                          return (
                            <Link
                              key={category.id}
                              to={`/services/${category.id}`}
                              onClick={() => {
                                window.scrollTo(0, 0);
                                setIsMobileMenuOpen(false);
                                setExpandedMobileService(null);
                              }}
                              className="flex items-center space-x-3 py-2 text-slate-600 hover:text-sky-600 transition-colors"
                            >
                              <IconComponent className="w-4 h-4 text-slate-600 flex-shrink-0" strokeWidth={1.25} />
                              <div className="flex-1">
                                <div className="font-semibold text-sm">{category.nameJa}</div>
                                <div className="text-xs text-slate-500 mt-0.5">{category.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/team"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block py-2 text-slate-700 hover:text-sky-600 transition-colors font-medium"
                >
                  会社概要
                </Link>
                <Link
                  to="/insights"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
                >
                  インサイト
                </Link>
                <Link
                  to="/recruit"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
                >
                  採用情報
                </Link>
                <Link
                  to="/contact"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 h-10 bg-gradient-to-r from-sky-600 to-emerald-600 text-white rounded-lg hover:from-sky-700 hover:to-emerald-700 transition-all font-semibold flex items-center justify-center antialiased"
                  style={{ lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  お問い合わせ
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
