import React from 'react';

import MiddleSection from './_middle-section.jsx';

class FilmContent extends React.Component {
    render() {
        // console.log(this.props.arrayToLoad);
        let arrayToLoad = this.props.arrayToLoad;
        // console.log(arrayToLoad);

        let films = [];

        for (let i = 0; i < arrayToLoad.length; i++) {
            let div = <div className="film-card" key={i}>
                <div className="film-poster-container">
                    <div className="film-poster"
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
            </div>
        );
    }
}

export default FilmContent;
