import  {useRef, useEffect, useState }  from "react";
import { ethers } from 'ethers';
//import { Contract } from "@ethersproject/contracts";
//import { useContractCall, useContractFunction } from "@usedapp/core";
//import { useEthers, useEtherBalance } from "@usedapp/core";
import governorArtifact from "../contracts/BlackGovernor.json";
import tokenArtifact from "../contracts/BlackToken.json";

const GovernorContainer = async () => {

  const provider = useRef();
  const tokenAddress = useRef();
  const tokenContract = useRef(); 

  const governorAddress = useRef();
  const governorContract = useRef();

  const propose = async () => {
    const teamAddress = "0x1192aAa5F07ABD4F23939A1219a7165230D035d3";
    const grantAmount = "100"
    const transferCalldata = tokenContract.current.interface.encodeFunctionData("transfer", [teamAddress, grantAmount]);    
    console.log("transferCallData", transferCalldata);
    //console.log("propose_function", governorContract.current["propose(address[],uint256[],bytes[],string)"]);
    const proposeTx = await governorContract.current["propose(address[],uint256[],bytes[],string)"]([tokenAddress.current],[0],[transferCalldata],"Proposal #1: Give grant to team");

    const tx = await proposeTx.wait();
    await provider.current.send('evm_mine'); // wait 1 block before opening voting
    const proposalId = tx.events.find((e) => e.event == 'ProposalCreated').args.proposalId;

    console.log("proposeID:", proposalId);
  }
  
  const queue = async () => {
    const teamAddress = "0x1192aAa5F07ABD4F23939A1219a7165230D035d3";
    const grantAmount = "100"
    const transferCalldata = tokenContract.current.interface.encodeFunctionData("transfer", [teamAddress, grantAmount]);    
    const descriptionHash = ethers.utils.id("Proposal #2: Give grant to team");
    await governorContract.current["queue(address[],uint256[],bytes[],bytes32)"]([tokenAddress.current],[0],[transferCalldata],descriptionHash);

  }

  const execute = async () => {

    const teamAddress = "0x1192aAa5F07ABD4F23939A1219a7165230D035d3";
    const grantAmount = "100"
    const transferCalldata = tokenContract.current.interface.encodeFunctionData("transfer", [teamAddress, grantAmount]);   
    const descriptionHash = ethers.utils.id("Proposal #1: Give grant to team");
    await governorContract.current["execute(address[],uint256[],bytes[],bytes32)"](
      [tokenAddress.current],
      [1],
      [transferCalldata],
      descriptionHash,
    );

  }

  const cancel = async () => {

    //const teamAddress = "0x1192aAa5F07ABD4F23939A1219a7165230D035d3";
    //const grantAmount = "100"
    //const transferCalldata = tokenContract.current.interface.encodeFunctionData("transfer", [teamAddress, grantAmount]);   
    //const descriptionHash = ethers.utils.id("Proposal #1: Give grant to team");
    await governorContract.current["cancel(uint256)"](0);

  }

  const getInfo = async () => {

    console.log("blockNumber", await provider.current.getBlockNumber());
    const gasPrice = await provider.current.getGasPrice();
    console.log("gasPrice (gwei)", ethers.utils.formatUnits(gasPrice, "gwei"));
     
    //await provider.current.send("eth_requestAccounts", []);
    const signer = provider.current.getSigner();
    const account = await signer.getAddress();
    console.log("account", account);
    if(account){
      const balance = await provider.current.getBalance(account);
      console.log("account balance (ETH)", ethers.utils.formatEther(balance));

      const tokenBalance = await tokenContract.current.balanceOf(account);
      console.log("account alance (Token)", ethers.utils.formatUnits(tokenBalance, "wei"));
    
      const recipient = account;
      const transferGasEstimate = await tokenContract.current.estimateGas.transfer(recipient, 100);
      console.log("estimate gas (transfer)", ethers.utils.formatUnits(transferGasEstimate));

      const gasCostInEther = ethers.utils.formatUnits((transferGasEstimate * gasPrice), "gwei");
      console.log("transfer gas cost (gwei)", gasCostInEther);
    }

    //const votes = ethers.utils.parseUnits("100.0", 18);
    //await tokenContract.current.mint("0x1192aAa5F07ABD4F23939A1219a7165230D035d3", votes);

    //const proposals0 = await governorContract.current["state"]("1365523173584674078518458925343998035055286676685188319800354867330218052941");
    //console.log("state0", proposals0);

    //const castVote  = await governorContract.current.castVote("1365523173584674078518458925343998035055286676685188319800354867330218052941", 1);
    //console.log("cast", castVote);

    //const proposals1 = await governorContract.current["state"]("1365523173584674078518458925343998035055286676685188319800354867330218052941");
    //console.log("state1", proposals1);
  }


  useEffect(() => {

    const setup = async () => {
        provider.current = new ethers.providers.JsonRpcProvider("http://localhost:7545");
        //const provider = new ethers.providers.Web3Provider(window.ethereum)
        console.log("provider", provider.current);
        const network = await provider.current.getNetwork();
        console.log("network", network);     
        tokenAddress.current = tokenArtifact.networks[network.chainId].address;
        console.log("token_address", tokenAddress.current);
        //const tokenInterface = new ethers.utils.Interface(tokenArtifact.abi);
        //const tokenContract = new Contract(tokenAddress, tokenInterface);
        //const tokenContract.current = new ethers.Contract(tokenAddress, tokenArtifact.abi, provider);
        //const signer = provider.getSigner()
        tokenContract.current = new ethers.Contract(
          tokenAddress.current,
          tokenArtifact.abi,
          provider.current.getSigner(),
        );
        console.log("token_contract", tokenContract.current);

        //-----------------------------------------------------

        governorAddress.current = governorArtifact.networks[network.chainId].address;
        console.log("gov_address", governorAddress.current);
        //const tokenInterface = new ethers.utils.Interface(tokenArtifact.abi);
        //const tokenContract = new Contract(tokenAddress, tokenInterface);
        //const tokenContract.current = new ethers.Contract(tokenAddress, tokenArtifact.abi, provider);
        //const signer = provider.getSigner()
        governorContract.current = new ethers.Contract(
          governorAddress.current,
          governorArtifact.abi,
          provider.current.getSigner(),
        );
        console.log("gov_contract", governorContract.current);

        //await cancel();
        //await propose();
        await getInfo();
        //await queue();
        //await execute();
    }

    setup();
  }, []);

  return {};
}

export default GovernorContainer;

