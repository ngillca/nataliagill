import "./App.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ContentSlider(props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const pic = [
    props.sentImages[0],
    props.sentImages[1],
    props.sentImages[2],
    props.sentImages[3],
  ];
  const obj = [
    {
      name: props.projectNames[0],
      image: props.sentImages[0],
      url: "google.com",
    },
    {
      name: props.projectNames[1],
      image: props.sentImages[1],
      url: "google.com",
    },
    {
      name: props.projectNames[2],
      image: props.sentImages[2],
      url: "google.com",
    },
    {
      name: props.projectNames[3],
      image: props.sentImages[3],
      url: "google.com",
    },
  ];

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <motion.div className="flex-container-subsetheading" animate={{ x: 10 }}>
        <h2>{props.title}</h2>
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
              <motion.div className="item " key={o}>
        
                  <img
                    src={o.image}
                    alt=""
                    style={{ width: "200px", height: "200px" }}
                  />
                
   <a href={o.url}><p className="zoom">{o.name}</p></a>
                
               
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div></motion.div>
      </motion.div>
    </>
  );
}
