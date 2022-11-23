import NewsArticle from "../NewsArticle/NewsArticle";
import './MainNews.css';
function MainNews(){
    return(
        <div className="Main-news">
                <NewsArticle 
                imgLink="https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-2048x1988.jpg"
                theme="Naujienos"
                bodyHeader="Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?"
                bodyDate="2022-03-23"/>
                <NewsArticle 
                imgLink="https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n.jpg"
                theme="Naujienos"
                bodyHeader="„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį"
                bodyDate="2021-11-09"/>
            </div>
    );
}
export default MainNews;