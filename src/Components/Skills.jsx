import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap,FaHtml5,FaCss3Alt ,FaAws} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman,SiRedux,SiTypescript,SiTailwindcss  } from "react-icons/si";


const Skills = ({skill}) => {
    const icon = {
        Html: <FaHtml5/>,
        Css: <FaCss3Alt/>,
        Aws: <FaAws/>,
        Tailwind: <SiTailwindcss/>,
        Redux: <SiRedux/>,
        Typescript: <SiTypescript/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
