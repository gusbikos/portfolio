import Resume from './Gus Bikos SE Resume.pdf'


const AboutMe = () => {
    return (
        <section class="about" id="about">
            <div class="max-width">
                <h2 className="title">About me</h2>
                <div class="about-content">
                    <div class="column left">
                        <img src="" alt=""/>
                    </div>
                    <div className="column right">
                        <div className="text">I'm Gus and I'm a <span>Developer</span></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <a href={Resume}>View Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe