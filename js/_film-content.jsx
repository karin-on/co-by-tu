import React from 'react';

import MiddleSection from './_middle-section.jsx';

import Popup from './_popup.jsx';


class FilmContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false
        }

    }

    openPopup = (ev) => {
        ev.preventDefault();

        this.setState({
            isPopupOpen: !this.state.isPopupOpen
        })
    };

    render() {
        let arrayToLoad = this.props.arrayToLoad;

        let films = [];

        for (let i = 0; i < arrayToLoad.length; i++) {
            let div = <div className="film-card" key={i}>
                <div className="film-poster-container">
                    <div className="film-poster"  onClick={e => this.openPopup(e)}
                         style={{backgroundImage: `url(${arrayToLoad[i].poster})`}}></div>
                </div>
                <div className="film-description">
                    <h4 className="film-title">
                        {arrayToLoad[i].title}
                    </h4>
                    <p>reż.: <span className="film-director">
                        {arrayToLoad[i].director.length <= 21 ?
                            arrayToLoad[i].director :
                            arrayToLoad[i].director.substring(0, 19) + '...'}
                        </span>
                    </p>
                    <p>rok prod.: <span className="film-prod-year">
                        {arrayToLoad[i].year}
                        </span>
                    </p>
                    <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span className="film-rate">
                            {` ${arrayToLoad[i].rate}`}
                        </span>
                    </p>
                </div>
            </div>;

            films.push(div);
        }

        return (
            <div className="film-content">
                {films}

                {this.state.isPopupOpen
                        ? <Popup arrayToLoad={arrayToLoad}/>
                        : null}
            </div>
        );
    }
}

export default FilmContent;
