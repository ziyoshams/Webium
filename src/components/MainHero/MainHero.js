import React, { Component } from 'react';
import data from '../../sample/dummy';
import './MainHero.css';

const SingleArticle = props => {
  const { data } = props;
  const { title, author, excerpt, date, imageUrl, articleLength } = data;
  return (
    <div className="article_has-hero-image">
      <figure className="article_image_hero">
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="article_content">
        <div className="article_body">
          <p className="article_title">{title}</p>
          <p className="article_excerpt">{excerpt}</p>
          <br />
          <p className="article_author">{author}</p>
          <p className="article_date">{`${date} * ${articleLength}`}</p>
        </div>
      </div>
    </div>
  );
};

const SingleArticleMiddle = props => {
  const { data } = props;
  const { title, author, excerpt, date, imageUrl, articleLength } = data;

  return (
    <div className="article_has-side-image">
      <figure className="article_image_side">
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="article_content">
        <div className="article_body">
          <div>
            <p className="article_title" style={{ fontSize: '1rem' }}>
              {title}
            </p>
            <p className="article_excerpt">
              {excerpt.length > 50 ? excerpt.slice(0, 40) + ' ...' : excerpt}
            </p>
          </div>
          <div>
            <p className="article_author">{author}</p>
            <p className="article_date">{`${date} * ${articleLength}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

class MainHero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section columns" style={{ borderBottom: '1px solid #eeeeee' }}>
        <div className="column">
          <SingleArticle type="first" data={data[0]} />
        </div>
        <div className="column">
          {data.slice(1, 4).map(article => (
            <SingleArticleMiddle key={article.title} data={article} />
          ))}
        </div>
        <div className="column is-hidden-touch">
          <SingleArticle data={data[data.length - 1]} />
        </div>
      </div>
    );
  }
}

export default MainHero;
