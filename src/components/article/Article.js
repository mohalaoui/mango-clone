import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Article.css";

function Article({ image, name, price, favoris, deplace }) {
  return (
    <div
      // -354.25
      className="article"
      style={{
        transform: `translate3d(${deplace}px, 0px, 0px)`,
        transitionDuration: "300ms",
      }}
    >
      <img className="article__image" src={image} alt="" />
      <div className="home__info">
        <p>{`${name} ${price} €`}</p>
        <FavoriteBorderIcon className="article__favoris" />
      </div>
    </div>
  );
}

export default Article;
