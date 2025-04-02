import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortSelector = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="outline" size="sm">
          Order by:{currentSortSelector?.label || 'Relevance'}
          <IoMdArrowDropdown size="20px"></IoMdArrowDropdown>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
