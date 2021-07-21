const Services = () => {
    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">My services</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Web Design</div>
                            <p>Ability to create a well-designed web app with beautiful and interactive content</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">Full Stack SE</div>
                            <p>Full stack software engineer for front end and back end. Can tackle any project</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Apps Design</div>
                            <p>Ability to create well-designed mobile apps with beautiful and interactive content</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services