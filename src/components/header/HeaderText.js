import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const HeaderText = () => {
  return (
    <Flex
      textAlign="center"
      mb="10rem"
      justify="center"
      alignItems="center"
      flexDir="column"
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
      >
        Let's Get to Know me.
      </Heading>
    </Flex>
  );
};

export default HeaderText;
