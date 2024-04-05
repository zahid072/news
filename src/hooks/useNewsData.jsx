import React, { useEffect, useState } from 'react'

const useNewsData = () => {

const [newsData, setNewsData] = useState([]);

useEffect(() => {
    fetch("/categories.json")
    .then(res => res.json())
    .then( data => {
        setNewsData(data)
    })
}, []);
  return {newsData}
}

export default useNewsData
