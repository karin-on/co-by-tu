import React from 'react';

import Filters from './_filters.jsx';
import MainContent from './_main-content.jsx';

class MiddleSection extends React.Component {
    render() {
        return (
            <section className="middle-section">
                <div className="container">

                    <Filters />
                    <MainContent/>

                </div>
            </section>
        );
    }
}

export default MiddleSection;