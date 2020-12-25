import { Flex, Heading, useColorModeValue, Box } from "@chakra-ui/react";
import { HeroContent } from "src/interfaces/index";

export const Hero: React.FunctionComponent<{
  content: HeroContent;
}> = ({ content }) => {
  const definitionColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box position="absolute" top="10px" width="100%" height="100%">
      <Flex
        justifyContent="center"
        flexDirection="column"
        maxW="min(65ch, 100%)"
        width={["75%", "50%"]}
        position="absolute"
        transform="translate(-50%,-50%)"
        top="50%"
        left="50%"
        textAlign="center"
      >
        <Heading size="xl" mb="4" fontWeight="400" fontFamily="serif">
          {content.heading}{" "}
        </Heading>

        <Heading
          size="md"
          fontWeight="300"
          letterSpacing="-0.02em"
          color={definitionColor}
          fontStyle="italic"
          lineHeight="1.4"
        >
          {content.message}
        </Heading>
      </Flex>
    </Box>
  );
};
