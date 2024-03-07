import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import MainPage from "./components/MainPage";
import About from "./components/About";
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
    <div className="app">
      <ChakraProvider>
        <div className="main-page">
          <MainPage imageSrc={profilePicture} />
        </div>
        <div>
          <About />
        </div>
        <div className="box">
          <Box
            marginTop="70px"
            overflow="hidden"
            display="flex"
            justifyContent="space-evenly"
            padding="25px"
            flexWrap="wrap"
          >
            <ProjectCard1 imageSrc={picture1} />
            <ProjectCard2 imageSrc={picture2} />
            <ProjectCard3 imageSrc={picture3} />
          </Box>
        </div>

        <Box
          overflow="hidden"
          display="flex"
          justifyContent="space-evenly"
          padding="25px"
          flexWrap="wrap"
        >
          <ProjectCard4 imageSrc={picture4} />
          <ProjectCard5 imageSrc={picture5} />
          <ProjectCard6 imageSrc={picture6} />
        </Box>
        <Box
          overflow="hidden"
          display="flex"
          justifyContent="space-evenly"
          padding="25px"
          flexWrap="wrap"
        >
          <Footer />
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
