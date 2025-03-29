import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} height="60px" />
      <Text>Nav Bar</Text>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
