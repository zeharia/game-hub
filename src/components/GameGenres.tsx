import useGenres, { Genres } from "@/hook/useGenres";
import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "./services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GameGenres = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
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
            <Link
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="plain"
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GameGenres;
