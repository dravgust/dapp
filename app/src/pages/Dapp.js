import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "../drizzleOptions";
import LoadingContainer from "../containers/LoadingContainer";
import MyComponent from "../components/MyComponent";

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const Dapp = () => {
    return (
      <DrizzleProvider drizzle={drizzle}>
        <LoadingContainer>
          <MyComponent />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
  
  export default Dapp;