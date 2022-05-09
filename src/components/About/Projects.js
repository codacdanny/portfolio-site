import { Box, Container, Flex, Text, Image, Button } from '@chakra-ui/react';
import meme from '../../meme.png';
import budget from '../../budget.png';
import pigGame from '../../pig-game.png';
import React from 'react';

const Projects = () => {
  return (
    <Box id="projects">
      <Container
        maxWidth="100%"
        padding={{
          base: '0.5rem',
          lg: '5rem',
        }}
      >
        <Text
          as="h2"
          textAlign="center"
          fontSize={{
            base: '2.5rem',
            lg: '3.5rem',
            xl: '4.5rem',
          }}
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
              width={{
                base: '25rem',
                lg: '35rem',
              }}
              my="2rem"
              objectFit="cover"
            />
            <Button
              fontSize="1.5rem"
              px="1.5rem"
              py="1.9rem"
              href="https://github.com/codacdanny/memegenerator"
              colorScheme="blue"
            >
              Meme Generator
            </Button>
          </Box>

          <Box textAlign="center" fontSize="2rem">
            <Image
              src={budget}
              alt="budget app"
              height="30rem"
              width={{
                base: '25rem',
                lg: '35rem',
              }}
              objectFit="cover"
              my="2rem"
            />
            <Button
              fontSize="1.5rem"
              px="1.5rem"
              py="1.9rem"
              href="https://github.com/codacdanny/budget_app.git"
              colorScheme="blue"
            >
              Budget Calculator
            </Button>
          </Box>
          <Box textAlign="center" fontSize="2rem">
            <Image
              src={pigGame}
              alt="pig game app"
              height="30rem"
              width={{
                base: '25rem',
                lg: '35rem',
              }}
              objectFit="cover"
              my="2rem"
            />

            <Button
              href="https://github.com/codacdanny/pig-game.git"
              fontSize="1.5rem"
              px="1.5rem"
              py="1.9rem"
              colorScheme="blue"
            >
              Pig Game Project
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
