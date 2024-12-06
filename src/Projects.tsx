
import HomeIcon from "./assets/Resources/home.png"
import { Link } from "react-router-dom";
import Rhythm from "./assets/Resources/Rhythm.png";
import Alpha from "./assets/Resources/Alpha.png";
import Form from "./assets/Resources/Form studies.png";
import Netflix from "./assets/Resources/Netflix.png";
import Rendering from "./assets/Resources/Rendering.png";
import Samosa from "./assets/Resources/Samosa.png";
import Video from "./assets/Resources/Video.png"
import Flower from "./assets/Resources/flower.png"
import Heading1 from "./assets/Resources/Heading 1.png"
import Heading2 from "./assets/Resources/Heading 2.png"
import Heading3 from "./assets/Resources/Heading 3.png"
import Heading4 from "./assets/Resources/Heading 4.png"
import Heading5 from "./assets/Resources/Heading 5.png"
import Heading6 from "./assets/Resources/Heading 6.png"
import Heading7 from "./assets/Resources/Heading 7.png"
import Blank from "./assets/Resources/Blank.png"



const Projects = () => {
 
  return (
    <div style={{ backgroundColor: "#e7e6e1", minHeight: "100vh", paddingLeft: "20px", paddingRight: "20px" }}>
      {/* Main Heading */}
      <div style={{marginLeft: "5%"}}><div style={{ background: "white",opacity: "0.4", borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px", paddingRight: "11px", paddingLeft: "11px", paddingTop: "60px", width:"60px", height: "120px" }}><Link to="/FirstPage">
        <img src={HomeIcon} alt="Home" style={{ width: "40px", opacity: "0.4" }} /></Link></div></div>
      <div style={{ textAlign: "center" }}>
        <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
        <img src={Flower} alt="Flower" style={{ width: "70px", height: "auto", opacity: "20%", marginRight: "20px" }} />
        <h1  style={{ fontFamily: "BESTIGIA", fontSize: "48px", color: "#314E52", marginTop: "10px" }}>
          projects
        </h1>
        <img src={Flower} alt="Flower" style={{ width: "70px", height: "auto", opacity: "20%", marginLeft: "20px" }} />
        </div>
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "400",
            color: "#F2A154",
            marginTop: "30px",
          }}
        >
          Each project reflects my passion for crafting intuitive, impactful user experiences that blend creativity
          with purpose.
        </p>
      </div>

      {/* Project Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridAutoRows: "auto",
          gap: "0px",
          padding: "50px",
          marginLeft: "12.8%",
          marginRight: "12.8%"
        }}
      >
        {/* Project 1 */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.behance.net/gallery/168408089/RHYTHM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Rhythm} alt="Rhythm" style={{height: "250px", width: "250px"}} />
          </a>
        </div>

        {/* Project 1 Heading */}

        <div style={{ textAlign: "center" }}>
            <img src={Heading1} alt="Rhythm" style={{height: "250px", width: "250px"}} />         
        </div>

        {/* Project 2 */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.behance.net/gallery/166823133/Furniture-Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Alpha} alt="Furniture Design" style={{height: "250px", width: "250px"}} />
          </a>
        </div>

        {/* Project 2 Heading */}

        <div style={{ textAlign: "center" }}>
            <img src={Heading2} alt="Furniture Design" style={{ height: "250px", width: "250px" }} />         
        </div>

        {/* Project 3 */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.behance.net/gallery/168101295/Redefining-Netflix-UIUX-and-Product"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Netflix} alt="Netflix" style={{height: "250px", width: "250px"}} />
          </a>
        </div>

        {/* Project 3 Heading */}

        <div style={{ textAlign: "center" }}>
            <img src={Heading3} alt="Reimagining Netflix" style={{height: "250px", width: "250px" }} />         
        </div>

        {/* Project 4 */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.behance.net/gallery/144745881/PRODUCT-RENDERING"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Rendering} alt="Product Rendering" style={{height: "250px", width: "250px"}} />
          </a>
        </div>

        {/* Project 4 Heading */}

        <div style={{ textAlign: "center" }}>
            <img src={Heading4} alt="Product Rendering" style={{ height: "250px", width: "250px"}} />         
        </div>

        {/* Project 5 */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://behance.net/gallery/166819845/Form-Studies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Form} alt="Form Studies" style={{height: "250px", width: "250px" }} />
          </a>
        </div>

        {/* Project 5 Heading */}

        <div style={{ textAlign: "center" }}>
            <img src={Heading5} alt="Form Studies" style={{height: "250px", width: "250px" }} />         
        </div>
        

        {/* Project 6 Heading */}

        <div style={{ textAlign: "center" }}>
            <img src={Heading6} alt="Samosa" style={{height: "250px", width: "250px"}} />         
        </div>

        {/* Project 6 */}

        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.behance.net/gallery/166818973/Packaging-Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Samosa} alt="Samosa Packaging" style={{height: "250px", width: "250px"}} />
          </a>
        </div>
        

        {/* Blank */}

        <div style={{ textAlign: "center" }}>
            <img src={Blank} alt="Blank" style={{ height: "250px", width: "250px"}} />         
        </div> 

        {/* Project 7 Heading*/}

        <div style={{ textAlign: "center" }}>
            <img src={Heading7} alt="Video" style={{ height: "250px", width: "250px" }} />         
        </div>

        {/* Project 7 */}

        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.behance.net/gallery/144601311/SUHANA-SAFAR-AD-FILM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Video} alt="Video Concept" style={{ height: "250px", width: "250px" }} />
          </a>
        </div>

        {/* Blank */}
        
        <div style={{ textAlign: "center" }}>
            <img src={Blank} alt="Blank" style={{ height: "250px", width: "250px" }} />         
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};


export default Projects