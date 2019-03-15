import React from 'react';
// import {Animated} from "react-animated-css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './offices.css';

const theCitys = [
    {
      srcset: "https://www.docplanner.com/images/warsaw.png",
      description: "Warsaw"
    },
    {
      srcset: "https://www.docplanner.com/images/barcelona.png",
      description: "Barcelona"
    },
    {
      srcset: "https://www.docplanner.com/images/istanbul.png",
      description: "Istanbul"
    },
    {
      srcset: "https://www.docplanner.com/images/rome.png",
      description: "Rome"
    },
    {
        srcset: "https://www.docplanner.com/images/mexico-city.png",
        description: "Mexico-city"
      },
      {
        srcset: "https://www.docplanner.com/images/curitiba.png",
        description: "Curitiba"
      }
  ]
  const City = (props) =>   
 
     <div className="city">
     <img src={props.city.srcset}/>
     <div class="figure">
    <div class="description">{props.city.description}</div>
     <span class="btn--small"><a href="">SEE OPENINGS</a></span>
    </div>
 </div>  


const Citys = (props) =>
  props.cityList.map((currentCity, i) =>
    <div key={i}>
      <City city={currentCity} />
    </div>
  )

const Offices = (props) =>{

      return <div>
      <div className="section">  
      <div className="office">
 <h1 className="office-h1">Improve the lives of millions.<br/> Change yours forever</h1>    
<p className="office-p">More than 500 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and<br/> Curitiba, our search for great talent never stops.</p>
        </div> 
        <center>
        <div className="galerie">
              <Citys cityList={theCitys} />
            </div>
            </center>
            </div>
               <div className="footer">  
               <div className="head text-center"> 
             <p>We are leaders in 8 countries: <a className="link-footer" href="">Poland</a>
                     <a className="link-footer" href="">Turkey</a>
                      <a className="link-footer" href="">Spain</a>
                       <a  className="link-footer" href="">Italy</a>
                       <a className="link-footer" href="">Mexico</a>
                     <a className="link-footer" href="">Argentina</a>
                     <a className="link-footer" href="">Brasil</a>
                        en
                     <a className="link-footer" href="" >Chile</a>
             </p>   
         </div>
         <div className="social-link"><p className="text-footer"> This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br/>
                  www.docplanner.com © 2018</p></div>
     
           </div>  
           </div> 
    }

  
export default Offices;
