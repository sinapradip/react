import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import contacts from "../assets/contacts";

export default function Card() {
  return (
    <>
      {contacts.map((contact, index) => (
        <div key={index} className="card">
          <div className="top">
            <h2 className="name">{contact.name}</h2>
            <Avatar imgurl={contact.imgURL} />
          </div>
          <div className="bottom">
            <Details telinfo={contact.phone} />
            <Details emailinfo={contact.email} />
          </div>
        </div>
      ))}
    </>
  );
}
