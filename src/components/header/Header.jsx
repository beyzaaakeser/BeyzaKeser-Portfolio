import React from 'react';
import './header.scss';
import { GoDotFill } from 'react-icons/go';
import HeroImg from './../../assets/Images/HeroImg.png';
const Header = () => {
  return (
    <div className="header section">
      <div className="headerContent">
        <p className="heading">Hello . There ! 👋🏻</p>
        <div className=''>
          <h1 className="text-orange-500 pt-8">I'm Beyza Keser</h1>
          <div className="flex flex-col pt-8 gap-2">
            <span className='flex items-center'>
              <GoDotFill />
              Full Stack Developer
            </span>
            <span className='flex items-center'>
              <GoDotFill />
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
      </div>
    </div>
  );
};

export default Header;
