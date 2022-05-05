import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Box position="relative" top="5">
      <Flex justifyContent="center" alignItems="center">
        <Box display="flex" fontSize="1.7rem" justifyContent="space-between">
          <Link href="#" mr="3rem" className="nav-link" p="0.5rem">
            About
          </Link>
          <Link href="#" mr="3rem" className="nav-link" p="0.5rem">
            Project Tools
          </Link>
          <Link href="#" mr="3rem" className="nav-link" p="0.5rem">
            Mentorship/Guide
          </Link>
          <Link href="#" mr="3rem" className="nav-link" p="0.5rem">
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
