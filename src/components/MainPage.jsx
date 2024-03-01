import React from "react";
import { Heading, Image } from "@chakra-ui/react";

const MainPage = ({ imageSrc }) => {
  return (
    <section
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        padding: "0 10%",
        backgroundColor: "#982AA3",
        backgroundImage:
          "linear-gradient(0deg, rgba(0,119,84,1) 0%, rgba(123,82,208,1) 100%)",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <Heading
          overflow="auto"
          fontSize="72px"
          fontWeight="700"
          color="white"
          textShadow="2px 2px 5px black"
          fontFamily="monospace"
        >
          Oluyemi Idowu
        </Heading>
        <Heading
          marginBottom="20px"
          fontSize="36px"
          fontWeight="700"
          color="#982AA3"
          as="h3"
          fontFamily="monospace"
          textShadow="2px 2px 5px black"
        >
          Frontend Developer
        </Heading>
        <p
          style={{
            fontSize: "18.5px",
            color: "white",
            fontFamily: "monospace",
          }}
        >
          Hello, my name is Oluyemi Idowu, and I am a Junior Web Developer. I
          started seriously programming in September of 2023 and have been non
          stop since then. When I was growing up, I always knew I wanted a job
          that revolved around computers. From playing video games, to building
          my first PC, I knew it was my passion. At the start, I was self
          taught, and it wasn't long until I realized web development just felt
          natural. I then enrolled in a Web Development bootcamp where I
          enhanced my skils in multiple languages and increased my understanding
          of code to another level, as well as getting some projects under my
          belt. This journey has been nothing but amazing, and I can't wait to
          see what else is in store.
        </p>
      </div>
      <div>
        <Image
          borderRadius="full"
          position="relative"
          boxShadow="0 0 10px black"
          left="400px"
          width="400px"
          src={imageSrc}
        />
      </div>
    </section>
  );
};

export default MainPage;
