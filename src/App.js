import React from 'react';
import { ChakraProvider, Box, VStack, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Nav from './components/header/Nav';
import HeaderText from './components/header/HeaderText';
import AboutText from './components/About/AboutText';
import Projects from './components/About/Projects';
import Mentor from './components/others/Mentor';
import Contact from './components/others/Contact';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={8}>
        <Box textAlign="center" fontSize="xl">
          <Nav />
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}

          <Logo h="10vmin" pointerEvents="none" opacity="0.3" />
          <HeaderText />
        </Box>

        <AboutText />
        <Projects />
        <Mentor />
        <Contact />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
