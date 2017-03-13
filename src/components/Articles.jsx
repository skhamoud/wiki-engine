import React from 'react';
//========= Articles Component =================
export default function Articles(props) {
  const data = props.data;
  const articles = data.titles.map((title, current) => {
      return(
      <Article
        key={`result-${current + 1}`}
        title={title}
        extract={data.extracts[current]}
        url={data.urls[current]}
      />);
  });
  return <ul className="articles">
    {articles}
  </ul>;
}

// ======== Article Component =================
function Article (props) {
  return (
    <li className="article">
      <a href={props.url} target="_blank">
        <h3 className="article-title">{props.title}</h3>
      </a>
      <p className='artile-extract'>{props.extract}</p>
    </li>);
}

