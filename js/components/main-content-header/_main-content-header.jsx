import React from 'react';


class MainContentHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    handleChange = (e) => {
        if(typeof this.props.sortArrayToLoad === 'function') {
            this.props.sortArrayToLoad(e.target.value)
        }
    };


    //---------------------- search ---------------------------

    handleSearchChange = (e) => {
        if(typeof this.props.searchTitles === 'function') {
            this.props.searchTitles(e.target.value.toLowerCase());
        }
    }



    handleClick = (e) => {
        if(typeof this.props.clearFilters === 'function') {
            this.props.clearFilters(e);
        }
    };

    render() {
        return (
            <div className="main-content-header">

                <div className="sort-and-search">

                    <div className="sort">
                        <label className="sort-label" htmlFor="sort">sortuj wg:</label>
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
                    </div>

                    <div className="search">
                        <input type="text"
                               className="search-input"
                               placeholder="szukaj po tytule"
                               onChange={e => this.handleSearchChange(e)}/>
                    </div>

                </div>

                <button className="clear-filters-btn" onClick={e => this.handleClick(e)}>
                    &times; wyczyść filtry
                </button>
            </div>
        );
    }
}

export default MainContentHeader;