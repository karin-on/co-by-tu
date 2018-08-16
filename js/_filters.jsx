import React from 'react';


class Filters extends React.Component {
    render() {
        return (
            <div className="filters">
                <h3 className="filters-title">filtruj</h3>

                <div className="filters-section-feeling">
                    <h4 className="filters-feeling-title">mam ochotę na...</h4>
                    <form className="feeling-form">
                        <ul className="feeling-list">
                            <li>
                                <label className="filters-checkbox" htmlFor="feeling-saturday">
                                    <input type="checkbox" name="feeling" value="saturday"
                                           id="feeling-saturday"/>
                                    <span></span>
                                    sobotni wieczór z popcornem<br/>
                                </label>
                                <span className="subnote">(popcorn tylko w domu!)</span>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="feeling-tears">
                                    <input type="checkbox" name="feeling" value="tears" id="feeling-tears"/>
                                    <span></span>
                                    łzy wruszenia
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="feeling-polish">
                                    <input type="checkbox" name="feeling" value="polish" id="feeling-polish"/>
                                    <span></span>
                                    dobre polskie kino
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="feeling-humor">
                                    <input type="checkbox" name="feeling" value="humor" id="feeling-humor"/>
                                    <span></span>
                                    popraw mi humor
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="feeling-serious">
                                    <input type="checkbox" name="feeling" value="serious" id="feeling-serious"/>
                                    <span></span>
                                    zapodaj coś ciężkiego
                                </label>
                            </li>
                        </ul>
                        <div className="filters-button-row">
                            <button type="submit">OK</button>
                        </div>
                    </form>
                </div>

                <div className="filters-section-topics">
                    <h4 className="filters-topics-title">tematy</h4>
                    <form className="topics-form">
                        <ul className="topics-list">
                            <li>
                                <label className="filters-checkbox" htmlFor="topics-social">
                                    <input type="checkbox" name="topics" value="social" id="topics-social"/>
                                    <span></span>
                                    społeczne
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="topics-family">
                                    <input type="checkbox" name="topics" value="family" id="topics-family"/>
                                    <span></span>
                                    rodzina, związki, dzieci
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="topics-sexuality">
                                    <input type="checkbox" name="topics" value="sexuality"
                                           id="topics-sexuality"/>
                                    <span></span>
                                    seksualność
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="topics-ecology">
                                    <input type="checkbox" name="topics" value="ecology" id="topics-ecology"/>
                                    <span></span>
                                    ekologia
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="topics-nutrition">
                                    <input type="checkbox" name="topics" value="nutrition"
                                           id="topics-nutrition"/>
                                    <span></span>
                                    odżywianie
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="topics-sport">
                                    <input type="checkbox" name="topics" value="sport" id="topics-sport"/>
                                    <span></span>
                                    sport
                                </label>
                            </li>
                        </ul>
                        <div className="filters-button-row">
                            <button type="submit">OK</button>
                        </div>
                    </form>
                </div>

                <div className="filters-section-genre">
                    <h4 className="filters-genre-title">gatunki</h4>
                    <form className="genre-form">
                        <ul className="genre-list">
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-drama">
                                    <input type="checkbox" name="genre" value="drama" id="genre-drama"/>
                                        <span></span>
                                        dramat obyczajowy
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-action">
                                    <input type="checkbox" name="genre" value="action" id="genre-action"/>
                                        <span></span>
                                        sensacja
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-comedy">
                                    <input type="checkbox" name="genre" value="comedy" id="genre-comedy"/>
                                        <span></span>
                                        komedia
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-comedy-romance">
                                    <input type="checkbox" name="genre" value="comedy-romance"
                                           id="genre-comedy-romance"/>
                                        <span></span>
                                        komedia romantyczna
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-superhero">
                                    <input type="checkbox" name="genre" value="superhero" id="genre-superhero"/>
                                        <span></span>
                                        superbohaterowie
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-thriller">
                                    <input type="checkbox" name="genre" value="thriller" id="genre-thriller"/>
                                        <span></span>
                                        thriller
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-biography">
                                    <input type="checkbox" name="genre" value="biography" id="genre-biography"/>
                                        <span></span>
                                        biografia
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-sport">
                                    <input type="checkbox" name="genre" value="sport" id="genre-sport"/>
                                        <span></span>
                                        sportowy
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-animation">
                                    <input type="checkbox" name="genre" value="animation" id="genre-animation"/>
                                        <span></span>
                                        animacja
                                </label>
                            </li>
                            <li>
                                <label className="filters-checkbox" htmlFor="genre-documentary">
                                    <input type="checkbox" name="genre" value="documentary"
                                           id="genre-documentary"/>
                                        <span></span>
                                        dokument
                                </label>
                            </li>
                        </ul>
                        <div className="filters-button-row">
                            <button type="submit">OK</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Filters;