/* eslint-disable jsx-a11y/alt-text */
import "./Podcast.css";
function Podcast({ imgLink, length, play, title, date }) {
    const image = imgLink && <img src={imgLink} />;
    const lengthText = length && <span className="Podcast-time">{length}</span>;
    const playButton = play && <button className="Podcast-play">{play}</button>
    const podcastTitle = title && <h3 className="Podcast-title">{title}</h3>
    const podcastDate = date && <span className="Podcast-date">{date}</span>
    return (
    <div className="Podcast">
      {image}
      {lengthText}
      {playButton}
      <div className="Podcast-info">
        {podcastTitle}
        {podcastDate}
      </div>
    </div>
  );
}
export default Podcast;
