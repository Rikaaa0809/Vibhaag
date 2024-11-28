import { useState } from "react";
import HomeIcon from "./assets/Resources/home.png"
import { Link } from "react-router-dom";
import BellPeppers from "./assets/Resources/Bell Peppers.png";
import Buratta from "./assets/Resources/Burratta.png";
import Cauliflower from "./assets/Resources/Cauliflower.png";
import Cheela from "./assets/Resources/Cheela.png";
import Desserts from "./assets/Resources/Desserts.png";
import Paneer from "./assets/Resources/Paneer.png";
import Flower from "./assets/Resources/flower.png";

const Post = ({ post }) => {
  const [reactions, setReactions] = useState({
    love: 289,
    pizza: 54,
    coffee: 5,
    ice: 124,
    chilli: 4,
  });
  const [commentContent, setCommentContent] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleReaction = (type) => {
    setReactions((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleAddComment = () => {
    if (commentContent.trim()) {
      setComments((prev) => [...prev, commentContent.trim()]);
      setCommentContent("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#314E52",
        color: "#fff",
        padding: "15px",
        borderRadius: "10px",
        maxWidth: "300px",
        margin: "20px auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Image Section */}
      <div style={{ position: "relative" }}>
        <img
          src={post.image}
          alt="Post"
          style={{
            height: "300px",
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            backgroundColor: "#00000099",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#fff" }}>{post.title}</span>
        </div>
      </div>

      {/* Reaction Buttons Section */}
      <div style={{ display: "flex", justifyContent: "space-around", margin: "15px 0" }}>
        {[
          { type: "love", color: "#FF3B30", label: "❤" },
          { type: "pizza", color: "#007bff", label: "🍕" },
          { type: "coffee", color: "#ffcc00", label: "☕" },
          { type: "ice", color: "#605DEC", label: "🍦" },
          { type: "chilli", color: "#FF5733", label: "🌶️" },
        ].map(({ type, color, label }) => (
          <button
            key={type}
            onClick={() => handleReaction(type)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                color,
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) => {
                (e.target as HTMLSpanElement).style.transform = "scale(1.2)";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLSpanElement).style.transform = "scale(1)";
              }}
            >
              {label}
            </span>
            <span style={{ fontSize: "12px", marginTop: "1px", color: "#fff" }}>
              {reactions[type]}
            </span>
          </button>
        ))}
      </div>

      <hr style={{ borderColor: "#F7F6E7" }} />

      {/* Comment Section */}
      <input
        type="text"
        placeholder="Write a comment..."
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "25px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={handleAddComment}
        style={{
          backgroundColor: "#F2A154",
          color: "#fff",
          padding: "3px 12px",
          border: "none",
          borderRadius: "17px",
          cursor: "pointer",
          marginBottom: "5px",
          height: '35px'
        }}
      >
        Comment
      </button>
      <div style={{ marginTop: "5px" }}>
        {comments.map((comment, index) => (
          <div
            key={index}
            style={{
              padding: "8px",
              backgroundColor: "#ffffff22",
              borderRadius: "25px",
              marginBottom: "5px",
            }}
          >
            {comment}
          </div>
        ))}
      </div>

      <hr style={{ borderColor: "#F7F6E7" }} />
    </div>
  );
};

const Posts = () => {
  const posts = [
    { id: 1, title: "Veggie Bliss", image: BellPeppers },
    { id: 2, title: "Sweet Tooth Heaven", image: Desserts },
    { id: 3, title: "Creamy Cottage Indulgence", image: Paneer },
    { id: 4, title: "Flaky Feast", image: Cheela },
    { id: 5, title: "Golden Crunch Magic", image: Cauliflower },
    { id: 6, title: "Cheese Delight", image: Buratta },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", 
        justifyContent: "center", 
        alignItems: "center", 
        gap: "10px",
        backgroundColor: "#E7E6E1",
        padding: "20px",
        width: "100%", 
        minHeight: "100vh", 
        overflow: "hidden", 
        boxSizing: "border-box",
      }}
    >
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            flex: "0 0 auto",
            width: "400px", // Fixed width for each post
          }}
        >
          <Post post={post} />
        </div>
      ))}

      {/* Top Icon Section */}
      <div style={{position: "absolute", left: "4%", top: '0%'}}>
          <Link to="/FirstPage">
            <div style={{width: '60px', height: '100px', borderBottomRightRadius: '30px',borderBottomLeftRadius: '30px', backgroundColor: '#F6F5F2'}}>
            <img
            src={HomeIcon}
            alt=""
            style={{
              marginLeft: '15px',
              marginTop: '50px',
              width: "30px",
              height: "auto",
              opacity: "40%",
            }}
            /></div>
          </Link>
        </div>

{/* Flower Decoration */}

        <div>
            <img
                src={Flower}
                alt="Flower"
                className="flower-rotate-clockwise"
                style={{
                    position: "absolute",
                    left: "8%",
                    top: "80%",
                    width: "60px",
                    height: "auto",
                    opacity: "30%",
                }}
            />

            <img
                src={Flower}
                alt="Flower"
                className="flower-rotate-clockwise"
                style={{
                    position: "absolute",
                    right: "8%",
                    top: "30%",
                    width: "60px",
                    height: "auto",
                    opacity: "30%",
                }}
            />

            <img
                src={Flower}
                alt="Flower"
                className="flower-rotate-clockwise"
                style={{
                    position: "absolute",
                    right: "8%",
                    top: "130%",
                    width: "60px",
                    height: "auto",
                    opacity: "30%",
                }}
            />

        </div>
    </div>
  );
};

export default Posts;