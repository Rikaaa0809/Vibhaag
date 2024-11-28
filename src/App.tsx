import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "../src/FirstPage";
import FourthPage from "../src/FourthPage";
import FifthPage from "../src/FifthPage";
import SixthPage from "../src/SixthPage";
import Projects from "../src/Projects";
import Video from "../src/Video";
import Posts from "../src/Posts";
// import ShowPosts from "../src/ShowPosts"
// import Chat from "../src/Chat"

function App() {
  return (
    
      <div>
        {/* <Chat /> */}
        
        <Routes>
          
          <Route path="/Vibhaag/" element={<FirstPage />} />
          <Route path="/FifthPage" element={<FifthPage />} />
          <Route path="/FourthPage" element={<FourthPage />} /> 
          <Route path="/SixthPage" element={<SixthPage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Posts" element={<Posts />} />
          
        
        </Routes>
        {/* <FourthPage/> */}
       {/* <PostApp />  */}

        <footer className="footer" style={{ background: '#e7e6e1', padding: '3px', justifyItems: 'center', alignItems: 'center' }}> {/* Footer section */}
          <p>&copy; {new Date().getFullYear()} Niharika Sharma. All Rights Reserved.</p> {/* Dynamic copyright year */}
        </footer>
      </div>
    
  );
}

export default App;
