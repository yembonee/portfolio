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

const ProjectCard3 = ({ imageSrc }) => {
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
              <Heading size="lg">myFlix Client App</Heading>
              <Text fontSize="18px" fontWeight="bold" color="white">
                October 24, 2023
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody color="white">
        <Text>
          This is the client-side build for the myFlix app using the API
          server-code from the myFlix API page. This site allows users to
          register to the site, review movies, add movies to their favorite,
          remove those movies from thier favorite, as well as updating and
          deleting their account.
        </Text>
      </CardBody>
      <CardBody color="white">
        <Heading fontSize="22px">Languages Used</Heading>
        <Text fontSize="16px" fontWeight="bold" color="white">
          JavaScript | HTML | React | Bootstrap
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
        <Link href="https://github.com/yembonee/myFlix-client" isExternal>
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
        <Link
          href="https://loquacious-gaufre-5f35f2.netlify.app/login"
          isExternal
        >
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

export default ProjectCard3;
