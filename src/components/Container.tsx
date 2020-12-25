import { Flex, FlexProps } from "@chakra-ui/react";

export const Container: React.FunctionComponent<FlexProps> = (props) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      mx="auto"
      {...props}
    />
  );
};
