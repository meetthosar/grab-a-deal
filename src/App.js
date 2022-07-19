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
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import RealEstate from './Components/RealEstate';
import Products from './Components/Products';
import Food from './Components/Food';
import Categories from './Components/Categories';


function App() {
  return (
    <BrowserRouter>
    <div className="landing-page">
    

    <div className="main-container">
     
      
      <div className="content-container" id="home">
        <div className="section home">
          <div className="container m-10">
            <Categories/>
            <Routes>
            {/* <Route path='/' element={ <Categories/>} /> */}
        <Route path='realestate' element={<RealEstate/>}/>
        <Route path='products' element={<Products/>} />
        <Route path='food' element={<Food/>} />
        
      </Routes>
          </div>
          
        </div>

        

        <div className="section footer mb-0">
          
          <div className="separator mt-5"></div>
          <div className="container copyright pt-5 pb-5">
            <div className="row">
              <div className="col-12"></div>
              <div className="col-12 text-center">
                <p className="mb-0">2022 © GrabDeal</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
    
  </div>
  </BrowserRouter>
  );
}

export default App;
