import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heal from "./etoile.png"
import './header1.css';


const Header1 = () =>{

      return (
      <div className="row main mt-5 ">
      <div className="col-lg-12  main-header  d-flex flex-column  justify-content-center ">
      <img className="img-fluid heal mt-5" alt="Responsive" src={heal}/>
      <h1 className="p">Making the healthcare experience more human</h1></div>
      <div className="row  main-main d-flex flex-row justify-content-center">
      <p className=" col-lg-6 col-sm-12 mr-3">We want patients to find the perfect doctor and book an<br/> appointment in the most easy way. The patient journey should be<br/> enjoyable, and that's why we are always next to them: to help them<br/> find the best possible care. Anytime, anywhere.</p>
      <p className=" col-lg-6 col-sm-12 ml-3">We also help doctors to better manage their practice and build their<br/> online reputation. With our integrated end-to-end solution, doctors<br/> are able not only to improve their online presence, but also to<br/> devote their time to what really matters: their patients.</p>    
  </div>
  </div>
  )
    }

  
export default Header1;