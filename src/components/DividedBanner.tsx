import React from "react";
import { Box, BoxProps, Center, Heading } from "@chakra-ui/react";
import { useMedia } from "react-use";
import "../assets/css/DividedBanner.css";

interface DividedBannerProps extends BoxProps {
    slantAmount?: string;
    slantDirection: "left" | "right";
    images: string[];
    bgColor: string;
    heading?: string;
    imageSide?: "left" | "right";
}

export const DividedBanner: React.FC<DividedBannerProps> = ({
    slantDirection = "left",
    slantAmount = "50px",
    images: backgrounds = [],
    bgColor = "white",
    heading,
    imageSide = "left",
    ...props
}) => {
    const isXSmallScreen = useMedia("(max-width: 600px)");
    const isSmallScreen = useMedia("(max-width: 700px)");
    const isMediumScreen = useMedia("(max-width: 800px)");
    const isLargeScreen = useMedia("(max-width: 900px)");

    const hoverWidth = isXSmallScreen ? "25vw"
            : isSmallScreen ? "20vw"
                : isMediumScreen ? "20vw"
                    : isLargeScreen ? "15vw" : "7vw";

    if (backgrounds.length === 1) {
        slantAmount = "0px";
    }

    const maxBackgrounds = isXSmallScreen ? 3
        : isSmallScreen ? 2
            : isMediumScreen ? 3
                : isLargeScreen ? 4
                    : backgrounds.length;
    const sliced = backgrounds.slice(0, maxBackgrounds);

    const gradientDirection = imageSide === "left" ? "to left" : "to right";

    return (
        <Box
            bg={`linear-gradient(${gradientDirection}, ${bgColor} 10%, #fff 50%, ${bgColor})`}
            {...props}
            mx="4"
            boxShadow="0px 15px 10px 0px rgba(0, 0, 0, 0.2)"
        >
            {isXSmallScreen && heading && (
                <Center m={4}>
                    <Heading size="2xl">{heading}</Heading>
                </Center>
            )}
            <Box
                className="divided-banner"
                style={{
                    "--slantAmount": slantAmount,
                    "--hoverWidth": hoverWidth
                } as React.CSSProperties}
            >
                {!isXSmallScreen && heading && imageSide === "right" && (
                    <Heading size="2xl">{heading}</Heading>
                )}
                {sliced.map((bg, i) => {
                    const isFirst = i === 0;
                    const isLast = i === sliced.length - 1;
                    const firstClass = (isXSmallScreen || imageSide === "left") && isFirst ? "first" : "";
                    const lastClass = (isXSmallScreen || imageSide === "right") && isLast ? "last" : "";

                    return (
                        <div
                            key={i}
                            className={`banner-image ${slantDirection} ${firstClass} ${lastClass}`}
                            style={{ backgroundImage: `url(${bg})` }}
                            tabIndex={0}
                        />
                    );
                })}
                {!isXSmallScreen && heading && imageSide === "left" && (
                    <Heading size="2xl">{heading}</Heading>
                )}
            </Box>
        </Box>
    );
};
