import "./App.css";

import React, { Component } from "react";
import axios from "axios";
import ListUser from "./components/ListUser";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      utilisateurs: [],
    };
  }
  render() {
    return (
      <div>

        <h1>Nombre d'utilisateurs : {this.state.utilisateurs.length}</h1>
        {this.state.utilisateurs.length !== 0 ? (
          <ListUser utilisateurs={this.state.utilisateurs} />
        ) : (
          "Pas d'utilisateurs"
        )}
      </div>
    );
  }

  componentDidMount() {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    };
    getData().then((utilisateurs) => this.setState({ utilisateurs }));
  }
}

export default App;
