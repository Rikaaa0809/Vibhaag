
import HomeIcon from "./assets/Resources/home.png"
import { Link } from "react-router-dom";
import Rhythm from "./assets/Resources/Rhythm.png";
import Alpha from "./assets/Resources/Alpha.png";
import Form from "./assets/Resources/Form studies.png";
import Netflix from "./assets/Resources/Netflix.png";
import Rendering from "./assets/Resources/Rendering.png";
import Samosa from "./assets/Resources/Samosa.png";
import Video from "./assets/Resources/Video.png"


const Projects = () => {
  return (
    <div style={{ backgroundColor: '#e7e6e1', height: '200vh' }}>
      <span className='main-heading' style={{ position: 'absolute', left: '43%', top: '10%' }}>projects</span>

  {/* Subheading */}
      <p style={{fontFamily: 'Poppins', fontSize: '14px', color: '#F2A154', position: 'absolute', left: '32%', top: '30%', textAlign: 'center'}}>Each project reflects my passion for crafting intuitive, impactful user experiences that <br />blend creativity with purpose.</p>

  {/* Project Images */}
      <div style={{width: '1152px', height: '935px', background: 'white', position: 'absolute', top: '50%', left:'12%', opacity: '50%'}}></div>

      <a
            href="https://www.behance.net/gallery/168408089/RHYTHM"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={Rhythm} alt="" style={{width: '300px', position: 'absolute', left: '12%', top: '50%'}}/></a>
      <div><span style={{fontFamily: 'Poppins', fontSize: '34px', fontWeight: '600', position: 'absolute', top: '54%', left:'34%', color: '#314E52'}}>Luxury <br />Product <br />Design.</span></div>
      

      <a
            href="https://www.behance.net/gallery/166823133/Furniture-Design"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={Alpha} alt="" style={{width: '299px', position: 'absolute', left: '49%', top: '50%'}}/></a>
      <div><span style={{fontFamily: 'Poppins', fontSize: '34px', fontWeight: '600', position: 'absolute', top: '64%', right:'14%', textAlign: 'right', color: '#314E52'}}>Furniture <br />Design.</span></div>
      

      <a
            href="https://www.behance.net/gallery/168101295/Redefining-Netflix-UIUX-and-Product"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={Netflix} alt="" style={{width: '300px', position: 'absolute', left: '12%', top: '81.5%'}}/></a>
      <div><span style={{fontFamily: 'Poppins', fontSize: '34px', fontWeight: '600', position: 'absolute', top: '96%', left:'34%', textAlign: 'right', color: '#314E52'}}>Reimagining <br />Netflix.</span></div>
      

      <a
            href="https://www.behance.net/gallery/144745881/PRODUCT-RENDERING"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={Rendering} alt="" style={{width: '299px', position: 'absolute', left: '49%', top: '81.5%'}}/></a>
      <div><span style={{fontFamily: 'Poppins', fontSize: '34px', fontWeight: '600', position: 'absolute', top: '96%', right:'18%', color: '#314E52'}}>Product <br />Rendering.</span></div>
      

      <a
            href="https://www.behance.net/gallery/166818973/Packaging-Design"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={Samosa} alt="" style={{width: '290px', position: 'absolute', right: '12.1%', top: '113%'}}/></a>
      <div><span style={{fontFamily: 'Poppins', fontSize: '34px', fontWeight: '600', position: 'absolute', top: '122%', right:'34%', textAlign: 'right', color: '#314E52'}}>Samosa <br /> Packaging <br />Design.</span></div>
      

      <a
            href="https://behance.net/gallery/166819845/Form-Studies"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={Form} alt="" style={{width: '300px', position: 'absolute', left: '12%', top: '113%'}}/></a>
      <div><span style={{fontFamily: 'Poppins', fontSize: '34px', fontWeight: '600', position: 'absolute', top: '115%', left:'34%', color: '#314E52'}}>Form <br />Studies.</span></div>
      

      <a
            href="https://www.behance.net/gallery/144601311/SUHANA-SAFAR-AD-FILM"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={Video} alt="" style={{width: '299px', position: 'absolute', left: '49%', top: '146%'}}/></a>
      <div><span style={{fontFamily: 'Poppins', fontSize: '34px', fontWeight: '600', position: 'absolute', top: '145%', right:'51.5%', textAlign: 'right', color: '#314E52'}}>Video <br />Concept.</span></div>

      <div style={{ height: '0.5px', width: '750px', background: '#314e52', position: 'absolute', top: '25%'}}></div>
      <div style={{ height: '0.5px', width: '750px', background: '#314e52', position: 'absolute', top: '12%',right: '0%'}}></div>
      

      

      <li><Link to="/FirstPage"><img
        src={HomeIcon}
        alt=""
        style={{
          position: "absolute",
          top: "4%",
          left: "2%",
          width: "30px",
          height: "auto",
          opacity: "40%",}}
        /></Link></li>

      








    </div>

  )
}

export default Projects