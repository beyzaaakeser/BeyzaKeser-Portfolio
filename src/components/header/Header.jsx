import React from 'react';
import './header.scss';
import HeroImg from './../../assets/Images/HeroImg.png';
import Element1 from './../../assets/Images/js.png';
import Element2 from './../../assets/Images/hero-shape-2.png';
import Element3 from './../../assets/Images/java.png';
import Element4 from './../../assets/Images/react.png';
import arrowTop from './../../assets/Images/media-line-top.svg';
import arrowBottom from './../../assets/Images/media-line-bottom.svg';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaMedium } from 'react-icons/fa6';
const Header = () => {
  return (
    <div className="header section">
      <div className="headerContent">
        <p className="heading">Hello . There ! 👋🏻</p>
        <div className="">
          <h1 className="text-orange-500 pt-8">I'm Beyza Keser</h1>
          <div className="flex flex-col pt-8 gap-2">
            <span className="flex items-center">
             
              Full Stack Developer
            </span>
            <span className="flex items-center">
             
              React Developer
            </span>
          </div>
        </div>

        <p>
          Driven by a love for coding and creative problem-solving, I bring
          ideas to life through elegant, efficient code. Welcome to my
          portfolio!
        </p>
      </div>

      <div className="heroImg">
        <img src={HeroImg} alt="HeroImg" />
        <img src={Element1} alt="HeroImg" className="element1" />
        <img src={Element2} alt="HeroImg" className="element2" />
        <img src={Element3} alt="HeroImg" className="element3" />
        <img src={Element4} alt="HeroImg" className="element4" />
      </div>

      <div className="social">
        <img src={arrowTop} alt="HeroImg" className="arrowTop" />
        <a
          href="https://github.com/beyzaaakeser"
          target="_blank"
          className="bg-[rgba(131_131_131)] p-2 rounded-[50%] hover:bg-amber-600 transition cursor-pointer  h-[45px] w-[45px] flex items-center justify-center"
        >
          <FaGithub className="text-xl  text-[var(--text-color)]" />
        </a>
        <a
          href="https://www.linkedin.com/in/beyzakeser/"
          target="_blank"
          className="bg-[rgba(131_131_131)] p-2 rounded-[50%] hover:bg-amber-600 transition cursor-pointer  h-[45px] w-[45px] flex items-center justify-center"
        >
          <FaLinkedin className="text-xl  text-[var(--text-color)]" />
        </a>
        <a
          href="https://medium.com/@beyzakeser"
          target="_blank"
          className="bg-[rgba(131_131_131)] p-2 rounded-[50%]  hover:bg-amber-600 transition cursor-pointer h-[45px] w-[45px] flex items-center justify-center"
        >
          <FaMedium className="text-xl text-[var(--text-color)]" />
        </a>
        <img src={arrowBottom} alt="HeroImg" className="arrowBottom" />
      </div>
    </div>
  );
};

export default Header;
