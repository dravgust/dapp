import React from "react";
import { DAppProvider } from "@usedapp/core";
import ChakraComponent from "../components/ChakraComponent";

const Dapp2 = () => {
    return (
     <DAppProvider config={{}}>
        <ChakraComponent/>
     </DAppProvider>
    );
  }
  
  export default Dapp2;