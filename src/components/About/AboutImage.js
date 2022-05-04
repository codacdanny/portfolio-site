import { Box, Flex, Image } from '@chakra-ui/react';
import mine from '../../DSC_0787.JPG';
import React from 'react';

const AboutImage = () => {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center">
        <Box height="20rem" width="20rem" marginBottom="6rem">
          <Image
            src={mine}
            alt="my pic"
            height="100%"
            width="100%"
            borderRadius="50%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutImage;
