import React from 'react';
import {
    Link
} from 'react-router-dom';

class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ulClass: window.matchMedia('(max-width: 641px)').matches ? 'mob-nav-list' : 'page-nav-list'
        }
    }

    showMobMenu = () => {
        this.setState({
            ulClass: 'mob-nav-list show'
        });
    };

    hideMobMenu = () => {
        this.setState({
            ulClass: 'mob-nav-list'
        });
    };

    componentDidMount() {
        const media = window.matchMedia('(max-width: 641px)');

        media.addListener((m) => {
            if (media.matches) {
                this.setState({
                    ulClass: 'mob-nav-list'
                })
            } else {
                this.setState({
                    ulClass: 'page-nav-list'
                })
            }
        })
    }

    // componentWillUnmount() {
    //     const media = window.matchMedia('(max-width: 641px)');
    //     media.removeListener();
    // }

    render() {
        return (
            <section className="page-header">
                <div className="container">
                    <h1 className="page-logo">
                        <Link to="/" className="page-logo-link">
                            co by tu...
                        </Link>
                    </h1>

                    <nav className="page-nav">
                        
                        <ul className={this.state.ulClass}>

                            <button className="mob-nav-hide-btn" onClick={this.hideMobMenu}>
                                <span></span>
                                <span></span>
                            </button>

                            <li><Link to="/">intro</Link></li>
                            <li><Link to="/main">wszystkie filmy</Link></li>
                            <li><Link to="/about">o projekcie</Link></li>
                        </ul>

                        <button className="mob-nav-show-btn" onClick={this.showMobMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                    </nav>
                </div>
            </section>
        );
    }
}

export default PageHeader;