import React from "react";
import { Box, Spacer, Grid, HStack, Flex, ChakraProvider } from "@chakra-ui/react";

const ChakraUI = () => {
    return (
      <ChakraProvider>
        <Box bg="gray.800"> 
          <Flex>
            <Box w="70px" h="10" bg="red.500" />
            <Spacer />
            <Box w="180px" h="10" bg="red.500" />
          </Flex>

          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Box w="70px" h="10" bg="blue.500" />
            <Box w="170px" h="10" bg="blue.500" />
            <Box w="180px" h="10" bg="blue.500" />
          </Grid>

          <HStack spacing="24px">
            <Box w="70px" h="10" bg="teal.500" />
            <Box w="170px" h="10" bg="teal.500" />
            <Box w="180px" h="10" bg="teal.500" />
          </HStack>
        </Box>
      </ChakraProvider>
    );
  }
  
  export default ChakraUI;