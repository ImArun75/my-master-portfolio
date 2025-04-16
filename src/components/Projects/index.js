import { GoProjectTemplate } from "react-icons/go";
import { FaGitAlt, FaCode, FaYoutube  } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import Header from '../Header'

import Footer from '../Footer'

import { motion } from "framer-motion";

import './index.css'

const Projects = () => {
    
    return (
        <>
            <Header />
            <div className='projects-gb-contaienr'>
                    <div className='projects-landing-container'>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4 }}
                        >
                            <img src='https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/projects_image.svg'
                                alt=''
                                className='projects-landing-img' />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4 }}
                        >
                            <div className='projects-landing-discription-container'>
                                <h1 className='projects-landing-heading'>Projects</h1>
                                <p className='projects-landing-discription'>My projects makes use of vast variety of latest technology tools. My best experience is to create Web-Applications projects and deploy them to web applications using cloud infrastructure.</p>
                            </div>
                        </motion.div>
                    </div>
                    <ul className='project-items-container'>
                        <motion.li
                            className='project-item-container'
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            
                            <GoProjectTemplate size={20}/>
                            <div className='project-icon-and-title'>
                                
                                <FaKitchenSet size={20} color="Brown"/>
                                <h1 className="project-title">Swiggy/Zomato Clone</h1>
                            </div>
                                <p className="project-discription">Implemented a responsive Online Food Ordering System like Swiggy/Zomato ...</p>
                                <div className="buttons-container">
                                    <button type="button" className="project-git-button project-button">
                                        <FaGitAlt size={20} /> 
                                        <a href="https://github.com/ImArun75/swiggy-zomato-clone" target="__black" className="button-name">Get Code</a>
                                    </button>
                                    <button type="button" className="project-website-button project-button">
                                    <FaCode size={20}/>
                                    <a href="https://myswiggyproject.ccbp.tech/login" target="__black" className="button-name">View Website</a>
                                    </button>
                                </div>
                            
                        </motion.li>
                        <motion.li
                            className='project-item-container'
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            
                            <GoProjectTemplate size={20}/>
                            <div className='project-icon-and-title'>
                                <FaYoutube  size={20} color="Red"/>
                                <h1 className="project-title">Nxt Watch</h1>
                            </div>
                                <p className="project-discription">Implemented Nxt Watch application which is a clone for YouTube where users can ...</p>
                                <div className="buttons-container">
                                    <button type="button" className="project-git-button project-button">
                                        <FaGitAlt size={20} /> 
                                        <a href="https://github.com/ImArun75/nxtwatch" target="__black" className="button-name">Get Code</a>
                                    </button>
                                    <button type="button" className="project-website-button project-button">
                                    <FaCode size={20}/>
                                    <a href="https://nxtwatchapp7569.ccbp.tech/" target="__black" className="button-name">View Website</a>
                                    </button>
                                </div>
                            
                        </motion.li>
                        <motion.li
                            className='project-item-container'
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            
                            <GoProjectTemplate size={20}/>
                            <div className='project-icon-and-title'>
                                <PiGraduationCapFill  size={20} color="BlackS"/>
                                <h1 className="project-title">Jobby App</h1>
                            </div>
                                <p className="project-discription">Developed a comprehensive job search solution, Jobby App.</p>
                                <div className="buttons-container">
                                    <button type="button" className="project-git-button project-button">
                                        <FaGitAlt size={20} /> 
                                        <a href="https://github.com/ImArun75/Jobby-App" target="__black" className="button-name">Get Code</a>
                                    </button>
                                    <button type="button" className="project-website-button project-button">
                                    <FaCode size={20}/>
                                    <a href="https://jobbyapp7569.ccbp.tech/login" target="__black" className="button-name">View Website</a>
                                    </button>
                                </div>
                            
                        </motion.li>
                    </ul>
                    <button type="button" className="more-projects-button">
                        <a href="https://github.com/ImArun75/" target="__black" className="button-name">More Projects</a>
                    </button>
                <Footer />
            </div>
        </>
    )
}


export default Projects