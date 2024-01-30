import React from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Copyright = () => {
  return (
    <Box w="100%">
      <Divider orientation="horizontal" />
      <Text
        fontSize="1rem"
        opacity="0.5"
        fontWeight="thin"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="3rem"
      >
        <AiOutlineCopyrightCircle /> copyright danielchinemerem 2022
      </Text>
    </Box>
  );
};

export default Copyright;
