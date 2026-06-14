import { useState } from "react";
import { Contact } from "../components/Contact";
import { TagFilter } from "../components/TagFilter";
import { ProjectGrid } from "../components/ProjectGrid";
import { projects } from "../data/projects";

export const Home = () => {
  const [active, setActive] = useState("all");

  const years = projects.map((p) => p.year);
  const span = years.length
    ? `${Math.min(...years)}–${Math.max(...years)}`
    : "";

  return (
    <>
      <header className="site-header">
        <div className="brand">
          ashley boun <span className="slash">/designer</span>
        </div>
        <div className="meta">
          <div>selected works [{span}]</div>
          <div>
            <a href="/#/experience">experience →</a>
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </header>

      <p className="site-intro">
        Architecture graduate, Iowa State University (2024). Selected studio,
        urban, and competition work — filter the index by type below.
      </p>

      <TagFilter active={active} onChange={setActive} />
      <ProjectGrid active={active} />
    </>
  );
};
