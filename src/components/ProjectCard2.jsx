import React from "react";
import {
  Box,
  Heading,
  Image,
  Link,
  Text,
  Button,
  Card,
  CardHeader,
  CardFooter,
  Flex,
  CardBody,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "./css/ProjectCard.css";

const ProjectCard2 = ({ imageSrc }) => {
  return (
    <Card
      borderColor="white"
      borderWidth="2px"
      bgColor="rgba(255, 255, 255, 0)"
      boxShadow="2px 3px 13px black"
      textShadow="2px 2px 5px black"
      maxW="400px"
      maxH="550px"
      marginBottom="50px"
      className="card"
      backgroundColor="rgba(55, 55, 55, .4)"
    >
      <CardHeader color="white">
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading className="heading-box" size="38px">
                Movie Api Project
              </Heading>
              <Text
                className="dates"
                size="18px"
                fontWeight="bold"
                color="white"
              >
                October 18, 2023
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody color="white">
        <Heading size="22px" className="languages">
          Languages Used
        </Heading>
        <Text className="language" size="16px" fontWeight="bold" color="white">
          JavaScript | HTML | Express | Mongoose
        </Text>
      </CardBody>
      <Image
        className="image"
        objectFit="cover"
        height="300px"
        src={imageSrc}
        alt="Chakra UI"
      />
      <CardFooter
        color="white"
        justifyContent="space-evenly"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Link
          color="white"
          href="https://github.com/yembonee/movie-api-project"
          isExternal
        >
          <Button
            color="white"
            flex="1"
            variant="ghost"
            _hover={{ bgColor: "rgba(152, 42, 163, 0.5)" }}
            leftIcon={<ExternalLinkIcon />}
          >
            Github Repo
          </Button>
        </Link>
        <Link href="https://rendermovieapi.onrender.com/" isExternal>
          <Button
            color="white"
            flex="1"
            _hover={{ bgColor: "rgba(152, 42, 163, 0.5)" }}
            variant="ghost"
            rightIcon={<ExternalLinkIcon />}
          >
            API Live Here
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard2;
