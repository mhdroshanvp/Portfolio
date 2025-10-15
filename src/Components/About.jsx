import React from 'react';
import Skills from './Skills.jsx';
import Tilt from 'react-parallax-tilt';
import Cursor from './Cursor.jsx';
import Programming from '../LottieFiles/Programming_Computer.json';
import Lottie from 'lottie-react';

const About = () => {
  return (
    <>
    <Cursor />
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
              Hi, I’m <b>Muhammed Roshan V P</b>, a <b>MERN stack developer</b> from <b>Kerala India</b>. I’m passionate about building <b>impactful web applications</b> and turning ideas into reality through code. I specialize in creating <b>user-friendly interfaces</b> with <b>React</b> and <b>robust backends</b> with <b>Node.js</b> and <b>Express</b>.
              I’ve worked on several projects, including <b>Social Media + Booking App</b> and a <b>E-commerce</b> website. I’m always eager to take on <b>new challenges</b> and collaborate on <b>innovative ideas</b>.
              When I’m not coding, you’ll find me sipping <b>coffee</b> or brainstorming my <b>next project</b>. Let’s connect and create something <b>amazing</b> together!
          </p>
        </div>

          <Tilt>
            <Lottie 
              className="illustration-2" 
              animationData={Programming}
              loop={true} 
            />
          </Tilt>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Html' />
        <Skills skill='Css' />
        <Skills skill='Javascript' />
        <Skills skill='Typescript' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Tailwind' />
        <Skills skill='MongoDb' />
        <Skills skill='Express' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Redux' />
        <Skills skill='Aws' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        
      </div>
    </>
  )
}

export default About