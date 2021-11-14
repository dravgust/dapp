import React from 'react';
//import { Link } from "react-router-dom";

const Header = () => {
    return (
      <>

  <div id="header" className="app-header">
			<div className="desktop-toggler">
				<button type="button" className="menu-toggler" data-toggle-class="app-sidebar-collapsed" data-dismiss-class="app-sidebar-toggled" data-toggle-target=".app">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
			</div>
			<div className="mobile-toggler">
				<button type="button" className="menu-toggler" data-toggle-class="app-sidebar-mobile-toggled" data-toggle-target=".app">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
			</div>
			<div className="brand">
				<a href="#!" className="brand-logo">
					<span className="brand-img">
						<span className="brand-img-text text-theme">AC</span>
					</span>
					<span className="brand-text">APOCALYPSE CLUB</span>
				</a>
			</div>
			<div className="menu">
				<div className="menu-item dropdown">
					<a href="#!" data-toggle-class="app-header-menu-search-toggled" data-toggle-target=".app" className="menu-link">
						<div className="menu-icon"><i className="bi bi-search nav-icon"></i></div>
					</a>
				</div>
				<div className="menu-item dropdown dropdown-mobile-full">
					<a href="#!" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
						<div className="menu-icon"><i className="bi bi-grid-3x3-gap nav-icon"></i></div>
					</a>
					<div className="dropdown-menu fade dropdown-menu-end w-300px text-center p-0 mt-1">
						<div className="row row-grid gx-0">
							<div className="col-4">
								<a href="#!" className="dropdown-item text-decoration-none p-3 bg-none">
									<div className="position-relative">
										<i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
										<i className="bi bi-envelope h2 opacity-5 d-block my-1"></i>
									</div>
									<div className="fw-500 fs-10px text-white">INBOX</div>
								</a>
							</div>
							<div className="col-4">
								<a href="#!" className="dropdown-item text-decoration-none p-3 bg-none">
									<div><i className="bi bi-hdd-network h2 opacity-5 d-block my-1"></i></div>
									<div className="fw-500 fs-10px text-white">DISK DRIVE</div>
								</a>
							</div>
							<div className="col-4">
								<a href="#!" className="dropdown-item text-decoration-none p-3 bg-none">
									<div><i className="bi bi-calendar4 h2 opacity-5 d-block my-1"></i></div>
									<div className="fw-500 fs-10px text-white">CALENDAR</div>
								</a>
							</div>
						</div>
						<div className="row row-grid gx-0">
							<div className="col-4">
								<a href="#!" className="dropdown-item text-decoration-none p-3 bg-none">
									<div><i className="bi bi-terminal h2 opacity-5 d-block my-1"></i></div>
									<div className="fw-500 fs-10px text-white">TERMINAL</div>
								</a>
							</div>
							<div className="col-4">
								<a href="#!" className="dropdown-item text-decoration-none p-3 bg-none">
									<div className="position-relative">
										<i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
										<i className="bi bi-sliders h2 opacity-5 d-block my-1"></i>
									</div>
									<div className="fw-500 fs-10px text-white">SETTINGS</div>
								</a>
							</div>
							<div className="col-4">
								<a href="#!" className="dropdown-item text-decoration-none p-3 bg-none">
									<div><i className="bi bi-collection-play h2 opacity-5 d-block my-1"></i></div>
									<div className="fw-500 fs-10px text-white">LIBRARY</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="menu-item dropdown dropdown-mobile-full">
					<a href="#!" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
						<div className="menu-icon"><i className="bi bi-bell nav-icon"></i></div>
						{/*<div className="menu-badge bg-theme"></div>*/}
					</a>
					<div className="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
						<h6 className="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
						<div className="dropdown-divider mt-1"></div>
						
						{/*<<a href="#!" className="d-flex align-items-center py-10px dropdown-item text-wrap">
							<div className="fs-20px w-20px">
								<i className="bi bi-credit-card text-theme"></i>
							</div>
							<div className="flex-1 flex-wrap ps-3">
								<div className="mb-1 text-white">PAYMENT METHOD ENABLED</div>
								<div className="small">10 MINUTES AGO</div>
							</div>
							<div className="ps-2 fs-16px">
								<i className="bi bi-chevron-right"></i>
							</div>
						</a>*/}
						<hr className="bg-white-transparent-5 mb-0 mt-2" />
						<div className="py-10px mb-n2 text-center">
							<a href="#!" className="text-decoration-none fw-bold">SEE ALL</a>
						</div>
					</div>
				</div>
				<div className="menu-item dropdown dropdown-mobile-full">
					<a href="#!" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
						<div className="menu-img online">
							<img alt="" src="assets/img/user/profile.jpg" height="60px" />
						</div>
						<div className="menu-text d-sm-block d-none">username@account.com</div>
					</a>
					<div className="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
						<a className="dropdown-item d-flex align-items-center" href="/about">PROFILE <i className="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i></a>				
						<a className="dropdown-item d-flex align-items-center" href="#!">SETTINGS <i className="bi bi-gear ms-auto text-theme fs-16px my-n1"></i></a>
						<div className="dropdown-divider"></div>
						<a className="dropdown-item d-flex align-items-center" href="#!">LOGOUT <i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i></a>
					</div>
				</div>
			</div>
			<form className="menu-search" method="POST" name="header_search_form">
				<div className="menu-search-container">
					<div className="menu-search-icon"><i className="bi bi-search"></i></div>
					<div className="menu-search-input">
						<input type="text" className="form-control form-control-lg" placeholder="Search menu..." />
					</div>
					<div className="menu-search-icon">
						<a href="#!" data-toggle-class="app-header-menu-search-toggled" data-toggle-target=".app"><i className="bi bi-x-lg"></i></a>
					</div>
				</div>
			</form>
		</div>
      </>
    );
  }
  
  export default Header;