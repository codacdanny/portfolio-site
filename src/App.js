import React from 'react';
import { ChakraProvider, Box, VStack, Flex } from '@chakra-ui/react';

import { Logo } from './components/others/Logo';

import HeaderText from './components/header/HeaderText';

import Projects from './components/others/Projects';

import Contact from './components/others/Contact';
import Copyright from './components/others/Copyright';
import theme from './components/others/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={8} overflowX="hidden">
        <Box textAlign="center">
          <Flex>
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
