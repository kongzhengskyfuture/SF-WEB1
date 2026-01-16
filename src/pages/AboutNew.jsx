'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '../data/siteContent';
import ContactModal from '../components/ContactModal';

/**
 * AboutNew - 公司与成员页面
 * 功能：公司介绍、成员展示、交互式成员卡片
 */
export default function AboutNew() {
  const [hoveredMemberId, setHoveredMemberId] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedMemberService, setSelectedMemberService] = useState(null);

  // 根据成员角色确定服务类型
  const getServiceTypeByMember = (memberId) => {
    const memberServiceMap = {
      'tm-001': null, // CEO/CTO
      'tm-002': 'ai', // AI ソリューションアーキテクト
      'tm-003': 'd365', // D365 コンサルタント
      'tm-004': 'dev' // フロントエンド開発リーダー
    };
    return memberServiceMap[memberId] || null;
  };

  // 处理成员咨询按钮点击
  const handleMemberConsultation = (memberId) => {
    const serviceType = getServiceTypeByMember(memberId);
    setSelectedMemberService(serviceType);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* 公司介绍部分 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              会社概要
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">ミッション</h2>
              <p className="text-slate-700 leading-relaxed">
                企業のデジタル変革を加速し、Microsoft Dynamics 365とAI技術の力を活用して、お客様のビジネス成長を支援します。10年以上のエンタープライズソリューション開発経験と、100社以上の大企業へのD365導入実績を基に、最適なソリューションを提供いたします。
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">ビジョン</h2>
              <p className="text-slate-700 leading-relaxed">
                AIとクラウド技術を活用した次世代のデジタルソリューションを提供し、日本企業の競争力を強化します。生成AI、チャットボット、知識ベース統合を通じて、顧客対応の自動化と業務効率化を実現し、持続可能な成長をサポートします。
              </p>
            </motion.div>
          </div>

          {/* 核心优势 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-xl p-8 border border-sky-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              私たちの強み
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-slate-900 mb-2">D365 実績</h3>
                <p className="text-sm text-slate-600">
                  100社以上の大企業にD365導入を支援
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-bold text-slate-900 mb-2">AI 専門性</h3>
                <p className="text-sm text-slate-600">
                  Azure OpenAI、LangChainの実装経験が豊富
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-bold text-slate-900 mb-2">モダン開発</h3>
                <p className="text-sm text-slate-600">
                  React、Next.js、TypeScriptによる高速開発
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 团队成员部分 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              経験豊富なエキスパートがお客様をサポートします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => {
              const isHovered = hoveredMemberId === member.id;
              
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  onMouseEnter={() => setHoveredMemberId(member.id)}
                  onMouseLeave={() => setHoveredMemberId(null)}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-sky-300 transition-all relative overflow-hidden"
                >
                  {/* 悬停时的背景效果 */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-emerald-50/50"
                    />
                  )}

                  <div className="relative z-10">
                    {/* 头像 */}
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center text-white text-3xl font-bold overflow-hidden shadow-lg">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            member.name.charAt(0)
                          )}
                        </div>
                        {isHovered && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute inset-0 rounded-full border-4 border-sky-400"
                          />
                        )}
                      </div>
                    </div>

                    {/* 基本信息 */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        {member.roleJa || member.role}
                      </p>
                      
                      {/* 悬停时显示座右铭 */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-slate-500 italic mb-3"
                          >
                            "{member.motto}"
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 核心技能标签（悬停时显示） */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-4"
                        >
                          <div className="flex flex-wrap gap-2 justify-center">
                            {member.specialty.slice(0, 4).map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-md"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* 咨询按钮 */}
                    <button
                      onClick={() => handleMemberConsultation(member.id)}
                      className="w-full px-4 py-2.5 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors text-sm shadow-md hover:shadow-lg"
                    >
                      このエキスパートに相談する
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setSelectedMemberService(null);
        }}
        presetService={selectedMemberService}
      />
    </div>
  );
}
