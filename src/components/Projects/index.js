import { useEffect } from "react";
import { GoProjectTemplate } from "react-icons/go";
import { FaGitAlt, FaCode, FaYoutube } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";

import Header from "../Header";
import Footer from "../Footer";
import {revealOnScroll} from "../../utils/reveal";

import "./index.css";

const Projects = () => {
  useEffect(() => {
    revealOnScroll();
  }, []);

  return (
    <>
      <Header />

      <div className="projects-gb-contaienr">
        <div className="projects-landing-container">
          <div className="reveal reveal-top item">
            <img
              src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/projects_image.svg"
              alt=""
              className="projects-landing-img"
            />
          </div>

          <div className="reveal reveal-bottom">
            <div className="projects-landing-discription-container">
              <h1 className="projects-landing-heading">Projects</h1>
              <p className="projects-landing-discription">
                My projects make use of a wide variety of modern technologies.
                My strongest experience is building web applications and
                deploying them using cloud infrastructure.
              </p>
            </div>
          </div>
        </div>

        <ul className="project-items-container">
          <li className="reveal reveal-top item">
            <div className="project-item-container">
              <GoProjectTemplate size={20} />

              <div className="project-icon-and-title">
                <FaKitchenSet size={20} color="brown" />
                <h1 className="project-title">Swiggy / Zomato Clone</h1>
              </div>

              <p className="project-discription">
                Implemented a responsive online food ordering system similar to
                Swiggy and Zomato.
              </p>

              <div className="buttons-container">
                <button className="project-git-button project-button">
                  <FaGitAlt size={20} />
                  <a
                    href="https://github.com/ImArun75/swiggy-zomato-clone"
                    target="_blank"
                    rel="noreferrer"
                    className="button-name"
                  >
                    Get Code
                  </a>
                </button>

                <button className="project-website-button project-button">
                  <FaCode size={20} />
                  <a
                    href="https://myswiggyproject.ccbp.tech/login"
                    target="_blank"
                    rel="noreferrer"
                    className="button-name"
                  >
                    View Website
                  </a>
                </button>
              </div>
            </div>
          </li>

          <li className="reveal reveal-top item">
            <div className="project-item-container">
              <GoProjectTemplate size={20} />

              <div className="project-icon-and-title">
                <FaYoutube size={20} color="red" />
                <h1 className="project-title">Nxt Watch</h1>
              </div>

              <p className="project-discription">
                Built a YouTube-like video streaming platform with authentication
                and protected routes.
              </p>

              <div className="buttons-container">
                <button className="project-git-button project-button">
                  <FaGitAlt size={20} />
                  <a
                    href="https://github.com/ImArun75/nxtwatch"
                    target="_blank"
                    rel="noreferrer"
                    className="button-name"
                  >
                    Get Code
                  </a>
                </button>

                <button className="project-website-button project-button">
                  <FaCode size={20} />
                  <a
                    href="https://nxtwatchapp7569.ccbp.tech/"
                    target="_blank"
                    rel="noreferrer"
                    className="button-name"
                  >
                    View Website
                  </a>
                </button>
              </div>
            </div>
          </li>

          <li className="reveal reveal-top item">
            <div className="project-item-container">
              <GoProjectTemplate size={20} />

              <div className="project-icon-and-title">
                <PiGraduationCapFill size={20} />
                <h1 className="project-title">Jobby App</h1>
              </div>

              <p className="project-discription">
                Developed a complete job search application with filters and
                secure authentication.
              </p>

              <div className="buttons-container">
                <button className="project-git-button project-button">
                  <FaGitAlt size={20} />
                  <a
                    href="https://github.com/ImArun75/Jobby-App"
                    target="_blank"
                    rel="noreferrer"
                    className="button-name"
                  >
                    Get Code
                  </a>
                </button>

                <button className="project-website-button project-button">
                  <FaCode size={20} />
                  <a
                    href="https://jobbyapp7569.ccbp.tech/login"
                    target="_blank"
                    rel="noreferrer"
                    className="button-name"
                  >
                    View Website
                  </a>
                </button>
              </div>
            </div>
          </li>
        </ul>

        <button className="more-projects-button reveal reveal-top">
          <a
            href="https://github.com/ImArun75/"
            target="_blank"
            rel="noreferrer"
            className="button-name"
          >
            More Projects
          </a>
        </button>

        <Footer />
      </div>
    </>
  );
};

export default Projects;
