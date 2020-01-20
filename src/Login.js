import React from "react";
import "./styles/Login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Login extends React.Component {
  state = {
    logined: false
  };

  login = () => {
    const id = document.getElementById("id").value.trim();
    const pwd = document.getElementById("pwd").value.trim();

    if (id === "") {
      window.alert("아이디를 입력해주세요.");
      return;
    }
    if (pwd === "") {
      window.alert("패스워드를 입력해주세요.");
      return;
    }

    fetch("/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        pwd
      })
    })
      .then(res => res.json())
      .then(body => {
        if (body.access) {
          this.setState({ logined: true });
        } else {
          window.alert("유효하지 않은 계정 혹은 패스워드입니다.");
        }
      })
      .catch(err => console.log(err));
  };

  enterKeyPress = () => {
    console.log("?");
    if (window.event.keyCode === 13) {
      this.login();
    }
  };

  componentDidMount() {
    fetch("/session")
      .then(res => res.json())
      .then(body => {
        if (body.user) {
          window.alert("이미 로그인되어 있습니다.");
          window.location.href = "/";
        }
      });
  }

  render() {
    if (this.state.logined) {
      return (window.location.href = "/");
    }
    return (
      <div>
        <div className="login-container">
          <div className="login-title">Login</div>
          <div className="login-inner-container">
            <div className="login-inner-left-container">
              <div className="login-box">
                <TextField
                  id="id"
                  label="User ID (기본: admin)"
                  type="text"
                  className="input-field"
                  inputProps={{
                    maxLength: 12
                  }}
                  onKeyPress={this.enterKeyPress}
                />
              </div>
              <div className="login-box">
                <TextField
                  id="pwd"
                  label="Password (기본: 1234)"
                  type="password"
                  className="input-field"
                  inputProps={{
                    maxLength: 20
                  }}
                  onKeyPress={this.enterKeyPress}
                />
              </div>
              <div className="login-submit">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.login}
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="login-inner-right-container">
              <img
                src="logo.png"
                className="login-logo-image"
                alt="logo"
                title="React Website"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
