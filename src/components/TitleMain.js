import React from "react";
import "../styles/TitleMain.css";
import { Link } from "react-router-dom";

export default class TitleMain extends React.Component {
  render() {
    const { changePage, title } = this.props;
    return (
      <div className="title-main">
        <Link to="/" onClick={() => changePage(title)}>
          {this.props.title}
        </Link>
      </div>
    );
  }
}
