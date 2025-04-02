import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton, useColorMode } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack p="0" m="0">
      <Image src={logo} height="60px" p="0" m="0" />
      <SearchInput />
      <HStack padding="20px">
        <ColorModeButton />
        <Text whiteSpace="nowrap">
          {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
        </Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
