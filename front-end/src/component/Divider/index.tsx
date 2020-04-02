import React from 'react';

export const Divider = (props: {
  color: string,
  width: number,
  margin:number
}) => (
  <div
   style={{
     paddingTop:props.margin*1.5,
     paddingBottom:props.margin/2,
    backgroundColor: "#efefef",
    width:`100%`,
    height:2
    }}>
    <div
    style={{
      backgroundColor: props.color
        ? props.color
        : "black",
        width:`${props.width}%`,
        height:2
    }}
    />
  </div>
  
);
