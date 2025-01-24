import React from "react";
import { Box, BoxProps, Heading, Center } from "@chakra-ui/react";
import { useMedia } from 'react-use'
import "../assets/css/DividedBannerLeft.css";

interface DividedBannerProps extends BoxProps {
  slantAmount?: string; // Optional custom prop for amount of slant on each divider
  backgrounds: string[]; // Background images for the divisions
  bgColor: string; // Background color for the banner
  heading?: string; // Optional heading for the banner
  imageSide?: "left" | "right"; // Optional prop to set the image side
}

/**
 * DividedBannerLeft Component
 * Uses CSS variables for dynamic slant sizes.
 */
export const DividedBannerLeft: React.FC<DividedBannerProps> = ({
  slantAmount = "50px",
  backgrounds = [],
  bgColor = "white",
  heading = null,
  imageSide = "left",
  ...props
}) => {
  const isXSmallScreen = useMedia("(max-width: 600px)");
  const isSmallScreen = useMedia("(max-width: 700px)");
  const isMediumScreen = useMedia("(max-width: 800px)");
  const isLargeScreen = useMedia("(max-width: 900px)");
  const hoverWidth = isXSmallScreen ? "25vw" : isSmallScreen ? "20vw" : isMediumScreen ? "20vw" : isLargeScreen ? "15vw" : "7vw";

  if (backgrounds.length == 1) slantAmount = "0px";

  const maxBackgrounds = isXSmallScreen ? 3 : isSmallScreen ? 2 : isMediumScreen ? 3 : isLargeScreen ? 4 : backgrounds.length;
  backgrounds = backgrounds.slice(0, maxBackgrounds);

  return (
    <Box
      bg={`linear-gradient(to right, ${bgColor} 10%, rgb(255, 255, 255) 50%, ${bgColor})`}
      {...props}
      mx={"4"}
    >
      {isXSmallScreen && <Center m={4}>
        <Heading size={"2xl"}>{heading}</Heading>
      </Center>}
      <Box
        className="divided-banner-left"
        style={{
          "--slantAmount": slantAmount,
          "--hoverWidth": hoverWidth
        } as React.CSSProperties}
      >
        {!isXSmallScreen && heading && imageSide == 'right' && <Heading size={"2xl"}>{heading}</Heading>}
        {backgrounds.map((background, index) => {
          const isFirst = index === 0;
          const isLast = index === backgrounds.length - 1;

          const applyFirstClassName = (isXSmallScreen || imageSide === "left") && isFirst ? "first" : "";
          const applyLastClassName = (isXSmallScreen || imageSide === "right") && isLast ? "last" : "";

          return (
            <div
              key={index}
              className={`banner-image-left ${applyFirstClassName} ${applyLastClassName}`}
              style={{ backgroundImage: `url(${background})` }}
              tabIndex={0}
            />
          );
        })}
        {!isXSmallScreen && heading && imageSide == 'left' && <Heading size={"2xl"}>{heading}</Heading>}
      </Box>
    </Box>
  );
};

export default DividedBannerLeft;
