import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <>
       <nav>
           <li><a href="/">Home</a></li>
           <li><a href="/dapp">Dapp</a></li>
       </nav>
       <div>--------------------------------</div>
       <nav>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/dapp">Dapp</Link> </li>
        </nav>
      </>
    );
  }
  
  export default Header;