import { Platform } from "@/hook/useGames";
import usePlatforms from "@/hook/usePlatforms";
import { HStack, Menu, Text } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger padding={3}>
        <HStack>
          <Text>{selectedPlatform?.name || "Platforms"}</Text>
          <IoMdArrowDropdown size="20px"></IoMdArrowDropdown>
        </HStack>
      </Menu.Trigger>
      <Menu.Content boxSize={300}>
        {data.map((platform) => (
          <Menu.Item
            onClick={() => onSelectedPlatform(platform)}
            value={platform.name}
            key={platform.id}
          >
            {platform.name}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default PlatformSelector;
