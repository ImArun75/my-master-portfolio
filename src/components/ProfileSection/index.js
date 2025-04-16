import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";

import './index.css'

const ProfileSection = () => {
    
    return (
        <>
        <div className='profile-contaienr'>
            <motion.div
                className='profile-details'
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                >
                <div >
                    <h1 className='profile-name'>Arun Kavvam</h1>
                    <p className='profile-disc'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                    <ul className='profile-icons'>
                        <li className='git-profile-icon '>
                            <a href="https://github.com/ImArun75" target="__blank"><FaGithub className="icon"/></a>
                        </li>
                        <li className='linkedin-profile-icon'>
                            <a href="https://www.linkedin.com/in/arunkumarreddy-kavvam/" 
                            target="__blank"><FaLinkedinIn className="icon"/></a>
                        </li>
                        <li className='yt-profile-icon'>
                            <a href="https://www.youtube.com/@arunreddy7394" 
                            target="__blank"><FaYoutube className="icon"/></a>
                        </li>
                        <li className='insta-profile-icon'>
                            <a href="https://instagram.com/arun_reddy_ig" 
                            target="__blank"><FaInstagramSquare className="icon"/></a>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <motion.div
                
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4 }}
                >
            <img className='home-profile-img' src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/feelingProud.svg" alt="home-profile-image"/>
        </motion.div>
        </div>
        
        </>
    )
}


export default ProfileSection