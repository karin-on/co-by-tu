import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom';
import PageHeader from "./_header.jsx";

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <PageHeader />

                <section className="middle-section-notfound">
                    <div className="container">
                        <div className="notFound">
                            <h1 className="notFound-header">404</h1>
                            <h2 className="notFound-text">przykro mi, nie ma takiej strony...</h2>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default NotFound;