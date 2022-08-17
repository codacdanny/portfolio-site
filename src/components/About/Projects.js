import { Box, Container, Flex, Text, Image, Link } from '@chakra-ui/react';
import meme from '../../meme.png';
import budget from '../../budget.png';
import theGrader from '../../theGrader.png';
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
              src={theGrader}
              alt="CGPA calculator"
              height="30rem"
              width={{
                base: '25rem',

                lg: '35rem',
              }}
              objectFit="cover"
              my="2rem"
            />

            <Link
              href="https://the-grader.netlify.app"
              isExternal
              fontSize="1.5rem"
              p="1rem"
              bgColor="blue.800"
              borderRadius="5px"
              _hover={{
                bgColor: 'blue.400',
              }}
            >
              CGPA Calculator
            </Link>
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
            <Link
              href="https://github.com/codacdanny/budget_app.git"
              isExternal
              fontSize="1.5rem"
              p="1rem"
              bgColor="blue.800"
              borderRadius="5px"
              _hover={{
                bgColor: 'blue.400',
              }}
            >
              Budget Calculator
            </Link>
          </Box>

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
            <Link
              href="https://memegenerator-dusky.vercel.app/"
              isExternal
              fontSize="1.5rem"
              p="1rem"
              bgColor="blue.800"
              borderRadius="5px"
              _hover={{
                bgColor: 'blue.400',
              }}
            >
              Meme Generator
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
