import React from "react";
import "./index.css";
import "../../css/common.css";
import { Link } from "react-router-dom";
import { DataSet } from "../../content";
const functs = DataSet.common.pages;
export class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      hoverIn: false,
      onTrick: false
    };
  }
  componentDidMount() {
    window.addEventListener(
      "scroll",
      this.handleScroll
    );
  }
  handleScroll = e => {
    if (window.scrollY >= 738)
      this.setState({ onTrick: true });
    else if (window.scrollY < 738)
      this.setState({ onTrick: false });
  };

  handleHover = () => {
    let hoverIn = this.state.hoverIn;
    this.setState({
      hoverIn: !hoverIn
    });
    console.log(!hoverIn);
  };

  functs2div = (item, key) => (
    <div className="zjubca-function-item ccFlexColumn">
      <Link
        to={item.link}
        style={{
          color:
            this.state.onTrick ||
            this.state.hoverIn
              ? "#222"
              : "white",
          textDecoration: "none"
        }}
      >
        {item.name}
      </Link>
    </div>
  );

  render() {
    return (
      <div
        className={`zjubca-navigation ccFlexRow ${
          this.state.onTrick
            ? "show"
            : "disappear"
        }`}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <div className="zjubca-navigation-content bcFlexRow">
          <div
            className={`zjubca-logo centerBG ${
              this.state.onTrick ||
              this.state.hoverIn
                ? "logoIn"
                : "logoOut"
            }`}
          />
          <div className="zjubca-function ccFlexRow">
            {functs.map(
              this.functs2div
            )}{" "}
          </div>
        </div>
      </div>
    );
  }
}
