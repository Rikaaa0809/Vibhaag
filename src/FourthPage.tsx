import Picture1 from "./assets/Resources/Picture 1 Corporate Headshot Thumbnail.png";
import HomeIcon from "./assets/Resources/home.png";
import Iso from "./assets/Iso.png";
import Focallength from "./assets/Focallength.png";
import ShutterSpeed from "./assets/Shutterspeed.png";
import Aperture from "./assets/Aperture.png";

import { useEffect } from "react";
import { Link } from "react-router-dom";


// Scroll settings

const FourthPage = () => {
  useEffect(() => {
    const section = document.getElementById("fourth-hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div style={{ backgroundColor: "#e7e6e1", minHeight: "100vh", paddingRight: "50px", paddingLeft: "50px", paddingBottom: "50px" }} id="fourth-hero">
      {/* Header Section */}
      

      <header style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
        <div style={{ background: "white",opacity: "0.4", borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px", paddingRight: "11px", paddingLeft: "11px", paddingTop: "60px", width:"60px", height: "120px" }}><Link to="/FirstPage">
        <img src={HomeIcon} alt="Home" style={{ width: "40px", opacity: "0.4" }} /></Link></div>
        <h1 style={{ fontFamily: "bestigia", fontSize: "50px", color: "#314e52", marginTop: "50px" }}>
          Corporate Headshot
        </h1>
      </header>

      {/* Main Content */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left Section - Image */}
        <div className="image-blog-image">
          <img
            src={Picture1}
            alt="Headshot"
            className="image-blog-image-width"
            style={{ borderRadius: "20px", marginTop: "-15%"  }}
          />
          <p
            style={{
              fontFamily: "Fleurdeleah",
              fontSize: "28px",
              color: "black",
              fontWeight: "500",
              transform: "rotate(-11deg)",
              marginTop: "-90px",
            }}
          >
            07.10.24 <br />
            Apple iPhone 14 Pro Max
          </p>
        </div>

        {/* Right Section - Settings */}
        <div style={{ marginTop: "40px"}}>
          <h2 style={{ fontWeight: "bold", marginBottom: "20px", color: "#314e52", fontFamily: "Poppins" }}>Settings</h2>
          <p style={{ lineHeight: "2", color: "#314e52", fontFamily: "Poppins", marginRight: "7%" }}>
            <strong>ISO 800:</strong> Necessary for an indoor shot at 7 PM, as there was lower
            light levels, so I needed the camera to capture more light.
            <br />
            <strong>24mm focal length:</strong> A wide-angle allowed me to capture my face in a
            way that it fills the frame without distortion.
            <br />
            <strong>f/1.78 aperture:</strong> The wide aperture because the setting was indoor,
            and I needed the image to be bright enough and such that my face is in focus and the
            background is blurred.
            <br />
            <strong>1/50s shutter speed:</strong> In this case, this shutter speed was sufficient
            to avoid motion blur indoors, given the low light situation, while maintaining a sharp
            focus on me, the subject.
          </p>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "50px", marginRight: "7%" }}>
            <img src={Iso} alt="ISO" style={{ width: "100px" }} />
            <img src={Focallength} alt="Focal Length" style={{ width: "100px" }} />
            <img src={ShutterSpeed} alt="Shutter Speed" style={{ width: "80px" }} />
            <img src={Aperture} alt="Aperture" style={{ width: "80px" }} />
          </div>
        </div>
      </main>

      {/* Additional Sections */}
      <section style={{ marginTop: "60px", marginLeft: "5%", marginRight: "5%" }}>
        <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#314e52", fontFamily: "Poppins" }}>Editing Process</h2>
        <p style={{ lineHeight: "1.8", color: "#314e52", fontFamily: "Poppins" }}>
          To enhance the headshot, I made slight adjustments to the face structure to make it
          appear thinner, helping emphasize a professional yet approachable look. I cleared any
          spots on my face for smoother skin, ensuring the focus remains on my expression without
          distractions. Since the face was the main subject, these edits refined the visual
          impact, making the portrait more polished.
        </p>
      </section>

      <section style={{ marginTop: "40px", marginLeft: "5%", marginRight: "5%" }}>
        <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#314e52", fontFamily: "Poppins" }}>Vision</h2>
        <p style={{ lineHeight: "1.8", color: "#314e52", fontFamily: "Poppins" }}>
          I opted for a slightly tilted posture with a wide smile to convey confidence and
          flexibility—important traits in a corporate setting. Wearing formal attire,
          specifically a black blazer, ensured that even though I posed in a fun, approachable
          manner, the overall look remains formal and professional. The white background provided
          a clean contrast, emphasizing the black blazer and my facial expression, keeping the
          attention entirely on me.
        </p>
      </section>
    </div>
  );
};

export default FourthPage;
