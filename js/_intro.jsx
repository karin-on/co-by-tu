import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom';



class Intro extends React.Component {
    render() {
        return (
            <section className="middle-section-intro">
                <div className="container">
                    <div className="intro-watch">
                        <h1 className="intro-watch-title">
                            co by tu... obejrzeć?
                        </h1>
                        <p className="intro-watch-text">
                            hej hej. witaj po dobrej stronie kina. nie znajdziesz tu złych filmów, bo szkoda na nie Twojego i mojego czasu ;) do tego dużo customowych filtrów. have fun!
                        </p>
                        <Link to="/main" className="intro-link">wchodzę w to!</Link>
                    </div>

                    <div className="intro-read">
                        <h1 className="intro-read-title">
                            co by tu... przeczytać?
                        </h1>
                        <p className="intro-read-text">
                            pending...
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;