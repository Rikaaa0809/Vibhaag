import { useEffect } from "react";
import Picture2 from "./assets/Resources/Picture 2 Aesthetic Shot Thumbnail.png";
import HomeIcon from "./assets/Resources/home.png"
import { Link } from "react-router-dom";
import Iso from "./assets/Iso.png";
import Focallength from "./assets/Focallength.png";
import ShutterSpeed from "./assets/Shutterspeed.png";
import Aperture from "./assets/Aperture.png";
import Leaf from "./assets/Leaf.png";

// scroll setting

const FifthPage = () => {
  useEffect(() => {
    const section = document.getElementById("fifth-hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

// main code

  return (
    <div
      style={{ backgroundColor: "#e7e6e1", height: "160vh" }}
      id="fifth-hero"
    >

    <img src={Leaf} alt="" style={{position: "absolute", right:'6%', top: '-10%', width: '200px', height: 'auto', opacity:'10%', transform: 'rotate(30deg)'}} />

      <div style={{ display: "flex", height: "80%" }}>
        
        {/* page heading */}
        <div>
          <span
            style={{ position: "absolute", left: "9%", top: "4%", fontFamily: 'bestigia', fontSize:'50px', color: '#314e52' }}
          >Aesthetic Shot</span>
        </div>

        {/* Picture caption */}
        <div style={{height: '600px', width: '400px', background: 'white', position: 'absolute', top: '20%', left: '10%', borderRadius: '30px'}}></div>
        <span style={{fontFamily: 'Fleurdeleah', fontSize: '28px', position: "absolute", left: '7%', top: '92%', color: 'black', fontWeight: '500', transform: 'rotate(-11deg)'}}>10.10.24
          <br />
          Apple iphone14 pro max
        </span>

        {/* Image */}
        <img
          src={Picture2}
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
          <span style={{ fontWeight: "600" }}>ISO 80:</span> Chosen for minimal
          noise as the soft natural light between 4-5 PM doesn’t require much
          sensitivity.
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>24mm focal length:</span> Wide
          angle to capture a broad scene, including the falling leaves. <br />
          <br />
          <span style={{ fontWeight: "600" }}>f/1.78 aperture:</span> Large
          aperture to create a shallow depth of field, making the subject stand
          out <br />and the background soft. <br />
          <br />
          <span style={{ fontWeight: "600" }}>1/491s shutter speed:</span> Fast
          shutter speed to freeze the leaves mid-air, keeping them sharp <br /> without
          motion blur. <br />
          <br />
          <span style={{ fontWeight: "600" }}>
            No white balance adjustment:
          </span>Natural light was consistent, with the sun parallel to the face, <br />
          minimizing shadows and maintaining a balanced, warm tone. <br />
          <br />
          <span style={{ fontWeight: "600" }}>Bright red top:</span> Chosen for
          contrast against the beige background and to complement a  <br />warm skin
          tone, making facial features more prominent.
        </span>

        <div style={{display: 'flex', position: "absolute", right: '11%', top: '98%'}}>
          <img src={Iso} alt="" style={{width: '100px', height: '80px', marginLeft: '50px', marginRight: '50px'}}/>
          <img src={Focallength} alt="" style={{width: '100px', height: '80px', marginLeft: '50px', marginRight: '50px'}}/>
          <img src={ShutterSpeed} alt="" style={{width: '80px', height: '80px', marginLeft: '50px', marginRight: '50px'}}/>
          <img src={Aperture} alt="" style={{width: '80px', height: '80px', marginLeft: '50px', marginRight: '50px'}}/>
        </div>

   {/* Editing process */}

        <span
          className="heading-bold"
          style={{ position: "absolute", left: "10%", top: "110%" }}
        >Editing Process</span>

        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "10%", top: "115%" }}
        >
          To enhance the photo’s dreamy aesthetic, I focused on adjustments that
          would both unify the tones and highlight specific elements. I <br />
          brightened my face to reduce the tan and match the skin tone with my
          arms, ensuring a more uniform appearance. I increased the <br /> sharpness
          and the warmth of the leaves to give it
          more autumn feel. The original photo had my other hand visible in the
          back but it was <br /> awkwardly
          positioned so I used photoshop to remove the other hand using object
          selection tool and filled the empty space using background <br /> fill tool.
        </span>

    {/* Vision */}
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "10%", top: "136%" }}
        >Vision</span>

        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "10%", top: "141%" }}
        >
          The hair flip and spinning pose, playful movement combined with a wide
          smile, captured mid-motion represents the kind of positivity and
          <br />energy I want to radiate. I love motivating others to see their own
          potential and unique qualities and this picture shows the approachable <br />
          side of me. Hence, it’s a perfect aesthetic shot, the kind of picture
          I would post on my Instagram or even upload on a dating profile.
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

export default FifthPage;
