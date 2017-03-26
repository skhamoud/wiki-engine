import React from 'react';
import SearchComponent from '../components/SearchComponent';

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
  
  return (
    <div className="articles">
      <SearchComponent
        onSearch={props.fetchArticles}
        btnContainer="search-btn_articles"
      />
      {(data.titles[0]) ?
        <div>
          <h1>Articles</h1>

          <ul className="articles-ul">
            {articles}
          </ul>
        </div>  
        : <h2 style={{color:"#E57373",marginTop:'100px'}}>Sorry, there were no Results!</h2>
      }
    </div>
    );
}

// ======== Article Component =================
const Article = (props) => {
  return (
    <li className="article">
      <a href={props.url} target="_blank">
        <h3 className="article-title">{props.title}</h3>
      </a>
      <p className='article-extract'>{props.extract}</p>
    </li>);
}

