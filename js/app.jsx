import React from 'react';
import ReactDOM from 'react-dom';
require('../scss/main.scss');   //tutaj zaciągamy do projektu style, nie w htmlu
import firebase from 'firebase/app';
import 'firebase/database';

import PageHeader from './_header.jsx';
import MiddleSection from './_middle-section.jsx';

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


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainObject: {}
        }
    }

    componentDidMount() {
        db.on('value', snap => {
            this.setState({
                mainObject: snap.val()
            })
        });
    }

    render() {
        //zamiana obiektu obiektów na tablicę obiektów
        let mainArray = [];
        for(let key in this.state.mainObject) {
            let el = this.state.mainObject[key];
            mainArray.push(el);
        }

        const sortFilms = (arr, key) => {       //sortowanie od ostatnio dodanego (domyślne)
            arr.sort((a,b) => {
                let x = a[key];
                let y = b[key];
                return y - x;
            })
        };
        sortFilms(mainArray, "id");

        return (
            <div>
                <PageHeader />
                <MiddleSection mainArray={mainArray}/>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});