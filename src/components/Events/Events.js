import EventWrapper from '../EventWrapper/EventWrapper';
import AllEventsButtonWrapper from '../AllEventsButtonWrapper/AllEventsButtonWrapper';
import './Events.css';
function Events(){
    return(
        <div className='Events'>
           <h2>Renginiai</h2> 
            <EventWrapper/>
            <AllEventsButtonWrapper/>
        </div>
        
    );
}
export default Events;