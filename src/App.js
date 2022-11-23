import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import SideBar from "./components/SideBar/SideBar";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import { ReactComponent as FacebookSvg } from "./components/Images/Facebook.svg";
import { ReactComponent as InstagramSvg } from "./components/Images/Instagram.svg";
import { ReactComponent as LinkedInSvg } from "./components/Images/LinkedIn.svg";

function App() {
  const footerData = {
    listIconsObj: {
      listItems: [
        {
          title: <InstagramSvg />,
          url: "http://instagram.com",
        },
        {
          title: <FacebookSvg />,
          url: "http://facebook.com",
        },
        {
          title: <LinkedInSvg />,
          url: "http://linkedin.com",
        },
      ],
    },
    listItemsObj: {
      listItems: [
        {
          title: "Saulėtekio al. 15, Vilnius",
          url: "#",
        },
        {
          title: "Antakalnio g. 17, Vilnius",
          url: "#",
        },
      ],
      liClassName: "just",
      ulClassName: "just",
    },
    footerMenuItems: {
      listItems: [
        {
          title: "Studentams",
          url: "#",
        },
        {
          title: "Jei galiu as - gali ir tu!",
          url: "#",
        },
        {
          title: "Verslui",
          url: "#",
        },
        {
          title: "Programos",
          url: "#",
        },
        {
          title: "Nemokamos studijos",
          url: "#",
        },
        {
          title: "UT kursai",
          url: "#",
        },
        {
          title: "Programavimo kalbos",
          url: "#",
        },
        {
          title: "Apie mus",
          url: "#",
        },
        {
          title: "Naujienos",
          url: "#",
        },
        {
          title: "Karjera - We are hiring!",
          url: "#",
        },
        {
          title: "ES parama",
          url: "#",
        },
        {
          title: "Kontaktai",
          url: "#",
        },
      ],
      liClassName: "menu-item",
    },
  };
  return (
    <div className="App">
      <Navigation image="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" />
      <div className="Container">
        <div className="Content-wrapper">
          <News/>
          <SideBar/>
        </div>
      </div>
      <SiteFooter data={footerData} />
    </div>
  );
}

export default App;
