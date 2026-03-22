import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// Import React Icons
import {
  FaGraduationCap,
  FaAward,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="section mt-16" id="about">
      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col gap-y-10 lg:flex-row">
          {/* Box wrapper with rounded borders, accent shadow, and transparent background */}
          <div className="w-full p-6 bg-transparent border-2 border-accent rounded-lg shadow-lg shadow-accent">
            {/* text */}
            <div className="flex-1">
              <h2 className="h2 text-accent">About me.</h2>
              <h3 className="h3 mb-4">
                I'm a Driven Technophile looking to secure a challenging job
                role in the IT sector.
              </h3>
              <p className="mb-6">
                <p className="text-xl font-bold">Greetings!</p>
                <br></br>
                <ul>
                  <li className="flex items-center gap-2 mb-2">
                    <FaLaptopCode className="min-w-fit" /> I'm Abhishek Goyal, an ambitious developer
                    with a B.Tech in Computer Science and Engineering from Lovely Professional University.
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaGraduationCap className="min-w-fit" /> I hold a strong academic track record, maintaining
                    an 8.55 CGPA.
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaAward className="min-w-fit" /> I am highly competitive in programming, having achieved Global Rank 16th
                    in CodeChef Starters 131 Div 4 and solved over 310 LeetCode problems.
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaLightbulb className="min-w-fit" /> My expertise includes Full-Stack Development (MERN, PHP) and
                    Data Structures & Algorithms in multiple languages.
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRocket className="min-w-fit" /> My goal is to build secure, scalable solutions and continually push
                    the boundaries of my technical capabilities.
                  </li>
                </ul>
              </p>

              {/* Contact button below stats */}
              {/* <div className="flex justify-center lg:justify-center"> */}
              {/* <button className="btn btn-lg">Contact me</button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        </motion.div>
    </section>
  );
};

export default About;
