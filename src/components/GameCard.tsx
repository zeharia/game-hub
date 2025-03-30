import { Card, Image } from "@chakra-ui/react";
import { Game } from "../hook/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root
      overflow={"hidden"}
      borderRadius="10px"
      bg="gray.800"
      borderColor="white"
    >
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
