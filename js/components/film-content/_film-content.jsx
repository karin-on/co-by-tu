import React from 'react';
import ReactDOM from 'react-dom';

import Popup from '../popup/_popup.jsx';


class FilmContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false,
            filmID: ''
        }
    }

    openPopup = (e, i) => {
        e.preventDefault();

        this.setState({
            isPopupOpen: !this.state.isPopupOpen,
            filmIndex: i
        })
    };

    closePopup = (e) => {
        e.preventDefault();

        this.setState({
            isPopupOpen: !this.state.isPopupOpen
        })
    };


    render() {
        let arrayToLoad = this.props.arrayToLoad;

        let films = arrayToLoad.map((el, i) => {
            return <div className="film-card" key={i} onClick={(e, id) => this.openPopup(e, i)}>
                <div className="film-poster-container">
                    <div className="film-poster"
                         style={{backgroundImage: `url(${el.poster})`}}></div>
                </div>
                <div className="film-description">
                    <h4 className="film-title">
                        {el.title}
                    </h4>
                    <p>reż.: <span className="film-director">
                        {el.director.length <= 21 ?
                            el.director :
                            el.director.substring(0, 19) + '...'}
                        </span>
                    </p>
                    <p>rok prod.: <span className="film-prod-year">
                        {el.year}
                        </span>
                    </p>
                    <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span className="film-rate">
                            {` ${el.rate}`}
                        </span>
                    </p>
                </div>
            </div>;
        });

        let noFilmsFound = <div className="no-films-found">nie ma tu jeszcze takiego filmu</div>;

        return (
            <div className="film-content">
                {films.length !== 0 ? films :noFilmsFound}

                {this.state.isPopupOpen ?
                    <Popup arrayToLoad={arrayToLoad}
                           filmIndex={this.state.filmIndex}
                           closePopup={this.closePopup}/> :
                    null}

            </div>
        );
    }
}

export default FilmContent;
