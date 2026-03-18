export type Skill = {
  name: string;
  level?: number; // 0–100 (資格カテゴリでは省略可)
  note?: string;
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: string;
  color: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "バックエンド / DB",
    icon: "Server",
    color: "#818CF8",
    skills: [
      { name: "PHP", level: 90, note: "実務2年以上・設計から実装まで" },
      { name: "Java", level: 70, note: "現在案件で稼働中" },
      { name: "Ruby", level: 60, note: "スクール・独学で習得" },
      { name: "SQL (MySQL / PostgreSQL / Oracle)", level: 80, note: "設計・チューニング・複雑クエリ対応" },
      { name: "Python", level: 50, note: "自動化・スクリプト" },
    ],
  },
  {
    id: "frontend",
    label: "フロントエンド",
    icon: "Monitor",
    color: "#34D399",
    skills: [
      { name: "HTML / CSS", level: 85, note: "実務・スクールで習得" },
      { name: "Vue.js", level: 60, note: "実務2年以上" },
      { name: "JavaScript", level: 65, note: "実務・スクールで習得" },
      { name: "TypeScript", level: 55, note: "学習中・このサイトで実践" },
      { name: "React / Next.js", level: 65, note: "学習中・このサイトで実践" },
      { name: "Tailwind CSS", level: 55, note: "実践で習得" },
    ],
  },
  {
    id: "ai",
    label: "AI / 自動化",
    icon: "Cpu",
    color: "#F472B6",
    skills: [
      { name: "Make (Integromat)", level: 60, note: "業務自動化フロー構築" },
      { name: "Dify", level: 80, note: "AIアプリ開発・ワークフロー設計" },
      { name: "Claude Code / Cursor", level: 85, note: "AI駆動開発を日常的に活用" },
      { name: "ChatGPT / Claude API", level: 75, note: "プロンプト設計・連携実装" },
      { name: "プロンプトエンジニアリング", level: 75 },
    ],
  },
  {
    id: "design",
    label: "設計 / 開発プロセス",
    icon: "Layers",
    color: "#60A5FA",
    skills: [
      { name: "要件定義・業務設計", level: 70, note: "コンサル営業・SE経験を活かした上流設計" },
      { name: "システム設計 (DB / API)", level: 75, note: "実務でのDB設計・REST API設計経験" },
      { name: "UI/UX設計", level: 80, note: "SE視点でユーザー体験を意識した実装" },
      { name: "テスト設計・品質管理", level: 85, note: "単体〜結合テストの設計・実施" },
    ],
  },
  {
    id: "cert",
    label: "保有資格",
    icon: "Award",
    color: "#A78BFA",
    skills: [
      { name: "ITパスポート" },
      { name: "基本情報技術者" },
      { name: "情報セキュリティマネジメント" },
      { name: "AWS Certified Cloud Practitioner", note: "CLF" },
      { name: "AWS Certified Solutions Architect – Associate", note: "SAA" },
      { name: "AWS Certified Developer – Associate", note: "DVA" },
      { name: "AWS Certified SysOps Administrator – Associate", note: "SOA" },
      { name: "販売士2級" },
      { name: "簿記3級" },
      { name: "FP3級" },
    ],
  },
];
