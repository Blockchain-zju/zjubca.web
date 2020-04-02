import React from "react";
import "./index.css";
import "../../css/common.css";
import {IProductItem} from '../../types/IProduct'
import {IPhotoItem, IIntroItem} from '../../types/IPhoto' 
import { DataSet } from "../../content";

const product = DataSet.index.product;
const product2Div = (product:IProductItem) => (
  <div className="product-intro ccFlexColumn commonTest">
    {product.name}{" "}
  </div>
);

const photo = DataSet.index.photo;

const intro2Div = (intro:IIntroItem) => (
  <div className="intro seFlexRow">
    <div className="intro-word">
      {intro.name}
    </div>
  </div>
);

export class Index extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {
      hoverState: 0
    };
  }
  photo2Div = (photo:IPhotoItem, key:number) => (
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
          <p>通过交流分享知识，创建共识未来</p>
          <p>我们的目标是“用区块加深交流”</p>
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
