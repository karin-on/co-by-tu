import React from 'react';

import Filters from './_filters.jsx';
import MainContent from './_main-content.jsx';

class MiddleSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainArray: this.props.mainArray,
            activeFilters: []
        }
    }

    getFilters = (arr) => {
        // console.log(arr);

        this.setState({
            activeFilters: arr
        })
    };


    render() {
        // console.log(this.state.filteredArray);

        return (
            <section className="middle-section">
                <div className="container">

                    <Filters getFilters={this.getFilters}/>
                    <MainContent mainArray={this.props.mainArray}
                                 activeFilters={this.state.activeFilters}/>

                </div>
            </section>
        );
    }
}

export default MiddleSection;