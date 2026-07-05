import { Component } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Index.css'

class Header extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState(prev => ({
      isMenuOpen: !prev.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <>
        {/* Desktop Header */}
        <div className="header-container">
          <a href="#home" className="header-title-anchor">
          <h1 className="header-title">Vrushabh</h1>
          </a>
          <div className="header-links">
            <a href="#home" className="Home-head">Home</a>
            <a href="#about" className="Home-head">About</a>
            <a href="https://github.com/vrushabh5623" className="Home-head">Github</a>
            <a href="#service" className="Home-head">Certificates</a>
            <a href="#project" className="Home-head">Projects</a>
          </div>
          <a href="#contact">
          <button className="header-btn">Contact Me</button>
          </a>
        </div>

        {/* Mobile Header */}
        <div className="mobile-header">
          <h1 className="header-title">Vrushabh</h1>

          <button className="menu-btn" onClick={this.toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" className="Home-head">Home</a>
            <a href="#about" className="Home-head">About</a>
            <a href="https://github.com/vrushabh5623" className="Home-head">Github</a>
            <a href="#service" className="Home-head">Certificates</a>
            <a href="#project" className="Home-head">Projects</a>

            <a href="#contact">
          <button className="header-btn">Contact Me</button>
          </a>
          </div>
        )}
      </>
    );
  }
}

export default Header;