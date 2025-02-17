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

export const About = () => {
    const width = useWindowWidth();
    const isMobile = width < 600; // Adjust the breakpoint as needed
    
    const content = (
        <>
            <p>
                I graduated from Iowa State University in 2024 with a degree in Architecture. 
                I also like buildings. Yap yap yap. I have a big squishmallow family and their names are:
                jeffy, jammie, jj, juyo, juni, jennie, jia, jane, jeremy, jupi, jose, joy, jin,
                jasper, juki, butter, wagyu, jujube, and jay.
            </p>
        </>
    )

    if (isMobile) {
        return <MobileAbout content={content}/>
    }

    return (
        <StandardAbout content={content}/>
    )
};

const MobileAbout = ({ content }) => {
    return (
        <>
            <h3 className="mini-header-mobile">about</h3>
            <hr className="thick-hr" />
            {content}
        </>
    )
}

const StandardAbout = ({ content }) => {
    return (
        <>
            <h3 className="mini-header">about</h3>
            <hr className="thick-hr" />
            {content}
        </>
    )
}