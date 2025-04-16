import { FaDroplet } from "react-icons/fa6";
import { motion } from "framer-motion";
import './index.css'

const SkillsSection = () => (
    <>
        <motion.h1
            className='skills-section-main-heading'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            >
            What I Do?
        </motion.h1>
        <div className='skills-section-container'>
            <motion.div
                
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                >
                <img className='SkillsSection-image' src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/fullstack.svg" alt=""/>

            </motion.div>

            <motion.div
                className='skills-section-item-details'
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}>   
                
                    <h1 className='skills-section-heading'>Full Stack Web Development</h1>
                    <div className='skills-section-imgs'>
                        <img src='https://img.icons8.com/?size=100&id=20909&format=png&color=000000' alt='' className='skill-img' />
                        <img src='https://img.icons8.com/?size=100&id=21278&format=png&color=000000' alt='' className='skill-img'/>
                        <img src='https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000' alt='' className='skill-img'/>
                        <img src='https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' alt='' className='skill-img'/>
                        <img src='https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000' alt='' className='skill-img'/>
                        <img src='https://img.icons8.com/?size=100&id=24895&format=png&color=000000' alt='' className='skill-img'/>
                        
                    </div>
                    <div className='skills-section-disc'>
                        <div className="skill-icon-disc">
                            <FaDroplet size={20} className="skill-icon"/>
                            <p className="skill-disc">Building responsive website front end using React-Router</p>
                        </div>
                        <div className="skill-icon-disc">
                            <FaDroplet size={20} className="skill-icon"/>
                            <p className="skill-disc">Developing mobile application using react packages such as React-Icons, React-Context and Slidebars</p>
                        </div>
                        <div className="skill-icon-disc">
                            <FaDroplet size={20} className="skill-icon"/>
                            <p className="skill-disc">Creating application backend in Node, Express</p>
                        </div>
                    </div>
            </motion.div>
            <motion.div
                
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                >
                <img className='SkillsSection-mobile-view-image' src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/fullstack.svg" alt=""/>

            </motion.div>
        
        </div>
        
        <div className='skills-section-container'>
            <motion.div
                
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                >  
                <img className='SkillsSection-image' src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/cloud_infrastructure.svg" alt=""/>
            </motion.div>
            <motion.div
                className='skills-section-item-details'
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}>  
                <div>
                    <h1 className='skills-section-heading'>Cloud Infra-Architecture</h1>
                    <div className='skills-section-imgs'>
                        
                        <img src='https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000' alt='' className='skill-img'/>
                        <img src='https://img.icons8.com/?size=100&id=74402&format=png&color=000000' alt='' className='skill-img'/>
                        <img src='https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000' alt='' className='skill-img'/>
                    </div>
                    <div className='skills-section-disc'>
                        <div className="skill-icon-disc">
                            <FaDroplet size={20} className="skill-icon"/>
                            <p className="skill-disc">Experience working on multiple cloud platforms</p>
                        </div>
                        <div className="skill-icon-disc">
                            <FaDroplet size={20} className="skill-icon"/>
                            <p className="skill-disc">Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
                        </div>
                        <div className="skill-icon-disc">
                            <FaDroplet size={20} className="skill-icon"/>
                            <p className="skill-disc">Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS</p>
                        </div>
                        <div className="skill-icon-disc">
                            <FaDroplet size={20} className="skill-icon"/>
                            <p className="skill-disc"> Deploying deep learning models on cloud to use on mobile devices</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                >  
                <img className='SkillsSection-mobile-view-image' src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/f5bd358efeb9edce99720bc825f829749d1c8023/src/assets/images/cloud_infrastructure.svg" alt=""/>
            </motion.div>
        </div>
    </>
)

export default SkillsSection 