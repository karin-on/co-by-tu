import React from 'react';

import feelingArr from './_filters-feeling-checkboxes';
import topicsArr from './_filters-topics-checkboxes';
import genreArr from './_filters-genre-checkboxes';
import MiddleSection from './_middle-section.jsx';

//-------------------------------------- Feeling --------------------------------------

class FeelingCheckboxes extends React.Component {
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
        let feelingCheckboxes = [];
        for (let i = 0; i < feelingArr.length; i++) {
            let li = <li key={`feeling-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name="feeling"
                           value={feelingArr[i].value}
                           onChange={e => this.handleChange(e)}/>
                    <span></span>
                    {feelingArr[i].txt}
                </label>
            </li>
            feelingCheckboxes.push(li);
        }

        return <ul className="feeling-list">
            {feelingCheckboxes}
        </ul>
    }
}

class FeelingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuesChecked: []
        }
    }

    getValuesChecked = (arr) => {
        let values = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                values.push(arr[i].value)
            }
        }

        this.setState({
            valuesChecked: values
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(typeof this.props.getChosenFilters === 'function') {
            this.props.getChosenFilters(this.state.valuesChecked);
        }
        e.target.reset();
    };

    render() {
        return (
            <div className="filters-section-feeling">
                <h4 className="filters-feeling-title">mam ochotę na...</h4>
                <form className="feeling-form" onSubmit={e => this.handleSubmit(e)}>

                    <FeelingCheckboxes getValuesChecked={this.getValuesChecked}/>

                    <div className="filters-button-row">
                        <input type="submit" value='OK'></input>
                    </div>
                </form>
            </div>
        );
    }
}


//-------------------------------------- Topics --------------------------------------

class TopicsCheckboxes extends React.Component {
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
        let topicsCheckboxes = [];
        for (let i = 0; i < topicsArr.length; i++) {
            let li = <li key={`topics-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name="topics"
                           value={topicsArr[i].value}
                           onChange={e => this.handleChange(e)}/>
                    <span></span>
                    {topicsArr[i].txt}
                </label>
            </li>
            topicsCheckboxes.push(li);
        }

        return <ul className="topics-list">
            {topicsCheckboxes}
        </ul>
    }
}

class TopicsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuesChecked: []
        }
    }

    getValuesChecked = (arr) => {
        let values = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                values.push(arr[i].value)
            }
        }

        this.setState({
            valuesChecked: values
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(typeof this.props.getChosenFilters === 'function') {
            this.props.getChosenFilters(this.state.valuesChecked);
        }
        e.target.reset();
    };

    render() {
        return (
            <div className="filters-section-topics">
                <h4 className="filters-topics-title">tematy</h4>
                <form className="topics-form" onSubmit={e => this.handleSubmit(e)}>

                    <TopicsCheckboxes getValuesChecked={this.getValuesChecked}/>

                    <div className="filters-button-row">
                        <input type="submit" value='OK'></input>
                    </div>
                </form>
            </div>
        );
    }
}

//-------------------------------------- Genre --------------------------------------

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
    constructor(props) {
        super(props);
        this.state = {
            valuesChecked: []
        }
    }

    getValuesChecked = (arr) => {
        let values = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                values.push(arr[i].value)
            }
        }

        this.setState({
            valuesChecked: values
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(typeof this.props.getChosenFilters === 'function') {
            this.props.getChosenFilters(this.state.valuesChecked);
        }
        e.target.reset();
    };

    render() {
        return (
            <div className="filters-section-genre">
                <h4 className="filters-genre-title">gatunki</h4>
                <form className="genre-form" onSubmit={e => this.handleSubmit(e)}>

                        <GenreCheckboxes getValuesChecked={this.getValuesChecked}/>

                    <div className="filters-button-row">
                        <input type="submit" value='OK'></input>
                    </div>
                </form>
            </div>
        );
    }
}

//--------------------------------------- Filters -----------------------------------
class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenFilters: []
        }
    }

    getChosenFilters = (arr) => {
        this.setState({
            chosenFilters: arr
        });

        if(typeof this.props.getFilteredArray === 'function') {
            this.props.getFilteredArray(arr);
        }
    };

    render() {
        return (
            <div className="filters">
                <h3 className="filters-title">filtruj</h3>

                <FeelingForm getChosenFilters={this.getChosenFilters}/>
                <TopicsForm getChosenFilters={this.getChosenFilters}/>
                <GenreForm getChosenFilters={this.getChosenFilters}/>

            </div>
        );
    }
}

export default Filters;