import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

export default function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgurl={props.img} />
      </div>
      <div className="bottom">
        <Details telinfo={props.tel} />
        <Details emailinfo={props.email} />
      </div>
    </div>
  );
}
