import React from 'react'
import './Services.css'
import FULLSTACK from '../../assets/fullstack.png'
import UIUX from '../../assets/ui.ux.png'
import TUTOR from '../../assets/tutor.png'
import GD from '../../assets/GD.jpg'
import DB from '../../assets/DB.png'
import CD from '../../assets/Fab6.jpg'



export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <div className="card">
      <img src={FULLSTACK} alt="" />
      <div className="card-body">
        <h5 className="card-title">FULLSTACK DEVELOPMENT</h5>     
      </div>
    </div>
      <div className="card">
      <img src={UIUX} alt="" />
      <div className="card-body">
        <h5 className="card-title ux">UI/UX  DESIGNING</h5>     
      </div>
    </div>
      <div className="card">
      <img src={TUTOR} alt="" />
      <div className="card-body">
        <h5 className="card-title tutor">TUTORING</h5>     
      </div>
    </div>
      <div className="card">
      <img src={GD} alt="" />
      <div className="card-body">
        <h5 className="card-title tutor">GRAPHICS DESIGNING</h5>     
      </div>
    </div>
      <div className="card">
      <img src={DB} alt="" />
      <div className="card-body">
        <h5 className="card-title tutor">DATABASE DESIGN</h5>     
      </div>
    </div>
      <div className="card">
      <img src={CD} alt="" />
      <div className="card-body">
        <h5 className="card-title tutor">CLOUD  COMPUTING</h5>     
      </div>
    </div>
     
      </div>
    </section>
  );
}
export default Services;