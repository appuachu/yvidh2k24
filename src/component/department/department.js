import React, { useState } from 'react';
import './department.css'
import Events from '../events/events'


export default function Department() {
  const [activeSection, setActiveSection] = useState('ai');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };
  const departments = {
  cse: [
    {
      src: './assets/carouselImages/01.jpg',
      title: 'CPU Assembly',
      filename: 'cpuassembly.pdf',
      filelink: "./assets/rules/cpuassembly.pdf",
      id:"1",
      reglink:" "
    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Debugging',
      filename: 'codedebugging.pdf',
      filelink: "./assets/rules/codedebugging.pdf " ,
      id:"2",
      reglink:" "    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Anime Quiz',
      filename: 'animequiz.pdf',
      filelink: "./assets/rules/animequiz.pdf " ,
      id:"3",
      reglink:" "    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Scrambled Keyboard',
      filename: 'scrambledkeyboard.pdf',
      filelink: "./assets/rules/scrambledkeyboard.pdf " ,
      id:"4",
      reglink:" "    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Sports(BGMI)',
      filename: 'bgmi.pdf',
      filelink: "./assets/rules/bgmi.pdf " ,
      id:"5",
      reglink:" "    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'PC Hardware Exhibition',
      filename: 'hardware.pdf',
      filelink: "./assets/rules/hardware.pdf " ,
      id:"6",
      reglink:""    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Robotic Exhibition',
      filename: 'robotics.pdf',
      filelink: "./assets/rules/robotics.pdf " ,
      id:"7",
      reglink:""    },
  ],
 ai: [
    {
      src: './assets/carouselImages/02.jpg',
      title: 'Website Development',
      filename: '',
      filelink: "./assets/rules/ " ,
      id:"4",
      reglink:" "    },
    {
      src: './assets/carouselImages/02.jpg',
      title: 'AI',
      filename: 'Description for AI',
      filelink: "./assets/rules/ " ,
      id:"5",
      reglink:" "    },
    {
      src: './assets/carouselImages/02.jpg',
      title: 'AI',
      filename: 'Description for AI',
      filelink: "./assets/rules/ " ,
      id:"6",
      reglink:" "    },
  ],
  ece: [
    {
      src: './assets/carouselImages/03.jpg',
      title: 'ECE',
      filename: 'Description for ECE',
      filelink: "./assets/rules/ " ,
      id:"7",
      reglink:" "    },
    {
      src: './assets/carouselImages/03.jpg',
      title: 'ECE',
      filename: 'Description for ECE',
      filelink: "./assets/rules/ " ,
      id:"8",
      reglink:" "    },
    {
      src: './assets/carouselImages/03.jpg',
      title: 'ECE',
      filename: 'Description for ECE',
      filelink: "./assets/rules/ " ,
      id:"9",
      reglink:" "    },
  ],
  mech: [
    {
      src: './assets/carouselImages/04.jpg',
      title: 'MECH',
      filename: 'Description for MECH',
      filelink: "./assets/rules/ " ,
      id:"10",
      reglink:" "
    },
    {
      src: './assets/carouselImages/04.jpg',
      title: 'MECH',
      filename: 'Description for MECH',
      filelink: "./assets/rules/ " ,
      id:"11",
      reglink:" "
    },
    {
      src: './assets/carouselImages/04.jpg',
      title: 'MECH',
      filename: 'Description for MECH',
      filelink: "./assets/rules/ " ,
      id:"12",
      reglink:" "
    },
  ],
 civil: [
    {
      src: './assets/carouselImages/05.jpg',
      title: 'CIVIL',
      filename: 'Description for CIVIL',
      filelink: "./assets/rules/ " ,
      id:"13",
      reglink:" "
    },
    {
      src: './assets/carouselImages/05.jpg',
      title: 'CIVIL',
      filename: 'Description for CIVIL',
      filelink: "./assets/rules/ " ,
      id:"14",
      reglink:" "
    },
    {
      src: './assets/carouselImages/05.jpg',
      title: 'CIVIL',
      filename: 'Description for CIVIL',
      filelink: "./assets/rules/ " ,
      id:"15",
      reglink:" "
    },
  ],
eee: [
    {
      src: './assets/carouselImages/06.jpg',
      title: 'EEE',
      filename: 'Description for EEE',
      filelink: "./assets/rules/ " ,
      id:"16",
      reglink:" "
    },
    {
      src: './assets/carouselImages/06.jpg',
      title: 'EEE',
      filename: 'Description for EEE',
      filelink: "./assets/rules/ " ,
      id:"17",
      reglink:" "
    },
    {
      src: './assets/carouselImages/06.jpg',
      title: 'EEE',
      filename: 'Description for EEE',
      filelink: "./assets/rules/ " ,
      id:"18",
      reglink:" "
    },
  ],
  agri: [
    {
      src: './assets/carouselImages/01.jpg',
      title: 'AGRI',
      filename: 'Description for ECE',
      filelink: "./assets/rules/ " ,
      id:"19",
      reglink:" "
    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'AGRI',
      filename: 'Description for ECE',
      filelink: "./assets/rules/ " ,
      id:"20",
      reglink:" "
    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'AGRI',
      filename: 'Description for ECE',
      filelink: "./assets/rules/ " ,
      id:"21",
      reglink:" "
    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'AGRI',
      filename: 'Description for ECE',
      filelink: "./assets/rules/ " ,
      id:"22",
      reglink:" "
    },
  ]
}
  return (
    <div className='depmaincont'>
      <div className='deplist'>
        <div className="depnav">
          <div className={`depname ${activeSection === 'ai' ? 'active' : ''}`} onClick={() => handleSectionClick('ai')}>
            <a href="#ai">AI/ML</a>
          </div>
          <div className={`depname ${activeSection === 'mech' ? 'active' : ''}`} onClick={() => handleSectionClick('mech')}>
            <a href="#mech">MECH</a>
          </div>
          <div className={`depname ${activeSection === 'civil' ? 'active' : ''}`} onClick={() => handleSectionClick('civil')}>
            <a href="#civil">CIVIL</a>
          </div>
          <div className={`depname ${activeSection === 'agri' ? 'active' : ''}`} onClick={() => handleSectionClick('agri')}>
            <a href="#agri">AGRI</a>
          </div>
          <div className={`depname ${activeSection === 'ece' ? 'active' : ''}`} onClick={() => handleSectionClick('ece')}>
            <a href="#ece">ECE</a>
          </div>
          <div className={`depname ${activeSection === 'eee' ? 'active' : ''}`} onClick={() => handleSectionClick('eee')}>
            <a href="#eee">EEE</a>
          </div>
          <div className={`depname ${activeSection === 'cse' ? 'active' : ''}`} onClick={() => handleSectionClick('cse')}>
            <a href="#cse">CSE</a>
          </div>
        </div>
      </div>
      <div className='depevent'>
        {Object.keys(departments).map((deptKey) => (
          <section className="eventsec" id={deptKey} key={deptKey} style={{ display: activeSection === deptKey ? 'block' : 'none' }}>
            <Events dept={departments[deptKey]} />
          </section>
        ))}
      </div>
    </div>
  )
}
