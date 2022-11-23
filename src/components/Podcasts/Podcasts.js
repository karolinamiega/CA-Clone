import "./Podcasts.css";
import Podcast from "../Podcast/Podcast";
import { ReactComponent as PlaySvg } from '../Images/play.svg';
function Podcasts() {
  return (
    <div className="Podcasts">
      <h1>Podcastai ir radijo laidos</h1>
      <div className="Podcasts-wrapper">
        <Podcast
        imgLink="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design.png"
        length="Trukmė: 7:55"
        play=<PlaySvg/>
        title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
        date="2021-09-02"
        />
        <Podcast
        imgLink="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design.png"
        length="Trukmė: 7:54"
        play=<PlaySvg/>
        title="Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“"
        date="2021-09-02"
        />
        <Podcast
        imgLink="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design.png"
        length="Trukmė: 9:22"
        play=<PlaySvg/>
        title="Kaip gyvensime 2031-aisiais? 10 esminių prognozių"
        date="2021-08-18"
        />
        <Podcast
        imgLink="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design.png"
        length="Trukmė: 8:32"
        play=<PlaySvg/>
        title="Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“"
        date="2021-08-11"
        />
      </div>
    </div>
  );
}
export default Podcasts;
