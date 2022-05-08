import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import meme from '../../meme.png';
import budget from '../../budget.png';
import pigGame from '../../pig-game.png';
import React from 'react';

const Projects = () => {
  return (
    <Box id="projects">
      <Container maxWidth="container.xl">
        <Text
          as="h2"
          textAlign="center"
          fontSize="3.5rem"
          mb="3rem"
          bgGradient="linear(to-l, #FEECE9, #CCD1E4)"
          bgClip="text"
        >
          Projects
        </Text>
        <Flex
          gap="1rem"
          justifyContent="center"
          flexDir={{
            base: 'column',
            lg: 'row',
          }}
        >
          <Box textAlign="center" fontSize="2rem">
            <Image
              src={meme}
              alt="meme"
              height="30rem"
              width="35rem"
              objectFit="cover"
            />
            <Text>Meme Generator</Text>
          </Box>

          <Box textAlign="center" fontSize="2rem">
            <Image
              src={budget}
              alt="budget app"
              height="30rem"
              width="35rem"
              objectFit="cover"
            />
            <Text>Budget Calculator</Text>
          </Box>
          <Box textAlign="center" fontSize="2rem">
            <Container position="relative">
              <Image
                src={pigGame}
                alt="pig game app"
                height="30rem"
                width="35rem"
                objectFit="cover"
              />
              <Text
                as="span"
                pos="absolute"
                top="40%"
                left="35%"
                fontSize="3rem"
              >
                Click Me
              </Text>
            </Container>
            <Text>Pig Game Project</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
