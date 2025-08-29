import React from 'react'
import './Projects.css'
import projects_data from '../../assets/projects_data'

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
              <div className='project-img-container'>
                <img src={work.p_img} alt='' />
              </div>
              <div className='project-text-container'>
                <h2>{work.p_name}</h2>
                <div>
                  {work.p_tags.map((tag) => (
                    <span>{tag}</span>
                  ))}
                </div>
                <p><i>Role:</i> {work.p_contribution}</p>
                <p style={{ fontWeight: 'bold' }}>{work.p_description}</p>
                <p><i>{work.p_link_1_description}</i><a href={work.p_link_1} target="_blank">{work.p_link_1}</a></p>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Projects