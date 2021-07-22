import './App.css'
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AboutMe from './Aboutme'
import Blogs from './Blogs'
=======
import HomePage from './HomePage'
import AboutMe from './Aboutme'
>>>>>>> parent of 6fce3c8 (Updates)
import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar'
import Projects from './Projects'
import Skills from './Skills'
import Services from './Services'

const  App = () => {
  return (
    <div className="App">
      <NavBar/>
        <div className="portfolio">
          <HomePage/>
          <AboutMe/>
          <Services/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}

export default App
