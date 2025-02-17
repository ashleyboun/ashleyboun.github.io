import React, { useState } from "react";
import DecorativeHeader from "./DecorativeHeader";

const HeaderWithBackArrow = ({ leftText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const headerText = isHovered ? <a href="/">back to home</a> : leftText

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
      }}
    >

      {/* Container for the header with slide effect */}
      <div
        style={{
          transition: "transform 0.3s ease",
          transform: isHovered ? "translateX(-20px)" : "translateX(0)",
        }}
      >
        <DecorativeHeader leftText={headerText} />
      </div>
    </div>
  );
};

export default HeaderWithBackArrow;
