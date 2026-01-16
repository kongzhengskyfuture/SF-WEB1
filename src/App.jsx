import { Routes, Route, useParams } from 'react-router-dom'
import NavbarNew from './components/NavbarNew'
import ScrollToTop from './components/ScrollToTop'
import ServiceDetail from './components/ServiceDetail'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Insights from './pages/Insights'
import InsightDetail from './pages/InsightDetail'
import AboutNew from './pages/AboutNew'
import { getServiceById } from './data/siteContent'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <NavbarNew />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:insightId" element={<InsightDetail />} />
          <Route path="/team" element={<AboutNew />} />
          <Route path="/services/:serviceId" element={<ServiceDetailWrapper />} />
        </Routes>
      </main>
    </div>
  )
}

// ServiceDetail 包装组件，用于从路由参数获取 serviceId
function ServiceDetailWrapper() {
  const { serviceId } = useParams();
  
  // 尝试从 coreServices 获取服务数据
  const serviceData = getServiceById(serviceId);
  
  // 如果找到服务数据，使用它；否则使用默认配置
  const config = serviceData ? {
    title: serviceData.name,
    subtitle: serviceData.nameEn || serviceData.nameJa,
    description: serviceData.fullDescription || serviceData.description
  } : {
    // 默认配置（向后兼容）
    'd365': {
      title: 'Dynamics 365 導入・カスタマイズ',
      subtitle: 'Dynamics 365 導入',
      description: 'Microsoft Dynamics 365を活用した包括的なビジネスソリューション。営業プロセスの自動化から顧客関係管理まで、企業のデジタル変革を徹底的にサポートします。'
    },
    'utron': {
      title: '自動化分析装置ソフトウェア開発 (uTRON)',
      subtitle: 'uTRON ソフトウェア開発',
      description: 'uTRONは、高精度な分析装置を制御・管理するための統合ソフトウェアプラットフォームです。リアルタイムデータ処理、自動化ワークフロー、高度な分析機能を提供します。'
    },
    'consulting': {
      title: 'ITコンサルティング・システムマイグレーション',
      subtitle: 'ITコンサルティング・システムマイグレーション',
      description: 'レガシーシステムからモダンなクラウドベースシステムへの移行をサポート。ダウンタイムを最小限に抑えながら、データの完全性を保証した移行を実現します。'
    },
    'migration': {
      title: 'システムマイグレーション',
      subtitle: 'システムマイグレーション',
      description: '既存システムから新システムへの安全で確実な移行。レガシーシステムからモダンなクラウドベースシステムへの移行をサポート。'
    },
    'ai': {
      title: 'AI ソリューション',
      subtitle: 'AI ソリューション',
      description: '生成AI・チャットボット・知識ベース統合'
    },
    'dev': {
      title: 'デジタルポータル構築',
      subtitle: 'モダンなウェブサイト・CMS・統合開発',
      description: '企業のデジタル変革を支援する、最新技術を活用したウェブサイト構築サービスです。\n\n当社は、React、Next.js、TypeScript などのモダンな技術スタックを使用して、高性能でスケーラブルなウェブアプリケーションを構築します。'
    }
  }[serviceId] || {
    title: 'サービス',
    subtitle: 'Service',
    description: 'デジタル変革を支援する包括的なソリューション'
  };
  
  return (
    <ServiceDetail
      serviceId={serviceId}
      title={config.title}
      subtitle={config.subtitle}
      description={config.description}
      breadcrumbs={[
        { label: 'ホーム', href: '/' },
        { label: 'サービス', href: '/services' },
        { label: config.title, href: '#' }
      ]}
    />
  );
}

export default App
