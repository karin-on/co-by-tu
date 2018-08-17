import React from 'react';

import genreArr from './_filters-genre-checkboxes';
import feelingArr from './_filters-feeling-checkboxes';
import topicsArr from './_filters-topics-checkboxes';


class FeelingForm extends React.Component {
    render() {
        let feelingCheckboxes = [];
        for (let i = 0; i < feelingArr.length; i++) {
            let li = <li key={`feeling-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name="feeling"
                           value={feelingArr[i].value}
                           // checked={this.state.checked}
                    />
                    <span></span>
                    {feelingArr[i].txt}
                </label>
            </li>
            feelingCheckboxes.push(li);
        }

        return(
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
        );
    }
}

class TopicsForm extends React.Component {
    render() {
        let topicsCheckboxes = [];
        for (let i = 0; i < topicsArr.length; i++) {
            let li = <li key={`topics-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name="topics"
                           value={topicsArr[i].value}
                           // checked={this.state.checked}
                    />
                    <span></span>
                    {topicsArr[i].txt}
                </label>
            </li>
            topicsCheckboxes.push(li);
        }

        return (
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
        );
    }
}


class GenreCheckboxes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxesChanged: []
        }
    }

    handleChange = (e) => {
        this.setState({
            boxesChanged: e.target.checked === true ?
                [...this.state.boxesChanged, e.target] :
                [...this.state.boxesChanged]
        });
        if(typeof this.props.getValuesChecked === 'function') {
            this.props.getValuesChecked([...this.state.boxesChanged, e.target]);
        }
    };

    render() {
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

        return <ul className="genre-list">
            {genreCheckboxes}
            </ul>
    }
}

class GenreForm extends React.Component {
    getValuesChecked = (arr) => {
        let values = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                values.push(arr[i].value)
            }
        }
        console.log(values);
    };

    handleSubmit = (e) => {
        e.preventDefault();

    };

    render() {
        return (
            <div className="filters-section-genre">
                <h4 className="filters-genre-title">gatunki</h4>
                <form className="genre-form" onSubmit={e => this.handleSubmit(e)}>

                        <GenreCheckboxes getValuesChecked={this.getValuesChecked}/>

                    <div className="filters-button-row">
                        <button type="submit">OK</button>
                    </div>
                </form>
            </div>
        );
    }
}

class Filters extends React.Component {

    filterFilms = (value) => {
        console.log(value);

    };

    render() {
        return (
            <div className="filters">
                <h3 className="filters-title">filtruj</h3>

                <FeelingForm />
                <TopicsForm />
                <GenreForm filterFilms={this.filterFilms}/>

            </div>
        );
    }
}

export default Filters;