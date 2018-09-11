import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import Filters from '../filters/_filters.jsx';
import MainContentHeader from '../main-content-header/_main-content-header.jsx';
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
            // sortedArray: [],

            searchedArray: [],

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

            mainArray.sort((a,b) => b.id - a.id);       //domyślne sortowanie

            this.setState({
                mainArray: mainArray,
                filteredArray: mainArray,
                // sortedArray: mainArray,

                searchedArray: mainArray,

                pending: false
            })
        });
    }

    // -----------------------------------------------------------------------------------
    getFilteredArray = (values, names) => {
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


    //--------------------------- search ---------------------------

    searchTitles = (value) => {
        if (value !== '') {
            let searchedTitles = this.state.mainArray.filter(item => {
                return item.title.toLowerCase().includes(value.toLowerCase());
            })
            this.setState({
                searchedArray: searchedTitles
            })
        } else {
            this.setState({
                searchedArray: this.state.mainArray
            })
        }
    }


    clearFilters = (e) => {
        this.setState({
            filteredArray: this.state.mainArray,
            activeFilters: ''
        });
    };

    sortArrayToLoad = (key) => {
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
                                               searchTitles={this.searchTitles}
                                               clearFilters={this.clearFilters}/>

                            <div className="main-content-active-filters"></div>

                            <div className="loading">coming soon...</div>
                        </div>
                    </div>
                </section>
            )
        }


        //------------------------ zbiór wspólny -----------------------
        let arrayToLoad = [];
        const mainArray = this.state.mainArray;
        const filteredArray = this.state.filteredArray;
        const searchedArray = this.state.searchedArray;         //!!!!!!!!!
        console.log(searchedArray);

        mainArray.forEach(elem => {
            filteredArray.forEach(item => {
                searchedArray.forEach(el => {               //!!!!!!!!
                    if(elem === item && item === el && elem === el) {
                        arrayToLoad.push(elem);
                    }
                })
            })
        });


        // -------------------------------------- sortowanie -------------------------------------
        let key = this.state.sortKey;

        if(key === 'rate' || key === 'year') {
            const sortFilms = (key) => {            //sortowanie - rate, year
                arrayToLoad.sort((a,b) => {
                    return b[key] - a[key];
                })
            };
            sortFilms(key);

        } else if (key === 'az') {
            const sortFilms = (a, b) => {           //sortowanie od A do Z
                let x = a.title.toLowerCase();
                let y = b.title.toLowerCase();
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
                                           searchTitles={this.searchTitles}
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