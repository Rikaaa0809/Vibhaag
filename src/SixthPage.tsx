
import Picture3 from "./assets/Resources/Picture 3 Picture which defines me Thumbnail.png";
import HomeIcon from "./assets/Resources/home.png"  
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Iso from "./assets/Iso.png";
import Focallength from "./assets/Focallength.png";
import ShutterSpeed from "./assets/Shutterspeed.png";
import Aperture from "./assets/Aperture.png";
import Leaf from "./assets/Leaf.png";

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
    <div  style={{backgroundColor: '#e7e6e1', height: '200vh'}} id="sixth-hero">
        
      <img src={Leaf} alt="" style={{position: "absolute", right:'6%', top: '-10%', width: '200px', height: 'auto', opacity:'10%', transform: 'rotate(30deg)'}} />    
        
        
         {/* Heading */} 
            <div>
              <span style={{ position: "absolute", left: "9%", top: "4%", fontFamily: 'bestigia', fontSize:'50px', color: '#314e52' }}>Picture which Defines Me</span>
            </div>

            <div style={{height: '600px', width: '400px', background: 'white', position: 'absolute', top: '20%', left: '10%', borderRadius: '30px'}}></div>
            <span style={{fontFamily: 'Fleurdeleah', fontSize: '28px', position: "absolute", left: '7%', top: '92%', color: 'black', fontWeight: '500', transform: 'rotate(-11deg)'}}>07.10.24
              <br />
              Apple iphone14 pro max
            </span>

            <div style={{display: 'flex', height: '80%'}}>

              <img 
                src={Picture3} 
                alt="Picture1" 
                style={{
                  position: 'absolute', 
                  left: '11.6%', 
                  top: '14%', 
                  width: '350px', 
                  height: 'auto'
                }} 
              />

         {/* Settings */}
            <span 
              className='heading-bold' 
              style={{position: 'absolute', left: '38%', top: '24%'}}>
                Settings</span>

              <span 
                className='content-paragraph' 
                style={{position: 'absolute', left: '38%', top: '33%'}}>
              <span style={{fontWeight: '600'}}>ISO 80:</span> A low ISO ensures a clean, sharp image since it was captured outdoors with plenty of <br /> natural light,this setting was perfect to maintain clarity without adding any grain. <br />
              <br />
              <span style={{fontWeight: '600'}}>24mm focal length:</span> This wide-angle shot gives a sense of space while focusing on me as the <br /> subject, highlighting both the leaves and the textured background, framing me naturally within <br /> the composition. <br />
              <br />
              <span style={{fontWeight: '600'}}>f/1.78 aperture:</span> A wide aperture like this brings a subtle depth of field, making sure the focus <br /> is on melying on the ground while keeping the background soft, yet clear enough to show the <br /> texture of the ground and autumn leaves. <br />
              <br />
              <span style={{fontWeight: '600'}}>1/521s shutter speed:</span> With a fast shutter speed, the shot captures the moment crisply as there <br /> was wind and leaves were flying off the frame. 
            </span>

            <div style={{display: 'flex', position: "absolute", right: '11%', top: '82%'}}>
              <img src={Iso} alt="" style={{width: '120px', height: '100px', margin: '40px'}}/>
              <img src={Focallength} alt="" style={{width: '120px', height: '100px', margin: '40px'}}/>
              <img src={ShutterSpeed} alt="" style={{width: '100px', height: '100px', margin: '40px'}}/>
              <img src={Aperture} alt="" style={{width: '100px', height: '100px', margin: '40px'}}/>
            </div>


{/* Editing process */}
            <span 
              className='heading-bold' 
              style={{position: 'absolute', left: '10%', top: '110%'}}
            >Editing Process</span>

            <span 
              className='content-paragraph' 
              style={{position: 'absolute', left: '10%', top: '115%'}}
            >The initial image appeared flat, as though I was standing against a wall. To add depth, I introduced shadows on my left side, since the light  <br /> was coming from the right. I also added highlights to my t-shirt in areas exposed to light, giving it dimension. Using the spot healing tool, I <br /> added  volume to my hair, enhancing the overall look. To create contrast, I increased the saturation and sharpness of the autumn leaves, <br /> making the orangish tones pop against the green of my shirt. These adjustments added depth and contrast, creating a more dynamic and <br /> visually appealing composition.
            </span>

            <span 
              className='heading-bold' 
              style={{position: 'absolute', left: '10%', top: '138%'}}
            >Vision</span>
            
            <span 
              className='content-paragraph' 
              style={{position: 'absolute', left: '10%', top: '143%'}}
            >Since childhood, I’ve always been the quiet, introverted one. I wasn’t the type to jump into conversations or make new friends easily. Over time, <br /> I realized that if I wanted to grow, I’d need to step out of that zone, little by little.
             After the 10th grade, I switched to a new school where no one <br /> knew me. It was my first opportunity to rebuild myself, and even though it terrified me, I took that leap. Slowly, I started participating in <br /> conversations, interacting in debates, and challenging myself to talk a little more. This new environment gave me a chance to experiment <br /> with who I wanted to be, and each step felt like a small achievement and with each achievement—no matter how small—I gained a little more confidence.
             When I began my undergraduate studies, I decided to push myself even further. I started approaching people more, making  <br /> connections, and eventually became someone who started conversations instead of just participating in them. That bold step forward led to <br /> my becoming the president of the student council, a role that would have once been unimaginable for the introverted kid I used to be.
             But  <br /> despite all these achievements, I still struggle. I still find it difficult to talk to new people at times. However, these little victories over the years  <br /> have built a strong foundation of self-confidence. It’s that self-confidence that keeps me going, despite the hesitation I sometimes feel.
             This  <br /> picture, with me lying on the ground in my UL Global Student Ambassador t-shirt, is a representation of all that I’ve overcome. The autumn  <br /> leaves around me symbolize the changes I’ve embraced, the growth I’ve nurtured. Though I still have a shy, introverted side, this image  <br /> shows the confidence I’ve built, the courage I’ve found, and the path I’ve carved out for myself through all the little achievements that define  <br /> who I am today.
            </span>

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
  )
}

export default SixthPage