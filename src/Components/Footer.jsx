import React from "react";
import { FaInstagram} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer()
{  const currentYear = new Date().getFullYear();
    return(
        <div className="footer">
            <div className="connect">
            <h1 id ="about">Connect with us:-</h1>&nbsp;<a href="https://www.linkedin.com/in/shashankvaze/"><FaLinkedin  style={{background: 'linear-gradient(45deg, #0077B5, #1B8AAA, #49A7C3, #64B1CC, #7AB6D3)',marginLeft:'10px'}}/></a>
            </div>
            <p>© Shashank Vaze, {currentYear}</p>
        </div>
    );

}
export default Footer;
