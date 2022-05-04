import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const AboutText = () => {
  return (
    <Box mb="6rem">
      <Container maxW="container.xl" my="0" mx="auto">
        <Heading
          as="h2"
          fontSize="3.5rem"
          textAlign="center"
          mb="3rem"
          bgGradient="linear(to-l, #FEECE9, #CCD1E4)"
          bgClip="text"
        >
          About
        </Heading>

        <Box className="glass" h="100%" mx="6rem">
          <Text fontSize="1.8rem" p="4rem" lineHeight="tall">
            Hi my name is Daniel Chinemerem, I am a frontend developer. I am an
            undergraduate studying pure and applied mathematics in FUTO. I
            started my coding career nearly 3 years ago, I have interned with a
            few companies where I collaborated with other developers and I have
            been mentored by some great developers. I am currently working on
            improving my skill set and becoming a fullstack developer in no
            time. Currently, I use HTML, CSS, Javascript and front technologies
            like React and chakra UI to produce responsive websites and web apps
            that provide users the best and most appropriate experience suited
            for their device. I also have basic knowledge of C and shell
            scripting.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutText;
