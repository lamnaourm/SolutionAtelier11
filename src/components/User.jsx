import axios from "axios";
import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  render() {
    return (
      <div className="child">
        <h3>
          nom: {this.props.user.name} {this.props.user.username}
        </h3>
        <p>email:{this.props.user.email}</p>
        <p>
          ville:{this.props.user.address.city}
          rue:{this.props.user.address.street}
        </p>
        <button onClick={this.props.handleChange}>details posts</button>

        {this.props.user.id === this.props.activeId && (
          <div>
            {this.state.posts.map((post) => (
              <div className="post" key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  componentDidUpdate(prevprops, prevstate) {
    if (this.props.activeId === this.props.user.id) {
      const getData = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${this.props.activeId}`
        );
        return res.data;
      };
      getData().then((posts) => this.setState({ posts }));
    }
  }
}

export default User;
