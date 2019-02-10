import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxArr: this.props.checkboxArr,
            boxesChanged: [],
            title: this.props.title,
            name: this.props.name
        }
    }

    handleClick = (e) => {
        this.setState({
            boxesChanged: [...this.state.boxesChanged, e.target],
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let formValid = true;
        let values = [];
        let names = [];

        this.state.boxesChanged.forEach(el => {
            if(el.checked) {
                values.push(el.value);
                names.push(el.name);
            }
        });

        if (!values.length) {
            formValid = false;
        }

        if (formValid) {
            if(typeof this.props.getChosenFilters === 'function') {
                this.props.getChosenFilters(values, names);
            }

            if(typeof this.props.hideFilters === 'function') {
                this.props.hideFilters(e);
            }

            this.setState({
                boxesChanged: []            //!reset
            });

            e.target.reset();
        }
    };

    render() {
        let checkboxes = this.state.checkboxArr.map((el, i) => {
            return <li key={`${this.state.name}-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name={el.txt}
                           value={el.value}
                           onClick={(e) => this.handleClick(e)}/>
                    <span></span>
                    {el.txt}
                </label>
            </li>
        });

        return (
            <div className="filters-section">
                <h4 className="filters-section-title">{this.state.title}</h4>
                <form className="form" onSubmit={e => this.handleSubmit(e)}>

                    <ul className="filters-list">
                        {checkboxes}
                    </ul>

                    <div className="filters-button-row">
                        <input type="submit" value='OK'></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;