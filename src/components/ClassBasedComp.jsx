import { Component } from "react";

export default class ClassBasedComp extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      userName: "",
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    console.log("component did mount trigger");
  }

  componentDidUpdate() {
    console.log("component did Update trigger");
  }

  componentWillUnmount() {
    console.log("component will Unmount trigger");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    // console.log(this.state);

    return (
      <div>
        <p className="text-center mb-5 text-4xl font-bold">
          {this.state.count}
        </p>
        <div className="flex gap-4">
          <button
            onClick={this.decrement}
            className="px-4 py-1.5 rounded bg-blue-200"
          >
            Decrement
          </button>
          <button
            onClick={this.increment}
            className="px-4 py-1.5 rounded bg-green-200"
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}
