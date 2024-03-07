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

const ProjectCard5 = ({ imageSrc }) => {
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
                Native Mobile Chat App
              </Heading>
              <Text
                className="dates"
                size="18px"
                fontWeight="bold"
                color="white"
              >
                January 14, 2024
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody color="white">
        <Heading className="languages" size="22px">
          Languages Used
        </Heading>
        <Text size="16px" className="language" fontWeight="bold" color="white">
          Javascript | React | Expo
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
        justifyContent="space-evenly"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Link href="https://github.com/yembonee/native-app-proj" isExternal>
          <Button
            color="white"
            flex="1"
            _hover={{ bgColor: "rgba(152, 42, 163, 0.5)" }}
            variant="ghost"
            leftIcon={<ExternalLinkIcon />}
          >
            Github Repo
          </Button>
        </Link>
        <Link href="https://expo.dev/" isExternal>
          <Button
            color="white"
            flex="1"
            _hover={{ bgColor: "rgba(152, 42, 163, 0.5)" }}
            variant="ghost"
            rightIcon={<ExternalLinkIcon />}
          >
            Expo Sign Up Page
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard5;
