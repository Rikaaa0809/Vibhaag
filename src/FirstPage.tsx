import Logo from "./assets/Resources/Logo.png";

import Wholething from "./assets/Resources/Wholething.png";
import GalleryIcon from "./assets/Resources/GalleryIcon.png";
import ContactIcon from "./assets/Resources/ContactIcon.png";
import ProjectIcon from "./assets/Resources/ProjectIcon.png";
import VideoIcon from "./assets/Resources/Asset 8xxxhdpi.png";
import AboutIcon from "./assets/Resources/AboutIcon.png";
import Picture1 from "./assets/Resources/Picture 1 Corporate Headshot Thumbnail.png";
import Picture2 from "./assets/Resources/Picture 2 Aesthetic Shot Thumbnail.png";
import Picture3 from "./assets/Resources/Picture 3 Picture which defines me Thumbnail.png";
import Flower from "./assets/Resources/flower.png";
import Flowerwhite from "./assets/Flowerwhite.png";
import Email from "./assets/Email.png";
import Behance from "./assets/Behance.png";
import Linkedin from "./assets/Linkedin.png";
import Leaf from "./assets/Leaf.png";
import PostsIcon from "./assets/Resources/PostsIcon.png"


import { Link } from "react-router-dom";

// Scroll setting

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

  const aboutScroll = () => {
    const aboutDiv = document.getElementById("about-section");
    if (aboutDiv) {
      aboutDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  // Main code
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
          {/* Left Side - Main Image */}
          <div style={{ display: "flex", width: "70%" }}>
            <img
              src={Wholething}
              alt="Whole Thing"
              className="whole-thing-div"
            />
          </div>
          {/* Icons Navigation menu */}

          <div style={{ display: "flex" }}>
            <div style={{ position: "absolute", right: "8%", top: "16%" }}>
              <style>
                {`
                  /* Add hover effect to buttons */
                  button.content-paragraph:hover {
                    background-color: #dcdcdc; /* Light gray background on hover */
                    transform: scale(1.05); /* Slightly enlarge the button */
                    transition: all 0.1s ease-in-out; /* Smooth transition */
                    color: #314e52; /* Change text color to match theme */
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow effect */
                  }

                  
                  }
                `}
              </style>

              {/* About */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: '8px' }}>
                

                <button
                  className="content-paragraph"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#F6F5F2",
                    borderRadius: "20px",
                    outline: "none",
                    border: "none",
                    padding: "5px",
                    width: "200px",
                    
                  }}
                  onClick={() => aboutScroll()}
                >
                  About
                </button>
                <img
                  src={AboutIcon}
                  alt=""
                  style={{ width: "45px", height: "45px", marginLeft: "8px" }}
                />
              </div>

              

              {/* PhotoBlog */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: '8px' }}>
                

                <button
                  className="content-paragraph"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#F6F5F2",
                    borderRadius: "20px",
                    outline: "none",
                    border: "none",
                    padding: "5px",
                    width: "200px",
                  }}
                  onClick={() => galleryScroll()}
                >
                  Photo Blog
                </button>
                <img
                  src={GalleryIcon}
                  alt=""
                  style={{ width: "45px", height: "40px", marginLeft: "8px" }}
                />
              </div>

              {/* Video Blog */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: '5px' }}>
                

                <Link to="/Video" style={{ textDecoration: "none" }}>
                  <button
                    className="content-paragraph"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#F6F5F2",
                      borderRadius: "20px",
                      outline: "none",
                      border: "none",
                      padding: "5px",
                      width: "200px",
                    }}
                  >
                    Video Blog
                  </button>
                </Link>

                <img
                  src={VideoIcon}
                  alt=""
                  style={{ width: "45px", height: "40px", marginLeft: "8px", marginBottom: '5px' }}
                />

              </div>

              
{/* GalleryButton */}

              <div style={{ display: "flex", alignItems: "center", marginBottom: '8px' }}>
                
                <Link to="/Posts" style={{ textDecoration: "none" }}>
                  <button
                    className="content-paragraph"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#F6F5F2",
                      borderRadius: "20px",
                      outline: "none",
                      border: "none",
                      padding: "5px",
                      width: "200px",
                    }}
                  >
                    Gallery
                  </button>
                </Link>

                <img
                  src={PostsIcon}
                  alt=""
                  style={{ width: "50px", height: "45px", marginLeft: "8px" }}
                />

              </div>

              {/* Projects */}

              <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
                

                <Link to="/Projects" style={{ textDecoration: "none" }}>
                  <button
                    className="content-paragraph"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#F6F5F2",
                      borderRadius: "20px",
                      outline: "none",
                      border: "none",
                      padding: "5px",
                      width: "200px",
                    }}
                  >
                    Projects
                  </button>
                </Link>

                <img
                  src={ProjectIcon}
                  alt=""
                  style={{ width: "45px", height: "40px", marginLeft: "8px" }}
                />
              </div>

              {/* Contacts */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: '5px' }}>
                

                <button
                  className="content-paragraph"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#F6F5F2",
                    borderRadius: "20px",
                    outline: "none",
                    border: "none",
                    padding: "5px",
                    width: "200px",
                  }}
                  onClick={() => contactScroll()}
                >
                  Contact
                </button>

                <img
                  src={ContactIcon}
                  alt=""
                  style={{ width: "45px", height: "45px", marginLeft: "8px" }}
                />
              </div>


            </div>

            {/* Introduction brief */}

            <div
              className="line"
              style={{ position: "absolute", top: "72.5%", right: "18%" }}
            ></div>

            <div>
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
              </div>

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

            <img
              
              src={Leaf}
              alt=""
              style={{
                position: "absolute",
                top: "93%",
                right: "4%",
                width: "340px",
                height: "auto",
                opacity: "30%",
              }}
              
            />
          </div>
        </div>
      </div>

      {/* Second Page Scroll Education and Experience */}

      <div style={{ height: "20%", display: "flex" }}>
        {/* Education section */}
        <span className="education" id="about-section">education</span>

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

      {/* Experience Section  */}
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

      {/* Numbering of skills      */}
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

            {/* Skills */}
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
          <span style={{ position: "absolute", right: "14%", top: "160%" }}>
            top skills
          </span>
        </div>
      </div>

      {/* Third Page Gallery */}

      <div className="main-heading">
        <span
          style={{ position: "absolute", left: "44%", top: "210%" }}
          id="gallery-section"
        >
          gallery
        </span>
      </div>

      {/* Polaroid background */}
      <div>
        <div
          style={{
            height: "550px",
            width: "380px",
            background: "white",
            position: "absolute",
            top: "226%",
            left: "7.5%",
            borderRadius: "30px",
          }}
        ></div>
        <div
          style={{
            height: "550px",
            width: "380px",
            background: "white",
            position: "absolute",
            top: "226%",
            left: "37.5%",
            borderRadius: "30px",
          }}
        ></div>
        <div
          style={{
            height: "550px",
            width: "380px",
            background: "white",
            position: "absolute",
            top: "226%",
            right: "7.5%",
            borderRadius: "30px",
          }}
        ></div>
      </div>

      {/* Pictures Gallery      */}
      <div style={{ display: "flex" }}>
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
            transition: "filter 0.3s ease", // Smooth transition for color change
          }}
          onMouseEnter={(e) => e.target.style.filter = "brightness(0.8)"} // Darken image on hover
          onMouseLeave={(e) => e.target.style.filter = "brightness(1)"} // Reset to normal on hover leave
        />
      </Link>

      <Link to="/FifthPage">
        <img
          src={Picture2}
          alt="Picture2"
          style={{
            position: "absolute",
            left: "40%",
            top: "223%",
            width: "20%",
            height: "auto",
            transition: "filter 0.3s ease", // Smooth transition for color change
          }}
          onMouseEnter={(e) => e.target.style.filter = "brightness(0.8)"} // Darken image on hover
          onMouseLeave={(e) => e.target.style.filter = "brightness(1)"} // Reset to normal on hover leave
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
            transition: "filter 0.3s ease", // Smooth transition for color change
          }}
          onMouseEnter={(e) => e.target.style.filter = "brightness(0.8)"} // Darken image on hover
          onMouseLeave={(e) => e.target.style.filter = "brightness(1)"} // Reset to normal on hover leave
        />
      </Link>
    </div>


      {/* Picture Headings      */}
      <div
        style={{
          display: "flex",
          fontSize: "20px",
          fontWeight: "600",
          fontFamily: "Poppins",
          color: "#314e52",
        }}
      >
        <span style={{ position: "absolute", top: "292%", left: "13%" }}>
          Corporate Headshot
        </span>
        <span style={{ position: "absolute", top: "292%", left: "44.5%" }}>
          Aesthetic Picture
        </span>
        <span style={{ position: "absolute", top: "292%", right: "12%" }}>
          Picture which Defines Me
        </span>

        {/* Flower decoration        */}
        <img
          src={Flower}
          alt="Flower"
          className="flower-rotate-clockwise"
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
          className="flower-rotate-counterclockwise"
          style={{
            position: "absolute",
            left: "35.5%",
            top: "270%",
            width: "60px",
            height: "auto",
            opacity: "20%",
          }}
        />
        <img
          src={Flower}
          alt="Flower"
          className="flower-rotate-clockwise"
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

      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundColor: "#314e52",
          position: "absolute",
          top: "315%",
        }}
      ></div>

      {/* Flower motif */}
      <div style={{ display: "flex", margin: "3px" }}>
        <img
          src={Flowerwhite}
          alt="Flower"
          className="flower-rotate-counterclockwise"
          style={{
            position: "absolute",
            left: "48.35%",
            top: "322%",
            width: "50px",
            height: "auto",
          }}
        />

        <img
          src={Flowerwhite}
          alt="Flower"
          className="flower-rotate-counterslow"
          style={{
            position: "absolute",
            left: "44%",
            top: "322%",
            width: "50px",
            height: "auto",
          }}
        />

        <img
          src={Flowerwhite}
          alt="Flower"
          className="flower-rotate-slow"
          style={{
            position: "absolute",
            right: "44%",
            top: "322%",
            width: "50px",
            height: "auto",
          }}
        />
      </div>

      {/* Heading Contacts */}
      <span
        style={{
          position: "absolute",
          left: "43.5%",
          top: "330%",
          fontFamily: "bestigia",
          fontSize: "70px",
          color: "#F7F6E7",
        }}
        id="contact-section"
      >
        contact
      </span>

      {/* Phone Number, i don't think needed */}
      <div className="content-paragraph-reverse">
        {/* <span
          style={{
            position: "absolute",
            top: "354%",
            left: "45%",
            textAlign: "center",
          }}
        >
          +353 (0) 894722369
        </span> */}

        {/* Email Address */}
        <span style={{ position: "absolute", top: "350%", left: "48.5%" }}>
          <a
            className="content-paragraph-reverse"
            href="mailto:niharikasharma332244@gmail.com"
          >
            <img src={Email} alt="" style={{ width: "60px", height: "auto" }} />
          </a>
        </span>
        <span
          className="content-paragraph-reverse"
          style={{
            position: "absolute",
            top: "358%",
            left: "47%",
            textAlign: "center",
          }}
        >
          Get in Touch <br />
          Collaborate?
        </span>

        {/* LinkedIn  */}
        <span style={{ position: "absolute", top: "350%", left: "20%" }}>
          <a
            className="content-paragraph-reverse"
            href="https://www.linkedin.com/in/niharika-sharma09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Linkedin}
              alt=""
              style={{ width: "50px", height: "auto" }}
            />
          </a>
        </span>
        <span
          className="content-paragraph-reverse"
          style={{
            position: "absolute",
            top: "358%",
            left: "18%",
            textAlign: "center",
          }}
        >
          Follow me on <br />
          LinkedIn
        </span>

        {/* Behance         */}
        <span style={{ position: "absolute", top: "350%", right: "20%" }}>
          <a
            className="content-paragraph-reverse"
            href="https://www.behance.net/niharikasharma17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Behance}
              alt=""
              style={{ width: "50px", height: "auto" }}
            />
          </a>
        </span>
        <span
          className="content-paragraph-reverse"
          style={{
            position: "absolute",
            top: "358%",
            right: "16%",
            textAlign: "center",
          }}
        >
          Check Out my Work on
          <br />
          Behance
        </span>
      </div>
    </div>
  );
};

export default FirstPage;
