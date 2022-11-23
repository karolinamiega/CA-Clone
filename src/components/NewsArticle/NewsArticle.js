/* eslint-disable jsx-a11y/alt-text */
import './NewsArticle.css';

function NewsArticle({imgLink, theme, bodyHeader, bodyDate}){
    const imageElement = imgLink && (
        <div className="Image-wrapper">
          <img src={imgLink}/>
        </div>
      );
      const titleElement = theme && <p className='Upper-case'>{theme}</p>;
      const headerElement = bodyHeader && <h2 className='Bold-text Black-text'>{bodyHeader}</h2>
      const dateElement = bodyDate && <p className='Black-text'>{bodyDate}</p>;
    return(
    <div className="News-article">
        <a href="#">
            {imageElement}
            <div className='Top-news-text'>
                {titleElement}
                {headerElement}
                {dateElement}
            </div>
        </a>   
        </div>
        
    )
}
export default NewsArticle;