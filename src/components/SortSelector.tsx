import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="outline" size="sm">
          Order by:
          <IoMdArrowDropdown size="20px"></IoMdArrowDropdown>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem value="Relevance">Relevance</MenuItem>
            <MenuItem value="Date added">Date added</MenuItem>
            <MenuItem value="Name">Name</MenuItem>
            <MenuItem value="Release date">Release date</MenuItem>
            <MenuItem value="Popularity">Popularity</MenuItem>
            <MenuItem value="Average rating">Average rating</MenuItem>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
