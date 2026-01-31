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
            alt="frontend development"
          />
        </div>

        <div className="skills-section-item-details reveal reveal-right">
          <h1 className="skills-section-heading">
            Frontend Development
          </h1>

          <div className="skills-section-disc">
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Building responsive and interactive web applications using <strong>React.js</strong> and <strong>JavaScript</strong>.
              </p>
            </div>
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Creating pixel-perfect, UI-rich interfaces with <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and <strong>Figma</strong>.
              </p>
            </div>
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Implementing client-side routing and smooth animations using <strong>React Router</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section-container">
        <div className="reveal reveal-left">
          <img
            className="SkillsSection-image"
            src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/data_science.svg"
            alt="backend development"
          />
        </div>

        <div className="skills-section-item-details reveal reveal-right">
          <h1 className="skills-section-heading">
            Backend Development
          </h1>

          <div className="skills-section-disc">
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Developing scalable backend services and <strong>RESTful APIs</strong> using <strong>Node.js</strong> and <strong>Express.js</strong>.
              </p>
            </div>
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Implementing secure authentication and authorization using <strong>JWT</strong> and persistent login logic.
              </p>
            </div>
            <div className="skill-icon-disc">
              <FaDroplet className="skill-icon" />
              <p className="skill-disc">
                Database management and server-side processing with <strong>MongoDB</strong>, <strong>SQL</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
