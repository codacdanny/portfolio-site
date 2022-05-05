import React from 'react';
import { ChakraProvider, Box, VStack, theme, Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import Nav from './components/header/Nav';
import HeaderText from './components/header/HeaderText';
import AboutText from './components/About/AboutText';
import Projects from './components/About/Projects';
import Mentor from './components/others/Mentor';
import Contact from './components/others/Contact';
import Copyright from './components/others/Copyright';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={8}>
        <Box textAlign="center" fontSize="xl">
          <Nav />

          <Flex display="flex" flexDir="row">
            <Logo h="10vmin" pointerEvents="none" opacity="0.3" />
          </Flex>
          <HeaderText />
        </Box>

        <AboutText />
        <Projects />
        <Mentor />
        <Contact />
        <Copyright />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
