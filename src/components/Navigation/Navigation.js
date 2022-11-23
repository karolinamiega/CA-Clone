/* eslint-disable jsx-a11y/alt-text */
import UlListComponents from "../UlListComponents/UlListComponents";
import "./Navigation.css";

function Navigation({ image }) {
  const menuItemsObj = {
    listItems: [
        {
        title: 'Studentams',
        url: '#',
    },
    {
        title: 'Verslui',
        url: '#',
    },
    {
        title: 'Programos',
        url: '#',
    },
    {
        title: 'Apie mus',
        url: '#',
    },
    {
        title: 'Naujienos',
        url: '#',
    },
    {
        title: 'IT testas',
        url: '#',
    },
    {
        title: 'Kontaktai',
        url: '#',
    },
    {
        title: 'EN',
        url: '#',
    }],
    liClassName: 'Menu-item',
    ulClassName: 'Main-menu'
  };
  return (
    <div className="Main-header">
        <div className="Header-wrap">
            <img src={image} />
            <nav className="Main-navigation">
                <UlListComponents data={menuItemsObj}/>
                <button className="Button">Skambinti</button>
            </nav>
        </div>
    </div>
  );
}
export default Navigation;
