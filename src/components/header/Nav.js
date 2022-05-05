import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Box position="relative" top="5">
      <Flex justifyContent="center" alignItems="center">
        <Box display="flex" fontSize="1.7rem">
          <Link
            href="#"
            mr="3rem"
            className="nav-link"
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
            href="#"
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
            href="#"
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
            href="#"
            mr="3rem"
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
    </Box>
  );
};

export default Nav;
