export type ExperienceItem = {
  id: string;
  year: string;
  title: string;
  description: string;
  tags?: string[];
  type: "work" | "learning" | "milestone" | "future";
};

export const experiences: ExperienceItem[] = [
  {
    id: "consulting-sales",
    year: "2021",
    title: "新卒でコンサル営業としてキャリアスタート",
    description:
      "個人事業主・法人向けのコンサルティング営業に従事。顧客の課題を深く聞き、最適な提案を形にする「問題発見→解決設計」の思考プロセスをここで身につけた。",
    tags: ["コンサルティング", "営業", "課題解決思考"],
    type: "work",
  },
  {
    id: "programming-school",
    year: "2022",
    title: "本業と両立しプログラミングを独学・スクールで学習開始",
    description:
      "「作れば変えられる」という確信のもと、本業と並行してプログラミングスクールに通い始める。ホームページ・ECサイト・レビューサイトなどを実際に開発し、コードが動く感動を実体験。",
    tags: ["HTML", "CSS", "Ruby", "独学", "スクール"],
    type: "learning",
  },
  {
    id: "web-company",
    year: "2023〜2025",
    title: "Web開発企業に転職。実務でシステム開発に一貫して携わる",
    description:
      "Web開発専業の企業に転職し、設計・実装・各種テストまでを一貫して担当。PHP / Vue.js / SQL を主力にAWSインフラも経験。複数のAWS資格を取得し、クラウド設計力も習得。",
    tags: ["PHP", "Vue.js", "SQL", "MySQL", "PostgreSQL", "AWS", "システム設計", "テスト"],
    type: "work",
  },
  {
    id: "ai-start",
    year: "2026年 1月",
    title: "AI活用・自動化・AIアプリ開発を本格始動",
    description:
      "Make / Dify を使った業務効率化・自動化フローを構築。Claude Code を軸にAIと協働する開発スタイルを確立し、このポートフォリオサイトもAIを最大活用して設計・実装した。",
    tags: ["Make", "Dify", "Claude Code", "AI活用", "業務自動化"],
    type: "milestone",
  },
  {
    id: "java-project",
    year: "2026年 3月〜",
    title: "スキル幅拡大のためJava案件に移行（現在）",
    description:
      "エンジニアとしての市場価値をさらに高めるため、Java案件に移行。AI × 幅広い言語対応 × 設計力の三軸を揃えた人材として成長中。",
    tags: ["Java", "Oracle", "スキル拡張", "市場価値向上"],
    type: "work",
  },
  {
    id: "future",
    year: "Next",
    title: "AI × 開発 × 設計力で、さらに幅を広げていく",
    description:
      "AIで加速し、設計で差別化し、コードで具現化する。その循環を誰よりも速く回せるエンジニアとして、価値を届けられる場を模索していく。",
    tags: ["スキル拡張", "AI×開発", "市場価値向上"],
    type: "future",
  },
];
