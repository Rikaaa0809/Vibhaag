
import Picture3 from "./assets/Resources/Picture 3 Picture which defines me Thumbnail.png";
import HomeIcon from "../public/home.png"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SixthPage = () => {
  useEffect(() => {
    const section = document.getElementById("sixth-hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div  style={{backgroundColor: '#e7e6e1', height: '170vh'}} id="sixth-hero">
        
        <div style={{display: 'flex', height: '80%'}}>
            <div>
              <span className='main-heading' style={{position: 'absolute', left: '43%', top: '10%'}}>projects (3)</span>
              <span className="heading-bold" style={{position: "absolute", left: '35%', top: '29%'}}>Picture 3: Defines Me</span>
              <span className='heading-bold' style={{position: 'absolute', left: '35%', top: '35%'}}>
                Settings
            </span>
            </div>
            
            <img src={Picture3} alt="Picture1" style={{position: 'absolute', left: '4%', top: '17%', width: '400px', height: 'auto'}} />
              <span className='content-paragraph' style={{position: 'absolute', left: '35%', top: '40%'}}>
              <span style={{fontWeight: '520'}}>ISO 80:</span> A low ISO ensures a clean, sharp image since it was captured outdoors with plenty of natural light, <br />this setting was perfect to maintain clarity without adding any grain. <br />
              <span style={{fontWeight: '520'}}>24mm focal length:</span> This wide-angle shot gives a sense of space while focusing on me as the subject, highlighting both the leaves and the textured background, framing me naturally within the composition. <br />
              <span style={{fontWeight: '520'}}>f/1.78 aperture:</span> A wide aperture like this brings a subtle depth of field, making sure the focus is on me <br />lying on the ground while keeping the background soft, yet clear enough to show the texture of the <br />ground and autumn leaves. <br />
              <span style={{fontWeight: '520'}}>1/521s shutter speed:</span> With a fast shutter speed, the shot captures the moment crisply as there was wind <br />and leaves were flying off the frame. 
            </span>
            <span className='heading-bold' style={{position: 'absolute', left: '35%', top: '76%'}}>
                Editing Process 
            </span>
            <span className='content-paragraph' style={{position: 'absolute', left: '35%', top: '81%'}}>
            The initial image appeared flat, as though I was standing against a wall. To add depth, I introduced shadows on my left side, since the light was coming from the right. I also added highlights to my t-shirt in areas exposed to light, giving it dimension. Using the spot healing tool, I added volume to my hair, enhancing the overall look. To create contrast, I increased the saturation and sharpness of the autumn leaves, making the orangish tones pop against the green of my shirt. These adjustments added depth and contrast, creating a more dynamic and visually appealing composition.
            </span>
            <span className='heading-bold' style={{position: 'absolute', left: '4%', top: '106%'}}>Vision</span>
            
            <span className='content-paragraph' style={{position: 'absolute', left: '4%', top: '111%'}}>
            Since childhood, I’ve always been the quiet, introverted one. I wasn’t the type to jump into conversations or make new friends easily. Over time, I realized that if I wanted to grow, I’d need to step out of that zone, little by little.
             After the 10th grade, I switched to a new school where no one knew me. It was my first opportunity to rebuild myself, and even though it terrified me, I took that leap. Slowly, I started participating in conversations, interacting in debates, and challenging myself to talk a little more. This new environment gave me a chance to experiment with who I wanted to be, and each step felt like a small achievement and with each achievement—no matter how small—I gained a little more confidence.
             When I began my undergraduate studies, I decided to push myself even further. I started approaching people more, making connections, and eventually became someone who started conversations instead of just participating in them. That bold step forward led to my becoming the president of the student council, a role that would have once been unimaginable for the introverted kid I used to be.
             But despite all these achievements, I still struggle. I still find it difficult to talk to new people at times. However, these little victories over the years have built a strong foundation of self-confidence. It’s that self-confidence that keeps me going, despite the hesitation I sometimes feel.
             This picture, with me lying on the ground in my UL Global Student Ambassador t-shirt, is a representation of all that I’ve overcome. The autumn leaves around me symbolize the changes I’ve embraced, the growth I’ve nurtured. Though I still have a shy, introverted side, this image shows the confidence I’ve built, the courage I’ve found, and the path I’ve carved out for myself through all the little achievements that define who I am today.
            </span>
            <li><Link to="/FirstPage"><div>
              <img src={HomeIcon} alt="" style={{position: "absolute", top: '4%', left: "2%", width: '30px', height: 'auto', opacity: '40%'}} />
            </div></Link></li>
        </div>
        

    </div>
  )
}

export default SixthPage