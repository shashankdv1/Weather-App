import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer()
{  const currentYear = new Date().getFullYear();
    return(
        <div className="footer">
            <div className="connect">
            <h1 id ="about">Connect with us:-</h1><a href="https://github.com/shashankdv1"><li><FontAwesomeIcon icon={faGithub} /> Github</li></a>
            </div>
            <p>© Shashank Vaze, {currentYear}</p>
        </div>
    );

}
export default Footer;