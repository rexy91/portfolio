import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p style = {{fontSize:'16px'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h5 style={{marginTop:'0px'}}>{this.props.jobName}</h5>
          <p>{this.props.position}</p>
          <li>{this.props.descriptionLine1}</li>
          <li>{this.props.descriptionLine2}</li>
          {this.props.descriptionLine3 ? <li>{this.props.descriptionLine3}</li> : null}
          {this.props.descriptionLine3 ? <li>{this.props.descriptionLine3}</li> : null}
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
