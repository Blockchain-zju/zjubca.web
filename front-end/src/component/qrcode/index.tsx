import React from "react";
export const QRcode = (props:{width:number}) => (
  <div
    className="bcFlexRow"
    style={{
      width: `${props.width}%`,
      height: 134
    }}
  >
    <div
      className="ccFlexColumn"
      style={{
        width: 120,
        height: 134
      }}
    >
      <div
        className="centerBG"
        style={{
          width: 120,
          height: 120,
          backgroundImage:
            "url(http://img.fishstar.xyz/zjubca/public.jpg)"
        }}
      />
      <div
        className="ccFlexRow"
        style={{
          width: 120,
          height: 14,
          fontSize: "0.5rem"
        }}
      >
        公众号
      </div>
    </div>

    <div
      className="ccFlexColumn"
      style={{
        width: 120,
        height: 134
      }}
    >
      <div
        className="centerBG"
        style={{
          width: 120,
          height: 120,
          backgroundImage:
            "url(http://img.fishstar.xyz/zjubca/assistant.jpeg)"
        }}
      />
      <div
        className="ccFlexRow"
        style={{
          width: 120,
          height: 14,
          fontSize: "0.5rem"
        }}
      >
        小助手
      </div>
    </div>
  </div>
);
