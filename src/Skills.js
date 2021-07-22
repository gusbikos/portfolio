import JS from './JS.png'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                <div className="skills-content">
                    <div className="card">
                        <div className="box">
                            <div className="text">HTML</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">CSS</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i src={JS}/>
                            <div className="text">JavaScript</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Ruby</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Ruby on Rails</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">React</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Redux</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">PostgreSQL</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Git</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="text">Python</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills