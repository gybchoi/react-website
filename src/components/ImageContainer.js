import React from "react";

export default class ImageContainer extends React.Component {
  render() {
    return (
      <span className="image-container">
        <img
          src={"/pengsu/peng" + this.props.pictureNum + ".jpg"}
          className="pengsu_image"
          alt={"펭수: " + this.props.description}
          title={this.props.description}
        />
      </span>
    );
  }
}
