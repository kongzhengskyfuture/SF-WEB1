'use client';

import { motion } from 'framer-motion';
import { Shield, FileText } from 'lucide-react';
import { companyInfo } from '../data/siteContent';

/**
 * Privacy - プライバシーポリシー页面
 * 隐私政策内容
 */
export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-slate-600">
            最終更新日: 2024年1月15日
          </p>
        </motion.div>

        {/* 隐私政策内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg p-8 md:p-10 border border-slate-200"
        >
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                1. 個人情報の取り扱いについて
              </h2>
              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  {companyInfo.name}（以下「当社」）は、お客様の個人情報を適切に保護し、管理することを重要な責務と考えております。
                  本プライバシーポリシーは、当社がどのように個人情報を収集、使用、保護するかを説明するものです。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. 収集する個人情報</h2>
              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>当社は、以下の個人情報を収集する場合があります：</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>氏名、会社名、部署名</li>
                  <li>メールアドレス、電話番号</li>
                  <li>お問い合わせ内容</li>
                  <li>Webサイトのアクセスログ（IPアドレス、Cookie等）</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. 個人情報の利用目的</h2>
              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>当社は、収集した個人情報を以下の目的で利用します：</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>サービス提供、サポート対応</li>
                  <li>お問い合わせへの対応</li>
                  <li>サービス改善・開発</li>
                  <li>重要な通知の送付</li>
                  <li>マーケティング活動（同意いただいた場合）</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. 個人情報の第三者提供</h2>
              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                  ただし、サービス提供のため、信頼できる業務委託先に個人情報を預託する場合があります。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. 個人情報の安全管理</h2>
              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  当社は、個人情報の漏洩、滅失、毀損を防ぐため、適切な安全管理措置を講じています。
                  ISO 27001（情報セキュリティマネジメントシステム）認証を取得し、継続的な情報セキュリティ管理を行っています。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Cookie の使用</h2>
              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  当社のWebサイトでは、サービスの向上のためにCookieを使用しています。
                  Cookieの使用を希望しない場合は、ブラウザの設定でCookieを無効にすることができます。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. 個人情報の開示・訂正・削除</h2>
              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  お客様は、当社が保有する個人情報について、開示・訂正・削除を請求することができます。
                  ご請求は、下記の連絡先までご連絡ください。
                </p>
                <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-2">個人情報お問い合わせ窓口</p>
                  <p className="text-sm text-slate-700">
                    {companyInfo.address.headquarters.email}<br />
                    {companyInfo.address.headquarters.phone}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">8. プライバシーポリシーの変更</h2>
              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  当社は、法令の変更やサービス内容の変更に伴い、本プライバシーポリシーを変更する場合があります。
                  変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
