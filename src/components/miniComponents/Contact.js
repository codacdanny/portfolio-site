import { Box, Heading, Container, Flex, LinkBox, Link } from '@chakra-ui/react';
import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { FiMail } from 'react-icons/fi';
const Contact = () => {
  return (
    <Box p="5rem" id="contact" w="100%">
      <Container mx="auto" my="0">
        <Heading
          as="h2"
          fontSize={{
            base: '2.5rem',
            lg: '3rem',
            xl: '4rem',
          }}
          textAlign="center"
          mb="4rem"
        >
          Let's Connect
        </Heading>
        <LinkBox h="100%">
          <Flex
            justifyContent="space-around"
            alignItems="center"
            flexDir={{
              base: 'row',
              lg: 'row',
            }}
            fontSize={{
              base: '3rem',
              lg: '6rem',
              xl: '7rem',
            }}
          >
            <Link
              isExternal
              padding="1rem"
              href="https://wa.me/+2348156438520"
              mr={{
                base: '2rem',
                lg: '6rem',
              }}
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <SiWhatsapp />
            </Link>
            <Link
              isExternal
              padding="1rem"
              href="https://twitter.com/Danny__Presh"
              mr={{
                base: '2rem',
                lg: '6rem',
              }}
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <FaTwitter />
            </Link>
            <Link
              isExternal
              padding="1rem"
              href="mailto:danielchinemerem302@gmail.com"
              mr={{
                base: '2rem',
                lg: '6rem',
              }}
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <FiMail />
            </Link>
            <Link
              isExternal
              padding="1rem"
              href="https://www.linkedin.com/in/daniel-chinemerem-bb1757209/"
              mr={{
                base: '2rem',
                lg: '6rem',
              }}
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <GrLinkedin />
            </Link>
            <Link
              isExternal
              padding="1rem"
              href="https://github.com/codacdanny"
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <GoMarkGithub
                mr={{
                  base: '2rem',
                  lg: '6rem',
                }}
              />
            </Link>
          </Flex>
        </LinkBox>
      </Container>
    </Box>
  );
};

export default Contact;
