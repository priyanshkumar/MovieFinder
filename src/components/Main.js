import React, { Component } from "react";
import Nav from "./navigation/nav";
import Api from "../utils/Api";
import List from "./list/list";

class Main extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    Api.search("skunk")
      .then(response => {
        this.setState({ result: response.data.data });
        console.log(this.state.result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Nav />
        <List gifs={this.state.result} />
      </div>
    );
  }
}

export default Main;
