import React from "react";
import "../styles/TitleNav.css";
import { Link } from "react-router-dom";

export default class TitleNav extends React.Component {
  render() {
    const { changePage, name, emphasize, user, logout } = this.props;
    if (emphasize) {
      if (user) {
        return (
          <Link to="/" onClick={logout}>
            <div className="title-nav emphasize">{user}님</div>
          </Link>
        );
      } else {
        return (
          <Link to="/login" onClick={() => changePage(name)}>
            <div className="title-nav emphasize">{name}</div>
          </Link>
        );
      }
    } else
      return (
        <div className="title-nav" onClick={() => changePage(name)}>
          <Link to={"/" + name.toLowerCase()}>{name}</Link>
        </div>
      );
  }
}
