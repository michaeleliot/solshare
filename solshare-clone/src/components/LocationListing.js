// src/components/Feed.js
import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


import {
    getLocation
} from './../redux/actions/actions'
const styles = {
  margin: {
    marginTop: 5
  },
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
    padding: 10,
  },
  button: {
    marginTop: 5,
  },
}
const mapStateToProps = state => {
    return {
        _location: state.locations.location
    }
}

class LocationListing extends Component {

    state = {
      amount: '',
    };

    handleChange = prop => event => {
       this.setState({ [prop]: event.target.value });
     };

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
                <Card className={classes.card}>
                    <CardContent>
                      <Typography component="p">
                        Total Project Investment: {location.total_funded}
                      </Typography>
                      <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="adornment-amount">Amount to Add</InputLabel>
                        <Input
                          id="adornment-amount"
                          value={this.state.amount}
                          onChange={this.handleChange('amount')}
                          startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                     </FormControl>
                     <Button variant="contained" color="primary" className={classes.button}>
                        Invest
                     </Button>
                    </CardContent>
                </Card>
            </Card>

        </div>
      );
    }
}


export default compose(withStyles(styles), connect(mapStateToProps, { getLocation }))(LocationListing);
