import { Component } from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Calculator />
        <Quotes />
      </div>
    );
  }
}
