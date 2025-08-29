import React, { useState } from 'react'
import './Profile.css'
import { Tooltip } from '../Tooltip/Tooltip'
import costumes_data from '../../assets/costumes_data'
import links_data from '../../assets/links_data'
import profile from '../../assets/profile.jpg'


const Profile = () => {
  const [costume_counter, updateCostumeCounter] = useState(0)
  // TODO: Add more costumes
  // TODO: Add tooltip for each link image

  return (
    <div id='home' className='profile'>
      <div className='profile-left'>
        <div className='profile-pic-wrapper'>
          <img
            onClick={() => updateCostumeCounter(costume_counter + 1)}
            src={profile}
            className='profile-pic'
            alt='Profile photo'
          />
          <img
            src={costumes_data[costume_counter % costumes_data.length].c_img}
            className='costume'
            alt={costumes_data[costume_counter % costumes_data.length].c_name}
          />
        </div>
        <div className='link-container'>
          {links_data.map((link, index) => (
            <Tooltip text={link.l_name} key={index}>
              <a href={link.l_url} target='_blank'>
                <img src={link.l_image} />
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className='profile-right'>
        <h1>Hi, I'm <span style={{ color: '#2BB273' }}>Megan Robinson</span>!</h1>
        <p>
          I'm a Computer Science major at Cal Poly San Luis Obispo with 4+ years of experience developing elegant, high-performance software.
          I specialize in building modular systems that prioritize clear structure, fluid interactions, and exceptional user experiences.
        </p>
        <p>Currently, I'm a Full-Stack Software Engineer Intern at <a href='https://www.pulsepoint.org/' target='_blank'>PulsePoint</a>,
          where I build mapping and data visualization apps that help public safety agencies get the infomation they need.
        </p>
        <p>
          When I'm not programming, you can find me crocheting, sewing,
          or performing in weekly shows as vice president of Cal Poly's improv comedy team.
        </p>
      </div>
    </div>
  )
}

export default Profile