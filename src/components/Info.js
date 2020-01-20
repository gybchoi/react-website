import React from "react";
import "../styles/Info.css";

export default class Info extends React.Component {
  render() {
    return (
      <footer className="info">
        <div className="info-container">
          <div className="info-left-container">React Website</div>
          <div className="info-right-container">
            Developer Info
            <ul>
              <li>Name: G.Y. Choi</li>
              <li>Email: gybchoi@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
