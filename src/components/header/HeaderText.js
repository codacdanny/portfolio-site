import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const HeaderText = () => {
  return (
    <Box textAlign="center" mt="15rem">
      <Text
        as="h1"
        className="fadeInDown"
        position="relative"
        bgGradient="linear(to-l, #FEECE9, #CCD1E4)"
        bgClip="text"
        fontSize="4.5rem"
        fontWeight="medium"
      >
        Hi, I'm Daniel.
      </Text>
      <Text
        as="h2"
        className="zoomIn"
        position="relative"
        bgGradient="linear(to-l, #FEECE9, #CCD1E4)"
        bgClip="text"
        fontSize="3.5rem"
        fontWeight="light"
      >
        Let's Get to Know me.
      </Text>
    </Box>
  );
};

export default HeaderText;
