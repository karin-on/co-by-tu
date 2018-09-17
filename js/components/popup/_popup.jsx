import React from 'react';


class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filmIndex: this.props.filmIndex,
            arrayToLoad: this.props.arrayToLoad,
        }
    }

    handleClick = (e) => {
        if(typeof this.props.closePopup === 'function') {
            this.props.closePopup(e);
        }
    };

    render() {
        let filmIndex = this.props.filmIndex;
        let arrayToLoad = this.props.arrayToLoad;

        return (
            <div className="film-card-popup">
                <div className="film-card-details-wrapper" onClick={e => this.handleClick(e)}></div>

                <div className="film-card-details">

                    <div className="film-card-details-top">
                        <button className="film-card-details-close-btn" onClick={e => this.handleClick(e)}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>


                    <div className="film-card-details-middle">
                        <div className="film-poster-details"
                             style={{backgroundImage: `url(${arrayToLoad[filmIndex].poster})`}}>
                        </div>

                        <div className="film-description-details">
                            <h4 className="film-title">
                                {arrayToLoad[filmIndex].title}
                            </h4>
                            <p>reż.:
                                <span className="film-director">{arrayToLoad[filmIndex].director}</span>
                            </p>
                            <p>rok prod.:
                                <span className="film-prod-year">{arrayToLoad[filmIndex].year}</span>
                            </p>
                            <p>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <span className="film-rate"> {arrayToLoad[filmIndex].rate}</span>
                            </p>
                        </div>
                    </div>

                    <div className="film-card-details-bottom">
                        <p className="film-card-details-descr">
                            {arrayToLoad[filmIndex].description}
                        </p>
                    </div>


                </div>
            </div>

        );
    }
}

export default Popup;