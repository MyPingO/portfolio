import * as Chakra from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Tag } from "@/components/ui/tag";
import { StatRoot, StatLabel, StatValueText } from "@/components/ui/stat";
import { Youtube, Github, Linkedin } from "react-bootstrap-icons";
import { Folder, PenTool } from 'lucide-react';


const Home = () => {
  return (
    <Chakra.Box bg="gray.50" minH="100vh">
      <Chakra.VStack gap={0} align="stretch">
        {/* Hero Section */}
        <Chakra.Box
          as="section"
          py={10}
          px={6}
          bgGradient="linear(to-b, cyan.50, gray.50)"
        >
          {/* --- Desktop Layout (shown above 522px) --- */}
          <Chakra.Flex
            direction="column"
            align="center"
            maxW="800px"
            mx="auto"
            gap={4}
            md={{
              '@media(max-width: 522px)': {
                display: 'none',
              },
            }}
          >
            {/* Vertical line / Border */}
            <Chakra.Box borderLeft="2px solid" borderColor="cyan.200" pl={4}>
              <Chakra.VStack align="flex-start">
                <Chakra.HStack gap={2} justify={"space-between"} w="100%">

                  <Chakra.Stack gap={2} flexDirection={{ base: "column", xs: "row" }} align={"center"} w={"100%"}>
                    <Avatar
                      src="public/LOGO.png"
                      name="MyPing0"
                      size="2xl"
                      bg="transparent"
                      border="2px solid cyan"
                    />

                    <Chakra.VStack textAlign={"left"} align="flex-start" w={"100%"}>
                      <Chakra.Heading as="h1" size="xl" color="gray.800" textAlign={{ base: "center", xs: "left" }}>
                        Hi, I'm Nathan Murdach
                      </Chakra.Heading>

                      <Chakra.HStack gap={{base: 1, xs: 2}} display={{ base: "none", "2xs": "flex" }}>
                        <Tag size="md" colorScheme="cyan">
                          Developer
                        </Tag>
                        <Tag size="md" colorScheme="cyan">
                          Video Editor
                        </Tag><Tag size="md" colorScheme="cyan">
                          Photographer
                        </Tag>
                      </Chakra.HStack>

                    </Chakra.VStack>

                  </Chakra.Stack>
                </Chakra.HStack>

                <Chakra.Text fontSize="lg" color="gray.600">
                  I’m a passionate software developer and creator with a focus on clean
                  design, efficient systems, and solving meaningful problems... and some meaningless ones too 😉
                </Chakra.Text>

                <Chakra.Text fontSize="md" color="gray.500" fontStyle="italic">
                  "Nearly everything is really interesting if you go into it deeply enough." - Feynman
                </Chakra.Text>

                <Chakra.Separator borderColor="cyan.200" />

                <Chakra.HStack gap={4} wrap="wrap" justifyContent="space-between" w="100%">
                  <Chakra.HStack gap={4} wrap="wrap">
                    <Chakra.Button colorScheme="cyan" variant="outline" size="lg">
                      <Chakra.Link href="#projects">View My Work</Chakra.Link>
                    </Chakra.Button>
                    <Chakra.Button colorScheme="cyan" size="lg" variant="outline">
                      <Chakra.Link href="#contact">Contact Me</Chakra.Link>
                    </Chakra.Button>
                  </Chakra.HStack>

                  <Chakra.Flex gap={3}>
                    <Chakra.Link href="https://github.com/MyPingO" target="_blank">
                      <Github color="black" size={24} />
                    </Chakra.Link>
                    <Chakra.Link href="https://www.youtube.com/@pingcode" target="_blank">
                      <Youtube color="red" size={26} />
                    </Chakra.Link>
                    <Chakra.Link href="https://www.linkedin.com/in/nathanmurdach/" target="_blank">
                      <Linkedin color="rgb(10 102 194)" size={26} />
                    </Chakra.Link>
                  </Chakra.Flex>
                </Chakra.HStack>
              </Chakra.VStack>
            </Chakra.Box>
          </Chakra.Flex>

        </Chakra.Box>

        <Chakra.Separator size="sm" />

        {/* Quick Stats Section */}
        <Chakra.Box py={10} bg="gray.50">
          <Chakra.Container maxW="1200px">
            <Chakra.Heading
              as="h2"
              size="md"
              textAlign="center"
              color="gray.700"
              mb={6}
            >
              Highlights
            </Chakra.Heading>
            <Chakra.SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap={6}
              textAlign="center"
            >
              <StatRoot bg="white" p={4} borderRadius="md" boxShadow="sm">
                <StatLabel>Projects Completed</StatLabel>
                <StatValueText>20+</StatValueText>
              </StatRoot>

              <StatRoot bg="white" p={4} borderRadius="md" boxShadow="sm">
                <StatLabel>Years of Experience</StatLabel>
                <StatValueText>3</StatValueText>
              </StatRoot>

              <StatRoot bg="white" p={4} borderRadius="md" boxShadow="sm">
                <StatLabel>Coffees Consumed</StatLabel>
                <StatValueText>∞</StatValueText>
              </StatRoot>
            </Chakra.SimpleGrid>
          </Chakra.Container>
        </Chakra.Box>

        <Chakra.Separator size="sm" />

        {/* Projects & Blog Section */}
        <Chakra.Box py={10} bg="gray.50" id="projects">
          <Chakra.Container maxW="1200px" justifyContent={"center"}>
            <Chakra.Heading
              as="h2"
              size="lg"
              mb={6}
              textAlign="center"
              color="gray.700"
            >
              Explore My Work
            </Chakra.Heading>
            <Chakra.Tabs.Root defaultValue="projects" variant="enclosed" justify={"center"} justifyContent={"center"} alignSelf={"center"} alignContent={"center"}>
              <Chakra.Tabs.List mb={4}>
                <Chakra.Tabs.Trigger value="projects">
                  <Chakra.Box as="span" mr={2}>
                    <Folder />
                  </Chakra.Box>
                  Projects
                </Chakra.Tabs.Trigger>
                <Chakra.Tabs.Trigger value="blog">
                  <Chakra.Box as="span" mr={2}>
                    <PenTool />
                  </Chakra.Box>
                  Blog
                </Chakra.Tabs.Trigger>
              </Chakra.Tabs.List>
              <Chakra.Tabs.Content value="projects">
                <Chakra.SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  {/* Example Project Card */}
                  <Chakra.Box
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="md"
                    boxShadow="md"
                    p={6}
                    _hover={{ bg: "gray.100" }}
                  >
                    <Chakra.Heading size="md" mb={2}>
                      Project One
                    </Chakra.Heading>
                    <Chakra.Text fontSize="sm" color="gray.600">
                      Short description of the project.
                    </Chakra.Text>
                  </Chakra.Box>
                  {/* Repeat or map over your projects */}
                </Chakra.SimpleGrid>
              </Chakra.Tabs.Content>
              <Chakra.Tabs.Content value="blog">
                <Chakra.SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  {/* Example Blog Card */}
                  <Chakra.Box
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="md"
                    boxShadow="md"
                    p={6}
                    _hover={{ bg: "gray.100" }}
                  >
                    <Chakra.Heading size="md" mb={2}>
                      Blog Post Title
                    </Chakra.Heading>
                    <Chakra.Text fontSize="sm" color="gray.600">
                      Quick summary or excerpt from the post.
                    </Chakra.Text>
                  </Chakra.Box>
                  {/* Repeat or map over your blog posts */}
                </Chakra.SimpleGrid>
              </Chakra.Tabs.Content>
            </Chakra.Tabs.Root>
          </Chakra.Container>
        </Chakra.Box>


        <Chakra.Separator size="sm" />

      </Chakra.VStack>
    </Chakra.Box>
  );
};

export default Home;
