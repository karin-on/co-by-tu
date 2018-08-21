import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import Filters from './_filters.jsx';
import MainContentHeader from './_main-content-header.jsx';
import FilmContent from "./_film-content.jsx";


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
            // sortActive: 0,
            // filtersActive: 0,
            pending: true,
            sortKey: '',
            clearBtn: false
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
            // console.log(mainArray);

            const sortFilms = (arr, key) => {       //sortowanie od ostatnio dodanego (domyślne)
                arr.sort((a,b) => {
                    let x = a[key];
                    let y = b[key];
                    return y - x;
                })
            };
            sortFilms(mainArray, "id");


            this.setState({
                mainArray: mainArray,
                filteredArray: mainArray,
                sortedArray: mainArray,
                pending: false
            })
        });
    }

    // ==================================== NIE KASOWAĆ !!!! ======================================
    getFilteredArray = (arr) => {       //arr - tablica z filtrami(=kluczami w obiektach). przychodzi z _filters
        let filteredArray = [];
        let mainArray = this.state.mainArray;

        if(arr.length > 0) {
            let filters = arr;                      //filters checked

            for (let i = 0; i < filters.length; i++) {
                let key = filters[i];
                for (let j = 0; j < mainArray.length; j++) {
                    if(mainArray[j][key] === true) {
                        filteredArray.push(mainArray[j]);
                    }
                }
            }

            let uniqFilteredArray = [...new Set(filteredArray)];

            this.setState({
                filteredArray: uniqFilteredArray,
                // filtersActive: 1
            });
        } else {
            this.setState({
                filteredArray: mainArray,
                // filtersActive: 1
            });
        }
    };

    clearFilters = (e) => {
        this.setState({
            filteredArray: this.state.mainArray
        });
    };


    sortArrayToLoad = (key) => {                    //udostępniana _main-content-header
        console.log(key);

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
                            <div className="loading">Loading...</div>
                        </div>
                    </div>
                </section>
            )
        }


        // let arrayToLoad = this.state.filteredArray;      //niestety nie działa, bo jak wracam do wartości domyślnej selecta, to nie czyści mi sortowania

        let arrayToLoad = [];

        // const sortedArray = this.state.sortedArray;
        // const filteredArray = this.state.filteredArray;
        //
        // sortedArray.forEach(elem => {
        //     filteredArray.forEach(item => {
        //         if(elem === item) {
        //             arrayToLoad.push(elem);
        //         }
        //     })
        // });

        const mainArray = this.state.mainArray;
        const filteredArray = this.state.filteredArray;

        mainArray.forEach(elem => {
            filteredArray.forEach(item => {
                if(elem === item) {
                    arrayToLoad.push(elem);
                }
            })
        });


        // -------------------------- czyszczenie filtrow -------------------------------------

        // if(this.state.clearBtn === true) {
        //     arrayToLoad = this.state.mainArray;
        // }


        // -------------------------------------- sortowanie -------------------------------------
        // console.log(this.state.sortKey);
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
                        <FilmContent arrayToLoad={arrayToLoad}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MiddleSection;