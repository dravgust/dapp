import React from "react";
import { ChainId,DAppProvider } from "@usedapp/core";
import ChakraComponent from "../components/ChakraComponent";

const config = {
  readOnlyChainId: ChainId.Ropsten,
  readOnlyUrls: {
    [ChainId.Ropsten]: 'https://ropsten.infura.io/v3/17d71eefd03c45308bbcd99033962e59',
  },
}

const Dapp2 = () => {
    return (
     <DAppProvider config={{}}>
        <ChakraComponent/>
     </DAppProvider>
    );
  }
  
  export default Dapp2;