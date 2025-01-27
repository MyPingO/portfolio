import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// npx @chakra-ui/cli typegen .\src\theme.ts

const config = defineConfig({
    theme: {
        breakpoints: {
            "2xs": "320px",
            xs: "400px",
            sm: "480px",
            md: "768px",
            lg: "992px",
            xl: "1280px",
            "2xl": "1536px",
        },
    }
});

export default createSystem(defaultConfig, config);