import { useEffect } from "react";
import { AiFillThunderbolt } from "react-icons/ai";

import Header from "../Header";
import Footer from "../Footer";
import {revealOnScroll} from "../../utils/reveal";

import "./index.css";

const Education = () => {
  useEffect(() => {
    revealOnScroll();
  }, []);

  return (
    <>
      <Header />

      <div className="education-gb-contaienr">
        <div className="education-highlight-container">
          <div className="reveal reveal-left">
            <img
              className="education-highlight-img"
              src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/education.svg"
              alt=""
            />
          </div>

          <div className="reveal reveal-right">
            <div className="education-highlight-discription">
              <h1 className="education-highlight-discription-heading">
                Education
              </h1>
              <p className="education-highlight-discription-disc">
                Basic Qualification and Certifcations
              </p>

              <div className="education-highlight-discription-icons">
                <img src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000" alt="" />
                <img src="https://img.icons8.com/?size=100&id=O4SEeX66BY8o&format=png&color=000000" alt="" />
                <img src="https://img.icons8.com/?size=100&id=jldAN67IAsrW&format=png&color=000000" alt="" />
                <img src="https://img.icons8.com/?size=100&id=O51Kg2nJsbIW&format=png&color=000000" alt="" />
                <img src="https://img.icons8.com/?size=100&id=h5EUmNCXhSH0&format=png&color=000000" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="acadamic-container">
          <h1 className="acadamic-main-heading reveal reveal-top">
            Degree Received
          </h1>

          <div className="acadamic-item reveal reveal-top">
            <img
              className="acadamic-logo"
              src="https://startupstorymedia.com/wp-content/uploads/2021/12/Edtech-startup-NxtWave-1.jpg"
              alt=""
            />

            <div className="acadamic-discription">
              <div className="acadamic-name-and-year">
                <div className="acadamic-name-and-type">
                  <h1 className="acadamic-name">
                    Nxtwave Disruptive Technologies
                  </h1>
                  <p className="acadamic-type">
                    Industry Ready Certification in Full-stack Development
                  </p>
                </div>
                <p className="acadamic-year">2023 - 2025</p>
              </div>

              <div className="acadamic-achievemets">
                <div className="acadamic-icon-and-disc">
                  <AiFillThunderbolt className="thunder-icon" />
                  <p className="acadamic-disc">
                    I have taken courses on HTML/CSS, Js, Bootstrap, ReactJs,
                    NodeJs, MySQLite, MangoDB, Python, C++, etc.
                  </p>
                </div>

                <div className="acadamic-icon-and-disc">
                  <AiFillThunderbolt className="thunder-icon" />
                  <p className="acadamic-disc">
                    I have learned to secure user data using JWT tokens, REST API
                    calls, and local storage.
                  </p>
                </div>

                <div className="acadamic-icon-and-disc">
                  <AiFillThunderbolt className="thunder-icon" />
                  <p className="acadamic-disc">
                    I have completed projects on both front-end and back-end
                    applications.
                  </p>
                </div>
              </div>

              <button className="acadamic-button">
                <a
                  href="https://learning.ccbp.in"
                  target="_blank"
                  rel="noreferrer"
                  className="button-name"
                >
                  Visit website
                </a>
              </button>
            </div>
          </div>

          <div className="acadamic-item reveal reveal-top">
            <img
              className="acadamic-logo"
              src="https://res.cloudinary.com/dvtrvofpz/image/upload/v1744536402/seauscozfiowpemc7grt.jpg"
              alt=""
            />

            <div className="acadamic-discription">
              <div className="acadamic-name-and-year">
                <div className="acadamic-name-and-type">
                  <h1 className="acadamic-name">
                    Marri Laxmanreddy Institute of Technology and Management,
                    Dundigal
                  </h1>
                  <p className="acadamic-type">
                    B.Tech. in Computer Engineering
                  </p>
                </div>
                <p className="acadamic-year">2022 - Ongoing</p>
              </div>

              <div className="acadamic-achievemets">
                <div className="acadamic-icon-and-disc">
                  <AiFillThunderbolt className="thunder-icon" />
                  <p className="acadamic-disc">
                    I have studied basic software engineering subjects like DS,
                    Algorithms, DBMS, OS, Linux, AI etc.
                  </p>
                </div>

                <div className="acadamic-icon-and-disc">
                  <AiFillThunderbolt className="thunder-icon" />
                  <p className="acadamic-disc">
                    Apart from this, I have done courses on Data Structures and
                    Algorithms, Data Science, Cloud Computing and Full Stack
                    Development.
                  </p>
                </div>

                <div className="acadamic-icon-and-disc">
                  <AiFillThunderbolt className="thunder-icon" />
                  <p className="acadamic-disc">
                    I have completed the Data Structures and Algorithms course in
                    collaboration with Smart Interviews.
                  </p>
                </div>
              </div>

              <button className="acadamic-button">
                <a
                  href="https://mlritm.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="button-name"
                >
                  Visit website
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="certificates-container">
          <h1 className="certificates-main-heading reveal reveal-top">
            Certifcations
          </h1>

          <ul className="certificate-items-container">
            <li className="certificate-item-container">
              <div className="certificate-img-contaier react-img">
                <a
                  href="https://certificates.ccbp.in/academy/react-js?id=EPVCJAMHOK"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
                    alt=""
                    className="certificate-img"
                  />
                </a>
              </div>
              <div className="certificate-details">
                <h1 className="certificate-name">React JS</h1>
                <p className="certificate-by">- NxtWave</p>
              </div>
            </li>

            <li className="certificate-item-container">
              <div className="certificate-img-contaier node-img">
                <a
                  href="https://certificates.ccbp.in/academy/node-js?id=RIQMNWWYQT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                    alt=""
                    className="certificate-img"
                  />
                </a>
              </div>
              <div className="certificate-details">
                <h1 className="certificate-name">Node JS</h1>
                <p className="certificate-by">- NxtWave</p>
              </div>
            </li>

            <li className="certificate-item-container">
              <div className="certificate-img-contaier dev-img">
                <a
                  href="https://certificates.ccbp.in/academy/developer-foundations?id=WYDFNXVLPF"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=38389&format=png&color=000000"
                    alt=""
                    className="certificate-img"
                  />
                </a>
              </div>
              <div className="certificate-details">
                <h1 className="certificate-name">Developer Foundation</h1>
                <p className="certificate-by">- NxtWave</p>
              </div>
            </li>

            <li className="certificate-item-container reveal reveal-top">
              <div className="certificate-img-contaier db-img">
                <a
                  href="https://certificates.ccbp.in/academy/introduction-to-databases?id=JRCKPTEPAG"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000"
                    alt=""
                    className="certificate-img"
                  />
                </a>
              </div>
              <div className="certificate-details">
                <h1 className="certificate-name">MySQLite</h1>
                <p className="certificate-by">- NxtWave</p>
              </div>
            </li>

            <li className="certificate-item-container reveal reveal-top">
              <div className="certificate-img-contaier py-img">
                <a
                  href="https://certificates.ccbp.in/academy/programming-foundations-with-python?id=NZDVVICVBJ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                    alt=""
                    className="certificate-img"
                  />
                </a>
              </div>
              <div className="certificate-details">
                <h1 className="certificate-name">Python</h1>
                <p className="certificate-by">- NxtWave</p>
              </div>
            </li>

            <li className="certificate-item-container reveal reveal-top">
              <div className="certificate-img-contaier dsa-img">
                <a
                  href="https://smartinterviews.in/certificate/006729fc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=nx2Sc3yJeXDy&format=png&color=000000"
                    alt=""
                    className="certificate-img"
                  />
                </a>
              </div>
              <div className="certificate-details">
                <h1 className="certificate-name">
                  Data Structures & Algorithms
                </h1>
                <p className="certificate-by">- Smartinterviews</p>
              </div>
            </li>

            <li className="certificate-item-container reveal reveal-top">
              <div className="certificate-img-contaier dsa-img">
                <a
                  href="https://cdn1.ccbp.in/misc/aws-workshop-completion-certificate/B4ZK3D8EBI.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
                    alt=""
                    className="certificate-img"
                  />
                </a>
              </div>
              <div className="certificate-details">
                <h1 className="certificate-name">
                  AWS (<span>Workshop</span>)
                </h1>
                <p className="certificate-by">- NxtWave</p>
              </div>
            </li>

            <li className="certificate-item-container reveal reveal-top">
              <div className="certificate-img-contaier genAI-img">
                <a
                  href="https://cdn1.ccbp.in/misc/gen-ai-2-mw/6SA191W7ZC.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=saSupsgVcmJe&format=png&color=000000"
                    alt=""
                    className="certificate-img"
                  />
                </a>
              </div>
              <div className="certificate-details">
                <h1 className="certificate-name">
                  GenAIMega (<span>Workshop</span>)
                </h1>
                <p className="certificate-by">- NxtWave</p>
              </div>
            </li>

            <li className="certificate-item-container reveal reveal-top">
              <div className="certificate-img-contaier ui-img">
                <a
                  href="https://cdn1.ccbp.in/misc/uiux_completion_cert_academy/N02D9A44BY.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=114334&format=png&color=000000"
                    alt=""
                    className="certificate-img"
                  />
                </a>
              </div>
              <div className="certificate-details">
                <h1 className="certificate-name">
                  UI/UX (<span>Workshop</span>)
                </h1>
                <p className="certificate-by">- NxtWave</p>
              </div>
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Education;
