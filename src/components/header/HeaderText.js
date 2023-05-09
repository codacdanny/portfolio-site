import React from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import resume from '../../dan.pdf';
const HeaderText = () => {
  return (
    <Box
      className="center"
      top={{
        base: '13%',
        lg: '20%',
      }}
      left="50%"
      zIndex="banner"
    >
      <Flex
        textAlign="center"
        justify="center"
        alignItems="center"
        flexDir="column"
        gap="2rem"
        h={{
          base: '70vh',
          lg: '95vh',
        }}
        w="100%"
      >
        <Heading
          as="h1"
          className="fadeInDown"
          fontSize={{
            base: '2.5rem',
            lg: '4.5rem',
            xl: '5.5rem',
          }}
          fontWeight="medium"
          mb="1.7rem"
        >
          Hi, I'm Daniel.
        </Heading>
        <a href={resume} download="Daniel Chinemerem Resume.pdf">
          <Button
            p="1.5rem"
            fontSize="1.5rem"
            bgGradient="linear-gradient(to top, #ffe838, #fd57bf)"
            colorScheme="pink"
          >
            MY RESUME
          </Button>
        </a>
      </Flex>
    </Box>
  );
};

export default HeaderText;
