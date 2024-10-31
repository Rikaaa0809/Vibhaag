import Picture1 from "./assets/Resources/Picture 1 Corporate Headshot Thumbnail.png";
import HomeIcon from "./assets/Resources/home.png"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Iso from "./assets/Iso.png";
import Focallength from "./assets/Focallength.png";
import ShutterSpeed from "./assets/Shutterspeed.png";
import Aperture from "./assets/Aperture.png";
import Leaf from "./assets/Leaf.png";


// Scroll settings

const FourthPage = () => {
  useEffect(() => {
    const section = document.getElementById("fourth-hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Main code

  return (
    <div
      style={{ backgroundColor: "#e7e6e1", height: "160vh" }}
      id="fourth-hero"
    >

      <img src={Leaf} alt="" style={{position: "absolute", right:'6%', top: '-10%', width: '200px', height: 'auto', opacity:'10%', transform: 'rotate(30deg)'}} />

    {/* Heading */}
      <div>
        <span
          style={{ position: "absolute", left: "9%", top: "4%", fontFamily: 'bestigia', fontSize:'50px', color: '#314e52' }}
        >Corporate Headshot</span>
      </div>

      <div style={{height: '600px', width: '400px', background: 'white', position: 'absolute', top: '20%', left: '10%', borderRadius: '30px'}}></div>
      <span style={{fontFamily: 'Fleurdeleah', fontSize: '28px', position: "absolute", left: '7%', top: '92%', color: 'black', fontWeight: '500', transform: 'rotate(-11deg)'}}>07.10.24
        <br />
        Apple iphone14 pro max
      </span>


      <div style={{ display: "flex", height: "80%" }}>

        <img
          src={Picture1}
          alt="Picture1"
          style={{
            position: "absolute",
            left: "11.6%",
            top: "14%",
            width: "350px",
            height: "auto",
          }}
        />

  {/* Settings */}
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "38%", top: "24%" }}
        >Settings</span>

        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "38%", top: "33%" }}
        >
          <span style={{ fontWeight: "600" }}>ISO 800:</span> Necessary for an
          indoor shot at 7 PM, as there was lower light levels so I needed <br /> the
          camera to capture more light. <br />
          <br />
          <span style={{ fontWeight: "600" }}>24mm focal length:</span> A
          wide-angle allowed me to capture my the face in a way that it fills <br />
          the frame without distortion. <br />
          <br />
          <span style={{ fontWeight: "600" }}>f/1.78 aperture:</span> The wide
          aperture because the setting was indoor and i needed the image <br /> to be
          bright enough and such that my face is in focus and the background is
          blur. <br />
          <br />
          <span style={{ fontWeight: "600" }}>1/50s shutter speed:</span> In
          this case, this shutter speed was sufficient to avoid motion blur <br />
          indoors, given the low light situation, while maintaining a
          sharp focus on me, the subject.
        </span>

        <div style={{display: 'flex', position: "absolute", right: '11%', top: '80%'}}>
          <img src={Iso} alt="" style={{width: '120px', height: '100px', margin: '40px'}}/>
          <img src={Focallength} alt="" style={{width: '120px', height: '100px', margin: '40px'}}/>
          <img src={ShutterSpeed} alt="" style={{width: '100px', height: '100px', margin: '40px'}}/>
          <img src={Aperture} alt="" style={{width: '100px', height: '100px', margin: '40px'}}/>
        </div>


   {/* Editing Process    */}
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "10%", top: "110%" }}
        >Editing Process</span>

        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "10%", top: "115%" }} >
          To enhance the headshot, I made slight adjustments to the face
          structure to make it appear thinner, helping emphasize a
          professional yet <br /> approachable look. I cleared any spots on my face for
          smoother skin, ensuring the focus remains on my expression
          without distractions. <br /> Since the face was the main
          subject, these edits refined the visual impact, making the portrait
          more polished.
        </span>

  {/* Vision explanation */}
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "10%", top: "130%" }}
        >Vision</span>

        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "10%", top: "135%" }}
        >
          I opted for a slightly tilted posture with a wide smile to convey
          confidence and flexibility—important
          traits in a corporate setting. <br /> Wearing formal attire, specifically a
          black blazer, ensured that even though <br /> I posed in a fun,
          approachable manner, the overall look remains formal and professional.
          The white background provided a clean contrast, <br /> emphasizing the black
          blazer and my facial expression,
          keeping the attention entirely on me.
        </span>

        <div>
          <Link to="/FirstPage">
            <div style={{width: '60px', height: '100px', borderBottomRightRadius: '30px',borderBottomLeftRadius: '30px', position: "absolute", left:'4%', backgroundColor: '#F6F5F2'}}></div>
            <img
            src={HomeIcon}
            alt=""
            style={{
              position: "absolute",
              top: "7%",
              left: "5%",
              width: "30px",
              height: "auto",
              opacity: "40%",
            }}
            />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FourthPage;
