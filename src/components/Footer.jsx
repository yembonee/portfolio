import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Box
      display="flex"
      backgroundColor="blue"
      justifyContent="space-evenly"
      flexWrap="wrap"
      h="20vh"
      background="linear-gradient(0deg, rgba(0,119,84,1) 0%, rgba(123,82,208,1) 0%)"
    >
      <Heading
        fontSize="40px"
        fontWeight="700"
        color="white"
        textShadow="2px 2px 5px black"
        fontFamily="monospace"
      >
        Contacts and Socials
      </Heading>
      <div
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          bottom: "70px",
          display: "flex",
        }}
      >
        <div style={{ marginRight: "40px" }}>
          <SocialIcon
            style={{ height: 70, width: 70 }}
            url="https://www.linkedin.com/in/oluyemi-idowu-749925244/"
          />
        </div>
        <div style={{ marginRight: "40px" }}>
          <SocialIcon
            style={{ height: 70, width: 70 }}
            url="https://github.com/yembonee"
          />
        </div>
        <div style={{ marginRight: "40px" }}>
          <SocialIcon
            style={{ height: 70, width: 70 }}
            url="https://twitter.com/yembone_"
          />
        </div>
        <div style={{ marginRight: "40px" }}>
          <SocialIcon
            style={{ height: 70, width: 70 }}
            url="mailto:yemsonidowu@gmail.com"
          />
        </div>
        <div>
          <SocialIcon
            style={{ height: 70, width: 70 }}
            url="https://www.instagram.com/yemboneee/"
          />
        </div>
      </div>
    </Box>
  );
};

export default Footer;
