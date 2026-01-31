import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { revealOnScroll } from "../../utils/reveal";
import "./index.css";

class Header extends Component {
  state = {
    showNavItems: true
  };

  componentDidMount() {
    revealOnScroll();
  }

  changeNavState = () => {
    this.setState(prev => ({
      showNavItems: !prev.showNavItems
    }));
  };

  handleLinkClick = path => {
    const { match } = this.props;
    return match.path === path
      ? "nav-item-selected-item"
      : "nav-item-link";
  };

  render() {
    const { showNavItems } = this.state;

    return (
      <div className="nav-bg-container reveal reveal-top">
        <nav className="nav-container">
          <Link to="/" className="link-element">
            <h1 className="nav-portfolio-heading">Arun Kavvam</h1>
          </Link>

          <ul className="nav-items-container">
            <Link to="/" className="link-element">
              <li className={this.handleLinkClick("/")}>Home</li>
            </Link>
            <Link to="/education" className="link-element">
              <li className={this.handleLinkClick("/education")}>Education</li>
            </Link>
            <Link to="/projects" className="link-element">
              <li className={this.handleLinkClick("/projects")}>Projects</li>
            </Link>
            <Link to="/contact" className="link-element">
              <li className={this.handleLinkClick("/contact")}>Contact Me</li>
            </Link>
          </ul>

          <button
            className="nav-bar-mobile-view"
            onClick={this.changeNavState}
          >
            {showNavItems ? <FaBars size={20} /> : <RxCross2 size={20} />}
          </button>
        </nav>

        {!showNavItems && (
          <ul className="nav-mobile-view-items-container">
            <Link to="/" className="link-element" onClick={this.changeNavState}>
              <li className={this.handleLinkClick("/")}>Home</li>
            </Link>
            <Link to="/education" className="link-element" onClick={this.changeNavState}>
              <li className={this.handleLinkClick("/education")}>Education</li>
            </Link>
            <Link to="/projects" className="link-element" onClick={this.changeNavState}>
              <li className={this.handleLinkClick("/projects")}>Projects</li>
            </Link>
            <Link to="/contact" className="link-element" onClick={this.changeNavState}>
              <li className={this.handleLinkClick("/contact")}>Contact Me</li>
            </Link>
          </ul>
        )}
      </div>
    );
  }
}

export default withRouter(Header);
