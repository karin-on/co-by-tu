import React from 'react';

import Filters from './_filters.jsx';
import MainContent from './_main-content.jsx';

class MiddleSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainArray: this.props.mainArray
        }
    }

    render() {
        return (
            <section className="middle-section">
                <div className="container">

                    <Filters />
                    <MainContent mainArray={this.props.mainArray}/>

                </div>
            </section>
        );
    }
}

export default MiddleSection;