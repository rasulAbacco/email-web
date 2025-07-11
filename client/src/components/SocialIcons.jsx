import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 justify-center py-4">
      <a href="#" target="_blank" rel="noreferrer"><FaFacebook className="text-xl" /></a>
      <a href="#" target="_blank" rel="noreferrer"><FaTwitter className="text-xl" /></a>
      <a href="#" target="_blank" rel="noreferrer"><FaInstagram className="text-xl" /></a>
      <a href="#" target="_blank" rel="noreferrer"><FaLinkedin className="text-xl" /></a>
    </div>
  );
}
