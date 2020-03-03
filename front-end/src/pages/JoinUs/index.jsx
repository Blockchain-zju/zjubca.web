import React from "react";
import "./index.css";
import {
  TitleNm,
  Title
} from "../../component/Utils/utils";
import { DataSet } from "../../content";

const joinus = DataSet.joinus;
export const JoinUs = () => (
  <div className="zjubca-joinus scFlexRow">
    <div style={{ width: "50%" }}>
      <Title
        fs={32}
        fw={"bold"}
        content={"加入我们"}
      />
      <TitleNm
        fs={14}
        content={joinus.word}
      />
    </div>
    <div
      className="scFlexColumn"
      style={{ width: "50%" }}
    >
      <div
        className="ccFlexColumn"
        style={{
          width: "100%",
          height: 600,
          backgroundColor: "white",
          borderRadius: 20
        }}
      >
        这里会有一个表单。现在懒得做2333
      </div>
    </div>
  </div>
);
