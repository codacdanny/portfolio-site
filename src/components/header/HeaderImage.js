import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const HeaderImage = () => {
  return (
    <Box position="absolute" top="0">
      <Image
        height="80vh"
        width="100vw"
        src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg"
        alt=" bgimage"
        sx={{ filter: 'blur(.23rem)' }}
        opacity={0.3}
      />
    </Box>
  );
};

export default HeaderImage;
