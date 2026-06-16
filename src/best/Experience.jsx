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
        An architecture graduate with a construction foundation in detailing,
        estimating, and documentation — bringing an eye for design and an
        understanding of how it meets the ground.
      </p>

      <ExperienceSection title="work" kind="work" />
      <ExperienceSection title="leadership" kind="leadership" />
      <ExperienceSection title="honors" kind="honors" />
      <SkillsBlock />
    </>
  );
};

export default Experience;
