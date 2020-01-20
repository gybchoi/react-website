import React from "react";
import "../styles/ContentReact.css";

export default class ContentReact extends React.Component {
  render() {
    return (
      <div>
        <div className="react-feature-title">
          A JavaScript library for building user interfaces
        </div>
        <div className="react-features">
          <div className="react-feature">
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            <br />
            <br />
            Declarative views make your code more predictable and easier to
            debug.
          </div>
          <div className="react-feature">
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs.
            <br />
            <br />
            Since component logic is written in JavaScript instead of templates,
            you can easily pass rich data through your app and keep state out of
            the DOM.
          </div>
          <div className="react-feature">
            We don’t make assumptions about the rest of your technology stack,
            so you can develop new features in React without rewriting existing
            code.
            <br />
            <br />
            React can also render on the server using Node and power mobile apps
            using React Native.
          </div>
        </div>
        <div className="react-logo-image-container">
          <img
            src="/react_logo.png"
            alt="React Logo"
            title="React"
            className="react-logo-image"
          />
        </div>
        <div className="to-react">
          <div className="to-react-text">
            Let's start your first react project
          </div>
          <a
            href="http://www.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="to-react-button">Into React</div>
          </a>
        </div>
      </div>
    );
  }
}
