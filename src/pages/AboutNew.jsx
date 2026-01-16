'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { teamMembers, companyInfo, companyTimeline } from '../data/siteContent';
import ContactModal from '../components/ContactModal';
import CompanyTimeline from '../components/CompanyTimeline';

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
    <div className="min-h-screen bg-slate-50 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 公司基本信息 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              会社概要
            </h1>
            <div className="w-20 h-0.5 bg-slate-300 rounded-full mx-auto"></div>
          </div>

          {/* 公司基本信息表格 */}
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden mb-8">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">企業基本情報</h2>
            </div>
            <div className="p-6">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-700 bg-slate-50 w-1/3">会社名</td>
                    <td className="py-3 px-4 text-slate-900">{companyInfo.name}</td>
                    <td className="py-3 px-4 text-xs text-slate-500">{companyInfo.nameEn}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-700 bg-slate-50">代表者</td>
                    <td colSpan={2} className="py-3 px-4 text-slate-900">{companyInfo.legalInfo.representativeName}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-700 bg-slate-50">資本金</td>
                    <td className="py-3 px-4 text-slate-900">{companyInfo.legalInfo.capital}</td>
                    <td className="py-3 px-4 text-xs text-slate-500">設立: {companyInfo.legalInfo.establishedDate}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-700 bg-slate-50">登録番号</td>
                    <td colSpan={2} className="py-3 px-4 text-slate-900">{companyInfo.legalInfo.registrationNumber}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-700 bg-slate-50">本社所在地</td>
                    <td colSpan={2} className="py-3 px-4">
                      <span className="text-slate-900 leading-relaxed">{companyInfo.address.headquarters.address}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-700 bg-slate-50">連絡先</td>
                    <td colSpan={2} className="py-3 px-4">
                      <div className="space-y-2 text-slate-900 leading-relaxed">
                        <div>{companyInfo.address.headquarters.phone}</div>
                        <div>{companyInfo.address.headquarters.email}</div>
                        <div className="text-xs text-slate-500">{companyInfo.address.headquarters.businessHours}</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-700 bg-slate-50">事業内容</td>
                    <td colSpan={2} className="py-3 px-4">
                      <ul className="space-y-1">
                        {companyInfo.legalInfo.businessLines.map((line, idx) => (
                          <li key={idx} className="text-slate-900 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-slate-400 before:rounded-full">
                            {line}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 业务实绩统计 - 图标矩阵 */}
          {companyInfo.businessAchievements && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-8"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-4">業務実績サマリー</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { label: '累計クライアント数', value: `${companyInfo.businessAchievements.totalClients}+社` },
                  { label: '累計プロジェクト', value: `${companyInfo.businessAchievements.totalProjects}+件` },
                  { label: 'D365導入実績', value: `${companyInfo.businessAchievements.d365Implementations}社` },
                  { label: '顧客満足度', value: companyInfo.businessAchievements.customerSatisfaction },
                  { label: '業界経験年数', value: `${companyInfo.businessAchievements.yearsOfExperience}年` }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200 text-center hover:border-slate-300 transition-colors">
                    <div className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-xs text-slate-600 leading-relaxed letter-spacing-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 详细业务实绩 - 按服务分类 */}
          {companyInfo.detailedAchievements && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                サービス別実績詳細
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {companyInfo.detailedAchievements.map((achievement, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-5 border border-slate-200 hover:border-sky-300 transition-colors">
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-1">{achievement.category}</h3>
                      <p className="text-xs text-slate-500">累計 {achievement.projects} プロジェクト</p>
                    </div>
                    
                    {/* 关键指标 */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2">
                        {achievement.keyMetrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex-1 min-w-[120px] bg-slate-50 rounded p-2 border border-slate-200">
                            <div className="text-xs text-slate-500 mb-1">{metric.label}</div>
                            <div className="text-sm font-bold text-slate-900">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 对应行业 */}
                    <div className="mb-3">
                      <div className="text-xs text-slate-500 mb-1">対応業種</div>
                      <div className="flex flex-wrap gap-1.5">
                        {achievement.industries.map((industry, iIdx) => (
                          <span key={iIdx} className="text-xs px-2 py-0.5 bg-sky-50 text-sky-700 border border-sky-200 rounded">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 主要客户 */}
                    {achievement.notableClients && (
                      <div>
                        <div className="text-xs text-slate-500 mb-1">主要取引先</div>
                        <div className="space-y-1">
                          {achievement.notableClients.map((client, cIdx) => (
                            <div key={cIdx} className="text-xs text-slate-700 pl-3 relative before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1 before:h-1 before:bg-slate-400 before:rounded-full">
                              {client}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 代表挨拶 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="ceo-message"
            className="bg-white rounded-lg p-8 border border-slate-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {companyInfo.ceoMessage.title}
            </h2>
            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-4">
              {companyInfo.ceoMessage.content}
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900">{companyInfo.ceoMessage.ceoName}</p>
              <p className="text-xs text-slate-500 mt-1">{companyInfo.ceoMessage.date}</p>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 border border-slate-200"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">ミッション</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                企業のデジタル変革を加速し、Microsoft Dynamics 365とAI技術の力を活用して、お客様のビジネス成長を支援します。10年以上のエンタープライズソリューション開発経験と、100社以上の大企業へのD365導入実績を基に、最適なソリューションを提供いたします。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-6 border border-slate-200"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">ビジョン</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                AIとクラウド技術を活用した次世代のデジタルソリューションを提供し、日本企業の競争力を強化します。生成AI、チャットボット、知識ベース統合を通じて、顧客対応の自動化と業務効率化を実現し、持続可能な成長をサポートします。
              </p>
            </motion.div>
          </div>

          {/* 核心优势 - 紧凑网格 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              私たちの強み
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: 'D365 実績', desc: '100社以上の大企業に導入支援' },
                { title: 'AI 専門性', desc: 'Azure OpenAI、LangChain実装経験' },
                { title: 'モダン開発', desc: 'React、Next.js、TypeScript' },
                { title: 'セキュリティ', desc: 'ISO 27001認証取得' },
                { title: '迅速導入', desc: '導入期間30%短縮実績' },
                { title: '実績豊富', desc: '50+プロジェクト実績' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-5 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 主要取引先 */}
          {companyInfo.mainPartners && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                主要取引先
              </h2>
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="grid md:grid-cols-2 gap-4">
                  {companyInfo.mainPartners.map((partner, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{partner.name}</h4>
                        <p className="text-xs text-slate-500 mb-1">{partner.category}</p>
                        {partner.description && (
                          <p className="text-xs text-slate-600">{partner.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.section>

        {/* 沿革・実績 Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          id="timeline"
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              沿革・実績
            </h2>
            <p className="text-sm text-slate-600">
              2014年の創業から現在までの主要なマイルストーン
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-8 border border-slate-200">
            <CompanyTimeline timeline={companyTimeline} />
          </div>
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
                      className="absolute inset-0 bg-slate-50/30"
                    />
                  )}

                  <div className="relative z-10">
                    {/* 头像 */}
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-600 text-2xl font-bold overflow-hidden">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
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
                      className="w-full px-4 py-2.5 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm shadow-md hover:shadow-lg"
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
