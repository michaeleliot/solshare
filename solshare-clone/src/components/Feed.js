// src/components/Feed.js
import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {
    loadLocations
} from './../redux/actions/actions'
const mapStateToProps = state => {
    return {
        locations: state.locations.locations
    }
}
const styles = {
  card: {
    maxWidth: 345,
  },
  cardImg: {
    height: "50",
    paddingTop: '56.25%', // 16:9
  }
}

class Feed extends Component {
    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        this.props.loadLocations()
    }

    render() {
    const { classes } = this.props
    const locations = this.props.locations
    const locationItems = locations.map((location)=>
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardImg}
          image={location.feature_img}
          title={location.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {location.name}
          </Typography>
          <Typography component="p">
            {location.description}
          </Typography>
          <Typography component="p">
            {location.address}
          </Typography>
        </CardContent>
      </Card>
    </div>
    )
    return (
        <div style={{overflow: 'scroll', height: 700 }}>
          {locationItems}
        </div>
    );
    }
}


export default compose(withStyles(styles), connect(mapStateToProps, { loadLocations }))(Feed);
