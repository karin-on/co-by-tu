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
            title: this.props.title,
            name: this.props.name
        }
    }

    handleChange = (e) => {
        //tu sprawdza mi tylko, czy w niego kliknęłam
        this.setState({
            boxesChanged: [...this.state.boxesChanged, e.target],
        });

    };

    handleSubmit = (e) => {
        e.preventDefault();

        let values = [];
        let names = [];
        this.state.boxesChanged.forEach(el => {
            if(el.checked) {
                values.push(el.value);
                names.push(el.name);
            }
        });
        e.target.reset();

        if(typeof this.props.getChosenFilters === 'function') {
            this.props.getChosenFilters(values, names);
        }

        if(typeof this.props.hideFilters === 'function') {
            this.props.hideFilters(e);
        }

        this.setState({
            boxesChanged: []            //!!!!!!!!!!!! reset
        });
    };

    render() {
        let checkboxes = [];
        for (let i = 0; i < this.state.checkboxArr.length; i++) {
            let li = <li key={`${this.state.name}-${i}`}>
                <label className="filters-checkbox">
                    <input key={i}
                           type="checkbox"
                           name={this.state.checkboxArr[i].txt}
                           value={this.state.checkboxArr[i].value}
                           onChange={(e) => this.handleChange(e)}/>
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
            chosenFilters: [],
            showFilters: true,
        }
    }

    toggleFilters = () => {
        this.setState({
            showFilters: !this.state.showFilters,
        })
    };

    hideFilters = (e) => {
                this.setState({
                    showFilters: !this.state.showFilters
                })

    };


    getChosenFilters = (values, names) => {                                  //arr przychodzi z Form
        this.setState({
            chosenFilters: values
        });

        if(typeof this.props.getFilteredArray === 'function') {         //GET FILTERED ARRAY udostępniana z _middle-section
            this.props.getFilteredArray(values, names);
        }
    };



    render() {

        const openClass = !this.state.showFilters ? 'open' : null;
        const openBtnClass = !this.state.showFilters ? 'opened' : null;

        let forms = <div className={`filters-forms ${openClass}`}>
            <Form getChosenFilters={this.getChosenFilters}
                  hideFilters={e => this.hideFilters(e)}
                // name='feeling'
                  title='mam ochotę na...'
                  checkboxArr={feelingArr}/>

            <Form getChosenFilters={this.getChosenFilters}
                  hideFilters={e => this.hideFilters(e)}
                // name='topics'
                  title='tematy'
                  checkboxArr={topicsArr}/>

            <Form getChosenFilters={this.getChosenFilters}
                  hideFilters={e => this.hideFilters(e)}
                // name='genre'
                  title='gatunki'
                  checkboxArr={genreArr}/>
        </div>;

        return (
            <div className="filters">
                <h3 className="filters-title">
                    filtruj
                </h3>
                <button className={`mob-filters-show-btn ${openBtnClass}`} onClick={this.toggleFilters}>
                    {/*<i className="fa fa-angle-down" aria-hidden="true"></i>*/}
                    <span></span>
                    <span></span>
                </button>


                {/*<Form getChosenFilters={this.getChosenFilters}
                      // name='feeling'
                      title='mam ochotę na...'
                      checkboxArr={feelingArr}/>

                <Form getChosenFilters={this.getChosenFilters}
                      // name='topics'
                      title='tematy'
                      checkboxArr={topicsArr}/>

                <Form getChosenFilters={this.getChosenFilters}
                      // name='genre'
                      title='gatunki'
                      checkboxArr={genreArr}/>*/}


                {forms}


            </div>
        );
    }
}

export default Filters;