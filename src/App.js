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

const  App = () => {
  return (
    <div className="App">
      <NavBar

      />
        <main>
          <Switch>
              <Route
                component={HomePage} path='/portfolio' 
              />
              <Route
                component={AboutMe} path='/aboutme'
              />
              <Route
                component={Blogs} path='/blogs'
              />  
              <Route
                component={Contact} path='/contact'
              />
              {/* <Route
                // component={Footer} come back to this
              /> */}
              <Route
                component={Projects} path='/projects'
              />
              <Route
                component={Skills} path='/skills'
              />
          </Switch>
        </main>
    </div>
  )
}

export default App
