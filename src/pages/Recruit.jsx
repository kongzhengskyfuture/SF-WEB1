'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/siteContent';
import RecruitForm from '../components/RecruitForm';
import { Clock, Cpu, TrendingUp } from 'lucide-react';
import { useState } from 'react';

/**
 * Recruit - 採用情報页面
 * 展示招聘职位信息，集成招聘表单
 */
export default function Recruit() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [formStep, setFormStep] = useState('input'); // 'input' | 'confirm' | 'success'

  return (
    <motion.div 
      className="min-h-screen transition-colors duration-500"
      animate={{ backgroundColor: showForm ? '#ffffff' : '#f8fafc' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 分步指示器 */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full transition-colors ${formStep !== 'input' ? 'bg-slate-900' : 'bg-slate-400'}`}></div>
                <span className={`text-xs font-medium transition-colors ${formStep !== 'input' ? 'text-slate-900' : 'text-slate-500'}`}>職位選択</span>
              </div>
              <div className={`w-12 h-px transition-colors ${formStep === 'confirm' || formStep === 'success' ? 'bg-slate-900' : 'bg-slate-300'}`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full transition-colors ${formStep === 'confirm' || formStep === 'success' ? 'bg-slate-900' : 'bg-slate-300'}`}></div>
                <span className={`text-xs font-medium transition-colors ${formStep === 'confirm' || formStep === 'success' ? 'text-slate-900' : 'text-slate-400'}`}>応募情報入力</span>
              </div>
              <div className={`w-12 h-px transition-colors ${formStep === 'success' ? 'bg-slate-900' : 'bg-slate-300'}`}></div>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full transition-colors ${formStep === 'success' ? 'bg-slate-900' : 'bg-slate-300'}`}></div>
                <span className={`text-xs font-medium transition-colors ${formStep === 'success' ? 'text-slate-900' : 'text-slate-400'}`}>内容確認</span>
              </div>
            </div>
            <div className="h-px bg-slate-200">
              <motion.div
                initial={{ width: formStep === 'input' ? '33%' : formStep === 'confirm' ? '66%' : '100%' }}
                animate={{ width: formStep === 'input' ? '33%' : formStep === 'confirm' ? '66%' : '100%' }}
                transition={{ duration: 0.3 }}
                className="h-full bg-slate-900"
              />
            </div>
          </motion.div>
        )}

        {/* Hero 区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pb-8 border-b border-slate-200"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            未来を、共に創る。
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            デジタル変革の最前線で、私たちと一緒に未来を創造しませんか？
          </p>
        </motion.div>

        {/* Core Benefits 区块 */}
        {!showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
                <Clock className="w-6 h-6 text-slate-600" strokeWidth={1.25} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">柔軟な働き方</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                リモートワーク・フレックスタイム制度を活用した柔軟な働き方を実現
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
                <Cpu className="w-6 h-6 text-slate-600" strokeWidth={1.25} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">最先端技術</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Microsoft Dynamics 365、AI、クラウド技術など最新技術に触れる機会
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
                <TrendingUp className="w-6 h-6 text-slate-600" strokeWidth={1.25} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">キャリア成長</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                資格取得支援・研修制度を通じて、継続的なスキルアップをサポート
              </p>
            </div>
          </motion.div>
        )}

        {!showForm ? (
          <>
            {/* 招聘职位列表 - 极简风格 */}
            <div className="space-y-0 mb-12">
              {companyInfo.recruitInfo.positions.map((position, idx) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="py-5 border-b border-slate-200 hover:bg-white hover:shadow-md hover:border-sky-200 transition-all group rounded-lg px-4 -mx-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:underline transition-all tracking-tight">
                        {position.title}
                      </h2>
                      <div className="flex items-center space-x-3 text-xs text-slate-500 mb-2">
                        <span>{position.department}</span>
                        <span>|</span>
                        <span>{position.location}</span>
                        <span>|</span>
                        <span>{position.type}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {position.description}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedPosition(position.id);
                        setShowForm(true);
                      }}
                      className="ml-6 px-6 h-10 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm flex items-center justify-center antialiased flex-shrink-0"
                      style={{ lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      応募する
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6">
                <button
                  onClick={() => {
                    setShowForm(false);
                    setSelectedPosition(null);
                    setFormStep(1);
                  }}
                  className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all flex items-center space-x-2"
                >
                  <span>←</span>
                  <span>職位一覧に戻る</span>
                </button>
              </div>
              <RecruitForm 
                positionId={selectedPosition} 
                onClose={() => {
                  setShowForm(false);
                  setSelectedPosition(null);
                  setFormStep('input');
                }}
                onStepChange={(step) => setFormStep(step)}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}
