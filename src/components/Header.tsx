import { Box, Flex, Heading, Link, Collapsible, HStack } from '@chakra-ui/react';
import { Home, Folder, PenTool, Menu } from 'lucide-react';

const Header: React.FC = () => (
  <Box bg="white" borderBottom="1px solid" borderColor="gray.200" px={4} py={3}>
    <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
      <Heading size="lg">My Portfolio</Heading>

      <Box>

        <Collapsible.Root position={"relative"} zIndex={1} display={{ base: "bloflexck", sm: "none" }}>
          <Collapsible.Trigger >
            <Menu />
          </Collapsible.Trigger>
          <Collapsible.Content position={"absolute"} top={8} right={0} zIndex={0} bg="white" p={4} boxShadow="md">
            <Flex direction="column" gap={4}>
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
          </Collapsible.Content>
        </Collapsible.Root>

        <HStack gap={4} display={{ base: "none", sm: "flex" }}>
          <Link href="/" display="flex" alignItems="center" gap={1} color="gray.700" _hover={{ color: 'black' }}>
            <Home /> Home
          </Link>
          <Link href="/projects" display="flex" alignItems="center" gap={1} color="gray.700" _hover={{ color: 'black' }}>
            <Folder /> Projects
          </Link>
          <Link href="/blog" display="flex" alignItems="center" gap={1} color="gray.700" _hover={{ color: 'black' }}>
            <PenTool /> Blog
          </Link>
        </HStack>

      </Box>
    </Flex>
  </Box>
);

export default Header;
