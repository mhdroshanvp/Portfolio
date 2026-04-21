import React from 'react';
import Typed from "./Typed.jsx";
import Tilt from 'react-parallax-tilt';

import Coder from '../LottieFiles/coder.json';
import Lottie from 'lottie-react';
import Cursor from './Cursor.jsx';
import Avatar from '../images/cute_roshan_hehe-3.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div >
      <Cursor />
      <div className='HomePage'>

        <motion.div 
          className='HomeText'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>Hey</h1>
          <h1>I'm <b>Muhammed Roshan Vp</b></h1>
          <Typed/>   
        </motion.div>

        <Tilt>
          <motion.img 
            className="illustration" 
            src={Avatar} 
            alt='pfp'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          />
        </Tilt>
        
      </div>

      <div className='AboutPage'>
        <motion.div 
          className='AboutText'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            MERN Stack Developer with hands-on experience building and deploying production-grade web applications using MongoDB, Express, React, and Node.js. Skilled in developing scalable full-stack applications, REST APIs, authentication systems, and real-time features — with experience in geospatial systems and payment integrations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tilt>
              <Lottie 
                className="illustration-2" 
                animationData={Coder}
                loop={true} 
              />
          </Tilt>
        </motion.div>
      </div>
    </div>
  )
}

export default Home