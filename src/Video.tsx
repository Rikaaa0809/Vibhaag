
import TFIBike from "./assets/Resources/TFI Video.mp4"
import { Link } from "react-router-dom";
import HomeIcon from "./assets/Resources/home.png"
import Leaf from "./assets/Leaf.png";
import Editing from "./assets/Editing.jpg"
import Cinematography from "./assets/Cinematography.jpg"
import Direction from "./assets/Direction.jpg"
import thanks from "./assets/Resources/Asset 11xxxhdpi.png"


const Video = () => {
  return (
    <div style={{ backgroundColor: "#e7e6e1", height: "300vh" }}>

        <img src={Leaf} alt="" style={{position: "absolute", right:'6%', top: '-10%', width: '150px', height: 'auto', opacity:'10%', transform: 'rotate(10deg)'}} />
        
{/* video */}

        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10%'}}>
            <video controls width="1000">
                <source src={TFIBike} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

{/* home icon      */}
        
        <div>
            <Link to="/FirstPage">
                <div style={{width: '60px', height: '100px', borderBottomRightRadius: '30px',borderBottomLeftRadius: '30px', position: "absolute", left:'4%',top: '0%', backgroundColor: '#F6F5F2'}}></div>
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

{/* Heading of the page */}

        <div>
            <div>
                <span style={{ position: "absolute", left: "9%", top: "4%", fontFamily: 'bestigia', fontSize:'50px', color: '#314e52' }}>
                    Blog: From Struggle to Swift
                </span>
            </div>
        </div>

{/* Blog Entry */}

        <span className="content-paragraph" style={{ display: 'flex', justifyContent: 'center', textAlign: 'justify', marginTop: '5%', marginLeft: '8%', marginRight: '8%' }}>
        For a recent group assignment, our team created a video highlighting how TFI bikes outperform regular ones in terms of comfort. The storyline revolved around a tired cyclist struggling on a normal bike, only to later experience effortless rides with TFI bikes, as if gliding through air. This transformation emphasized the superior ease and efficiency of TFI bikes.
        While everyone in the team contributed across various roles like cinematography, editing, and sound, my main responsibilities lay in direction, cinematography, and editing.
        </span>

        <div className="heading-bold" style={{ display: 'flex'}}>
            <span style={{width: '30%', textAlign: 'center', marginLeft: '6%', marginTop: '2%', marginBottom: '1%'}}>Direction</span> 
            <span style={{width: '30%', textAlign: 'center', marginTop: '2%', marginBottom: '1%'}}>Editing</span> 
            <span style={{width: '30%', textAlign: 'center', marginRight: '6%', marginTop: '2%', marginBottom: '1%'}}>Cinematography</span> 
            
        </div>

        <div className="content-paragraph" style={{display: 'flex'}}>
            <span style={{width: '30%', marginLeft: '8%', marginRight: '4%', textAlign: 'justify'}}>As the director, I oversaw the entire shoot, ensuring everything ran smoothly, especially since it was an outdoor shoot near a parking lot with constant interruptions. My role included instructing actors and crew to adjust positions, directing the cinematographer on framing the shots, and ensuring continuity. I managed logistics like moving random objects out of the frame, coordinating the flow of traffic when cars interrupted scenes, and maintaining a focused environment for the actors. To add realism, I sprayed water on the actor to mimic sweat and ensured crew members looked away to avoid making the actor camera-shy. My approach was all about precision and control, keeping the team synchronized to achieve our vision. I also made practical decisions, like using the camera without a gimbal to save time during scenes where stability wasn’t critical. I coordinated quick costume changes for the actor while guiding the crew on setting up the next scene, ensuring no time was wasted.</span>
            <span style={{width: '30%', textAlign: 'justify'}}>In post-production, I collaborated with a team member. While he edited the main footage, lighting, and placements, I worked simultaneously on another device to create the title screen and end credits, optimizing our time. Later, I compiled all the elements and added final touches, including text tracking, the logo, and the slogan, “Ride Smarter, Not Harder.” These details ensured our message was clear and impactful.</span>
            <span style={{width: '30%', marginLeft: '4%', marginRight: '8%', textAlign: 'justify'}}>One of my favorite contributions was scripting, directing, and shooting the closing frame. In this scene, the rider reaches their destination and gets off the bike, appearing refreshed. Another character compliments, “You still seem fresh,” implying that the TFI bike made the journey effortless. I designed the frame to ensure the bike, its logo, and branding occupied the main focus while the conversation unfolded naturally in the background. This setup subtly reinforced the bike’s role in the rider’s comfort, driving home our message.</span>
        </div>

        <img src={Editing} alt="" style={{position: 'absolute', left: '38%', top: '192%', width: '360px', height: 'auto'}} />
        <img src={Cinematography} alt="" style={{position: 'absolute', left: '8%', top: '235%', width: '54%', height: 'auto'}} />
        <img src={Direction} alt="" style={{position: 'absolute', right: '8%', top: '192%', width: '25%', height: 'auto'}}/>
        <img src={thanks} alt="" style={{position: 'absolute', right: '12%', top: '271%', width: '18%', height: 'auto'}} />

        

    </div>
  )
}

export default Video