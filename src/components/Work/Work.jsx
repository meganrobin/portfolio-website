import React from 'react'
import './Work.css'
import work_data from '../../assets/work/work_data'

const Work = () => {
  return (
    <div id='work' className='work'>
      <div className='work-title'>
        <h1>Internship Projects</h1>
      </div>
      <div className='work-container'>
        {work_data.map((work, index) => {
          return (
          <div className='work-item' key={index}>
            <h2>{work.w_name}</h2>
            <div className='item-sub-container'>
              <div className='work-img-container'>
                {/* TO DO: Add alt text */}
                <img src={work.w_img} alt='' />
              </div>
              <p><b>{work.w_description}</b></p> 
            </div>
          </div>
          )})}
      </div>
    </div>
  )
}

export default Work