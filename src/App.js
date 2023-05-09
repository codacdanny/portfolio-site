import React from 'react';
import { ChakraProvider, Box, VStack, Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import HeaderText from './components/header/HeaderText';

import Projects from './components/About/Projects';

import Contact from './components/others/Contact';
import Copyright from './components/others/Copyright';
import theme from './components/others/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack
        spacing={8}
        justifyContent="center"
        alignContent="center"
        overflowX="hidden"
      >
        <Box textAlign="center">
          <Flex flexDir="row">
            <Logo h="auto" w="4rem" pointerEvents="none" opacity="0.6" />
          </Flex>
          <HeaderText />
        </Box>

        <Projects />

        <Contact />
        <Copyright />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
