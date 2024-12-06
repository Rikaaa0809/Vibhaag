
import Picture3 from "./assets/Resources/Picture 3 Picture which defines me Thumbnail.png";
import HomeIcon from "./assets/Resources/home.png"  
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Iso from "./assets/Iso.png";
import Focallength from "./assets/Focallength.png";
import ShutterSpeed from "./assets/Shutterspeed.png";
import Aperture from "./assets/Aperture.png";


// scroll setting

const SixthPage = () => {
  useEffect(() => {
    const section = document.getElementById("sixth-hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

// main code

return (
  <div style={{ backgroundColor: "#e7e6e1", minHeight: "100vh", paddingRight: "50px", paddingLeft: "50px", paddingBottom: "50px" }} id="sixth-hero">
    {/* Header Section */}
    <header style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
      <div style={{ background: "white",opacity: "0.4", borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px", paddingRight: "11px", paddingLeft: "11px", paddingTop: "60px", width:"60px", height: "120px" }}><Link to="/FirstPage">
      <img src={HomeIcon} alt="Home" style={{ width: "40px", opacity: "0.4" }} /></Link></div>
      <h1 style={{ fontFamily: "bestigia", fontSize: "50px", color: "#314e52", marginTop: "50px" }}>
      Picture which Defines Me
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
          src={Picture3}
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
          <strong>ISO 80:</strong> A low ISO ensures a clean, sharp image since it was captured outdoors with plenty of natural light,this setting was perfect to maintain clarity without adding any grain. 
          <br />
          <strong>24mm focal length:</strong> This wide-angle shot gives a sense of space while focusing on me as the subject, highlighting both the leaves and the textured background, framing me naturally within the composition.
          <br />
          <strong>f/1.78 aperture:</strong> A wide aperture like this brings a subtle depth of field, making sure the focus is on melying on the ground while keeping the background soft, yet clear enough to show the texture of the ground and autumn leaves.
          <br />
          <strong>1/521s shutter speed:</strong>  With a fast shutter speed, the shot captures the moment crisply as there was wind and leaves were flying off the frame.
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
      The initial image was somewhat misleading—it looked as though I was standing against a wall, which took away from the depth and perspective I wanted to create. To enhance the depth, I added shadows to my left side, as the light source was coming from the right. This shadowing helped to ground the image, adding a sense of positioning. 
      <br />
      To further enhance the composition, I added highlights to my t-shirt, specifically on the areas that were elevated or exposed to the light. This added dimension, making the fabric appear more textured. Additionally, I used the spot healing tool to add volume to my hair in certain parts, giving it a fuller look that complemented the overall composition.
      <br />
      For the finishing touches, I increased the saturation and sharpness of the autumn leaves. This made the orangish hues of the leaves pop against the green of my t-shirt, creating a contrast. 
      </p>
    </section>

    <section style={{ marginTop: "40px", marginLeft: "5%", marginRight: "5%" }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#314e52", fontFamily: "Poppins" }}>Vision</h2>
      <p style={{ lineHeight: "1.8", color: "#314e52", fontFamily: "Poppins" }}>
      Looking at this image takes me back to the journey of becoming who I am today. Since childhood, I’ve always been the quiet, introverted one. I wasn’t the type to jump into conversations or make new friends easily. Growing up, I stayed in my comfort zone, finding solace in my own company and avoiding interactions unless necessary. But over time, I realized that if I wanted to grow, I’d need to step out of that zone, little by little.
      <br />
      After the 10th grade, I switched to a new school where no one knew me. It was my first opportunity to rebuild myself, and even though it terrified me, I took that leap. Slowly, I started participating in conversations, interacting in debates, and challenging myself to talk a little more. This new environment gave me a chance to experiment with who I wanted to be, and each step felt like a small achievement. With each success—no matter how small—I gained a little more confidence.
      <br />
      When I began my undergraduate studies, I decided to push myself even further. I started approaching people more, making connections, and eventually became someone who started conversations instead of just participating in them. That bold step forward led to my becoming the president of the student council, a role that would have once been unimaginable for the shy, introverted kid I used to be.
      <br />
      But despite all these achievements, I still struggle. I still find it difficult to talk to new people at times, and there are moments when my introverted side takes over. However, these little victories over the years have built a strong foundation of self-confidence. It’s that self-confidence that keeps me going, despite the hesitation I sometimes feel.
      <br />
      This picture, with me lying on the ground in my UL Global Student Ambassador t-shirt, is a representation of all that I’ve overcome. The autumn leaves around me symbolize the changes I’ve embraced, the growth I’ve nurtured. Though I still have a shy, introverted side, this image shows the confidence I’ve built, the courage I’ve found, and the path I’ve carved out for myself through all the little achievements that define who I am today.
      </p>
    </section>
  </div>
);
};
export default SixthPage