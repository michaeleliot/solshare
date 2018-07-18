// src/components/Feed.js
import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
    getLocation
} from './../redux/actions/actions'
const styles = {
}
const mapStateToProps = state => {
    console.log(state)
    return {
        _location: state.locations.location
    }
}


class LocationListing extends Component {
    componentWillMount() {
      var locationID = this.props.match.params.id
      this.props.getLocation(locationID)
    }

    render() {
      const location = this.props.location
      return (

          <div className="MICHAELELIOT">
          </div>
      );
    }
}


export default compose(withStyles(styles), connect(mapStateToProps, { getLocation }))(LocationListing);
