import React from 'react';
import ProjectBox from './ProjectBox';
import TindogImage from '../images/Tindog-Clone.png';
import ClockImage from '../images/Clock.png'; 
import CocaColaImage from '../images/Kinely-Clone.png';
import NetflixImage from '../images/Netflix-clone.png';
import NumberGuessingImage from '../images/number-guessing-game.png';
import OLXImage from '../images/Olx-Clone.png'; 
import PaintContEcommerceImage from '../images/Paintcont-Ecommerce.png';
import PaintContServiceImage from '../images/Paintcont-Service.png'; 
import PortfolioImage from '../images/Portfolio.png'; 
import SwiggyImage from '../images/Swiggy-clone.png'; 
import TodoImage from '../images/To-do.png'; 
import UserManagementImage from '../images/usermanagement.png';
import peshiyo from '../images/peshiyo.png';
import Cursor from './Cursor';


const Projects = () => {
  return (
    <div>
      <Cursor />
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={peshiyo} projectName="Peshiyo-Fragrance" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
        <ProjectBox projectPhoto={ClockImage} projectName="Clock" />
        <ProjectBox projectPhoto={CocaColaImage} projectName="CocaCola" />
        <ProjectBox projectPhoto={NetflixImage} projectName="Netflix" />
        <ProjectBox projectPhoto={NumberGuessingImage} projectName="NumberGuessing" />
        <ProjectBox projectPhoto={OLXImage} projectName="OLX" />
        <ProjectBox projectPhoto={PaintContEcommerceImage} projectName="PaintContEcommerce" />
        <ProjectBox projectPhoto={PaintContServiceImage} projectName="PaintContService" />
        <ProjectBox projectPhoto={PortfolioImage} projectName="Portfolio" />
        <ProjectBox projectPhoto={SwiggyImage} projectName="Swiggy" />
        <ProjectBox projectPhoto={TodoImage} projectName="Todo" />
        <ProjectBox projectPhoto={UserManagementImage} projectName="UserManagement" />
      </div>
    </div>
  );
};

export default Projects;