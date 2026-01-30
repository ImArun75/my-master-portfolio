import { useEffect } from "react";
import { revealOnScroll } from "../../utils/reveal";
import { FaDroplet } from "react-icons/fa6";
import "./index.css";

const SkillsSection = () => {

useEffect(() => {
  revealOnScroll();
}, []);

  return (
    <>
      <h1 className="skills-section-main-heading reveal reveal-top">
        What I Do?
      </h1>

      <div className="skills-section-container">
        <div className="reveal reveal-left">
          <img
            className="SkillsSection-image"
            src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/fullstack.svg"
            alt=""
          />
        </div>

        <div className="skills-section-item-details reveal reveal-right">
          <h1 className="skills-section-heading">
            Full Stack Web Development
          </h1>

          <div className="skills-section-disc">
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Building responsive websites using React Router
              </p>
            </div>
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Developing mobile apps using React ecosystem
              </p>
            </div>
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Creating backend services using Node and Express
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section-container">
        <div className="reveal reveal-left">
          <img
            className="SkillsSection-image"
            src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/cloud_infrastructure.svg"
            alt=""
          />
        </div>

        <div className="skills-section-item-details reveal reveal-right">
          <h1 className="skills-section-heading">
            Cloud Infra-Architecture
          </h1>

          <div className="skills-section-disc">
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Experience working on multiple cloud platforms
              </p>
            </div>
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Hosting and maintaining VM-based applications
              </p>
            </div>
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Streaming data between DBs and servers on AWS & GCP
              </p>
            </div>
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Deploying ML models on cloud for mobile usage
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
