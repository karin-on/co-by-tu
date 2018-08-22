import React from 'react';

import feelingArr from './_filters-feeling-checkboxes';
import topicsArr from './_filters-topics-checkboxes';
import genreArr from './_filters-genre-checkboxes';

//--------------------------------------- Form -----------------------------------------

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxArr: this.props.checkboxArr,
            boxesChanged: [],
            // valuesChecked: [],
            title: this.props.title,
            name: this.props.name,
        }
    }

    handleChange = (e) => {
        // this.setState({
        //     boxesChanged: e.target.checked === true ?
        //         [...this.state.boxesChanged, e.target] :
        //         [...this.state.boxesChanged]
        // });

        //tu sprawdza mi tylko, czy w niego kliknęłam
        this.setState({
            boxesChanged: [...this.state.boxesChanged, e.target]
        });

    };

    handleSubmit = (e) => {
        e.preventDefault();

        let values = [];
        this.state.boxesChanged.forEach(el => {
            if(el.checked) {
                values.push(el.value);
            }
            return values;
        });

        if(typeof this.props.getChosenFilters === 'function') {
            this.props.getChosenFilters(values);
        }

        this.setState({
            boxesChanged: []            //!!!!!!!!!!!! reset
        });

        e.target.reset();
    };

    render() {
        let checkboxes = [];
        for (let i = 0; i < this.state.checkboxArr.length; i++) {
            let li = <li key={`${this.state.name}-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name={this.state.name}
                           value={this.state.checkboxArr[i].value}
                           onChange={e => this.handleChange(e)}/>
                    <span></span>
                    {this.state.checkboxArr[i].txt}
                </label>
            </li>
            checkboxes.push(li);
        }

        return (
            <div className="filters-section">
                <h4 className="filters-section-title">{this.state.title}</h4>
                <form className="form" onSubmit={e => this.handleSubmit(e)}>

                    <ul className="filters-list">
                        {checkboxes}
                    </ul>

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

    getChosenFilters = (arr) => {                                  //arr przychodzi z Form
        this.setState({
            chosenFilters: arr
        });

        if(typeof this.props.getFilteredArray === 'function') {         //GET FILTERED ARRAY udostępniana z _middle-section
            this.props.getFilteredArray(arr);
        }
    };

    render() {
        return (
            <div className="filters">
                <h3 className="filters-title">filtruj</h3>

                <Form getChosenFilters={this.getChosenFilters}
                      name='feeling'
                      title='mam ochotę na...'
                      checkboxArr={feelingArr}/>

                <Form getChosenFilters={this.getChosenFilters}
                      name='topics'
                      title='tematy'
                      checkboxArr={topicsArr}/>

                <Form getChosenFilters={this.getChosenFilters}
                      name='genre'
                      title='gatunki'
                      checkboxArr={genreArr}/>

            </div>
        );
    }
}

export default Filters;