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
            className="pTag"
            style={{
              fontSize: "18px",
              textAlign: "center",
              backgroundColor: "rgba(55, 55, 55, 0.8)",
              textShadow: "2px 2px 5px black",
              borderRadius: "20px",
              padding: "10px",
              display: "flex",
              flexFlow: "nowrap",
              maxHeight: "580px",
              overflow: "scroll",
            }}
          >
            Hello, it’s a pleasure to meet you. My name is Yemi, short for
            Oluyemi, and I am an emerging Web Developer with a diverse
            background. I am based out of Aberdeen and Vanouver, Washington. The
            Pacific Northwest has been a pivotal place for me growing my
            passion. I’ve worked various jobs, from a Pizza Delivery Guy to a
            Planet Fitness Team Member, where I honed essential skills like
            communication, teamwork, and problem-solving. In 2022, I began my
            programming journey, initially self-teaching before enrolling in a
            coding bootcamp. There, I mastered web development fundamentals such
            as HTML, CSS, and JavaScript, and advanced my skills with React,
            Angular, and AWS. I even created my own API! Now, with a solid
            foundation and a growing portfolio, I am ready to take my career to
            the next level. I am excited to bring my creativity and technical
            skills to innovative projects and look forward to new opportunities
            and collaborations
          </p>
        </Box>
      </div>
    </section>
  );
};

export default About;
