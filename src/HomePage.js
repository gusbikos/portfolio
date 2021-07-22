import TypeWriter from './TypeWriter'
import Resume from './Gus Bikos SE Resume.pdf'

const HomePage = () => {

    return (
        <div>
            <div className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello, my name is </div>
                        <div className="text-2">Gus Bikos </div>
                        <div className="text-3">
                            <p> <TypeWriter /> </p>
                        </div>
                        <a href={Resume}>Hire me</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default HomePage