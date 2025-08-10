import React from 'react'
import './Projects.css'
import projects_data from '../../assets/projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className='projects-title'>
        <h1>Featured Projects</h1>
      </div>
      <div className='projects-container'>
        {projects_data.map((work, index) => {
          return (
            <div className='project' key={index}>
              <img src={work.p_img} alt='' />
              <h2>{work.p_name}</h2>
              <p>{work.p_description}</p>
              <div>
                {work.p_tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      {/* <div className='projects-showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt='' />
      </div> */}
    </div>
    
  )
}

export default Projects