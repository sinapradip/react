import React from "react";
import { Card } from "./Card";
import contacts from "./contacts";

function App() {
  return (
    <>
      <h1 className="heading">My Contacts </h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{contacts[0].name}</h2>
          <img
            src={contacts[0].imgURL}
            alt="avatar_img"
            className="circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">{contacts[0].phone}</p>
          <p className="info">{contacts[0].email}</p>
        </div>
      </div>

      <div className="card">
        <div className="top">
          <h2 className="name">{contacts[1].name}</h2>
          <img
            src={contacts[1].imgURL}
            alt="avatar_img"
            className="circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">{contacts[1].phone}</p>
          <p className="info">{contacts[1].email}</p>
        </div>
      </div>

      <div className="card">
        <div className="top">
          <h2 className="name">{contacts[2].name}</h2>
          <img
            src={contacts[2].imgURL}
            alt="avatar_img"
            className="circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">{contacts[2].phone}</p>
          <p className="info">{contacts[2].email}</p>
        </div>
      </div>

      <div className="card">
        <div className="top">
          <h2 className="name">{contacts[3].name}</h2>
          <img
            src={contacts[3].imgURL}
            alt="avatar_img"
            className="circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">{contacts[3].phone}</p>
          <p className="info">{contacts[3].email}</p>
        </div>
      </div>
    </>
  );
}

export default App;
