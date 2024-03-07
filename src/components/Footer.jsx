import { Box, Heading } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        height: "40vh",
        margin: "auto",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignContent="center"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
        h="40vh"
      >
        <Heading
          display="flex"
          margin="auto"
          marginBottom="-40px"
          fontWeight="700"
          color="white"
          textShadow="2px 2px 5px black"
          fontFamily="monospace"
        >
          Contacts and Socials
        </Heading>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            backgroundColor: "rgba(55, 55, 55, 0.8)",
            textShadow: "2px 2px 5px black",
            borderRadius: "20px",
            padding: "10px",
            margin: "auto",
            alignItems: "center",
          }}
        >
          <div>
            <SocialIcon
              style={{ height: 35, width: 35, margin: "10px" }}
              url="https://www.linkedin.com/in/oluyemi-idowu-749925244/"
            />
          </div>
          <div>
            <SocialIcon
              style={{ height: 35, width: 35, margin: "10px" }}
              url="https://github.com/yembonee"
            />
          </div>
          <div>
            <SocialIcon
              style={{ height: 35, width: 35, margin: "10px" }}
              url="https://twitter.com/yembone_"
            />
          </div>
          <div>
            <SocialIcon
              style={{ height: 35, width: 35, margin: "10px" }}
              url="mailto:yemsonidowu@gmail.com"
            />
          </div>
          <div>
            <SocialIcon
              style={{ height: 35, width: 35, margin: "10px" }}
              url="https://www.instagram.com/yemboneee/"
            />
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Footer;
