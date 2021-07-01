import { NavLink } from 'react-router-dom'
import { useState } from 'react'
// import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
    const [navBar, setNavBar] = useState(false)
    const [clickMenu, setClickMenu] = useState(false)

    const changeNavBarBackground = () => {
        if(window.scrollY >= 20) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    const handleMenuClick = () => {
        setClickMenu(!clickMenu)
    }

    window.addEventListener('scroll', changeNavBarBackground)

    return (
        <nav className={ navBar ? 'navbar active' : 'navbar' }>
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
                <div className="menu-btn" onClick={handleMenuClick}>
                    <i className="fas fa-bars"/>
                        <ul className={ clickMenu ? 'navbar menu active' : 'navbar menu' }>
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
                </div>
            </div>
        </nav>    
    )
}

export default NavBar