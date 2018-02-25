import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardText } from 'material-ui/Card'

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors'

import Title from './components/Title';
import './App.css';

class App extends Component {


  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div style={{ "width": "80%", "margin": "0 auto" }}>
              <div className="Header-main">
                <Title></Title>
                <RaisedButton label="Crear cuenta gratuita" secondary={true} />
                <img className="Header-ilustration" src={process.env.PUBLIC_URL + '/images/amigo.jpg'} height="200px"/>
              </div>
              <div>
                <ul>
                  <Card className="Header-Benefit">
                    <CardText>
                      <div className="row">
                        <div className="Header-Benefit-Image" style={{'backgroundColor':redA400}}>
                            <img src={process.env.PUBLIC_URL + '/images/corazon.png' } height="100px" />
                        </div>
                        <div className="Header-Benefit-content">
                          <h3>Calificacion con emociones</h3>
                          <p>Califica tus lugares con experencias, no con numeros</p>
                        </div>
                      </div>
                    </CardText>
                  </Card>
                  <Card className="Header-Benefit">
                    <CardText>
                      <div className="row">
                        <div className="Header-Benefit-Image" style={{'backgroundColor':lightBlueA400}}>
                          <img src={process.env.PUBLIC_URL + '/images/wifi.png' } height="100px" />
                        </div>
                        <div className="Header-Benefit-content">
                          <h3>¿Sin internet?</h3>
                          <p>Esta pagina funciona sin internet o en conexiones lentas</p>
                        </div>
                      </div>
                    </CardText>
                  </Card>
                  <Card className="Header-Benefit">
                    <CardText>
                      <div className="row">
                        <div className="Header-Benefit-Image" style={{'backgroundColor':amberA400}}>
                          <img src={process.env.PUBLIC_URL + '/images/star.png' } height="100px" />
                        </div>
                        <div className="Header-Benefit-content">
                          <h3>Lugares favoritos</h3>
                          <p>Selecciona los lugares que te han cautivaron y se robaron tu corazón </p>
                        </div>
                      </div>
                    </CardText>
                  </Card>
                </ul>
              </div>
            </div>
        </div>
        <div style={{ 'backgroundColor': indigo400, 'padding': '50px' }}></div>

      </MuiThemeProvider>
    );
  }
}

export default App;
