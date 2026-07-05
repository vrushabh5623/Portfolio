import {Component} from 'react';
import { CiLight } from "react-icons/ci";
import { LuArrowUpRight } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { SiGmail } from "react-icons/si";

import Modal from "react-modal";

Modal.setAppElement("#root");
import Header from '../Header/Index.jsx'
import Footer from '../Footer';
import './Index.css'

class Home extends Component {
  state = {
    isModalOpen: false,
    certificateImage: "",
  };

  openModal = image => {
    this.setState({
      isModalOpen: true,
      certificateImage: image,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      certificateImage: "",
    });
  };

  render() {
    const { isModalOpen, certificateImage } = this.state;
    return (
      <>
      <Header/>
      <div className='home-bg' id='home'>
        <div className='home-content'>
          <div className='home-para-padding'>
            <img src="https://i.postimg.cc/yxKPjDfs/Untitled-design-(6).png" alt="profile" className='home-profile'/>
            <h1 className='home-title'>Vrushabh Lanjewar</h1>
            <h3 className='home-subtitle'> <span className='home-subtitle-span'>A Passionate Software Developer</span> 🤖</h3>
            <p className='home-description'>
              I'm a Computer Science student and Full-Stack Web Developer passionate
              about building modern websites and AI-powered applications. I enjoy
              solving real-world problems using React, JavaScript, Node.js, SQL and
              Machine Learning.
              </p>
            <div className='home-btns'>
              <a href='#contact'>
              <button className='home-btn'>Contact Me</button>
              </a>
            </div>
          </div>
          

          <div className='about-para-padding'>
            <h1 className='about-title' id="about">About Me</h1>
            <h3 className='home-subtitle '><span className='home-subtitle-span about-span'>Get to know me</span></h3>
            <p className='about-description'>
              Hello! I'm Vrushabh Lanjewar, a passionate Computer Science Engineering student and an aspiring Full-Stack Web Developer. I enjoy creating modern, responsive and user-friendly websites that provide a great experience for users. I believe that technology can solve real-world problems and I love learning new skills that help me build better applications.
              <br/>
              <br/>
              I have a strong interest in web development and Generative AI. I enjoy turning ideas into real projects by writing clean, simple and efficient code. I am always excited to explore new technologies, improve my programming skills, and work on projects that challenge me to grow as a developer.
              <br/>
              <br/>
              Throughout my learning journey, I have built projects using HTML, CSS, JavaScript, React.js, Node.js, Express.js, Python, SQL and Generative AI with n8n for AI automation. These projects have helped me understand both frontend and backend development while building AI-powered automation workflows, allowing me to create complete web applications and intelligent solutions from start to finish.
            </p>
            <div className='home-btns'>
              <a href='https://drive.google.com/file/d/1nn30nwKsb3N3SGETVYRBw6wqS6fIeP7U/view?usp=drive_link'>
              <button className='home-btn'>Download Resume</button>
              </a>
            </div>
          </div>
          <div>
            <h1 className='about-title' id='service'>Certificates</h1>
            <h3 className='home-subtitle '><span className='home-subtitle-span about-span'>My Achievements</span></h3>

          <div className='card-main-container'>
            <div className='card-container'>
              <div className='card'>
                <div className='card-icon'>
                   <AiOutlineSafetyCertificate />
                </div>
                <h1 className='card-title'>PYTHON PROGRAMMING FOUNDATION</h1>
                  <p className='card-description'>
                    Completed the Python Programming Foundation certification from NxtWave, gaining a strong understanding of Python fundamentals, including variables, loops, functions, data structures and object-oriented programming. Solved 500+ Python programming problems, strengthening my problem-solving, logical thinking and coding skills.
                  </p>
                  <h4 className='certificate-link' onClick={()=>this.openModal("https://i.postimg.cc/8PqjJbMC/Python.png")}>Certificate <FaExternalLinkAlt/></h4>
              </div>

              <div className='card'>
                <div className='card-icon'>
                  <AiOutlineSafetyCertificate />
                </div>
                <h1 className='card-title'>DECODE FULL STACK WEB DEV 1.0</h1>
                  <p className='card-description'>
                    Successfully completed the Decode Full Stack Web Dev 1.0 program, gaining practical knowledge of HTML, CSS, JavaScript, Git, GitHub, responsive web design and full-stack web development fundamentals.
                    </p>
                  <h4 className='certificate-link'
                  onClick={()=>this.openModal("https://i.postimg.cc/90j0rmsv/PW-CERTIFICATE-136c716b-7fa6-417f-b9de-e73e45a9fbaa.png")}
                  >Certificate <FaExternalLinkAlt/></h4>
              </div>

              <div className='card'>
                <div className='card-icon'>
                  <AiOutlineSafetyCertificate />
                </div>
                <h1 className='card-title'>AWS INTERNSHALA TRAININGS</h1>
                  <p className='card-description'>Successfully completed a 6-week Cloud Computing with AWS training from Internshala, gaining hands-on knowledge of AWS services including EC2, S3, VPC, IAM, databases, cloud security, billing and cloud architecture. Scored 80% in the final assessment.
                  </p>
                  <h4 className='certificate-link'
                  onClick={()=>this.openModal("https://i.postimg.cc/RFgp0h3q/Internshala.png")}
                  >Certificate <FaExternalLinkAlt/></h4>
              </div>

              <div className='card'>
                <div className='card-icon'>
                  <AiOutlineSafetyCertificate />
                </div>
                <h1 className='card-title'>REACT JS</h1>
                  <p className='card-description'>Completed the React JS certification from NxtWave, gaining practical experience in building responsive web applications using React. Solved 130+ React programming problems, strengthening my skills in components, state management, props, routing and modern React development.</p>
                  <h4 className='certificate-link'
                  onClick={()=>this.openModal("https://i.postimg.cc/fT9CGBvL/React-js.png")}
                  >Certificate <FaExternalLinkAlt/></h4>
              </div>

              <div className='card'>
                <div className='card-icon'>
                  <AiOutlineSafetyCertificate />
                </div>
                <h1 className='card-title'>SQL</h1>
                  <p className='card-description'>Completed the SQL certification from NxtWave, gaining a strong understanding of database management, SQL queries, joins, functions, and data manipulation. Solved 100+ SQL problems, strengthening my skills in writing efficient queries and working with relational databases.</p>
                  <h4 className='certificate-link'
                  onClick={()=>this.openModal("https://i.postimg.cc/prgZ9FPm/Sql.png")}
                  >Certificate <FaExternalLinkAlt/></h4>
              </div>

              <div className='card'>
                <div className='card-icon'>
                  <AiOutlineSafetyCertificate />
                </div>
                <h1 className='card-title'>JAVASCRIPT ESSENTIAL</h1>
                  <p className='card-description'>Completed the JavaScript Essentials certification from NxtWave, gaining a solid understanding of JavaScript fundamentals, ES6 features, DOM manipulation, events and asynchronous programming. Solved 110+ JavaScript programming problems, strengthening my problem-solving skills and ability to build interactive web applications.
                  </p>
                  <h4 className='certificate-link'
                  onClick={()=>this.openModal("https://i.postimg.cc/J0yx4qVK/Javascript.png")}
                  >Certificate <FaExternalLinkAlt/></h4>
              </div>
            </div>
          </div>
    

            
            <div>
              <h1 className='about-title' id='project'>Projects</h1>
              <h3 className='home-subtitle '><span className='home-subtitle-span about-span'>Some of my Work</span></h3>
              <ul className='projects-container'>
                <li className='skills'>Python</li>
                <li className='skills'>SQL</li>
                <li className='skills'>React js</li>
                <li className='skills'>Javascript</li>
                <li className='skills'>Node.js</li>
                <li className='skills'>Mongo DB</li>
                <li className='skills'>Rest Api</li>
                <li className='skills'>Java</li>
                <li className='skills'>Git hub</li>
                <li className='skills'>JWT</li>
                <li className='skills'>Postman</li>
              </ul>
            </div>
            
            <div className='project-card-container'>
              <div className='project-card'>
                <div>
                  <img src="https://i.postimg.cc/50Xj9wVb/Image-(3).png" alt="profile"  className='banner-img'/>
                </div>
                <p className='banner-title'>Netflix Movies App</p>
                <div className='technology-used'>
                  <p className='technology-text'>Technology used</p>
                  <a href='https://github.com/vrushabh5623/TastyKitchens'>
                  <div className='arrow-icon'><LuArrowUpRight /></div>
                  </a>
                </div>
              </div>

              <div className='project-card'>
                <div>
                  <img src="https://i.postimg.cc/50Xj9wVb/Image-(3).png" alt="profile"  className='banner-img'/>
                </div>
                <p className='banner-title'>Nxt Trendz – E-Commerce</p>
                <div className='technology-used'>
                  <p className='technology-text'>Technology used</p>
                  <div></div>
                  <a href='https://github.com/vrushabh5623/TastyKitchens'>
                  <div className='arrow-icon'><LuArrowUpRight /></div>
                  </a>
                </div>
              </div>

              <div className='project-card'>
                <div>
                  <img src="https://i.postimg.cc/50Xj9wVb/Image-(3).png" alt="profile"  className='banner-img'/>
                </div>
                <p className='banner-title'>Tasty Kitchens</p>
                <div className='technology-used'>
                  <p className='technology-text'>Technology used</p>
                  <a href='https://github.com/vrushabh5623/TastyKitchens'>
                  <div className='arrow-icon'><LuArrowUpRight /></div>
                  </a>
                </div>
              </div>

              <div>
                <h1 className='about-title' id='contact'>Contact Me</h1>
                <h3 className='home-subtitle '><span className='home-subtitle-span about-span'>Let's Build Something Great</span></h3>
                <p className='home-description'>
                  I'm always interested in meaningful collaborations, innovative projects and conversations about software development, Generative AI and technology. Feel free to get in touch if you'd like to connect or discuss ideas.
                </p>
                <div className='contact-div'>
                  <p className='contact-icon'><IoMdContact />7972097122</p>
                  <p className='contact-icon'><SiGmail /> vrushabhlanjewar56@gmail.com</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <Footer/>
        <Modal
            isOpen={isModalOpen}
            onRequestClose={this.closeModal}
            className="certificate-modal"
            overlayClassName="certificate-overlay"
          >
            <button
              className="close-btn"
              onClick={this.closeModal}
            >
              ✕
            </button>

            <img
              src={certificateImage}
              alt="Certificate"
              className="certificate-image"
            />
        </Modal>
        
      </>
    )
  }
}


export default Home;