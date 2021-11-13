import React from 'react';
import ItemList from '../containers/ItemList';
import Items from '../containers/Items';
import StateComponent from '../components/StateComponent';
import StateComponent2 from '../components/StateComponent2';

const Home = () => {
    return (
      <>
      <h1>Home</h1>
      <Items/>
      <ItemList/>
      <StateComponent/>
      <StateComponent2/>
      </>
    );
  }
  
  export default Home;