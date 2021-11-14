import React from 'react';
import ItemList from '../containers/ItemList';
import Items from '../containers/Items';
import StateComponent from '../components/StateComponent';
import StateComponent2 from '../components/StateComponent2';
import "./TestPage.css";

const TestPage = () => {
    return (
      <>
      <div className="test">
        <h1>Test Page</h1>
        <Items/>
        <ItemList/>
        <StateComponent/>
        <StateComponent2/>
      </div>
      </>
    );
  }
  
  export default TestPage;