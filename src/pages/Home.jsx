import React from "react";
import Layout from "../components/Layout";
import UserAddForm from "../components/UserAddForm";
import PostList from "../components/PostList";
import UserList from "../components/UserList";
import NavBar from "../components/NavBar";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "#f7f7f2",
      color: "#575352",
      display: "users",
      users: [],
      posts: [],
    };
  }

  changeColor(event) {
    this.setState({ background: event.target.value });
  }

  changeTextColor(event) {
    this.setState({ color: event.target.value });
  }

  changeDisplay(value) {
    this.setState({ display: value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        data = data.filter((user) => user.id < 4);
        data.forEach((user) => {
          user.isGoldClient = false;
        });
        this.setState({ users: data });
      });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        data = data.filter((post) => post.id < 4);
        this.setState({ posts: data });
      });
  }; 

  displayComponent() {
    if (this.state.display === "users") {
      return (
        <UserList
          users={this.state.users}
          deleteUser={(id) => this.deleteUserItem(id)}
        />
      );
    } else if (this.state.display === "posts") {
      return (
        <PostList
          posts={this.state.posts}
          deletePost={(id) => this.deletePostItem(id)}
        />
      );
    }
  }

  deleteUserItem(id) {
    const index = this.state.users.findIndex((user) => user.id === id);
    this.state.users.splice(index, 1);
    this.setState({ users: this.state.users });
  }

  deletePostItem(id) {
    const index = this.state.posts.findIndex((post) => post.id === id);
    this.state.posts.splice(index, 1);
    this.setState({ posts: this.state.posts });
  }

  getMaxId(users) {
    const ids = users.map((user) => user.id);
    const maxId2 = Math.max(...ids);
    return maxId2;
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
          },
        ],
      };
    });
    document.querySelector(".add-form").reset();
  }

  render() {
    return (
      <div
        className="app"
        style={{
          background: this.state.background,
          color: this.state.color,
          display: this.state.display,
        }}
      >
        <Layout>
          <NavBar
            changeBackgroundColor={(event) => this.changeColor(event)}
            changeTextColor={(event) => this.changeTextColor(event)}
            changeTheDisplay={(value) => this.changeDisplay(value)}
          />
          <div className="d-flex border border-warning mx-4 rounded-3">
            <div className="w-25">
              <UserAddForm
                submitAddForm={(event, name, email, isGoldClient) =>
                  this.submitAddForm(event, name, email, isGoldClient)
                }
              />
            </div>
            <div className="w-75">{this.displayComponent()}</div>
          </div>
        </Layout>
      </div>
    );
  }
}
export default Home;
