import React from "react";

const NewsItem = (props) => {
  const {title, desc, author, newsUrl, imgUrl, time} = props
  let newDate = new Date(time);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  let timeStamp = newDate.toLocaleString('en-in', options)
  return (
    <div className="card border border-gray-400 overflow-hidden w-60 rounded-md mt-6 mx-8">
      <div className="image w-full relative">
        <img src={imgUrl} className="w-full object-cover"></img>
        <p className="absolute top-0 right-0 bg-red-600 text-xs text-white p-1 rounded-md">
          {author}
        </p>
      </div>
      <div className="text flex flex-col items-start gap-1 p-1">
        <p className="text-xs text-gray-500">{timeStamp}</p>
        <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
        <p className="line-clamp-2 leading-5 text-sm">{desc}</p>
        <a
          href={newsUrl} target="_blank"
          className="bg-gray-600 text-white px-3 mt-3 mb-2 py-2 rounded-full text-sm font-semibold hover:bg-gray-500"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
