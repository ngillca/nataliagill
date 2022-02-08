import React from "react";
import "./timeline.css";
import { motion } from "framer-motion";

export default function TimelineData(props) {
  return (
    <motion.div className='timeline timeline-data'>
      <ul>
        <li>
          <motion.div animate={{ x: 20 }}>
            <h1>{props.heading}</h1>
            <h3>{props.subheading}</h3>
            <p>{props.description}</p>
            <p className='learn-more-button'>Learn More</p>
          </motion.div>
        </li>
      </ul>
    </motion.div>
  );
}
