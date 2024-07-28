import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = (props) => {

  const {country, category} = props;
  const [articles, setArticles] = useState([])
  const [totalRes, setTotalRes] = useState(0)

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=04e4e1e56ab1474f9595bcfaf4c6d783`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setTotalRes(parsedData.totalResults);
    setArticles(parsedData.articles);
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-3">Top Headlines</h1>
      <div className="w-3/4 grid grid-cols-4 m-auto">
        {articles.map((item) => {
          return <NewsItem key={item.url} title={item.title} desc={item.description} author={item.source.name} newsUrl={item.url} imgUrl={item.urlToImage} time={item.publishedAt}/>
        })}
      </div>
    </div>
  );
};

export default News;
