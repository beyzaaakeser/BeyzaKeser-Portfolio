import React, { useState } from 'react';
import './projects.scss';
import { projectData } from './projectData';


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCategories = () => {
    return Object.keys(projectData).map((category) => (
      <div
        key={category}
        onClick={() => handleCategoryClick(category)}
        className="category-card transition"
      >
        <img src={projectData[category].image} alt={`${category} görseli`} className="category-image" />
        <p className="category-name">{category}</p>
      </div>
    ));
  };

  const renderProjects = () => {
    if (!selectedCategory) return null;

    return projectData[selectedCategory].projects.map((project) => (
      <div key={project.id} className="project-card">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>
    ));
  };

  return (
    <div className="section projects">
      <p className="text-5xl pb-6">PROJECTS</p>
      <div className="categories">{renderCategories()}</div>
      <div className="projects-list">{renderProjects()}</div>
    </div>
  );
};

export default Projects;
