import React from 'react';

import Filters from './_filters.jsx';
import MainContent from './_main-content.jsx';

class MiddleSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainArray: this.props.mainArray,
            filteredArray: []
        }
    }

    getFilteredArray = (arr) => {       //arr - tablica z filtrami(=kluczami w obiektach)
        let filteredArray = [];

        if(arr.length > 0) {
            let mainArray = this.props.mainArray;
            let filters = arr;

            for (let i = 0; i < filters.length; i++) {
                let key = filters[i];
                for (let j = 0; j < mainArray.length; j++) {
                    if(mainArray[j][key] === true) {
                        filteredArray.push(mainArray[j]);
                    }
                }
            }
        }
        console.log(filteredArray);

        this.setState({
            filteredArray: filteredArray
        });
        console.log(filteredArray);
    };


    render() {
        console.log(this.state.filteredArray);

        return (
            <section className="middle-section">
                <div className="container">

                    <Filters getFilteredArray={this.getFilteredArray}/>
                    <MainContent
                        arrayToLoad={this.state.filteredArray.length > 0 ?
                            this.state.filteredArray :
                            this.props.mainArray}/>
                </div>
            </section>
        );
    }
}

export default MiddleSection;