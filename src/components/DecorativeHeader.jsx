// DecorativeHeader.js
import React from 'react';

export const DecorativeHeader = ({ 
  leftText, 
  leftTopText, 
  leftBottomText, 
  centerText, 
  rightText,
  rightTopText,
  rightBottomText
}) => {
  const headerStyle = {
    width: '100%',
    marginTop: "4vh",
    height: '100px', // Adjust as needed
    position: 'relative', // Establish positioning context
  };

  // Left text aligned with left column (20px from the left edge)
  const leftTextStyle = {
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2.5vw',
    fontFamily: "Urbanist",
    lineHeight: '1.2',
    textAlign: "left",
    whiteSpace: 'nowrap',
  };

  // Center text remains centered
  const centerTextStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2vw',
    textAlign: "center",
  };

  // Right text aligned with right column's content area.
  // The right column starts at 40% of the container width, and its content is padded 20px.
  const rightTextStyle = {
    position: 'absolute',
    left: 'calc(40% + 28px)',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2vw',
    fontFamily: "Urbanist",
    textAlign: "left", // Use left alignment to match the right column content
  };

  const topRowStyle = {
    // fontSize: '3.5vw',
    margin: 0,
    marginTop: "20px",
    lineHeight: 1.2,
  };

  const bottomRowStyle = {
    fontSize: '1.5vw',
    margin: 0,
    lineHeight: 1.2,
  };

  return (
    <header style={headerStyle}>
      {leftText && (
        <div style={leftTextStyle}>
          <strong>{leftText}</strong>
        </div>
      )}
      {!leftText && leftTopText && leftBottomText && (
        <div style={leftTextStyle}>
          <p style={topRowStyle}><strong>{leftTopText}</strong></p>
          <p style={bottomRowStyle}><strong>{leftBottomText}</strong></p>
        </div>
      )}
      {centerText && <div style={centerTextStyle}>{centerText}</div>}
      {rightText && (
        <div style={rightTextStyle}>
          <strong>{rightText}</strong>
        </div>
      )}
      {!rightText && rightTopText && rightBottomText && (
        <div style={rightTextStyle}>
          <p style={topRowStyle}>{rightTopText}</p>
          <p style={bottomRowStyle}><i>{rightBottomText}</i></p>
        </div>
      )}
    </header>
  );
};

export default DecorativeHeader;
