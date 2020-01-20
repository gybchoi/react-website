import React from "react";
import "../styles/ContentDeveloper.css";
import Button from "@material-ui/core/Button";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GpsFixedOutlinedIcon from "@material-ui/icons/GpsFixedOutlined";

export default class ContentDeveloper extends React.Component {
  render() {
    return (
      <div className="developer-container">
        <div className="developer-left-container">
          <p className="developer-title">Get in Touch</p>
          <textarea className="developer-message" placeholder="Enter Message" />
          <Button
            variant="outlined"
            color="primary"
            className="developer-button"
          >
            Send Email
          </Button>
        </div>
        <div className="developer-right-container">
          <div className="context-container">
            <LabelOutlinedIcon
              className="context-icon"
              style={{ fontSize: 50 }}
            />
            <div className="context">
              <div className="context-title">Name</div>
              <div className="context-content">G. Y. Choi</div>
            </div>
          </div>
          <div className="context-container">
            <MailOutlineIcon
              className="context-icon"
              style={{ fontSize: 50 }}
            />
            <div className="context">
              <div className="context-title">Email</div>
              <div className="context-content">gybchoi@gmail.com</div>
            </div>
          </div>
          <div className="context-container">
            <GpsFixedOutlinedIcon
              className="context-icon"
              style={{ fontSize: 50 }}
            />
            <div className="context">
              <div className="context-title">Location</div>
              <div className="context-content">Suwon, Gyeonggi</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
