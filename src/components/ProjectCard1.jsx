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

const ProjectCard1 = ({ imageSrc }) => {
  return (
    <Card
      borderColor="white"
      borderWidth="2px"
      bgColor="rgba(255, 255, 255, 0)"
      boxShadow="2px 3px 13px black"
      textShadow="2px 2px 5px black"
      maxW="md"
      marginBottom="50px"
    >
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="lg" color="white">
                Simple JS Pokedex Project
              </Heading>
              <Text fontSize="18px" fontWeight="bold" color="white">
                September 16, 2023
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text color="white">
          This project uses the Pokemon API, and displays a page of each and
          every pokemon, as well as their individual information in the form of
          a modal. This site was mainly built using Javascript, HTML, and CSS.
          It also uses the bootstrap framework to enhance the site even further.
          It was the first offcial project I had completed.
        </Text>
      </CardBody>
      <CardBody color="white" height="90px">
        <Heading fontSize="22px">Languages Used</Heading>
        <Text fontSize="16px" fontWeight="bold" color="white">
          JavaScript | HTML | CSS | Bootstrap
        </Text>
      </CardBody>
      <Image objectFit="cover" height="300px" src={imageSrc} alt="Chakra UI" />

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
          href="https://github.com/yembonee/simple-js-app"
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
        <Link href="https://yembonee.github.io/simple-js-app/" isExternal>
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

export default ProjectCard1;
