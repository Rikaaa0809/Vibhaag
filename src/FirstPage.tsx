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
import PostsIcon from "./assets/Resources/PostsIcon.png";

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
    <div style={{ background: "#e7e6e1", minHeight: "100vh" }}>
      {/* Navigation Bar */}
      <header>
        <div className="navbar-main-style">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src={Logo} alt="Logo" className="logo-style" />
          </div>
        </div>
      </header>

      {/* First Page */}
      <div style={{ paddingRight: "3vw", paddingLeft: "3vw" }}>
        <div style={{ padding: "40px 80px" }}>
          <div className="first-division">
            <div>
              <img src={Wholething} alt="" className="whole-thing-div" />
            </div>
            <div className="line"></div>
            <div>
              <div
                style={{
                  marginTop: "13%",
                  justifyItems: "center",
                  paddingLeft: "80px",
                }}
              >
                <style>
                  {`
                    /* Add hover effect to buttons */
                    button.button-icon:hover {
                      transform: scale(1.05); /* Slightly enlarge the button */
                      transition: all 0.1s ease-in-out; /* Smooth transition */
                      color: #314e52; /* Change text color to match theme */
                      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow effect */
                    }

                    
                    }
                  `}
                </style>

                {/* About */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <button className="button-icon" onClick={() => aboutScroll()}>
                    About
                  </button>
                  <img
                    src={AboutIcon}
                    alt=""
                    className="icon-size"
                    style={{ width: "45px", height: "45px", marginLeft: "8px" }}
                  />
                </div>

                {/* PhotoBlog */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <button
                    className="button-icon"
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <Link to="/Video" style={{ textDecoration: "none" }}>
                    <button className="button-icon">Video Blog</button>
                  </Link>

                  <img
                    src={VideoIcon}
                    alt=""
                    style={{
                      width: "45px",
                      height: "40px",
                      marginLeft: "8px",
                      marginBottom: "5px",
                    }}
                  />
                </div>

                {/* GalleryButton */}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <Link to="/Posts" style={{ textDecoration: "none" }}>
                    <button className="button-icon">Gallery</button>
                  </Link>

                  <img
                    src={PostsIcon}
                    alt=""
                    style={{ width: "50px", height: "45px", marginLeft: "8px" }}
                  />
                </div>

                {/* Projects */}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Link to="/Projects" style={{ textDecoration: "none" }}>
                    <button className="button-icon">Projects</button>
                  </Link>

                  <img
                    src={ProjectIcon}
                    alt=""
                    style={{ width: "45px", height: "40px", marginLeft: "8px" }}
                  />
                </div>

                {/* Contacts */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <button
                    className="button-icon"
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
              <div style={{ marginTop: "10%" }}>
                <div style={{ textAlign: "right" }}>
                  <span className="hey-im">Hey I'm </span>{" "}
                  <span className="niharika">niharika</span>
                </div>
                <div className="a-shy-optimistic">
                  A shy, optimistic, and pretty girl who is so grateful to turn
                  her passion into her career. Seeing the content expression on
                  users' faces when they like the design gives me joy.
                </div>
                <img
                  src={Leaf}
                  alt=""
                  className="leaf-graphic"
                />
              </div>
            </div>
          </div>
          {/* Second Page Scroll Education and Experience */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            <div style={{ marginTop: "60px" }}>
              <div
                className="main-heading"
                style={{ justifyContent: "center" }}
              >
                <div id="about-section">education </div>
                
              </div>

            </div>
            <div>
              <div className="education-spacing">
                <h2 className="heading-bold">
                  Master's in Interaction and <br />
                  Experience Design
                </h2>
                <p className="content-paragraph">
                  University of Limerick, Ireland
                </p>
              </div>
              
            </div>
            <div>
              <div className="education-spacing">
                <h2 className="heading-bold">
                  Bachelor's in Design (Product <br />
                  Design)
                </h2>
                <p className="content-paragraph">
                  Symbiosis School of Planning, Architecture and Design
                </p>
              </div>
              
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            <div>
              <div
                className="main-heading"
                style={{ justifyContent: "center" }}
              >
                <div>experience</div>
              </div>
            </div>
            <div>
              <div style={{ marginTop: "6%", marginLeft: "80px" }}>
                <h2 className="heading-bold">Product Design Intern</h2>
                <p className="content-paragraph">
                  Meir Living, India <br />
                  Apr 2023- Aug 2023
                </p>
              </div>
            </div>
            <div>
              <div style={{ marginTop: "6%", marginLeft: "80px" }}>
                <h2 className="heading-bold">Product Design Intern</h2>
                <p className="content-paragraph">
                  My Home Decor, India <br />
                  Jun 2024- Aug 2024
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            <div style={{ marginTop: "60px" }}>
              

                <div
                style={{
                  
                  textAlign: "center",
                  
                }}
              >
                <p className="numbering" style={{ marginBottom: "0px" }}>
                  1
                </p>
                <p className="content-paragraph">
                  3D Modelling <br />
                  Rhinoceros 3D <br />
                  Keyshot
                </p>
              </div>
            </div>
            <div>
              
              
            
              <div style={{  textAlign: "center", marginTop:"60px" }}>
                <p className="numbering" style={{ marginBottom: "0px" }}>
                  2
                </p>
                <p className="content-paragraph">
                  UX Research <br />
                  Conducting Interview <br />
                  Creating Inforgraphics
                </p>
              </div>
              
            </div>
            <div>
              
              
            <div
              className="main-heading"
              style={{ textAlign: "center", marginTop: "40%" }}
            >
              top skills
            </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            <div style={{ marginTop: "60px" }}>
              

              
              <div style={{  textAlign: "center" }}>
              <p className="numbering" style={{ marginBottom: "0px" }}>
                3
              </p>
              <p className="content-paragraph">
                Branding via UI <br />
                Apt Design Elements <br />
                Following Brand Guidelines
              </p>
            </div>
            </div>
            <div>
              
              
            <div>
              
              <div style={{  textAlign: "center", marginTop: "60px"}}>
                <p className="numbering" style={{ marginBottom: "0px" }}>
                  4
                </p>
                <p className="content-paragraph">
                  Basic Knowledge of <br />
                  Typescript <br />
                  React
                </p>
              </div>
            </div>
            </div>

            <div
              className="main-heading"
              style={{ textAlign: "center", marginTop: "40%", opacity: "0%" }}
            >
              top skills
            </div>
            
          </div>

          {/* Third Page Gallery */}

          <div>
            <div className="gallery-spacing"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              
                gap: "10px",
              }}
            >
              <img
                src={Flower}
                alt="Flower"
                className="flower-rotate-clockwise"
                style={{
                  width: "60px",
                  height: "auto",
                  opacity: "20%",
                }}
              />
              <h1 className="main-heading" style={{}} id="gallery-section">
                gallery
              </h1>
              <img
                src={Flower}
                alt="Flower"
                className="flower-rotate-counterclockwise"
                style={{
                  width: "60px",
                  height: "auto",
                  opacity: "20%",
                }}
              />
            </div>
            <div
              className="grid-container"
              style={{
                marginTop: "3%",

                paddingRight: "60px",
                paddingLeft: "60px",
              }}
            >
              <div style={{ background: "white", borderRadius: "25px" }}>
                <div>
                  <Link to="/FourthPage">
                    <img
                      src={Picture1}
                      alt=""
                      style={{
                        width: "70%",
                        transition: "filter 0.3s ease",
                        marginLeft: "15%",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLImageElement).style.filter =
                          "brightness(0.8)")
                      } // Darken image on hover
                      onMouseLeave={(e) =>
                        ((e.target as HTMLImageElement).style.filter =
                          "brightness(1)")
                      } // Reset to normal on hover leave
                    />
                  </Link>
                </div>
                <div
                  className="heading-bold"
                  style={{
                    textAlign: "center",
                    marginTop: "-8%",
                    marginBottom: "10%",
                  }}
                >
                  Corporate Headshot
                </div>
              </div>
              <div style={{ background: "white", borderRadius: "25px" }}>
                <div>
                  <Link to="/FifthPage">
                    <img
                      src={Picture2}
                      alt=""
                      style={{
                        width: "70%",
                        transition: "filter 0.3s ease",
                        marginLeft: "15%",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLImageElement).style.filter =
                          "brightness(0.8)")
                      } // Darken image on hover
                      onMouseLeave={(e) =>
                        ((e.target as HTMLImageElement).style.filter =
                          "brightness(1)")
                      } // Reset to normal on hover leave
                    />
                  </Link>
                </div>
                <div
                  className="heading-bold"
                  style={{
                    textAlign: "center",
                    marginTop: "-8%",
                    marginBottom: "10%",
                  }}
                >
                  Aesthetic Shot
                </div>
              </div>
              <div style={{ background: "white", borderRadius: "25px" }}>
                <div>
                  <Link to="/SixthPage">
                    <img
                      src={Picture3}
                      alt=""
                      style={{
                        width: "70%",
                        transition: "filter 0.3s ease",
                        marginLeft: "15%",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLImageElement).style.filter =
                          "brightness(0.8)")
                      } // Darken image on hover
                      onMouseLeave={(e) =>
                        ((e.target as HTMLImageElement).style.filter =
                          "brightness(1)")
                      } // Reset to normal on hover leave
                    />
                  </Link>
                </div>
                <div
                  className="heading-bold"
                  style={{
                    textAlign: "center",
                    marginTop: "-8%",
                    marginBottom: "10%",
                  }}
                >
                  Picture which Defines Me
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contacts */}

      <div
        style={{
          background: "#314e52",
          paddingBottom: "60px",
          marginTop: "60px",
          paddingLeft: "3vw",
          paddingRight: "3vw",
        }}
      >
        {/* Flower Images Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px", // Adjust gap for responsiveness
            flexWrap: "wrap", // Wrap flowers on smaller screens
          }}
        >
          <div style={{ marginTop: "3%", display: "flex", gap: "20px" }}>
            <img
              src={Flowerwhite}
              alt="Flower"
              className="flower-rotate-counterclockwise"
              style={{
                width: "50px",
                height: "auto",
              }}
            />

            <img
              src={Flowerwhite}
              alt="Flower"
              className="flower-rotate-counterslow"
              style={{
                width: "50px",
                height: "auto",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            />

            <img
              src={Flowerwhite}
              alt="Flower"
              className="flower-rotate-slow"
              style={{
                width: "50px",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* Contact Heading */}
        <div>
          <h1
            className="main-heading-reverse"
            id="contact-section"
            style={{
              fontSize: "3rem", // Adjust font size for responsiveness
              textAlign: "center",
            }}
          >
            contact
          </h1>
        </div>

        {/* Contact Links Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allow wrapping for smaller screens
            gap: "30px",
            justifyContent: "center",
            marginTop: "3%",
          }}
        >
          {/* LinkedIn Section */}
          <div style={{ justifyItems: "center", textAlign: "center" }}>
            <a href="https://www.linkedin.com/in/niharika-sharma09/">
              <img
                src={Linkedin}
                alt="LinkedIn"
                style={{ width: "50px", height: "auto" }}
              />
            </a>
            <div
              className="content-paragraph-reverse"
              style={{ marginTop: "6%" }}
            >
              Follow me on <br />
              LinkedIn
            </div>
            <div
              className="content-paragraph-reverse"
              style={{ marginTop: "0%", opacity: "0%" }}
            >
              Check Out my Work on <br />
              Behance
            </div>
          </div>

          {/* Email Section */}
          <div style={{ justifyItems: "center", textAlign: "center" }}>
            <a href="mailto:niharikasharma332244@gmail.com">
              <img
                src={Email}
                alt="Email"
                style={{ width: "70px", height: "auto" }}
              />
            </a>
            <div
              className="content-paragraph-reverse"
              style={{ marginTop: "10%" }}
            >
              Get in Touch <br />
              Collaborate?
            </div>
          </div>

          {/* Behance Section */}
          <div style={{ justifyItems: "center", textAlign: "center" }}>
            <a href="https://www.behance.net/niharikasharma17">
              <img
                src={Behance}
                alt="Behance"
                style={{ width: "50px", height: "auto" }}
              />
            </a>
            <div
              className="content-paragraph-reverse"
              style={{ marginTop: "6%" }}
            >
              Check Out my Work on <br />
              Behance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
