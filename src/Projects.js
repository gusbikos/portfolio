import Resume from './Gus Bikos SE Resume.pdf'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="max width">
                <h2 className="title">My projects</h2>
                <h4 className="notice">Please check my <a href="https://github.com/gusbikos">Github</a> or <a href={Resume}>resume</a> to see project demos and repos</h4>
                <div className="project-content">
                    <div className="card">
                        <div className="box">
                            <div className="text">Spartan Fitness</div>
                            <p>A web app for a gym with a section to purchase products through a cart, and scheduling available classes</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Expense Tracker</div>
                            <p>A web app for budgeting, and tracking your expenses and deposits while investing with a stock portfolio</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Sightseeing</div>
                            <p>A CLI terminal application made for tourists in the NYC/CHI area to select a landmark  they would like to visit</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects