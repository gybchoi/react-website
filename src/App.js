import React from "react";
import { withRouter } from "react-router-dom";
import TitleContainer from "./components/TitleContainer";
import ContentTitle from "./components/ContentTitle";
import "./styles/App.css";

class App extends React.Component {
  state = {
    user: undefined,
    title_hidden: false,
    isLoading: false
  };

  checkSession = () => {
    fetch("/session")
      .then(res => res.json())
      .then(body => {
        this.setState({ user: body.user, isLoading: true });
        return body.user;
      })
      .catch(err => console.log(err));
  };

  logout = () => {
    if (window.confirm("정말 로그아웃하시겠습니까?")) {
      this.setState({ isLoading: false });
      fetch("/logout")
        .then((window.location.href = "/"))
        .catch(err => console.log(err));
    }
  };

  changePage = title => {
    let content_title;
    switch (title.toLowerCase()) {
      case "react website":
        content_title = "This is Main Page.";
        break;
      case "react":
        content_title = "What is React?";
        break;
      case "kkutu":
        content_title = "Hello KKuTu!";
        break;
      case "developer":
        content_title = "The Developer";
        break;
      case "login":
        this.setState({ title_hidden: true });
        return;
      default:
        return;
    }
    this.setState({ content_title, title_hidden: false });
  };

  getTitle = () => {
    const path = this.props.location.pathname;
    let title;
    if (path === "/") {
      title = "react website";
    } else {
      title = path.split("/")[1];
    }
    return title;
  };

  componentDidMount() {
    const title = this.getTitle();
    this.changePage(title);
    this.checkSession();
  }

  render() {
    if (this.state.isLoading) window.scrollTo(0, 0);
    return this.state.isLoading ? (
      <div>
        <TitleContainer
          changePage={this.changePage}
          user={this.state.user}
          logout={this.logout}
        />
        <ContentTitle
          title={this.state.content_title}
          hidden={this.state.title_hidden}
        />
        {/*Content*/}
      </div>
    ) : null;
  }
}

export default withRouter(App);
