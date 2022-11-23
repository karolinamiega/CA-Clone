import MainNews from '../MainNews/MainNews';
import SecondaryNews from '../SecondaryNews/SecondaryNews';
import AllNewsButtonWrapper from '../AllNewsButtonWrapper/AllNewsButtonWrapper';
import './News.css';
function News(){
    return(
        <div className="News">
            <h1>Naujienos</h1>
            <MainNews/>
            <SecondaryNews/>
            <AllNewsButtonWrapper/>
        </div>
    );
}
export default News;