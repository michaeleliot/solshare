// src/components/Feed.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadLocations
} from './../redux/actions/actions'
const mapStateToProps = state => {
    return {
        locations: state.locations.locations
    }
}
class Feed extends Component {
    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        console.log(this.props.loadLocations())
    }

    render() {
    const locations = this.props.locations
    const locationItems = locations.map((location)=>
        <li> {location.name} </li>
    )
        return (
            <div>
              <h1> Hello World </h1>
              <ul>{locationItems}</ul>
            </div>
        );
    }
}
export default connect(mapStateToProps, { loadLocations })(Feed);
