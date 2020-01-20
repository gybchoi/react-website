import React from "react";
import ImageContainer from "./ImageContainer";
import "../styles/ContentMain.css";

export default class ContentMain extends React.Component {
  render() {
    return (
      <div>
        <div className="image-row">
          <ImageContainer pictureNum={4} description="모른 척" />
          <ImageContainer
            pictureNum={1}
            description="지구 끝까지 쫓아가서 맴매할거야"
          />
          <ImageContainer pictureNum={5} description="내가 더러워?" />
        </div>
        <div className="image-row">
          <ImageContainer pictureNum={2} description="할 말 잃음" />
          <ImageContainer pictureNum={9} description="지금 시작합니다" />
          <ImageContainer pictureNum={6} description="불길한 꿈을 꿨어요" />
        </div>
        <div className="image-row">
          <ImageContainer pictureNum={3} description="제대로 합시다" />
          <ImageContainer pictureNum={7} description="망했어요" />
          <ImageContainer pictureNum={8} description="가만 안 둬" />
        </div>
        <div className="more">
          <a
            href="https://www.youtube.com/channel/UCtckgmUcpzqGnzcs7xEqMzQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Pengsu
          </a>
        </div>
      </div>
    );
  }
}
