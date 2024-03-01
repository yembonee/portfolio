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

const ProjectCard2 = ({ imageSrc }) => {
  return (
    <Card
      borderColor="white"
      borderWidth="2px"
      bgColor="rgba(255, 255, 255, 0)"
      boxShadow="2px 3px 13px black"
      maxW="md"
      textShadow="2px 2px 5px black"
      marginBottom="50px"
    >
      <CardHeader color="white">
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="lg">Movie Api Project</Heading>
              <Text fontSize="18px" fontWeight="bold" color="white">
                October 18, 2023
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody color="white">
        <Text>
          This is a server side web application that provides users with
          information about different movies, directors, and genres. Users will
          be allowed to register and make an account, update their information,
          along with adding and removing movies from their Favorite Movie's
          list.
        </Text>
      </CardBody>
      <CardBody color="white">
        <Heading fontSize="22px">Languages Used</Heading>
        <Text fontSize="16px" fontWeight="bold" color="white">
          JavaScript | HTML | Express | Mongoose
        </Text>
      </CardBody>
      <Image objectFit="cover" src={imageSrc} alt="Chakra UI" />

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
      </CardFooter>
    </Card>
  );
};

export default ProjectCard2;
