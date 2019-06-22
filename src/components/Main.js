import React, { Component } from "react";
import Nav from "./navigation/nav";
import Api from "../utils/Api";
import List from "./list/list";
import Footer from "./footer/footer";

class Main extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    Api.search("skunk")
      .then(response => {
        this.setState({ result: response.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    Api.search(this.state.search)
      .then(response => {
        this.setState({ result: response.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Nav
          search={this.state.search}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <List gifs={this.state.result} />
        <Footer />
      </div>
    );
  }
}

export default Main;
