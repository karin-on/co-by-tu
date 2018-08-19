import React from 'react';


class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isMobile: false,
            ulClass: 'page-nav-list'
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

        if (media.matches) {            //krok 1 - po wejściu na stronę
            console.log('maly');
            this.setState({
                ulClass: 'mob-nav-list'
            })
        }

        // media.addListener(function (m) {     //krok 2 - po zmianie rozdzielczości
        //     if (m.matches) {
        //         console.log('maly');
        //         this.setState({                 //setState
        //             ulClass: 'mob-nav-list'
        //         })
        //     } else {
        //         console.log('duzy');
        //         this.setState({                 //setState
        //             ulClass: 'page-nav-list'
        //         })
        //     }
        // })
    }

    componentWillUnmount() {                    //co tu ma być?????????
        const media = window.matchMedia('(max-width: 641px)');
        media.removeListener();
    }

    render() {
        console.log(this.state.ulClass);

        return (
            <section className="page-header">
                <div className="container">
                    <h1 className="page-logo">
                        <a href="/" className="page-logo-link">
                            co by tu...
                        </a>
                    </h1>

                    <nav className="page-nav">
                        <ul className={this.state.ulClass}>

                            <button className="mob-nav-hide-btn" onClick={this.hideMobMenu}>
                                <span></span>
                                <span></span>
                            </button>

                            <li><a href="">start</a></li>
                            <li><a href="">wszystkie filmy</a></li>
                            <li><a href="">o projekcie</a></li>
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