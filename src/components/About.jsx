import React from "react";
import { Box } from "@chakra-ui/react";
import "./css/About.css";
import profilePic from "../assets/yemi-idowu.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="imageContainer">
        <img src={profilePic} className="profImage" alt="profile" />
      </div>
      <div className="aboutText">
        <Box>
          <p
            style={{
              fontSize: "18px",
              textAlign: "center",
              backgroundColor: "rgba(55, 55, 55, 0.8)",
              textShadow: "2px 2px 5px black",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            I am a Web Developer from the Pacific Northwest. I have been
            seriously programming for around 6 months now. I have been off and
            on for around a year and half. This last year I applied for a Web
            Developer Bootcamp, and I am set to finish in Spring 2024. This
            portfolio is a sum of the projects I have completed for my time
            during the bootcamp.
          </p>
        </Box>
      </div>
    </section>
  );
};

export default About;
