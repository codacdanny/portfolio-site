import { Container, Box, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const Mentor = () => {
  return (
    <Box align="center" id="mentor">
      <Heading
        as="h2"
        textAlign="center"
        fontSize="3.5rem"
        mb="2rem"
        bgGradient="linear(to-l, #FEECE9, #CCD1E4)"
        bgClip="text"
        mt="5.5rem"
      >
        Mentorship/Guide
      </Heading>
      <Container
        padding="3rem"
        maxWidth="89%"
        fontSize="1.8rem"
        fontFamily="Poppins"
      >
        <Text lineHeight="tall">
          I have only been coding for about 3 years now, that might not seem
          like a lot, but during this period I have learned a lot of things, I
          have grown and I have overcome some difficulties. Having a
          mentor/guide in this career is really important especially if you are
          a self-taught developer. I remember back in 2020 while I was taking
          Jonas Schedtmann’s course on Advanced CSS. In the first Project
          (Natours project) I was stuck for 3 months trying to write a css code
          for linear gradient. I already gave up on coding until my mentor
          helped me to figure out the bug in 12 seconds. It was just a missing
          comma, and that was what kept me for 3 good months. Coming into the
          tech niche as a beginner can be very overwhelming, the bugs, imposter
          syndrome, anxiety and the realization of a whole lot of things that
          you have to learn to be a good developer. Usually you might not have
          access to well accomplished devs with more than 7yrs of experience,
          you can learn a lot from an intermediate level dev just as you can
          learn from a senior dev.That is why I offer to help as many people who
          are trying to find their passion in the tech niche. I have mentored a
          handful of people and the experience has been great. Feel free to
          reach out to me for help.
        </Text>
      </Container>
    </Box>
  );
};

export default Mentor;