import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to='/portfolio'>
                        Homepage
                    </NavLink>
                    <NavLink to='/aboutme'>
                        About Me
                    </NavLink>
                    <NavLink to='/blogs'>
                        Blogs
                    </NavLink>
                    <NavLink to='/contact'>
                        Reach out to me!
                    </NavLink>
                    <NavLink to='/projects'>
                        Projects
                    </NavLink>
                    <NavLink to='/skills'>
                        Technical Skills
                    </NavLink>
                </nav>
                <div>
                    <SocialIcon url='https://github.com/gusbikos' className='' target="_blank"/>
                </div>
            </div>
        </header>
    )
}

export default NavBar