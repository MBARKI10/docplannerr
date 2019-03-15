import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import './stats.css';
// AOS.init();
const theCards = [
  {
    src: "https://www.docplanner.com/img/flag.png" ,
    srcset: "https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x",
    textheader: "Leader in 10 countries",
    text: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile",
    style: "card d-flex align-items-center mt-5"
  },
  {
    src: "https://www.docplanner.com/img/visits.png" ,
    srcset: "https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x",
    textheader: "1 million appointments",
    text: "booked last month ",
    style:"card d-flex align-items-center mt-3"
  },
  {
    src: "https://www.docplanner.com/img/patients.png" ,
    srcset: "https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x",
    textheader: "30 million unique patients",
    text: "visit us every month",
    style:"card d-flex align-items-center mt-2"
  },
  {
    src: "https://www.docplanner.com/img/doctors.png" ,
    srcset: "https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x",
    textheader: "2 million active doctor",
    text: "trust in our solutions",
    style:"card d-flex align-items-center mb-2"
  }
]

const Card = (props) => 
  <div className={props.card.style} data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
    <img className="flag" scr={props.card.src} srcset={props.card.srcset} />
    <h3 className="text-header p-2">{props.card.textheader}</h3>
    <p className="text text-center p-2">{props.card.text}
   </p>
  </div>

const Cards = (props) =>
  props.cardList.map((currentCard, i) =>
    <div key={i}>
      <Card card={currentCard} />
    </div>
  ) 


const Stats = (props) =>{
      return <div className="stats">       
      <div className="grid">
              <h1>The world's <br/>biggest healthcare platform</h1>
                  <p>We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20 countries.</p>
      </div>  
{ <div className="bloc">
    <Cards cardList={theCards} />
   </div>   }
  </div>               
    }

  
export default Stats;