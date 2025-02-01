import * as Chakra from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Tag } from "@/components/ui/tag";
import { Youtube, Github, Linkedin, PersonArmsUp, Translate, CodeSlash, FileEarmarkCode, Tv, Controller, CupHot, Infinity as InfinityIcon, MusicNote } from "react-bootstrap-icons";
import { Atom, Brain, Volleyball, GraduationCap, Clapperboard, Cylinder, BookText, SquareMousePointer } from 'lucide-react';
import { DividedBanner } from "@/components/DividedBanner";


const Home = () => {

  const measurableStats = [
    { label: "Age", value: "22 years old", icon: <PersonArmsUp />, percentage: 22 },
    { label: "Spoken Languages", value: "English, Russian", icon: <Translate />, percentage: 30 },
    { label: "Programming Languages", value: "Python, C#, Typescript, HTML/CSS", icon: <CodeSlash />, percentage: 35 },
    { label: "Lines of Code Written", value: "500,000+", icon: <FileEarmarkCode/>, percentage: 60 },
    { label: "Gaming Skill", value: "Semi-pro", icon: <Controller />, percentage: 90 },
    { label: "Cups of Tea Consumed", value: <InfinityIcon size={"2rem"} />, icon: <CupHot />, percentage: 100 },
  ];

  const favorites = [
    { label: "Favorite Colors", values: ["Cyan", "Black", "White", "Grey"], icon: <Cylinder />, percentage: 100 },
    { label: "Favorite Foods", values: ["Pizza", "Fried Dumplings", "Oreo Cookies w/ Milk", "French fries w/ Fry sauce"], icon: <CupHot />, percentage: 100 },
    { label: "Favorite Drinks", values: ["Tea", "Water"], icon: <CupHot />, percentage: 100 },
    { label: "Favorite Sports", values: ["Sprinting", "Soccer", "Handball", "Table-Tennis"], icon: <Volleyball />, percentage: 100 },
    { label: "Favorite Anime", values: ["Death Note", "Steins;Gate", "To Your Eternity", "Sword Art Online (Seasons 1-2)", "86 - EIGHTY SIX", "Frieren: Beyond Journey's End", "Classroom of the Elite", "Naruto"], icon: <Tv />, percentage: 100 },
    { label: "Favorite Music Genre", values: ["Yes"], icon: <MusicNote />, percentage: 100 },
    { label: "Favorite Instruments", values: ["Hurdy-Gurdy", "Handpan", "Kalimba", "Piano"], icon: <MusicNote />, percentage: 100 },
    { label: "Favorite Games", values: ["The Legend of Zelda: Breath of the Wild", "Red Dead Redemption 2", "Rocket League", "Mario Kart Wii", "PokéPark", "Pokemon Black and White"], icon: <Controller />, percentage: 100 },
    { label: "Favorite Books", values: ["Surely You're Joking, Mr. Feynman!", "The Alchemist"], icon: <BookText />, percentage: 100 },
    { label: "Favorite Movies", values: ["Cars", "Wreck it Ralph", "Real Steel", "The Guilty (2018)"], icon: <Clapperboard />, percentage: 100 },
    { label: "Favorite Subjects", values: ["(Theoretical) Physics", "Film & Color", "Philosophy", "Technology"], icon: <Atom />, percentage: 100 },
  ];

  const personalInterests = [
    { label: "Programming", icon: <CodeSlash /> },
    { label: "Video Editing", icon: <Tv /> },
    { label: "Photography", icon: <Clapperboard /> },
    { label: "Gaming", icon: <Controller /> },
    { label: "Music", icon: <MusicNote /> },
    { label: "Sports", icon: <Volleyball /> },
    { label: "Anime", icon: <Tv /> },
    { label: "Philosophy", icon: <Brain /> },
    { label: "Physics", icon: <Atom /> },
    { label: "Learning", icon: <GraduationCap /> },
  ];

  return (
    <Chakra.Box bg="gray.50" minH="100vh">
      <Chakra.VStack gap={0} align="stretch" maxW={"1000px"} mx={"auto"}>
        {/* Hero Section */}
        <Chakra.Box
          as="section"
          py={10}
          px={6}
          bgGradient="linear(to-b, cyan.50, gray.50)"
        >
          <Chakra.Flex
            direction="column"
            align="center"
            maxW="1000px"
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

                  <Chakra.Stack gap={4} flexDirection={{ base: "column", xs: "row" }} w={"100%"}>
                    <Avatar
                      src="/LOGO.png"
                      name="MyPing0"
                      size="2xl"
                      bg="transparent"
                      border="2px solid cyan"
                      alignSelf={{ base: "left", xs: "center" }}
                    />

                    <Chakra.VStack textAlign={"left"} align="flex-start" w={"100%"}>
                      <Chakra.Heading as="h1" size="xl" color="gray.800">
                        <Chakra.Text>
                          Hi, I'm Nathan Murdach
                        </Chakra.Text>
                        <Chakra.Text textStyle={"xs"} color="gray.500" display={"flex"} gap={1} alignItems={"center"}>
                          Also Known As: <Chakra.Text color={"#00d0ff"}>MyPing0</Chakra.Text>
                        </Chakra.Text>
                      </Chakra.Heading>

                      <Chakra.HStack gap={{ base: 1, xs: 2 }} display={{ base: "none", "2xs": "flex" }}>
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
                    <Chakra.Button colorPalette="cyan" variant="outline" size="lg" borderWidth={"2px"} _hover={{ bg: "cyan.100" }}>
                      <Chakra.Link href="#projects" textDecoration={"none"} outline={"none"}>View My Work</Chakra.Link>
                    </Chakra.Button>
                    <Chakra.Button colorPalette="cyan" size="lg" variant="outline" borderWidth={"2px"} _hover={{ bg: "cyan.100" }}>
                      <Chakra.Link href="#contact" textDecoration={"none"} outline={"none"}>Contact Me</Chakra.Link>
                    </Chakra.Button>
                  </Chakra.HStack>

                  <Chakra.Flex gap={3}>
                    <Chakra.Link href="https://github.com/MyPingO" target="_blank" textDecoration={"none"} outline={"none"}>
                      <Github color="black" size={24} />
                    </Chakra.Link>
                    <Chakra.Link href="https://www.youtube.com/@pingcode" target="_blank" textDecoration={"none"} outline={"none"}>
                      <Youtube color="red" size={26} />
                    </Chakra.Link>
                    <Chakra.Link href="https://www.linkedin.com/in/nathanmurdach/" target="_blank" textDecoration={"none"} outline={"none"}>
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
        <Chakra.Box as="section" py={8} px={4} id="stats">
          <Chakra.SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} base={{mx: "auto"}} gap={4}>
            {measurableStats.map((stat, index) => (
              <Chakra.Card.Root
                key={index}
                borderRadius="none"
                boxShadow="md"
                shadowColor={"cyan.200"}
                transition="transform 0.3s, box-shadow 0.3s"
                position="relative"
                bgGradient="to-br"
                gradientFrom="white"
                gradientTo="rgb(234, 234, 234)"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgGradient: "to-br",
                  gradientFrom: "white",
                  gradientTo: "rgb(222, 243, 255)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
                _hover={{
                  _before: {
                    opacity: 1,
                  },
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                  cursor: "default",
                }}
              >
                <Chakra.VStack
                  p={8}
                  w={"100%"}
                  h={"100%"}
                  align="center"
                  textAlign={"center"}
                  justifyContent={"space-evenly"}
                  position="relative"
                  zIndex={1} // Crucial for keeping content above gradient
                >
                  <Chakra.Box fontSize="5xl" color="cyan.500">
                    {stat.icon}
                  </Chakra.Box>

                  <Chakra.Text fontWeight="" fontSize="lg" color={"rgb(0, 204, 255)"}>
                    {stat.value}
                  </Chakra.Text>

                </Chakra.VStack>
              </Chakra.Card.Root>
            ))}
          </Chakra.SimpleGrid>
        </Chakra.Box>

        {/* Favorites Section */}
        <Chakra.VStack gap={8} align="stretch">
          <DividedBanner
            heading={
              <Chakra.Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2}>
                Favorite Colors <SquareMousePointer strokeWidth="2px" />
              </Chakra.Box>
            }
            headingWidth="2.75"
            slantAmount="45px"
            slantDirection="right"
            images={[
              "src/assets/cyan.jpg",
              "src/assets/white.jpg",
              "src/assets/grey.jpg",
              "src/assets/black.jpg",
            ]}
            bgColor="rgb(234, 254, 255)"
            bannerHeight="150px"
          />
          <DividedBanner
            heading="Favorite Anime"
            headingWidth="1.75"
            slantAmount="45px"
            slantDirection="left"
            headingPlacement={"end"}
            flipSlantAfterHeading={true}
            images={[
              "src/assets/kiritoSAO.jpg",
              "src/assets/lightyagami.png",
              "src/assets/narutowallpaper.jpg",
              "src/assets/steinsgatewallpaper.jpg",
              "src/assets/frierenwallpaper.jpg"
            ]}
            bgColor="rgb(255, 221, 187)"
            bannerHeight="225px"
          />
          <DividedBanner
            heading="Favorite Games"
            headingWidth="1.75"
            slantAmount="45px"
            slantDirection="right"
            images={[
              "src/assets/botw.jpg",
              "src/assets/readdeadcover.jpg",
              "src/assets/pokemonblackandwhite.jpg",
              "src/assets/mariokart8.jpg",
            ]}
            bgColor="rgb(187, 255, 236)"
            bannerHeight="255px"
          />
          <DividedBanner
            heading="Favorite Books"
            headingPlacement={"end"}
            headingWidth="1.6"
            headingBreakpoints={{ 325: ["top", "center", .1], 400: ["end", "center", .1], 500: ["top"], 550: ["end", "center", 1], 650: ["end"], 750: ["top"], 800: ["end", "center", 1.5], 850: ["end", "center", 1.75], 950: ["end", "center", 2] }}
            slantAmount="0px"
            images={[
              "src/assets/surelyyourejokingmrfeynman.jpg",
              "src/assets/thealchemist.jpg",
              "src/assets/theoutsiders.jpg"
            ]}
            imageFit="100% 100%"
            imageBreakpoints={{ 400: 1, 500: 2, 550: 1, 650: 1, 750: 3, 850: 2, 950: 2 }}
            expandOnHover={false}
            bgColor="rgb(255, 187, 187)"
            bannerHeight="300px"
          />
        </Chakra.VStack>

      </Chakra.VStack >
    </Chakra.Box >
  );
};

export default Home;
