
import Picture1 from "../public/Picture 1 Corporate Headshot Thumbnail.png"
import Picture2 from "../public/Picture 2 Aesthetic Shot Thumbnail.png"
import Picture3 from "../public/Picture 2 Aesthetic Shot Thumbnail.png"
import HomeIcon from "../public/home.png"
import { Link } from "react-router-dom";
import Rhythm from "../public/Rhythm.png";
import Alpha from "../public/Alpha.png";
import Form from "../public/Form studies.png";
import Netflix from "../public/Netflix.png";
import Rendering from "../public/Rendering.png";
import Samosa from "../public/Samosa.png";
import Video from "../public/Video.png"


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





    // <div style={{ backgroundColor: '#e7e6e1', height: '400vh' }}> 
    // {/* Project 1 */}
    //   <div>
    //     <span className='main-heading' style={{ position: 'absolute', left: '43%', top: '10%' }}>projects</span>
    //     <span className="heading-bold" style={{ position: "absolute", left: '4%', top: '30%' }}>Project 1: Corporate Headshot</span>
    //   </div>
    //   <div style={{ display: 'flex', height: '80%' }}>
    //     <span className='heading-bold' style={{ position: 'absolute', left: '35%', top: '37%' }}>
    //       Settings
    //     </span>
    //     <img src={Picture1} alt="Picture1" style={{ position: 'absolute', left: '4%', top: '25%', width: '400px', height: 'auto' }} />
    //     <span className='content-paragraph' style={{ position: 'absolute', left: '35%', top: '42%' }}>
    //       <span style={{ fontWeight: '520' }}>ISO 800:</span> Necessary for an indoor shot at 7 PM, as there was lower light levels so I needed the camera to <br /> capture more light. <br />
    //       <span style={{ fontWeight: '520' }}>24mm focal length:</span> A wide-angle allowed me to capture my face in a way that it fills the frame <br /> without distortion. <br />
    //       <span style={{ fontWeight: '520' }}>f/1.78 aperture:</span> The wide aperture because the setting was indoor and I needed the image to be bright enough and such that my face is in focus and the background is blurred. <br />
    //       <span style={{ fontWeight: '520' }}>1/50s shutter speed:</span> In this case, this shutter speed was sufficient to avoid motion blur indoors, given the <br /> low light situation, while maintaining a sharp focus on me, the subject.
    //     </span>
        
    //     <span className='heading-bold' style={{ position: 'absolute', left: '35%', top: '74%' }}>
    //       Editing Process
    //     </span>
    //     <span className='content-paragraph' style={{ position: 'absolute', left: '35%', top: '79%' }}>
    //       To enhance the headshot, I made slight adjustments to the face structure to make it appear thinner, <br /> helping emphasize a professional yet approachable look. I cleared any spots on my face for smoother <br /> skin, ensuring the focus remains on my expression without distractions. Since the face was the main <br /> subject, these edits refined the visual impact, making the portrait more polished.
    //     </span>
    //     <span className='heading-bold' style={{ position: 'absolute', left: '35%', top: '96%' }}>Vision</span>
    //     <span className='content-paragraph' style={{ position: 'absolute', left: '35%', top: '101%' }}>
    //       I opted for a slightly tilted posture with a wide smile to convey confidence and flexibility—important <br /> traits in a corporate setting. Wearing formal attire, specifically a black blazer, ensured that even though <br /> I posed in a fun, approachable manner, the overall look remains formal and professional. The white background provided a clean contrast, emphasizing the black blazer and my facial expression, <br /> keeping the attention entirely on me.
    //     </span>
    //     <div style={{width: '500px', height: '20px', background: '#314e52', position: 'absolute', top: '116%'}}></div>
    //   </div>

    //   {/* Project 2 */}
    //   <div>
    //     <div>
    //       <span className="heading-bold" style={{ position: "absolute", left: '4%', top: '128%' }}>Project 2: Aesthetic Shot</span>
    //     </div>
    //     <img src={Picture2} alt="Picture2" style={{ position: 'absolute', left: '4%', top: '123%', width: '400px', height: 'auto' }} />
    //     <span className='heading-bold' style={{ position: 'absolute', left: '35%', top: '135%' }}>
    //       Settings
    //     </span>
    //     <span className='content-paragraph' style={{ position: 'absolute', left: '35%', top: '140%' }}>
    //           <span style={{fontWeight: '520'}}>ISO 80:</span> Chosen for minimal noise as the soft natural light between 4-5 PM doesn’t require much sensitivity. <br />
    //           <span style={{fontWeight: '520'}}>24mm focal length:</span> Wide angle to capture a broad scene, including the falling leaves. <br />
    //           <span style={{fontWeight: '520'}}>f/1.78 aperture:</span> Large aperture to create a shallow depth of field, making the subject stand out and the background soft. <br />
    //           <span style={{fontWeight: '520'}}>1/491s shutter speed:</span> Fast shutter speed to freeze the leaves mid-air, keeping them sharp without motion <br /> blur. <br />
    //           <span style={{fontWeight: '520'}}>No white balance adjustment:</span> Natural light was consistent, with the sun parallel to the face, minimizing shadows and maintaining a balanced, warm tone. <br />
    //          < span style={{fontWeight: '520'}}>Bright red top:</span> Chosen for contrast against the beige background and to complement a warm skin tone, making facial features more prominent. 
    //     </span>
    //     <span className='heading-bold' style={{ position: 'absolute', left: '35%', top: '179%' }}>
    //       Editing Process
    //     </span>
    //     <span className='content-paragraph' style={{ position: 'absolute', left: '35%', top: '184%' }}>
    //       To enhance the photo’s dreamy aesthetic, I focused on adjustments that would both unify the tones and highlight specific elements. I brightened my face to reduce the tan and match the skin tone with my arms, ensuring a more uniform appearance. I increased the sharpness and the warmth of the leaves to give it <br /> more autumn feel. The original photo had my other hand visible in the back but it was awkwardly <br /> positioned so I used photoshop to remove the other hand using object selection tool and filled the empty space using the background fill tool.
    //     </span>
    //     <span className='heading-bold' style={{ position: 'absolute', left: '4%', top: '213%' }}>Vision</span>
    //     <span className='content-paragraph' style={{ position: 'absolute', left: '4%', top: '218%' }}>
    //       The hair flip and spinning pose, playful movement combined with a wide smile, captured mid-motion represents the kind of positivity and energy I want to radiate. I love motivating others to see their own potential and unique qualities and this picture shows the approachable side of me. Hence, it’s a perfect <br />aesthetic shot, the kind of picture I would post on my Instagram or even upload on a dating profile.
    //     </span>
    //     <div style={{width: '550px', height: '20px', background: '#314e52', position: 'absolute', top: '226%', right: '0%'}}></div>
       
    //   </div>

    //   {/* Project 3 */}
    //   <div>
    //     <div>
          
    //       <span className="heading-bold" style={{ position: "absolute", left: '4%', top: '240%' }}>Project 3:Picture which Defines Me</span>
          
    //     </div>
        
    //     <img src={Picture3} alt="Picture3" style={{ position: 'absolute', left: '4%', top: '236%', width: '400px', height: 'auto' }} />
    //     <span className='heading-bold' style={{ position: 'absolute', left: '35%', top: '250%' }}>
    //         Settings
    //       </span>
    //     <span className='content-paragraph' style={{ position: 'absolute', left: '35%', top: '256%' }}>
    //     <span style={{fontWeight: '520'}}>ISO 80:</span> A low ISO ensures a clean, sharp image since it was captured outdoors with plenty of natural light, <br />this setting was perfect to maintain clarity without adding any grain. <br />
    //           <span style={{fontWeight: '520'}}>24mm focal length:</span> This wide-angle shot gives a sense of space while focusing on me as the subject, highlighting both the leaves and the textured background, framing me naturally within the composition. <br />
    //           <span style={{fontWeight: '520'}}>f/1.78 aperture:</span> A wide aperture like this brings a subtle depth of field, making sure the focus is on me <br />lying on the ground while keeping the background soft, yet clear enough to show the texture of the <br />ground and autumn leaves. <br />
    //           <span style={{fontWeight: '520'}}>1/521s shutter speed:</span> With a fast shutter speed, the shot captures the moment crisply as there was wind <br />and leaves were flying off the frame.
    //     </span>
        
    //     <span className='heading-bold' style={{ position: 'absolute', left: '35%', top: '292%' }}>
    //       Editing Process
    //     </span>
    //     <span className='content-paragraph' style={{ position: 'absolute', left: '35%', top: '298%' }}>
    //     The initial image appeared flat, as though I was standing against a wall. To add depth, I introduced <br />shadows on my left side, since the light was coming from the right. I also added highlights to my t-shirt <br />in areas exposed to light, giving it dimension. Using the spot healing tool, I added volume to my hair, enhancing the overall look. To create contrast, I increased the saturation and sharpness of the autumn leaves, making the orangish tones pop against the green of my shirt. These adjustments added depth <br />and contrast, creating a more dynamic and visually appealing composition.
    //     </span>
    //     <span className='heading-bold' style={{ position: 'absolute', left: '4%', top: '325%' }}>Vision</span>
    //     <span className='content-paragraph' style={{ position: 'absolute', left: '4%', top: '330%' }}>
    //           Since childhood, I’ve always been the quiet, introverted one. I wasn’t the type to jump into conversations or make new friends easily. Over time, I realized that <br />if I wanted to grow, I’d need to step out of that zone, little 
    //           by little. After the 10th grade, I switched to a new school where no one knew me. It was my first <br /> opportunity to rebuild myself, and even though it terrified me, I took that leap. Slowly, I started participating in conversations, interacting in debates, and challenging myself to talk a little more. This new environment gave me a chance to experiment with who I wanted to be, and each step felt like a small achievement and with each achievement—no matter how small—I gained a little more confidence.
    //          When I began my undergraduate studies, I decided to <br /> push myself even further. I started approaching people more, making connections, and eventually became someone who started conversations instead of <br />just participating in them. That bold step forward led to my becoming the president of the student council, a role that would have once been unimaginable <br />for the introverted kid I used to be.
    //          But despite all these achievements, I still struggle. I still find it difficult to talk to new people at times. However, these little victories over the years have built a strong foundation of self-confidence. It’s that self-confidence that keeps me going, despite the hesitation I sometimes <br />feel.
    //          This picture, with me lying on the ground in my UL Global Student Ambassador t-shirt, is a representation of all that I’ve overcome. The autumn leaves <br /> around me symbolize the changes I’ve embraced, the growth I’ve nurtured. Though I still have a shy, introverted side, this image shows the confidence I’ve <br />built, the courage I’ve found, and the path I’ve carved out for myself through all the little achievements that define who I am today.Lying down, with my hair sprawled out, surrounded by autumn leaves, was a deliberate composition choice. It reflects my introspective side, someone who often gets lost in thoughts. <br />This picture captures me in a moment of stillness, in nature, one with my surroundings. It's like a self-portrait of how I view myself – grounded, observant, and <br />at peace.
    //     </span>
    //       <li><Link to="/FirstPage"><img
    //         src={HomeIcon}
    //         alt=""
    //         style={{
    //           position: "absolute",
    //           top: "4%",
    //           left: "2%",
    //           width: "30px",
    //           height: "auto",
    //           opacity: "40%",
    //         }}
    //       /></Link></li>
        

    //   </div>
    // </div>
