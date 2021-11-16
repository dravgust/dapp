import React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "../pages/_layouts/ChakraLayout";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";

const Web3ModalComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <ChakraProvider>
            <Layout>
                <ConnectButton handleOpenModal={onOpen} />
                <AccountModal isOpen={isOpen} onClose={onClose} />
            </Layout>
        </ChakraProvider>
    )
}

export default Web3ModalComponent;