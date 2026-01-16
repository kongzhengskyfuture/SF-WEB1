/**
 * Sky Future 官网统一数据源
 * 数据神经系统 - 全站内容统一管理
 * 
 * @description 此文件包含网站所有静态内容数据，确保组件引用的一致性
 */

// ==================== 定价套餐数据 ====================
export const pricingPackages = [
  {
    id: 'standard',
    name: 'Standard',
    nameJa: 'スタンダード',
    price: '30-50万円',
    description: '中小企業向けの基本的なウェブサイト構築パッケージ。レスポンシブデザインとSEO基礎設定を含む、コストパフォーマンスに優れたソリューションです。',
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
    id: 'professional',
    name: 'Professional',
    nameJa: 'プロフェッショナル',
    price: '80-120万円',
    description: '成長企業向けの高度な機能を備えたウェブサイトパッケージ。CMSによる動的コンテンツ管理と多段階フォームで、マーケティング効果を最大化します。',
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
    nameJa: 'エンタープライズ',
    price: '200万円〜',
    description: '大企業向けの統合型デジタルソリューション。AI Copilot知識ベース統合とD365 CRM自動連携により、営業効率と顧客満足度を同時に向上させます。',
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

// ==================== 行业动态数据 ====================
export const insights = [
  {
    id: 'insight-001',
    title: '2024年日本のデジタル変革トレンド：AI統合が加速',
    titleEn: '2024 Japan Digital Transformation Trends: AI Integration Accelerates',
    date: '2024-01-15',
    category: 'AI',
    categoryJa: 'AI',
    tags: ['AI', 'デジタル変革', 'トレンド', '生成AI'],
    excerpt: '日本の企業におけるAI導入が2024年に入り急加速。特に生成AIを活用した顧客対応システムの需要が高まっています。本記事では、最新のトレンドと導入事例を詳しく解説します。',
    content: '詳細な分析内容がここに入ります。日本の企業におけるAI導入の現状、成功事例、導入時の注意点などを詳しく説明します。...',
    authorId: 'tm-002'
  },
  {
    id: 'insight-002',
    title: 'Dynamics 365とウェブサイト統合で営業効率を30%向上',
    titleEn: '30% Sales Efficiency Improvement with Dynamics 365 and Website Integration',
    date: '2024-01-10',
    category: 'D365',
    categoryJa: 'D365',
    tags: ['D365', 'CRM', '営業効率化', '統合'],
    excerpt: 'ウェブサイトからのリードをD365に自動連携することで、営業チームの反応速度と成約率が大幅に改善した事例を紹介。実装方法と効果測定のポイントを解説します。',
    content: '詳細な事例分析がここに入ります。統合の実装方法、効果測定のポイント、導入時の課題と解決策などを詳しく説明します。...',
    authorId: 'tm-003'
  },
  {
    id: 'insight-003',
    title: 'Sky Future、新オフィス開設とチーム拡大を発表',
    titleEn: 'Sky Future Announces New Office Opening and Team Expansion',
    date: '2024-01-05',
    category: 'Company',
    categoryJa: '会社',
    tags: ['会社ニュース', '成長', 'チーム拡大'],
    excerpt: '東京・渋谷に新オフィスを開設し、開発チームを2倍に拡大。より多くの企業にデジタルソリューションを提供できる体制を整えました。',
    content: '新オフィスの詳細、チーム拡大の背景、今後の事業展開について詳しく説明します。...',
    authorId: 'tm-004'
  },
  {
    id: 'insight-004',
    title: 'Next.js 14とApp Routerで実現する高速ウェブサイト構築',
    titleEn: 'Building High-Performance Websites with Next.js 14 and App Router',
    date: '2023-12-20',
    category: 'AI',
    categoryJa: '技術',
    tags: ['Next.js', 'フロントエンド', 'パフォーマンス', 'React'],
    excerpt: 'Next.js 14の新機能を活用したモダンなウェブサイト開発のベストプラクティスを解説。パフォーマンスと開発効率の両立を実現する方法を紹介します。',
    content: '技術的な詳細がここに入ります。Next.js 14の新機能、App Routerの使い方、パフォーマンス最適化のテクニックなどを詳しく説明します。...',
    authorId: 'tm-004'
  },
  {
    id: 'insight-005',
    title: '中小企業のデジタル化：コスト効率の良いウェブサイト構築戦略',
    titleEn: 'SME Digitalization: Cost-Effective Website Building Strategy',
    date: '2023-12-15',
    category: 'Company',
    categoryJa: '業界動向',
    tags: ['中小企業', 'デジタル化', 'コスト効率', '戦略'],
    excerpt: '限られた予算で最大の効果を生み出す、中小企業向けウェブサイト構築の実践的なアプローチを提案。ROIを最大化するための具体的な戦略を解説します。',
    content: '戦略の詳細がここに入ります。予算配分、優先順位の付け方、段階的な導入方法などを詳しく説明します。...',
    authorId: 'tm-002'
  },
  {
    id: 'insight-006',
    title: 'AI Copilot導入事例：顧客対応時間を50%短縮',
    titleEn: 'AI Copilot Implementation Case: 50% Reduction in Customer Response Time',
    date: '2023-12-10',
    category: 'AI',
    categoryJa: 'AI',
    tags: ['AI', '顧客対応', '自動化', 'Copilot'],
    excerpt: '製造業のB社がAI Copilotを導入し、顧客問い合わせへの対応時間を大幅に短縮。従業員の満足度も向上した事例を紹介。導入プロセスと効果測定の方法を解説します。',
    content: '導入事例の詳細がここに入ります。導入の背景、実装プロセス、効果測定の方法、課題と解決策などを詳しく説明します。...',
    authorId: 'tm-002'
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
    ]
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
  ceoMessage: {
    title: '代表挨拶',
    titleEn: 'CEO Message',
    content: `はじめまして、Sky Future株式会社の代表取締役を務めております。

私たちは、Microsoft Dynamics 365とAI技術を活用したデジタルソリューションを通じて、企業のビジネス変革を支援してまいりました。10年以上のエンタープライズソリューション開発経験と、100社以上の大企業へのD365導入実績を基に、お客様の課題解決に最適なソリューションを提供いたします。

デジタル変革の時代において、テクノロジーは単なるツールではなく、ビジネスの成長を加速させる重要な要素となっています。私たちは、最新のテクノロジーと豊富な実績を組み合わせることで、お客様の成功を支援してまいります。

今後とも、Sky Future株式会社をどうぞよろしくお願いいたします。`,
    ceoName: '代表取締役 CEO / CTO',
    date: '2024年1月'
  },
  address: {
    headquarters: {
      name: '本社',
      address: '〒150-0001 東京都渋谷区神宮前1-1-1',
      addressEn: '1-1-1 Jingumae, Shibuya-ku, Tokyo 150-0001, Japan',
      phone: '+81-3-1234-5678',
      email: 'info@sky-future.com'
    }
  },
  certifications: [
    { name: 'Microsoft Gold Partner', description: 'Microsoft Dynamics 365 認定パートナー' },
    { name: 'ISO 27001', description: '情報セキュリティマネジメントシステム認証' },
    { name: 'ISO 9001', description: '品質マネジメントシステム認証' }
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
        description: 'Microsoft Dynamics 365の導入・コンサルティング業務',
        requirements: ['Microsoft Dynamics 365認定資格', '3年以上のERP導入経験']
      },
      {
        id: 'recruit-002',
        title: 'ソフトウェアエンジニア',
        department: '開発事業部',
        type: '正社員',
        description: 'uTRON開発・システム開発業務',
        requirements: ['C# / .NET開発経験', 'データベース設計経験']
      }
    ]
  }
};

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
  getPackageById,
  getTeamMemberById,
  getServiceById,
  getCaseById,
  getInsightsByCategory,
  getInsightsByAuthor,
  getInsightsByTag,
  getCasesByIndustry
};
