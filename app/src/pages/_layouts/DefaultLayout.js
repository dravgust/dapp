import React from 'react';
import Header from "../../components/_layouts/Header";
import SideBar from '../../components/_layouts/SideBar';

const DefaultLayout = ({ children }) => {
    return (
    <>
    	<div id="app" className="app">
            <Header />
            <SideBar/>
            <div id="content" className="app-content">
                {children}
            </div>
            <a href="#!" data-toggle="scroll-to-top" className="btn-scroll-top fade"><i className="fa fa-arrow-up"></i></a>
        </div>
    </>
    );
};
export default DefaultLayout;