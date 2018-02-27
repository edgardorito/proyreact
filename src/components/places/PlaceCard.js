import React from 'react';
import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from  'material-ui/FlatButton';

export default class PlaceCard extends React.Component {
  render() {
    return(
        <div className = "col-xs-12 col-sm-4" key={this.props.index}>
          <Card>
            <CardMedia >
                <img src= { process.env.PUBLIC_URL + this.props.place.imageUrl } alt=""/>
            </CardMedia>
            <CardTitle title = {this.props.place.title}/>
            <CardText>{ this.props.place.description }</CardText>
            <CardActions style= {{'text-align':'right'}}>
              <FlatButton secondary={true} label= "Ver mas"/>
              <FlatButton onClick= {()=> this.props.onRemove(this.props.place)} secondary={true} label= "Ocultar"/>
            </CardActions>
          </Card>
        </div>
    );
  }
}
