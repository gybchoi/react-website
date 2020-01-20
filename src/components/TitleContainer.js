import React from "react";
import "../styles/TitleContainer.css";
import TitleMain from "./TitleMain";
import TitleNav from "./TitleNav";

export default class TitleContainer extends React.Component {
  render() {
    const { changePage, user, logout } = this.props;
    return (
      <header>
        <div className="title-container">
          <div className="title-main-container">
            <TitleMain title="React Website" changePage={changePage} />
          </div>
          <nav className="title-nav-container">
            <TitleNav name="React" changePage={changePage} />
            <TitleNav name="KKuTu" changePage={changePage} />
            <TitleNav name="Developer" changePage={changePage} />
            <TitleNav
              name="Login"
              changePage={changePage}
              user={user}
              logout={logout}
              emphasize
            />
          </nav>
        </div>
      </header>
    );
  }
}
