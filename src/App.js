import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AboutMe from './Aboutme'
import Blogs from './Blogs'
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
          {/* <Blogs/>*/}
        </div>
    </div>
  )
}

export default App
