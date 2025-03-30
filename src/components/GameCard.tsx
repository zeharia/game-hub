import { Card, Image } from "@chakra-ui/react";
import { Game } from "../hook/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"} borderRadius="10px">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
