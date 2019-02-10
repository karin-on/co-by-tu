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
                    <div className="intro-part">
                        <h1 className="intro-part-title">
                            co by tu... obejrzeć?
                        </h1>
                        <p className="intro-part-text">
                            hej! witaj po dobrej stronie kina. nie znajdziesz tu złych filmów, bo szkoda na nie Twojego i mojego czasu ;) w pakiecie dużo customowych filtrów. have fun!
                        </p>
                        <Link to="/main" className="intro-link">wchodzę w to!</Link>
                    </div>

                    <div className="intro-part">
                        <h1 className="intro-part-title">
                            co by tu... przeczytać?
                        </h1>
                        <p className="intro-part-text">
                            pending...
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;