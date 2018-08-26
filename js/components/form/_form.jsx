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

    handleChange = (e) => {
        //tu sprawdza mi tylko, czy w niego kliknęłam
        this.setState({
            boxesChanged: [...this.state.boxesChanged, e.target],
        });

    };

    handleSubmit = (e) => {
        e.preventDefault();

        let values = [];
        let names = [];
        this.state.boxesChanged.forEach(el => {
            if(el.checked) {
                values.push(el.value);
                names.push(el.name);
            }
        });
        e.target.reset();

        if(typeof this.props.getChosenFilters === 'function') {
            this.props.getChosenFilters(values, names);
        }

        if(typeof this.props.hideFilters === 'function') {
            this.props.hideFilters(e);
        }

        this.setState({
            boxesChanged: []            //!!!!!!!!!!!! reset
        });
    };

    render() {
        let checkboxes = this.state.checkboxArr.map((el, i) => {
            return <li key={`${this.state.name}-${i}`}>
                <label className="filters-checkbox">
                    <input type="checkbox"
                           name={el.txt}
                           value={el.value}
                           onChange={(e) => this.handleChange(e)}/>
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