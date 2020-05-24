import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props) {
//   return <h2>{props.oe}</h2>;
// }

// const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component {
  render() {
    const textoSegunBool = this.props.isActive ? 'On' : 'Off';
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2);

    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <div>
          <p>{this.props.objectWithInfo.key}</p>
          <p>{this.props.objectWithInfo.key2}</p>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello
          objectWithInfo={{ key: 'First value', key2: 'Second value' }}
          arrayOfNumbers={[2, 5, 8]}
          isActive
          title='Hola mundo en ReactJS'
          number={10}
        />
      </header>
    </div>
  );
}

export default App;
