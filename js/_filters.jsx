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
        let checkboxes = this.state.checkboxArr.map((el, i) => {
            return <li key={`${this.state.name}-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name={el.txt}
                           value={el.value}
                           onChange={(e) => this.handleChange(e)}/>
                    <span></span>
                    {el.txt}
                </label>
            </li>
        });

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
            showFilters: false,
        }
        this.media = window.matchMedia('(max-width: 641px)');
    }

    componentDidMount() {
        this.media.addListener(this.mediaListener)
    }

    componentWillUnmount() {
        this.media.removeListener(this.mediaListener)
    }

    mediaListener = (m) => {
        if (this.media.matches) {
            this.setState({
                showFilters: false
            })
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
            // showFilters: false
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
        const openClass = this.state.showFilters ? 'open' : null;
        const openBtnClass = this.state.showFilters ? 'opened' : null;

        let forms = <div className={`filters-forms ${openClass}`}>
            <Form getChosenFilters={this.getChosenFilters}
                  hideFilters={e => this.hideFilters(e)}
                  title='mam ochotę na...'
                  checkboxArr={feelingArr}/>

            <Form getChosenFilters={this.getChosenFilters}
                  hideFilters={e => this.hideFilters(e)}
                  title='tematy'
                  checkboxArr={topicsArr}/>

            <Form getChosenFilters={this.getChosenFilters}
                  hideFilters={e => this.hideFilters(e)}
                  title='gatunki'
                  checkboxArr={genreArr}/>
        </div>;

        return (
            <div className="filters">
                <h3 className="filters-title">
                    filtruj
                </h3>
                <button className={`mob-filters-show-btn ${openBtnClass}`} onClick={this.toggleFilters}>
                    <span></span>
                    <span></span>
                </button>

                {forms}

            </div>
        );
    }
}

export default Filters;