import Reac from 'react';
import './App.css';
import Clock from './Clock';

class App extends Reac.Component {
  constructor(props) {
    super(props)
    this.state = { mostrarRelogio: true }
    this.desligarRelogio = this.desligarRelogio.bind(this);
  }

  desligarRelogio() {
    this.state ({ mostrarRelogio: false})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {this.state.mostrarRelogio && <Clock desligarRelogio={this.desligarRelogio} />}
        </header>
      </div>
    );
  }
  
}

export default App;
