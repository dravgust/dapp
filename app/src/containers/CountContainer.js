import  {useState, useRef, useEffect }  from "react";
import {ethers} from 'ethers';

import artifact  from "../contracts/Counter.json";

const CountContainer = () => {

    const [count, setCount] = useState();
    const contract = useRef();

    const updateCount = async () => {
        const newCount = await contract.current.getCount();
        setCount(newCount.toString());
    }
    
    const increment = async () => {
        const tx = await contract.current.increment();
        await tx.wait();
        updateCount();
    }

    useEffect(() => { 
        // this is only run once on component mounting
        const setup = async () => {
          const provider = new ethers.providers.JsonRpcProvider("http://localhost:7545");
          const network = await provider.getNetwork();
          const contractAddress = artifact.networks[network.chainId].address;

          // instantiate contract instance and assign to component ref variable
          contract.current = new ethers.Contract(
            contractAddress,
            artifact.abi,
            provider.getSigner(),
          );
    
          // update count on UI
          await updateCount();
        };
        setup();
      }, []);
    
      return { count, increment };
}

export default CountContainer;