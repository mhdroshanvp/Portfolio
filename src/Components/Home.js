import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Pfp from '../images/HomePfp.png';
import {CiCoffeeCup} from "react-icons/ci";
import Coder from '../LottieFiles/coder.json';
import Lottie from 'lottie-react';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>MUHAMMED ROSHAN VP</b></h1>
          <Typed/>   
        </div>

        <img className="illustration" src={Pfp} alt='pfp'/>
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>Hey! I'm MERN stack developer passionate about building impactful digital experiences. I love crafting user-friendly interfaces with React and scalable backends with Node.js and Express. I’m also exploring Next.js, Three.js, and TypeScript to level up my skills.When I’m not coding, you’ll find me sipping coffee <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/> and dreaming up my next project. Let’s connect and create something awesome!</p>
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