import * as Chakra from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Tag } from "@/components/ui/tag";
import { Youtube, Github, Linkedin, PersonArmsUp, Translate, Code, Tv, Controller, CupHot, Infinity as InfinityIcon, MusicNote } from "react-bootstrap-icons";
import { Ruler, Atom, Brain, Volleyball, GraduationCap, Clapperboard, FileCode, Cylinder, BookText, SquareMousePointer } from 'lucide-react';
import { DividedBanner } from "@/components/DividedBanner";


const Home = () => {

  const measurableStats = [
    { label: "Age", value: "22 years old", icon: <PersonArmsUp />, percentage: 22 },
    { label: "Spoken Languages", value: "English, Russian", icon: <Translate />, percentage: 30 },
    { label: "Programming Languages", value: "8", icon: <Code />, percentage: 35 },
    { label: "Lines of Code Written", value: "500,000+", icon: <FileCode strokeWidth={"1px"} />, percentage: 45 },
    { label: "Anime Watched", value: "50+", icon: <Tv />, percentage: 60 },
    { label: "Height", value: "5'11 | 180.35 cm", icon: <Ruler strokeWidth={"1px"} />, percentage: 75 },
    { label: "Gaming Skill", value: "Semi-pro", icon: <Controller />, percentage: 90 },
    { label: "Cups of Tea Consumed", value: <InfinityIcon size={"1.5rem"} />, icon: <CupHot />, percentage: 100 },
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
    { label: "Programming", icon: <Code /> },
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

                  <Chakra.Stack gap={2} flexDirection={{ base: "column", xs: "row" }} w={"100%"}>
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
        <Chakra.Box as="section" py={10} px={6} id="stats">
          <Chakra.Heading size="4xl" textAlign="center" color="gray.800" mb={6}>
            Quick Stats
          </Chakra.Heading>
          <Chakra.VStack gap={4} align="stretch">
            {measurableStats.map((stat, index) => (
              <Chakra.Box key={index}>
                <Chakra.Flex >
                  {/* Icon */}
                  <Chakra.VStack w={"100%"} align={"start"}>

                    <Chakra.HStack justify={"space-between"} w={"100%"}>
                      <Chakra.HStack gap={3}>
                        <Chakra.Box fontSize="xl" color="cyan.500" w={6} h={6} textAlign={"end"}>
                          {stat.icon}
                        </Chakra.Box>
                        {/* Label */}
                        <Chakra.Text fontWeight="medium" color="gray.700">
                          {stat.label}
                        </Chakra.Text>
                      </Chakra.HStack>
                      {/* Value */}
                      <Chakra.Text fontSize="sm" color="gray.600" textAlign={"end"}>
                        {stat.value}
                      </Chakra.Text>
                    </Chakra.HStack>

                    {/* Percentage Bar */}
                    <Chakra.Flex
                      bg="cyan.100"
                      h="8px"
                      w="100%"
                      overflow="hidden"
                      position="relative"
                    >
                      <Chakra.Box
                        bg="cyan.500"
                        h="100%"
                        w={`${stat.percentage}%`}
                        transition="width 0.3s ease-in-out"
                      />
                    </Chakra.Flex>

                  </Chakra.VStack>


                </Chakra.Flex>
              </Chakra.Box>
            ))}
          </Chakra.VStack>
        </Chakra.Box>

        {/* Favorites Section */}
        <Chakra.VStack gap={8} align="stretch">
          <DividedBanner
            heading={
              <Chakra.Box display={"flex"} alignItems={"center"} gap={2}>
                Favorite Colors <SquareMousePointer strokeWidth="2px" />
              </Chakra.Box>
            }
            slantAmount="45px"
            slantDirection="right"
            images={[
              "src/assets/cyan.jpg",
              "src/assets/white.jpg",
              "src/assets/grey.jpg",
              "src/assets/black.jpg",
            ]}
            bgColor="rgb(237, 254, 255)"
            bannerHeight="150px"
          />
          <DividedBanner
            heading="Favorite Anime"
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
            slantAmount="45px"
            slantDirection="right"
            images={[
              "src/assets/botw.jpg",
              "src/assets/readdeadcover.jpg",
              "src/assets/pokemonblackandwhite.jpg",
              "src/assets/mariokart8.jpg",
            ]}
            bgColor="rgb(187, 254, 255)"
            bannerHeight="255px"
          />
          <DividedBanner
            heading="Favorite Books"
            slantAmount="0px"
            headingPlacement={"end"}
            images={[
              "src/assets/surelyyourejokingmrfeynman.jpg",
              "src/assets/thealchemist.jpg",
              "src/assets/theoutsiders.jpg"
            ]}
            expandOnHover={false}
            bgColor="rgb(255, 187, 187)"
            bannerHeight="300px"
          />
        </Chakra.VStack>

      </Chakra.VStack>
    </Chakra.Box>
  );
};

export default Home;
