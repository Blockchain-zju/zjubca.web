import React from "react";
import "./index.css";
import "../../css/common.css";
import { DataSet } from "../../content";

const product = DataSet.index.product;
const product2Div = product => (
  <div className="product-intro ccFlexColumn commonTest">
    {product.name}{" "}
  </div>
);

const photo = DataSet.index.photo;

const intro2Div = intro => (
  <div className="intro seFlexRow">
    <div className="intro-word">
      {intro.name}
    </div>
  </div>
);

export class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      hoverState: 0
    };
  }
  photo2Div = (photo, key) => (
    <div
      className="zjubca-index-photo-intro ccFlexColumn"
      onMouseEnter={() => {
        this.setState({
          hoverState: key
        });
      }}
    >
      {photo.name}
    </div>
  );
  render() {
    return (
      <div className="zjubca-index">
        <div className="zjubca-index-back" />
        <div className="zjubca-index-introduction">
          <p>浙江大学区块链协会</p>
          <p>浙江大学区块链协会</p>
          <p>浙江大学区块链协会</p>
        </div>
        <div className="zjubca-index-product ccFlexRow">
          {product.map(product2Div)}{" "}
        </div>
        <div className="zjubca-index-photo scFlexRow">
          <div className="zjubca-index-photo-intro-list bcFlexColumn">
            {photo.map(this.photo2Div)}
          </div>
          <div className="zjubca-index-photo-column scFlexRow">
            {photo[
              this.state.hoverState
            ].intro.map(intro2Div)}
          </div>
        </div>
      </div>
    );
  }
}
