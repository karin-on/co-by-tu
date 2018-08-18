import React from 'react';


class FilmContent extends React.Component {
    // constructor(props) {            //states raczej niepotrzebne, bo nie zmieniam tu ni w tablicy filmów, jedynie je wyświetlam
    //     super(props);
    //     this.state = {
    //         mainArray: this.props.mainArray
    //     }
    // }

    render() {
        let mainArray = this.props.mainArray;

        let films = [];

        for (let i = 0; i < mainArray.length; i++) {
            let div = <div className="film-card" key={i}>
                <div className="film-poster-container">
                    <div className="film-poster"
                         style={{backgroundImage: `url(${mainArray[i].poster})`}}></div>
                </div>
                <div className="film-description">
                    <h4 className="film-title">
                        {mainArray[i].title}
                    </h4>
                    <p>reż.: <span className="film-director">
                        {mainArray[i].director.length <= 21 ?
                            mainArray[i].director :
                            mainArray[i].director.substring(0, 19) + '...'}
                        </span>
                    </p>
                    <p>rok prod.: <span className="film-prod-year">
                        {mainArray[i].year}
                        </span>
                    </p>
                    <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span className="film-rate">
                            {` ${mainArray[i].rate}`}
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
