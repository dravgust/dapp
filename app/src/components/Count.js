import React, { useState } from "react";
import {
    Box,
    Flex,
    Text,
    Button,
    NumberInput,
    NumberInputField, } from "@chakra-ui/react";
import { useGetCount, useContractMethod } from "../hooks/counter";

export default function Count() {
    const count = useGetCount();

    const { state, send: increment} = useContractMethod("increment");
    const { state: setCountState, send: setCount } = useContractMethod("setCount");
    const [input, setInput] = useState("");

    function handleIncrement() {
        increment();
    }

    function handleSetCount() {
        const _count = parseInt(input);
        if (_count) {
          setCount(_count);
        }
    }
    
    function handleInput(valueAsString, valueAsNumber) {
        setInput(valueAsString);
    }

    return (
        <Flex direction="column" align="center" mt="4">
            <Box p="4" background="gray.700" borderRadius="xl" width="300px" textAlign="center">
                <Text color="white" fontSize="8xl">
                    {count ? count.toNumber() : 0}
                </Text>
                <Button colorScheme="teal" size="lg" onClick={handleIncrement}>
                    Increment
                </Button>
                <Box mt={4}>
                    <NumberInput
                        mb={2}
                        min={1}
                        value={input}
                        onChange={handleInput}
                        color="white"
                        clampValueOnBlur={false}
                    >
                        <NumberInputField />
                    </NumberInput>
                    <Button isFullWidth colorScheme="purple" onClick={handleSetCount}>
                        Set Count
                    </Button>
                </Box>
            </Box>
            
        </Flex>
      );
}