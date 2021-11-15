import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../pages/_layouts/ChakraLayout";
import ConnectButton from "./ConnectButton";

const Web3ModalComponent = () => {
    return(
        <ChakraProvider>
            <Layout>
                <ConnectButton />
            </Layout>
        </ChakraProvider>
    )
}

export default Web3ModalComponent;