import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer>
            <span>Created By <a href="#">Gus Bikos</a> | <span className="far fa-copyright"></span> 2021 All rights reserved.</span>
            <span className="max-width">
                <SocialIcon url='https://github.com/gusbikos' bgColor className='icon' target="_blank"/>
                <SocialIcon url='https://www.linkedin.com/in/gus-bikos/' bgColor className='icon' target="_blank"/>
                <SocialIcon url='https://twitter.com/GusBikos' bgColor className='icon' target="_blank"/>
                <SocialIcon url='https://dev.to/gusbikos' bgColor className='icon' target="_blank"/>
            </span>
            <span>Built with React + Vanilla CSS</span>
        </footer>
    )
}

export default Footer