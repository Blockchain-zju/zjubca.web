import React from "react";
import "./index.css";
import "../../css/common.css";
const foot = [
  {
    name: "版权所有",
    content: [
      {
        name: "浙江大学区块链协会",
        link: ""
      }
    ]
  },
  {
    name: "友情链接",
    content: [
      {
        name: "浙大主页",
        link: "https://www.zju.edu.cn"
      },
      {
        name: "CC98",
        link: "https://www.cc98.org"
      },
      
    ]
  },
  {
    name: "相关产品",
    content: [
      {
        name: "区块链钱包",
        link:
          "https://github.com/Blockchain-zju/zjubca.wallet/tree/master"
      },
      {
        name: "EOSToolkit",
        link:
          "https://toolkit.zjubca.org/"
      },
      {
        name: "区块链SDK",
        link:
          "https://github.com/Blockchain-zju/zjubca-scatter-js"
      }
    ]
  }
];
const foot2Div = foot => (
  <div
    className="ssFlexColumn"
    style={{
      width: "30%",
      fontSize: 20,
      fontWeight: "bold"
    }}
  >
    {foot.name}
    {foot.content.map(content => (
      <div
        className="ssFlexColumn"
        style={{
          width: "100%",
          margin: "10px 0px",
          fontSize: 16,
          fontWeight: "normal"
        }}
      >
        {content.link === "" ? (
          content.name
        ) : (
          <a
            href={content.link}
            style={{
              textDecoration: "none",
              color: "#222"
            }}
          >
            {content.name}
          </a>
        )}{" "}
      </div>
    ))}{" "}
  </div>
);
export const Copyright = () => (
  <div
    className="ccFlexColumn"
    style={{ width: "100%" }}
  >
    <div className="zjubca-copyright scFlexRow">
      <div className="zjubca-copyright-word ssFlexRow">
        {foot.map(foot2Div)}{" "}
      </div>
      <div className="zjubca-copyright-logo-bar ccFlexRow">
        <div className="zjubca-copyright-logo centerBG" />
      </div>
    </div>
    <div
      className=" ccFlexRow"
      style={{
        width: "80%",
        padding: "0px 10%",
        backgroundColor: "#efefef"
      }}
    >
      <div
        className="scFlexRow"
        style={{ width: "60%" }}
      >
        浙ICP备19002880号
      </div>
      <div
        className="ecFlexRow"
        style={{ width: "40%" }}
      >
        Copyright © 1998 - 2020 ZJUBCA.
        All Rights Reserved.
      </div>
    </div>
  </div>
);
