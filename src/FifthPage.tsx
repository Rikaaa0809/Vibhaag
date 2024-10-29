import { useEffect } from "react";
import Picture2 from "../public/Picture 2 Aesthetic Shot Thumbnail.png";
import HomeIcon from "../public/home.png";
import { Link } from "react-router-dom";

const FifthPage = () => {
  useEffect(() => {
    const section = document.getElementById("fifth-hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      style={{ backgroundColor: "#e7e6e1", height: "135vh" }}
      id="fifth-hero"
    >
      <div style={{ display: "flex", height: "80%" }}>
        <div>
          <span
            className="main-heading"
            style={{ position: "absolute", left: "43%", top: "10%" }}
          >
            projects (2)
          </span>
          <span
            className="heading-bold"
            style={{ position: "absolute", left: "35%", top: "28%" }}
          >
            Picture 2: Aesthetic Shot
          </span>
        </div>
        <img
          src={Picture2}
          alt="Picture1"
          style={{
            position: "absolute",
            left: "4%",
            top: "17%",
            width: "400px",
            height: "auto",
          }}
        />
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "35%", top: "34%" }}
        >
          Settings
        </span>
        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "35%", top: "39%" }}
        >
          <span style={{ fontWeight: "520" }}>ISO 80:</span> Chosen for minimal
          noise as the soft natural light between 4-5 PM doesn’t require much
          sensitivity.
          <span style={{ fontWeight: "520" }}>24mm focal length:</span> Wide
          angle to capture a broad scene, including the falling leaves. <br />
          <span style={{ fontWeight: "520" }}>f/1.78 aperture:</span> Large
          aperture to create a shallow depth of field, making the subject stand
          out and the background soft. <br />
          <span style={{ fontWeight: "520" }}>1/491s shutter speed:</span> Fast
          shutter speed to freeze the leaves mid-air, keeping them sharp without
          motion <br /> blur. <br />
          <span style={{ fontWeight: "520" }}>
            No white balance adjustment:
          </span>{" "}
          Natural light was consistent, with the sun parallel to the face,
          minimizing shadows and maintaining a balanced, warm tone. <br />
          <span style={{ fontWeight: "520" }}>Bright red top:</span> Chosen for
          contrast against the beige background and to complement a warm skin
          tone, making facial features more prominent.
        </span>
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "35%", top: "78%" }}
        >
          Editing Process
        </span>
        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "35%", top: "83%" }}
        >
          To enhance the photo’s dreamy aesthetic, I focused on adjustments that
          would both unify the tones and highlight specific elements. I
          brightened my face to reduce the tan and match the skin tone with my
          arms, ensuring a more uniform appearance. I increased the sharpness
          and the warmth of the leaves to give it <br />
          more autumn feel. The original photo had my other hand visible in the
          back but it was awkwardly <br />
          positioned so I used photoshop to remove the other hand using object
          selection tool and filled the empty space using background fill tool.
        </span>
        <span
          className="heading-bold"
          style={{ position: "absolute", left: "4%", top: "108%" }}
        >
          Vision
        </span>

        <span
          className="content-paragraph"
          style={{ position: "absolute", left: "4%", top: "113%" }}
        >
          The hair flip and spinning pose, playful movement combined with a wide
          smile, captured mid-motion represents the kind of positivity and
          energy I want to radiate. I love motivating others to see their own
          potential and unique qualities and this picture shows the approachable
          side of me. Hence, it’s a perfect aesthetic shot, the kind of picture
          I would post on my Instagram or even upload on a dating profile.
        </span>
        <div>
          <li><Link to="/FirstPage"><img
            src={HomeIcon}
            alt=""
            style={{
              position: "absolute",
              top: "4%",
              left: "2%",
              width: "30px",
              height: "auto",
              opacity: "40%",
            }}
          /></Link></li>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
