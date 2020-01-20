import React from "react";
import "../styles/ContentTitle.css";

export default class ContentTitle extends React.Component {
  render() {
    if (this.props.hidden)
      return <div className="content-title hidden">{this.props.title}</div>;
    else return <div className="content-title">{this.props.title}</div>;
  }
}
