import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom';
import PageHeader from "./_header.jsx";

class About extends React.Component {
    render() {
        return (
            <div>
                <PageHeader />
                <section className="middle-section-about">
                    <div className="container">
                        <div className="about-header">
                            o projekcie
                        </div>
                        <div className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eaque excepturi in molestias quisquam temporibus voluptate voluptates voluptatibus? At consequatur cumque maxime molestiae perferendis quibusdam reprehenderit! Doloribus maiores nobis optio placeat qui sint suscipit vel. Architecto dolore inventore magni mollitia nemo non officiis possimus quae qui voluptatem! Atque corporis doloremque iusto quasi quidem sit tempore? A ad, aut consequatur delectus dolorum eligendi est eum fugit ipsa magni neque nostrum pariatur provident quibusdam saepe sapiente sequi sint sunt vitae voluptates. Aliquam atque autem cum doloribus ex modi molestias, nemo nobis, quibusdam quisquam totam vel. Aliquam magni nam quam sunt tenetur vitae.
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;