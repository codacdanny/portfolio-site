import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const AboutText = () => {
  const date = new Date();
  const curDate = date.getFullYear() - 2020;
  return (
    <Box mb="6rem" id="about">
      <Container
        my="0"
        mx="auto"
        padding={{
          base: '0.5rem',
          lg: '5rem',
        }}
        maxWidth="100%"
      >
        <Heading
          as="h2"
          fontSize={{
            base: '2.5rem',
            lg: '3.5rem',
            xl: '4.5rem',
          }}
          textAlign="center"
          mb="3rem"
          bgGradient="linear(to-l, #FEECE9, #CCD1E4)"
          bgClip="text"
        >
          About
        </Heading>

        <Box h="100%">
          <Text
            fontSize={{
              base: '1.6rem',
              lg: '1.8rem',
            }}
            p={{
              base: '1rem',
              lg: '4rem',
            }}
            lineHeight="tall"
          >
            Hi! My name is Daniel Chinemerem a software developer and an
            undergraduate studying pure and applied mathematics in FUTO. I
            started my coding career {curDate} years ago, I have interned with a
            few companies where I collaborated with other developers and I have
            been mentored by some great developers. I am a mathematician and a
            critical thinker. I use HTML, CSS, Javascript and other front-end
            technologies like React and chakra UI to produce responsive websites
            and web apps that provide users the best and most appropriate
            experience suited for their devices and also have basic knowledge of
            C and shell scripting. I am currently working on improving my skill
            set and becoming a fullstack developer in no time.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutText;
