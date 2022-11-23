import Podcasts from "../Podcasts/Podcasts";
import Events from "../Events/Events";
function SideBar(){
    return(
        <div>
            <Podcasts/>
            <Events/>
        </div>
    );
}
export default SideBar;