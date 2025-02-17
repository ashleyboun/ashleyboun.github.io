// ImageCard.js
import React from 'react';

const ImageCard = ({ imageUrl, altText }) => {
  // Container to center the card both vertically and horizontally
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh', // Full viewport height
    minWidth: '60vw',
    backgroundColor: '#f5f5f5', // Optional background color for contrast
  };

  // Card styling
  const cardStyle = {
    width: '100%', // Adjust as needed
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
  };

  // Image styling
  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={imageUrl} alt={altText} style={imageStyle} />
      </div>
    </div>
  );
};

export default ImageCard;
