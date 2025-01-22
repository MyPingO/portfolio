import React from "react";
import { Box, BoxProps, Heading } from "@chakra-ui/react";
import "../assets/css/DividedBanner.css";

interface DividedBannerProps extends BoxProps {
  slantSize?: string; // Optional custom prop for slant size
  backgrounds: string[]; // Background images for the divisions
  bgColor: string; // Background color for the banner
  heading?: string; // Optional heading for the banner
}

/**
 * DividedBanner Component
 * Uses CSS variables for dynamic slant sizes.
 */
export const DividedBanner: React.FC<DividedBannerProps> = ({
  slantSize = "50px",
  backgrounds = [],
  bgColor = "white",
  heading = null,
  ...props
}) => {


  return (
    <Box
      className="divided-banner"
      style={{ "--s": slantSize } as React.CSSProperties} // Set the CSS variable dynamically
      bg={`linear-gradient(to right, ${bgColor} 10%, rgb(255, 255, 255) 50%, ${bgColor})`}
      mx={"4"}
      {...props}
    >
      {heading && <Heading>{heading}</Heading>}
      {backgrounds.map((background, index) => {
        const isFirst = index === 0 && heading != null;
        const isLast = index === backgrounds.length - 1 && heading != null;

        return (
          <div
            key={index}
            className={`banner-image ${isFirst ? "" : ""} ${isLast ? "" : ""}`}
            style={{ backgroundImage: `url(${background})` }}
          />
        );
      })}
    </Box>
  );
};

export default DividedBanner;
