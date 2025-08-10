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
                <a href={link.l_url} target="_blank">
                  <img src={link.l_image}/>
                </a>
              </Tooltip>
            ))}
          </div>
      </div>
      <div className='profile-text'>
        <h1>Hi, I'm Megan Robinson!</h1>
          <p>
            I'm a <b style={{ color: '#2BB273' }}>Computer Science B.S. major</b> at Cal
            Poly San Luis Obispo with a passion for using video games to tell meaningful stories.
            I have been <b style={{ color: '#2BB273' }}>developing games for 4+ years</b>, doing every step of the process including
            programming, UI/UX design, art, and animation. Whether it's building exciting gameplay experiences, crafting unique art styles, or leading creative teams, 
            I thrive in diverse environments and always push for experiences that super-charge the player's immersion.
          </p>
          <p>Currently, I'm a full-stack <b style={{ color: '#2BB273' }}>Software Engineer Intern</b> at <b style={{ color: '#2BB273' }}>PulsePoint</b>, 
            a nonprofit that helps public safety agencies notify communities to local emergencies like wildfires or floods.
          </p>
          <p>
            When I'm not programming, you can find me <b style={{color: '#2BB273' }}>crocheting</b>, <b style={{color: '#2BB273' }}>sewing</b>,
            or performing in weekly shows as vice president of Cal Poly's <b style={{color: '#2BB273' }}>improv comedy troupe</b>.
          </p>
      </div>
    </div>
  )
}

export default Profile