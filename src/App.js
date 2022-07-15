import logo from './logo.svg';
import './assets/font/iconsmind-s/css/iconsminds.css';
import './assets/font/simple-line-icons/css/simple-line-icons.css';
import './assets/css/vendor/bootstrap-stars.css';

import './assets/css/vendor/bootstrap.min.css';
// import './assets/css/vendor/owl.carousel.min.css';
import './assets/css/vendor/bootstrap-stars.css';
import './assets/css/vendor/video-js.css';
import './assets/css/dore.light.bluenavy.min.css';
import './assets/css/main.css';

function App() {
  return (
    <div className="landing-page">
    

    <div className="main-container">
     

      <div className="content-container" id="home">
        <div className="section home">
          <div className="container m-10">
          <div className="row mb-4 ">
              <div className="col-xs-6 col-lg-4 col-12 mb-4">
                  <div className="card">
                      <div className="position-relative">
                          <img className="card-img-top" src="/cards/1.jpeg" alt="Card image cap"/>
                          <span className="badge badge-pill badge-theme-2 position-absolute badge-top-left">NEW</span>
                          
                      </div>
                      <div className="card-body">
                          <p className="list-item-heading mb-4">Homemade Cheesecake with Fresh Berries and Mint
                          </p>
                          <footer>  
                            <button className='btn btn-success'>Grab a Deal</button>
                          </footer>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-lg-4 col-12 mb-4">
                  <div className="card">
                      <div className="position-relative">
                          <img className="card-img-top" src="/cards/2.jpeg" alt="Card image cap"/>
                          <span className="badge badge-pill badge-theme-2 position-absolute badge-top-left">NEW</span>
                
                      </div>
                      <div className="card-body">
                          <p className="list-item-heading mb-4">Homemade Cheesecake with Fresh Berries and Mint
                          </p>
                          <footer>
                              <button className='btn btn-warning'>Grab a Deal</button>
                          </footer>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-lg-4 col-12 mb-4">
                  <div className="card">
                      <div className="position-relative">
                          <img className="card-img-top" src="/cards/3.png" alt="Card image cap"/>
                          <span className="badge badge-pill badge-theme-2 position-absolute badge-top-left">NEW</span>
                        
                      </div>
                      <div className="card-body">
                          <p className="list-item-heading mb-4">Homemade Cheesecake with Fresh Berries and Mint
                          </p>
                          <footer>
                            <button className='btn btn-success'>Grab a Deal</button>
                          </footer>
                      </div>
                  </div>
              </div>
              
          </div>
            

            

          </div>

        </div>




        <div className="section footer mb-0">
          <div className="container">
            <div className="row footer-row">
              <div className="col-12 text-right">
                <a className="btn btn-circle btn-outline-semi-light footer-circle-button scrollTo" href="#home"
                  id="footerCircleButton"><i className="simple-icon-arrow-up"></i></a>
              </div>
              <div className="col-12 text-center footer-content">
                <a href="#home" className="scrollTo">
                  <img className="footer-logo" alt="footer logo" src="logos/white-full.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="separator mt-5"></div>
          <div className="container copyright pt-5 pb-5">
            <div className="row">
              <div className="col-12"></div>
              <div className="col-12 text-center">
                <p className="mb-0">2020 © ColoredStrategies</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}

export default App;
