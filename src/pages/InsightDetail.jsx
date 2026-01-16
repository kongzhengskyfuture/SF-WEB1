'use client';

import { useParams, Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { insights, teamMembers, getTeamMemberById, getInsightsByCategory, getInsightsByTag } from '../data/siteContent';
import ContactModal from '../components/ContactModal';

/**
 * InsightDetail - 动态详情页
 * 基于 ServiceDetail.jsx 模版，7:3 布局
 * 右侧侧边栏显示相关文章
 */
export default function InsightDetail() {
  const { insightId } = useParams();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // 阅读进度条
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 获取当前动态
  const currentInsight = useMemo(() => {
    return insights.find(insight => insight.id === insightId) || insights[0];
  }, [insightId]);

  // 获取作者信息
  const author = useMemo(() => {
    return getTeamMemberById(currentInsight.authorId) || teamMembers[0];
  }, [currentInsight.authorId]);

  // 获取相关文章（同类别，排除当前文章）
  const relatedInsights = useMemo(() => {
    const sameCategory = getInsightsByCategory(currentInsight.category)
      .filter(insight => insight.id !== currentInsight.id)
      .slice(0, 3)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 如果同类别文章不足，补充同标签文章
    if (sameCategory.length < 3) {
      const sameTags = insights
        .filter(insight => 
          insight.id !== currentInsight.id &&
          !sameCategory.find(item => item.id === insight.id) &&
          insight.tags.some(tag => currentInsight.tags.includes(tag))
        )
        .slice(0, 3 - sameCategory.length)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      
      return [...sameCategory, ...sameTags].slice(0, 3);
    }
    
    return sameCategory;
  }, [currentInsight]);

  // 根据作者角色确定服务类型
  const getServiceTypeByAuthor = (authorId) => {
    const authorRoleMap = {
      'tm-001': null, // CEO/CTO
      'tm-002': 'ai', // AI ソリューションアーキテクト
      'tm-003': 'd365', // D365 コンサルタント
      'tm-004': 'dev' // フロントエンド開発リーダー
    };
    return authorRoleMap[authorId] || null;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 阅读进度条 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* 左侧内容区 (70%) */}
          <div className="lg:col-span-7">
            {/* 面包屑导航 */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-2 text-sm text-slate-600">
                <li>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-sky-600 transition-colors">
                    ホーム
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4 mx-2 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li>
                  <Link to="/insights" onClick={() => window.scrollTo(0, 0)} className="hover:text-sky-600 transition-colors">
                    インサイト
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4 mx-2 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li>
                  <span className="text-slate-900 font-semibold">{currentInsight.title}</span>
                </li>
              </ol>
            </motion.nav>

            {/* 标题区域 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold text-sky-600 bg-sky-100 rounded-full">
                  {currentInsight.categoryJa}
                </span>
                <span className="text-sm text-slate-500">
                  {new Date(currentInsight.date).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {currentInsight.title}
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full"></div>
            </motion.div>

            {/* 作者信息卡片（移动端显示） */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="lg:hidden mb-8 bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 overflow-hidden">
                  {author.image ? (
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    author.name.charAt(0)
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 text-lg">{author.name}</h4>
                  <p className="text-sm text-slate-600 mt-0.5">{author.roleJa || author.role}</p>
                </div>
              </div>
            </motion.div>

            {/* 文章内容 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="prose prose-slate max-w-none mb-12"
            >
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-slate-200">
                <div className="text-lg leading-relaxed text-slate-700 whitespace-pre-line">
                  {currentInsight.content || currentInsight.excerpt}
                </div>
              </div>
            </motion.div>

            {/* 标签 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-2">
                {currentInsight.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 右侧侧边栏 (30%) - Sticky */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-8 space-y-6">
              {/* 作者信息 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                  執筆者
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 overflow-hidden shadow-lg">
                    {author.image ? (
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      author.name.charAt(0)
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-lg">{author.name}</h4>
                    <p className="text-sm text-slate-600 mt-1">{author.roleJa || author.role}</p>
                    <p className="text-xs text-slate-500 mt-3 italic leading-relaxed">
                      "{author.motto}"
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {author.specialty.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="mt-4 w-full px-4 py-2 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors text-sm"
                    >
                      このエキスパートに相談する
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* 相关文章 */}
              {relatedInsights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                >
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    関連記事
                  </h3>
                  <div className="space-y-4">
                    {relatedInsights.map((insight, index) => (
                      <Link
                        key={insight.id}
                        to={`/insights/${insight.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                            <div className="text-xl">📰</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-xs font-semibold text-sky-600">
                                {insight.categoryJa}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-sky-600 transition-colors mb-1">
                              {insight.title}
                            </h4>
                            <p className="text-xs text-slate-500">
                              {new Date(insight.date).toLocaleDateString('ja-JP')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/insights"
                    onClick={() => window.scrollTo(0, 0)}
                    className="block mt-4 text-center text-sm font-semibold text-sky-600 hover:text-sky-700"
                  >
                    すべての記事を見る →
                  </Link>
                </motion.div>
              )}

              {/* 快速通道 - 免费诊断预约 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-sky-500 via-sky-600 to-emerald-600 rounded-xl p-6 text-white shadow-lg"
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">💬</div>
                  <h3 className="font-bold text-lg mb-2">無料診断</h3>
                  <p className="text-sm text-sky-50 leading-relaxed">
                    30分間の無料オンライン診断<br />
                    専門家がご対応いたします。
                  </p>
                </div>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="block w-full text-center px-4 py-3 bg-white text-sky-600 rounded-lg font-bold hover:bg-slate-50 transition-all shadow-md hover:shadow-xl"
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
        presetService={getServiceTypeByAuthor(author.id)}
      />
    </div>
  );
}
