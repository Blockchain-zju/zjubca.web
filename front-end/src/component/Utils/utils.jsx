import React from "react";
export const Title = props => (
  <div
    style={{
      fontSize: props.fs,
      fontWeight: props.fw,
      textAlign: props.ta,
      width: "100%",
      margin: `${1.5 *
        props.fs}px 0px ${props.fs /
        2}px 0px`
    }}
  >
    {props.content}
  </div>
);
export const TitleNm = props => (
  <div
    style={{
      fontSize: props.fs,
      fontWeight: "normal",
      textAlign: "left",
      width: "100%",
      margin: `${1.5 *
        props.fs}px 0px ${props.fs /
        2}px 0px`
    }}
  >
    {props.content}
  </div>
);
export const TitleNm2 = props => (
  <div
    style={{
      fontSize: props.fs,
      fontWeight: "normal",
      textAlign: "left",
      width: "100%",
      margin: `2px 0px`
    }}
  >
    {props.content}
  </div>
);
export const LinkNm = props => (
  <div
    style={{
      fontSize: props.fs,
      fontWeight: "normal",
      textAlign: "left",
      width: "100%",
      margin: `2px 0px`
    }}
  >
    {props.contentBefore}
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "#247ddc"
      }}
    >
      {props.contentAfter}
    </a>
  </div>
);
