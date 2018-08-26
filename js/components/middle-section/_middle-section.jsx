import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import Filters from '../filters/_filters.jsx';
import MainContentHeader from '../main-content/_main-content-header.jsx';
import FilmContent from "../film-content/_film-content.jsx";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDh6U4szlRbHN-iJDc3ZEROI5XOWNcxYk8",
    authDomain: "fir-test-5bca3.firebaseapp.com",
    databaseURL: "https://fir-test-5bca3.firebaseio.com",
    projectId: "fir-test-5bca3",
    storageBucket: "fir-test-5bca3.appspot.com",
    messagingSenderId: "287567113055"
};

firebase.initializeApp(config);

const db = firebase.database().ref();

class MiddleSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainArray: [],
            filteredArray: [],
            sortedArray: [],
            pending: true,
            sortKey: '',
            clearBtn: false,
            activeFilters: ''
        }
    }

    componentDidMount() {
        db.on('value', snap => {
            const mainObject = snap.val();

            let mainArray = [];
            for(let key in mainObject) {
                let el = mainObject[key];
                mainArray.push(el);
            }
            //
            // const sortFilms = (arr, key) => {       //sortowanie od ostatnio dodanego (domyślne)
            //     arr.sort((a,b) => {
            //         let x = a[key];
            //         let y = b[key];
            //         return y - x;
            //     })
            // };
            // sortFilms(mainArray, "id");

            mainArray.sort((a,b) => b.id - a.id);


            this.setState({
                mainArray: mainArray,
                filteredArray: mainArray,
                sortedArray: mainArray,
                pending: false
            })
        });
    }

    // -----------------------------------------------------------------------------------
    getFilteredArray = (values, names) => {       //arr - tablica z filtrami(=kluczami w obiektach). przychodzi z _filters
        let uniqFilters = [...new Set(values)];    //just in case
        let uniqNames = [...new Set(names)];    //just in case

        let filteredArray = [];
        let mainArray = this.state.mainArray;

        if(uniqFilters.length > 0) {
            uniqFilters.forEach(el => {
               mainArray.forEach(item => {
                   if(item[el] === true) {
                       filteredArray.push(item);
                   }
               })
            });

            let uniqFilteredArray = [...new Set(filteredArray)];

            this.setState({
                filteredArray: uniqFilteredArray,
                activeFilters: uniqNames.join('   /   ')
            });
        } else {
            this.setState({
                filteredArray: mainArray
            });
        }
    };

    clearFilters = (e) => {
        this.setState({
            filteredArray: this.state.mainArray,
            activeFilters: ''
        });
    };

    sortArrayToLoad = (key) => {                    //udostępniana _main-content-header
        this.setState({
            sortKey: key
        });
    };

    //------------------------------- RENDER ---------------------------------
    render() {
        if(this.state.pending) {
            return (
                <section className="middle-section">
                    <div className="container">
                        <Filters getFilteredArray={this.getFilteredArray}/>

                        <div className="main-content">
                            <MainContentHeader sortArrayToLoad={this.sortArrayToLoad}
                                               clearFilters={this.clearFilters}/>

                            <div className="main-content-active-filters"></div>

                            <div className="loading">coming soon...</div>
                        </div>
                    </div>
                </section>
            )
        }


        let arrayToLoad = [];
        const mainArray = this.state.mainArray;
        const filteredArray = this.state.filteredArray;

        mainArray.forEach(elem => {
            filteredArray.forEach(item => {
                if(elem === item) {
                    arrayToLoad.push(elem);
                }
            })
        });


        // -------------------------------------- sortowanie -------------------------------------
        let key = this.state.sortKey;

        if(key === 'rate' || key === 'year') {
            const sortFilms = (arr, key) => {       //sortowanie - rate, year
                arr.sort((a,b) => {
                    let x = a[key];
                    let y = b[key];
                    return y - x;
                })
            };
            sortFilms(arrayToLoad, key);

        } else if (key === 'az') {
            const sortFilms = (a, b) => {           //sortowanie od A do Z
                let x = a.title.toUpperCase();
                let y = b.title.toUpperCase();
                let comparison = 0;
                if (x > y) {
                    comparison = 1;
                } else if (x < y) {
                    comparison = -1;
                }
                return comparison;
            };
            arrayToLoad.sort(sortFilms);
        }

        return (
            <section className="middle-section">
                <div className="container">
                    <Filters getFilteredArray={this.getFilteredArray}/>

                    <div className="main-content">
                        <MainContentHeader sortArrayToLoad={this.sortArrayToLoad}
                                            clearFilters={this.clearFilters}/>

                        <div className="main-content-active-filters">
                            {this.state.activeFilters !== '' ?
                            `aktywne filtry:  ${this.state.activeFilters}` :
                            null}
                        </div>

                        <FilmContent arrayToLoad={arrayToLoad}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MiddleSection;