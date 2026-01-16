'use client';

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { insights } from '../data/siteContent';

/**
 * Insights - 动态门户页面
 * 功能：分类过滤、卡片展示、点击进入详情页
 * 参考：AI综合研究所的设计风格
 */
export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  // 分类选项
  const categories = [
    { id: 'すべて', label: 'すべて', value: null },
    { id: 'AI', label: 'AI ニュース', value: 'AI' },
    { id: 'D365', label: 'D365 更新', value: 'D365' },
    { id: 'Company', label: '会社動向', value: 'Company' }
  ];

  // 过滤后的动态列表
  const filteredInsights = useMemo(() => {
    if (selectedCategory === 'すべて') {
      return insights.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return insights
      .filter(insight => insight.category === selectedCategory)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            インサイト
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            デジタル変革、AI、Dynamics 365に関する最新のニュースとインサイトをお届けします
          </p>
        </motion.div>

        {/* 分类过滤 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-200'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 动态卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={`/insights/${insight.id}`}
                onClick={() => window.scrollTo(0, 0)}
                className="block bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-sky-300 transition-all overflow-hidden group"
              >
                {/* 缩略图 */}
                <div className="h-48 bg-gradient-to-br from-sky-100 via-emerald-100 to-sky-200 flex items-center justify-center overflow-hidden">
                  <div className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">
                    📰
                  </div>
                </div>

                {/* 卡片内容 */}
                <div className="p-6">
                  {/* 日期和分类标签 */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                      {insight.categoryJa}
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(insight.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-sky-600 transition-colors">
                    {insight.title}
                  </h3>

                  {/* 摘要 */}
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {insight.excerpt}
                  </p>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* 阅读更多 */}
                  <div className="flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-700">
                    続きを読む
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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

        {/* 空状态 */}
        {filteredInsights.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-5xl mb-4">📭</div>
            <p className="text-lg text-slate-600">
              該当する記事が見つかりませんでした
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
