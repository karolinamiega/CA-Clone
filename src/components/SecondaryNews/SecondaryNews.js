import SecondaryNewsArticle from "../SecondaryNewsArticle/SecondaryNewsArticle";
import './SecondaryNews.css';
function SecondaryNews() {
  return (
    <div className="Secondary-news">
      <SecondaryNewsArticle
        imgLink="https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg"
        theme="Technologijų ritmu"
        bodyHeader="Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?"
        bodyDate="2021-09-02"
      />
      <SecondaryNewsArticle
        imgLink="https://codeacademy.lt/wp-content/uploads/2021/09/mintosko-Ro0PNXcpCus-unsplash-2048x1410.jpg"
        theme="Technologijų ritmu"
        bodyHeader="Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?"
        bodyDate="2021-09-02"
      />
      <SecondaryNewsArticle
        imgLink="https://codeacademy.lt/wp-content/uploads/2021/09/image.jpeg"
        theme="Technologijų ritmu"
        bodyHeader="Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?"
        bodyDate="2021-09-02"
      />
      <SecondaryNewsArticle
        imgLink="https://codeacademy.lt/wp-content/uploads/2021/08/pexels-tima-miroshnichenko-6474485-2048x1167.jpg"
        theme="Technologijų ritmu"
        bodyHeader="Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?"
        bodyDate="2021-09-02"
      />
    </div>
  );
}
export default SecondaryNews;
