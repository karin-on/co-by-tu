import React from 'react';

import FilmContent from './_film-content.jsx'


class MainContentHeader extends React.Component {
    render() {
        return (
            <div className="main-content-header">

                <div className="sort">
                    <label htmlFor="sort">sortuj wg:
                        <div className="custom-select">
                            <select name="sort" id="sort">
                                <option value="-">-</option>
                                <option value="az">A-Z</option>
                                <option value="rate">oceny</option>
                                <option value="year">roku produkcji</option>
                            </select>
                        </div>
                    </label>
                </div>

                <button className="clear-filters-btn">wyczyść filtry</button>
            </div>
        );
    }
}

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainArray: this.props.mainArray
        }
    }

    render() {
        return (
            <div className="main-content">
                <MainContentHeader/>
                <FilmContent mainArray={this.props.mainArray}/>
            </div>
        );
    }
}

export default MainContent;