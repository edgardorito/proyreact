import React from 'react';
import { Card, CardText } from 'material-ui/Card'

import {redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors'

export default class Benefits extends React.Component {
  render() {
    return(
        <ul>
          <Card className="Header-Benefit">
            <CardText>
              <div className="row">
                <div className="Header-Benefit-Image" style={{'backgroundColor':redA400}}>
                    <img src={process.env.PUBLIC_URL + '/images/corazon.png' } height="100px" alt="" />
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
                  <img src={process.env.PUBLIC_URL + '/images/wifi.png' } height="100px" alt=""  />
                </div>
                <div className="Header-Benefit-content">
                  <h3>¿Sin internet? No te preocupes</h3>
                  <p>Esta pagina funciona sin internet o en conexiones lentas</p>
                </div>
              </div>
            </CardText>
          </Card>
          <Card className="Header-Benefit">
            <CardText>
              <div className="row">
                <div className="Header-Benefit-Image" style={{'backgroundColor':amberA400}}>
                  <img src={process.env.PUBLIC_URL + '/images/star.png' } height="100px" alt=""  />
                </div>
                <div className="Header-Benefit-content">
                  <h3>Lugares favoritos</h3>
                  <p>Selecciona los lugares que te han cautivaron y se robaron tu corazón </p>
                </div>
              </div>
            </CardText>
          </Card>
        </ul>
    );
  }
}
