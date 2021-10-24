import React from "react";

function teamLst({ image, name}) {
  return (
    <div className="tealist">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default teamList;
