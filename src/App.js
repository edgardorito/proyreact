import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import { hola } from './components/Title';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      numero: 0
    };

    this.updateNumero = this.updateNumero.bind(this);

  }

  updateNumero(){
    this.setState({
        numero: this.state.numero + 1
      });
  }


  render() {
    return (
      <section>
        <div>
          <div>
            <Title></Title>
            <h2>{this.state.numero}</h2>
            <button onClick={this.updateNumero}>Crear cuenta gratuita</button>
            <img src={process.env.PUBLIC_URL + '/images/amigo.jpg'} height="200px"/>
            <div>
              <ul>
                <li>
                  <h3>Calificacion con emociones</h3>
                  <p>Califica tus lugares con experencias, no con numeros</p>
                </li>
                <li>
                  <h3>¿Sin internet? Sin problemas</h3>
                  <p>Esta pagina funciona sin internet o conexiones lentas</p>
                </li>
                <li>
                  <h3>Tus lugares favoritos</h3>
                  <p>Define tu lista de sitios favoritos</p>
                </li>
              </ul>
            </div>
        </div>
        </div>
      </section>
    );
  }
}

export default App;
