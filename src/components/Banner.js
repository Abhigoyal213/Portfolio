import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center lg:gap-x-9">
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[85px]"
            >
              ABHISHEK <span>GOYAL</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-6 text-[24px] lg:text-[45px] font-secondary
            font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "C++ Programmer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={80}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Driven Technophile passionate about software engineering, full-stack
              development, and algorithmic problem-solving. Constantly learning
              and building innovative solutions.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button
                className="btn btn-lg"
                style={{ display: "inline-flex", alignItems: "center" }}
                onClick={() => window.open("/Abhi_generalized_cv.pdf", "_blank")} // Open PDF in a new tab
              >
                Download CV
                <FiDownload style={{ marginLeft: "5px" }} />{" "}
                {/* Add margin for spacing */}
              </button>
            </motion.div>
            {/*socials*/}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/abhishekgoyal213/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/Abhigoyal213" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/Abhigoyal213/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode /> {/* LeetCode icon */}
              </a>
            </motion.div>
          </div>
          {/*text*/}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto rounded-full overflow-hidden mb-8 lg:mb-0"
          >
            <img src="/abhi.jpeg" alt="Avatar" className="rounded-full w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
