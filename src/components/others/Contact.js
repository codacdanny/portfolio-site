import { Box, Heading, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
const Contact = () => {
  return (
    <Box p="5rem" minW="85%">
      <Container mx="auto" my="0">
        <Heading as="h2" fontSize="3rem" textAlign="center" mb="5rem">
          Let's Connect
        </Heading>
        <Flex justifyContent="space-around" alignItems="center">
          <Box mr="6rem">
            <SiWhatsapp size="6rem" />
          </Box>
          <Box mr="6rem">
            <FaTwitter size="6rem" />
          </Box>
          <Box mr="6rem">
            <FaFacebookF size="6rem" />
          </Box>
          <Box mr="6rem">
            <GrLinkedin size="6rem" />
          </Box>
          <Box>
            <GoMarkGithub size="6rem" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
