import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
      this.incrementCounter = this.incrementCounter.bind(this);
      this.decrementCounter = this.decrementCounter.bind(this);
      this.multibleCounter = this.multibleCounter.bind(this);
      this.divideCounter = this.divideCounter.bind(this);
      this.resetCounter = this.resetCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
    }
    decrementCounter() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
    }
    multibleCounter() {
    this.setState({
      currentCount: this.state.currentCount * 2
    });
    }
    divideCounter() {
    this.setState({
      currentCount: this.state.currentCount /2
    });
    }
    resetCounter() {
    this.setState({
      currentCount: 0
    });
    }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
            <ul class="list-group">
                <button className="btn btn-primary list-group-item mt-1" onClick={this.incrementCounter}>Increment</button>
                <button className="btn btn-primary list-group-item mt-1" onClick={this.decrementCounter}>Decrement</button>
                <button className="btn btn-primary list-group-item mt-1" onClick={this.multibleCounter}>Multiply</button>
                <button className="btn btn-primary list-group-item mt-1" onClick={this.divideCounter}>Divide</button>
                <button className="btn btn-primary list-group-item mt-1" onClick={this.resetCounter}>Reset</button>
            </ul>
      </div>
    );
  }
}