import React, { Component } from "react";
import User from "./User";

class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: 0,
    };
  }
  render() {
    return (
      <div>
        {this.props.utilisateurs.map((user) => (
          <User activeId={this.state.activeId} handleChange={()=>this.setState({activeId: user.id})} key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default ListUser;
