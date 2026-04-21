import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { motion } from 'framer-motion';

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TindogDesc: "This website is a landing page of Tinder but for dogs.",
    TindogGithub: "https://github.com/mhdroshanvp/tindog",
    TindogWebsite: "", 

    ClockDesc: "A landing page for a study-focused clock application.",
    ClockGithub: "https://github.com/mhdroshanvp/Clock-Project",
    ClockWebsite: "", 

    CocaColaDesc: "A clone of the Coca-Cola Kinley website.",
    CocaColaGithub: "https://github.com/mhdroshanvp/cola-kinely",
    CocaColaWebsite: "", 

    NetflixDesc: "A Netflix clone built using React. It includes API for Movies",
    NetflixGithub: "https://github.com/mhdroshanvp/Netflix-clone-React.js",
    NetflixWebsite: "", 

    NumberGuessingDesc: "A number guessing game where the user guesses a number, and the app tells them if it's higher or lower than the actual number.",
    NumberGuessingGithub: "https://github.com/mhdroshanvp/Guess-Number-Game",
    NumberGuessingWebsite: "", 

    OLXDesc: "A clone of the OLX website. This project helped me understand how to build a classifieds platform with user authentication and listings.",
    OLXGithub: "https://github.com/mhdroshanvp/olx-clone-react.js",
    OLXWebsite: "", 

    PaintContEcommerceDesc: "An e-commerce website for PaintCont. It includes features like product listings, a shopping cart, and payment integration.",
    PaintContEcommerceGithub: "https://github.com/mhdroshanvp/paintcont-ecommerce",
    PaintContEcommerceWebsite: "", 

    PaintContServiceDesc: "A social media and booking app for PaintCont. It includes features like user profiles, booking appointments, and a feed.",
    PaintContServiceGithub: "https://github.com/mhdroshanvp/paintcont-service-back-end",
    PaintContServiceWebsite: "", 

    PortfolioDesc: "My personal portfolio website built using React. It showcases my skills, projects, and contact information.",
    PortfolioGithub: "https://github.com/mhdroshanvp/Portfolio",
    PortfolioWebsite: "", 

    SwiggyDesc: "A Swiggy clone built using React. It includes features like restaurant listings, food ordering.",
    SwiggyGithub: "https://github.com/mhdroshanvp/swiggy",
    SwiggyWebsite: "", 

    TodoDesc: "A simple to-do app that allows users to add, delete, and mark tasks as completed.",
    TodoGithub: "https://github.com/mhdroshanvp/ToDo-App-React-",
    TodoWebsite: "", 

    UserManagementDesc: "A user management app that allows admins to add, edit, and delete user profiles.",
    UserManagementGithub: "https://github.com/mhdroshanvp/mern-auth-updated-version",
    UserManagementWebsite: "", 

    PeshiyoFragranceDesc: "Peshiyo-Fragrance brand (Freelance)",
    PeshiyoFragranceGithub: "https://github.com/mhdroshanvp/Peshiyo-Perfumes",
    PeshiyoFragranceWebsite: "https://peshiyo.vercel.app",

    VetkoDesc: "Production platform connecting customers, barbers, and salons with geolocation-based discovery and real-time booking. Built scalable backend with dynamic slot management and real-time booking synchronization. Integrated authentication, payment gateway, and push notification systems. Automated booking lifecycle with cron-based job scheduling.",
    VetkoGithub: "",
    VetkoWebsite: "",
  };

  const githubLink = desc[projectName + 'Github'];
  const websiteLink = desc[projectName + 'Website'];
  const description = desc[projectName + 'Desc'];

  return (
    <motion.div 
      className='projectBox'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(67, 31, 71, 0.6)" }}
    >
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {description}
        <br />
        <div className="projectLinks">
          {githubLink && (
            <a href={githubLink} target='_blank' rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='projectbtn'><FaGithub /></motion.button>
            </a>
          )}
          {websiteLink && (
            <a href={websiteLink} target='_blank' rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='projectbtn'><CgWebsite /></motion.button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectBox;