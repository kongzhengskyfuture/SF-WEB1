'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, ShieldCheck, CheckCircle2, FileText, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * RecruitForm - 招聘表单组件
 * 功能：文件上传、简历解析预览、确认流程
 */
export default function RecruitForm({ positionId = null, onClose = null, onStepChange = null }) {
  const [currentStep, setCurrentStep] = useState('input'); // 'input' | 'confirm' | 'success'
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isParsing, setIsParsing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false); // 点击确认时的AI解析状态
  const [parsedData, setParsedData] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: positionId || '',
    notes: ''
  });

  // 处理文件上传
  const handleFileSelect = (file) => {
    // 严格限制文件格式
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = file.name.toLowerCase();
    const fileExtension = fileName.substring(fileName.lastIndexOf('.'));
    
    if (file && (allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension))) {
      setUploadedFile(file);
      // 上传后不立即解析，等用户点击确认时再解析
    } else {
      alert('PDF、Word形式（.pdf, .doc, .docx）のみアップロード可能です。');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFileSelect(file);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setParsedData(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // 验证表单
  const validateForm = () => {
    return formData.name && formData.email && formData.phone && formData.position && privacyAgreed;
  };

  // 处理确认按钮点击 - 显示AI解析动画
  const handleConfirmClick = () => {
    if (!validateForm()) return;
    
    // 如果有上传文件，显示AI解析动画
    if (uploadedFile && !parsedData) {
      setIsAnalyzing(true);
      setIsParsing(true);
      
      // 延迟2秒后进入确认页面
      setTimeout(() => {
        // 模拟解析结果
        setParsedData({
          education: '東京大学 工学部 情報工学科',
          experience: '5年',
          skills: ['Dynamics 365', 'C#', 'SQL'],
          languages: ['日本語（ネイティブ）', '英語（ビジネスレベル）']
        });
        setIsParsing(false);
        setIsAnalyzing(false);
        setCurrentStep('confirm');
        if (onStepChange) onStepChange('confirm');
      }, 2000);
    } else {
      // 没有文件，直接进入确认页面
      setCurrentStep('confirm');
      if (onStepChange) onStepChange('confirm');
    }
  };

  // 生成提交编号
  const generateSubmissionId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `REC-${timestamp.toString().slice(-8)}-${random.toString().padStart(3, '0')}`;
  };

  // 提交表单
  const handleSubmit = () => {
    const id = generateSubmissionId();
    setFormData(prev => ({ ...prev, submissionId: id }));
    setCurrentStep('success');
    if (onStepChange) onStepChange('success');
    // 5秒后自动关闭（如果是Modal模式）
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 5000);
    }
  };

  // 职位选项
  const positionOptions = [
    { id: 'recruit-001', name: 'D365コンサルタント' },
    { id: 'recruit-002', name: 'ソフトウェアエンジニア' },
    { id: 'recruit-003', name: 'AI ソリューションアーキテクト' }
  ];

  // 进度条计算
  const getProgress = () => {
    if (currentStep === 'input') return 33;
    if (currentStep === 'confirm') return 66;
    if (currentStep === 'success') return 100;
    return 0;
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* 进度条组件 */}
      <div className="h-1 bg-slate-200">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${getProgress()}%` }}
          transition={{ duration: 0.3 }}
          className="h-full bg-sky-900"
        />
      </div>

      {/* AI解析加载覆盖层 */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 md:p-12 max-w-md mx-4 text-center shadow-2xl"
            >
              <div className="w-16 h-16 border-4 border-sky-900 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AIが履歴書を解析中...</h3>
              <p className="text-sm text-slate-600">しばらくお待ちください</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentStep === 'input' && (
          <motion.form
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={(e) => e.preventDefault()}
            className="p-8 md:p-10"
          >
            {/* 隐私保护提示框 */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-lg"
            >
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" strokeWidth={1.25} />
                <div className="flex-1">
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    ご入力いただいた個人情報は、採用選考の範囲内でのみ利用いたします。送信前に
                    <Link to="/privacy" className="text-slate-900 underline hover:text-slate-700" target="_blank">
                      個人情報保護方針
                    </Link>
                    をご確認ください。
                  </p>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      className="w-4 h-4 text-slate-600 border-slate-300 rounded focus:ring-slate-400"
                      required
                    />
                    <span className="text-sm font-medium text-slate-900">
                      個人情報保護方針に同意する <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>
              </div>
            </motion.div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">応募フォーム</h2>

            <div className="space-y-6">
              {/* 应聘职位 */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  応募職位 <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all bg-white"
                  required
                >
                  <option value="">選択してください</option>
                  {positionOptions.map(pos => (
                    <option key={pos.id} value={pos.id}>{pos.name}</option>
                  ))}
                </select>
              </div>

              {/* 姓名 */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  required
                />
              </div>

              {/* 邮箱 */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  required
                />
              </div>

              {/* 电话 */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  required
                />
              </div>

              {/* 文件上传区 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    履歴書・職務経歴書
                  </label>
                  {!uploadedFile && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center space-x-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.25} />
                      <span className="text-xs font-medium text-slate-500">AI Powered</span>
                    </motion.div>
                  )}
                </div>
                {!uploadedFile && (
                  <p className="text-xs text-slate-500 mb-3">
                    履歴書をアップロードすると、AIが自動的に主要情報を抽出します
                  </p>
                )}
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all relative ${
                    isDragging
                      ? 'border-slate-400 bg-slate-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {!uploadedFile && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50 to-transparent rounded-lg pointer-events-none"
                    />
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                  {!uploadedFile ? (
                    <>
                      <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-3 relative z-10" strokeWidth={1.25} />
                      <p className="text-sm text-slate-600 mb-2 relative z-10">
                        ファイルをドラッグ&ドロップするか、
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-slate-900 underline hover:text-slate-700"
                        >
                          クリックして選択
                        </button>
                      </p>
                      <p className="text-xs text-slate-500 relative z-10">PDF、Word形式（最大10MB）</p>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-slate-600" strokeWidth={1.25} />
                          <div className="text-left">
                            <div className="text-sm font-medium text-slate-900">{uploadedFile.name}</div>
                            <div className="text-xs text-slate-500">
                              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1 hover:bg-slate-200 rounded transition-colors"
                        >
                          <X className="w-4 h-4 text-slate-600" strokeWidth={1.25} />
                        </button>
                      </div>

                      {/* 解析中 */}
                      {isParsing && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-sm text-slate-700">AI 正在提取关键信息...</span>
                          </div>
                        </motion.div>
                      )}

                      {/* 解析结果预览 */}
                      {parsedData && !isParsing && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                        >
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                            解析された情報
                          </div>
                          <div className="space-y-2 text-sm text-slate-700">
                            <div>卒業院校: {parsedData.education}</div>
                            <div>工作年限: {parsedData.experience}</div>
                            <div>核心技能: {parsedData.skills.join(', ')}</div>
                            <div>言語能力: {parsedData.languages.join(', ')}</div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* 自由备注 */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  自由記入欄
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all resize-none"
                  placeholder="その他、ご質問やご希望がございましたらご記入ください"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={handleConfirmClick}
                disabled={!validateForm()}
                className="px-8 py-3 bg-sky-900 text-white rounded-lg font-semibold hover:bg-sky-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                確認画面へ →
              </button>
            </div>
          </motion.form>
        )}

        {currentStep === 'confirm' && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-8 md:p-10"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  入力内容の確認
                </h2>
                <p className="text-slate-600">
                  送信前に内容をご確認ください
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCurrentStep('input');
                  if (onStepChange) onStepChange('input');
                }}
                className="text-sm text-slate-500 hover:text-slate-700"
              >
                戻る
              </button>
            </div>

            {/* 确认内容预览 */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6 space-y-4 mb-6">
              <div className="pb-4 border-b border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  応募職位
                </div>
                <div className="text-sm text-slate-900">
                  {positionOptions.find(p => p.id === formData.position)?.name || '-'}
                </div>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  基本情報
                </div>
                <div className="space-y-1 text-sm text-slate-700">
                  <div>お名前: {formData.name || '-'}</div>
                  <div>メールアドレス: {formData.email || '-'}</div>
                  <div>電話番号: {formData.phone || '-'}</div>
                </div>
              </div>

              {uploadedFile && (
                <div className="pb-4 border-b border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    添付ファイル
                  </div>
                  <div className="text-sm text-slate-700">{uploadedFile.name}</div>
                </div>
              )}

              {/* AI解析结果模块 */}
              {parsedData && (
                <div className="pb-4 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      AI解析結果
                    </div>
                    <span className="text-xs text-slate-500 italic">AIによる自動抽出結果</span>
                  </div>
                  <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-semibold text-slate-600 mb-1">経験年数</div>
                        <div className="text-sm font-medium text-slate-900">{parsedData.experience}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-600 mb-1">卒業院校</div>
                        <div className="text-sm font-medium text-slate-900">{parsedData.education}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-600 mb-2">核心技能</div>
                      <div className="flex flex-wrap gap-2">
                        {parsedData.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700 shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-600 mb-2">言語能力</div>
                      <div className="flex flex-wrap gap-2">
                        {parsedData.languages.map((lang, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700 shadow-sm"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {formData.notes && (
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    自由記入欄
                  </div>
                  <div className="text-sm text-slate-700 whitespace-pre-wrap">{formData.notes}</div>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => {
                  setCurrentStep(1);
                  if (onStepChange) onStepChange(1);
                }}
                className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                修正する
              </button>
              <button
                type="button"
                onClick={() => {
                  handleSubmit();
                  if (onStepChange) onStepChange(3);
                }}
                className="px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
              >
                この内容で送信する
              </button>
            </div>
          </motion.div>
        )}

        {currentStep === 'success' && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-8 md:p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
              className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={1.25} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-slate-900 mb-4"
            >
              応募ありがとうございます
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 mb-4"
            >
              ご応募いただいた内容を確認いたしました。
            </motion.p>

            {formData.submissionId && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <div className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                    応募番号
                  </div>
                  <div className="text-sm font-mono font-bold text-slate-900">
                    {formData.submissionId}
                  </div>
                </div>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-slate-500 mb-6"
            >
              担当者より1-2営業日以内にご連絡いたします。
            </motion.p>

            {onClose && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-slate-400 mt-6"
              >
                このウィンドウは5秒後に自動的に閉じます
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
