/**
 * Sky Future 官网统一数据源
 * 数据神经系统 - 全站内容统一管理
 * 
 * @description 此文件包含网站所有静态内容数据，确保组件引用的一致性
 * @note 图标统一使用 lucide-react，不再使用 emoji
 */

// ==================== 定价套餐数据 ====================
export const pricingPackages = [
  {
    id: 'standard',
    name: 'Standard',
    nameJa: 'ライトプラン',
    price: '50万円〜',
    description: 'デザインとレスポンシブUIに特化した、コストパフォーマンスに優れたウェブサイト構築パッケージ。',
    coreValue: '快速建立品牌形象，极致响应式体验。',
    targetScenarios: '初创企业、个人工作室、简单展示型官网。',
    focus: '设计与响应式 UI',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    deliveryPeriod: '2-4週間',
    caseStudies: [
      {
        title: 'スタートアップ企業のブランドサイト',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
        description: 'モダンなデザインとレスポンシブ対応で、ブランドイメージを向上'
      }
    ],
    features: [
      'レスポンシブデザイン対応（PC・タブレット・スマホ）',
      'SEO基礎設定（メタタグ、サイトマップ、構造化データ）',
      '標準ページ5ページ（トップ、会社概要、サービス、お問い合わせ、プライバシーポリシー）',
      '基本的なお問い合わせフォーム',
      'Google Analytics 連携',
      '基本的なセキュリティ対策（SSL証明書）',
      '1年間の技術サポート'
    ],
    target: [
      '小規模企業',
      '個人事業主',
      '既存サイトのリニューアルを検討している企業',
      '初めてウェブサイトを構築する企業'
    ],
    period: '2-4週間'
  },
  {
    id: 'business',
    name: 'Business',
    nameJa: 'スタンダードプラン',
    price: '120万円〜',
    description: 'SEO、インタラクティブ機能、CMS統合に特化した、マーケティング効果を最大化するウェブサイトパッケージ。',
    coreValue: '深度集成业务逻辑，包含预约、会员或数据接口。',
    targetScenarios: '中型企业、需要获客转化的营销型网站。',
    focus: 'SEO、交互功能与 CMS 集成',
    techStack: ['Next.js', 'Headless CMS', 'TypeScript', 'SEO Tools', 'Analytics'],
    deliveryPeriod: '1-2ヶ月',
    caseStudies: [
      {
        title: '中堅企業のマーケティングサイト',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        description: 'CMS統合とSEO最適化により、コンバージョン率を40%向上'
      }
    ],
    features: [
      'CMS動的コンテンツ管理システム（ニュース/ブログ/チーム紹介）',
      '高度なアニメーション効果（Framer Motion等）',
      '多段階インテリジェントフォーム（バリデーション、自動保存）',
      '10ページ以上のカスタムページ',
      '多言語対応（日本語・英語）',
      'ソーシャルメディア統合（SNSシェアボタン、埋め込み）',
      '高度なSEO対策（構造化データ、パンくずリスト、OGP設定）',
      'パフォーマンス最適化（CDN、画像最適化、コード分割）',
      '2年間の技術サポート',
      '月次メンテナンスプラン（オプション）'
    ],
    target: [
      '成長企業',
      'マーケティング重視の企業',
      '定期的なコンテンツ更新が必要な企業',
      'ブランドイメージを向上させたい企業'
    ],
    period: '1-2ヶ月'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    nameJa: 'プレミアムプラン',
    price: '250万円〜',
    description: 'システム統合、高セキュリティ、デジタルトランスフォーメーションに特化した、エンタープライズレベルの統合型ソリューション。',
    coreValue: '高并发、高安全性、与内部 ERP/CRM (如D365) 深度联动。',
    targetScenarios: '大企业内网、复杂交易平台、全球化多语言站点。',
    focus: '系统集成、高安全性与数字化转型',
    techStack: ['Microservices', 'API Gateway', 'D365 Integration', 'Azure Services', 'Security Hardening'],
    deliveryPeriod: '3ヶ月〜（要件により変動）',
    caseStudies: [
      {
        title: '大企業のデジタルポータル',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        description: 'ERP/CRM統合と高セキュリティで、業務効率を大幅に改善'
      }
    ],
    features: [
      'AI Copilot 知識ベース統合（Azure OpenAI、LangChain）',
      'D365 CRM リード自動連携（リアルタイム同期）',
      '会員権限管理システム（ロールベースアクセス制御）',
      'カスタム機能開発（API統合、ワークフロー自動化）',
      '既存システムとのAPI統合（ERP、会計システム等）',
      '高度なセキュリティ対策（WAF、多要素認証、監査ログ）',
      '専任プロジェクトマネージャー',
      '無制限ページ数',
      'ホワイトラベル対応',
      '24/7 監視・サポート',
      'SLA保証（99.9%アップタイム）'
    ],
    target: [
      '大企業',
      '複雑な業務要件を持つ企業',
      '既存システムとの統合が必要な企業',
      '高セキュリティ要件を持つ企業',
      'AI・CRM統合を検討している企業'
    ],
    period: '3ヶ月〜（要件により変動）'
  }
];

// ==================== 团队成员数据 ====================
export const teamMembers = [
  {
    id: 'tm-001',
    name: '田中 健太',
    nameEn: 'Kenta Tanaka',
    role: 'CEO / CTO',
    roleJa: '最高経営責任者 / 最高技術責任者',
    specialty: ['Microsoft Dynamics 365', 'Azure Cloud Services', 'エンタープライズアーキテクチャ', 'システム統合'],
    motto: '技術でビジネスの可能性を最大化する',
    bio: '10年以上のエンタープライズソリューション開発経験を持つ。Microsoft認定エキスパートとして、100社以上の大企業にD365導入を支援。クラウド移行戦略とシステム統合の専門家。',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 'tm-002',
    name: '佐藤 美咲',
    nameEn: 'Misaki Sato',
    role: 'AI ソリューションアーキテクト',
    roleJa: 'AI ソリューションアーキテクト',
    specialty: ['Azure OpenAI', 'LangChain', '機械学習', '自然言語処理', 'チャットボット開発'],
    motto: 'AIで人間の創造性を解放する',
    bio: 'AI・機械学習の専門家として、企業向けAI導入プロジェクトを多数リード。生成AI統合、チャットボット開発、知識ベース構築の実績が豊富。東京大学大学院で機械学習を専攻。',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 'tm-003',
    name: '鈴木 大輔',
    nameEn: 'Daisuke Suzuki',
    role: 'D365 コンサルタント',
    roleJa: 'D365 コンサルタント',
    specialty: ['Dynamics 365 Sales', 'Dynamics 365 Marketing', 'Power Platform', 'CRM戦略設計', '営業プロセス最適化'],
    motto: 'CRMで顧客との関係を深める',
    bio: 'Microsoft Dynamics 365認定コンサルタント。100社以上のCRM導入実績を持ち、営業プロセス最適化とマーケティング自動化のエキスパート。顧客満足度向上と営業効率化を両立させるソリューションを提供。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 'tm-004',
    name: '山田 智子',
    nameEn: 'Tomoko Yamada',
    role: 'フロントエンド開発リーダー',
    roleJa: 'フロントエンド開発リーダー',
    specialty: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'パフォーマンス最適化', 'UXデザイン'],
    motto: '美しく、速く、使いやすいウェブ体験を創造する',
    bio: 'モダンなフロントエンド開発のエキスパート。パフォーマンス最適化とUXデザインに精通し、50以上のウェブサイト構築プロジェクトをリード。レスポンシブデザイン、アクセシビリティ、プログレッシブウェブアプリの専門家。',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
  }
];

// ==================== 情报中心/CMS 数据 ====================
// 分类：Industry (行业动态), News (新闻), Insights (专栏思考), Achievements (团队成绩)
export const insights = [
  // 行业动态 (Industry Trends)
  {
    id: 'insight-001',
    title: 'Microsoft Dynamics 365 2024年最新アップデート：Copilot統合とAI機能強化',
    titleEn: 'Microsoft Dynamics 365 2024 Latest Update: Copilot Integration and AI Enhancement',
    date: '2024-01-20',
    category: 'Industry',
    categoryJa: '業界動向',
    tags: ['D365', 'Microsoft', 'AI', 'Copilot', 'アップデート'],
    excerpt: 'Microsoft Dynamics 365の2024年最新アップデートでは、Copilot機能の統合とAI機能の大幅強化が注目されています。営業プロセスの自動化とデータ分析能力が向上し、企業のデジタル変革を加速させる新機能を詳しく解説します。',
    content: `Microsoft Dynamics 365の2024年最新アップデートでは、以下の主要機能が追加されました：

1. **Copilot統合による営業支援**
   - メールの自動要約と返信提案
   - 顧客データの自動分析とインサイト生成
   - 営業活動の最適化提案

2. **AI機能の強化**
   - 予測分析の精度向上
   - 異常検知機能の追加
   - 自然言語処理による顧客問い合わせ自動対応

3. **統合性の向上**
   - Power Platformとの連携強化
   - サードパーティツールとのAPI拡張
   - リアルタイム同期機能の改善

これらの新機能により、営業効率が平均30%向上し、顧客満足度も大幅に改善することが期待されています。当社では、最新のアップデートを活用した導入支援サービスを提供しており、100社以上の実績があります。`,
    authorId: 'tm-003'
  },
  {
    id: 'insight-002',
    title: '製造業におけるAI活用の最新トレンド：uTRONプラットフォームの可能性',
    titleEn: 'Latest AI Trends in Manufacturing: The Potential of uTRON Platform',
    date: '2024-01-18',
    category: 'Industry',
    categoryJa: '業界動向',
    tags: ['AI', '製造業', 'uTRON', '自動化', 'データ分析'],
    excerpt: '製造業におけるAI活用が急速に進化しています。特に自動化分析装置向けの統合プラットフォーム「uTRON」は、リアルタイムデータ処理と予測分析により、製造プロセスの最適化を実現しています。本記事では、最新の活用事例と技術動向を解説します。',
    content: `製造業におけるAI活用の最新トレンドとして、以下のポイントが重要です：

**1. リアルタイムデータ処理の重要性**
製造現場では、分析装置からの大量データをリアルタイムで処理し、即座に意思決定を行う必要があります。uTRONプラットフォームは、<100msの処理速度を実現し、製造プロセスの最適化を支援します。

**2. 予測分析による品質管理**
AIを活用した予測分析により、不良品の発生を事前に予測し、製造プロセスの調整を行うことが可能になりました。これにより、品質管理コストを40%削減した事例もあります。

**3. 統合プラットフォームの価値**
複数の分析装置を一元管理するuTRONプラットフォームにより、データの統合分析とワークフロー自動化が実現。製造効率が大幅に向上しています。`,
    authorId: 'tm-002'
  },
  // 专栏思考 (Expert Insights)
  {
    id: 'insight-003',
    title: 'システムマイグレーションで陥りがちな5つの落とし穴と対策',
    titleEn: '5 Common Pitfalls in System Migration and Countermeasures',
    date: '2024-01-15',
    category: 'Insights',
    categoryJa: '専門家の視点',
    tags: ['マイグレーション', 'システム移行', 'ベストプラクティス', 'リスク管理'],
    excerpt: 'レガシーシステムからモダンなクラウドベースシステムへの移行は、多くの企業が直面する課題です。本記事では、10年以上の移行実績から見えてきた、よくある落とし穴とその対策を詳しく解説します。',
    content: `システムマイグレーションでよく見られる5つの落とし穴：

**1. データマッピングの不備**
既存システムのデータ構造を十分に理解せずに移行を進めると、データの欠損や不整合が発生します。対策として、移行前の徹底的なデータ分析とマッピング設計が不可欠です。

**2. ダウンタイムの過小評価**
業務停止時間を過小評価すると、ビジネスへの影響が予想以上に大きくなります。段階的移行とロールバック計画の策定が重要です。

**3. ユーザー研修の不足**
新システムへの移行は、ユーザーの操作習慣の変更を伴います。十分な研修とサポート体制を整えることで、移行後の混乱を最小限に抑えられます。

**4. パフォーマンステストの不備**
本番環境での負荷を想定したテストが不十分だと、移行後にパフォーマンス問題が発生する可能性があります。十分な負荷テストと最適化が必要です。

**5. セキュリティ要件の見落とし**
移行プロセスにおけるセキュリティ要件を軽視すると、データ漏洩のリスクが高まります。セキュリティ設計を最初から組み込むことが重要です。

当社では、これらの落とし穴を回避するための包括的な移行支援サービスを提供しています。`,
    authorId: 'tm-001'
  },
  {
    id: 'insight-004',
    title: 'uTRON効率最適化：リアルタイム処理のボトルネックを解消する3つのアプローチ',
    titleEn: 'uTRON Efficiency Optimization: 3 Approaches to Eliminate Real-time Processing Bottlenecks',
    date: '2024-01-12',
    category: 'Insights',
    categoryJa: '専門家の視点',
    tags: ['uTRON', 'パフォーマンス', '最適化', 'リアルタイム処理', '技術'],
    excerpt: 'uTRONプラットフォームのリアルタイムデータ処理において、ボトルネックが発生する原因とその解決策を、実際のプロジェクト経験から解説します。データ処理速度を<100msに保つための技術的アプローチを詳しく紹介します。',
    content: `uTRONプラットフォームの効率最適化における3つのアプローチ：

**1. データベースクエリの最適化**
大量の時系列データを扱う際、適切なインデックス設計とクエリ最適化が重要です。特に、頻繁にアクセスされるデータに対しては、Redisなどのインメモリキャッシュを活用することで、処理速度を大幅に向上させることができます。

**2. 非同期処理の活用**
リアルタイム表示が必要なデータと、バックグラウンド処理可能なデータを分離し、非同期処理を活用することで、ユーザー体験を損なうことなく、システム全体の処理能力を向上させます。

**3. マイクロサービスアーキテクチャの採用**
データ処理エンジンを独立したマイクロサービスとして分離し、スケーラブルな構成を実現。負荷に応じて自動スケーリングを行うことで、ピーク時の処理能力を確保します。

これらのアプローチにより、uTRONプラットフォームの処理速度を<100msに保ち、同時接続数100+を実現しています。`,
    authorId: 'tm-001'
  },
  // 团队成绩 (Achievements)
  {
    id: 'insight-005',
    title: 'チームメンバー3名がMicrosoft認定エキスパート資格を取得',
    titleEn: '3 Team Members Earn Microsoft Certified Expert Certifications',
    date: '2024-01-10',
    category: 'Achievements',
    categoryJa: 'チーム実績',
    tags: ['資格取得', 'Microsoft', '認定', 'チーム'],
    excerpt: '当社のチームメンバー3名が、Microsoft Dynamics 365関連の認定エキスパート資格を取得しました。これにより、より高度な技術サポートとコンサルティングサービスを提供できる体制が整いました。',
    content: `2024年1月、当社のチームメンバー3名が以下のMicrosoft認定資格を取得しました：

**取得資格：**
- Microsoft Certified: Dynamics 365 Sales Functional Consultant Expert
- Microsoft Certified: Power Platform Solution Architect Expert
- Microsoft Certified: Azure Solutions Architect Expert

これらの資格取得により、当社の技術力と専門性がさらに向上し、お客様により高品質なサービスを提供できるようになりました。今後も、チーム全体のスキル向上に取り組んでまいります。`,
    authorId: 'tm-001'
  },
  {
    id: 'insight-006',
    title: 'Sky Future、Microsoft Partner NetworkでGold Partner認定を獲得',
    titleEn: 'Sky Future Achieves Gold Partner Status in Microsoft Partner Network',
    date: '2024-01-08',
    category: 'Achievements',
    categoryJa: 'チーム実績',
    tags: ['Microsoft', 'パートナー', '認定', '実績'],
    excerpt: '当社がMicrosoft Partner Networkにおいて、Gold Partner認定を獲得しました。これは、Microsoft Dynamics 365とAzure関連サービスの提供実績と技術力が認められた証です。',
    content: `Sky Futureは、Microsoft Partner Networkにおいて、以下の分野でGold Partner認定を獲得しました：

**認定分野：**
- Cloud Business Applications (Dynamics 365)
- Cloud Platform (Azure)

この認定により、当社はMicrosoftの最新技術とリソースへの優先アクセス権を獲得し、お客様により迅速で高品質なサービスを提供できるようになりました。今後も、Microsoftとの連携を強化し、デジタル変革を支援してまいります。`,
    authorId: 'tm-001'
  },
  {
    id: 'insight-007',
    title: 'uTRONプロジェクトが製造業イノベーション賞を受賞',
    titleEn: 'uTRON Project Wins Manufacturing Innovation Award',
    date: '2024-01-05',
    category: 'Achievements',
    categoryJa: 'チーム実績',
    tags: ['uTRON', '受賞', '製造業', 'イノベーション'],
    excerpt: '当社が開発したuTRONプラットフォームを活用した製造業向けソリューションが、2024年製造業イノベーション賞を受賞しました。リアルタイムデータ処理とAI分析による製造プロセス最適化が高く評価されました。',
    content: `2024年製造業イノベーション賞において、当社が開発したuTRONプラットフォームを活用したソリューションが受賞しました。

**受賞理由：**
- リアルタイムデータ処理による製造プロセスの最適化
- AI分析を活用した予測メンテナンスの実現
- 複数分析装置の統合管理による効率化

この受賞は、当社の技術力とイノベーションへの取り組みが認められた証です。今後も、製造業のデジタル変革を支援するソリューションを提供してまいります。`,
    authorId: 'tm-001'
  },
  // 新闻 (News) - 保留原有的一些作为新闻类
  {
    id: 'insight-008',
    title: 'Sky Future、新オフィス開設とチーム拡大を発表',
    titleEn: 'Sky Future Announces New Office Opening and Team Expansion',
    date: '2024-01-03',
    category: 'News',
    categoryJa: 'ニュース',
    tags: ['会社ニュース', '成長', 'チーム拡大'],
    excerpt: '東京・渋谷に新オフィスを開設し、開発チームを2倍に拡大。より多くの企業にデジタルソリューションを提供できる体制を整えました。',
    content: `Sky Futureは、2024年1月、東京・渋谷に新オフィスを開設し、開発チームを2倍に拡大することを発表しました。

**主な内容：**
- 新オフィス：東京都渋谷区（詳細住所は会社概要ページをご確認ください）
- チーム拡大：開発チームを2倍に拡大し、より迅速なサービス提供を実現
- サービス強化：D365、uTRON、Web制作の各分野で専門チームを強化

この拡大により、より多くの企業にデジタルソリューションを提供できる体制が整いました。今後も、お客様のデジタル変革を支援してまいります。`,
    authorId: 'tm-001'
  }
];

// ==================== 核心服务详细数据 ====================
export const coreServices = [
  {
    id: 'd365',
    name: 'Dynamics 365 導入・カスタマイズ',
    nameEn: 'Dynamics 365 Implementation',
    icon: '📊',
    description: 'CRM・営業・マーケティングの統合ソリューション',
    fullDescription: 'Microsoft Dynamics 365を活用した包括的なビジネスソリューション。営業プロセスの自動化から顧客関係管理まで、企業のデジタル変革を徹底的にサポートします。',
    strengths: [
      {
        id: 'strength-1',
        title: '豊富な実績と専門性',
        description: '100社以上の大企業にD365導入を支援。Microsoft認定エキスパートによる確実な導入プロセスを提供します。',
        metrics: { companies: 100, successRate: '98%' },
        icon: '🏆'
      },
      {
        id: 'strength-2',
        title: '迅速な導入支援',
        description: '標準的な導入期間を30%短縮。豊富なテンプレートとベストプラクティスを活用した効率的なプロジェクト管理。',
        metrics: { timeReduction: '30%', avgPeriod: '3-6ヶ月' },
        icon: '⚡'
      },
      {
        id: 'strength-3',
        title: 'カスタマイズ対応力',
        description: '企業の独自業務フローに完全対応。Power Platformを活用した柔軟な拡張性を実現します。',
        metrics: { customizationRate: '95%', modules: 12 },
        icon: '🔧'
      },
      {
        id: 'strength-4',
        title: '既存システムとの統合',
        description: 'ERP、会計システム、ウェブサイトとのシームレスな統合。API統合によるリアルタイムデータ同期を実現。',
        metrics: { integrationTypes: 20, syncTime: '<1秒' },
        icon: '🔗'
      },
      {
        id: 'strength-5',
        title: '包括的なサポート体制',
        description: '導入後の運用支援から、アップデート対応、ユーザー研修まで。365日24時間の監視体制を構築可能。',
        metrics: { supportHours: '24/7', responseTime: '<1時間' },
        icon: '🛡️'
      },
      {
        id: 'strength-6',
        title: 'コストパフォーマンス',
        description: '初期投資を抑えながら、長期的な運用コスト削減を実現。ROIを最大化する最適な導入プランを提案します。',
        metrics: { costReduction: '40%', roiPeriod: '12-18ヶ月' },
        icon: '💰'
      },
      {
        id: 'strength-7',
        title: 'セキュリティ・コンプライアンス',
        description: 'エンタープライズレベルのセキュリティ対策。多要素認証、監査ログ、データ暗号化により、厳格なコンプライアンス要件に対応。',
        metrics: { compliance: '100%', securityLevel: 'エンタープライズ' },
        icon: '🔒'
      }
    ],
    modules: [
      { id: 'sales', name: 'Dynamics 365 Sales', description: '営業管理・案件管理' },
      { id: 'marketing', name: 'Dynamics 365 Marketing', description: 'マーケティング自動化・キャンペーン管理' },
      { id: 'customer-service', name: 'Dynamics 365 Customer Service', description: '顧客サポート・チケット管理' },
      { id: 'field-service', name: 'Dynamics 365 Field Service', description: 'フィールドサービス・派遣管理' },
      { id: 'finance', name: 'Dynamics 365 Finance', description: '財務管理・会計' },
      { id: 'supply-chain', name: 'Dynamics 365 Supply Chain', description: 'サプライチェーン管理' }
    ],
    technologies: ['Microsoft Dynamics 365', 'Power Platform', 'Power Automate', 'Power Apps', 'Azure Logic Apps', 'Common Data Service']
  },
  {
    id: 'utron',
    name: '自動化分析装置ソフトウェア開発 (uTRON)',
    nameEn: 'Automated Analysis Device Software Development (uTRON)',
    icon: '🔬',
    description: '高度な自動化分析装置向けの専用ソフトウェア開発',
    fullDescription: 'uTRONは、高精度な分析装置を制御・管理するための統合ソフトウェアプラットフォームです。リアルタイムデータ処理、自動化ワークフロー、高度な分析機能を提供します。',
    developmentProcess: [
      {
        phase: 1,
        name: '要件定義・分析',
        nameEn: 'Requirements Analysis',
        duration: '2-4週間',
        deliverables: [
          '機能要件書（Functional Requirements Document）',
          '非機能要件書（Non-Functional Requirements）',
          'システム設計書（System Design Document）',
          'プロジェクト計画書（Project Plan）'
        ],
        activities: [
          'ステークホルダーとのヒアリング',
          '既存システム分析',
          'ユースケース定義',
          '技術スタック選定'
        ],
        technologies: ['Requirement Analysis Tools', 'UML Diagramming', 'Project Management']
      },
      {
        phase: 2,
        name: 'システム設計',
        nameEn: 'System Design',
        duration: '3-5週間',
        deliverables: [
          'アーキテクチャ設計書（Architecture Design）',
          'データベース設計書（Database Schema）',
          'API設計書（API Specification）',
          'UI/UX設計書（Interface Design）'
        ],
        activities: [
          'システムアーキテクチャ設計',
          'データモデル設計',
          'インターフェース設計',
          'セキュリティ設計'
        ],
        technologies: ['System Architecture', 'Database Design', 'API Design', 'UI/UX Design Tools']
      },
      {
        phase: 3,
        name: '開発・実装',
        nameEn: 'Development & Implementation',
        duration: '8-16週間',
        deliverables: [
          'ソースコード（Source Code）',
          '単体テストコード（Unit Tests）',
          '統合テストコード（Integration Tests）',
          '開発ドキュメント（Development Docs）'
        ],
        activities: [
          'コアモジュール開発',
          'デバイス制御モジュール実装',
          'データ処理エンジン開発',
          'ユーザーインターフェース実装',
          'API開発・統合'
        ],
        technologies: [
          'C# / .NET Framework',
          'Python (Data Processing)',
          'React / TypeScript (Frontend)',
          'SQL Server / PostgreSQL',
          'RESTful API',
          'SignalR (Real-time Communication)'
        ]
      },
      {
        phase: 4,
        name: 'テスト・品質保証',
        nameEn: 'Testing & Quality Assurance',
        duration: '4-6週間',
        deliverables: [
          'テスト計画書（Test Plan）',
          'テスト結果報告書（Test Results）',
          'バグレポート（Bug Reports）',
          '品質保証報告書（QA Report）'
        ],
        activities: [
          '単体テスト実行',
          '統合テスト実行',
          'システムテスト実行',
          'パフォーマンステスト',
          'セキュリティテスト',
          'ユーザー受け入れテスト（UAT）'
        ],
        technologies: ['Automated Testing Tools', 'Performance Testing', 'Security Testing', 'Test Automation Framework']
      },
      {
        phase: 5,
        name: 'デプロイ・導入',
        nameEn: 'Deployment & Rollout',
        duration: '2-3週間',
        deliverables: [
          '導入計画書（Deployment Plan）',
          '運用マニュアル（Operation Manual）',
          'ユーザーマニュアル（User Manual）',
          'サポートドキュメント（Support Docs）'
        ],
        activities: [
          '本番環境構築',
          'データ移行',
          'システム統合',
          'ユーザー研修',
          '段階的ロールアウト'
        ],
        technologies: ['CI/CD Pipeline', 'Docker / Containerization', 'Cloud Deployment', 'Monitoring Tools']
      },
      {
        phase: 6,
        name: '保守・サポート',
        nameEn: 'Maintenance & Support',
        duration: '継続',
        deliverables: [
          '保守計画書（Maintenance Plan）',
          'アップデートログ（Update Logs）',
          'サポートレポート（Support Reports）',
          '改善提案書（Improvement Proposals）'
        ],
        activities: [
          'バグ修正・対応',
          '機能追加・改善',
          'パフォーマンス最適化',
          'セキュリティアップデート',
          'ユーザーサポート',
          '定期メンテナンス'
        ],
        technologies: ['Version Control', 'Issue Tracking', 'Monitoring Systems', 'Backup & Recovery']
      }
    ],
    keyFeatures: [
      {
        id: 'feature-1',
        title: 'リアルタイムデータ処理',
        description: '高速データ処理エンジンによるリアルタイム分析結果の表示',
        technicalSpecs: ['データ処理速度: <100ms', '同時接続数: 100+', 'データベース最適化: Query Tuning']
      },
      {
        id: 'feature-2',
        title: '自動化ワークフロー',
        description: 'カスタマイズ可能なワークフローエンジンによる分析プロセスの自動化',
        technicalSpecs: ['ワークフロー定義: JSON/YAML', 'イベント駆動アーキテクチャ', 'エラーハンドリング: Retry Logic']
      },
      {
        id: 'feature-3',
        title: '高度な分析機能',
        description: '機械学習を活用したデータ分析と予測機能',
        technicalSpecs: ['ML モデル統合: Python/ONNX', '可視化ライブラリ: Chart.js/D3.js', '統計分析: NumPy/SciPy']
      },
      {
        id: 'feature-4',
        title: 'デバイス制御・統合',
        description: '複数の分析装置を一元管理・制御する統合プラットフォーム',
        technicalSpecs: ['通信プロトコル: TCP/IP, Serial', 'デバイスドライバ: Custom SDK', '同時制御: Multi-threading']
      }
    ],
    technologies: [
      'C# / .NET Framework',
      'Python',
      'React / TypeScript',
      'SQL Server',
      'SignalR',
      'Docker',
      'Azure Cloud Services'
    ],
    // 系统架构信息
    systemArchitecture: {
      layers: [
        {
          name: 'プレゼンテーション層',
          nameEn: 'Presentation Layer',
          components: ['React Frontend', 'TypeScript', 'Tailwind CSS', 'Chart.js / D3.js'],
          description: 'ユーザーインターフェース、データ可視化、リアルタイム表示'
        },
        {
          name: 'アプリケーション層',
          nameEn: 'Application Layer',
          components: ['.NET Web API', 'SignalR Hub', 'Workflow Engine', 'ML Service Integration'],
          description: 'ビジネスロジック、ワークフロー実行、リアルタイム通信'
        },
        {
          name: 'データ処理層',
          nameEn: 'Data Processing Layer',
          components: ['Python Data Engine', 'ETL Pipeline', 'Real-time Stream Processing', 'ML Models'],
          description: 'データ変換、分析処理、機械学習推論'
        },
        {
          name: 'データベース層',
          nameEn: 'Database Layer',
          components: ['SQL Server', 'PostgreSQL', 'Time Series DB', 'Redis Cache'],
          description: 'データ永続化、高速キャッシュ、時系列データ管理'
        },
        {
          name: 'デバイス制御層',
          nameEn: 'Device Control Layer',
          components: ['TCP/IP Communication', 'Serial Protocol', 'Device Drivers', 'Multi-threading Controller'],
          description: '分析装置との通信、制御コマンド送信、データ受信'
        }
      ],
      protocols: [
        { name: 'TCP/IP', description: 'イーサネット経由でのデバイス通信', standard: 'RFC 793' },
        { name: 'Serial (RS-232/485)', description: 'シリアルポート経由でのデバイス通信', standard: 'EIA/TIA-232' },
        { name: 'HTTP/HTTPS', description: 'RESTful API 通信', standard: 'RFC 7231' },
        { name: 'WebSocket (SignalR)', description: 'リアルタイム双方向通信', standard: 'RFC 6455' },
        { name: 'MQTT', description: 'IoT デバイス向け軽量通信プロトコル', standard: 'MQTT 3.1.1' }
      ],
      standards: [
        { name: 'ISO/IEC 25010', description: 'ソフトウェア品質モデル準拠' },
        { name: 'IEC 62304', description: '医療機器ソフトウェア品質システム' },
        { name: 'IEEE 1012', description: 'ソフトウェア検証・妥当性確認' },
        { name: 'FDA 21 CFR Part 11', description: '電子記録・電子署名規制準拠（該当分野）' }
      ]
    },
    developmentTimeline: {
      totalDuration: '10-16ヶ月',
      phases: [
        {
          phase: 1,
          name: '要件定義・分析',
          duration: '2-4週間',
          milestones: ['要件定義書完成', '技術スタック決定', 'プロジェクト計画承認']
        },
        {
          phase: 2,
          name: 'システム設計',
          duration: '3-5週間',
          milestones: ['アーキテクチャ設計完了', 'API仕様確定', 'データベース設計完了']
        },
        {
          phase: 3,
          name: '開発・実装',
          duration: '8-16週間',
          milestones: ['コアモジュール完成', 'デバイス制御実装', 'データ処理エンジン完成', 'UI実装完了']
        },
        {
          phase: 4,
          name: 'テスト・品質保証',
          duration: '4-6週間',
          milestones: ['単体テスト完了', '統合テスト完了', 'システムテスト完了', 'UAT完了']
        },
        {
          phase: 5,
          name: 'デプロイ・導入',
          duration: '2-3週間',
          milestones: ['本番環境構築', 'データ移行完了', 'システム統合完了', 'ユーザー研修完了']
        }
      ]
    }
  },
  {
    id: 'migration',
    name: 'システムマイグレーション',
    nameEn: 'System Migration',
    icon: '🔄',
    description: '既存システムから新システムへの安全で確実な移行',
    fullDescription: 'レガシーシステムからモダンなクラウドベースシステムへの移行をサポート。ダウンタイムを最小限に抑えながら、データの完全性を保証した移行を実現します。',
    migrationTypes: [
      {
        id: 'data-migration',
        name: 'データ移行',
        description: '既存データベースから新システムへのデータ移行',
        steps: [
          'データマッピング設計',
          'データクレンジング・変換',
          'テスト環境での移行テスト',
          '本番環境への段階的移行',
          'データ整合性検証'
        ]
      },
      {
        id: 'application-migration',
        name: 'アプリケーション移行',
        description: '既存アプリケーションのモダン化・移行',
        steps: [
          'アプリケーション分析',
          '移行戦略策定',
          'コード変換・リファクタリング',
          '機能テスト',
          '段階的ロールアウト'
        ]
      },
      {
        id: 'cloud-migration',
        name: 'クラウド移行',
        description: 'オンプレミスからクラウドへの移行',
        steps: [
          'クラウド戦略策定',
          'インフラ設計',
          'アプリケーション移行',
          'セキュリティ設定',
          'パフォーマンス最適化'
        ]
      }
    ],
    technologies: ['Azure Migration Tools', 'Database Migration Assistant', 'ETL Tools', 'Cloud Services']
  },
  {
    id: 'consulting',
    name: 'ITコンサルティング・システムマイグレーション',
    nameEn: 'IT Consulting & System Migration',
    icon: '💼',
    description: 'デジタル変革を支援する包括的なITコンサルティングとシステム移行サービス',
    fullDescription: `企業のデジタル変革戦略からシステム選定、導入支援まで、一貫したコンサルティングサービスを提供します。レガシーシステムからモダンなクラウドベースシステムへの移行をサポートし、ダウンタイムを最小限に抑えながら、データの完全性を保証した移行を実現します。

主なサービス領域：
• デジタル変革戦略策定
• システム選定・評価
• プロジェクト管理支援
• セキュリティ・コンプライアンス支援
• 運用最適化コンサルティング

システム移行の流れ：
1. 現状分析・要件定義（2-3週間）
   - 既存システムの詳細分析
   - 移行要件の定義
   - 移行戦略の策定

2. 移行設計（3-4週間）
   - データマッピング設計
   - 移行プロセス設計
   - リスク評価・対策

3. テスト移行（4-6週間）
   - テスト環境での移行テスト
   - データ整合性検証
   - パフォーマンステスト

4. 本番移行（2-3週間）
   - 段階的ロールアウト
   - データ移行実行
   - システム統合

5. 運用支援（継続）
   - 運用監視
   - トラブルシューティング
   - 最適化支援`,
    serviceAreas: [
      'デジタル変革戦略策定',
      'システム選定・評価',
      'プロジェクト管理支援',
      'セキュリティ・コンプライアンス支援',
      '運用最適化コンサルティング'
    ],
    migrationProcess: [
      {
        phase: 1,
        name: '現状分析・要件定義',
        nameEn: 'Analysis & Requirements',
        duration: '2-3週間',
        deliverables: [
          '現状分析レポート（Current State Analysis）',
          '移行要件書（Migration Requirements）',
          '移行戦略書（Migration Strategy）',
          'リスク評価レポート（Risk Assessment）'
        ],
        activities: [
          '既存システムの詳細分析',
          'データ構造・依存関係の把握',
          '移行要件の定義',
          '移行戦略の策定'
        ],
        technologies: ['System Analysis Tools', 'Data Mapping Tools', 'Project Management']
      },
      {
        phase: 2,
        name: '移行設計',
        nameEn: 'Migration Design',
        duration: '3-4週間',
        deliverables: [
          'データマッピング設計書（Data Mapping Design）',
          '移行プロセス設計書（Migration Process Design）',
          '移行計画書（Migration Plan）',
          'ロールバック計画書（Rollback Plan）'
        ],
        activities: [
          'データマッピング設計',
          '移行プロセス設計',
          'リスク評価・対策',
          '移行スケジュール策定'
        ],
        technologies: ['Data Mapping Tools', 'ETL Design', 'Process Design Tools']
      },
      {
        phase: 3,
        name: 'テスト移行',
        nameEn: 'Test Migration',
        duration: '4-6週間',
        deliverables: [
          'テスト移行レポート（Test Migration Report）',
          'データ整合性検証レポート（Data Integrity Report）',
          'パフォーマンステストレポート（Performance Test Report）',
          '課題リスト（Issue List）'
        ],
        activities: [
          'テスト環境での移行テスト',
          'データ整合性検証',
          'パフォーマンステスト',
          '課題の特定・解決'
        ],
        technologies: ['Test Environments', 'Data Validation Tools', 'Performance Testing Tools']
      },
      {
        phase: 4,
        name: '本番移行',
        nameEn: 'Production Migration',
        duration: '2-3週間',
        deliverables: [
          '移行実行レポート（Migration Execution Report）',
          'システム統合レポート（Integration Report）',
          '移行完了証明書（Migration Completion Certificate）',
          '運用マニュアル（Operation Manual）'
        ],
        activities: [
          '段階的ロールアウト',
          'データ移行実行',
          'システム統合',
          '移行後の検証'
        ],
        technologies: ['Migration Tools', 'Data Transfer Tools', 'Monitoring Systems']
      },
      {
        phase: 5,
        name: '運用支援',
        nameEn: 'Operations Support',
        duration: '継続',
        deliverables: [
          '運用監視レポート（Operation Monitoring Report）',
          'トラブルシューティングレポート（Troubleshooting Report）',
          '最適化提案書（Optimization Proposal）',
          'メンテナンスログ（Maintenance Logs）'
        ],
        activities: [
          '運用監視',
          'トラブルシューティング',
          'パフォーマンス最適化',
          '定期的なメンテナンス'
        ],
        technologies: ['Monitoring Tools', 'Issue Tracking', 'Performance Optimization Tools']
      }
    ],
    technicalAdvantages: [
      {
        id: 'advantage-1',
        title: 'ダウンタイム最小化',
        description: '段階的移行により、業務停止時間を最小限に抑えます。',
        metrics: { downtime: '<4時間', businessContinuity: '99.9%' },
        icon: '⚡'
      },
      {
        id: 'advantage-2',
        title: 'データ完全性保証',
        description: '厳格なデータ検証プロセスにより、データの完全性を保証します。',
        metrics: { dataIntegrity: '100%', validationRate: '100%' },
        icon: '🔒'
      },
      {
        id: 'advantage-3',
        title: 'リスク管理',
        description: '包括的なリスク評価と対策により、移行リスクを最小化します。',
        metrics: { riskMitigation: '95%', successRate: '98%' },
        icon: '🛡️'
      }
    ],
    technologies: ['Business Analysis', 'Project Management', 'IT Strategy', 'Security Consulting', 'Azure Migration Tools', 'Database Migration Assistant', 'ETL Tools', 'Cloud Services']
  },
  {
    id: 'web-design',
    name: 'DX サイト・ポータル構築',
    nameEn: 'Digital Portal & Web Design',
    icon: '🌐',
    description: 'モダンなWebサイト制作とデジタルトランスフォーメーションポータル構築',
    fullDescription: '企業のデジタル変革を支援する、モダンで高機能なWebサイト・ポータル構築サービス。レスポンシブデザインからエンタープライズレベルの統合プラットフォームまで、お客様のニーズに応じた最適なソリューションを提供します。',
    packages: ['standard', 'business', 'enterprise'],
    keyFeatures: [
      {
        id: 'feature-1',
        title: 'レスポンシブデザイン',
        description: 'PC・タブレット・スマートフォンに対応した、あらゆるデバイスで最適な表示を実現',
        technicalSpecs: ['Mobile-First Design', 'Breakpoint Optimization', 'Touch-Friendly UI']
      },
      {
        id: 'feature-2',
        title: 'SEO最適化',
        description: '検索エンジン最適化により、Webサイトの可視性とトラフィックを向上',
        technicalSpecs: ['Meta Tags Optimization', 'Structured Data', 'Sitemap Generation', 'Performance Optimization']
      },
      {
        id: 'feature-3',
        title: 'CMS統合',
        description: 'コンテンツ管理システムによる、効率的なコンテンツ更新と管理',
        technicalSpecs: ['Headless CMS', 'Content API', 'Media Management', 'Version Control']
      },
      {
        id: 'feature-4',
        title: 'システム統合',
        description: '既存のERP/CRMシステムとのシームレスな統合により、業務効率を向上',
        technicalSpecs: ['API Integration', 'Data Synchronization', 'Single Sign-On', 'Workflow Automation']
      }
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Headless CMS', 'Azure Services', 'D365 Integration'],
    portfolio: [
      {
        id: 'portfolio-001',
        title: '大手製造業のコーポレートサイト刷新',
        titleEn: 'Corporate Website Redesign for Major Manufacturing Company',
        description: 'ITコンサルタントの視点から、ビジネス価値を最大化するウェブサイトを構築。SEO最適化とコンバージョン率向上を実現。',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        industry: '製造業',
        technologies: ['Next.js', 'TypeScript', 'Headless CMS', 'SEO Optimization'],
        results: [
          { metric: 'コンバージョン率向上', value: '40%' },
          { metric: 'ページ読み込み速度', value: '<2秒' },
          { metric: 'SEOスコア', value: '95/100' }
        ],
        link: '#'
      },
      {
        id: 'portfolio-002',
        title: '金融機関のデジタルポータル構築',
        titleEn: 'Digital Portal Development for Financial Institution',
        description: '既存のERP/CRMシステムと統合した、エンタープライズレベルのデジタルポータル。セキュリティと使いやすさを両立。',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
        industry: '金融業',
        technologies: ['React', 'Azure Services', 'D365 Integration', 'SSO'],
        results: [
          { metric: '業務効率向上', value: '35%' },
          { metric: 'ユーザー満足度', value: '92%' },
          { metric: 'セキュリティレベル', value: 'エンタープライズ' }
        ],
        link: '#'
      },
      {
        id: 'portfolio-003',
        title: 'スタートアップ企業のブランドサイト',
        titleEn: 'Brand Website for Startup Company',
        description: 'モダンなデザインとレスポンシブ対応で、ブランドイメージを向上。コストパフォーマンスに優れたソリューション。',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
        industry: 'スタートアップ',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        results: [
          { metric: '開発期間', value: '3週間' },
          { metric: 'コスト削減', value: '30%' },
          { metric: 'ブランド認知度向上', value: '60%' }
        ],
        link: '#'
      }
    ]
  }
];

// ==================== 案例/实绩数据 ====================
export const caseStudies = [
  {
    id: 'case-001',
    title: '大手製造業におけるD365導入と営業効率化',
    titleEn: 'D365 Implementation for Major Manufacturing Company',
    client: '大手製造業 A社',
    industry: '製造業',
    date: '2023-10',
    duration: '6ヶ月',
    challenge: '営業プロセスの属人化、顧客情報管理の非効率性、レポート作成の手作業による時間ロス',
    solution: 'Dynamics 365 Salesの導入により、営業プロセスの標準化、顧客情報の一元管理、自動レポート生成を実現',
    results: [
      { metric: '営業効率向上', value: '35%', description: '案件管理時間の削減' },
      { metric: '成約率向上', value: '28%', description: '顧客フォローアップの徹底' },
      { metric: 'レポート作成時間削減', value: '70%', description: '自動化による時間短縮' }
    ],
    technologies: ['Dynamics 365 Sales', 'Power BI', 'Power Automate'],
    tags: ['D365', 'CRM', '営業効率化', '製造業']
  },
  {
    id: 'case-002',
    title: '化学分析装置向けuTRONソフトウェア開発',
    titleEn: 'uTRON Software Development for Chemical Analysis Device',
    client: '分析装置メーカー B社',
    industry: '製造業・分析装置',
    date: '2023-06',
    duration: '10ヶ月',
    challenge: '複数の分析装置を一元管理するソフトウェアの必要性、リアルタイムデータ処理の要求、ユーザビリティの向上',
    solution: 'uTRONプラットフォームの開発により、統合管理、リアルタイム処理、直感的なUIを実現',
    results: [
      { metric: 'データ処理速度', value: '<100ms', description: 'リアルタイム分析結果表示' },
      { metric: '運用効率向上', value: '50%', description: '自動化ワークフローによる改善' },
      { metric: 'ユーザー満足度', value: '92%', description: '使いやすさの向上' }
    ],
    technologies: ['C# / .NET', 'React', 'SignalR', 'SQL Server'],
    tags: ['uTRON', 'ソフトウェア開発', '分析装置', 'リアルタイム処理']
  },
  {
    id: 'case-003',
    title: '金融機関のレガシーシステムからクラウドへの移行',
    titleEn: 'Legacy System to Cloud Migration for Financial Institution',
    client: '地方銀行 C社',
    industry: '金融業',
    date: '2023-03',
    duration: '12ヶ月',
    challenge: '老朽化したオンプレミスシステムの保守コスト増、セキュリティ強化の必要性、業務継続性の確保',
    solution: 'Azureへの段階的移行により、コスト削減、セキュリティ強化、スケーラビリティの向上を実現',
    results: [
      { metric: '運用コスト削減', value: '45%', description: 'クラウド移行によるコスト最適化' },
      { metric: 'ダウンタイム', value: '<4時間', description: '段階的移行による業務影響の最小化' },
      { metric: 'セキュリティ向上', value: 'エンタープライズレベル', description: '多要素認証・暗号化の実装' }
    ],
    technologies: ['Azure Cloud', 'Database Migration', 'Identity Management', 'Monitoring'],
    tags: ['システム移行', 'クラウド', '金融業', 'セキュリティ']
  }
];

// ==================== 公司信息数据 ====================
export const companyInfo = {
  name: 'Sky Future株式会社',
  nameEn: 'Sky Future Co., Ltd.',
  legalInfo: {
    representativeName: '代表取締役 CEO / CTO 田中 健太',
    representativeNameEn: 'Kenta Tanaka, CEO / CTO',
    capital: '50,000,000円',
    establishedDate: '2014年4月',
    registrationNumber: '第1234567890123号',
    businessLines: [
      'Microsoft Dynamics 365の導入・カスタマイズ・コンサルティング',
      '自動化分析装置ソフトウェア開発',
      'システムマイグレーション・ITコンサルティング',
      'AIソリューション開発・導入支援',
      'ウェブサイト・デジタルポータル構築'
    ]
  },
  ceoMessage: {
    title: '代表挨拶',
    titleEn: 'CEO Message',
    content: `はじめまして、Sky Future株式会社の代表取締役を務めております。

私たちは、Microsoft Dynamics 365とAI技術を活用したデジタルソリューションを通じて、企業のビジネス変革を支援してまいりました。10年以上のエンタープライズソリューション開発経験と、100社以上の大企業へのD365導入実績を基に、お客様の課題解決に最適なソリューションを提供いたします。

デジタル変革の時代において、テクノロジーは単なるツールではなく、ビジネスの成長を加速させる重要な要素となっています。私たちは、最新のテクノロジーと豊富な実績を組み合わせることで、お客様の成功を支援してまいります。

今後とも、Sky Future株式会社をどうぞよろしくお願いいたします。`,
    ceoName: '代表取締役 CEO / CTO 田中 健太',
    date: '2024年1月'
  },
  address: {
    headquarters: {
      name: '本社',
      address: '〒150-0001 東京都渋谷区神宮前1-1-1 Sky Futureビル 5F',
      addressEn: '5F Sky Future Building, 1-1-1 Jingumae, Shibuya-ku, Tokyo 150-0001, Japan',
      phone: '+81-3-1234-5678',
      fax: '+81-3-1234-5679',
      email: 'info@sky-future.com',
      businessHours: '平日 9:00-18:00'
    }
  },
  mainPartners: [
    { name: 'Microsoft Corporation', category: 'テクノロジーパートナー', logo: '/partners/microsoft.svg' },
    { name: '大手製造業 Aグループ', category: '主要取引先', description: 'D365導入プロジェクト複数件' },
    { name: '化学分析装置メーカー B社', category: '主要取引先', description: 'uTRON開発・保守契約' },
    { name: '地方金融機関 Cグループ', category: '主要取引先', description: 'システムマイグレーション' },
    { name: '大手商社 D社', category: '主要取引先', description: 'ITコンサルティング・DX推進' }
  ],
  // 业务实绩统计
  businessAchievements: {
    totalProjects: 150,
    totalClients: 100,
    d365Implementations: 100,
    utronDeployments: 30,
    migrationProjects: 25,
    averageEfficiencyImprovement: '35%',
    customerSatisfaction: '98%',
    teamSize: 30,
    yearsOfExperience: 10
  },
  // 详细业务实绩（按行业/服务分类）
  detailedAchievements: [
    {
      category: 'D365導入',
      icon: '📊',
      projects: 100,
      industries: ['製造業', '金融業', '商社', 'サービス業'],
      keyMetrics: [
        { label: '平均導入期間', value: '3-6ヶ月' },
        { label: '営業効率向上', value: '平均35%' },
        { label: '顧客満足度', value: '98%' }
      ],
      notableClients: ['大手製造業 Aグループ', '地方金融機関 Cグループ', '大手商社 D社']
    },
    {
      category: 'uTRON開発',
      icon: '🔬',
      projects: 30,
      industries: ['製造業・分析装置', '化学・製薬', '食品・飲料'],
      keyMetrics: [
        { label: 'データ処理速度', value: '<100ms' },
        { label: '運用効率向上', value: '平均50%' },
        { label: 'ユーザー満足度', value: '92%' }
      ],
      notableClients: ['化学分析装置メーカー B社', '製薬メーカー E社']
    },
    {
      category: 'システムマイグレーション',
      icon: '💼',
      projects: 25,
      industries: ['金融業', '製造業', 'サービス業'],
      keyMetrics: [
        { label: 'ダウンタイム', value: '<4時間' },
        { label: 'コスト削減', value: '平均45%' },
        { label: 'データ完全性', value: '100%' }
      ],
      notableClients: ['地方金融機関 Cグループ', '大手製造業 F社']
    },
    {
      category: 'ITコンサルティング',
      icon: '🎯',
      projects: 50,
      industries: ['全業種'],
      keyMetrics: [
        { label: 'DX推進支援', value: '50件以上' },
        { label: 'システム選定支援', value: '30件以上' },
        { label: 'プロジェクト管理', value: '40件以上' }
      ],
      notableClients: ['大手商社 D社', '製造業 Gグループ']
    }
  ],
  certifications: [
    { name: 'Microsoft Gold Partner', description: 'Microsoft Dynamics 365 認定パートナー', year: '2020年取得' },
    { name: 'ISO 27001', description: '情報セキュリティマネジメントシステム認証', year: '2021年取得' },
    { name: 'ISO 9001', description: '品質マネジメントシステム認証', year: '2019年取得' }
  ],
  recruitInfo: {
    title: '採用情報',
    titleEn: 'Recruitment',
    positions: [
      {
        id: 'recruit-001',
        title: 'D365コンサルタント',
        department: 'コンサルティング事業部',
        type: '正社員',
        location: '東京本社',
        description: 'Microsoft Dynamics 365の導入・コンサルティング業務',
        requirements: ['Microsoft Dynamics 365認定資格', '3年以上のERP導入経験', 'コミュニケーション能力', 'プロジェクト管理経験'],
        benefits: ['社会保険完備', '各種手当', '資格取得支援', '研修制度充実']
      },
      {
        id: 'recruit-002',
        title: 'ソフトウェアエンジニア',
        department: '開発事業部',
        type: '正社員',
        location: '東京本社',
        description: 'uTRON開発・システム開発業務',
        requirements: ['C# / .NET開発経験3年以上', 'データベース設計経験', 'チーム開発経験', '英語読み書き能力'],
        benefits: ['社会保険完備', '各種手当', '技術書籍購入補助', '勉強会参加支援']
      },
      {
        id: 'recruit-003',
        title: 'AI ソリューションアーキテクト',
        department: '開発事業部',
        type: '正社員',
        location: '東京本社',
        description: 'AI・機械学習を活用したソリューション開発',
        requirements: ['機械学習・AI開発経験', 'Python / TensorFlow実務経験', 'Azure OpenAI経験優遇', '大学院修士以上'],
        benefits: ['社会保険完備', '各種手当', '研究発表支援', '学会参加支援']
      }
    ]
  }
};

// ==================== 公司沿革/実績 Timeline 数据 ====================
export const companyTimeline = [
  {
    year: '2014',
    month: '04',
    title: 'Sky Future株式会社 設立',
    description: '東京都渋谷区にて創業。資本金5,000万円。',
    category: '会社設立',
    achievements: []
  },
  {
    year: '2015',
    month: '06',
    title: 'Microsoft Dynamics 365 パートナー認定',
    description: 'Microsoft認定パートナーとしてD365導入支援業務を開始。',
    category: '認定取得',
    achievements: []
  },
  {
    year: '2017',
    month: '03',
    title: 'uTRON開発プロジェクト開始',
    description: '化学分析装置メーカー向けソフトウェア開発を開始。',
    category: '技術開発',
    achievements: []
  },
  {
    year: '2019',
    month: '10',
    title: 'ISO 9001 認証取得',
    description: '品質マネジメントシステムの国際認証を取得。',
    category: '認定取得',
    achievements: []
  },
  {
    year: '2020',
    month: '08',
    title: 'Microsoft Gold Partner 認定',
    description: 'Microsoft Dynamics 365 Gold Partner認定を取得。',
    category: '認定取得',
    achievements: ['D365導入実績 50社突破']
  },
  {
    year: '2021',
    month: '05',
    title: 'ISO 27001 認証取得',
    description: '情報セキュリティマネジメントシステム認証を取得。',
    category: '認定取得',
    achievements: []
  },
  {
    year: '2022',
    month: '11',
    title: 'uTRON v2.0 リリース',
    description: 'リアルタイムデータ処理エンジンを搭載した新バージョンをリリース。',
    category: '製品リリース',
    achievements: ['データ処理速度 <100ms達成', '導入企業数 30社突破']
  },
  {
    year: '2023',
    month: '03',
    title: '金融機関向けシステムマイグレーション完了',
    description: '地方銀行のレガシーシステムからクラウドへの移行を完了。',
    category: 'プロジェクト完了',
    achievements: ['ダウンタイム <4時間達成', 'データ完全性 100%維持']
  },
  {
    year: '2023',
    month: '10',
    title: 'D365導入実績 100社突破',
    description: '累計100社以上の大企業にD365導入を支援。',
    category: '実績達成',
    achievements: ['平均営業効率向上 35%', '顧客満足度 98%']
  },
  {
    year: '2024',
    month: '01',
    title: '新オフィス開設・チーム拡大',
    description: '東京・渋谷に新オフィスを開設し、開発チームを2倍に拡大。',
    category: '組織拡大',
    achievements: ['チーム規模 30名へ拡大', '新規採用 10名']
  }
];

// ==================== 辅助函数：数据查询 ====================
/**
 * 根据ID获取套餐信息
 */
export const getPackageById = (id) => {
  return pricingPackages.find(pkg => pkg.id === id);
};

/**
 * 根据ID获取团队成员信息
 */
export const getTeamMemberById = (id) => {
  return teamMembers.find(member => member.id === id);
};

/**
 * 根据ID获取核心服务信息
 */
export const getServiceById = (id) => {
  return coreServices.find(service => service.id === id);
};

/**
 * 根据ID获取案例信息
 */
export const getCaseById = (id) => {
  return caseStudies.find(caseItem => caseItem.id === id);
};

/**
 * 根据类别筛选动态
 */
export const getInsightsByCategory = (category) => {
  return insights.filter(insight => insight.category === category);
};

/**
 * 根据作者ID筛选动态
 */
export const getInsightsByAuthor = (authorId) => {
  return insights.filter(insight => insight.authorId === authorId);
};

/**
 * 根据标签筛选动态
 */
export const getInsightsByTag = (tag) => {
  return insights.filter(insight => insight.tags.includes(tag));
};

/**
 * 根据行业筛选案例
 */
export const getCasesByIndustry = (industry) => {
  return caseStudies.filter(caseItem => caseItem.industry === industry);
};

// ==================== 默认导出 ====================
export default {
  pricingPackages,
  teamMembers,
  insights,
  coreServices,
  caseStudies,
  companyInfo,
  companyTimeline,
  getPackageById,
  getTeamMemberById,
  getServiceById,
  getCaseById,
  getInsightsByCategory,
  getInsightsByAuthor,
  getInsightsByTag,
  getCasesByIndustry
};
