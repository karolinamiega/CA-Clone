import './SecondaryNewsArticle.css';

function SecondaryNewsArticle({imgLink, theme, bodyHeader, bodyDate}){
    const imageElement = imgLink && (
        <div className="Image-wrapper">
          <img src={imgLink}/>
        </div>
      );
      const titleElement = theme && <p className='Header'>{theme}</p>;
      const headerElement = bodyHeader && <h2 className='Text'>{bodyHeader}</h2>
      const dateElement = bodyDate && <p className='Date'>{bodyDate}</p>;
    return(
    <div className="Secondary-news-article">
        <a href="#">
            {imageElement}
            <div className='Secondary-top-news-text'>
                {titleElement}
                {headerElement}
                {dateElement}
            </div>
        </a>   
        </div>
        
    )
}
export default SecondaryNewsArticle;