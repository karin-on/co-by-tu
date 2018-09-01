import React from 'react';

import Form from '../form/_form.jsx';
import feelingArr from '../../../data/_filters-feeling-checkboxes';
import topicsArr from '../../../data/_filters-topics-checkboxes';
import genreArr from '../../../data/_filters-genre-checkboxes';


class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenFilters: [],
            showFilters: false,
        };
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
    };

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


    getChosenFilters = (values, names) => {
        this.setState({
            chosenFilters: values
        });

        if(typeof this.props.getFilteredArray === 'function') {
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