'use client';

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, FileText, Briefcase } from 'lucide-react';
import { companyInfo } from '../data/siteContent';

/**
 * Footer - 网站页脚组件
 * 包含公司信息、链接、资质认证
 */
export default function Footer() {
  const footerLinks = {
    services: [
      { label: 'Dynamics 365 導入', to: '/services/d365' },
      { label: 'uTRON ソフトウェア開発', to: '/services/utron' },
      { label: 'ITコンサルティング', to: '/services/consulting' },
      { label: 'システムマイグレーション', to: '/services/migration' }
    ],
    company: [
      { label: '会社概要', to: '/team' },
      { label: '代表挨拶', to: '/team#ceo-message' },
      { label: '沿革・実績', to: '/team#timeline' },
      { label: '採用情報', to: '/recruit' }
    ],
    resources: [
      { label: 'インサイト', to: '/insights' },
      { label: '事例紹介', to: '/cases' },
      { label: '技術資料', to: '/resources' },
      { label: 'よくある質問', to: '/faq' }
    ],
    legal: [
      { label: 'プライバシーポリシー', to: '/privacy' },
      { label: '利用規約', to: '/terms' },
      { label: '特定商取引法に基づく表記', to: '/legal' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* 公司信息 */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4">
              {companyInfo.name}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-slate-400">{companyInfo.address.headquarters.address}</span>
              </div>
              <div>
                <span className="text-slate-400">{companyInfo.address.headquarters.phone}</span>
              </div>
              <div>
                <span>{companyInfo.address.headquarters.email}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-500">
                  代表者: {companyInfo.legalInfo.representativeName}
                </p>
                <p className="text-xs text-slate-500">
                  資本金: {companyInfo.legalInfo.capital}
                </p>
                <p className="text-xs text-slate-500">
                  設立: {companyInfo.legalInfo.establishedDate}
                </p>
              </div>
            </div>
          </div>

          {/* 服务链接 */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 公司信息链接 */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 法律信息链接 */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">その他</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-sky-400 transition-colors flex items-center"
                  >
                    {link.to === '/recruit' && <Briefcase className="w-3 h-3 mr-1" strokeWidth={1.5} />}
                    {link.to === '/privacy' && <FileText className="w-3 h-3 mr-1" strokeWidth={1.5} />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 资质认证 */}
        <div className="pt-8 border-t border-slate-800">
          <h4 className="text-white font-semibold text-sm mb-4">認定・認証</h4>
          <div className="flex flex-wrap gap-4">
            {companyInfo.certifications.map((cert, idx) => (
              <div key={idx} className="text-xs">
                <span className="text-sky-400 font-semibold">{cert.name}</span>
                <span className="text-slate-500 ml-2">{cert.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
