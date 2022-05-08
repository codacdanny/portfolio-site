import React from 'react';

import {
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Nav = () => {
  return (
    <Flex pos="relative" top="2rem" justifyContent="space-between" w="100vw">
      <Text
        visibility={{
          base: 'hidden',
        }}
      >
        dummy text
      </Text>

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

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          fontSize="2rem"
          p="1rem"
          mr="0rem"
          visibility={{
            base: 'visible',
            lg: 'hidden',
          }}
        />

        <MenuList
          h="90vh"
          w="30vw"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
        >
          <MenuItem>
            <Link
              href="#about"
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
          </MenuItem>
          <MenuItem>
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
          </MenuItem>
          <MenuItem>
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
          </MenuItem>
          <MenuItem>
            <Link
              href="#contact"
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
          </MenuItem>
        </MenuList>
        {/* </Show> */}
      </Menu>
    </Flex>
  );
};

export default Nav;
