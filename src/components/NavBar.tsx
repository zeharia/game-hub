import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton, useColorMode } from "./ui/color-mode";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"} p="0" m="0">
      <Image src={logo} height="60px" p="0" m="0"/>
      <HStack padding="20px">
        <ColorModeButton />
        <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
