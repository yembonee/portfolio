import React from "react";
import { Heading, Text, Image } from "@chakra-ui/react";
import "./css/MainPage.css";

const MainPage = () => {
  return (
    <section
      className="section"
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        padding: "0 10%",
      }}
    >
      <div>
        <Heading
          className="heading"
          overflow="auto"
          fontSize="40px"
          fontWeight="700"
          color="white"
          textShadow="2px 2px 5px black"
          fontFamily="monospace"
        >
          Oluyemi Idowu
        </Heading>
        <Text
          className="heading2"
          marginBottom="20px"
          font-size="40px"
          color="white"
          fontWeight="700"
          fontFamily="monospace"
          textShadow="2px 2px 5px black"
        >
          FrontEnd / FullStack Developer
        </Text>
      </div>
    </section>
  );
};

export default MainPage;
