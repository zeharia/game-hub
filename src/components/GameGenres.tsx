import useGenres from "@/hook/useGenres";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "./services/image-url";

const GameGenres = () => {
  const { data, isLoading,error} = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item listStyle="none" key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GameGenres;
