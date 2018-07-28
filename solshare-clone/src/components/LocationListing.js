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
    getLocation
} from './../redux/actions/actions'
const styles = {
  card: {
    maxWidth: 345,
    height: 516
  },
  cardImg: {
    height: "10%",
    paddingTop: '36.25%', // 16:9
    width: "55%",
    float: "left",
  },
  wrapper: {
  },
}
const mapStateToProps = state => {
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
      const { classes } = this.props
      const location = this.props._location
      return (
        <div className={classes.wrapper}>
            <CardMedia
              className={classes.cardImg}
              image={location.feature_img}
              title={location.name}
            />
          <Card className={classes.card}>
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
      );
    }
}


export default compose(withStyles(styles), connect(mapStateToProps, { getLocation }))(LocationListing);
