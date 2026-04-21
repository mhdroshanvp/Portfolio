import React from 'react';

import Tilt from 'react-parallax-tilt';
import Cursor from './Cursor.jsx';
import Programming from '../LottieFiles/Programming_Computer.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaDatabase, FaCloud, FaTools, FaPlug, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const About = () => {
  return (
    <>
    <Cursor />
      <div className='AboutPage'>
        <motion.div 
          className='AboutText'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
              Hi, I’m <b>Muhammed Roshan V P</b>, a <b>MERN stack developer</b> from <b>Kerala India</b>. I’m passionate about building <b>impactful web applications</b> and turning ideas into reality through code. I specialize in creating <b>user-friendly interfaces</b> with <b>React</b> and <b>robust backends</b> with <b>Node.js</b> and <b>Express</b>.
              I’ve worked on several projects, including <b>Social Media + Booking App</b> and a <b>E-commerce</b> website. I’m always eager to take on <b>new challenges</b> and collaborate on <b>innovative ideas</b>.
              When I’m not coding, you’ll find me sipping <b>coffee</b> or brainstorming my <b>next project</b>. Let’s connect and create something <b>amazing</b> together!
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
              animationData={Programming}
              loop={true} 
            />
          </Tilt>
        </motion.div>

      </div>
      
      <motion.h1 
        className='SkillsHeading'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >Professional <b>Skillset</b></motion.h1>
      
      <div className='skills-container'>
        <motion.div className='skill-category' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h3><FaLaptopCode /> Programming Languages</h3>
          <p>JavaScript, TypeScript</p>
        </motion.div>
        <motion.div className='skill-category' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h3><FaLaptopCode /> Frontend</h3>
          <p>React.js, Tailwind CSS, JavaScript (ES6+), HTML, CSS</p>
        </motion.div>
        <motion.div className='skill-category' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h3><FaServer /> Backend</h3>
          <p>Node.js, Express.js, RESTful APIs, Authentication & Authorization, API Design</p>
        </motion.div>
        <motion.div className='skill-category' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h3><FaDatabase /> Database</h3>
          <p>MongoDB (Aggregation, Geospatial Queries)</p>
        </motion.div>
        <motion.div className='skill-category' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h3><FaPlug /> Integrations</h3>
          <p>Socket.IO, Stripe, Razorpay, Firebase, JWT, OAuth</p>
        </motion.div>
        <motion.div className='skill-category' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
          <h3><FaCloud /> Cloud & DevOps</h3>
          <p>AWS EC2, S3, Nginx, PM2, Vercel</p>
        </motion.div>
        <motion.div className='skill-category' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
          <h3><FaTools /> Tools</h3>
          <p>Git, GitHub, Postman, Figma</p>
        </motion.div>
      </div>

      <motion.h1 
        className='SkillsHeading'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >Work <b>Experience</b></motion.h1>

      <div className='experience-container'>
        <motion.div className='experience-box' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3>Backend Developer</h3>
          <h4>Flyseosys Digital Solutions (Remote) | <span>Mar 2025 – Present</span></h4>
          <ul>
            <li>Worked closely with frontend systems, ensuring efficient API integration and optimized data flow for responsive user experiences</li>
            <li>Architected and developed backend for a UAE-based salon booking platform handling API design and deployment</li>
            <li>Built RESTful geospatial APIs enabling location-based salon discovery across multiple regions</li>
            <li>Developed real-time booking system using Socket.IO with dynamic slot synchronization across multiple user roles, preventing scheduling conflicts</li>
            <li>Integrated payment systems, authentication (JWT, OAuth), and event-driven notification systems using Firebase Cloud Messaging</li>
            <li>Implemented production-level practices including validation middleware, centralized error handling, and modular service architecture</li>
            <li>Automated booking lifecycle using cron jobs and background processing</li>
          </ul>
        </motion.div>

        <motion.div className='experience-box' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h3>Frontend Developer (Freelance)</h3>
          <h4>Remote | <span>Nov 2024 – Mar 2025</span></h4>
          <ul>
            <li>Built responsive and scalable frontend applications using React.js, Tailwind CSS, and TypeScript, integrating seamlessly with backend APIs</li>
            <li>Integrated REST APIs to deliver dynamic and interactive user experiences</li>
            <li>Improved application performance and SEO across multiple projects</li>
          </ul>
        </motion.div>

        <motion.div className='experience-box' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          <h3>Full Stack Developer Intern</h3>
          <h4>Brototype, Kozhikode | <span>May 2023 – Sep 2024</span></h4>
          <ul>
            <li>Developed and deployed full-stack MERN applications from scratch, handling both frontend and backend development</li>
            <li>Built secure REST APIs using JWT authentication and MVC architecture</li>
            <li>Integrated payment systems and real-time features using Socket.IO</li>
            <li>Deployed applications using AWS EC2, Nginx, and Vercel</li>
          </ul>
        </motion.div>
      </div>

      <motion.h1 
        className='SkillsHeading'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >Education & <b>Certifications</b></motion.h1>

      <div className='edu-cert-container'>
        <motion.div className='edu-box' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3><FaGraduationCap /> Bachelor of Computer Applications (BCA)</h3>
          <p>Manipal University, Jaipur (Online) | Expected Jun 2028</p>
        </motion.div>

        <motion.div className='edu-box' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h3><FaGraduationCap /> Full Stack Web Development Bootcamp</h3>
          <p>Brototype, Kozhikode | 2023 – 2024</p>
        </motion.div>

        <motion.div className='edu-box' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          <h3><FaCertificate /> Comprehensive Guide to Server-Side Logic and Development</h3>
          <p>Coursera (Board Infinity) | Jul 2025</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="cert-link">View Certificate</a>
        </motion.div>
      </div>

    </>
  )
}

export default About