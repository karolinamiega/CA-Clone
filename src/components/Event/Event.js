/* eslint-disable jsx-a11y/alt-text */
import './Event.css';
function Event({imgLink, date, month, place, event}){
    const imageLink = imgLink && <img src = {imgLink}/>
    const dateElement = date && <div className="Day">{date}</div>
    const monthElement = month && <div className="Month">{month}</div>
    const placeElement = place && <span className="Event-place">{place}</span>
    const eventElement = event && <h3 className="Event-title">{event}</h3>
    return(
        
        <div className="Event">
            <a href="#">
                <div className="Event-Image-wrapper">
                    {imageLink}
                    <div className="Event-Content-wrapper">
                        <div className="Date">
                            {dateElement}
                            {monthElement}
                        </div>
                        {placeElement}
                        {eventElement}
                    </div>
                </div>
            </a>
        </div>
    );
}
export default Event;