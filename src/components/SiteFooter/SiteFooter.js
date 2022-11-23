/* eslint-disable jsx-a11y/alt-text */
import UlListComponents from "../UlListComponents/UlListComponents";
import { ReactComponent as LogoSvg } from '../Images/codeacademy-white.svg';
import { ReactComponent as FooterSvg } from '../Images/footer.svg';
import { ReactComponent as SertikaSvg } from '../Images/sertika.svg';
import './SiteFooter.css';

function SiteFooter({data: {footerMenuItems, listItemsObj, listIconsObj}}){
    return(
    <footer className="Site-footer">
        <div className="Footer-container wrap">
            <div className="Footer-logo">
                <LogoSvg/>
            </div>
            <div className="Footer-widgets">
                <div className="Footer-widget-left">
                    <UlListComponents data={footerMenuItems} />
                </div>
                <div className="Footer-widget-center">
                    <h2>Vilnius</h2>
                    <UlListComponents data={listItemsObj}/>
                </div>
                <div className="Footer-widget-right">
                    <UlListComponents data={listIconsObj}/>
                </div>
            </div>
            <div className="Footer-info">
            <div className="Copyright">
                © By UAB Programuok | CodeAcademy šeimos narys -   
                <a href="#"> CodeAcademy Kids</a>
            </div>
            <div className="Privacy-policy">
                <a href="#">Privatumo politika</a>
            </div>
        </div>
        <div className="Footer-certificates">
            <SertikaSvg />
        </div>
        <div className="Footer-decoration">
        <FooterSvg />
        </div>
        </div>
    </footer>
    );
}
export default SiteFooter;