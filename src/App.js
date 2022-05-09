import React from 'react';
import { ChakraProvider, Box, VStack, Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import Nav from './components/header/Nav';
import HeaderText from './components/header/HeaderText';
import AboutText from './components/About/AboutText';
import Projects from './components/About/Projects';
import Mentor from './components/others/Mentor';
import Contact from './components/others/Contact';
import Copyright from './components/others/Copyright';
import theme from './components/others/theme';

function App() {
  console.log(theme);
  return (
    <ChakraProvider theme={theme}>
      <VStack
        spacing={8}
        justifyContent="center"
        alignContent="center"
        overflowX="hidden"
      >
        <Nav />
        <Box textAlign="center">
          <Flex flexDir="row">
            <Logo h="3rem" pointerEvents="none" opacity="0.4" />
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
