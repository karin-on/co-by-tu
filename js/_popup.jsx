import React from 'react';

class Popup extends React.Component {

    render() {
        return (
            <div className="film-card-popup">
                <div className="film-card-details-wrapper">
                    <div className="film-card-details">

                        <div className="film-card-details-top">
                            <button className="film-card-details-close-btn">
                                <span></span>
                                <span></span>
                            </button>
                        </div>


                        <div className="film-card-details-middle">
                            <div className="film-poster-details"></div>

                            <div className="film-description-details">
                                <h4 className="film-title">
                                    To nie jest kraj dla starych ludzi albo jeszcze dłuższy tytuł
                                </h4>
                                <p>reż.: <span className="film-director">jakiś director</span>
                                </p>
                                <p>rok prod.: <span className="film-prod-year">2018</span>
                                </p>
                                <p>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <span className="film-rate"> 10</span>
                                </p>
                            </div>
                        </div>

                        <div className="film-card-details-bottom">
                            <p className="film-card-details-descr">
                                Steven zostaje zmuszony do podjęcia niewyobrażalnego poświęcenia, gdy przyjęty przez niego pod własny dach chłopiec radykalnie zmienia swoje zachowanie. Steven zostaje zmuszony do podjęcia niewyobrażalnego poświęcenia, gdy przyjęty przez niego pod własny dach chłopiec radykalnie zmienia swoje zachowanie.
                            </p>
                        </div>


                    </div>
                </div>
            </div>

        );
    }
}

export default Popup;