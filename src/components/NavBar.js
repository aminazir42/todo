import React from 'react';
import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box bg="teal.500" px={4} py={3}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" color="white" fontFamily="Lucida Handwriting">Todoo</Text>
      </Flex>
    </Box>
  )
};
export default NavBar;
