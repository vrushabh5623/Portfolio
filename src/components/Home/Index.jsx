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
    name:"",
    email:"",
    message:""
  };

 
 
    onSubmitBtn = async(event) =>{
      event.preventDefault();

      const {name,email,message} = this.state
      const url = "https://vrs.app.n8n.cloud/webhook-test/46c2fbbd-01e0-423e-a03e-4dd2e07a1b45"
      const options = {
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          name,
          email,
          message
        })
      }
      const response = await fetch(url,options)
      console.log(response)
    }

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

  onChangeName = (event) =>{
    this.setState({name:event.target.value})
  }

  onChangeMail = (event)=>{
    this.setState({email: event.target.value})
  }

  onChangeMessage = (event)=>{
    this.setState({message:event.target.value})
  } 

  renderName = ()=>{
    const {name} = this.state
    // console.log(name)
    return(
      <div className="input-container">
    <label htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      placeholder="Enter your name"
      value={name}
      onChange={this.onChangeName}
    />
  </div>
    )
  }

  renderEmail = () =>{
    const {email} = this.state
    // console.log(email)
    return(
      <div className="input-container">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      value={email}
      onChange={this.onChangeMail}
    />
  </div>
    )
  }

  renderMessage = () =>{
    const {message} = this.state
    return(
      <div className="input-container">
    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      rows="5"
      placeholder="Enter your message"
      value={message}
      onChange={this.onChangeMessage}
    ></textarea>
  </div>
    )
  }

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
                  {/* <img src="https://i.postimg.cc/PxD32m72/python.jpg" className='certificate-logo'/> */}
                   {/* <AiOutlineSafetyCertificate /> */}
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="python">
                    <path d="M18.231 7.357h.001v-.004z"></path>
                    <path fill="#F2BB30" d="M20.699 17.748c1.666 0 2.282-1.162 2.861-2.904.6-1.794.574-3.52 0-5.818-.413-1.655-1.194-2.904-2.861-2.904h-2.147v2.541c0 1.971-1.672 3.632-3.578 3.632H9.252c-1.565 0-2.861 1.339-2.861 2.909v5.454c0 1.553 1.35 2.464 2.861 2.909 1.81.53 3.552.626 5.721 0 1.441-.418 2.861-1.26 2.861-2.909v-2.181h-5.717v-.728h8.582zm-5.367 2.181c.594 0 1.077.488 1.077 1.088 0 .606-.482 1.093-1.077 1.093a1.09 1.09 0 0 1-1.077-1.093 1.088 1.088 0 0 1 1.077-1.088z"></path>
                    <path fill="#35668F" d="M3.444 17.749H5.41v-2.615c0-1.891 1.634-3.558 3.578-3.558h5.721c1.591 0 2.861-1.312 2.861-2.909V3.209c0-1.553-1.307-2.717-2.861-2.978-1.918-.317-4.002-.299-5.721.006l.001-.001c-2.422.428-2.86 1.322-2.86 2.977v2.181h5.727v.729H3.98C2.314 6.123.856 7.125.402 9.027c-.525 2.181-.546 3.541 0 5.818.406 1.693 1.377 2.904 3.042 2.904zM8.63 3.937a1.084 1.084 0 0 1-1.077-1.088A1.089 1.089 0 0 1 8.63 1.756c.59 0 1.077.492 1.077 1.093S9.225 3.937 8.63 3.937z"></path>
                  </svg>
                </div>
                <h1 className='card-title'>PYTHON PROGRAMMING FOUNDATION</h1>
                  <p className='card-description'>
                    Completed the Python Programming Foundation certification from NxtWave, gaining a strong understanding of Python fundamentals, including variables, loops, functions, data structures and object-oriented programming. Solved 500+ Python programming problems, strengthening my problem-solving, logical thinking and coding skills.
                  </p>
                  <h4 className='certificate-link' onClick={()=>this.openModal("https://i.postimg.cc/8PqjJbMC/Python.png")}>Certificate <FaExternalLinkAlt/></h4>
              </div>

              <div className='card'>
                <div className='card-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="certificate">
  <g>
    <linearGradient id="a" x1="1" x2="511" y1="256" y2="256" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4371c2"></stop>
      <stop offset=".022" stop-color="#486ec1"></stop>
      <stop offset=".222" stop-color="#6d58bc"></stop>
      <stop offset=".421" stop-color="#8a46b8"></stop>
      <stop offset=".618" stop-color="#9e3ab4"></stop>
      <stop offset=".813" stop-color="#ab33b3"></stop>
      <stop offset="1" stop-color="#af30b2"></stop>
    </linearGradient>
    <path fill="url(#a)" d="M481,1H31C14.458,1,1,14.458,1,31v270c0,16.542,13.458,30,30,30h126.223
		c-2.994,15.441,10.285,25.793,12.475,32.542c2.104,6.477-1.409,20.06,6.035,30.29c6.767,9.299,18.724,10.807,25.268,14.082V501
		c0,3.688,2.03,7.076,5.281,8.816c3.252,1.742,7.199,1.549,10.266-0.496L256,483.018l39.453,26.302
		c1.673,1.116,3.607,1.68,5.548,1.68c5.518,0,9.999-4.481,9.999-10v-93.086c6.53-3.269,18.505-4.789,25.267-14.081
		c7.445-10.227,3.937-23.832,6.036-30.29c2.206-6.8,15.473-17.082,12.475-32.543H481c16.542,0,30-13.458,30-30V31
		C511,14.458,497.542,1,481,1z M291,482.314l-29.453-19.635c-3.359-2.24-7.734-2.24-11.094,0L221,482.314V427.96
		c13.59,7.751,27.025-1.737,35-1.737c8.008,0,21.381,9.502,35,1.737V482.314z M330.313,344.747c-2.563,3.656-5.469,7.8-7.033,12.62
		c-1.619,4.983-1.729,10.163-1.827,14.732c-0.084,3.912-0.18,8.347-1.357,9.965c-1.214,1.668-5.433,3.131-9.154,4.422
		c-4.301,1.492-9.176,3.183-13.38,6.242c-7.898,5.748-13.002,16.814-17.074,18.136c-1.798,0.582-6.175-0.733-9.688-1.792
		c-4.432-1.336-9.456-2.85-14.799-2.85s-10.366,1.514-14.799,2.85c-3.515,1.06-7.893,2.378-9.689,1.792
		c-3.462-1.125-8.409-10.21-13.627-15.175c-5.049-4.972-10.061-6.855-16.825-9.203c-3.723-1.291-7.941-2.754-9.156-4.423
		c-1.178-1.617-1.272-6.052-1.356-9.964c-0.098-4.569-0.208-9.749-1.827-14.734c-1.564-4.818-4.47-8.962-7.032-12.618
		c-2.3-3.279-4.905-6.997-4.905-9.245s2.605-5.966,4.905-9.245c2.563-3.656,5.468-7.8,7.033-12.619
		c1.618-4.984,1.729-10.163,1.826-14.733c0.084-3.912,0.18-8.347,1.357-9.965c1.214-1.668,5.433-3.131,9.154-4.422
		c4.301-1.492,9.176-3.183,13.38-6.242c4.157-3.025,7.236-7.111,9.953-10.717c2.388-3.169,5.094-6.761,7.121-7.419
		c1.993-0.647,7.419,1.108,9.688,1.792c4.432,1.336,9.456,2.85,14.799,2.85s10.366-1.514,14.799-2.85
		c3.514-1.06,7.888-2.376,9.689-1.792c2.026,0.658,4.733,4.25,7.121,7.42c2.717,3.604,5.796,7.69,9.953,10.717
		c4.203,3.059,9.078,4.749,13.378,6.241c3.723,1.291,7.941,2.754,9.156,4.423c1.178,1.617,1.272,6.052,1.356,9.964
		c0.098,4.569,0.208,9.749,1.827,14.734c1.564,4.818,4.47,8.962,7.032,12.618c2.3,3.279,4.905,6.997,4.905,9.245
		S332.612,341.468,330.313,344.747z M329.608,271c-7.26-4.676-16.354-6.039-20.277-8.895c-5.302-3.861-10.462-17.024-22.666-20.988
		c-12.04-3.91-23.548,3.664-30.665,3.664c-7.111,0-18.623-7.57-30.664-3.664c-12.204,3.963-17.369,17.13-22.666,20.987
		c-3.898,2.838-13.055,4.243-20.278,8.896H61V61h390v210H329.608z M491,301c0,5.514-4.486,10-10,10H344.127
		c-0.823-1.302-1.495-2.521-1.825-3.538c-1.174-3.615-0.576-10.167-1.236-16.462H461c5.522,0,10-4.478,10-10V51
		c0-5.522-4.478-10-10-10H51c-5.522,0-10,4.478-10,10v230c0,5.522,4.478,10,10,10h119.933c-0.651,6.21-0.065,12.857-1.235,16.461
		c-0.331,1.018-1.002,2.237-1.826,3.539H31c-5.514,0-10-4.486-10-10V31c0-5.514,4.486-10,10-10h450c5.514,0,10,4.486,10,10V301z
		 M256,285.502c-27.57,0-50,22.43-50,50s22.43,50,50,50s50-22.43,50-50S283.57,285.502,256,285.502z M256,365.502
		c-16.542,0-30-13.458-30-30s13.458-30,30-30s30,13.458,30,30S272.542,365.502,256,365.502z M421,101c0,5.522-4.478,10-10,10H101
		c-5.522,0-10-4.478-10-10s4.478-10,10-10h310C416.522,91,421,95.477,421,101z M421,151c0,5.522-4.478,10-10,10H101
		c-5.522,0-10-4.478-10-10s4.478-10,10-10h310C416.522,141,421,145.477,421,151z M361,201c0,5.522-4.478,10-10,10H161
		c-5.522,0-10-4.478-10-10s4.478-10,10-10h190C356.522,191,361,195.477,361,201z"></path>
  </g>
</svg>
                  {/* <AiOutlineSafetyCertificate /> */}
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
                <div className='aws-card-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" id="aws">
  <path d="M6.763 11.212c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.39-.384-.59-.894-.59-1.533 0-.678.24-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.4 2.4 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.577 4.577 0 011.005-.36 4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586h.016zm-3.24 1.214c.263 0 .534-.048.822-.144a1.78 1.78 0 00.758-.51 1.27 1.27 0 00.272-.512c.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 6.726a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.15 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32L12.32 7.747l-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08l-.686.001zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.32.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .36.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926a2.157 2.157 0 01-.583.703c-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"></path>
  <path fill="#F90" d="M.378 15.475c3.384 1.963 7.56 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.44-.2.814.287.383.607-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351zm23.531-.2c.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151l.175-.439c.343-.88.802-2.198.52-2.555-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399z"></path>
</svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#09D3AC" viewBox="0 0 24 24" id="create-react-app">
  <path d="M21.92 10.846c0-1.223-1.44-2.308-3.655-2.97.533-2.25.3-4.04-.76-4.645a1.7 1.7 0 0 0-.85-.213c-.989 0-2.239.69-3.501 1.886-1.262-1.186-2.509-1.873-3.496-1.873a1.7 1.7 0 0 0-.863.216c-1.054.607-1.273 2.386-.747 4.625-2.203.659-3.636 1.735-3.64 2.953-.003 1.218 1.442 2.308 3.656 2.968-.533 2.251-.302 4.04.76 4.645.259.145.552.218.848.213.991 0 2.241-.69 3.503-1.886 1.26 1.186 2.507 1.873 3.496 1.873a1.7 1.7 0 0 0 .863-.216c1.054-.607 1.271-2.386.747-4.616 2.204-.668 3.636-1.744 3.638-2.96m-7.953-5.541c1.454-1.301 2.363-1.442 2.686-1.442a.84.84 0 0 1 .43.103c.508.29.71 1.31.549 2.663a10 10 0 0 1-.178 1.028 17 17 0 0 0-2.233-.367 17.5 17.5 0 0 0-1.463-1.79q.098-.098.21-.195m-4.401 6.548q.208.399.438.8c.153.268.313.54.49.808a17 17 0 0 1-1.391-.259c.124-.451.282-.895.463-1.35m-.492-3.38q.675-.158 1.408-.26c-.177.263-.33.533-.49.815s-.3.533-.437.802a21 21 0 0 1-.48-1.358M10 10.84q.33-.697.726-1.396c.267-.465.552-.918.847-1.35q.776-.06 1.598-.06c.549.002 1.065.022 1.578.063.295.43.577.887.844 1.34.266.453.511.927.731 1.39a20 20 0 0 1-1.571 2.747 20 20 0 0 1-3.176-.004 20 20 0 0 1-.845-1.34 21 21 0 0 1-.725-1.39zm5.834-2.623c.483.068.95.155 1.392.258-.131.438-.288.888-.469 1.34q-.209-.398-.44-.8a38 38 0 0 0-.476-.798zm.49 4.425q.229-.403.437-.805c.177.462.355.917.48 1.36q-.674.157-1.407.258.257-.395.497-.813zm-3.165-6.54q.48.513.94 1.107a23 23 0 0 0-.928-.021c-.314 0-.636 0-.946.021a15 15 0 0 1 .934-1.106M9.22 3.974a.86.86 0 0 1 .438-.099 2.3 2.3 0 0 1 .922.233 7 7 0 0 1 1.775 1.203l.208.19a17.5 17.5 0 0 0-1.449 1.776 18 18 0 0 0-2.246.365 9 9 0 0 1-.177-1.006c-.185-1.34.028-2.363.527-2.655zm-.94 9.002a10 10 0 0 1-.983-.355c-1.26-.533-2.042-1.216-2.042-1.8S6.04 9.554 7.3 9.031a10 10 0 0 1 .966-.345 17 17 0 0 0 .81 2.155 18 18 0 0 0-.794 2.133m4.084 3.39c-1.454 1.302-2.363 1.44-2.688 1.44a.83.83 0 0 1-.43-.102c-.507-.29-.71-1.31-.548-2.663a10 10 0 0 1 .177-1.027q1.105.255 2.234.366.672.945 1.463 1.79zm.811-.8q-.48-.511-.942-1.106.458.021.93.021c.314 0 .636 0 .946-.02q-.461.593-.935 1.105zm3.938 2.13a.86.86 0 0 1-.44.105c-.323 0-1.243-.142-2.692-1.438l-.207-.19a17.5 17.5 0 0 0 1.447-1.775 17 17 0 0 0 2.247-.366q.119.518.178 1.007c.176 1.338-.029 2.361-.535 2.65zm1.918-5.049q-.455.188-.966.343a17.5 17.5 0 0 0-.812-2.155q.469-1.04.798-2.13.5.152.983.354c1.259.533 2.042 1.216 2.04 1.8s-.785 1.257-2.045 1.781zm-5.873-.18c.322 0 .637-.096.905-.274a1.63 1.63 0 0 0 .601-.731 1.63 1.63 0 0 0 .094-.942 1.63 1.63 0 0 0-.445-.835 1.63 1.63 0 0 0-.834-.447 1.63 1.63 0 0 0-.942.092 1.63 1.63 0 0 0-.732.6 1.63 1.63 0 0 0-.276.905 1.6 1.6 0 0 0 .123.624 1.63 1.63 0 0 0 1.506 1.007M2.328 1.011v19.645H24V1.012zm20.825 18.8H3.176V1.859h19.977zm-15.09-6.019c-.533 2.251-.303 4.04.759 4.645.259.145.552.218.849.213.99 0 2.24-.69 3.503-1.886 1.26 1.186 2.506 1.873 3.495 1.873a1.7 1.7 0 0 0 .863-.216c1.055-.607 1.271-2.386.748-4.616 2.203-.66 3.636-1.737 3.637-2.953.002-1.216-1.44-2.308-3.653-2.97.532-2.25.3-4.04-.76-4.645a1.7 1.7 0 0 0-.85-.213c-.99 0-2.24.69-3.502 1.886-1.262-1.186-2.508-1.873-3.496-1.873a1.7 1.7 0 0 0-.862.216C7.739 3.862 7.52 5.64 8.046 7.88c-2.203.659-3.636 1.735-3.64 2.953-.003 1.218 1.444 2.297 3.658 2.961zm4.297 2.573c-1.454 1.301-2.363 1.44-2.688 1.44a.83.83 0 0 1-.43-.103c-.507-.29-.71-1.31-.548-2.663a10 10 0 0 1 .178-1.027 18 18 0 0 0 2.233.366q.672.945 1.463 1.79zm4.402-6.55a24 24 0 0 0-.44-.8c-.155-.269-.32-.533-.484-.798.483.068.95.155 1.392.258-.13.438-.286.888-.467 1.34zm.483 3.373q-.673.157-1.407.258a21 21 0 0 0 .927-1.617c.187.47.348.921.476 1.368zm-.925-2.37a20 20 0 0 1-1.572 2.747 20 20 0 0 1-3.176-.004 20 20 0 0 1-1.576-2.73q.33-.697.726-1.396c.266-.465.552-.918.847-1.35a20.6 20.6 0 0 1 3.176.004c.294.428.577.886.843 1.34.266.452.513.935.733 1.398zm-5.826 2.642a17 17 0 0 1-1.391-.259c.13-.437.289-.888.47-1.34q.208.399.438.8c.153.268.306.531.483.8M10 9.023q-.231.398-.437.802a18 18 0 0 1-.488-1.353q.675-.156 1.408-.259c-.165.263-.323.534-.483.81m3.175 6.542q-.48-.511-.943-1.106.458.021.93.021c.314 0 .636 0 .946-.02a16 16 0 0 1-.933 1.105m3.937 2.13a.86.86 0 0 1-.44.105c-.323 0-1.243-.142-2.691-1.438l-.208-.19a17.5 17.5 0 0 0 1.447-1.775 17 17 0 0 0 2.247-.366q.12.518.178 1.007c.178 1.338-.027 2.361-.533 2.65zm.938-8.994q.5.153.983.355c1.26.533 2.042 1.217 2.04 1.8-.001.585-.783 1.272-2.043 1.796q-.455.188-.966.342a17.5 17.5 0 0 0-.811-2.155q.468-1.046.797-2.145zm-4.084-3.389c1.454-1.301 2.363-1.442 2.687-1.442a.84.84 0 0 1 .43.103c.507.29.71 1.31.548 2.663a10 10 0 0 1-.178 1.028 17 17 0 0 0-2.233-.367 17.5 17.5 0 0 0-1.463-1.79q.101-.107.211-.202zm-.807.792q.48.511.94 1.106a23 23 0 0 0-.928-.021c-.314 0-.636 0-.946.02a15 15 0 0 1 .934-1.105M9.22 3.974a.86.86 0 0 1 .438-.1 2.3 2.3 0 0 1 .922.233 7 7 0 0 1 1.775 1.203l.208.19a17.5 17.5 0 0 0-1.449 1.776 18 18 0 0 0-2.246.365 9 9 0 0 1-.177-1.006c-.185-1.34.028-2.363.527-2.655zM7.299 9.031a10 10 0 0 1 .966-.345 17 17 0 0 0 .81 2.155 18 18 0 0 0-.798 2.13 10 10 0 0 1-.984-.354c-1.26-.533-2.041-1.216-2.041-1.8s.788-1.263 2.047-1.786m5.859.177a1.63 1.63 0 0 0-.906.274 1.63 1.63 0 0 0-.601.73 1.63 1.63 0 0 0-.094.942 1.63 1.63 0 0 0 3.229-.314 1.6 1.6 0 0 0-.12-.627 1.6 1.6 0 0 0-.353-.533 1.6 1.6 0 0 0-.53-.356 1.6 1.6 0 0 0-.625-.125za1.63 1.63 0 0 0-.906.274 1.63 1.63 0 0 0-.601.73 1.63 1.63 0 0 0-.094.942 1.63 1.63 0 0 0 3.229-.314 1.6 1.6 0 0 0-.12-.627 1.6 1.6 0 0 0-.353-.533 1.6 1.6 0 0 0-.53-.356 1.6 1.6 0 0 0-.625-.125za1.63 1.63 0 0 0-.906.274 1.63 1.63 0 0 0-.601.73 1.63 1.63 0 0 0-.094.942 1.63 1.63 0 0 0 3.229-.314 1.6 1.6 0 0 0-.12-.627 1.6 1.6 0 0 0-.353-.533 1.6 1.6 0 0 0-.53-.356 1.6 1.6 0 0 0-.625-.125zm8.761 1.64c0-1.223-1.44-2.307-3.654-2.97.533-2.25.3-4.039-.76-4.644a1.7 1.7 0 0 0-.85-.213c-.989 0-2.239.69-3.501 1.885-1.262-1.186-2.509-1.873-3.496-1.873a1.7 1.7 0 0 0-.863.217c-1.054.607-1.273 2.386-.747 4.625-2.203.658-3.636 1.734-3.64 2.952-.003 1.218 1.442 2.308 3.656 2.969-.533 2.25-.302 4.039.76 4.644.259.145.552.219.848.213.991 0 2.241-.69 3.503-1.885 1.26 1.186 2.507 1.873 3.496 1.873.302.005.6-.07.863-.217 1.054-.607 1.271-2.386.747-4.616 2.204-.671 3.636-1.747 3.638-2.963zm-7.952-5.544c1.454-1.301 2.363-1.442 2.686-1.442a.84.84 0 0 1 .43.103c.508.29.71 1.31.549 2.663a10 10 0 0 1-.178 1.028 17 17 0 0 0-2.233-.367 17.5 17.5 0 0 0-1.463-1.79q.098-.098.21-.195m-4.401 6.548q.208.399.438.8c.153.268.313.54.49.808a17 17 0 0 1-1.391-.259c.124-.451.282-.895.463-1.35m-.492-3.38q.675-.158 1.408-.26c-.177.263-.33.533-.49.815s-.3.533-.437.802a21 21 0 0 1-.48-1.358M10 10.84q.33-.697.726-1.396c.267-.465.552-.918.847-1.35q.776-.06 1.598-.06c.549.002 1.065.022 1.578.063.295.43.577.887.844 1.34.266.453.511.927.731 1.39a20 20 0 0 1-1.571 2.747 20 20 0 0 1-3.176-.004 20 20 0 0 1-.845-1.34 21 21 0 0 1-.725-1.39zm5.834-2.623c.483.068.95.155 1.392.258-.131.438-.288.888-.469 1.34q-.209-.398-.44-.8a38 38 0 0 0-.476-.798zm.49 4.425q.229-.403.437-.805c.177.462.355.917.48 1.36q-.674.157-1.407.258.257-.395.497-.813zm-3.165-6.54q.48.513.94 1.107a23 23 0 0 0-.928-.021c-.314 0-.636 0-.946.021a15 15 0 0 1 .934-1.106M9.22 3.974a.86.86 0 0 1 .438-.099 2.3 2.3 0 0 1 .922.233 7 7 0 0 1 1.775 1.203l.208.19a17.5 17.5 0 0 0-1.449 1.776 18 18 0 0 0-2.246.365 9 9 0 0 1-.177-1.006c-.185-1.34.028-2.363.527-2.655zm-.94 9.002a10 10 0 0 1-.983-.355c-1.26-.533-2.042-1.216-2.042-1.8S6.04 9.554 7.3 9.031a10 10 0 0 1 .966-.345 17 17 0 0 0 .81 2.155 18 18 0 0 0-.794 2.133m4.084 3.39c-1.454 1.302-2.363 1.44-2.688 1.44a.83.83 0 0 1-.43-.102c-.507-.29-.71-1.31-.548-2.663a10 10 0 0 1 .177-1.027q1.105.255 2.234.366.672.945 1.463 1.79zm.811-.8q-.48-.511-.942-1.106.458.021.93.021c.314 0 .636 0 .946-.02q-.461.593-.935 1.105zm3.938 2.13a.86.86 0 0 1-.44.105c-.323 0-1.243-.142-2.692-1.438l-.207-.19a17.5 17.5 0 0 0 1.447-1.775 17 17 0 0 0 2.247-.366q.119.518.178 1.007c.176 1.338-.029 2.361-.535 2.65zm1.918-5.049q-.455.188-.966.343a17.5 17.5 0 0 0-.812-2.155q.469-1.04.798-2.13.5.152.983.354c1.259.533 2.042 1.216 2.04 1.8s-.785 1.257-2.045 1.781zm-5.873-.18c.322 0 .637-.096.905-.274a1.63 1.63 0 0 0 .601-.731 1.63 1.63 0 0 0 .094-.942 1.63 1.63 0 0 0-.445-.835 1.63 1.63 0 0 0-.834-.447 1.63 1.63 0 0 0-.942.092 1.63 1.63 0 0 0-.732.6 1.63 1.63 0 0 0-.276.905 1.6 1.6 0 0 0 .123.624 1.63 1.63 0 0 0 1.506 1.007M.85 22.14V2.49L0 3.341v19.647h21.669l.849-.847z"></path>
</svg>
                  {/* <AiOutlineSafetyCertificate /> */}
                </div>
                <h1 className='card-title'>REACT JS</h1>
                  <p className='card-description'>Completed the React JS certification from NxtWave, gaining practical experience in building responsive web applications using React. Solved 130+ React programming problems, strengthening my skills in components, state management, props, routing and modern React development.</p>
                  <h4 className='certificate-link'
                  onClick={()=>this.openModal("https://i.postimg.cc/fT9CGBvL/React-js.png")}
                  >Certificate <FaExternalLinkAlt/></h4>
              </div>

              <div className='card'>
                <div className='card-icon'>
                  {/* <AiOutlineSafetyCertificate /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="none" viewBox="0 0 96 96" id="sql">
  <path fill="url(#paint0_linear_821_12451)" fill-rule="evenodd" d="M14 15.5C12.6193 15.5 11.5 16.6193 11.5 18V32C11.5 33.3807 12.6193 34.5 14 34.5H69C70.3807 34.5 71.5 33.3807 71.5 32V18C71.5 16.6193 70.3807 15.5 69 15.5H14ZM6.5 32C6.5 33.9209 7.22213 35.6731 8.40973 37C7.22213 38.3269 6.5 40.0791 6.5 42V55C6.5 56.9209 7.22213 58.6731 8.40973 60C7.22213 61.3269 6.5 63.0791 6.5 65V79C6.5 83.1421 9.85787 86.5 14 86.5H53H72.5H84C85.933 86.5 87.5 84.933 87.5 83V57.1236C87.5 54.5097 86.423 52.0113 84.5226 50.2167L83.9006 49.6293L83.859 49.5901L83.8158 49.5528L79.4617 45.8022C78.5809 45.0435 77.5759 44.4591 76.5 44.069V42C76.5 40.0791 75.7779 38.3269 74.5903 37C75.7779 35.6731 76.5 33.9209 76.5 32V18C76.5 13.8579 73.1421 10.5 69 10.5H14C9.85787 10.5 6.5 13.8579 6.5 18V32ZM71.5 43.5V42C71.5 40.6193 70.3807 39.5 69 39.5H14C12.6193 39.5 11.5 40.6193 11.5 42V55C11.5 56.3807 12.6193 57.5 14 57.5H49.5V47C49.5 45.067 51.067 43.5 53 43.5H71.5ZM49.5 62.5H14C12.6193 62.5 11.5 63.6193 11.5 65V79C11.5 80.3807 12.6193 81.5 14 81.5H49.5V70V62.5ZM54.5 81.5H72.5H82.5V59.5H77C73.9624 59.5 71.5 57.0376 71.5 54V48.5H54.5V70V81.5ZM76.5 49.8503V54C76.5 54.2761 76.7239 54.5 77 54.5H81.6561C81.4896 54.2681 81.3003 54.0509 81.0896 53.8519L80.5092 53.3038L76.5 49.8503ZM68 24.5C68 25.8807 66.8807 27 65.5 27C64.1193 27 63 25.8807 63 24.5C63 23.1193 64.1193 22 65.5 22C66.8807 22 68 23.1193 68 24.5ZM56.5 27C57.8807 27 59 25.8807 59 24.5C59 23.1193 57.8807 22 56.5 22C55.1193 22 54 23.1193 54 24.5C54 25.8807 55.1193 27 56.5 27ZM16.5 25C16.5 23.6193 17.6193 22.5 19 22.5H35C36.3807 22.5 37.5 23.6193 37.5 25C37.5 26.3807 36.3807 27.5 35 27.5H19C17.6193 27.5 16.5 26.3807 16.5 25ZM19 45.5C17.6193 45.5 16.5 46.6193 16.5 48C16.5 49.3807 17.6193 50.5 19 50.5H35C36.3807 50.5 37.5 49.3807 37.5 48C37.5 46.6193 36.3807 45.5 35 45.5H19ZM16.5 72C16.5 70.6193 17.6193 69.5 19 69.5H35C36.3807 69.5 37.5 70.6193 37.5 72C37.5 73.3807 36.3807 74.5 35 74.5H19C17.6193 74.5 16.5 73.3807 16.5 72ZM60.5476 70.2918C60.4628 70.2131 60.3909 70.1508 60.3321 70.1049C60.2473 70.0262 60.1787 69.9869 60.1264 69.9869C60.0807 69.9869 60.0252 70.0098 59.9599 70.0557L59.1077 70.8721C59.0359 70.9443 59 71.0066 59 71.059C59 71.1115 59.0359 71.177 59.1077 71.2557L59.1273 71.2754C59.1312 71.2754 59.135 71.2777 59.1389 71.2822C59.1416 71.2854 59.1442 71.2897 59.1469 71.2951L59.1665 71.3049C59.3232 71.482 59.5028 71.6459 59.7053 71.7967C59.9077 71.9475 60.1232 72.0787 60.3517 72.1902C60.5868 72.3016 60.8284 72.3902 61.0766 72.4557C61.3247 72.5213 61.5761 72.5541 61.8308 72.5541C62.2292 72.5541 62.6014 72.4984 62.9475 72.3869C63.2936 72.2689 63.594 72.1082 63.8486 71.9049C64.1033 71.6951 64.3025 71.4459 64.4461 71.1574C64.5963 70.8623 64.6714 70.5344 64.6714 70.1738C64.6714 69.8328 64.6127 69.5443 64.4951 69.3082C64.3776 69.0656 64.2111 68.859 63.9956 68.6885C63.7866 68.5115 63.5352 68.3607 63.2413 68.2361C62.9475 68.1115 62.6275 67.9902 62.2814 67.8721C61.9222 67.7541 61.6512 67.6459 61.4684 67.5475C61.2855 67.4492 61.1941 67.3082 61.1941 67.1246C61.1941 66.9344 61.2725 66.8033 61.4292 66.7311C61.5859 66.659 61.772 66.623 61.9875 66.623C62.1965 66.623 62.3924 66.6787 62.5753 66.7902C62.7646 66.8951 62.9246 67.0033 63.0552 67.1148L63.1042 67.1541C63.1499 67.1934 63.1891 67.2262 63.2217 67.2525C63.2609 67.2787 63.3034 67.2918 63.3491 67.2918C63.4078 67.2918 63.4634 67.2656 63.5156 67.2131L64.2698 66.4066C64.3547 66.3082 64.3972 66.2295 64.3972 66.1705C64.3972 66.0787 64.3155 65.9639 64.1523 65.8262C63.989 65.6885 63.7964 65.5541 63.5744 65.423C63.3132 65.2721 63.0422 65.1639 62.7614 65.0984C62.4871 65.0328 62.203 65 61.9092 65C61.5174 65 61.1615 65.0492 60.8415 65.1475C60.5215 65.2393 60.2473 65.3738 60.0187 65.5508C59.7967 65.7279 59.6236 65.941 59.4996 66.1902C59.3755 66.4393 59.3134 66.718 59.3134 67.0262C59.3134 67.6033 59.5061 68.0787 59.8914 68.4525C60.2832 68.8262 60.8742 69.1508 61.6643 69.4262C61.7557 69.459 61.8602 69.4984 61.9777 69.5443C62.1018 69.5836 62.2161 69.6361 62.3206 69.7016C62.4316 69.7607 62.5263 69.8295 62.6046 69.9082C62.683 69.9869 62.7222 70.0787 62.7222 70.1836C62.7222 70.3672 62.6601 70.5279 62.5361 70.6656C62.4185 70.8033 62.19 70.8721 61.8504 70.8721C61.6741 70.8721 61.501 70.8426 61.3313 70.7836C61.168 70.718 61.0048 70.6295 60.8415 70.518C60.7305 70.4393 60.6325 70.3639 60.5476 70.2918ZM65.8297 67.3508C65.6338 67.8033 65.5359 68.2918 65.5359 68.8164C65.5359 69.2557 65.6044 69.6754 65.7416 70.0754C65.8787 70.4689 66.0681 70.8262 66.3097 71.1475C66.5578 71.4689 66.8517 71.741 67.1913 71.9639C67.5308 72.1869 67.903 72.3475 68.3079 72.4459V73.7836C68.3079 73.9279 68.3797 74 68.5234 74H69.9731C70.1298 74 70.2082 73.9279 70.2082 73.7836V72.4557C70.6196 72.3574 70.9951 72.1967 71.3346 71.9738C71.6807 71.7508 71.9779 71.4787 72.226 71.1574C72.4741 70.8361 72.6668 70.4754 72.8039 70.0754C72.9476 69.6754 73.0194 69.2557 73.0194 68.8164C73.0194 68.2918 72.9215 67.8033 72.7255 67.3508C72.5296 66.8918 72.2619 66.4918 71.9223 66.1508C71.5828 65.8098 71.1844 65.541 70.7273 65.3443C70.2767 65.1475 69.7935 65.0492 69.2776 65.0492C68.7618 65.0492 68.2753 65.1475 67.8181 65.3443C67.361 65.541 66.9627 65.8098 66.6231 66.1508C66.2901 66.4918 66.0256 66.8918 65.8297 67.3508ZM67.5635 69.5738C67.472 69.3377 67.4263 69.082 67.4263 68.8066C67.4263 68.5377 67.472 68.2852 67.5635 68.0492C67.6549 67.8131 67.7822 67.6066 67.9455 67.4295C68.1087 67.2525 68.3046 67.1148 68.5332 67.0164C68.7618 66.9115 69.0099 66.859 69.2776 66.859C69.5454 66.859 69.7935 66.9115 70.0221 67.0164C70.2506 67.1148 70.4465 67.2525 70.6098 67.4295C70.773 67.6066 70.9004 67.8131 70.9918 68.0492C71.0832 68.2852 71.1289 68.5377 71.1289 68.8066C71.1289 69.082 71.0832 69.3377 70.9918 69.5738C70.9004 69.8098 70.773 70.0164 70.6098 70.1934C70.4465 70.3639 70.2506 70.5016 70.0221 70.6066C69.7935 70.7049 69.5454 70.7541 69.2776 70.7541C69.0099 70.7541 68.7618 70.7049 68.5332 70.6066C68.3046 70.5016 68.1087 70.3639 67.9455 70.1934C67.7822 70.0164 67.6549 69.8098 67.5635 69.5738ZM74.1905 65.3738C74.1905 65.3016 74.2101 65.2492 74.2493 65.2164C74.295 65.177 74.344 65.1574 74.3962 65.1574H75.8655C76.0027 65.1574 76.0712 65.2295 76.0712 65.3738V70.7148H78.7943C78.9314 70.7148 79 70.7869 79 70.9311V72.2393C79 72.3836 78.9314 72.4557 78.7943 72.4557H74.3962C74.2591 72.4557 74.1905 72.3836 74.1905 72.2393V65.3738Z" clip-rule="evenodd"></path>
  <defs>
    <linearGradient id="paint0_linear_821_12451" x1="47" x2="47" y1="10.5" y2="86.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#09A4FB"></stop>
      <stop offset="1" stop-color="#3840F3"></stop>
    </linearGradient>
  </defs>
</svg>
                </div>
                <h1 className='card-title'>SQL</h1>
                  <p className='card-description'>Completed the SQL certification from NxtWave, gaining a strong understanding of database management, SQL queries, joins, functions, and data manipulation. Solved 100+ SQL problems, strengthening my skills in writing efficient queries and working with relational databases.</p>
                  <h4 className='certificate-link'
                  onClick={()=>this.openModal("https://i.postimg.cc/prgZ9FPm/Sql.png")}
                  >Certificate <FaExternalLinkAlt/></h4>
              </div>

              <div className='card'>
                <div className='card-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="javascript">
  <polygon fill="#F0D91F" points="0 24 24 24 24 0 0 0 0 24"></polygon>
  <polygon fill="#D1BD1B" points="12 0 0 0 0 24 12 24 12 0"></polygon>
  <path d="M19.784 18.629c-.255-.961-2.251-1.185-3.616-2.205-1.38-.93-1.709-3.18-.569-4.471.39-.48 1.034-.84 1.71-1.005l.705-.089c1.365-.031 2.204.329 2.834 1.034.182.179.316.36.586.78-.721.449-.721.449-1.755 1.125-.226-.48-.586-.78-.976-.9-.6-.18-1.365.014-1.515.66-.059.195-.045.375.046.705.243.555 1.061.795 1.797 1.14 2.115.859 2.827 1.778 3.003 2.873l-.046-.067c.166.945-.045 1.56-.074 1.65-.781 2.67-5.131 2.76-6.871 1.005-.36-.42-.6-.63-.81-1.109l1.83-1.051c.495.75.944 1.156 1.755 1.336C18.914 20.174 20.024 19.799 19.784 18.629L19.784 18.629zM8.133 18.976c.017 0 .064.091.127.196.233.389.434.659.83.855.386.121 1.236.209 1.566-.48.2-.347.137-1.479.137-2.711 0-1.941.009-3.867.009-5.805h2.248l-.005.056c0 2.07.012 4.125 0 6.179.006 1.276.113 2.416-.397 3.346-.353.719-1.028 1.184-1.811 1.411-1.203.27-2.352.105-3.207-.405-.574-.345-1.019-.887-1.324-1.517L8.133 18.976 8.133 18.976z"></path>
  <path fill="#212121" d="M18.174 10.857c-.052 0-.106.001-.16.002l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471.012.009.025.018.037.028h4.724c-.451-.364-1.066-.711-1.898-1.049-.737-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.115-.494.589-.724 1.075-.724.149 0 .299.022.44.064.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.6-.586-.78C20.243 11.216 19.445 10.857 18.174 10.857L18.174 10.857zM13.051 11.031h-2.248c0 1.81-.008 3.61-.009 5.421h2.256c.006-1.783-.004-3.568-.004-5.365L13.051 11.031 13.051 11.031z"></path>
</svg>
                  {/* <AiOutlineSafetyCertificate /> */}
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
                  <img src="https://i.postimg.cc/2S44hGY2/Login-page-(1).png" alt="profile"  className='banner-img'/>
                </div>
                <p className='banner-title'>Netflix Movies App</p>
                <div className='technology-used'>
                  <p className='technology-text'>Technology used</p>
                  <a href='https://github.com/vrushabh5623/movies-app'>
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
                  <a href='https://github.com/vrushabh5623/Nxt-Trendz---Specific-Product-Details'>
                  <div className='arrow-icon'><LuArrowUpRight /></div>
                  </a>
                </div>
              </div>

              <div className='project-card'>
                <div>
                  <img src="https://i.postimg.cc/15bHp4q9/Login-Empty.png" alt="profile"  className='banner-img'/>
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
                <div>
                  <form onSubmit={this.onSubmitBtn}>
                    <h1>Contact me</h1>
                    {this.renderName()}
                    {this.renderEmail()}
                    {this.renderMessage()}
                    <button type="submit">Send Message</button>
                  </form>
                </div>
                <div className='contact-div'>
                  <p className='contact-icon'>
                    <IoMdContact className='contact-icon-class'/>
                  
                  7972097122</p>
                  <p className='contact-icon'><SiGmail className='contact-icon-class2'/> vrushabhlanjewar56@gmail.com</p>
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