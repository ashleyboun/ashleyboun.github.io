import React, { useState, useEffect } from "react";
import DecorativeHeader from "./DecorativeHeader";
import HeaderWithBackArrow from "./HeaderWithBackNav";
import { ProjectPageLeft } from "./ProjectPgLeftCol";
import TwoColumnLayout from "./TwoColumnLayout";

export const ProjectPage = ({
  title,
  location,
  instructor,
  course,
  date,
  teamMembers,
  description,
  imageList,
}) => {
  // State to track the currently focused image
  const [focusedImage, setFocusedImage] = useState(null);

  // Optional: set a default focused image (e.g., the first in the list)
  useEffect(() => {
    if (imageList && imageList.length > 0) {
      setFocusedImage(imageList[0]);
    }
  }, [imageList]);

  // Callback to handle image clicks from the left column
  const handleImageClick = (image) => {
    setFocusedImage(image);
  };

  return (
    <div
      style={{
        height: "97vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: 0,
        marginTop: 0,
      }}
    >
      <div style={{ marginTop: "-45px" }}>
        <HeaderWithBackArrow leftText={title} />
      </div>
      <TwoColumnLayout
        leftContent={
          <ProjectPageLeft
            instructor={instructor}
            location={location}
            course={course}
            date={date}
            teamMembers={teamMembers}
            description={description}
            imageList={imageList}
            onImageClick={handleImageClick} // Passing the callback here
          />
        }
        rightContent={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {focusedImage ? (
              <img
                src={focusedImage}
                alt="Focused"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <p>Select an image to view</p>
            )}
          </div>
        }
      />
    </div>
  );
};
