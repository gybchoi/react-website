import React from "react";
import "../styles/ContentKKuTu.css";

export default class ContentKKuTu extends React.Component {
  state = {
    page: 0,
    ani_temp: 0
  };

  getPage = () => {
    const title = [
      "끄투코리아",
      "끄투리오 (구끄투한국)",
      "Prj_KT",
      "알파끄투",
      "BF끄투"
    ];
    if (this.state.page === title.length) {
      this.setState({ page: 0 });
    }
    const src = `/kkutu/${this.state.page}.ico`;

    return (
      <div
        className="kkutu-slide"
        onClick={() => {
          const ani_temp = this.state.ani_temp === 0 ? 1 : 0;
          this.setState({ page: this.state.page + 1, ani_temp });
          document.getElementsByClassName(
            "kkutu-slide"
          )[0].style.animation = `fadein${ani_temp} 2s`;

          this.getPage();
        }}
      >
        <img src={src} />
        <div>{title[this.state.page]}</div>
      </div>
    );
  };

  render() {
    const url = [
      "https://kkutu.co.kr/",
      "https://kkutu.club/",
      "http://prjkt.online/",
      "https://kkutu.xyz/",
      "http://bfk.playts.net/"
    ];
    return (
      <div className="kkutu-container">
        <div className="kkutu-title">KKuTu Free Server List</div>
        <div className="kkutu-slide-container">{this.getPage()}</div>
        <div
          className="kkutu-link"
          onClick={() => window.open(url[this.state.page], "_blank")}
        >
          바로 접속하기!
        </div>
      </div>
    );
  }
}
