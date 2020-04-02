import React from "react";
import "./index.css";
import "../../css/common.css";
import {
  Title,
  LinkNm,
} from "../../component/Utils/utils";

import { DataSet } from "../../content";
import { IProductItem } from "../../types/IProduct";

const product = DataSet.product;
const product2Div = (product:IProductItem) => (
  <div className="zjubca-product-item scFlexRow">
    <div
      className="ccFlexColumn"
      style={{
        width: 200,
        height: 120
      }}
    >
      <div
        className="ccFlexColumn centerBG"
        style={{
          height: 120,
          width: 160,
          backgroundColor: "#1b1f25",
          backgroundImage: `url(${product.picture})`
        }}
      />
    </div>
    <div className="zjubca-product-intro csFlexColumn">
      <div
        className="scFlexRow"
        style={{
          width: "100%",
          height: "40px"
        }}
      >
        <div
          className="csFlexRow"
          style={{ width: "50%" }}
        >
          <LinkNm
            fs={20}
            contentAfter={product.name}
            href={product.link}
          />
        </div>
        <div
          className="ceFlexRow"
          style={{ width: "50%" }}
        >
          <LinkNm
            right={true}
            fs={20}
            contentAfter={"演示视频"}
            href={product.display}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "110px",
          padding:"5px 0px",
          whiteSpace:"normal"
        }}
      >
        {product.intro?product.intro:"暂无简介"}
      </div>
    </div>
  </div>
);
export const Product = () => (
  <div className="zjubca-product scFlexColumn">
    <Title
      fs={32}
      fw={"bold"}
      content={"协会相关产品"}
    />
    {product.map(product2Div)}
  </div>
);
// {product.intro?product.intro:"暂无简介"}
