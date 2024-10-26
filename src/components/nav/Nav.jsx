import React, { useRef } from 'react';
import { TiCodeOutline } from 'react-icons/ti';
import { CgMenuRightAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import NavThemeSwitcher from './NavThemeSwitcher';
import './nav.scss';

const Nav = () => {
  let menu = useRef();
  const ShowMenu = () => {
    console.log('tıklandı');
    menu.current.classList.toggle('showMenu');
  };
  return (
    <>
      <div className="nav">
        <div className="left_Nav_Container">
          <div className="logo">
            <Link to="/" className="text-[36px] ">
              <div className="flex items-center gap-1 whitespace-nowrap flex-nowrap text-[#fff]">
                <h2>Beyza</h2>
                <span>
                  <TiCodeOutline className="md:text-5xl  text-orange-600" />
                </span>
                <h2>Keser</h2>
              </div>
            </Link>
          </div>
        </div>

        <div className="nav_menu" ref={menu}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="right_Nav_Container">
          <NavThemeSwitcher />

          <CgMenuRightAlt
            onClick={ShowMenu}
            id="Bars"
            className="text-[#fff] text-2xl hidden cursor-pointer  "
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
