import React from 'react';
import { About } from "./About";
import { Contact } from "./Contact";

export const HomeLeftCol = () => {
  return (
    <div className="scrollable" style={containerStyle}>
      <About />
      {/* <Contact /> */}
    </div>
  );
};

const containerStyle = {
  width: '100%',           // Container scales to full width
  height: '100vh',         // Uses the full viewport height; adjust if needed
  overflowY: 'auto',       // Enables vertical scrolling when content overflows
//   padding: '15px',
//   boxSizing: 'border-box'  // Ensures padding is included in the total width/height
};
