import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { Skills } from "@/src/components/sections/Skills";
import { Works } from "@/src/components/sections/Works";
import { Process } from "@/src/components/sections/Process";
import { Experience } from "@/src/components/sections/Experience";
import { Vision } from "@/src/components/sections/Vision";
import { Contact } from "@/src/components/sections/Contact";
import { InlineCta } from "@/src/components/ui/InlineCta";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* 1. ファーストビュー */}
        <Hero />

        {/* 2. 自己紹介・価値観 */}
        <About />

        {/* 3. スキルセット */}
        <Skills />

        {/* 4. 実績・制作物 */}
        <Works />

        {/* Works後のソフトCTA — 興味を持った人への自然な導線 */}
        <InlineCta
          heading="実績を見て、気になった方へ"
          body="「うちの課題に使えるかも」「こういうこともできる?」— 具体的でなくても大丈夫です。話を聞くだけでもOKです。"
          buttonLabel="気軽に相談してみる"
          targetId="#contact"
        />

        {/* 5. 進め方・思考プロセス */}
        <Process />

        {/* 6. 学習・成長の軌跡 */}
        <Experience />

        {/* 7. ビジョン */}
        <Vision />

        {/* 8. お問い合わせ */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
