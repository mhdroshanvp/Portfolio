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

    VetkoDesc: "Geolocation-based salon booking platform with real-time scheduling, scalable backend, payments, authentication, and automated booking workflows.",
    VetkoGithub: "",
    VetkoWebsite: "",
  };

  const techStacks = {
    Tindog: ["HTML", "CSS", "Bootstrap"],
    Clock: ["HTML", "CSS", "JS"],
    CocaCola: ["HTML", "CSS"],
    Netflix: ["React", "API", "CSS"],
    NumberGuessing: ["JS", "DOM"],
    OLX: ["React", "Firebase"],
    PaintContEcommerce: ["React", "Node.js", "MongoDB"],
    PaintContService: ["React", "Express", "Socket.io"],
    Portfolio: ["React", "Framer Motion"],
    Swiggy: ["React", "Redux"],
    Todo: ["React", "State"],
    UserManagement: ["MERN", "Redux", "Auth"],
    PeshiyoFragrance: ["React", "Tailwind"],
    Vetko: ["Node.js", "Express", "MongoDB"],
  };

  const githubLink = desc[projectName + 'Github'];
  const websiteLink = desc[projectName + 'Website'];
  const description = desc[projectName + 'Desc'];
  const tags = techStacks[projectName] || ["React", "JavaScript"];

  return (
    <motion.div 
      className='projectBox'
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      <div className="projectContent">
        <h3 className="projectTitle">{projectName}</h3>
        
        <div className="projectTags">
          {tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        <p className="projectDesc">{description}</p>
        
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

      <motion.div 
        className="projectImagePreview"
        variants={{
          initial: { opacity: 0, y: 15, pointerEvents: "none" },
          hover: { opacity: 1, y: 0, pointerEvents: "auto" }
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img className='projectPhoto' src={projectPhoto} alt="Project display" />
        <div className="imageOverlayGradient"></div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectBox;