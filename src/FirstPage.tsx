import Logo from "./assets/Resources/Logo.png";

import Wholething from "./assets/Resources/Wholething.png";
import GalleryIcon from "./assets/Resources/GalleryIcon.png";
import ContactIcon from "./assets/Resources/ContactIcon.png";
import ProjectIcon from "./assets/Resources/ProjectIcon.png";
import Picture1 from "./assets/Resources/Picture 1 Corporate Headshot Thumbnail.png";
import Picture2 from "./assets/Resources/Picture 2 Aesthetic Shot Thumbnail.png";
import Picture3 from "./assets/Resources/Picture 3 Picture which defines me Thumbnail.png";
import Flower from "./assets/Resources/flower.png";

import { Link } from "react-router-dom";

const FirstPage = () => {
  const galleryScroll = () => {
    const galleryDiv = document.getElementById("gallery-section");
    if (galleryDiv) {
      galleryDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactScroll = () => {
    const contactDiv = document.getElementById("contact-section");
    if (contactDiv) {
      contactDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-page">
      {/* Navigation Bar */}
      <header>
        <div className="navbar-main-style">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "30px", height: "auto" }}
            />
          </div>
        </div>
      </header>

      {/* First Page */}
      <div style={{ display: "flex" }}>
        <div>
          {/* Left Side - Image */}
          <div style={{ display: "flex", width: "70%" }}>
            <img
              src={Wholething}
              alt="Whole Thing"
              className="whole-thing-div"
            />
          </div>

          {/* Icons Navigation menu */}
          <div style={{ display: "flex" }}>
            <div style={{ position: "absolute", right: "22%", top: "43%" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={ProjectIcon}
                  alt=""
                  style={{ width: "55px", height: "55px", marginRight: '5px' }}
                />
                <Link to="/Projects" style={{ textDecoration: "none" }}>
                  <button className="content-paragraph" style={{cursor: 'pointer', backgroundColor: '#F6F5F2', borderRadius: '20px', outline: 'none', border: 'none', padding: '5px', width: '200px'}} onClick={() => contactScroll()} >Projects</button>
                </Link>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={GalleryIcon}
                  alt=""
                  style={{ width: "55px", height: "55px", opacity: "0%" }}
                />

                <button
                  className="content-paragraph" style={{cursor: 'pointer', backgroundColor: '#F6F5F2', borderRadius: '20px', outline: 'none', border: 'none', padding: '5px', width: '200px'}} 
                  onClick={() => galleryScroll()}
                
                >
                  Gallery
                </button>
                <img
                  src={GalleryIcon}
                  alt=""
                  style={{ width: "55px", height: "55px", marginLeft: "15px" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={ContactIcon}
                  alt=""
                  style={{ width: "55px", height: "55px", marginRight: '5px'  }}
                />
                <button className="content-paragraph" style={{cursor: 'pointer', backgroundColor: '#F6F5F2', borderRadius: '20px', outline: 'none', border: 'none', padding: '5px', width: '200px'}} onClick={() => contactScroll()}>Contact</button>
              </div>
            </div>

            {/* Introduction brief */}

            <div
              className="line"
              style={{ position: "absolute", top: "72.5%", right: "18%" }}
            ></div>

            <div>
              <span
                className="niharika"
                style={{ position: "absolute", top: "65%", left: "84%" }}
              >
                niharika
              </span>

              <span
                className="hey-im"
                style={{ position: "absolute", top: "66%", left: "73.5%" }}
              >
                Hey!! I am
              </span>
              <span
                className="a-shy-optimistic"
                style={{ position: "absolute", top: "74%", left: "68%" }}
              >
                A shy, optimistic, and pretty girl who is <br />
                so grateful to turn her passion into her <br />
                career. Seeing the content expression <br />
                on users' faces when they like the <br />
                design gives me joy.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page Scroll Education and Experience */}

      <div style={{ height: "20%", display: "flex" }}>
        <span className="education">education</span>
        <div className="heading-bold">
          <span style={{ position: "absolute", left: "38%", top: "105%" }}>
            Master's in Interaction and
            <br /> Experience Design
          </span>
          <span style={{ position: "absolute", left: "68%", top: "105%" }}>
            Bachelor's in Design (Product <br /> Design)
          </span>
        </div>
        <div className="content-paragraph">
          <span style={{ position: "absolute", left: "38%", top: "114%" }}>
            University of Limerick, Ireland
          </span>
          <span style={{ position: "absolute", left: "68%", top: "114%" }}>
            Symbiosis School of Planning, <br /> Architecture and Design
          </span>
        </div>
      </div>
      <div style={{ display: "flex", width: "33%" }}>
        <span className="experience">experience</span>
        <div className="heading-bold">
          <span style={{ position: "absolute", left: "38%", top: "125%" }}>
            Product Design Intern
          </span>
          <span style={{ position: "absolute", left: "68%", top: "125%" }}>
            Product Design Intern
          </span>
        </div>
        <div className="content-paragraph">
          <span style={{ position: "absolute", left: "38%", top: "130%" }}>
            Meir Living, India
            <br />
            Apr 2023- Aug 2023
          </span>
          <span style={{ position: "absolute", left: "68%", top: "130%" }}>
            My Home Decor, India
            <br />
            Jun 2024- Aug 2024
          </span>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "60%" }}>
          <div className="numbering">
            <span style={{ position: "absolute", left: "13%", top: "140%" }}>
              1
            </span>
            <span style={{ position: "absolute", left: "43%", top: "140%" }}>
              2
            </span>
            <span style={{ position: "absolute", left: "13%", top: "168%" }}>
              3
            </span>
            <span style={{ position: "absolute", left: "43%", top: "168%" }}>
              4
            </span>
          </div>
          <div className="content-paragraph">
            <span
              style={{
                position: "absolute",
                left: "10%",
                top: "157%",
                textAlign: "center",
              }}
            >
              3D Modelling <br />
              Rhinoceros 3D <br />
              Keyshot
            </span>
            <span
              style={{
                position: "absolute",
                left: "38%",
                top: "157%",
                textAlign: "center",
              }}
            >
              UX Research <br />
              Conducting Interview <br />
              Creating Inforgraphics
            </span>
            <span
              style={{
                position: "absolute",
                left: "7%",
                top: "184%",
                textAlign: "center",
              }}
            >
              Branding via UI <br />
              Apt Design Elements <br />
              Following Brand Guidelines
            </span>
            <span
              style={{
                position: "absolute",
                left: "39%",
                top: "184%",
                textAlign: "center",
              }}
            >
              Basic Knowledge of <br />
              Typescript <br />
              React
            </span>
          </div>
        </div>
        <div className="main-heading">
          <span style={{ position: "absolute", right: "12%", top: "160%" }}>
            tops skills
          </span>
        </div>
      </div>

      {/* Third Page Gallery */}

      

      <div className="main-heading">
        <span style={{ position: "absolute", left: "44%", top: "210%" }}  id="gallery-section">
          gallery
        </span>
      </div>
      <div style={{height: '550px', width: '380px', background: 'white', position: 'absolute', top: '226%', left: '7.5%', borderRadius: '30px'}}></div>
      <div style={{height: '550px', width: '380px', background: 'white', position: 'absolute', top: '226%', left: '38%', borderRadius: '30px'}}></div>
      <div style={{height: '550px', width: '380px', background: 'white', position: 'absolute', top: '226%', right: '7.5%', borderRadius: '30px'}}></div>
      <div style={{ display: "flex" }}>
        {/* Picture 1 - navigate to fourth page */}

          
          <Link to="/FourthPage">
            <img
              src={Picture1}
              alt="Picture1"
              style={{
                position: "absolute",
                left: "10%",
                top: "223%",
                width: "20%",
                height: "auto",
                
                
              }}
            />
          </Link>
        

        
          <Link to="/FifthPage">
            <img
              src={Picture2}
              alt="Picture2"
              style={{
                position: "absolute",
                left: "40.5%",
                top: "223%",
                width: "20%",
                height: "auto",
              }}
            />
          </Link>
        

        
          <Link to="/SixthPage">
            <img
              src={Picture3}
              alt="Picture3"
              style={{
                position: "absolute",
                right: "10%",
                top: "223%",
                width: "20%",
                height: "auto",
              }}
            />
          </Link>
        
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "20px",
          fontWeight: "600",
          fontFamily: "Poppins",
          color: "#314e52",
        }}
      >
        <span style={{ position: "absolute", top: "293%", left: "13%" }}>
          Corporate Headshot
        </span>
        <span style={{ position: "absolute", top: "293%", left: "45%" }}>
          Aesthetic Picture
        </span>
        <span style={{ position: "absolute", top: "293%", right: "12%" }}>
          Picture which Defines Me
        </span>
        <img
          src={Flower}
          alt="Flower"
          style={{
            position: "absolute",
            left: "6%",
            top: "222%",
            width: "60px",
            height: "auto",
            opacity: "20%",
          }}
        />
        <img
          src={Flower}
          alt="Flower"
          style={{
            position: "absolute",
            left: "36%",
            top: "270%",
            width: "60px",
            height: "auto",
            opacity: "20%",
          }}
        />
        <img
          src={Flower}
          alt="Flower"
          style={{
            position: "absolute",
            right: "6%",
            top: "222%",
            width: "60px",
            height: "auto",
            opacity: "20%",
          }}
        />
      </div>
      {/* Contacts */}
      <div>
        <img
          src={Flower}
          alt="Flower"
          style={{
            position: "absolute",
            left: "48%",
            top: "330%",
            width: "90px",
            height: "auto",
            opacity: "20%",
          }}
        />
      </div>
      <div
        className="line"
        style={{
          position: "absolute",
          left: "30%",
          top: "348%",
          opacity: "40%",
        }}
      ></div>
      <span
        className="main-heading"
        style={{ position: "absolute", left: "44%", top: "348%" }}
        id="contact-section"
      >
        contact
      </span>
      <div className="content-paragraph">
        <span
          style={{
            position: "absolute",
            top: "366%",
            left: "45%",
            textAlign: "center",
          }}
        >
          +353 (0) 894722369
        </span>
        <span style={{ position: "absolute", top: "372%", left: "45%" }}>
          <a href="mailto:niharikasharma332244@gmail.com">
            Get in Touch via Email
          </a>
        </span>
        <span style={{ position: "absolute", top: "378%", left: "49%" }}>
          <a
            href="https://www.linkedin.com/in/niharika-sharma09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </span>
        <span style={{ position: "absolute", top: "384%", left: "49%" }}>
          <a
            href="https://www.behance.net/niharikasharma17"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </span>
      </div>
    </div>
  );
};

export default FirstPage;
