import { NavLink } from 'react-router-dom'
// import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="logo"><a href="#">Portfo<span>lio</span></a></div>
                    <ul className="menu">
                        <li>
                            <NavLink to='/portfolio'>
                                Homepage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/aboutme'>
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs'>
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>
                                Reach out to me!
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects'>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/skills'>
                                Technical Skills
                            </NavLink>
                        </li>
                    </ul>
                {/* <div>
                    <SocialIcon url='https://github.com/gusbikos' className='' target="_blank"/>
                </div> */}
            </div>
        </nav>    
    )
}

export default NavBar