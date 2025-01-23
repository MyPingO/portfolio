import React from "react";
import { Box, BoxProps, Heading } from "@chakra-ui/react";
import "../assets/css/DividedBannerRight.css";

interface DividedBannerProps extends BoxProps {
  slantSize?: string; // Optional custom prop for slant size
  backgrounds: string[]; // Background images for the divisions
  bgColor: string; // Background color for the banner
  heading?: string; // Optional heading for the banner
  imageSide?: "left" | "right"; // Optional prop to set the image side
}

/**
 * DividedBannerRight Component
 * Uses CSS variables for dynamic slant sizes.
 */
export const DividedBannerRight: React.FC<DividedBannerProps> = ({
  slantSize = "50px",
  backgrounds = [],
  bgColor = "white",
  heading = null,
  imageSide = "left",
  ...props
}) => {


  return (
    <Box
      className="divided-banner-right"
      style={{ "--s": slantSize } as React.CSSProperties} // Set the CSS variable dynamically
      bg={`linear-gradient(to left, ${bgColor} 10%, rgb(255, 255, 255) 50%, ${bgColor})`}
      mx={"4"}
      {...props}
    >
      {heading && imageSide == 'left' && <Heading>{heading}</Heading>}
      {backgrounds.map((background, index) => {
        const isFirst = index === 0;
        const isLast = index === backgrounds.length - 1;

        return (
          <div
            key={index}
            className={`banner-image-right ${isFirst && imageSide == 'right' ? "first" : ""} ${isLast && imageSide == 'left' ? "last" : ""}`}
            style={{ backgroundImage: `url(${background})` }}
            tabIndex={0}
          />
        );
      })}
      {heading && imageSide == 'right' && <Heading>{heading}</Heading>}
    </Box>
  );
};

export default DividedBannerRight;
