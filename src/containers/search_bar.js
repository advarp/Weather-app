import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }

        this.inputChange = this.inputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    inputChange(event) {
        this.setState({ searchValue: event.target.value })
    }

    formSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.searchValue);
        this.setState({ searchValue: '' });
    }

    render() {
        return (
            <form onSubmit={this.formSubmit} className="col-6 offset-3">
                <div className="input-group mt-5 mb-3">
                    <input 
                        value={this.state.searchValue}
                        onChange={this.inputChange}
                        type="text"
                        className="form-control" 
                        placeholder="Type your niciest cities." 
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);