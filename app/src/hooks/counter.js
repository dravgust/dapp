import { ethers } from 'ethers';
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
//import { useEthers } from "@usedapp/core";
import artifact from "../contracts/Counter.json";

//const network = await provider.getNetwork();
const contractAddress = artifact.networks["1337"].address;
const contractInterface = new ethers.utils.Interface(artifact.abi);
const contract = new Contract(contractAddress, contractInterface);

export function useContractMethod(methodName) {
    //const { chainId } = useEthers();
    const { state, send } = useContractFunction(contract, methodName, {});
    return { state, send };
  }

export function useGetCount() {
    const [count] = useContractCall({
        abi: contractInterface,
        address: contractAddress,
        method: "getCount",
        args:[]
    }) ?? [];
    return count;
}