import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../index.css";

export default function SocialIcons() {
  return (
    <div className="social-icons-container">
      <a href="#" target="_blank" rel="noreferrer" className="social-icon"><FaFacebook /></a>
      <a href="#" target="_blank" rel="noreferrer" className="social-icon"><FaTwitter /></a>
      <a href="#" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
      <a href="#" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
    </div>
  );
}
