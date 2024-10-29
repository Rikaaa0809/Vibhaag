import Picture1 from "./assets/Resources/Picture 1 Corporate Headshot Thumbnail.png";
import HomeIcon from "./assets/Resources/home.png"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FourthPage = () => {
  useEffect(() => {
    const section = document.getElementById("fourth-hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      style={{ backgroundColor: "#e7e6e1", height: "120vh" }}
      id="fourth-hero"
    >
      <div>
        <span
          className="main-heading"
          style={{ position: "absolute", left: "43%", top: "10%" }}
        >
          projects (1)
        </span>
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "7%", top: "106%" }}
        >
          Picture 1: Corporate Headshot
        </span>
      </div>
      <div style={{ display: "flex", height: "80%" }}>
        <img
          src={Picture1}
          alt="Picture1"
          style={{
            position: "absolute",
            left: "4%",
            top: "17%",
            width: "400px",
            height: "auto",
          }}
        />
        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "35%", top: "33%" }}
        >
          <span style={{ fontWeight: "520" }}>ISO 800:</span> Necessary for an
          indoor shot at 7 PM, as there was lower light levels so I needed the
          camera to <br /> capture more light. <br />
          <span style={{ fontWeight: "520" }}>24mm focal length:</span> A
          wide-angle allowed me to capture my the face in a way that it fills
          the frame <br />
          without distortion. <br />
          <span style={{ fontWeight: "520" }}>f/1.78 aperture:</span> The wide
          aperture because the setting was indoor and i needed the image to be
          bright enough and such that my face is in focus and the background is
          blur. <br />
          <span style={{ fontWeight: "520" }}>1/50s shutter speed:</span> In
          this case, this shutter speed was sufficient to avoid motion blur
          indoors, given the <br /> low light situation, while maintaining a
          sharp focus on me, the subject.
        </span>
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "35%", top: "28%" }}
        >
          Settings
        </span>
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "35%", top: "64%" }}
        >
          Editing Process
        </span>
        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "35%", top: "69%" }}
        >
          To enhance the headshot, I made slight adjustments to the face
          structure to make it appear thinner, <br /> helping emphasize a
          professional yet approachable look. I cleared any spots on my face for
          smoother <br /> skin, ensuring the focus remains on my expression
          without distractions. Since the face was the main <br />
          subject, these edits refined the visual impact, making the portrait
          more polished.
        </span>
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "35%", top: "86%" }}
        >
          Vision
        </span>
        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "35%", top: "91%" }}
        >
          I opted for a slightly tilted posture with a wide smile to convey
          confidence and flexibility—important <br />
          traits in a corporate setting. Wearing formal attire, specifically a
          black blazer, ensured that even though <br /> I posed in a fun,
          approachable manner, the overall look remains formal and professional.
          The white background provided a clean contrast, emphasizing the black
          blazer and my facial expression, <br />
          keeping the attention entirely on me.
        </span>
        <div>
          <li><Link to="/FirstPage"><img
            src={HomeIcon}
            alt=""
            style={{
              position: "absolute",
              top: "4%",
              left: "2%",
              width: "30px",
              height: "auto",
              opacity: "40%",
            }}
          /></Link></li>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
