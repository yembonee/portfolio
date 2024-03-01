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

const ProjectCard4 = ({ imageSrc }) => {
  return (
    <Card
      borderColor="white"
      borderWidth="2px"
      bgColor="rgba(255, 255, 255, 0)"
      boxShadow="2px 3px 13px black"
      maxW="md"
      minW="sm"
      textShadow="2px 2px 5px black"
      marginBottom="50px"
    >
      <CardHeader color="white">
        <Flex spacing="3">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="lg">Meet React App</Heading>
              <Text fontSize="18px" fontWeight="bold" color="white">
                November 17, 2023
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody color="white">
        <Text>
          This app is a progressive web application using React with a Test
          Driven development technique, using the Google Calendar Api to fetch
          upcoming events. With this Meet app, serverless functions are a prime
          foundation in making this application possible. It will be accessing
          the Google Calendar API, as well as using AWS Lambda for the cloud
          service provider.
        </Text>
      </CardBody>
      <CardBody color="white">
        <Heading fontSize="22px">Languages Used</Heading>
        <Text fontSize="16px" fontWeight="bold" color="white">
          JavaScript | HTML | React | Jest
        </Text>
      </CardBody>
      <Image objectFit="cover" height="300px" src={imageSrc} alt="Chakra UI" />

      <CardFooter
        justifyContent="space-evenly"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Link href="https://github.com/yembonee/meet" isExternal>
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
        <Link href="https://yembonee.github.io/meet/" isExternal>
          <Button
            color="white"
            flex="1"
            _hover={{ bgColor: "rgba(152, 42, 163, 0.5)" }}
            variant="ghost"
            rightIcon={<ExternalLinkIcon />}
          >
            Site Page
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard4;
