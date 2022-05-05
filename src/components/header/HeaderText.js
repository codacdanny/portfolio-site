import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const HeaderText = () => {
  return (
    <Box
      pos="absolute"
      top="2%"
      left="36%"
      zIndex="banner"
      mx="auto"
      textAlign="center"
    >
      <Flex
        textAlign="center"
        justify="center"
        alignItems="center"
        flexDir="column"
        h="75vh"
      >
        <Heading
          as="h1"
          className="fadeInDown"
          fontSize="4.5rem"
          fontWeight="medium"
          zIndex="banner"
          mb="2rem"
        >
          Hi, I'm Daniel.
        </Heading>

        <Heading
          as="h2"
          className="zoomIn"
          fontSize="3.5rem"
          fontWeight="light"
          zIndex="banner"
          fontFamily="cursive"
        >
          Let's get to know me.
        </Heading>
      </Flex>
    </Box>
  );
};

export default HeaderText;
