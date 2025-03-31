import usePlatforms from "@/hook/usePlatforms";
import { HStack, Menu, Text } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger>
        <HStack>
          <Text>Open</Text>
          <IoMdArrowDropdown></IoMdArrowDropdown>
        </HStack>
      </Menu.Trigger>
      <Menu.Content>
        {data.map((platform) => (
          <Menu.Item value={platform.name} key={platform.id}>
            {platform.name}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default PlatformSelector;
