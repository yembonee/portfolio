import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import picture1 from "./assets/pokemon-page.png";
import picture2 from "./assets/movie-clapperwall.jpg";
import picture3 from "./assets/myFlix-page.png";
import picture4 from "./assets/meet-app.png";
import picture6 from "./assets/myFlix-angular.png";
import picture5 from "./assets/native-project.png";
import profilePicture from "./assets/yemi-idowu.jpg";
import ProjectCard1 from "./components/ProjectCard1";
import ProjectCard2 from "./components/ProjectCard2";
import ProjectCard3 from "./components/ProjectCard3";
import ProjectCard4 from "./components/ProjectCard4";
import ProjectCard5 from "./components/ProjectCard5";
import ProjectCard6 from "./components/ProjectCard6";

function App() {
  return (
    <ChakraProvider bgColor="#2E2E2E ">
      <MainPage bgColor="#190041" imageSrc={profilePicture} />
      <Box
        overflow="hidden"
        display="flex"
        backgroundColor="#00223a"
        justifyContent="space-evenly"
        padding="50px"
        flexWrap="wrap"
        backgroundImage="linear-gradient(180deg, rgba(0,119,84,1) 0%, rgba(123,82,208,1) 100%)"
      >
        <ProjectCard1 imageSrc={picture1} />
        <ProjectCard2 imageSrc={picture2} />
      </Box>
      <Box
        display="flex"
        backgroundColor="#a73573"
        justifyContent="space-evenly"
        padding="50px"
        flexWrap="wrap"
        background="linear-gradient(0deg, rgba(0,119,84,1) 0%, rgba(123,82,208,1) 100%)"
      >
        <ProjectCard3 imageSrc={picture3} />

        <ProjectCard4 imageSrc={picture4} />
      </Box>

      <Box
        display="flex"
        backgroundColor="#a73573"
        justifyContent="space-evenly"
        padding="50px"
        flexWrap="wrap"
        background="linear-gradient(180deg, rgba(0,119,84,1) 0%, rgba(123,82,208,1) 100%)"
      >
        <ProjectCard5 imageSrc={picture5} />

        <ProjectCard6 imageSrc={picture6} />
      </Box>
      <Box bgColor="#190041">
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
