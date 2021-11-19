import React from "react";
import { ChainId, DAppProvider } from "@usedapp/core";
import ChakraComponent from "../components/ChakraComponent";

const config = {
  readOnlyChainId: ChainId.Localhost,
  readOnlyUrls: {
    //[ChainId.Ropsten]: 'https://ropsten.infura.io/v3/17d71eefd03c45308bbcd99033962e59',
    [ChainId.Localhost]: "http://127.0.0.1:7545"
  },
}

const Dapp2 = () => {
    return (
     <DAppProvider config={config}>
        <ChakraComponent/>
     </DAppProvider>
    );
  }
  
  export default Dapp2;