import React from 'react';
//import { Link } from "react-router-dom";

const SideBar = () => {
    return (
      <>
		<div id="sidebar" className="app-sidebar">
			<div className="app-sidebar-content" data-scrollbar="true" data-height="100%">
				<div className="menu">
					<div className="menu-header">Navigation</div>
					<div className="menu-item active">
						<a href="/" className="menu-link">
							<span className="menu-icon"><i className="bi bi-cpu"></i></span>
							<span className="menu-text">Dashboard</span>
						</a>
					</div>
					<div className="menu-divider"></div>
					<div className="menu-header">Users</div>
					<div className="menu-item">
						{/*<Link to="/dapp">Dapp</Link>*/}
						<a href="/dapp" className="menu-link">
							<span className="menu-icon"><i className="bi bi-people"></i></span>
							<span className="menu-text">Profile</span>
						</a>
					</div>
				</div>
				<div className="p-3 px-4 mt-auto">
					<a href="../../documentation/index.html" className="btn d-block btn-outline-theme">
						<i className="fa fa-code-branch me-2 ms-n2 opacity-5"></i> Documentation
					</a>
				</div>
			</div>
		</div>
		<button className="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>
      </>
    );
  }
  
  export default SideBar;