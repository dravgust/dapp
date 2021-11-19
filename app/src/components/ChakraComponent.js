import React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "../pages/_layouts/ChakraLayout";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import { Button, Box, Heading, Spacer } from "@chakra-ui/react";

const Web3ModalComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <ChakraProvider>
            <Layout>
                <Box p="4">
                    <Heading size="md"></Heading>
                </Box>
                <Spacer />
                <Box p="2">
                    <ConnectButton handleOpenModal={onOpen} />
                    <AccountModal isOpen={isOpen} onClose={onClose} />
                </Box>
            </Layout>
        </ChakraProvider>
    )
}

export default Web3ModalComponent;