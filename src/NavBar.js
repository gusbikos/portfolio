import { Link } from 'react-scroll'
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
                            <Link to='portfolio' activeClass="active" spy={true} smooth={true} duration={700}>
                                Homepage
                            </Link>
                        </li>
                        <li>
                            <Link to='about' activeClass="active" spy={true} smooth={true} duration={700}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to='blogs' activeClass="active" spy={true} smooth={true} duration={700}>
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to='contact' activeClass="active" spy={true} smooth={true} duration={700}>
                                Reach out to me!
                            </Link>
                        </li>
                        <li>
                            <Link to='projects' activeClass="active" spy={true} smooth={true} duration={700}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to='skills' activeClass="active" spy={true} smooth={true} duration={700}>
                                Technical Skills
                            </Link>
                        </li>
                    </ul>
                {/* <div>
                    <SocialIcon url='https://github.com/gusbikos' className='' target="_blank"/>
                </div> */}
                <div className="menu-btn" onClick={handleMenuClick}>
                    <i className="fas fa-bars"/>
                        <ul className={ clickMenu ? 'navbar menu active' : 'navbar menu' }>
                            <li>
                                <Link to='portfolio'  onClick={setClickMenu} activeClass="active" spy={true} smooth={true} duration={700}>
                                    Homepage
                                </Link>
                            </li>
                            <li>
                                <Link to='about' onClick={setClickMenu} activeClass="active" spy={true} smooth={true} duration={700}>
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link to='blogs' onClick={setClickMenu} activeClass="active" spy={true} smooth={true} duration={700}>
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link to='contact' onClick={setClickMenu} activeClass="active" spy={true} smooth={true} duration={700}>
                                    Reach out to me!
                                </Link>
                            </li>
                            <li>
                                <Link to='projects' onClick={setClickMenu} activeClass="active" spy={true} smooth={true} duration={700}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to='skills' onClick={setClickMenu} activeClass="active" spy={true} smooth={true} duration={700}>
                                    Technical Skills
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>    
    )
}

export default NavBar