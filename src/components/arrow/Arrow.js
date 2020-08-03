import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchActicleGap } from "../../redux/gapActions";
import "./Arrow.css";
import { REMOVE_GAP, ADD_GAP } from "../../redux/actionsTypes";

function Arrow() {
  const [currentGap, setCurrnetGap] = useState(0);
  const [actifLeft, setActifLeft] = useState(false);
  const [actifRight, setActifRight] = useState(true);
  const [articlesHidden, setArticlesHidden] = useState(0);
  const articlesList = useSelector((state) => state.articlesList);
  const articleGap = useSelector((state) => state.articleGap);
  const dispatch = useDispatch();

  useEffect(() => {
    const acticleWidth = 342; //px
    const articlePerpage = Math.floor(
      Math.abs(window.innerWidth / acticleWidth)
    );
    setArticlesHidden(articlesList.articles.length - articlePerpage);
  }, [articlesList]);

  const handleArrowLeft = () => {
    if (articleGap.value !== 0) {
      dispatch(dispatchActicleGap(REMOVE_GAP));
      setCurrnetGap(currentGap - 1);
      setActifLeft(true);
      setActifRight(true);
    } else {
      setActifLeft(false);
    }
  };

  const handleArrowRight = () => {
    if (currentGap !== articlesHidden) {
      dispatch(dispatchActicleGap(ADD_GAP));
      setCurrnetGap(currentGap + 1);
      setActifRight(true);
      setActifLeft(true);
    } else {
      setActifRight(false);
    }
  };

  return (
    <div className="arrow">
      <div className="home__arrows">
        <div
          className={`home__arrowLeft ${actifLeft && "home__arrow--actif"} `}
          onClick={handleArrowLeft}
        ></div>
        <div
          className={`home__arrowRight ${actifRight && "home__arrow--actif"} `}
          onClick={handleArrowRight}
        ></div>
      </div>
    </div>
  );
}

export default Arrow;
