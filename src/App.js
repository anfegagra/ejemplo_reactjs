import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

// function Hello(props) {
//   return <h2>{props.oe}</h2>;
// }

// const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component {
  render() {
    const {
      isActive,
      arrayOfNumbers,
      title,
      number,
      objectWithInfo,
      multiply,
      mainTitle
    } = this.props;

    const textoSegunBool = isActive ? 'On' : 'Off';
    const mappedNumbers = arrayOfNumbers.map(multiply);

    return (
      <div>
        {mainTitle}
        <h2>{title}</h2>
        <p>{number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <div>
          <p>{objectWithInfo.key}</p>
          <p>{objectWithInfo.key2}</p>
        </div>
      </div>
    );
  }
}

class Counter extends Component {

  state = { counter: 1 };

  render() {
    return <p>{this.state.counter}</p>
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
          multiply={(number) => number * 4}
          mainTitle={<h1>Este es el título principal</h1>}
        />
        <Counter />
      </header>
    </div>
  );
}

export default App;
