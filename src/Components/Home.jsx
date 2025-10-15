import React from 'react';
import Typed from "./Typed.jsx";
import Tilt from 'react-parallax-tilt';
import {CiCoffeeCup} from "react-icons/ci";
import Coder from '../LottieFiles/coder.json';
import Lottie from 'lottie-react';
import Cursor from './Cursor.jsx';
import Avatar from '../images/cute_roshan_hehe-1.webp';


const Home = () => {
  return (
    <div >
      <Cursor />
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hey</h1>
          <h1>I'm <b>Muhammed Roshan Vp</b></h1>
          <Typed/>   
        </div>

        <img className="illustration" src={Avatar} alt='pfp'/>
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            Hey! I'm a passionate MERN stack developer. Currently working as a Backend Developer at a service-based company, I specialize in building scalable backends using Node.js and Express, while also designing intuitive frontends with React. Let’s connect and create something awesome!
          </p>
        </div>
        <Tilt>
            <Lottie 
              className="illustration-2" 
              animationData={Coder}
              loop={true} 
            />
        </Tilt>
      </div>
    </div>
  )
}

export default Home