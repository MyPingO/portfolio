import React from "react";
import { Box, Text, HStack, Link, VStack } from "@chakra-ui/react";
import { Youtube, Github, Linkedin } from "react-bootstrap-icons";

const Footer: React.FC = () => {
  return (
    <Box as="footer" color="white" py={8}>
      <VStack align="center">
        {/* Footer Content */}
        <Text fontSize="sm" textAlign="center" color={"gray.500"}>
          &copy; {new Date().getFullYear()} Nathan Murdach.
        </Text>

        {/* Footer Links */}
        <HStack>
        <Link href="https://github.com/MyPingO" target="_blank" textDecoration={"none"} outline={"none"}>
          <Github color="black" size={30} />
        </Link>

        <Link href="https://www.youtube.com/@pingcode" target="_blank" textDecoration={"none"} outline={"none"}>
          <Youtube color="red" size={32} />
        </Link>

        <Link href="https://www.linkedin.com/in/nathanmurdach/" target="_blank" textDecoration={"none"} outline={"none"}>
          <Linkedin color="rgb(10 102 194)" size={32} />
        </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;