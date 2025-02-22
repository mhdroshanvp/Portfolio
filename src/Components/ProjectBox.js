import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TindogDesc: "This website is a landing page of Tinder but for dogs.",
    TindogGithub: "https://github.com/mhdroshanvp/tindog",
    TindogWebsite: "#", 

    ClockDesc: "A landing page for a study-focused clock application.",
    ClockGithub: "https://github.com/mhdroshanvp/Clock-Project",
    ClockWebsite: "#", 

    CocaColaDesc: "A clone of the Coca-Cola Kinley website.",
    CocaColaGithub: "https://github.com/mhdroshanvp/cola-kinely",
    CocaColaWebsite: "#", 

    NetflixDesc: "A Netflix clone built using React. It includes API for Movies",
    NetflixGithub: "https://github.com/mhdroshanvp/Netflix-clone-React.js",
    NetflixWebsite: "#", 

    NumberGuessingDesc: "A number guessing game where the user guesses a number, and the app tells them if it's higher or lower than the actual number.",
    NumberGuessingGithub: "https://github.com/mhdroshanvp/Guess-Number-Game",
    NumberGuessingWebsite: "#", 

    OLXDesc: "A clone of the OLX website. This project helped me understand how to build a classifieds platform with user authentication and listings.",
    OLXGithub: "https://github.com/mhdroshanvp/olx-clone-react.js",
    OLXWebsite: "#", 

    PaintContEcommerceDesc: "An e-commerce website for PaintCont. It includes features like product listings, a shopping cart, and payment integration.",
    PaintContEcommerceGithub: "https://github.com/mhdroshanvp/paintcont-ecommerce",
    PaintContEcommerceWebsite: "#", 

    PaintContServiceDesc: "A social media and booking app for PaintCont. It includes features like user profiles, booking appointments, and a feed.",
    PaintContServiceGithub: "https://github.com/mhdroshanvp/paintcont-service-back-end",
    PaintContServiceWebsite: "#", 

    PortfolioDesc: "My personal portfolio website built using React. It showcases my skills, projects, and contact information.",
    PortfolioGithub: "#",
    PortfolioWebsite: "#", 

    SwiggyDesc: "A Swiggy clone built using React. It includes features like restaurant listings, food ordering.",
    SwiggyGithub: "https://github.com/mhdroshanvp/swiggy",
    SwiggyWebsite: "#", 

    TodoDesc: "A simple to-do app that allows users to add, delete, and mark tasks as completed.",
    TodoGithub: "https://github.com/mhdroshanvp/ToDo-App-React-",
    TodoWebsite: "#", 

    UserManagementDesc: "A user management app that allows admins to add, edit, and delete user profiles.",
    UserManagementGithub: "https://github.com/mhdroshanvp/mern-auth-updated-version",
    UserManagementWebsite: "#", 
    
    PeshiyoDesc: "Peshiyo-Fragrance brand (Freelance)",
    PeshiyoGithub: "https://github.com/mhdroshanvp/Peshiyo-Perfumes",
    PeshiyoWebsite: "#", 
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><FaGithub /></button>
        </a>

      </div>
    </div>
  );
};

export default ProjectBox;