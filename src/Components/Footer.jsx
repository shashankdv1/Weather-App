import React from "react";
import { FaInstagram} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer()
{  const currentYear = new Date().getFullYear();
    return(
        <div className="footer">
            <div className="connect">
            <h1 id ="about">Connect with us:-</h1><a href="https://www.instagram.com/shashank_vaze/"><FaInstagram style={{background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)', marginLeft:'10px'}}/> </a><a href="https://www.linkedin.com/in/shashankvaze/"><FaLinkedin  style={{background: 'linear-gradient(45deg, #0077B5, #1B8AAA, #49A7C3, #64B1CC, #7AB6D3)',marginLeft:'10px'}}/></a>
            </div>
            <p>© Shashank Vaze, {currentYear}</p>
        </div>
    );

}
export default Footer;