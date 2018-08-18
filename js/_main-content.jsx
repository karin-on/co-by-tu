import React from 'react';

import FilmContent from './_film-content.jsx'


class MainContentHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    handleChange = (e) => {
        // console.log(e.target.value);
        if(typeof this.props.sortMainArray === 'function') {
            this.props.sortMainArray(e.target.value)
        }
    };

    render() {
        return (
            <div className="main-content-header">

                <div className="sort">
                    <label htmlFor="sort">sortuj wg:
                        <div className="custom-select">
                            <select name="sort" id="sort"
                                    onChange={e => this.handleChange(e)}
                                    value={this.state.value}>
                                <option value="-">-</option>
                                <option value="az">A-Z</option>
                                <option value="rate">oceny (malejąco)</option>
                                <option value="year">roku produkcji (malejąco)</option>
                            </select>
                        </div>
                    </label>
                </div>

                <button className="clear-filters-btn">wyczyść filtry</button>
            </div>
        );
    }
}

//-------------------------------------- MainContent ---------------------------------------

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainArray: this.props.mainArray,
            selectActive: 0,
            activeFilters: this.props.activeFilters     //tablica z kluczami obiektów
        }
    }

    sortMainArray = (key) => {
        let sortedArray = [...this.props.mainArray];

        if(key === 'rate' || key === 'year') {

            const sortFilms = (arr, key) => {       //sortowanie - rate, year
                arr.sort((a,b) => {
                    let x = a[key];
                    let y = b[key];
                    return y - x;
                })
            };
            sortFilms(sortedArray, key);

        } else if (key === 'az') {
            const sortFilms = (a, b) => {           //sortowanie od A do Z
                let x = a.title.toUpperCase();
                let y = b.title.toUpperCase();
                let comparison = 0;
                if (x > y) {
                    comparison = 1;
                } else if (x < y) {
                    comparison = -1;
                }
                return comparison;
            };
            sortedArray.sort(sortFilms);
        }

        this.setState({
            mainArray: sortedArray,
            selectActive: 1
        })
    };

    render() {

        //TODO: arrayToLoad???

        let filteredArray = [];

        if(this.props.activeFilters.length > 0) {
            let mainArray = this.props.mainArray;
            let filters = this.props.activeFilters;

            for (let i = 0; i < filters.length; i++) {
                let key = filters[i];
                for (let j = 0; j < mainArray.length; j++) {
                    if(mainArray[j][key] === true) {
                        filteredArray.push(mainArray[j]);
                    }
                }
            }
        }
        console.log(filteredArray);


        return (
            <div className="main-content">
                <MainContentHeader sortMainArray={this.sortMainArray}/>
                <FilmContent mainArray={this.state.selectActive === 1 ? this.state.mainArray : this.props.mainArray}/>
            </div>
        );
    }
}

export default MainContent;