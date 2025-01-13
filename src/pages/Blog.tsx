import { Box, Text, Heading } from '@chakra-ui/react';

const Blog = () => (
  <Box maxW="800px" mx="auto" p={4}>
    <Heading>My Blog</Heading>
    <Text mt={4}>
      Welcome to my blog, where I write about topics that interest me.
    </Text>
  </Box>
);

export default Blog;
