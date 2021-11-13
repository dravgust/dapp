import React from 'react';
import ItemList from '../containers/ItemList';
import Items from '../containers/Items';

const Home = () => {
    return (
      <>
      <h1>Home</h1>
      <Items/>
      <ItemList/>
      </>
    );
  }
  
  export default Home;