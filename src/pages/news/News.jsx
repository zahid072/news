import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useNewsData from "../../hooks/useNewsData";
import NewsCard from "../../components/newsCard/NewsCard";


const News = () => {
  const { newsData } = useNewsData();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const filteredData = newsData.filter((news) => news.category_id === id);
    console.log(filteredData);

    if (id > 0) {
      setData(filteredData);
    } else {
      setData(newsData);
    }
  }, [newsData, id]);

  return (
    <div className="">
      <h1 className="text-center text-xl font-bold mb-5">Dragon News Home : <span>{data.length}</span></h1>
      {data.map((newses, index) => (
        <NewsCard key={index} news={newses} />
      ))}
    </div>
  );
};

export default News;
