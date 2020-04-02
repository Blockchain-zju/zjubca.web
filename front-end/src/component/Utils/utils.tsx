import React from "react";
interface ITitle {
  fs: number;
  fw: number|"bold"|"normal";
  ta?: "left" | "right";
  content: string;
}
export const Title = (
  props: ITitle
) => (
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
export const TitleNm = (props: {
  fs: number;
  content: string;
}) => (
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
export const TitleNm2 = (props: {
  fs: number;
  content: string;
}) => (
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
interface ILinkNm {
  fs: number;
  content?: string;
  right?: boolean;
  contentBefore?: string;
  href?: string;
  contentAfter?: string;
}
export const LinkNm = (
  props: ILinkNm
) => (
  <div
    style={{
      fontSize: props.fs,
      fontWeight: "normal",
      textAlign: props.right
        ? "right"
        : "left",
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
