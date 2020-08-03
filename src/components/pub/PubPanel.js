import React from "react";
import "./PubPanel.css";
import { Link } from "react-router-dom";

function PubPanel() {
  return (
    <Link to="/catalogue" style={{ textDecoration: "none" }}>
      <div className="pubPanel">
        <img
          className="pubPanel__image"
          src="https://staticpages.mngbcn.com/homes/images/ss20/mm/junio/vestidos_she.jpg"
          alt=""
        />
        <div className="pubPanel__info">
          <h1 className="pubPanel__title">soldes jusqu'à -70%</h1>
          <h2>collection printemps/été 2020</h2>
          <p>Acheter</p>
        </div>
        <div className="pubPanel__moreInfo">
          <p>Plus d'infos</p>
        </div>
      </div>
    </Link>
  );
}

export default PubPanel;
