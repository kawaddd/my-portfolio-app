export type Project = {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  featured: boolean;
  status: "completed" | "in-progress" | "concept";
  year: string;
  /** 完成後に差し替える制作物のスクリーンショット（/public/ 以下のパスを指定） */
  image?: string;
  /** 公開URL（あれば） */
  url?: string;
  /** 作成時間（あれば） */
  duration?: string;
  /** ログイン情報（あれば） */
  loginInfo?: { email: string; password: string };
};

export const projects: Project[] = [
  {
    id: "faq-chatbot",
    title: "ECサイト向け FAQチャットボット",
    titleEn: "FAQ Chatbot for E-Commerce",
    category: "AI / Automation",
    tags: ["Dify", "ChatGPT API", "Notion", "Slack", "チャットボット", "業務自動化"],
    description:
      "月間約3,000件の問い合わせをAIチャットボットで自動化。24時間365日対応・オペレーター体制の最適化を実現。",
    challenge:
      "問い合わせ件数増加により月間約3,000件の電話・メール対応が発生し、3名体制では限界に。問い合わせの約75%が定型質問で非効率、営業時間外の対応不可による機会損失も発生。品質のばらつき・属人化・人件費増加が運用課題となっていた。",
    solution:
      "DifyでFAQチャットボットを構築し、ECサイトに埋め込み自動応答を実装。ナレッジベース検索＋生成AIで回答し、困難な質問はSlackへ自動エスカレーション。未解決質問をNotionに蓄積し、継続学習できる運用フローを設計。",
    outcome:
      "定型問い合わせの大部分を自動化し、24時間365日の対応を実現。オペレーター体制を3名→1名へ最適化し、人件費削減に貢献。回答精度80%以上・自動解決率80%以上を目標とした運用を構築。",
    featured: true,
    status: "completed",
    year: "2026年1月",
    image: "/works/faq-chatbot.png",
    duration: "15時間程度",
  },
  {
    id: "love-advisor-ai",
    title: "恋愛診断AIチャットボット",
    titleEn: "Love Advisor AI Chatbot",
    category: "AI / Automation",
    tags: ["Dify", "ChatGPT API", "RAG", "Python", "Jinja2", "状態管理", "チャットボット"],
    description:
      "状態管理型設計で文脈を踏まえた高精度な恋愛診断を実現。暫定診断→完全診断の段階設計でUXと精度を両立。",
    challenge:
      "恋愛相談系チャットボットは単発回答型が多く、文脈を踏まえた精度の高い分析が困難。曖昧な情報のまま診断を行うケースが多く、推測ベースの回答による信頼性低下が課題。相談内容が多様化する中で一貫性のある判断や戦略提示が難しく、UXと精度の両立が求められていた。",
    solution:
      "状態管理型（stateful）設計を採用し、相談カテゴリ（Goal）ごとに変数を管理する診断エンジンを構築。不足変数を段階的に補完する追加質問フローを設計し、精度を担保した上で診断を生成。RAG（ナレッジ参照）と戦略アドバイスを分離した構造により、一貫性と実用性を両立。",
    outcome:
      "文脈を踏まえた一貫性のある診断と具体的な戦略提示を実現。暫定診断→完全診断の段階設計により、UXを維持しながら診断精度を向上。状態管理型構造により、拡張性・再利用性の高い診断基盤を構築。",
    featured: true,
    status: "completed",
    year: "2026年2月",
    image: "/works/love-advisor.png",
    url: "https://udify.app/chat/UWCDRLwY7eYFuPEr",
    duration: "30時間程度",
  },
  {
    id: "mental-support-bot",
    title: "こころの相談チャットボット",
    titleEn: "Mental Health Support Chatbot",
    category: "AI / Automation",
    tags: ["Dify", "ChatGPT API", "RAG", "Python", "Jinja2", "Slack通知", "状態管理"],
    description:
      "匿名で気軽に相談できるメンタルサポートAI。危険シグナル検知ロジックと相談窓口へのエスカレーションUXを実装。",
    challenge:
      "心の不調を抱える人が気軽に相談できる場は少なく、匿名で話せる手段があっても適切な支援につながらないケースが多い。一般的なAIチャットボットは表面的な共感に留まりやすく、危険な心理状態の検知や相談窓口への誘導など、安全面と実用性の両立が課題だった。",
    solution:
      "RAG（ナレッジ参照＋LLM）を用いて回答精度と一貫性を向上させ、ユーザーの入力文脈を踏まえた支援を実現。加えて危険シグナル検知ロジックを設計し、状態に応じて電話相談へエスカレーションするUXを構築した。",
    outcome:
      "日常的な悩み相談から危機対応まで一貫した支援を提供できるチャットボットを実装。危険状態では自動的に相談導線へ接続し、安全性を担保。ナレッジ参照による回答品質の安定化と、寄り添い型トーン設計によりUXと実用性を両立した。",
    featured: true,
    status: "completed",
    year: "2026年2月",
    image: "/works/mental-support-bot.png",
    url: "https://udify.app/chat/jwumz3Vm4pBykPkt",
    duration: "5時間程度",
  },
  {
    id: "ai-secretary-app",
    title: "AI秘書アプリ",
    titleEn: "AI Secretary App",
    category: "Web Development",
    tags: ["Claude Code", "Next.js", "TypeScript", "Supabase", "OpenAI", "Perplexity", "AssemblyAI", "Google Calendar API", "Tailwind CSS"],
    description:
      "タスク・カレンダー・文章校正・議事録・リサーチの5つの機能を1つのアプリで一元管理。",
    challenge:
      "ビジネスパーソンは複数のツール（タスク管理・カレンダー・文章作成・情報収集）を行き来する必要があり、AIによる統合的な秘書支援を提供するプロダクトがほぼ存在しない。",
    solution:
      "OpenAI・Perplexity・AssemblyAI・Google Calendar APIを一つのダッシュボードに統合し、タスク管理・音声議事録自動生成・文章校正・Webリサーチを単一UIで完結できる仕組みを設計・実装。",
    outcome:
      "Next.js App Router + Supabaseを基盤に認証・DB・AI連携を実装。Apple HIGダークテーマのUIで全5機能をダッシュボードから操作できる状態まで構築完了。",
    featured: true,
    status: "completed",
    year: "2026年3月",
    image: "/works/ai-secretary.png",
    url: "https://ai-secretary-app-nu.vercel.app/",
    duration: "10時間程度",
  },
  {
    id: "dental-patient-management",
    title: "歯科医院向け患者管理システム",
    titleEn: "Dental Patient Management System",
    category: "Web Development",
    tags: ["Claude Code", "PHP", "Laravel", "Tailwind CSS", "Alpine.js", "SQLite", "PostgreSQL", "Docker", "GitHub"],
    description:
      "既存の予約管理システムから出力されたCSVデータを取り込み、患者情報の検索・閲覧を効率化する歯科医院向け管理アプリ。",
    challenge:
      "既存システムと紙運用が混在し、治療部位ごとの経過など複雑な診療履歴を効率的に管理・検索できていない状況だった。その結果、必要な情報へのアクセスに時間がかかり、ドクターの業務効率を阻害していた。",
    solution:
      "既存システムから出力されたCSVデータのインポート機能を実装し、患者・予約情報を一元管理。患者ID・医院・治療内容・治療部位など複数条件での検索機能と、診療履歴の時系列表示を構築した。また、CSV取り込み時はエラー行のみをスキップし内容を明示することで、業務を止めない運用を前提とした設計とした。",
    outcome:
      "CSVインポートから検索・履歴閲覧までを一つのUIで完結させ、患者情報へのアクセス効率を向上。非同期検索とフィルター状態の可視化により、ドクターが迷わず操作できる直感的なUXを実現した。さらに、エラー耐性のあるインポート設計により、データ不備があっても業務を止めない実用的なシステムを構築した。",
    featured: true,
    status: "completed",
    year: "2026年3月",
    image: "/works/gazou.png",
    url: "https://dental-patient-management.onrender.com/",
    duration: "10時間程度",
    loginInfo: { email: "dev@example.com", password: "password123" },
  },
];
