import './App.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from "./images";
import me from './ngillprofile.png'

function App() {

  const [width, setWidth] = useState(0);
  const carousel = useRef(); 

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (
    <>
    <motion.div className="flex-container">
      <motion.div animate={{ x:30}}>
      <img src={me} style={{width: "200px", height: "250px", paddingRight: "80px",  borderRadius: "80px"}}/>
      </motion.div>
      <motion.div className="sub" animate={{ x: -40}}>
      <h1>Hi I'm Natalia!</h1>
    </motion.div>

    </motion.div>
    <motion.div className="flex-container sub2" animate={{ x: 90}}>
      <h1>I'm a Software Engineer with a passion for design and building solutions for a variety of use-cases</h1>
    </motion.div>


    <motion.div className="flex-container-subheading" animate={{ x: 10}}>
      <h3>Business Solutions</h3>
    </motion.div>

    <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className="inner-carousel">
        { images.map(image => {
          return(
           <motion.div className="item" key={image}>
             <img src={image} alt="" style={{ width: "200px", height: "200px"}}/>
           </motion.div> 
          );  
        })}
      </motion.div>
    </motion.div>

    <motion.div className="flex-container-subsetheading" animate={{ x: 10}}>
      <h3>Digital Tools</h3>
    </motion.div>

    <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className="inner-carousel">
        { images.map(image => {
          return(
           <motion.div className="item" key={image}>
             <img src={image} alt="" style={{ width: "200px", height: "200px"}}/>
           </motion.div> 
          );  
        })}
      </motion.div>
    </motion.div>







    </>
    );
}

export default App;
