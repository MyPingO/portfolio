import React, { ReactNode } from "react";
import { Box, BoxProps, Heading } from "@chakra-ui/react";
import { useWindowSize } from "react-use";
import "../assets/css/DividedBanner.css";

interface HeadingBreakpoints {
    [key: number]: [number | "start" | "middle" | "end" | "top" | "bottom", string?];
}

interface ImageBreakpoints {
    [key: number]: number | string;
}

interface DividedBannerProps extends BoxProps {
    /** How much each divider is slanted (px, %, vw, etc). Defaults to `'0px'` */
    slantAmount?: string;
    /** Which direction the dividers are slanted. Defaults to `'left'` */
    slantDirection?: "left" | "right";
    /** Whether to flip the slant direction after the heading (Ex: `\ \ HEADING / /` ). Defaults to `false` */
    flipSlantAfterHeading?: boolean;
    /** Array of image URLs to be used in the banner */
    images: string[];
    /** How to fit the images in the banner. This sets the background-size property. Defaults to `'cover'` */
    imageFit?: string;
    /** 
     * Object of breakpoints for the number of images to display. Breakpoints are compared with the `<=` operator.
     * 
     * Defaults to: `{ 600: 2, 700: 2, 800: 3, 900: 4}`. For values above `900px`, all images are displayed.
     * 
     * The key is the maximum width of the screen in pixels and the value is the number of images to display.
    */
    imageBreakpoints?: ImageBreakpoints;
    /** Background color of the banner. Defaults to `'white'` */
    bgColor: string;
    /** Heading to be displayed in the banner. Can be some text, image, icon, React Component, etc. Optional. */
    heading?: ReactNode;
    /** Amount of width the heading takes up in the banner relative to the images. Defaults to `'1'` which takes up the same space as each image. */
    headingWidth?: string;
    /** Placement of the heading in the banner. Can be an index (0-indexed), `'start'`, `'middle'`, `'end'`, `'top'`, or `'bottom'`. Defaults to `0` */
    headingPlacement?: number | "start" | "middle" | "end" | "top" | "bottom";
    /** The `textAlign` value for the heading. Defaults to `'center'` */
    headingAlignment?: string;
    /** 
     * Object of breakpoints for the heading placement. Breakpoints are compared with the `<=` operator.
     * 
     * Defaults to the smallest breakpoint in `imageBreakpoints`, which defaults to `600px`. 
     * 
     * For values above the largest breakpoint, the heading is placed using the `headingPlacement` prop value, which defaults to `0`.
     * 
     * The key is the maximum width of the screen in pixels. Ex: `600` for screens <= 600px wide.
     * 
     * The value can be an index (0-indexed) or placement. Ex: `1` (placed after the first image), `'start'`, `'center'`, `'end'`, `'top'`, or `'bottom'`.
     * 
     * An additional value for `textAlign` can be added after a comma. Ex: `{700: ['start', 'center'], 600: ['top', 'left']}`.
     */
    headingBreakpoints?: HeadingBreakpoints;
    /** Whether to expand the dividers on hover. Defaults to `true` */
    expandOnHover?: boolean;
    /** Height of the banner. Defaults to `'250px'` */
    bannerHeight?: string;
    /** Whether to show a pre-made shadow on the banner. Defaults to `true`. Set to `false` if you want to use your own box shadow. */
    useBoxShadow?: boolean;
}

export const DividedBanner: React.FC<DividedBannerProps> = ({
    slantDirection = "left",
    slantAmount = "0px",
    flipSlantAfterHeading = false,
    images = [],
    imageFit = "cover",
    imageBreakpoints = { 600: 2, 700: 2, 800: 3, 900: 4 },
    expandOnHover = true,
    heading = null,
    headingWidth = "1",
    headingPlacement = 0,
    headingAlignment = "center",
    headingBreakpoints = (() => {
        const minBreakpoint = Math.min(...Object.keys(imageBreakpoints).map(Number));
        return { [minBreakpoint]: ["top", headingAlignment] };
    })(),
    bannerHeight = "250px",
    bgColor = "white",
    useBoxShadow = true,
    ...props
}) => {
    const windowSize = useWindowSize();
    const sortedImageBreakpoints: [string, number][] = Object.entries(imageBreakpoints).sort((a, b) => Number(a[0]) - Number(b[0]));
    const slicedImages = images.slice(0, getValueAtCurrentBreakpoint(sortedImageBreakpoints, windowSize.width, images.length));

    const sortedHeadingBreakpoints: [string, [number | string, string?]][] = Object.entries(headingBreakpoints).sort((a, b) => Number(a[0]) - Number(b[0]));
    const filledHeadingBreakpoints: [string, [number, string]][] = sortedHeadingBreakpoints.map(([breakpoint, value]) => {
        const [placement, alignment = headingAlignment] = value;
        return [breakpoint, [getSafeHeadingPlacement(placement, slicedImages.length), alignment]];
    });

    console.log("Before:", headingPlacement);

    headingPlacement = getSafeHeadingPlacement(headingPlacement, slicedImages.length);
    const [breakpointHeadingPlacement, breakpointHeadingAlignment] = getValueAtCurrentBreakpoint(filledHeadingBreakpoints, windowSize.width, [headingPlacement, headingAlignment]);
    const isHeadingInBanner = breakpointHeadingPlacement >= 0 && breakpointHeadingPlacement <= slicedImages.length;
    const isHeadingOnTop = breakpointHeadingPlacement === -1;
    const isHeadingOnBottom = breakpointHeadingPlacement === slicedImages.length + 1;

    console.log("After:", headingPlacement);
    if (isHeadingInBanner && slicedImages.length == 1) {
        slantAmount = "0px";
    }

    const hoverWidth = !expandOnHover ? "1" : "1.75";
    const gradientDirection = breakpointHeadingPlacement === 0 ? "to left" : "to right"; // TODO: Add support for other placements

    return (
        <Box
            bg={`linear-gradient(${gradientDirection}, ${bgColor} 10%, #fff 50%, ${bgColor})`}
            {...props}
            mx="4"
            boxShadow={useBoxShadow == true ? "0px 15px 10px 0px rgba(0, 0, 0, 0.2)" : "none"}
        >
            {isHeadingOnTop && heading && (
                <Heading size="2xl" p={4} textAlign={breakpointHeadingAlignment}>{heading}</Heading>
            )}
            <Box
                className="divided-banner"
                style={{
                    "--slantAmount": slantAmount,
                    "--hoverWidth": hoverWidth,
                    "height": bannerHeight,
                } as React.CSSProperties}
            >
                {slicedImages.map((bg, index) => {
                    const isFirst = index === 0;
                    const isLast = index === slicedImages.length - 1;
                    const firstClass = (!isHeadingInBanner || index < breakpointHeadingPlacement) && isFirst ? "first" : "";
                    const lastClass = (!isHeadingInBanner || index >= breakpointHeadingPlacement) && isLast ? "last" : "";
                    slantDirection = flipSlantAfterHeading && index === breakpointHeadingPlacement ? (slantDirection === "left" ? "right" : "left") : slantDirection;

                    return (
                        <React.Fragment key={index}>
                            {heading && index === breakpointHeadingPlacement && (
                                <BannerHeading
                                    heading={heading}
                                    headingAlignment={headingAlignment}
                                    flex={headingWidth}
                                />
                            )}
                            <img
                                className={`banner-image ${slantDirection} ${firstClass} ${lastClass}`}
                                style={{ backgroundImage: `url(${bg})`, backgroundSize: imageFit }}
                                tabIndex={0}
                            />
                        </React.Fragment>
                    );
                })}

                {heading && breakpointHeadingPlacement == slicedImages.length && (
                    <BannerHeading
                        heading={heading}
                        headingAlignment={headingAlignment}
                        flex={headingWidth}
                    />
                )}
            </Box>
            {isHeadingOnBottom && heading && (
                <Heading size="2xl" p={4} textAlign={breakpointHeadingAlignment}>{heading}</Heading>
            )}
        </Box>
    );
};

const getValueAtCurrentBreakpoint = <T,>(breakpoints: ([string, T][]), currentWidth: number, defaultValue: T): T => {

    for (let i = 0; i < breakpoints.length; i++) {
        const [breakpoint, value] = breakpoints[i];
        if (currentWidth <= Number(breakpoint)) {
            return value;
        }
    }

    return defaultValue;
}

const getSafeHeadingPlacement = (headingPlacement: number | string, maxImages: number): number => {

    if (typeof headingPlacement === "string") {
        switch (headingPlacement) {
            case "start":
                return 0;
            case "center":
                return Math.floor(maxImages / 2);
            case "end":
                return maxImages;
            case "top":
                return -1;
            case "bottom":
                return maxImages + 1;
            default:
                return 0;
        }
    }
    return Math.max(-1, Math.min(headingPlacement, maxImages + 1));
}

interface BannerHeadingProps extends BoxProps {
    heading: ReactNode;
    headingAlignment?: string;
}

export const BannerHeading: React.FC<BannerHeadingProps> = ({
    heading,
    headingAlignment = 'left',
    ...props
}) => {
    return (
        <Heading
            size="2xl"
            p={4}
            textAlign={headingAlignment}
            textWrap="nowrap"
            {...props}
        >
            {heading}
        </Heading>
    );
};