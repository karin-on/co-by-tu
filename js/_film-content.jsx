import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

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


class FilmContent extends React.Component {
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
        // console.log(this.state.mainObject.film1);

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


        let films = [];

        for (let i = 0; i < mainArray.length; i++) {
            let div = <div className="film-card" key={i}>
                <div className="film-poster-container">
                    <div className="film-poster" style={{backgroundImage: `url(${mainArray[i].poster})`}}></div>
                </div>
                <div className="film-description">
                    <h4 className="film-title">{mainArray[i].title}</h4>
                    <p>reż.: <span className="film-director">{mainArray[i].director}</span></p>
                    <p>rok prod.: <span className="film-prod-year">{mainArray[i].year}</span></p>
                    <p><i className="fa fa-star" aria-hidden="true"></i> <span
                        className="film-rate">{mainArray[i].rate}</span></p>
                </div>
            </div>;

            films.push(div);
        }

        return (
            <div className="film-content">
                {films}
            </div>
        );
    }
}

export default FilmContent;
