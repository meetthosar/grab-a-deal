import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import RealEstate from './RealEstate';
import Products from './Products';
import Food from './Food';

const Categories = () => {
  return <div className="row mb-4 ">
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
                          {/* <button className='btn btn-warning'>Grab a Deal</button> */}
                            <Link to="/realestate" className='btn btn-warning'>Grab A Deal</Link>
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
                              <Link to="/products" className='btn btn-warning'>Grab a Deal</Link>
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
                            <Link to="/food" className='btn btn-success'>Grab a Deal</Link>
                          </footer>
                          
                      </div>
                  </div>
              </div>
              
          </div>
    ;
}

export default Categories;