import emailjs from 'emailjs-com'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault()

    emailjs.sendForm('gmail', 'template_in8543k', e.target, 'user_ujkxZV40fBGbCk7Vh860d')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }

    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>Feel free to contact me</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Gus Bikos</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Location</div>
                                    <div className="sub-title">New York</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">gusbikos@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Message me</div>
                            <form onSubmit={sendEmail}>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Name" name="name" required></input>
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Email" name="email" required></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Subject" name="subject" required></input>
                                </div>
                                <div className="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Describe project.." name="describe project" required></textarea>
                                </div>
                                <div className="button">
                                    <input type="submit" value="Send Message"></input>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact