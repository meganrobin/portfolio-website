import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'
// import Work from './components/Work/Work'

import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <Projects/>
      {/* <Work/> */}
      <Footer/>
    </div>
  )
}


export default App
