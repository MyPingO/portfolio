import React, { ReactNode } from "react";
import { Box, BoxProps, Heading } from "@chakra-ui/react";
import { useMedia } from "react-use";
import "../assets/css/DividedBanner.css";

interface DividedBannerProps extends BoxProps {
    /** How much each divider is slanted (px, %, vw, etc). Defaults to `'0px'` */
    slantAmount?: string;
    /** Which direction the dividers are slanted. Defaults to `'left'` */
    slantDirection?: "left" | "right";
    /** Whether to flip the slant direction after the heading (Ex: `\ \ HEADING / /` ). Defaults to `false` */
    flipSlantAfterHeading?: boolean;
    /** Array of image URLs to be used in the banner */
    images: string[];
    /** Background color of the banner. Defaults to `'white'` */
    bgColor: string;
    /** Heading to be displayed in the banner. Can be some text, image, icon, React Component, etc. Optional. */
    heading?: ReactNode;
    /** Whether to expand the dividers on hover. Defaults to `true` */
    expandOnHover?: boolean;
    /** Height of the banner. Defaults to `'250px'` */
    bannerHeight?: string;
    /** Placement of the heading in the banner. Can be an index or  `'start'`, `'center'`, or `'end'`. Defaults to `0` */
    headingPlacement?: number | "start" | "center" | "end";
    /** Whether to show a pre-made shadow on the banner. Defaults to `true`. Set to `false` if you want to use your own box shadow. */
    useBoxShadow?: boolean;
}

export const DividedBanner: React.FC<DividedBannerProps> = ({
    slantDirection = "left",
    slantAmount = "0px",
    flipSlantAfterHeading = false,
    images = [],
    bgColor = "white",
    heading = null,
    expandOnHover = true,
    bannerHeight = "250px",
    headingPlacement = 0,
    useBoxShadow = true,
    ...props
}) => {
    const isXSmallScreen = useMedia("(max-width: 600px)");
    const isSmallScreen = useMedia("(max-width: 700px)");
    const isMediumScreen = useMedia("(max-width: 800px)");
    const isLargeScreen = useMedia("(max-width: 900px)");

    
    const hoverWidth = !expandOnHover ? "calc(100% + var(--slantAmount))%" :
    isXSmallScreen ? "25vw"
    : isSmallScreen ? "20vw"
    : isMediumScreen ? "20vw"
    : isLargeScreen ? "15vw" : "7vw";
    
    const maxImages = isXSmallScreen ? 2
    : isSmallScreen ? 2
    : isMediumScreen ? 3
    : isLargeScreen ? 4
    : images.length;
    const sliced = images.slice(0, maxImages);
    
    if (isXSmallScreen && sliced.length == 1) {
        slantAmount = "0px";
    }

    headingPlacement = getSafeHeadingPlacement(headingPlacement, sliced.length);
    const headingAlignment = slantDirection;
    console.log(headingPlacement);

    const gradientDirection = headingPlacement === 0 ? "to left" : "to right";


    return (
        <Box
            bg={`linear-gradient(${gradientDirection}, ${bgColor} 10%, #fff 50%, ${bgColor})`}
            {...props}
            mx="4"
            boxShadow = {useBoxShadow == true ? "0px 15px 10px 0px rgba(0, 0, 0, 0.2)": "none"}
        >
            {isXSmallScreen && heading && (

                <Heading size="2xl" p={4} textAlign={headingAlignment}>{heading}</Heading>

            )}
            <Box
                className="divided-banner"
                style={{
                    "--slantAmount": slantAmount,
                    "--hoverWidth": hoverWidth,
                    "height": bannerHeight,
                } as React.CSSProperties}
            >
                {sliced.map((bg, index) => {
                    const isFirst = index === 0;
                    const isLast = index === sliced.length - 1;
                    const firstClass = (isXSmallScreen || index < headingPlacement) && isFirst ? "first" : "";
                    const lastClass = (isXSmallScreen || index >= headingPlacement) && isLast ? "last" : "";
                    slantDirection = flipSlantAfterHeading && index === headingPlacement ? (slantDirection === "left" ? "right" : "left") : slantDirection;

                    return (
                        <React.Fragment key={index}>
                            {!isXSmallScreen && heading && index === headingPlacement && (
                                <Heading size="2xl" p={4} textAlign={headingAlignment}>
                                    {heading}
                                </Heading>
                            )}
                            <div
                                className={`banner-image ${slantDirection} ${firstClass} ${lastClass}`}
                                style={{ backgroundImage: `url(${bg})` }}
                                tabIndex={0}
                            />
                        </React.Fragment>
                    );
                })}

                {!isXSmallScreen && heading && headingPlacement >= sliced.length && (
                    <Heading size="2xl" p={4} textAlign={headingAlignment}>
                        {heading}
                    </Heading>
                )}
            </Box>
        </Box>
    );
};

const getSafeHeadingPlacement = (headingPlacement: number | string, maxImages: number): number => {

    if (typeof headingPlacement === "string") {
        switch (headingPlacement) {
            case "start":
                return 0;
            case "center":
                return Math.floor(maxImages / 2);
            case "end":
                return maxImages;
            default:
                return 0;
        }
    }
    return Math.max(0, Math.min(headingPlacement, maxImages));
}
