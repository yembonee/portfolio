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

const ProjectCard6 = ({ imageSrc }) => {
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
              <Heading size="lg">myFlix Angular App</Heading>
              <Text fontSize="18px" fontWeight="bold" color="white">
                February 6, 2024
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody color="white">
        <Text>
          This is a client side build for the myFlix app using the movie-api
          repository, but instead built with Angular. This site allows users to
          register to the site, login, view movies, add certain movies to their
          profile, and update their user information. It also allows users to
          remove their account entirly from the database.
        </Text>
      </CardBody>
      <CardBody color="white">
        <Heading fontSize="22px">Languages Used</Heading>
        <Text fontSize="16px" fontWeight="bold" color="white">
          TypeScript | HTML | SCSS | Angular
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
        <Link
          href="https://github.com/yembonee/myFlix-Angular-client"
          isExternal
        >
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
        <Link href="https://meek-alfajores-f2f0db.netlify.app/" isExternal>
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

export default ProjectCard6;
