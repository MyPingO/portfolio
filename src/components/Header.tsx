import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Home, Folder, PenTool } from 'lucide-react';

const Header: React.FC = () => (
  <Box bg="white" borderBottom="1px solid" borderColor="gray.200" px={4} py={3}>
    <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
      <Heading size="lg">My Portfolio</Heading>
      <Flex gap={4}>
        <Link href="/" display="flex" alignItems="center" gap={1} color="gray.700" _hover={{ color: 'black' }}>
          <Home /> Home
        </Link>
        <Link href="/projects" display="flex" alignItems="center" gap={1} color="gray.700" _hover={{ color: 'black' }}>
          <Folder /> Projects
        </Link>
        <Link href="/blog" display="flex" alignItems="center" gap={1} color="gray.700" _hover={{ color: 'black' }}>
          <PenTool /> Blog
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Header;
