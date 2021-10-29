import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import UserAddForm from "./components/UserAddForm";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
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
  }

  changeColor(event) {
    this.setState({ background: event.target.value });
  }

  changeTextColor(event) {
    this.setState({ color: event.target.value });
  }

  getMaxId(users) {
    const ids = users.map((user) => user.id);
    const maxId2 = Math.max(...ids);
    return maxId2;
  }

  changeDisplay(value) {
    this.setState({ display: value });
  }

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
    document.querySelector(".user-add-form").reset();
  }

  foo(){
    console.log("test")
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
        <Header />
        <NavBar
          backColorChange={(event) => this.changeColor(event)}
          textColorChange={(event) => this.changeTextColor(event)}
          changeTheDisplay={(value) => this.changeDisplay(value)}
        />
        <div className="content">
          <UserAddForm
            submitAddForm={(event, name, email, isGoldClient) =>
              this.submitAddForm(event, name, email, isGoldClient)
            }
          />
          {this.displayComponent()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
