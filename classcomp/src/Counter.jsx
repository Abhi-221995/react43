import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "React",
    };
    console.log("component is constructed");
  }

  componentDidMount() {
    console.log("ComponentDidMount run");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Deciding to re-render or not");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: before DOM updates");
    // Return a snapshot (can be any value; here, let's return previous count)
    return { previousCount: prevState.count };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: DOM updated");
    console.log("snapshot from before update", snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount : cleaning up before unmount");
    clearInterval(this.interval);
  }

  render() {
    console.log("render : rendering the component");
    return (
      <div>
        <h1>LifeCycle Methods</h1>
        <p>Count : {this.state.count}</p>
        <button onClick={() => this.setState({ name: "ReactJS" })}>
          Change Name
        </button>
      </div>
    );
  }
}

export default Counter;
