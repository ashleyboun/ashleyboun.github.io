import { Contact } from "../components/Contact";
import { ExperienceSection } from "../components/ExperienceList";
import { SkillsBlock } from "../components/SkillsBlock";

export const Experience = () => {
  return (
    <>
      <header className="site-header">
        <div className="brand">
          ashley boun <span className="slash">/designer</span>
        </div>
        <div className="meta">
          <div>
            <a href="/#/">← selected works</a>
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </header>

      <p className="site-intro">
        Experience beyond the portfolio — work, leadership, and the tools I build with.
      </p>

      <ExperienceSection title="work" kind="work" />
      <ExperienceSection title="leadership" kind="leadership" />
      <SkillsBlock />
    </>
  );
};

export default Experience;
