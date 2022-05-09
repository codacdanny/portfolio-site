import { Box, Container, Flex, Text, Image, Link } from '@chakra-ui/react';
import meme from '../../meme.png';
import budget from '../../budget.png';
import pigGame from '../../pig-game.png';
import React from 'react';

const Projects = () => {
  return (
    <Box id="projects">
      <Container
        maxWidth={{
          base: '90vw',
          lg: '100vw',
        }}
      >
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
              my="2rem"
              objectFit="cover"
            />
            <Link href="https://github.com/codacdanny/memegenerator">
              Meme Generator
            </Link>
          </Box>

          <Box textAlign="center" fontSize="2rem">
            <Image
              src={budget}
              alt="budget app"
              height="30rem"
              width="35rem"
              objectFit="cover"
              my="2rem"
            />
            <Link href="https://github.com/codacdanny/budget_app.git">
              Budget Calculator
            </Link>
          </Box>
          <Box textAlign="center" fontSize="2rem">
            <Image
              src={pigGame}
              alt="pig game app"
              height="30rem"
              width="35rem"
              objectFit="cover"
              my="2rem"
            />

            <Link href="https://github.com/codacdanny/pig-game.git">
              Pig Game Project
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
