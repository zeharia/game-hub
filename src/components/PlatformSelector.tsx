import { Platform } from "@/hook/useGames";
import usePlatforms from "@/hook/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
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
      <Menu.Trigger>
        <Button variant="outline" size="sm" >
          {selectedPlatform?.name || "Platforms"}
          <IoMdArrowDropdown size="20px"></IoMdArrowDropdown>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
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
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
