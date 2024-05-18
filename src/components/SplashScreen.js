import React from 'react';
import { Box, Image, Center } from '@chakra-ui/react';

const SplashScreen = () => {
  return (
    <Center height="100vh" bg="teal.500">
      <Box>
        <Image src="logo.png" alt="Logo" boxSize="200px" />
      </Box>
    </Center>
  );
};

export default SplashScreen;
