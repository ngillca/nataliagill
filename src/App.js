import "./App.css";
import { motion } from "framer-motion";
import images from "./images";
import me from "./ngillprofile.png";
import Timeline from "./Timeline";
import ContentSlider from "./ContentSlider";

function App() {
  return (
    <>
      <motion.div className="flex-container title-area">
        <motion.div animate={{ x: 30 }}>
          <img
            src={me}
            style={{
              width: "200px",
              height: "250px",
              paddingRight: "80px",
              borderRadius: "80px",
            }}
          />
        </motion.div>
        <motion.div className="sub" animate={{ x: -40 }}>
          <h1>Hi, I'm Natalia! 👋</h1>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-container title-area title-area-fix"
        animate={{ x: 50 }}
      >
        <h1>
          I'm a Software Engineer with a passion for design and building
          digital solutions
        </h1>
      </motion.div>

      <motion.div animate={{ x: 50 }} className="flex-container title-area">
        <h2>Experience 👩🏽‍💻
 </h2>
      </motion.div>

      <Timeline />




      <div className="content-area">
        {/* <ContentSlider
          title="Digital Marketing"
          sentImages={images}
          projectNames={["ABC", "232", "XYZ", "aaa"]}
        />
        <ContentSlider
          title="Tools"
          sentImages={images}
          projectNames={["ABC", "232", "XYZ", "aaa"]}
        /> */}
      </div>
      {/* 
      <motion.div className='flex-container title-area'>
        <h2>Projects</h2>
      </motion.div>

      <motion.div className='flex-container title-area'>
        <h2>Graphic Design</h2>
      </motion.div>

      <motion.div className='flex-container title-area'>
        <h2>Digital Art {'&'} Storytelling</h2>
      </motion.div> */}
    </>
  );
}

export default App;
