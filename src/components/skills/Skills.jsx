// Skills.js
import React from 'react';
import Slider from 'react-slick'; // Slider import
import './Skills.scss'; // Stiller
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// İkonlar
import {
  FaJava,
  FaGithub,
  FaAws,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
} from 'react-icons/fa';
import { BiLogoSpringBoot, BiLogoTypescript } from 'react-icons/bi';
import {
  SiThealgorithms,
  SiPostgresql,
  SiHibernate,
  SiJunit5,
  SiWebpack,
  SiRedux,
  SiTailwindcss,
  SiPostman,
} from 'react-icons/si';
import { LuDatabase } from 'react-icons/lu';
import { RiJavascriptFill, RiGitMergeFill, RiNextjsFill } from 'react-icons/ri';
import { TbApi, TbJson } from 'react-icons/tb';
import { IoLogoFirebase } from 'react-icons/io5';

// Beceriler verisi
const skillsData = [
  { icon: <FaJava />, name: 'Java' },
  { icon: <BiLogoSpringBoot />, name: 'Spring Boot' },
  { icon: <SiThealgorithms />, name: 'Algorithms' },
  { icon: <LuDatabase />, name: 'SQL' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiHibernate />, name: 'Hibernate' },
  { icon: <RiGitMergeFill />, name: 'Git' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <SiJunit5 />, name: 'JUnit' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <SiPostman />, name: 'Postman' },
  { icon: <TbJson />, name: 'JSON' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaSass />, name: 'Sass' },
  { icon: <SiWebpack />, name: 'Webpack' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <RiJavascriptFill />, name: 'JavaScript' },
  { icon: <TbApi />, name: 'RESTful APIs' },
  { icon: <IoLogoFirebase />, name: 'Firebase' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <BiLogoTypescript />, name: 'TypeScript' },
  { icon: <RiNextjsFill />, name: 'Next.js' },
];

// Kart bileşeni
const SkillCard = ({ icon, name }) => (
  <div className="skill-card bg-amber-600 hover:scale-95 transition font-bold flex text-xl flex-col justify-center items-center w-32 h-24 rounded mt-6 text-[var(--text-color)]">
    {icon}
    <span className="font-normal mt-2 text-[var(--text-color)] ">{name}</span>
  </div>
);

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Ekranda gösterilecek kart sayısı
    slidesToScroll: 5, // Kaydırıldığında kayacak kart sayısı
    rows: 2, // İki satırda göster
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          rows: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          rows: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 8,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="section skillWrapper ">
      <div className="skillTopContainer">
        <p className="text-5xl pb-8">SKILLS & TOOLS</p>
        <p className="text-xl">
          Even though technology is always changing, I'm always passionate about
          picking up new abilities. I strive to create scalable and adaptable
          architecture in every project in order to offer long-term solutions.
          My objective is to deliver top-notch software solutions utilizing the
          newest technologies while elevating the customer experience.
        </p>
        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
