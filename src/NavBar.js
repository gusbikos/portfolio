import { Link } from 'react-scroll'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'


const NavBar = () => {
    const [navBar, setNavBar] = useState(false)
    const [clickMenu, setClickMenu] = useState(true)

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
                {/* <div className="logo"><a href="#">Portfo<span>lio</span></a></div> */}
                    <SocialIcon url='https://github.com/gusbikos' bgColor className='icon' target="_blank"/>
                    <SocialIcon url='https://www.linkedin.com/in/gus-bikos/' bgColor className='icon' target="_blank"/>
                    <SocialIcon url='https://twitter.com/GusBikos' bgColor className='icon' target="_blank"/>
                    <SocialIcon url='https://dev.to/gusbikos' bgColor className='icon' target="_blank"/>
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
                            <Link to='skills' activeClass="active" spy={true} smooth={true} duration={700}>
                                Technical Skills
                            </Link>
                        </li>
                        <li>
                            <Link to='projects' activeClass="active" spy={true} smooth={true} duration={700}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to='contact' activeClass="active" spy={true} smooth={true} duration={700}>
                                Reach out to me!
                            </Link>
                        </li>
                    </ul>
                <div className="menu-btn" onClick={handleMenuClick}>
                    <i className="fas fa-bars"/>
                        <ul className={ clickMenu ? 'navbar menu' : 'navbar menu active' }>
                            <i className="fas fa-bars"/>
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
                                    <Link to='skills' onClick={setClickMenu} activeClass="active" spy={true} smooth={true} duration={700}>
                                        Technical Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link to='projects' onClick={setClickMenu} activeClass="active" spy={true} smooth={true} duration={700}>
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to='contact' onClick={setClickMenu} activeClass="active" spy={true} smooth={true} duration={700}>
                                        Reach out to me!
                                    </Link>
                                </li>
                        </ul>
                </div>
            </div>
        </nav>    
    )
}

export default NavBar