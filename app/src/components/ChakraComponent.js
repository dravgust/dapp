import React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "../pages/_layouts/ChakraLayout";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import { Box, Heading, Spacer, Flex, Grid, GridItem } from "@chakra-ui/react";
import Count from "./Count";
import Governor from "./Governor";

const Web3ModalComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <ChakraProvider>
            <Layout>
                <Flex>
                    <Box p="4">
                        <Heading size="md"></Heading>
                    </Box>
                    <Spacer />
                    <Box p="2">
                        <ConnectButton handleOpenModal={onOpen} />
                        <AccountModal isOpen={isOpen} onClose={onClose} />       
                    </Box>
                </Flex>
                <Grid h="100%" templateRows="repeat(2, 1fr)" templateColumns="repeat(4, 1fr)" gap={6}>
                    <GridItem rowSpan={2} colSpan={1} />
                    <GridItem rowSpan={2} colSpan={2}>
                        <Count />
                        <Governor/>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} />
                </Grid>
            </Layout>
        </ChakraProvider>
    )
}

export default Web3ModalComponent;