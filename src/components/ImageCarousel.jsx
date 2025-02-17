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

const ImageCarousel = ({ images, onImageClick }) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 600;
  const totalImages = images.length;
  
  // Desktop state (used only when not mobile).
  const [startIndex, setStartIndex] = useState(0);

  // Desktop-specific logic: show 3 images and use navigation arrows.
  const imagesToShow = 3;
  const getDisplayedImages = () => {
    const displayed = [];
    for (let i = 0; i < imagesToShow; i++) {
      displayed.push(images[(startIndex + i) % totalImages]);
    }
    return displayed;
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Common image style.
  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    cursor: "pointer",
  };

  if (isMobile) {
    // Mobile view: horizontally scrollable container with one image per view.
    const mobileContainerStyle = {
      display: 'flex',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      gap: '10px',
    };

    const mobileImageContainerStyle = {
      flex: '0 0 100%',       // Each image takes up full width.
      scrollSnapAlign: 'start',
      position: 'relative',
      aspectRatio: '1',
      overflow: 'hidden',
      background: '#eee',
    };

    return (
      <>
        {/* CSS to hide the scrollbar across browsers */}
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}
        </style>
        <div className="hide-scrollbar" style={mobileContainerStyle}>
          {images.map((src, idx) => (
            <div key={idx} style={mobileImageContainerStyle}>
                <img 
                    src={src} 
                    alt={`Carousel ${idx + 1}`} 
                    style={imageStyle}
                    onClick={() => onImageClick(src)}
                />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    // Desktop view: navigation arrows with 3 images shown.
    const carouselWrapperStyle = {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    };

    const arrowButtonStyle = {
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      padding: '0 10px',
      userSelect: 'none',
      fontFamily: 'Manrope',
    };

    const imagesWrapperStyle = {
      flex: '1',
      display: 'flex',
      gap: '10px',
    };

    const imageContainerStyle = {
      flex: '1',
      position: 'relative',
      aspectRatio: '1',
      overflow: 'hidden',
      background: '#eee',
    };

    return (
      <div style={carouselWrapperStyle}>
        <button style={arrowButtonStyle} onClick={handlePrev}>
          {'<'}
        </button>
        <div style={imagesWrapperStyle}>
          {getDisplayedImages().map((src, idx) => (
            <div key={idx} style={imageContainerStyle}>
              <img 
                src={src} 
                alt={`Carousel ${startIndex + idx + 1}`} 
                style={imageStyle} 
                onClick={() => onImageClick(src)}
              />
            </div>
          ))}
        </div>
        <button style={arrowButtonStyle} onClick={handleNext}>
          {'>'}
        </button>
      </div>
    );
  }
};

export default ImageCarousel;
