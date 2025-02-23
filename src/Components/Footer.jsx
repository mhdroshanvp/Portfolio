import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import Cursor from './Cursor';

const Footer = () => {
  return (
    <footer>
      <Cursor />
      <div className='footerLinks'>
        <a href="https://github.com/mhdroshanvp/" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mhdroshanvp/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:roshanvp.dev@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/muhammedroshanvp/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer