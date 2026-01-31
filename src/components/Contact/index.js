import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Header from '../Header'

import Footer from '../Footer'

import { motion } from "framer-motion";

import './index.css'

const Contact = () => {

    return (
        <>
            <Header />
            <div className='contactme-gb-contaienr'>
                <div className='contact-landing-page'>
                    <motion.div
                        className="contact-landing-img-motion"
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img className='contact-landing-img' src='https://res.cloudinary.com/dvtrvofpz/image/upload/v1744723311/animated-img_la7jpl.png' alt='' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='contact-landing-discription-container'>
                            <h1 className='contact-landing-heading'>Contact Me</h1>
                            <p className='contact-landing-discription'>I am available on almost every social media. You can message me, I will reply within 24 hours.</p>
                            <ul className='profile-icons'>
                                <li className='git-profile-icon '>
                                    <a href="https://github.com/ImArun75" target="__blank"><FaGithub className="icon" /></a>
                                </li>
                                <li className='linkedin-profile-icon'>
                                    <a href="https://www.linkedin.com/in/arunkumarreddy-kavvam/"
                                        target="__blank"><FaLinkedinIn className="icon" /></a>
                                </li>
                                <li className='yt-profile-icon'>
                                    <a href="https://www.youtube.com/@arunreddy7394"
                                        target="__blank"><FaYoutube className="icon" /></a>
                                </li>
                                <li className='insta-profile-icon'>
                                    <a href="https://instagram.com/arun_reddy_ig"
                                        target="__blank"><FaInstagramSquare className="icon" /></a>
                                </li>
                            </ul>
                            <button type="button" className="resume-button">
                                <a href="https://drive.google.com/file/d/1ve4RTMnRoNb_M2vHZ8hpfe9jckWlnkFL/view?usp=drive_link" target="__blank" className="button-name">Show Resume</a></button>
                        </div >
                    </motion.div >
                </div >
                <Footer />
            </div >
        </>
    )
}


export default Contact
