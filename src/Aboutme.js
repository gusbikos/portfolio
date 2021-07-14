import Resume from './Gus Bikos SE Resume.pdf'
import Me from './Me.JPG'

const AboutMe = () => {
    return (
        <section class="about" id="about">
            <div class="max-width">
                <h2 className="title">About me</h2>
                <div class="about-content">
                    <div class="column left">
                        <img src={Me} alt="mypic"/>
                    </div>
                    <div className="column right">
                        <div className="text">I'm Gus and I'm a <span>Developer</span></div>
                        <p>I'm a Software Engineer with 1 years of experience.  Some of my hobbies include: Playing poker, competing in video games (FPS, and sports mostly), traveling, lifting weights, MMA, reading and studying programming related material, leetcoding, learning about new technologies related to programming, building pc's, watching a good movie, oh yeah and I love coffee!  </p>
                        <a href={Resume}>View Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe