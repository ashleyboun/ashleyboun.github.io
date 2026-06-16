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
        {/* Architecture graduate, Iowa State University (2024). */}
        Architecture Graduate of Iowa State University Class of 2024, 
        currently seeking opportunities to evolve and grow as a designer.
      </p>
      <p className="site-intro">The curated selection of projects highlights design as a
        versatile tool applied across a variety of contexts, ranging
        from complete, real-world projects to conceptual and exploratory designs.</p>

      <TagFilter active={active} onChange={setActive} />
      <ProjectGrid active={active} />
    </>
  );
};
