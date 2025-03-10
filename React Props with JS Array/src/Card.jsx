import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="top">
          <h2 className="name">Beyonce</h2>
          <img
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
            className="circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">+123 456 78+123 456 78</p>
          <p className="info">b@beyonce.com</p>
        </div>
      </div>
    </>
  );
}

export { Card };
