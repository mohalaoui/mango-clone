import React, { useEffect } from "react";
import Article from "../../components/article/Article";
import "./Home.css";
import Arrow from "../../components/arrow/Arrow";
import { useSelector, useDispatch } from "react-redux";
import { dispatchActicles } from "../../redux/articlesActions";

function Home() {
  const articleGap = useSelector((state) => state.articleGap);
  const articlesList = useSelector((state) => state.articlesList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatchActicles());
  }, []);

  return (
    <div className="home">
      <div className="home__titleContainer">
        <h1 className="home__title">New Now</h1>
        <Arrow />
      </div>
      <div className="home__Articles">
        {articlesList.articles?.map((article) => (
          <Article
            key={article.id}
            deplace={articleGap.value}
            image={article.image}
            name={article.name}
            price={article.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
