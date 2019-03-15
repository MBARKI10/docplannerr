import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './use-section.css';
const fade = () =>
{
    return <div className="d-flex flex-row justify-content-center fade-flex  fade-flex mt-5">
    <div className="fade-flex left-fade col-lg-4 col-sm-12">
          <div className="a">
              <h2 className="paragraph">For patients</h2><br/>
             <h1 className="paragraph1">Find a doctor, book a visit and <br/>solve any health-related doubt</h1>
             <div className="docplanner-img">
             <select className="country-selecter">
              <option>CHOOSE COUNTRY</option>
              <option>Australia</option>
              <option>brazil</option>
              <option>Colombia</option>
              <option>Czech</option>
              <option>France</option>
              </select>
          </div>
          <img className="docplanner-image" height="40%" width="40%"  src="https://www.docplanner.com/img/screen-marketplace@2x.png"/>
      </div>

              </div>
              <div className="fade-flex right-fade  col-lg-4 ml-5 col-sm-12 ">
                    <div>
                        <h2 className="paragraph">For doctors</h2><br/>
                        <h1 className="paragraph1">Save time managing visits and cut no-shows by half</h1>

                         <img className="docplanner-image"  height="40%" width="40%" src="https://www.docplanner.com/img/screen-saas@2x.png"/>
                        </div>
                        </div>

                  </div>



}

export default fade; 