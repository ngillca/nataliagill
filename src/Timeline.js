import React from "react";
import "./timeline.css";
import { motion } from "framer-motion";
import TimelineData from "./TimelineData";
export default function Timeline() {
  return (
    <motion.div className="timeline timeline-container">
      <motion.div className="timeline timeline-content">
        <TimelineData
          heading={"Uber"}
          subheading={"Software Engineer Intern"}
          description={"Developed using React.js and exercised TDD using JEST "}
        />
        <TimelineData
          heading={"Headlion Group Inc"}
          subheading={"Frontend Developer"}
          description={"Composed graphics and created webflow using frontend technologies"}
        />
        <TimelineData
          heading={"California State Univeristy, Monterey Bay"}
          subheading={"Teaching Assistant"}
          description={"Taught fundamental software design concepts"}
        />
      </motion.div>
    </motion.div>
  );
}
