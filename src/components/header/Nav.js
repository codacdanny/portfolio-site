import React from 'react';

import { Box, Flex, Link } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Flex
      pos="relative"
      top="2rem"
      justifyContent="center"
      alignItems="center"
      w="100vw"
    >
      <Flex>
        <Box
          visibility={{
            base: 'hidden',
            lg: 'visible',
          }}
          fontSize="1.7rem"
        >
          <Link
            href="#about"
            className="nav-link"
            mr="3rem"
            p="0.5rem"
            _hover={{
              bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
              bgClip: 'text',
              transform: 'scale(1.2)',
            }}
          >
            About
          </Link>
          <Link
            href="#projects"
            mr="3rem"
            className="nav-link"
            p="0.5rem"
            _hover={{
              bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
              bgClip: 'text',
              transform: 'scale(1.2)',
            }}
          >
            Project Tools
          </Link>
          <Link
            href="#mentor"
            mr="3rem"
            className="nav-link"
            p="0.5rem"
            _hover={{
              bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
              bgClip: 'text',
              transform: 'scale(1.2)',
            }}
          >
            Mentorship/Guide
          </Link>
          <Link
            href="#contact"
            className="nav-link"
            p="0.5rem"
            _hover={{
              bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
              bgClip: 'text',
              transform: 'scale(1.2)',
            }}
          >
            Contact
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Nav;
