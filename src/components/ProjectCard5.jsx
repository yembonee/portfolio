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
      maxW="md"
      minW="sm"
      textShadow="2px 2px 5px black"
      marginBottom="50px"
    >
      <CardHeader color="white">
        <Flex spacing="3">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="lg">Native Mobile Chat App</Heading>
              <Text fontSize="18px" fontWeight="bold" color="white">
                January 14, 2024
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody color="white">
        <Text>
          This is a Chat app that is designed for mobile devices using React
          Native. The app will provide users with a chat interface and options
          to share images and their location. The setup information and
          instructions on how to use this app on your device are on the github
          repository.
        </Text>
      </CardBody>
      <CardBody color="white">
        <Heading fontSize="22px">Languages Used</Heading>
        <Text fontSize="16px" fontWeight="bold" color="white">
          Javascript | React | Expo
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
      </CardFooter>
    </Card>
  );
};

export default ProjectCard5;
