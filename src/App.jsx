import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <Projects/>
      <Footer/>
    </div>
  )
}


export default App
