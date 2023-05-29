import React from "react";
import "./Testimonial.css";
import EnowPic from '../../assets/Rodrique.jpg'
import sister from '../../assets/sister.jpg'

export const Testimonial = () => {

  function handleClicke(event) {
    const clicked = event.target;
    clicked.style.backgroundColor = 'aqua'
    const elementToHide = document.querySelector('.one');
    elementToHide.style.display = 'none';
    const elementToShow = document.querySelector('.two');
    elementToShow.style.display = 'block';
    const element = document.querySelector('.greaters');
    element.style.backgroundColor = 'transparent';


  }
  function handleClicked(event) {
    const clicked = event.target;
    clicked.style.backgroundColor = 'aqua'
    const elementHide = document.querySelector('.two');
    elementHide.style.display = 'none';
    const elementShow = document.querySelector('.one');
    elementShow.style.display = 'block';
    const element = document.querySelector('.lessers');
    element.style.backgroundColor = 'transparent';
  }
  return (
      <>
        <div className="container mainTestimonial">
            <h2 className="testim">Testimonials</h2>
            <div  className="testimonialCards">
                <div className="cardd one"  >
                  <div  className="firstPart">
                      <div className="imageContainer">
                          <img  className="img1" src={EnowPic} alt="Enowpic" />
                      </div>
                  </div>
                  <div className="secondPart">
                    <div className="personName">
                      <h3>Enow  Myke-Austin</h3>
                      <h5>Software Engineer</h5>
                    </div>
                    <div className="texts">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quasi eum reiciendis, dolores et asperiores quis, doloremque cum laudantium obcaecati accusantium aut, dolorem mollitia perferendis.
                    </div>
                  </div>
                </div>
                <div className="cardd two">
                  <div  className="firstPart">
                      <div className="imageContainer">
                          <img  className="img1" src={sister} alt="Enowpic" />
                      </div>
                  </div>
                  <div className="secondPart">
                    <div className="personName">
                      <h3>Marriette Mokfenbam</h3>
                      <h5>Nurse/MidWife</h5>
                    </div>
                    <div className="texts">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quasi eum reiciendis, dolores et asperiores quis, doloremque cum laudantium obcaecati accusantium aut, dolorem mollitia perferendis.
                    </div>
                  </div>
                </div>
            </div>
            <div className="paggi">
              <span className="less"  onClick={handleClicke}><p  className="lessers"></p></span>
              <span className="greater"  onClick={handleClicked}><p className="greaters"></p></span>
            </div>
        </div>
      </>
  );
  }
export default Testimonial;
