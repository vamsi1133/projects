import React from "react";
import gun from "../../assets/gun.png";
import "./PUBG.css";

function PubgGun(props) {
  return (
    <>
      <div className="floor">
        <button>Spawn</button>
        <div className="gun">
          <img src={gun} />
        </div>
      </div>
    </>
  );
}

export default PubgGun;
