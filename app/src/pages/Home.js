import React from 'react';

const Home = () => {
    return (
      <>
      <div id="app" className="app app-full-height app-without-header p-0">
        <div className="coming-soon">
          <div className="flex-1">
            <div className="coming-soon-timer">
              <div id="timer"></div>
            </div>
            <div className="coming-soon-content d-flex flex-column">
              <div className="flex-1 mb-3">
                <h2 className="mb-3">We're coming soon!</h2>
                <p className="mb-4">We are working very hard on the new version of our site.<br /> It will bring a lot of new features. Stay tuned!</p>
                <div className="input-group mb-2">
                  <input type="text" className="form-control" placeholder="Email Address" />
                  <button type="submit" className="btn btn-outline-theme">SUBSCRIBE</button>
                </div>
                <div className="mb-1 small text-white text-opacity-50">* Subscribe and get notified for latest news</div>
              </div>
              <div className="text-center small text-white text-opacity-50">
                &copy; 2021 SeanTheme Right Reserved
              </div>
            </div>

          </div>
        </div>
        <a href="#!" data-toggle="scroll-to-top" className="btn-scroll-top fade"><i className="fa fa-arrow-up"></i></a>
      </div>
      </>
    );
  }
  
  export default Home;