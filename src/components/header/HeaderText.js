import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const HeaderText = () => {
  return (
    <Box
      className="center"
      top={{
        base: '3%',
        lg: '14%',
      }}
      left={{
        base: '46%',
        lg: '50%',
      }}
      zIndex="banner"
    >
      <Flex
        textAlign="center"
        justify="center"
        alignItems="center"
        flexDir="column"
        h={{
          base: '40vh',
          lg: '75vh',
        }}
      >
        <Heading
          as="h1"
          className="fadeInDown"
          fontSize={{
            base: '2rem',
            lg: '4.5rem',
            xl: '5.5rem',
          }}
          fontWeight="medium"
          mb="1.7rem"
        >
          Hi, I'm Daniel.
        </Heading>

        <Heading
          as="h2"
          className="zoomIn"
          fontSize={{
            base: '1.5rem',
            lg: '3.5rem',
            xl: '4.5rem',
          }}
          fontWeight="light"
          fontFamily="cursive"
          p="1rem"
        >
          Let's get to know me.
        </Heading>
      </Flex>
    </Box>
  );
};

export default HeaderText;
