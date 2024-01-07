import React from 'react';
import './Dice.scss';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSass, faPython, faPhp, faSquareGithub, faJs } from '@fortawesome/free-brands-svg-icons';
import { FaHtml5, FaJs, FaMobileAlt, FaSass, FaCodeBranch, FaChrome, FaGitAlt, FaRocket,FaPython,FaPhp,FaCloud, SiAzurepipelines, FaSyncAlt, FaServer, FaAws, FaNetworkWired,FaReact } from 'react-icons/fa';

const Dice = () => {
  return (
    <div className="dice-container">
      <div className="dice standing-dice">
        <div className="dice-face face-1"><FaPhp size={50} color='#4F5D95' /></div>
        <div className="dice-face face-2"><FaPython size={50} color='#FFD43B' /></div>
        <div className="dice-face face-3"><FontAwesomeIcon icon={faSquareGithub} size="6x" /></div>
        <div className="dice-face face-4"><FaReact size={50} color='#61DAFB' /></div>
        <div className="dice-face face-5"><FaSass size={50} color='#CC6699' /></div>
        <div className="dice-face face-6"><FaJs size={50} color='#F7DF1E' /></div>
      </div>
    </div>
  );
};

export default Dice;

