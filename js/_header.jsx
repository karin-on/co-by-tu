import React from 'react';


class PageHeader extends React.Component {
    render() {
        return (
            <section className="page-header">
                <div className="container">
                    <h1 className="page-logo">
                        <a href="/" className="page-logo-link">
                            co by tu...
                        </a>
                    </h1>

                    <nav className="page-nav">
                        <ul className="page-nav-list">
                            <li><a href="#">start</a></li>
                            <li><a href="#">wszystkie filmy</a></li>
                            <li><a href="#">o projekcie</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        );
    }
}

export default PageHeader;