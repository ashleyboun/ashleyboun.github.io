import React, { useState, useEffect } from 'react';

// Custom hook to track the current window width
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const TwoColumnLayout = ({ leftContent, rightContent, addTopMargin }) => {
  const width = useWindowWidth();
  const isMobile = width < 600; // Adjust the breakpoint as needed

    const containerStyle = addTopMargin ? {
        display: 'flex',
        marginTop: isMobile ? "10vh" : "20vh",
        flex: 1
    } : {
        display: 'flex',
        marginTop: 0,
        flex: 1
    }

    const leftColumnStyle = {
        width: '40%',          // 40% width
        padding: '20px',
    };

    const middleGap = {
        width: '0%', 
    };

    const rightColumnStyle = {
        width: '60%',          // 60% width
        padding: '20px',
    };

    return (
        <div style={containerStyle}>
        <div style={leftColumnStyle}>
            {leftContent}
        </div>
        <div style={middleGap}></div>
        <div style={rightColumnStyle}>
            {rightContent}
        </div>
        </div>
    );
};

export default TwoColumnLayout;
