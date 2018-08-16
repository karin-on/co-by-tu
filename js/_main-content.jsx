import React from 'react';

import FilmContent from './_film-content.jsx'


class ClearFiltersBtn extends React.Component {
    render() {
        return (
            <button className="clear-filters-btn">wyczyść filtry</button>
        );
    }
}

class Sort extends React.Component {
    render() {
        return (
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
        );
    }
}

class MainContentHeader extends React.Component {
    render() {
        return (
            <div className="main-content-header">
                <Sort/>
                <ClearFiltersBtn/>
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