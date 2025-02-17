import React, { useState, useEffect } from 'react';

// Custom hook to get the current window width
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}

export const Projects = () => {
  const width = useWindowWidth();
  const isMobile = width < 600; // Adjust threshold as needed

  if (isMobile) {
    // Mobile: one column layout (all cards stacked vertically)
    return (
      <>
        <h3 className="mini-header-mobile">projects</h3>
        <hr className="thick-hr" />
        <div className="scrollable" style={containerStyleMobile}>
          <Card 
            imageSrc={"project-1.png"}
            title={"Project 1"}
            link={"/#/project-1"}
            description={"Project 1 Description"}
          />
          <Card 
            imageSrc={"project-2.png"}
            title={"Project 2"}
            link={"/#/project-2"}
            description={"Project 2 Description"}
          />
          <Card 
            imageSrc={"project-3.png"}
            title={"Project 3"}
            link={"/#/project-3"}
            description={"Project 3 Description"}
          />
          <Card 
            imageSrc={"project-4.png"}
            title={"Project 4"}
            link={"/#/project-4"}
            description={"Project 4 Description"}
          />
          <Card 
            imageSrc={"project-5.png"}
            title={"Project 5"}
            link={"/#/project-5"}
            description={"Project 5 Description"}
          />
          <Card 
            imageSrc={"project-6.png"}
            title={"Project 6"}
            link={"/#/project-6"}
            description={"Project 6 Description"}
          />
        </div>
      </>
    );
  }

  // Desktop: three column layout
  return (
    <>
      <h3 className="mini-header">projects</h3>
      <hr className="thick-hr" />
      <div className="scrollable" style={containerStyle}>
        <div style={columnStyle}>
          <Card 
            imageSrc={"project-1.png"}
            title={"Project 1"}
            link={"/#/project-1"}
            description={"Project 1 Description"}
          />
          <Card 
            imageSrc={"project-4.png"}
            title={"Project 4"}
            link={"/#/project-4"}
            description={"Project 4 Description"}
          />
        </div>

        <div style={columnStyle}>
          <Card 
            imageSrc={"project-2.png"}
            title={"Project 2"}
            link={"/#/project-2"}
            description={"Project 2 Description"}
          />
          <Card 
            imageSrc={"project-5.png"}
            title={"Project 5"}
            link={"/#/project-5"}
            description={"Project 5 Description"}
          />
        </div>

        <div style={columnStyle}>
          <Card 
            imageSrc={"project-3.png"}
            title={"Project 3"}
            link={"/#/project-3"}
            description={"Project 3 Description"}
          />
          <Card 
            imageSrc={"project-6.png"}
            title={"Project 6"}
            link={"/#/project-6"}
            description={"Project 6 Description"}
          />
        </div>
      </div>
    </>
  );
};

const Card = ({ imageSrc, title, link, description }) => {
  return (
    <div style={cardStyle}>
      <img src={imageSrc} alt={title} style={imageStyle} />
      <div style={detailsStyle}>
        {link && <h3 style={titleStyle}><a href={link}>{title}</a></h3>}
        {!link && <h3 style={titleStyle}>{title}</h3>}
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
};

const cardStyle = {
  width: '100%', // Each card fills the width of its container
};

const imageStyle = {
  width: '100%',
  display: 'block',
};

const detailsStyle = {
  padding: '4px',
};

const titleStyle = {
  margin: 0,
  fontSize: '1.25em',
  marginBottom: 0
};

const descriptionStyle = {
  fontSize: '0.95em',
  color: '#555',
  marginTop: 0
};

// Desktop container: three columns arranged in a row,
// with vertical scrolling if needed (60% height of parent)
const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
  height: '60%',
  // overflowY: 'auto',  // Uncomment if you want vertical scrolling on desktop container
  overflowX: 'hidden',
};

// Mobile container: one column layout (all cards in a single column)
const containerStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  height: '60%',
  // overflowY: 'auto',  // Uncomment if you want vertical scrolling on mobile container
  overflowX: 'hidden',
};

// Each column for desktop: stacks its cards vertically
const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  flex: 1,
};
