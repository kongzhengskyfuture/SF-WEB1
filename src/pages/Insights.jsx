'use client';

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Trophy, Globe, TrendingUp } from 'lucide-react';
import { insights } from '../data/siteContent';

/**
 * Insights - 情报中心/CMS 主列表页
 * 功能：极简列表风格，左侧分类过滤器，右侧文章列表
 * 风格：去 AI 塑料感，极细线条分割
 */
export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  // 分类选项 - 使用新的分类体系
  const categories = [
    { id: 'すべて', label: 'すべて', value: null, icon: null },
    { id: 'Industry', label: '業界動向', value: 'Industry', icon: TrendingUp },
    { id: 'News', label: 'ニュース', value: 'News', icon: Globe },
    { id: 'Insights', label: '専門家の視点', value: 'Insights', icon: FileText },
    { id: 'Achievements', label: 'チーム実績', value: 'Achievements', icon: Trophy }
  ];

  // 分类图标映射
  const categoryIconMap = {
    'Industry': TrendingUp,
    'News': Globe,
    'Insights': FileText,
    'Achievements': Trophy
  };

  // 过滤后的动态列表
  const filteredInsights = useMemo(() => {
    if (selectedCategory === 'すべて') {
      return insights.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    const category = categories.find(c => c.id === selectedCategory);
    return insights
      .filter(insight => insight.category === category?.value)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 - 极简 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 pb-6 border-b border-slate-200"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            情報センター
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            デジタル変革、AI、Dynamics 365に関する最新情報と専門家の視点
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧分类过滤器 */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                カテゴリー
              </h2>
              <div className="space-y-1">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {IconComponent && (
                        <IconComponent className="w-4 h-4 flex-shrink-0" strokeWidth={1.25} />
                      )}
                      <span>{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 右侧文章列表 - 极简风格 */}
          <div className="lg:col-span-3">
            <div className="space-y-0">
              {filteredInsights.map((insight, index) => {
                const CategoryIcon = categoryIconMap[insight.category];
                return (
                  <motion.div
                    key={insight.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/insights/${insight.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="block py-5 border-b border-slate-200 hover:bg-white transition-colors group"
                    >
                      <div className="flex items-start justify-between space-x-4">
                        <div className="flex-1 min-w-0">
                          {/* 分类和日期 */}
                          <div className="flex items-center space-x-3 mb-2">
                            {CategoryIcon && (
                              <CategoryIcon className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" strokeWidth={1.25} />
                            )}
                            <span className="text-xs text-slate-500 font-medium">
                              {insight.categoryJa}
                            </span>
                            <span className="text-xs text-slate-400">|</span>
                            <span className="text-xs text-slate-500">
                              {new Date(insight.date).toLocaleDateString('ja-JP', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          
                          {/* 标题 */}
                          <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:underline transition-all tracking-tight leading-snug">
                            {insight.title}
                          </h3>
                          
                          {/* 摘要 */}
                          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                            {insight.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* 空状态 */}
            {filteredInsights.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-sm text-slate-500">
                  該当する記事が見つかりませんでした
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
