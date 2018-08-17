import React from 'react';

import genreArr from './_filters-genre-checkboxes';
import feelingArr from './_filters-feeling-checkboxes';
import topicsArr from './_filters-topics-checkboxes';


class GenreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuesChecked: [],
            checked: false
        }
    }

    handleChange = (e) => {
        this.setState({
            valuesChecked: [...this.state.valuesChecked, e.target.value],
            checked: !this.state.checked
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.checked === true && typeof this.props.filterFilms === 'function') {
            this.props.filterFilms(this.state.valuesChecked);
        }

    };

    render() {
        console.log(this.state.checked);

        let genreCheckboxes = [];
        for (let i = 0; i < genreArr.length; i++) {
            let li = <li key={`genre-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name="genre"
                           value={genreArr[i].value}
                           // checked={this.state.checked}
                           onChange={e => this.handleChange(e)}/>
                    <span></span>
                    {genreArr[i].txt}
                </label>
            </li>
            genreCheckboxes.push(li);
        }

        return (
            <div className="filters-section-genre">
                <h4 className="filters-genre-title">gatunki</h4>
                <form className="genre-form" onSubmit={e => this.handleSubmit(e)}>
                    <ul className="genre-list">
                        {genreCheckboxes}
                    </ul>
                    <div className="filters-button-row">
                        <button type="submit">OK</button>
                    </div>
                </form>
            </div>
        );
    }
}

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuesChecked: [],
            checked: ''
        }
    }
    //
    // handleChange = (e) => {
    //     let arr = [...this.state.valuesChecked];
    //     if(e.target.checked) {
    //         arr.push(e.target.value);
    //     }
    //     console.log(arr);
    //
    //
    //     // this.setState({
    //     //
    //     // });
    //
    // };
    //

    filterFilms = (value) => {
        console.log(value);

        // this.setState({
        //     valuesChecked: [...this.state.valuesChecked, value]
        // });
    };

    render() {
        console.log(this.state.valuesChecked);

        let feelingCheckboxes = [];
        for (let i = 0; i < feelingArr.length; i++) {
            let li = <li key={`feeling-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name="feeling"
                           value={feelingArr[i].value}
                           checked={this.state.checked}/>
                    <span></span>
                    {feelingArr[i].txt}
                </label>
            </li>
            feelingCheckboxes.push(li);
        }

        let topicsCheckboxes = [];
        for (let i = 0; i < topicsArr.length; i++) {
            let li = <li key={`topics-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name="topics"
                           value={topicsArr[i].value}
                           checked={this.state.checked}/>
                    <span></span>
                    {topicsArr[i].txt}
                </label>
            </li>
            topicsCheckboxes.push(li);
        }

        // let genreCheckboxes = [];
        // for (let i = 0; i < genreArr.length; i++) {
        //     let li = <li key={`genre-${i}`}>
        //         <label className="filters-checkbox">
        //             <input type="checkbox"
        //                    name="genre"
        //                    value={genreArr[i].value}
        //                    checked={this.state.checked}/>
        //             <span></span>
        //             {genreArr[i].txt}
        //         </label>
        //     </li>
        //     genreCheckboxes.push(li);
        // }

        return (
            <div className="filters">
                <h3 className="filters-title">filtruj</h3>

                <div className="filters-section-feeling">
                    <h4 className="filters-feeling-title">mam ochotę na...</h4>
                    <form className="feeling-form">
                        <ul className="feeling-list">
                            {feelingCheckboxes}
                        </ul>
                        <div className="filters-button-row">
                            <button type="submit">OK</button>
                        </div>
                    </form>
                </div>

                <div className="filters-section-topics">
                    <h4 className="filters-topics-title">tematy</h4>
                    <form className="topics-form">
                        <ul className="topics-list">
                            {topicsCheckboxes}
                        </ul>
                        <div className="filters-button-row">
                            <button type="submit">OK</button>
                        </div>
                    </form>
                </div>

                <GenreForm filterFilms={this.filterFilms}/>

            </div>
        );
    }
}

export default Filters;