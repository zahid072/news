import React, { useEffect, useState } from 'react'
import Header from '../shared/header/Header'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import useNewsData from '../../hooks/useNewsData'

const SingleNews = () => {
  const [news, setNews] = useState({});
  const {newsData} = useNewsData();
  const {newsId} = useParams();
  useEffect(() => {
    const findNews = newsData.find(news1 => news1._id === newsId )
    if(findNews){
      setNews(findNews)
    }
  }, [newsData, newsId]);
  return (
    <div>
      <Header/>
      <div>
        <h1>{news.category_id}</h1>
      </div>
      <Link className='btn btn-secondary' to={"/category"}> Go back category</Link>
    </div>
  )
}

export default SingleNews
