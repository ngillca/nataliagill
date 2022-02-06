import "./App.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ContentSlider(props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const pic = [props.sentImages[0],props.sentImages[1],props.sentImages[2],props.sentImages[3]]
  const obj = [
    {
      name: props.projectNames[0],
      image: props.sentImages[0],
    },
    {
      name: props.projectNames[1],
      image: props.sentImages[1],
    },
    {
      name: props.projectNames[2],
      image: props.sentImages[2],
    },
    {
      name: props.projectNames[3],
      image: props.sentImages[3],
    },
  ];

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <motion.div className="flex-container-subsetheading" animate={{ x: 10 }}>
        <h3>{props.title}</h3>
      </motion.div>

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {obj.map((o) => {
            return (
              <motion.div className="item zoom test-image" key={o}>
                <p>{o.name}</p>
                <img
                  src={o.image}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </motion.div>
            );
          })}
          
        </motion.div>
        
        <motion.div></motion.div>
      </motion.div>
    </>
  );
}
