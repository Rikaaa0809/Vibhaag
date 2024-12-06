import TFIBike from "./assets/Resources/TFI Video.mp4";
import { Link } from "react-router-dom";
import HomeIcon from "./assets/Resources/home.png";

import Editing from "./assets/Editing.jpg";
import Cinematography from "./assets/Cinematography.jpg";
import Direction from "./assets/Direction.jpg";
import thanks from "./assets/Resources/Asset 11xxxhdpi.png";

const Video = () => {
  return (
    <div
      style={{
        backgroundColor: "#e7e6e1",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        paddingBottom: "1vw"
      }}
    >
      {/* Home Icon */}
      <div style={{ marginLeft: "5%" }}>
        <div
          style={{
            background: "white",
            opacity: "0.4",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "30px",
            padding: "11px",
            paddingTop: "60px",
            width: "60px",
            height: "120px",
          }}
        >
          <Link to="/FirstPage">
            <img
              src={HomeIcon}
              alt="Home"
              style={{ width: "40px", opacity: "0.4", marginTop: "20%"}}
            />
          </Link>
        </div>
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "bestigia",
          fontSize: "4vw",
          color: "#314e52",
          textAlign: "center",
          marginTop: "0%",
          marginBottom: "2%",
        }}
      >
        Blog: From Struggle to Swift
      </h1>

      {/* Video Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <video controls style={{ width: "100%", maxWidth: "800px" }}>
          <source src={TFIBike} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Blog Content */}
      <p
        style={{
          textAlign: "justify",
          margin: "2rem 5%",
          fontFamily: "Poppins",
          fontSize: "1.1em",
        }}
      >
        For a recent group assignment, our team created a video highlighting how
        TFI bikes outperform regular ones in terms of comfort. The storyline
        revolved around a tired cyclist struggling on a normal bike, only to
        later experience effortless rides with TFI bikes, as if gliding through
        air. This transformation emphasized the superior ease and efficiency of
        TFI bikes. While everyone in the team contributed across various roles
        like cinematography, editing, and sound, my main responsibilities lay
        in direction, cinematography, and editing.
      </p>

      {/* Role Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          margin: "2rem 5%",
          fontFamily: "Poppins",
          color: "#314E52",
        }}
      >
        <div>
          <h2 style={{ textAlign: "center", margin: "1rem 0" }}>Direction</h2>
          <p style={{ textAlign: "justify", fontSize: "1em" }}>
            As the director, I oversaw the entire shoot, ensuring everything ran
            smoothly, especially since it was an outdoor shoot near a parking
            lot with constant interruptions. My role included instructing actors
            and crew to adjust positions, directing the cinematographer on
            framing the shots, and ensuring continuity. I managed logistics like
            moving random objects out of the frame, coordinating the flow of
            traffic when cars interrupted scenes, and maintaining a focused
            environment for the actors. To add realism, I sprayed water on the
            actor to mimic sweat and ensured crew members looked away to avoid
            making the actor camera-shy. My approach was all about precision and
            control, keeping the team synchronized to achieve our vision. I also
            made practical decisions, like using the camera without a gimbal to
            save time during scenes where stability wasn’t critical. I
            coordinated quick costume changes for the actor while guiding the
            crew on setting up the next scene, ensuring no time was wasted.
          </p>
          <img
            src={Cinematography}
            alt="Cinematography"
            style={{ width: "204%", marginTop: "10px" }}
          />
        </div>
        <div>
          <h2 style={{ textAlign: "center", margin: "1rem 0" }}>Editing</h2>
          <p style={{ textAlign: "justify", fontSize: "1em" }}>
            In post-production, I collaborated with a team member. While he
            edited the main footage, lighting, and placements, I worked
            simultaneously on another device to create the title screen and end
            credits, optimizing our time. Later, I compiled all the elements and
            added final touches, including text tracking, the logo, and the
            slogan, “Ride Smarter, Not Harder.” These details ensured our
            message was clear and impactful.
          </p>
          <img
            src={Editing}
            alt="Editing"
            style={{ width: "100%", marginTop: "10px" }}
          />
        </div>
        <div>
          <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
            Cinematography
          </h2>
          <p style={{ textAlign: "justify", fontSize: "1em" }}>
            One of my favorite contributions was scripting, directing, and
            shooting the closing frame. In this scene, the rider reaches their
            destination and gets off the bike, appearing refreshed. Another
            character compliments, “You still seem fresh,” implying that the TFI
            bike made the journey effortless. I designed the frame to ensure the
            bike, its logo, and branding occupied the main focus while the
            conversation unfolded naturally in the background. This setup subtly
            reinforced the bike’s role in the rider’s comfort, driving home our
            message.
          </p>
          <img
            src={Direction}
            alt="Direction"
            style={{ width: "100%", marginTop: "130px" }}
          />
        </div>
      </div>

      {/* Thank You Section */}
      <div>
        <img
          src={thanks}
          alt="Thank You"
          style={{
            width: "18%",
            height: "auto",
            display: "block",
            margin: "4rem auto",
          }}
        />
      </div>
    </div>
  );
};
export default Video;
