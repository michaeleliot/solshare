// src/components/Feed.js
import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom'

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
  },
  cardButton: {
    display: "block",
    textAlign: "initial"
  },
}

class Feed extends Component {
    componentWillMount() {
        this.props.loadLocations()
    }

    render() {
    const { classes } = this.props
    const locations = this.props.locations
    const locationItems = locations.map((location)=>
      <Card className={classes.card} key={location._id}>
        <ButtonBase className={classes.cardButton} component={Link} to={`/location/${location._id}`}>
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
        </ButtonBase>
      </Card>
    )
    return (
        <div style={{overflow: 'scroll', height: 700 }}>
          {locationItems}
        </div>
    );
    }
}


export default compose(withStyles(styles), connect(mapStateToProps, { loadLocations }))(Feed);
