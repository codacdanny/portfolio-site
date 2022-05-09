import { Box, Heading, Container, Flex, LinkBox, Link } from '@chakra-ui/react';
import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
const Contact = () => {
  return (
    <Box p="5rem" id="contact">
      <Container mx="auto" my="0">
        <Heading as="h2" fontSize="3rem" textAlign="center" mb="5rem">
          Let's Connect
        </Heading>
        <LinkBox>
          <Flex justifyContent="space-around" alignItems="center" flexDir="row">
            <Link
              padding="1rem"
              href="https://wa.me/+2348156438520"
              mr="6rem"
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <SiWhatsapp
                size={{
                  lg: '2rem',
                  base: '6rem',
                }}
              />
            </Link>
            <Link
              padding="1rem"
              href="https://twitter.com/Danny__Presh"
              mr="6rem"
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <FaTwitter
                size={{
                  lg: '6rem',
                  base: '2rem',
                }}
              />
            </Link>
            <Link
              padding="1rem"
              href="https://web.facebook.com/precious.daniel.7731/"
              mr="6rem"
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <FaFacebookF
                size={{
                  lg: '6rem',
                  base: '2rem',
                }}
              />
            </Link>
            <Link
              padding="1rem"
              href="https://www.linkedin.com/in/daniel-chinemerem-bb1757209/"
              mr="6rem"
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <GrLinkedin
                size={{
                  lg: '6rem',
                  base: '2rem',
                }}
              />
            </Link>
            <Link
              padding="1rem"
              href="https://github.com/codacdanny"
              _hover={{
                bgGradient: 'linear(to-b, #ffe838, #fd57bf)',
                borderRadius: '7px',
              }}
            >
              <GoMarkGithub
                size={{
                  lg: '6rem',
                  base: '2rem',
                }}
                mr={{
                  base: '6rem',
                  lg: '0',
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
