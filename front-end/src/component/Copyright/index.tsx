import React from "react";
import "./index.css";
import "../../css/common.css";
import { DataSet } from "../../content";
import {IFootItem,IFootItemContent} from '../../types/Ifoot'
const foot = DataSet.common.foot;

const foot2Div = (foot:IFootItem) => (
  <div
    className="ssFlexColumn"
    style={{
      width: "30%",
      fontSize: 20,
      fontWeight: "bold"
    }}
  >
    {foot.name}
    {foot.content.map((content:IFootItemContent) => (
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
