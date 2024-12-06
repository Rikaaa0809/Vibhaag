import { useEffect } from "react";
import Picture2 from "./assets/Resources/Picture 2 Aesthetic Shot Thumbnail.png";
import HomeIcon from "./assets/Resources/home.png"
import { Link } from "react-router-dom";
import Iso from "./assets/Iso.png";
import Focallength from "./assets/Focallength.png";
import ShutterSpeed from "./assets/Shutterspeed.png";
import Aperture from "./assets/Aperture.png";


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
  <div style={{ backgroundColor: "#e7e6e1", minHeight: "100vh", paddingRight: "50px", paddingLeft: "50px", paddingBottom: "50px" }} id="fifth-hero">
    {/* Header Section */}
    <header style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
      <div style={{ background: "white",opacity: "0.4", borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px", paddingRight: "11px", paddingLeft: "11px", paddingTop: "60px", width:"60px", height: "120px" }}><Link to="/FirstPage">
      <img src={HomeIcon} alt="Home" style={{ width: "40px", opacity: "0.4" }} /></Link></div>
      <h1 style={{ fontFamily: "bestigia", fontSize: "50px", color: "#314e52", marginTop: "50px" }}>
       Aesthetic Shot
      </h1>
    </header>

    {/* Main Content */}
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "80px",
        alignItems: "start",
      }}
    >
      {/* Left Section - Image */}
      <div style={{ background: "white", borderRadius: "30px", padding: "20px", width:"400px", height: "600px", marginLeft: '20%' }}>
        <img
          src={Picture2}
          alt="Headshot"
          style={{ width: "350px", height: "auto", borderRadius: "20px", marginTop: "-15%"  }}
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
          <strong>ISO 80:</strong> Chosen for minimal
          noise as the soft natural light between 4-5 PM doesn’t require much
          sensitivity.
          <br />
          <strong>24mm focal length:</strong> Wide
          angle to capture a broad scene, including the falling leaves.
          <br />
          <strong>f/1.78 aperture:</strong> Large aperture to create a shallow depth of field, making the subject stand
          out and the background soft.
          <br />
          <strong>1/491s shutter speed:</strong> Fast
          shutter speed to freeze the leaves mid-air, keeping them sharp without
          motion blur.
          <br />
          <strong> No white balance adjustment:</strong> Natural light was consistent, with the sun parallel to the face, 
          minimizing shadows and maintaining a balanced, warm tone.
          <br />
          <strong> Bright red top:</strong>  Chosen for
          contrast against the beige background and to complement a warm skin
          tone, making facial features more prominent.

        </p>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "80px", marginRight: "7%" }}>
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
          To enhance the photo’s dreamy aesthetic, I focused on adjustments that
          would both unify the tones and highlight specific elements. I
          brightened my face to reduce the tan and match the skin tone with my
          arms, ensuring a more uniform appearance. I increased the sharpness
          and the warmth of the leaves to give it
          more autumn feel. The original photo had my other hand visible in the
          back but it was awkwardly
          positioned so I used photoshop to remove the other hand using object
          selection tool and filled the empty space using background fill tool.

      </p>
    </section>

    <section style={{ marginTop: "40px", marginLeft: "5%", marginRight: "5%" }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#314e52", fontFamily: "Poppins" }}>Vision</h2>
      <p style={{ lineHeight: "1.8", color: "#314e52", fontFamily: "Poppins" }}>
      The hair flip and spinning pose, captured mid-motion, perfectly represents my positivity and energy. By embracing the playful movement and combining it with a wide smile, I wanted to show my confidence and the sense of freedom I feel when recognizing my own strengths. The motion reflects how I continuously grow and introspect, while my joyful expression highlights how much I love motivating others to see their own potential and celebrate their unique qualities. Hence, it’s a perfect aesthetic shot, the kind of picture I would post on my Instagram or even upload on a dating profile.

      </p>
    </section>
  </div>
);
};

export default FifthPage;
