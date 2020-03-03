import React from "react";
import "./index.css";
import { Title, TitleNm, TitleNm2, LinkNm } from "../../component/Utils/utils";

export const Intro = () => (
  <div className="zjubca-intro scFlexColumn">
    <Title
      fs={32}
      fw={"normal"}
      ta={"left"}
      content={"关于我们"}
    />
    <TitleNm
      fs={20}
      content={"协会介绍"}
    />
    <TitleNm
      fs={14}
      content={
        "协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍协会介绍"
      }
    />
    <TitleNm
      fs={20}
      content={"协会宗旨"}
    />
    <TitleNm
      fs={14}
      content={
        "协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨协会宗旨"
      }
    />
    <TitleNm
      fs={20}
      content={"联系我们"}
    />
    <TitleNm2
      fs={14}
      content={
        "协会负责人：孙伟杰 楼嵩 孔唯洁"
      }
    />
    <TitleNm2
      fs={14}
      content={"网站开发人：王旌权"}
    />
    <LinkNm
      fs={14}
      contentBefore={"协会Github："}
      href={
        "https://github.com/Blockchain-zju"
      }
      contentAfter={"Blockchain-zju"}
    />
    <TitleNm2
      fs={14}
      content={"协会公众号：ZJUBlockchain"}
    />
    <TitleNm2
      fs={14}
      content={"协会联系人：杨佳妮/1xxxxxxxxxxx"}
    />
    <TitleNm2
      fs={14}
      content={"协会邮箱：1xxxxxxxxxxx@zjubca.org"}
    />
  </div>
);
