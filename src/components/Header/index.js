import {Component} from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Context from '../../context/reactContext'

import './index.css';

class Header extends Component { 
    state = {
        showNavItems: true
    }

    changeNavState = () => {
        this.setState(prev => ({
            showNavItems: !prev.showNavItems
        }))
    }

    render() {
        const {showNavItems} = this.state
        console.log(showNavItems)
        return (
            <Context.Consumer>
                { value => {
                    const {changeActivePage, activePage} = value
                    const handleLinkClick = path => {
                        changeActivePage(path)
                    }
                    
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="nav-bg-container">
                            <nav className="nav-container">
                                
                                <Link to='/' className="link-element">
                                    <h1 className="nav-portfolio-heading">Arun Kavvam</h1>
                                </Link>
                                <ul className="nav-items-container">
                                    <Link to='/' className="link-element">
                                        <li className={`nav-item-list ${activePage === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>Home</li>
                                    </Link>
                                    <Link to='/education' className="link-element">
                                        <li className={`nav-item-list ${activePage === '/education' ? 'active' : ''}`} onClick={() => handleLinkClick('/education')}>Education</li>
                                    </Link>
                                    <Link to='/projects' className="link-element">
                                        <li className={`nav-item-list ${activePage === '/projects' ? 'active' : ''}`} onClick={() => handleLinkClick('/projects')}>Projects</li>
                                    </Link>
                                    <Link to='/contact' className="link-element">
                                        <li className={`nav-item-list ${activePage === '/contact' ? 'active' : ''}`} onClick={() => handleLinkClick('/contact')}>Contact Me</li>
                                    </Link>
                                </ul> 
                                
                                {showNavItems ? <button className="nav-bar-mobile-view" onClick={this.changeNavState}><FaBars size={20} /></button> : <button className="nav-bar-mobile-view" onClick={this.changeNavState}><RxCross2 size={20} /></button>}
                                
                            </nav>
                            {
                                    !showNavItems && 
                                    (
                                        <ul className="nav-mobile-view-items-container">
                                            <Link to='/' className="link-element">
                                                <li className={`nav-item-list ${activePage === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>Home</li>
                                            </Link>
                                            <Link to='/education' className="link-element">
                                                <li className={`nav-item-list ${activePage === '/education' ? 'active' : ''}`} onClick={() => handleLinkClick('/education')}>Education</li>
                                            </Link>
                                            <Link to='/projects' className="link-element">
                                                <li className={`nav-item-list ${activePage === '/projects' ? 'active' : ''}`} onClick={() => handleLinkClick('/projects')}>Projects</li>
                                            </Link>
                                            <Link to='/contact' className="link-element">
                                                <li className={`nav-item-list ${activePage === '/contact' ? 'active' : ''}`} onClick={() => handleLinkClick('/contact')}>Contact Me</li>
                                            </Link>
                                        </ul> 
                                    )
                            }
                            </div>
                        </motion.div>
                    )
                }}
            </Context.Consumer>
        )
    }
    
}

export default Header;