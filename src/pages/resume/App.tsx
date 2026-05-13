/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopNavBar } from "./components/layout/TopNavBar";
import { SideNavBar } from "./components/layout/SideNavBar";
import { Hero } from "./components/sections/Hero";
import { Summary } from "./components/sections/Summary";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Languages } from "./components/sections/Languages";
import { Footer } from "./components/layout/Footer";
import { Reveal } from "../portfolio/components/ui/Reveal";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30">
      <TopNavBar />
      <SideNavBar />
      <main className="lg:ml-64 pt-24 px-6 md:px-12 pb-20 max-w-6xl mx-auto">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={0.1}>
          <Summary />
        </Reveal>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-7 space-y-12">
            <Reveal delay={0.2}>
              <Experience />
            </Reveal>
            <Reveal delay={0.3}>
              <Projects />
            </Reveal>
          </div>

          <div className="xl:col-span-5 space-y-12">
            <Reveal delay={0.4}>
              <Skills />
            </Reveal>
            <Reveal delay={0.5}>
              <Education />
            </Reveal>
            <Reveal delay={0.6}>
              <Languages />
            </Reveal>
          </div>
        </div>
      </main>

      <Reveal delay={0.7}>
        <Footer />
      </Reveal>
    </div>
  );
}
