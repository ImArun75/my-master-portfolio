import { useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import {revealOnScroll} from "../../utils/reveal";
import "./index.css";

const ProfileSection = () => {
  useEffect(() => {
    revealOnScroll();
  }, []);

  return (
    <div className="profile-contaienr">
      <div className="profile-details reveal reveal-left">
        <div>
          <h1 className="profile-name">Arun Kavvam</h1>
          <p className="profile-disc">
            A passionate individual who always thrives to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact.
          </p>

          <ul className="profile-icons">
            <li className="git-profile-icon">
              <a href="https://github.com/ImArun75" target="_blank" rel="noreferrer">
                <FaGithub className="icon" />
              </a>
            </li>

            <li className="linkedin-profile-icon">
              <a
                href="https://www.linkedin.com/in/arunkumarreddy-kavvam/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="icon" />
              </a>
            </li>

            <li className="yt-profile-icon">
              <a
                href="https://www.youtube.com/@arunreddy7394"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="icon" />
              </a>
            </li>

            <li className="insta-profile-icon">
              <a
                href="https://instagram.com/arun_reddy_ig"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="reveal reveal-right">
        <img
          className="home-profile-img"
          src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/feelingProud.svg"
          alt="home-profile"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
