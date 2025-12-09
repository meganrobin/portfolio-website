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
            <div className='project' key={index}
              onClick={() => window.open(work.p_link_1, '_blank')}
              onMouseEnter={e => { e.currentTarget.querySelector('img').src = work.p_gif }}
              onMouseLeave={e => { e.currentTarget.querySelector('img').src = work.p_img }}
            >
              <div className='project-img-container'>
                {/* TO DO: Add alt text */}
                <img src={work.p_img} alt='' />
              </div>
              <div className='project-text-container'>
                <h2>{work.p_name}</h2>
                <div className='project-tags'>
                  {work.p_tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className='project-text-lower'>
                  <p><b>{work.p_description}</b></p>
                  <p><b>Role:</b> {work.p_contribution}</p>
                  <p><b>{work.p_link_1_description}</b><a href={work.p_link_1} target="_blank">{work.p_link_1}</a></p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Projects