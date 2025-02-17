import { ProjectPage } from "../components/ProjectPage";
import React, { useState, useEffect } from 'react';

// Custom hook to track window width.
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return width;
}

export const ProjectOne = () => {
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth < 600;

    const title = "detranscend"
    const location = isMobile ? "isu" : "iowa state university"
    const instructor = "cameron"
    const course = "arch 000"
    const date = "fall 2024"
    const description = "Testing 123. Korb be wearing durags n stuff like dat type beat ordering some canes."
    const teamMembers = [
        "Steven",
        "Nathan",
        "Kalen",
    ]
    const imageList = [
        "project-1.png",
        "project-2.png",
        "project-3.png",
        "project-4.png",
        "project-5.png",
        "project-6.png",
    ]

    return <ProjectPage 
        title={title}
        location={location}
        instructor={instructor}
        description={description}
        course={course}
        date={date}
        teamMembers={teamMembers}
        imageList={imageList}
    />
}