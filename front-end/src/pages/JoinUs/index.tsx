import React from "react";
import "./index.css";
import {
  TitleNm,
  Title,
  LinkNm
} from "../../component/Utils/utils";
import { DataSet } from "../../content";
import { QRcode } from "../../component/qrcode";

const joinus = DataSet.joinus;
export const JoinUs = () => (
  <div className="zjubca-joinus scFlexRow">
    <div style={{ width: "50%" }}>
      <QRcode width={60}/>
      <Title
        fs={32}
        fw={"bold"}
        content={"加入我们"}
      />
      <TitleNm
        fs={14}
        content={joinus.word}
      />
      <LinkNm
      fs={14}
      href={
        "https://github.com/Blockchain-zju"
      }
      contentAfter={"纳新推文链接"}
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
