import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right="0"
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
      <img src={logo} height='100px' width='100px' alt='Home button' />
      <img src={menu_open} onClick={openMenu} alt='Open menu button' className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='Close menu button' className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
        {/* <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li> */}
        <li><AnchorLink className='anchor-link' offset={50} href='#extras'><p onClick={()=>setMenu("extras")}>Extras</p></AnchorLink></li>
      </ul>
      <div className='nav-contact'>Contact Me</div>
    </div>
  )
}

export default Navbar